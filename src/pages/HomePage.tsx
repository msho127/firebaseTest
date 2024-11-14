// HomePage.tsx
import { auth } from "../libs/firebase";
import { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) navigate("/login");
    });
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <h1>ホームページ</h1>
      {user ? <p>ようこそ、{user.email}さん</p> : <p>ログインしていません</p>}
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
}
