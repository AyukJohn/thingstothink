/*eslint-disable*/
import { createRouter,createWebHashHistory} from "vue-router";


import Admin from '../components/HomePage.vue'
import DashBoard from '../components/DashBoard/DashBoard.vue'
import Users from '../components/DashBoard/usersList.vue'
import Consultation from '../components/DashBoard/Consultation.vue'
import Survey from '../components/DashBoard/Survey.vue'
import Profile from '../components/DashBoard/userProfile.vue'
import UserConsultation from '../components/DashBoard/userConsultation.vue'




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
            path: "consultation",
            name: "consultation",
            component: Consultation,
          },

          {
            path: "users",
            name: "users",
            component: Users,
            children:[

                {   path: ":userId",
                    name: "userProfile",
                    component: Profile,
                    // props: true, 
                    children:[

                      {
                        path: "userConsultation",
                        name: "userConsultation",
                        component: UserConsultation,
                        // props: true,
                      },


                    ]

                },

            ]
          },

          {
            path: "survey",
            name: "survey",
            component: Survey,
          },

        ]
    },

    // {
    //     path: "/users",
    //     name: "users",
    //     component: Users,
    // },

    // {
    //   path: "/consultation",
    //   name: "consultation",
    //   component: Consultation,
    // },


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