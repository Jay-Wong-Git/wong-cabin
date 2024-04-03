import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createUpdateCabin } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createUpdateCabin,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["cabins"] });
      toast.success("New cabin successfully created");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isCreating, createCabin };
}
