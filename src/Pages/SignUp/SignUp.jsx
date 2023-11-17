import { useContext } from 'react';
import signUpImg from '../../assets/others/authentication2.png'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const SignUp = () => {
    const navigate = useNavigate()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const logged = result.user;
                console.log(logged);

                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('user update profile');
                        Swal.fire({
                            title: "User crate successfully!",
                            text: "You clicked the button!",
                            icon: "success"
                        });
                        reset()
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
    }

    return (
        <>
            <Helmet>
                <title>BISTRO BOSS | SingUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 gap-4 lg:text-left">
                        <h1 className="text-4xl ml-28 font-bold">Sign Up now!</h1>
                        <div className='flex justify-center  mt-10'>
                            <img className='' src={signUpImg} alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Type here" className="input input-bordered" required />
                                {errors.name && <span className="text-red-600">name is required</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-600">email is required</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true, maxLength: 20,
                                    minLength: 6,
                                    pattern: /[a-zA-Z0-9!@#$%^&*]{6,16}/
                                })} name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password && <span className="text-red-600">password is required</span>}
                                {errors.minLength?.type === "required" && (
                                    <p className='text-red-600'>password minimum 6 character</p>
                                )}
                                {errors.maxLength?.type === "required" && (
                                    <p className='text-red-600'>password max 20 character</p>
                                )}
                                {errors.pattern?.type === "required" && (
                                    <p className='text-red-600'>one number and one special character</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SingUp" />
                            </div>
                        </form>
                        <small className='text-center text-xs my-4'>Alrady have a account <Link to='/login'>Login</Link></small>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;