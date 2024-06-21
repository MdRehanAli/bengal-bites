import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://bengal-bites-server.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useAuth()
    // request interceptor to add Authorization header for every secure call to the api 

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log("request stopped by interceptors", token)
        config.headers.Authorization = `Bearer ${token}`
        return config
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    })

    // inter4cepts 401 and 403 status 
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status
        // console.log("Status Code code in the interceptors", status)

        // for 401 or 403 logOut th user and move the user to the login 
        if (status === 401 || status === 403) {
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error);
    })

    return axiosSecure
};

export default useAxiosSecure;