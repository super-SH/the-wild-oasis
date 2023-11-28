import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export function useDeleteBooking() {
  const queryClinet = useQueryClient();

  const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success('Booking successfully deleted');

      queryClinet.invalidateQueries({
        queryKey: ['bookings'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteBooking, isDeleting };
}
