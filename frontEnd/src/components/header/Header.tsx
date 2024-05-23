import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className='w-full h-16 bg-black text-white font-mono px-6 flex justify-between items-center'>
        <h1 className=' md:flex md:justify-center text-4xl font-mono font-medium text-transparent bg-clip-text bg-gradient-to-r 
                      from-purple-400 to-pink-600'> 
                        CodeCrack
                </h1>

        <div className='p-2 flex justify-between'> 
        <button onClick={() => navigate('/signin')} className='mx-2 border-2 px-4 py-2 rounded-md'> SignIn </button>
        <button onClick={() => navigate('/signin')} className='mx-2  px-4 py-2 rounded-md bg-gradient-to-r 
                             from-pink-400 to-pink-600'> SignUp </button>
        </div>
    </div>
  )
}

export default Header
