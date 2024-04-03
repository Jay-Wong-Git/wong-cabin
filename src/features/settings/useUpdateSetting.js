import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["settings"] });
      toast.success("The setting successfully updated");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isUpdating, updateSetting };
}
