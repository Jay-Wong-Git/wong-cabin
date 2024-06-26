import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi(email, password),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      const tempName = data?.user?.email?.split("@")[0];
      toast.success(`Weicome back, ${tempName}`);
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.log(error);
      toast.error("Provided email or password is incorrect");
    },
  });

  return { isLoading, login };
}
