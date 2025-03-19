import React from 'react';
import { useDispatch } from 'react-redux';

const SocialIcons = () => {
  const handleNavigation = url => {
    window.open(url, '_blank');
  };

  return (
    <div className='flex justify-center gap-x-[18px] mb-9'>
      <button
        className='hover:shadow-md'
        onClick={() => handleNavigation('https://www.google.com')}
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

// import { FaFacebookF } from 'react-icons/fa';
// import { GrGoogle } from 'react-icons/gr';
// import { BsTwitterX } from 'react-icons/bs';
// import { PiGithubLogoFill } from 'react-icons/pi';
// const SocialIcons = () => {
//   return (
//     <div className='flex items-center justify-center gap-3 mt-5'>
//       <FaFacebookF
//         // onClick={handleLogin}
//         size={24}
//         className='cursor-pointer text-blue-800'
//       />
//       <BsTwitterX
//         // onClick={signInWithTwitter}
//         size={24}
//         className='cursor-pointer text-gray-500'
//       />
//       <PiGithubLogoFill
//         // onClick={handleGitHubLogin}
//         size={24}
//         className='cursor-pointer text-red-600'
//       />
//       <GrGoogle
//         // onClick={handleSignIn}
//         // size={24}
//         className='cursor-pointer text-blue-500 bg-white rounded-md p-2 w-10 h-10 px-3 '
//       />
//     </div>
//   );
// };

// export default SocialIcons;
