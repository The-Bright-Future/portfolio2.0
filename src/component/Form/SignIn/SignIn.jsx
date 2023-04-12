import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/UseContext/UseContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const {signInUser, setLoading} = useContext(AuthContext);
    const location = useLocation();
    const [verify, setVerify] = useState(false)
    let from = location.state?.from?.pathname || "/";
    const [error, setError] = useState("")
    const navigate = useNavigate();

     const handleSignIn =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
         .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setError("");
            if(user.emailVerified === true){
                setLoading(false);
                navigate(from, { replace: true });

            }
            else{
                navigate('/sign_in');
                 setError('Please check your email and verify your account')
            }
           
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }
    
    return (
        <div className="form-bg py-20">
            
            <div className="relative px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex items-center justify-between">
                <div className="flex items-center md:w-auto w-full md:h-auto h-full  mt-16">
                    <form onSubmit={handleSignIn} className='md:h-[400px] w-full  mx-auto' >
                        <h2 className="text-5xl font-[400]">SignIn Account</h2>
                        <span className="">create account? <Link className="text-blue-500 mt-4" to="/sign_up">sign up</Link></span>
                        <br /> <br />
                         <p className="text-red-500 text-center">{error}</p>
                          <input required className="bg-[#22243eb6] border-0 rounded-xl py-3 w-full mt-2" type="text" name="email" placeholder='enter your email' /><br />

                            <input required className="bg-[#22243eb6] border-0 rounded-xl py-3 w-full mt-6" type="password" name="password" placeholder='enter your password' />
                            <input required type="submit" value="Sign in" className="mt-6 bg-[#2e71af] cursor-pointer text-black font-bold w-full rounded-lg py-3 p-2" />
                    </form>
                </div>
                <div className="">

                </div>
            </div>
        </div>
    );
};

export default SignIn;