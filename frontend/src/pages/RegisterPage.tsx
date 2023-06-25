import { useState, useEffect } from "react";
import { useSignupMutation } from "../features/auth/authApiSlice";
import { setUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

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
