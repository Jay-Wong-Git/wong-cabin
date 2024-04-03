import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createUpdateCabin } from "../../services/apiCabins";

export function useUpdateCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createUpdateCabin(newCabinData, id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["cabins"] });
      toast.success("The cabin successfully updated");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isUpdating, updateCabin };
}
