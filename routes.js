import Home from './pages/home/Home.vue';
import Login from './pages/login/Login.vue';
import NewPost from './pages/posts/NewPost.vue'
import Aulateste from './pages/exp/Aula.vue'

export default [
    //Homepage
    {path: '/', name: 'home', component: Home},
    //Login
    {path: '/login', name: 'login', component: Login},
    //Posts
    {path: '/posts/new', name: 'single-post', component: NewPost},
    //Teste aula
    {
        path: '/teste', name: 'teste_aula', component: Aulateste
    }

]