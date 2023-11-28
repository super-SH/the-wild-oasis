import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useDeleteCabin() {
  const queryClinet = useQueryClient();

  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success('Cabin successfully deleted');

      queryClinet.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteCabin };
}
