import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";


const SocialLogin = () => {

    const { googleSignIn } = useAuth()

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then (result => {
            console.log(result.user)
        })
    }

    return (
        <div className="px-8 pb-4">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;