import { useEffect, useRef, useState } from "react";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import signUpImg from '../../assets/others/authentication2.png'


const SignUp = () => {
    const [disabled, setDisabled] = useState(true);

    const captchaRef = useRef(null);

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newLogin={name, email, password}
        console.log(newLogin);
    }
    const handleValideteCaptcha = ()=>{
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 gap-4 lg:text-left">
                    <h1 className="text-4xl ml-28 font-bold">Sign Up now!</h1>
                    <div className='flex justify-center  mt-10'>
                    <img className='' src={signUpImg} alt="" />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Type here" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} name="captcha" placeholder="Type here" className="input input-bordered" required />
                            <button onClick={handleValideteCaptcha} className="btn btn-outline btn-xs mt-4">Validated</button>
                        </div>
                        <div className="form-control mt-6">
                        <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;