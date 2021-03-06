export default {
    // *

    // ________________________________________________________line____________________________________________________________
    state: {
        posts: []
    },


    // ________________________________________________________line____________________________________________________________
    // *

    // Чтобы менять СТЕЙТ, НУЖНО ИСПОЛЬЗОВАТЬ МУТАЦИИ 
    mutations: {
        // ПРИМЕР    updatePosts(первый параметр всегда-стейт, второй параментр- то что передаем)
        updatePosts(state, posts) {
            state.posts = posts
        },

        // добавление нового поста из компонента пост - форм
        createNewPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    // 
    // ________________________________________________________line____________________________________________________________


    // ACTIONS используют для общения с back-end
    // ЭКШЕНЫ АСИНХРОННЫ
    // Когда экшены определили - записали , тоже ничего не выведится в браузер. Их нужно так же вызывать!!!!
    actions: {
        // ПРИМЕР async fetchPostsBackEnd(первый аргумент - контекст, что передаем --- ctx,
        // второй аргумент --> принимаем объект или данные которые передаем)
        // у контекста ctx - есть метод commit 
        async fetchPostsBackEnd(ctx, limit = 3) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)
            const posts = await res.json()

            // пример ctx.commit(первый аргумент - название МУТАЦИИ которую хотим вызвать, второй аргумент данные)
            ctx.commit('updatePosts', posts)
        }

    },
    // *


    // ________________________________________________________line____________________________________________________________
    // GETTERS ТОЛЬКО СИНХРОННЫЕ
    getters: {

        // валидация постов
        // validPosts(state) {
        //     return state.posts.filter(post => {
        //         return post.title && post.body
        //     })
        // },

        allPosts(state) {
            return state.posts
        },

        // возвращает длинну постов
        postCount(state) {
            return state.posts.length
        },

        // Как внутри ГЕТТОРОВ ОБРАТИТЬСЯ К ДРУГОМУ ГЕТТЕРУ? к validPosts(state) например
        // Через второй параметр !
        //ПРИМЕР postCount(state, getters - этот) {
        //     return getters.validPosts.length
        // },

    }

    // ________________________________________________________line____________________________________________________________
}