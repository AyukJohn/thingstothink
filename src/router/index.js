import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "@/components/Auth/LoginPage.vue"
import MainPage from '@/components/Dashboard/MainPage.vue'
import DashboardPage from '@/components/Dashboard/DashboardPage.vue'
import StudentInfo from '@/components/Dashboard/StudentInfo.vue'
import FacultyInfo from '@/components/Dashboard/FacultyInfo.vue'
import AcademicsInfo from "@/components/Dashboard/AcademicInfo.vue"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: 'login',
        component: LoginPage
      },
      
      {
        path: '/main',
        name: 'mainpage',
        component: MainPage,
        children: [
          
          {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardPage,
          },

          {
            path: '/studentInfo',
            name: 'studentInfo',
            component: StudentInfo,
          },

          {
            path: '/facultyInfo',
            name: 'facultyInfo',
            component: FacultyInfo,
          },

          {
            path: '/academicsInfo',
            name: 'academicsInfo',
            component:AcademicsInfo
          },

        ]
      }
  ]
})



export default router