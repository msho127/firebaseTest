// NavBar.tsx
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/register">新規登録</Link> | 
      <Link to="/login">ログイン</Link> | 
      <Link to="/home">ホーム</Link>
    </nav>
  );
}
