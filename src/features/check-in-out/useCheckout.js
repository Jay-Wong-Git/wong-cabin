import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ active: true });
      toast.success(`Booking #${data.id} successfully checked out`);
    },
    onError: () => {
      toast.error("There was an error while checking out");
    },
  });

  return { checkout, isCheckingout };
}
