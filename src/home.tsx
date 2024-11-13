import { signInWithPopup } from 'firebase/auth';
import { auth , provider } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth"


export default function Home() {
  const [user] =useAuthState(auth);
  return (
    <div>
      {user ? (
        <>
          <UserInfo user={user}/>
          <SignOutButton/>
        </>
      ) : (
        <SignInButton/>
      )}
    </div>
  )
}

//サインイン
function SignInButton(){
  const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
  };
  return(
    <button onClick={singInWithGoogle}>
      <p>グーグルでサインイン</p>
    </button>
  )
}

//サインアウト
function SignOutButton(){

  return(
    <button onClick={() => auth.signOut()}>
      <p>サインアウト</p>
    </button>
  )
}

//ユーザーインフォ
function UserInfo({ user }) {
  return (
    <>
      <img src={user.photoURL || ''} alt="User profile" />
      <p>{user.displayName}</p>
    </>
  );
}