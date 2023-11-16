import {ref} from "vue";

// 注意: 该变量声明需要在 组合式API 外面
const count = ref(1);

export const useCount = () => {
    // 注意: 写在这里，父组件将不会更新
    // const count = ref(1);
    const addCount = () => {
        count.value++;
    }
    return {
        count, addCount
    }
}
