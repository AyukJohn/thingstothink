/*eslint-disable*/
import { createRouter,createWebHashHistory} from "vue-router";


import Admin from '../components/HomePage.vue'
import DashBoard from '../components/DashBoard/DashBoard.vue'
import Users from '../components/DashBoard/usersList.vue'
import UsersTodo from '../components/DashBoard/usersTodo.vue'
import usersProfile from '../components/DashBoard/usersProfile.vue'


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
            component: Users,
           
          }
        ]
  },

    {
        path: "/dashboard",
        name: "dashboard",
        component: DashBoard,
        children: [
            {
              path: 'usersTodo', // Nested route path
              component: UsersTodo,
             
            }
          ]
    },

    {
      path: "/dashboard",
      name: "dashboard",
      component: DashBoard,
      children: [
          {
            path: 'usersProfile', // Nested route path
            component: usersProfile,
           
          }
        ]
  },

    {
        path: "/users",
        name: "users",
        component: Users,
        children: [
          {
            
            path : 'usersTodo',
            component: UsersTodo,
          }
        ]
    },

    {
      path: "/usersTodo",
      name: "usersTodo",
      component: UsersTodo,
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