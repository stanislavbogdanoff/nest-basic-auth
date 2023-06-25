import { useEffect, useState } from "react";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { setUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.auth);

  console.log(user, "user");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useLoginMutation();

  const handleLogin = async (): Promise<void> => {
    const res = await login({ email: email, password: password });
    dispatch(setUser({ ...res }));
  };

  return (
    <>
      <input
        type="email"
        placeholder="email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handleLogin()}>Login</button>
    </>
  );
};

export default LoginPage;
