import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SectionTitle/SocialLogin/SocialLogin";

const Login = () => {


    const [disabled, setDisabled] = useState(true)

    const { signIn } = useContext(AuthContext)

    const Navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";
    console.log("state in the location of login Page:", location.state)



    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                Swal.fire({
                    title: "User Login Successfull",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                    }
                });
                Navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const userCaptchaValue = e.target.value
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false)
        }
        // else {
        //     setDisabled(true)
        // }
    }

    return (
        <div>
            <Helmet>
                <title>Bengal Bites | Login</title>
            </Helmet>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col md:flex-row">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>                                    </label>
                                </div>
                                <div className="form-control">
                                    <LoadCanvasTemplate />
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the captcha" className="input input-bordered" required />

                                    {/* <button className="btn btn-outline btn-accent btn-xs">Validate</button> */}
                                </div>
                                <div className="form-control mt-6">
                                    {/* {TO do : apply disable for re captcha} */}
                                    <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className="text-center mb-8">New Here? <small className="text-blue-800 text-lg"> <Link to="/signup"> Create a new Account</Link></small></p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;