import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useAuthRedirection() {
  const navigate = useNavigate();

  const { user } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  console.log(user, "user in hook");
}
