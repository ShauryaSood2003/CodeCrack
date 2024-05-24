import { useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");
  return (
    <div className='w-full h-16 bg-black text-white font-mono px-6 flex justify-between items-center'>
      <h1 className=' md:flex md:justify-center text-4xl font-mono font-medium bg-clip-text text-transparent bg-pink-600'>
        CodeCrack
      </h1>
     
      <div className='p-2 flex justify-between'>
        {userInfo ? (
          <>
            <button onClick={() => navigate('/problemlist')}
              className='mx-2  px-4 py-2 rounded-md bg-gradient-to-r 
          from-pink-400 to-pink-600'
            >
              Go to Problem List
            </button>

            <img className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mx-4' src='https://github.com/shadcn.png' />
          </>
        ) : (
          <>
            <button onClick={() => navigate('/signin')}
              className='mx-2 border-2 px-4 py-2 rounded-md'>
              SignIn
            </button>
            <button onClick={() => navigate('/signup')}
              className='mx-2  px-4 py-2 rounded-md bg-gradient-to-r 
              from-pink-400 to-pink-600'>
              SignUp
            </button>
          </>
        )}

      </div>
    </div>
  )
}

export default Header
