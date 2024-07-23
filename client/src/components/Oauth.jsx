import {GoogleAuthProvider,signInWithPopup,getAuth} from 'firebase/auth';
import {app} from '../firebase';
import {useDispatch} from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice';

export default function OAuth() {
      
    const dispatch = useDispatch();

    const handleGoogleClick =async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result= await signInWithPopup(auth,provider);
            console.log(result);

            const res=await fetch('/api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    name:result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL,
                }),
            })
            const data=await res.json();
            console.log('check:',data);
            dispatch(signInSuccess(data))
        } catch (error) {
            console.log('not loging with ggle',error);
        }
    }


  return (
    <button type='button' onClick={handleGoogleClick} 
    className='bg-red-700 text-white rounded-lg p-3 
    uppercase hover:opacity-75' >continue with google</button>
  )
}
