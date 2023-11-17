import {useMutation, useQuery, useQueryClient} from '@tanstack/vue-query'
import {get, update} from "@/demos/hookRemote/apis";

export const useCount = () => {
    const queryClient = useQueryClient()
    const {mutate,status}= useMutation({
        mutationKey: ["addCount"],
        mutationFn: () => update(),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get"]})
        }
    })

    const { data, isFetching } = useQuery({
        queryKey: ["get"],
        queryFn: async() => {
            const data = await get();
            return data.data.count;
        }
    })
    return {data, isFetching, status, mutate}
}
