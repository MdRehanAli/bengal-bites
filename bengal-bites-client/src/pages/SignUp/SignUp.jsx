import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {

    const axiosPublic = useAxiosPublic()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const { createUser, updateUserProfile } = useContext(AuthContext)

    const Navigate = useNavigate()

    const onSubmit = (data) => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('User Profile info updated')

                        // create user entry in the data base  

                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("user added to the database")
                                    reset()

                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Registration Completed",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    Navigate("/")
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }
    // console.log(watch("example"))

    return (
        <div>
            <Helmet>
                <title>Bengal Bites | SignUp</title>
            </Helmet>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col md:flex-row">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <h1 className="text-5xl font-bold">Sign Up</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" {...register("PhotoURL", { required: true })} name="PhotoURL" className="input input-bordered" />
                                    {errors.PhotoURL && <span className="text-red-600">Photo URL is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/ })} placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === "minLength" && (
                                        <p className="text-red-600">Password must be 6 characters.</p>
                                    )}
                                    {errors.password?.type === "maxLength" && (
                                        <p className="text-red-600">Password must be Less than 20 characters.</p>
                                    )}
                                    {errors.password?.type === "pattern" && (
                                        <p className="text-red-600">Password must have one Uppercase, One lowercase, one number and one Special character.</p>
                                    )}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className="text-center mb-8">Already have an account? <small className="text-blue-800 text-lg"> <Link to="/login"> Log In</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;