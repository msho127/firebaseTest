// import { signInWithPopup } from 'firebase/auth';
// import { auth , provider } from './libs/firebase';
// import { useAuthState } from "react-firebase-hooks/auth"

// import { User as FirebaseUser } from 'firebase/auth';

// export default function Home() {
//   const [user] =useAuthState(auth);
//   return (
//     <div>
//       {user ? (
//         <>
//           <UserInfo user={user}/>
//           <SignOutButton/>
//         </>
//       ) : (
//         <div className='box'>
//           <SignInButton/>
//           <Login/>
//         </div>
//       )}
//     </div>
//   )
// }

// function Login(){
//   return (
//     <>
//       <input type="email" placeholder='メールアドレス'/>
//       <input type='password' placeholder='パスワード'/>
//       <input type='submit' value="送信"/>
//     </>
//   )
// }


// //サインイン
// function SignInButton(){
//   const singInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//   };
//   return(
//     <button onClick={singInWithGoogle}>
//       <p>グーグルでサインイン</p>
//     </button>
//   )
// }

// //サインアウト
// function SignOutButton(){

//   return(
//     <button onClick={() => auth.signOut()}>
//       <p>サインアウト</p>
//     </button>
//   )
// }

// // //ユーザーインフォ
// // function UserInfo({ user }) {
// //   return (
// //     <>
// //       <img src={user.photoURL || ''} alt="User profile" />
// //       <p>{user.displayName}</p>
// //     </>
// //   );
// // }




// // ユーザー情報表示
// type UserInfoProps = {
//   user: FirebaseUser;
// };

// function UserInfo({ user }: UserInfoProps) {
//   return (
//     <>
//       {user.photoURL && <img src={user.photoURL} alt="ユーザーの写真" />}
//       <p>{user.displayName}</p>
//     </>
//   );
// }
