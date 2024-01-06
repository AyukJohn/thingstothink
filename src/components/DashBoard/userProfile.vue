<template>
    <div>

        <div class="container">

            <div class="row">

                <div class="col-md-9" style="margin-top: 2%;">
                    <div class="container">
            
                        <div class="container">
            
                            <div class="row">
                                <div class="">
                                    <div>
                                        <div class="div1">
                                            <div class="content"> 
                                                <div class="profile-image">
                                                    <img :src="userProfile ? userProfile.image : ''" alt="User Profile Image">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                
                                
                                    <div class="wrapper">
                                        <div class="usernameWrapper">
                                            <h5  class="userName" v-if="userProfile">{{ userProfile.first_name }} {{ userProfile.last_name }}</h5>
                                            <h6 class="userID">User ID: {{ userProfile.id }}</h6>
                                            <div v-if="userProfile.verified === 'Yes'" class="d-flex align-items-center">
                                                <p class=" userVerified">Verified</p>
                                                <img class="img2 verifiedTick" src="@/assets/verified.svg" alt="Verified Icon">
                                            </div>
                                        </div>
                                    </div>
            

                                    <div class="wrapper2" v-if="!isUserConsultationRoute">
                                        <form>
                                            <div class="container">
                                                <div class="container">
                                                    <div class="row pt-5">
                                                        <div class="col-md-6 ml-5">
            
                                                            <label for="" class="mb-2">Full Name</label>
                                                            <input type="text" :value="userProfile.first_name + ' ' + userProfile.last_name"   class="form-control py-3" placeholder="First name">
                                                            
                                                        </div>
                    
                                                        <div class="col-md-6">
                                                            <label for="" class="mb-2">Email</label>
                                                            <input type="text" v-model="userProfile.email"  class="form-control py-3" placeholder="Last name">
                                                        </div>
                    
                                                        <div class="col-md-6 mt-5">
                                                            <label for="" class="mb-2">Phone Number</label>
                                                            <input type="text" v-model="userProfile.phone_number"  class="form-control py-3" placeholder="Last name">
                                                        </div>
                    
                                                        <div class="col-md-6 mt-5"> 
                                                            <label for="" class="mb-2">Referral Code</label>
                                                            <input type="text" v-model="userProfile.referralCode" class="form-control py-3" placeholder="Last name">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                   
                                    <div v-if="isUserConsultationRoute">
                                        <router-view></router-view>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-3">

                    <div class="leftHolder">
                        <div>
                            <h6 class="userInfoTag">User Info</h6>
                        </div>



                        
                        <div class="userInfoWrapper">

                           

                            <ul class="userInfoUl">

                                <li class="userInfoLi d-flex" @click="viewUserConsultation(userProfile.id), openModal">
                                    <img class="img2" src="../icons/bx_calendar.svg" alt="">
                            
                                    
                                    <router-link to="/dashboard/users/userProfile/userConsultation" class="nav-link" href="#" style="margin-left: 6%;">
                                        <h6>Consultations</h6>
                                    </router-link>

                                </li>

                                <li class="userInfoLi d-flex">
                                    <img class="img2" src="../icons/fluent_form-new-20-regular.svg" alt="" >
                                    <h6>Applications</h6>
                                </li>

                                <li class="userInfoLi d-flex">
                                    <img class="img2" src="../icons/documents.svg" alt="" >
                                    <h6>Documents</h6>
                                </li>

                            </ul>

                        </div>


                        

                        <!-- Button trigger modal -->
                        <button @click="openModal" class="btn btn-primary">
                            Launch demo modal
                        </button>


                        <div class="modal" ref="exampleModal" tabindex="-1" role="dialog">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Modal title</h5>
                                        <button @click="closeModal" type="button" class="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <!-- Your modal content goes here -->
                                        <!-- ... -->
                                    </div>
                                    <div class="modal-footer">
                                        <button @click="closeModal" type="button" class="btn btn-secondary">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                


            </div>


        </div>



    </div>
</template>


<script>



 export default{

    data() {
        return {
            userProfile:{
                first_name: '',
                last_name: ''
            }
        }
    },


    computed: {
            isUserConsultationRoute(){
                return this.$route.path.includes('/userConsult');
            },
    },


    mounted() {
        let userProfile = localStorage.getItem('userProfile');
        if (userProfile) {
           this.userProfile = JSON.parse(userProfile);
            console.log(userProfile);
        } else {
            console.log('No user profile found in localStorage');
        }
        
    },

    methods: {


        openModal() {
            this.$refs.exampleModal.classList.add('show');
            this.$refs.exampleModal.style.display = 'block';
            document.body.classList.add('modal-open');
        },
        closeModal() {
            this.$refs.exampleModal.classList.remove('show');
            this.$refs.exampleModal.style.display = 'none';
            document.body.classList.remove('modal-open');
        },



        async viewUserConsultation(userId) {
            try {
                // Fetch user consultation data and update Vuex store
                await this.fetchUserConsultation(userId);
                this.$router.push('/userConsultation'); // Navigate to UserConsultation.vue
            } catch (error) {
                console.error('Error fetching user consultation:', error.message);
            }
        },





        async viewUserConsultation(userId) {
            try {
                const token = localStorage.getItem('adminlogin');
                const userDetailsUrl = `https://stagingapp2.fintabng.com/api/v1/admin/getUserConsultationById/${userId}`; // Adjust the URL to fetch user details

                // console.log(token);
                const res = await fetch(userDetailsUrl, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) {
                    throw new Error('Network was not okay');
                }

                const userData = await res.json();
                var list = userData.bookings

                console.log('User Details:', list);

                localStorage.setItem('userConsultation', JSON.stringify(list));
                
                // this.$router.push({ name: 'userProfile' });
                // this.$router.push({ name: 'userProfile', params: { userId }, query: { userProfile } });

                
                // Process the retrieved user data here
            } catch (error) {
                console.error('Error fetching user details:', error.message);
            }
        },
        
    },

 }


</script>


<style scoped>

    .div1{
        position: relative;
        height: 140px; 
        background-image: url('../../assets/bg1.svg');
        background-size: cover;
        background-position: center;
        /* border-radius: 3%;  */
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;


    }

    .content {
        position: absolute;
        bottom: -50px; /* Adjust this value to fit your layout */
        left: 0;
        right: 0;
        padding: 20px; /* Add padding to separate content from the bottom */
        color: #fff; /* Text color for the content */
    }

    .wrapper{
        background-color: #ffffff !important;
    }


    .wrapper2{
        background-color: #ffffff !important;
        margin-top: 2%;
        border-radius: 15px;
        height: 300px; 
    }

    .usernameWrapper{
        /* padding-top: 20%; */
        height: 150px;

    }

    .userName{
        padding-top: 7%;
        padding-left: 4%;
    }

    .userVerified{
        padding-top: 0%;
        padding-left: 4%;
        
    }
    .verifiedTick{
        padding-bottom: 2%;
        padding-left: 0.5%;
    }

    .userID{
        padding-left: 4%;
    }

    .leftHolder{
        margin: 0% !important; 
        width: 20vw; 
        height: 87vh; 
        background-color: #ffff;
    }

    
    .profile-image {
        position: absolute;
        bottom: 0;
        left: 8%;
        transform: translateX(-50%);

        width: 90px; 
        height: 90px;
        border-radius: 50%; 
        overflow: hidden; 
        border: 2px solid #fff;
    }

    .profile-image img {
        width: 100%; 
        height: auto; 
        display: block; 
        object-fit: cover;
    }
    
    .userInfoTag{
        padding-top: 16%;
        padding-left: 10%;
        color: #94A3B8;
    }

    .userInfoWrapper{
        /* background-color: blue; */
      margin-top: 15%;
    }

    .userInfoUl{
        list-style: none;
        margin-left: 5%;
    }

    .userInfoLi{
        margin-top: 5%;
        cursor: pointer;
    }


    .userInfoLi h6{
        padding-left: 10%;
        padding-top: 5%;
        color: #0F172A;
    }


</style>