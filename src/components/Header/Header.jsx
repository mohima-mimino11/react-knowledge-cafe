import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <header className='px-[320px] mt-12 flex justify-between items-center border-b-2 border-gray-300'>
       <h1 className='text-4xl exo-2 font-bold mb-8'>Knowledge Cafe</h1>
       <img src={profile} className='mb-8' alt="profile-pic" />
      
    </header>
  );
};

export default Header;