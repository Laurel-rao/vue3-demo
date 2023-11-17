<script setup>
import {useMutation, useQuery, useQueryClient} from '@tanstack/vue-query'
import axios from "axios";
const queryClient = useQueryClient()

const { isPending, isError, error, mutate, isSuccess, status} = useMutation({
  mutationFn: () => axios.get('http://127.0.0.1:5000/update'),
  onSuccess: (() => {
    queryClient.invalidateQueries({queryKey: ["get"]})
  })
}
)

const { data:count, isFetching } = useQuery({
  queryKey: ["get"],
  // 第一种 await async
  // queryFn: async () => {
  //   const data = await axios.get('http://127.0.0.1:5000/get')
  //   console.log(data.data.count)
  //   return data.data.count
  // }

  queryFn: () => axios.get("http://127.0.0.1:5000/get").then( data => {
    return data.data.count
  })
})

</script>

<template>
  <span v-if="isPending">Adding todo...</span>
  <span v-else-if="isError">An error occurred: {{ error.message }}</span>
  <span v-else-if="isSuccess">Todo added!</span>
  <hr>
  <span>{{status}}</span>
  <hr>
  <button @click="mutate">Create Todo</button>
  <span>query: {{count}}</span>
  <hr>
  <span v-if="isFetching">getting todo...</span>
  <span v-else>get success</span>
</template>
