<template>
  <div id="app">

    <PostForm/>
    <hr>

  <h1>{{postCount}}</h1>


  <!-- ПЕРЕДАЕМ ГЕТТЕРЫ ALLPOSTS -  -->
  <div class="post" v-for="post in allPosts" :key="post.id">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
  </div>

  </div>
</template>

<script>

import PostForm from './components/PostForm.vue'


// МЕТОД HELPER Для получения GETTERS - mapGetters
import {mapGetters, mapActions} from 'vuex';

// КОГДА МЫ ПЕРЕДАЛИ GETTERS, все подключили и вставили функцию в v-for,
// то данные отрисосваться не должны !!!!!!
export default {
  name: 'App',
  components: {
    PostForm
  },


  // ЧТОБЫ ПОЛУЧАТЬ ГЕТТЕРЫ ИЗ STORE СОЗДАЕМ COMPUTED
computed:
  // Функция которая принимает массив со значением строк.
  // Названия строк должны совпадать с названием геттеров в STORE
mapGetters(['allPosts', 'postCount']),


// METHODS
methods:mapActions(['fetchPostsBackEnd']),
// end METHODS


// MOUNTED
  async mounted() {
    // Сюда передаю ЭКШЕН ИЗ СТОРА - fetchPostsBackEnd
    // и используем для этого dispatch
    // иногда используют вариант указанный ниже, либо упрощенный вариант
    // создают methods:mapActions(['fetchPostsBackEnd']) и
    //  import {mapGetters, mapActions} from 'vuex';

    // this.$store.dispatch('fetchPostsBackEnd')


// Вариант упрощенный от mapActions - fetchPostsBackEnd()
// в функции 8 это кол-во постов=> см async fetchPostsBackEnd(ctx, limit = 3) в экшенах-сторе
this.fetchPostsBackEnd(8)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.post {
  border: 1px red solid;
  width: 500px;
  margin: 0 auto;
}
</style>
