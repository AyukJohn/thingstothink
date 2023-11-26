/*eslint-disable*/
import { createRouter,createWebHashHistory} from "vue-router";


import Admin from '../components/HomePage.vue'
import DashBoard from '../components/DashBoard/DashBoard.vue'
import Users from '../components/DashBoard/usersList.vue'

// import Loader from '../components/extras/Loader.vue'




const routes = [

    {
      path: "/",
      name: "admin",
      component: Admin,
    //   meta: {auth:false}
    },

    {
        path: "/dashboard",
        name: "dashboard",
        component: DashBoard,
        children: [
            {
              path: 'users', // Nested route path
              component: Users
            }
          ]
    },

    {
        path: "/users",
        name: "users",
        component: Users,
    },


    // {
    //   path: "/loader",
    //   name: "loader",
    //   component: Loader,
    // },


];




const router = createRouter({

    history: createWebHashHistory(),
    routes,

})

export default router;