<template>
    <HeaderPage />

        <div class="row">

            <div class="col-3">
                <div class="wrapper">
                    
                    <div>
                        <img class="logo" src="https://networks.au-ibar.org/show/university-of-uyo-ikpa-rd-520103-uyo-nigeria/image/2008090514-1112-3161-640x480/AU+REC+logos+-+2022-03-31T132418.163.png" alt="">
                    </div>

                    <ul class="link-wrapper">

                        <li>
                            <router-link to="/dashboard" class="router">
                                <i class="fa-solid fa-gauge"></i> 
                                <span>Dashboard</span>
                            </router-link>
                        </li>

                        <li class="mt-3">
                            <router-link to="/studentInfo"  class="router mt-2">
                                <i class="fa-solid fa-school"></i>
                                 <span>Student Information</span>
                            </router-link>
                        </li>

                        <li class="mt-3">
                            <router-link to="/facultyInfo" class="router info2">
                                <i class="fa-solid fa-building-columns"></i>
                                <span>Faculty Information</span>
                            </router-link>
                        </li>


                        <li class="mt-3">
                            <router-link to="/academicsInfo" class="router info3">
                                <i class="fa-solid fa-book-open"></i>
                                <span>Academic Information</span>
                            </router-link>
                        </li>

                    </ul>

                </div>
            </div>

            <div class="col-8">
                
                <div  v-if="!isStudentInfoRoute && !isFacultyInfoRoute && !isAcademicInfoRoute">
                    <!-- <router-view></router-view> -->
                    <DashboardPage />
                </div>

               <div v-if="isStudentInfoRoute">
                <router-view></router-view>
                </div>

                <div v-if="isFacultyInfoRoute">
                <router-view></router-view>
                </div>

                <div v-if="isAcademicInfoRoute">
                <router-view></router-view>
                </div>

            </div>

        </div>

</template>



<script>
import HeaderPage from "./extra/HeaderPage.vue";
import DashboardPage from "./DashboardPage.vue";

export default {

    components:{
        HeaderPage,
        DashboardPage

    },

  data() {
    return {
      page: ''
    };
  },

  computed: {
    isStudentInfoRoute() {
      return this.$route.path.includes('/studentInfo');
    },

    isFacultyInfoRoute() {
      return this.$route.path.includes('/facultyInfo');
    },

    isAcademicInfoRoute() {
      return this.$route.path.includes('/academicsInfo');
    },
  },
};
</script>







<style scoped>

    .row{
        margin-right: 0%;
        font-family: "Gupter", serif;
    }

    .wrapper{
        height: 88vh;
        width: 17vw;
        background-color: #ffffff;
        margin: 0%;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    }

    .link-wrapper{
        list-style: none;
        padding-top: 30%;
        display: block !important;
    }

    .router{
        text-decoration: none !important;
    }

    .router span{
        padding-left: 8%;
    }

    span{
        font-size: small;
        color: #00762d;
    }

    span:hover{
        color: #000;
        font-size: medium;
    }

    i{
        color: #00762d;
    }


    .col-8 {
        height: 90vh;
        overflow-y: auto;
    }


    .col-8::-webkit-scrollbar {
        width: 5px; 
    }

    .col-8::-webkit-scrollbar-track {
        background: #dadada;
    }

    .logo{
        width: 10vw;
        height: 15vh;
        margin-left: 15%;
    }

</style>