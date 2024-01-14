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


                    <div class="d-flex flex-row" style="margin-left: 7%;">

                        <!-- Example split danger button -->
                           


                        <div class="align-self-center">
                            <img class="img2"  src="../icons/bell.svg" alt="" >

                        </div>

                        <div class="align-self-center" style="margin-left: 20% !important;margin-top: 0% !important;">
                            <img class="img2"  src="../icons/Avatar.svg" alt="" >
                        </div>

                        <div class="align-self-center" style="margin-left: 8% !important; margin-top: 10%;">
                           <h6> {{ adminName ? adminName.name : 'No user profile found' }}.</h6>
                            <p style="color: #64748B;">Administrator</p>
                        </div>




                        <div class="d-inline-block align-self-center dropdown" style="margin-left: 20% !important;">
                            <div class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <!-- <div>                                
                                <img class="img2" src="../icons/chevron-down.svg" alt="">
                                </div> -->
                            </div>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>



                        


                    </div>

                 
                </div>
            </nav>


            <div>

                

                <div class="container" v-if="!isUsersRoute && !isConsultationRoute && !isSurveyRoute">

                    <div class="mt-3">
                        <h4 style="padding-left: 1%;">Welcome, <span>{{ adminName ? adminName.name : 'No user profile found' }}.</span></h4>

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
                                                <router-link to="/dashboard/survey" class="nav-link" href="#">View</router-link>                                     
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
                                    <td>
                                        <button @click="openModal(transaction.id)" class="btn btn-light">
                                            ....
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>



                        <div class="modal" ref="exampleModal" tabindex="-1" role="dialog">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title text-center">Application Info</h4>
                                        <button @click="closeModal" type="button" class="close btn btn-danger"  aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">

                                        <!-- <p>Consultation ID: {{ selectedConsultation }}</p> -->
                                        <form>

                                            <div class="form-group">
                                                <label><h6>Email</h6></label>
                                                <input class="form-control mt-2"  v-model="getTransactionById(selectedConsultation).email" aria-describedby="emailHelp" readonly>
                                            </div>

                                            <div class="form-group mt-4">
                                                <label><h6>Phone Number</h6></label>
                                                <input  v-model="getTransactionById(selectedConsultation).phoneNumber" class="form-control mt-2" readonly>
                                            </div>


                                            <div class="form-group mt-4">
                                                <label><h6>Residential Address</h6></label>
                                                <input  v-model="getTransactionById(selectedConsultation).residentialAddress" class="form-control mt-2" readonly>
                                            </div>


                                            <div class="form-group mt-4">
                                                <label><h6>Occupation</h6></label>
                                                <input  v-model="getTransactionById(selectedConsultation).occupation" class="form-control mt-2" readonly>
                                            </div>

                                            <div class="form-group mt-4">
                                                <label><h6>Processing Fee</h6></label>
                                                <input  v-model="getTransactionById(selectedConsultation).processingFee" class="form-control mt-2" readonly>
                                            </div>

                                            <div class="form-group mt-4">
                                                <label><h6>Visa Fee</h6></label>
                                                <input  v-model="getTransactionById(selectedConsultation).visaFee" class="form-control mt-2" readonly>
                                            </div>

                                            <div class="form-group mt-4">
                                                <label><h6>Reference</h6></label>
                                                <input  v-model="getTransactionById(selectedConsultation).reference" class="form-control mt-2" readonly>
                                            </div>




                                            <h6 class="mt-4">Images</h6>
                                            <div v-if="getTransactionById(selectedConsultation).image">
                                                <div v-for="(image, index) in getTransactionById(selectedConsultation).image" :key="index" class="d-flex justify-content-center mt-3">
                                                    <img v-if="image.url" :src="image.url" alt="Transaction Image" class="image">
                                                </div>
                                            </div>

                                        </form>






                                        <form @submit.prevent="updateApplication(selectedConsultation)" style="margin-top:20%;">

                                            <div class="form-group">
                                                <label><h4>Update Status</h4></label>

                                                <select v-model="selectedOption" class="form-control" placeholder="hh">
                                                    <option>Select Option</option>
                                                    <option value="Accepted">Accepted</option>
                                                    <option value="Declined">Declined</option>
                                                    <!-- Add more options as needed -->
                                                </select>

                                            </div>

                                            <div style="margin-top: 3%;">
                                                <button type="submit" class="btn btn-primary">Schedule Consultation</button>
                                                <button @click="closeModal" type="button" class="btn btn-danger" style="margin-left: 3%;">Close</button>
                                            </div>


                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <nav aria-label="Page navigation example" style="margin-left: 60%;">
                            <ul class="pagination">
                                <li v-bind:class="[{ disabled: !pagination.prev_page_url }]" class="page-item">
                                    <a class="page-link" href="#" @click.prevent="fetchUserApplication(pagination.prev_page_url)"> &lt </a>
                                </li>

                                <!-- <li class="page-item disabled">
                                    <a class="page-link text-dark" href="#">Page {{ pagination.current_page }} of {{ pagination.last_page }}</a>
                                </li> -->


                                <li v-for="page in getPages()" :key="page" v-bind:class="[{ active: pagination.current_page === page }]" class="page-item">
                                    <a class="page-link" href="#" @click.prevent="fetchUserApplication(getPageUrl(page))">{{ page }}</a>
                                </li>

                               

                                <li v-bind:class="[{ disabled: !pagination.next_page_url }]" class="page-item">
                                    <a class="page-link" href="#" @click.prevent="fetchUserApplication(pagination.next_page_url)"> > </a>
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
            amountInWallet: 0,
            adminName:null,

            list: [],
            pagination: {},

            linkText: 'Dashboard',

            selectedConsultation: null,

            selectedOption:'Select Option'
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
                    return 'Users';
                    case 'users/userProfile':
                    return 'User';
                    case 'consultation':
                    return 'Consultations';
                    case 'survey':
                    return 'Surveys';
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


            // const amountInWallet = localStorage.getItem('amountInWallet');
            // if (amountInWallet) {
            //     this.amountInWallet = amountInWallet; // Convert to number
            // }


            let adminName = localStorage.getItem('adminName');
            if (adminName) {
            this.adminName = JSON.parse(adminName);
                console.log(adminName);
            } else {
                console.log('No user profile found in localStorage');
            }

        },




        methods:{


            getTransactionById(consultationId) {
                return this.list.find(transaction => transaction.id === consultationId) || {};
            },

            openModal(consultationId) {

            console.log("Consultation ID:", consultationId);

            this.selectedConsultation = consultationId;
            this.showModal = true;
            this.$refs.exampleModal.classList.add('show');
            this.$refs.exampleModal.style.display = 'block';
            document.body.classList.add('modal-open');
            },

            closeModal() {
            this.selectedConsultation = null;
            this.showModal = false;
            this.$refs.exampleModal.classList.remove('show');
            this.$refs.exampleModal.style.display = 'none';
            document.body.classList.remove('modal-open');
            },


            logout(){
                localStorage.removeItem('adminlogin');
                this.$router.push({name:'admin'})

                this.isLoggedIn = false;
            },



            getPages() {
            const startPage = Math.max(1, this.pagination.current_page - 2);
            const endPage = Math.min(this.pagination.last_page, startPage + 4);

            return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
            },

            getPageUrl(page) {
            // Customize the URL based on your API response structure
            return `https://stagingapp2.fintabng.com/api/v1/admin/getUserVisaApplications?page=${page}`;
            },

                async fetchUserApplication(page_url){
                    try {

                        const token = localStorage.getItem('adminlogin');
                        page_url = page_url || 'https://stagingapp2.fintabng.com/api/v1/admin/getUserVisaApplications';

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
                        this.amountInWallet = data.amountAvailable;
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
                            prev_page_url: links.prev,
                            link:meta.links.url
                        };

                        this.pagination = pagination;
                    },

                    

                    async updateApplication(userVisaApplicationId){
    
                        try{
    
    
    
                            const token = localStorage.getItem('adminlogin');
                        
                            const res = await fetch(`https://stagingapp2.fintabng.com/api/v1/admin/updateUserVisaApplication/${userVisaApplicationId}` ,{
                                method: "PUT",
                                headers: {
                                    "Accept": "application/json",
                                    "Content-Type": "application/json",
                                    "Authorization": `Bearer ${token}`
                                },
                                body: JSON.stringify({
                                    status: this.selectedOption,
                                })
                            });
    
                            if (!res.ok) {
                                throw new Error('Network was Not ok');
                            }else {
                                const data = await res.json();
                                console.log(data);
                                window.location.reload();
    
                            }
    
                        }catch (error) {
                            console.log('There was a pronlem fetching the list:',error.message);
                        }
    
                    },

        },








    }
    


</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');


    .image{
        width: 300px;
    }

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


    .page-item{
        width: 10% !important;
        margin-right: 1%;
        text-align: center;
    }



</style>