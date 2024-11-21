// RegisterPage.tsx
import { useState } from "react";
import { auth, googleProvider } from "../libs/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("登録成功！");
      navigate("/home");
    } catch (error) {
      setError("登録に失敗しました。もう一度お試しください。");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Googleでのログインに成功しました！");
      navigate("/home");
    } catch (error) {
      setError("Googleでのログインに失敗しました。もう一度お試しください。");
    }
  };

  return (
    <div>
      <h1>新規登録</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleRegister}>登録</button>
      <button onClick={handleGoogleLogin}>Googleでログイン</button>
      {error && <p>{error}</p>}
    </div>
  );
}
