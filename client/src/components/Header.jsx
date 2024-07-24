import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-blue-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3' >
            <Link to='/'>
            <h1 className='font-bold'> MERN APP</h1>            
            </Link>
            <ul className='flex gap-4 items-center'>
                <Link to='/' ><li>Home</li></Link>
                <Link to='/about' ><li>About</li></Link>
                <div className='flex flex-col items-center'>
                        <Link to='/profile'>
                            {currentUser ? (
                                <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
                            ) : (
                                <li>Sign In</li>
                            )}
                        </Link>
                        {/* <div className='text-xs mt-1'>
                            {currentUser ? currentUser.username : 'user'}
                        </div> */}
                    </div>          
             </ul>
        </div>
    </div>
  )
}
