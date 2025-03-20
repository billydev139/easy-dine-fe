import React from "react";
import {
  auth,
  provider,
  facebookProvider,
  signInWithPopup,
  githubProvider,
  twitterProvider,
} from "../firebase";
//import showToast from "../../../utils/toaster";
import { useNavigate } from "react-router-dom";
import { axiosWithoutToken } from "../utils/axiosInstance";
//import PATHS from "../../../routes/path";

const SocialIcons = () => {
  const handleNavigation = url => {
    window.open(url, '_blank');
  }; 
  const navigate = useNavigate();
  // login and signup with google
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        const response = await axiosWithoutToken.post("/auth/google", {
          idToken: user.accessToken,
        });
        localStorage.setItem("token", response?.data?.token);
        if (response?.data?.token && response?.data?.message) {
          // showToast("success", response?.data?.message);
          navigate('/dashboard');
        }
      }
    } catch (error) {
      console.error("Error during Google sign-in", error);
    }
  };

  return (
    <div className='flex justify-center gap-x-[18px] mb-9'>
      <button
        className='hover:shadow-md'
        onClick={ handleSignIn}
      >
        <img
          className='size-[60px]'
          src='../src/assets/images/google-icon.png'
          alt='Google'
        />
      </button>

      <button
        className='hover:shadow-md'
        onClick={() => handleNavigation('https://www.linkedin.com')}
      >
        <img
          className='size-[60px]'
          src='../src/assets/images/linkedin-icon.png'
          alt='LinkedIn'
        />
      </button>

      <button
        className='hover:shadow-md'
        onClick={() => handleNavigation('https://www.facebook.com')}
      >
        <img
          className='size-[60px]'
          src='../src/assets/images/facebook-icon.png'
          alt='Facebook'
        />
      </button>

      <button
        className='hover:shadow-md'
        onClick={() => handleNavigation('https://twitter.com')}
      >
        <img
          className='size-[60px]'
          src='../src/assets/images/x-icon.png'
          alt='Twitter'
        />
      </button>
    </div>
  );
};

export default SocialIcons;
