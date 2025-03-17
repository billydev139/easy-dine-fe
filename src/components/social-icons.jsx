const SocialIcons = () => {
  return (
    <div className='flex justify-center gap-x-[18px] mb-9'>
      <img
        className='hover:shadow-md size-[60px]'
        src='../src/assets/images/google-icon.png'
        alt='Google'
      />
      <img
        className='hover:shadow-md size-[60px]'
        src='../src/assets/images/linkedin-icon.png'
        alt='Linkedin'
      />
      <img
        className='hover:shadow-md size-[60px]'
        src='../src/assets/images/facebook-icon.png'
        alt='Facebook'
      />
      <img
        className='hover:shadow-md size-[60px]'
        src='../src/assets/images/x-icon.png'
        alt='Twitter'
      />
    </div>
  );
};

export default SocialIcons;
