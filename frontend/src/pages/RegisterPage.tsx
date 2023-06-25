import { useState } from "react";
import { useSignupMutation } from "../features/auth/authApiSlice";
import { setUser } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import useAuthRedirection from "../hooks/useAuthRedirection";

const RegisterPage = () => {
  const dispatch = useDispatch();

  useAuthRedirection();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signup] = useSignupMutation();

  const handleSignup = async (): Promise<void> => {
    const res = await signup({ name: name, email: email, password: password });
    dispatch(setUser({ ...res }));
  };

  return (
    <>
      <input
        type="name"
        placeholder="name..."
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={() => handleSignup()}>Register</button>
    </>
  );
};

export default RegisterPage;
