import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bengal-bites-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;