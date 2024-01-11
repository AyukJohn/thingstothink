<template>
    <div>

        <div v-if="!isUserProfileRoute">

            
            <div class="d-flex justify-content-center" style="margin-top: 2%;">

                                                
                <div class="card" style="width: 25rem;">
                    <div class="card-body">
                        <div class="d-flex">
                            <img src="@/assets/search.svg" alt="" style="padding-left: 5%;">
                           
                            <input type="text" placeholder="Job Title, Company or Keywords" style="border: none; 
                                height: 50px; outline: none; margin-left: 5%;">
                        </div>
                    </div>
                </div>


                <div class="card cardo" style="width: 25rem;">
                    <div class="card-body">

                        <div class="d-flex">

                            <img src="@/assets/map-pin.svg" alt="" style="margin-left: 5%;">

                            <select class="form-select" >
                                <option selected>Select Location</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <!-- <p>Selected option: {{ selectedOption }}</p> -->
                        </div>
            
                    </div>
                </div>


                <div class="card cardo" style="width: 25rem;">
                    <div class="card-body">
                        <div class="d-flex">
                            <img src="@/assets/filter.svg" alt="" style="margin-left: 5%;">

                            
                            <button class="btn  btn-small text-light" style="margin-left: 25%; width: 120px; background-color: #D6A12B">Search</button>

                        </div>
                    </div>
                </div>

            </div>





            

                <div class="bg-light container mt-5"   style="width: 95%; height: 64vh !important; overflow-y: auto;">

                    <div  v-for="user in userList" :key="user.id" class="container" style="width: 88%;">

                        <div class="row mt-5 mb-5">
                            
                            
                            <div class="col-md-3">
                                <div class="user-avatar">
                                    <img :src="user.image" alt="image here">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <h5 style="margin-top: 5%;">{{ user.first_name }}</h5> 
                            </div>
                            
                            <div class="col-md-3"> 
                                <div v-if="user.verified === 'Yes'" class="d-flex align-items-center">
                                    <img class="img2" src="@/assets/verified.svg" alt="Verified Icon">
                                    <h6 class="mt-2">Verified</h6>
                                </div>
                            </div>
                            
                            <div class="col-md-3">

                                <button class="btn  btn-small text-light" @click="viewUserProfile(user.id)" style="margin-left: 10%; width: 130px; margin-top: 5%; background-color: #D6A12B">
                                    View Profile
                                </button>
                                
                            </div>
                            
                        </div>

                    </div>
                    
                
                    
                    
                    

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


                <div v-if="isUserProfileRoute">
                <router-view></router-view>
                </div>
                

                
                
                
    </div>
</template>


<script>

import { useRouter } from 'vue-router';
import { mapActions } from "vuex";


export default {

    data() {
        return {
            showDropdown: false,
            selectedOption: { label: 'Select Location', value: '' },
            options: [
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' }
            ],

            userList: [],
            pagination: {},
        };
    },

  

    computed: {
        isUserProfileRoute() {
            return this.$route.path.includes('/userProfile');
        },
    },



    mounted() {
        this.fetchUserList();

        // store.dispatch('fetchUserList');

    },

    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        selectOption(option) {
            this.selectedOption = option;
            this.showDropdown = false;
        },

        async fetchUserList(page_url){
            try {

                const token = localStorage.getItem('adminlogin');
                page_url = page_url || 'https://stagingapp2.fintabng.com/api/v1/admin/users';
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
                // console.log(data.user_count);
                this.userList = data.data;
                console.log(data.data);
                localStorage.setItem('userCount', data.user_count);

                this.makePagination(data.meta, data.links);

            } catch (error) {
                console.log('There was a pronlem fetching the userlist:',error.message);
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


        ...mapActions(['fetchUserProfile']),
        
        async viewUserProfile(userId){
            try {
                await this.fetchUserProfile(userId);
                // Logic after fetching user profile if needed
                this.$router.push('/dashboard/users/userProfile');

            } catch (error) {
                console.error('Error fetching user profile:', error.message);
            }
        },
        

        // async viewUserDetails(userId) {
        //     try {
        //         const token = localStorage.getItem('adminlogin');
        //         const userDetailsUrl = `http://127.0.0.1:8000/api/v1/admin/user/${userId}`; // Adjust the URL to fetch user details

        //         // console.log(token);
        //         const res = await fetch(userDetailsUrl, {
        //             method: 'GET',
        //             headers: {
        //                 Accept: 'application/json',
        //                 Authorization: `Bearer ${token}`,
        //             },
        //         });

        //         if (!res.ok) {
        //             throw new Error('Network was not okay');
        //         }

        //         const userData = await res.json();
        //         var list = userData.user

        //         console.log('User Details:', list);

        //         localStorage.setItem('userProfile', JSON.stringify(list));
                
                
        //         // Process the retrieved user data here
        //     } catch (error) {
        //         console.error('Error fetching user details:', error.message);
        //     }
        // },


    },

};

</script>



<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

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


    .dropdown-toggle::after {
        margin-left: 10rem !important;
    }

    .form-select{
        border: none !important;
        /* text-align: center !important; */
    }

    .form-select:hover {
        background-color: #fff !important;
        border: none !important;
    }


    .user-avatar {
        width: 40px; /* Adjust the size of the container */
        height: 40px; /* Adjust the size of the container */
        border-radius: 50%;
        overflow: hidden;
    }

    .user-avatar img {
        width: 100%; /* Ensure the image fills the container */
        height: auto; /* Maintain aspect ratio */
        display: block;
    }


    /* .div1{
        background-image: url('../../assets/bg1.svg');
        background-size: cover;
        background-position: center; 
    } */

</style>