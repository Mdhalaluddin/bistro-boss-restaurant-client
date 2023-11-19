import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../../hooks/UseAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialIcon = () => {
    const {googleSignIn}= UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const googleInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
            }
            axiosPublic.post('/users', googleInfo)
            .then(res => {
                console.log(res.data);
            })
            navigate('/')

        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div>
            <div className="text-center mb-4">
                <button onClick={handleGoogleSignIn} className="btn p-4">
                    <FaGoogle className="mr-4"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialIcon;