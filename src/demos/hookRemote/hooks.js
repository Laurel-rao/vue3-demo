import {ref} from "vue";
import {useMutation, useQuery, useQueryClient} from '@tanstack/vue-query'
import {get, update} from "@/demos/hookRemote/apis";

// 注意: 该变量声明需要在 组合式API 外面
const info = ref("");

export const useCount = () => {
    const queryClient = useQueryClient()
    // todo queryKey数组意味什么，useQuery 放在外面 和 放在里面有什么区别, queryKey 放在外面能同步更新两个组件吗
    const mutation
        = useMutation({
        mutationKey: ["addCount"],
        mutationFn: async() => {
            console.log("update")
            info.value = await update();
        },
        onSuccess: () => {
            console.log("同步更新数据")
            queryClient.invalidateQueries({queryKey: ["get"]})
        }
    })

    const { data, isFetching} = useQuery({
        queryKey: ["get"],
        queryFn: async() => {
            const data = await get();
            console.log("1111", data.data.count);
            return data.data.count;
        }
    })

    return {
        data,
        isFetching,
        mutation
    }
}


