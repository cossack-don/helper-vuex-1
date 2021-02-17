<template>
<!-- Cоздание поста это синхронная операция - используем мутации - не обращаемся на бэк -->
  <form @submit.prevent="submit">
      <input type="text" placeholder="title" v-model="title">
      <input type="text" placeholder="body" v-model="body">
      <button type="submit">create post</button>
  </form>
</template>

<script>
// подключение мутаций из vuex
import {mapMutations} from 'vuex';

export default {
data() {
    return {
        title:'',
        body:''
    }
},

// METHODS
methods: {
    // Используем методы для определения мутаций и передаем название (createNewPost) как в сторе
    ...mapMutations(['createNewPost']),

    submit() {
        // createNewPost- передаем объект с данными
        // CREATENEWPOST - ЭТО МУТАЦИЯ
        this.createNewPost({
            title:this.title,
            body:this.body,
            id:Date.now()
        })
        this.title = this.body = ''
    }
}
}
</script>

<style >
input {
    display: block;
    width: 200px;
    margin: 0 auto;
    border: 1px solid blue;
    padding: 10px;
    margin-bottom: 10px;
}

button {
    background: yellow;
    padding: 10px;
    cursor: pointer;
}
</style>