<script setup>
// import { isReadonly, reactive, ref, watch } from 'vue';

// const props = defineProps({
//     label : {label: String},
//     typeInput: {typeInput: String, default: 'text'},
//     error: {error : Boolean, default: false},
//     errorText: {errorText: String, default: 'Error'},
// })
// const emit = defineEmits(['input-return'])
// let inputValue = ref('')

// console.log(props)
</script>

<template>
    <!-- <div class="col-6">
        <div>
            <label :for="`${props.label.toLowerCase().trim()}-form`">{{ props.label + ' :' }}</label>
            <input v-model="inputValue" @focus="props.error" @blur="$emit('input-return', inputValue)" :type="props.typeInput" :id="`${props.label.toLowerCase()}-form`" class="form-control">
        </div>
        <div v-show="props.error" class="alert alert-danger">
            {{ errorText }}
        </div>

    </div> -->
</template>

<style scoped>

</style>