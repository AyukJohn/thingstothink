<template>

    <div class="d-flex flex-row ">
        
        <div class="sidebar">
            

            <img src="../icons/logo.svg" alt="" class="mt-4">

            <h6 class="menu">Menu</h6>

            <ul class="navbar-nav">

                <li class="d-flex flex-row">
                 <img class="img2" src="../icons/layout-grid.svg" alt="" >
                   
                    <!-- <a class="nav-link" href="#" style="margin-left: 10%;">DashBoard</a> -->
                    <router-link to="/dashboard" class="nav-link" style="margin-left: 10%;">Dashboard</router-link>


                </li>

                <li class="d-flex flex-row mt-2">
                    
                    <img class="img2" src="../icons/user-account.svg" alt="" >


                    <!-- <a class="nav-link" href="#" style="margin-left: 10%;">Users</a> -->
                    <router-link to="/dashboard/users" class="nav-link" href="#" style="margin-left: 10%;">Users</router-link>

                </li>

                <li class="d-flex flex-row mt-2">
                    <img class="img2" src="../icons/user-question-01.svg" alt="" >

                    <router-link to="/dashboard/consultation" class="nav-link" href="#" style="margin-left: 10%;">Consultation</router-link>

                    <!-- <a class="nav-link" :class="img2" href="#" style="margin-left: 10%;">Consultation</a> -->
                </li>


             

                <li class="d-flex flex-row mt-2">
                    <img class="img2"  src="../icons/dashboard.svg" alt="" >

                   
                    <router-link to="/dashboard/survey" class="nav-link" href="#" style="margin-left: 10%;">Surveys</router-link>

                </li>



                <li  @click="logout" class="clickable" style="margin-top: 200%;">
                    <img class="img2"  src="../icons/logout.svg" alt="" >
                    logout
                </li>

            </ul>

        </div>




        <div class="header">

          
            <nav class="navbar navbar-expand-sm">
                <a class="navbar-brand" href="#" style="padding-left: 2%;">
                    {{ routeText }}
                </a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    
                    <form class="form-inline my-2 my-lg-0" style="margin-left: 40% !important;">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    </form>


                    <div class="d-flex flex-row">
                        <div class="align-self-center" style="margin-left: 20% !important;margin-top: 0% !important;">
                        
                        ads
                        </div>

                        <div class="align-self-center" style="margin-left: 20% !important;">
                            <p class="pt-3">Welcome Administrator</p>
                        </div>

                        <div class="align-self-center" style="margin-left: 20% !important;">Dropdown</div>


                    </div>

                 
                </div>
            </nav>


            <div>

                

                <div class="container" v-if="!isUsersRoute && !isConsultationRoute && !isSurveyRoute">

                    <div class="mt-3">
                        <h4 style="padding-left: 1%;">Welcome, <span>John</span></h4>

                        <div>
                            <p style="padding-left: 1%; font-weight: 100;">{{ formattedDate }}</p>
                        </div>

                    </div>

                    <!-- <div class="container"> -->
                        <div class="d-flex justify-content-center">

                          
                                <div class="card" style="width: 19rem;">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <a href="#" class="card-link">
                                              <img src="" alt="">
                                              <img src="@/assets/tabler_user.svg" alt="" >
                                            
                                            </a>
                                            <!-- <a href="#" class="b">Another link</a> -->
                                            <button class="btn btn-small text-light" style="margin-left: 55%; background-color: #D6A12B">
                                                <router-link to="/dashboard/users" class="nav-link" href="#">View All</router-link>
                                            </button>
                                        </div>
                                        <h5 class="card-title mt-3">Users</h5>
                                        <h6 class="card-subtitle mb-2 mt-3 text-body-secondary">{{ userCount }}
                                        </h6>
                                    </div>
                                </div>
                            

                            
                                <div class="card cardo" style="width: 19rem;">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <a href="#" class="card-link">
                                             <img src="@/assets/bx_calendar.svg" alt="" >

                                            </a>
                                            <!-- <a href="#" class="b">Another link</a> -->
                                            <button class="btn btn-small text-light" style="margin-left: 55%; background-color: #D6A12B;">
                                                <router-link to="/dashboard/consultation" class="nav-link" href="#">View All</router-link>                                           
                                            </button>
                                        </div>
                                        <h5 class="card-title mt-3">Consultations</h5>
                                        <h6 class="card-subtitle mb-2 mt-3 text-body-secondary">{{ BookingCount  }}</h6>
                                    </div>
                                </div>
                           


                                
                                
                                <div class="card cardo" style="width: 19rem;">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <a href="#" class="card-link">
                                                <img src="@/assets/fluent_form-new-20-regular.svg" alt="" >
                                            </a>
                                            
                                            <button class="btn  btn-small text-light" style="margin-left: 55%; background-color: #D6A12B">
                                                <router-link to="/dashboard/survey" class="nav-link" href="#">Surveys</router-link>                                     
                                            </button>
                                        </div>
                                        <h5 class="card-title mt-3">Surveys</h5>
                                        <h6 class="card-subtitle mb-2 mt-3 text-body-secondary">{{ surveyCount }}</h6>
                                    </div>
                                </div>
                                
                                <div class="card cardo" style="width: 19rem;">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <a href="#" class="card-link">
                                             <img src="@/assets/iconoir_lot-of-cash.svg" alt="" >

                                            </a>
                                            <!-- <a href="#" class="b">Another link</a> -->
                                            <button class="btn  btn-small text-light" style="margin-left: 55%; background-color: #D6A12B">View All</button>
                                        </div>
                                        <h5 class="card-title mt-3">Cash in Wallet</h5>
                                        <h6 class="card-subtitle mb-2 mt-3 text-body-secondary">${{ amountInWallet }}</h6>
                                    </div>
                                </div>
                        </div>
                    <!-- </div> -->




                    <div class="container mt-5">
                        <div class="d-flex">
                            <h5>Recent Transactions</h5>
                            <a href="#" class="btn btn-light" style="margin-left: 73%;"><h6>all transaction</h6></a>
                        </div>
                       
                        <table class="table mt-3">
                            <thead>
                                <tr>
                                <th scope="col">PaymentId</th>
                                <th scope="col">Visa Category</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">....</th>



                                </tr>
                            </thead>
                            <tbody>
                                <tr  v-for="transaction in list" :key="transaction.id">
                                    <th scope="row">{{ transaction.id }}</th>
                                    <td>{{ transaction.visaType }}</td>
                                    <td>{{ transaction.fullName }} </td>
                                    <td>{{ transaction.created_at }}</td>
                                    <td>{{ transaction.status }}</td>
                                    <td>{{ transaction.totalPrice }}</td>
                                    <td>....</td>
                                </tr>
                            </tbody>
                        </table>


                        <nav aria-label="Page navigation example" style="margin-left: 60%;">
                            <ul class="pagination">
                                <li v-bind:class="[{ disabled: !pagination.prev_page_url }]" class="page-item">
                                    <a class="page-link" href="#" @click.prevent="fetchUserList(pagination.prev_page_url)">Previous</a>
                                </li>

                                <li class="page-item disabled">
                                    <a class="page-link text-dark" href="#">Page {{ pagination.current_page }} of {{ pagination.last_page }}</a>
                                </li>

                                <li v-bind:class="[{ disabled: !pagination.next_page_url }]" class="page-item">
                                    <a class="page-link" href="#" @click.prevent="fetchUserList(pagination.next_page_url)">Next</a>
                                </li>
                            </ul>
                        </nav>


                    </div>



                </div>

                
              
                <div v-if="isConsultationRoute">
                <router-view></router-view>
                </div>

                <div v-if="isUsersRoute">
                <router-view></router-view>
                </div>

                <div v-if="isSurveyRoute">
                <router-view></router-view>
                </div>

               


            </div>

        </div>

     </div>



</template>



<script>

    export default{
     
        name: 'Dashboard',


        data(){
            return{
            currentDate: new Date(),


            userCount: 0, 
            BookingCount: 0, 
            // amountInWallet: [],

            list: [],
            pagination: {},


            linkText: 'Dashboard'

            };

        },



        computed:{
            // Check if the current route contains '/users'
            
            isConsultationRoute() {
                return this.$route.path.includes('/consultation');
            },

            isUsersRoute() {
                return this.$route.path.includes('/users');
            },

            isSurveyRoute() {
                return this.$route.path.includes('/survey');
            },



            routeText() {
                switch (this.$route.name) {
                    case 'users':
                    return 'User';
                    case 'consultation':
                    return 'Consultation';
                    case 'survey':
                    return 'Survey';
                    default:
                    return 'Dashboard';
                }
            },
           
            
            // isUsersRoute

            formattedDate() {
                const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const months = [
                    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
                ];

                const dayOfWeek = daysOfWeek[this.currentDate.getDay()];
                const month = months[this.currentDate.getMonth()];
                const day = this.currentDate.getDate();
                const year = this.currentDate.getFullYear();

                return `${dayOfWeek}, ${day}, ${month}, ${year}`;
            }

        },



        mounted(){
            let admin = localStorage.getItem('adminlogin');
            // console.log(user);
            if (!admin){
                this.$router.push({name:'admin'})
            };

            this.fetchUserApplication()

            const storedUserCount = localStorage.getItem('userCount');
            if (storedUserCount){
                this.userCount = storedUserCount; // Convert to number
            };



            const BookingCount = localStorage.getItem('bookingCount');
            if (BookingCount) {
                this.BookingCount = BookingCount; // Convert to number
            }


            const surveyCount = localStorage.getItem('surveyCount');
            if (surveyCount) {
                this.surveyCount = surveyCount; // Convert to number
            }


            const amountInWallet = localStorage.getItem('amountInWallet');
            if (amountInWallet) {
                this.amountInWallet = amountInWallet; // Convert to number
            }

        },




        methods:{

            logout(){
                localStorage.removeItem('adminlogin');
                this.$router.push({name:'admin'})

                this.isLoggedIn = false;
            },



                async fetchUserApplication(page_url){
                    try {

                        const token = localStorage.getItem('adminlogin');
                        page_url = page_url || 'http://127.0.0.1:8000/api/v1/admin/getUserVisaApplications';

                        const res = await fetch(page_url ,{
                            method: "GET",
                            headers: {
                                "Accept": "application/json",
                                "Authorization": `Bearer ${token}`
                            }
                        });

                        if (!res.ok) {
                            throw new Error('Network was Not ok');
                        }
                        
                        const data = await res.json();
                        console.log(data);
                        this.list = data.data;
                        localStorage.setItem('applicationCount', data.application_count);

                        // console.log(list);
                        this.makePagination(data.meta, data.links);

                        } catch (error) {
                            console.log('There was a pronlem fetching the list:',error.message);
                        }

                    },


                    makePagination(meta, links) {
                        let pagination = {
                            current_page: meta.current_page,
                            last_page: meta.last_page,
                            next_page_url: links.next,
                            prev_page_url: links.prev
                        };

                        this.pagination = pagination;
                    },


                },






        }
    


</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');



    .clickable{
        cursor: pointer;
    }


    th{
        font-weight: 100;
    }

    td{
        font-weight: bolder;
    }

    .sidebar{
        /* background-color: blue; */
        width: 20%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;

    }

    .header{
        width: 100%;
        height: 10vh;
        background-color: #fff;

    }

    .navbar-nav{
        margin-top: 5%;
    }

    .navbar{
        height: 13vh;
        background-color: #fff;
    }

    .menu{
        padding-top: 20%;
        margin-right: 35%;
    }   

    li{
        width: 140px !important;
        /* background-color: aqua; */
    }


    .card{
        border: none;
        border-radius: 0%;
        
    }
    
    
    .cardo{
        
        position: relative; /* Set position to relative */
    }
    .cardo::before {
        content: ''; /* Add content for the pseudo-element */
        position: absolute;
        top: 30%;
        bottom: 0;
        left: 0; /* Position from the left */
        width: 1px;
       
        background-color: rgb(207, 205, 205); /* Set color of the border */
        /* Adjust height as needed */
        height: 30%;
}


 .btn,h4,h5,h6{
    font-family: 'Inter', serif;

  }



</style>