// LoginPage.tsx
import { useState } from "react";
import { auth } from "../libs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("ログイン成功！");
      navigate("/home");
    } catch (error) {
      setError("ログインに失敗しました。もう一度お試しください。");
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
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
      <button onClick={handleLogin}>ログイン</button>
      {error && <p>{error}</p>}
    </div>
  );
}
