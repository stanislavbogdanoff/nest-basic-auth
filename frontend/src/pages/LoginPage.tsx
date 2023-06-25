import { useState } from "react";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { setUser } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import useAuthRedirection from "../hooks/useAuthRedirection";

const LoginPage = () => {
  const dispatch = useDispatch();

  useAuthRedirection();

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
