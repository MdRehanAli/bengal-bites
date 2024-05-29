import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    const captchaRef = useRef(null)

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)
    }

    const handleValidateCaptcha = () => {
        const userCaptchaValue = captchaRef.current.value
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
                                    <input type="text" ref={captchaRef} name="captcha" placeholder="Type the captcha" className="input input-bordered" required />

                                    <button onClick={handleValidateCaptcha} className="btn btn-outline btn-accent btn-xs">Validate</button>
                                </div>
                                <div className="form-control mt-6">
                                    <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;