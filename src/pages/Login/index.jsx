import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/model1/dashboard`, { replace: true });
  };
  return (
    <div>
      <h1>我是登录页面</h1>
      <button onClick={handleLogin}>登录</button>
    </div>
  );
}

export default Login;
