<template>
    <div>

        <div class="container">

            <div class="row">

                <div class="col-md-9" style="margin-top: 1%;">
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
            
                                    <div class="wrapper2">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-3">

                    <div class="leftHolder">
                        <div>
                            <h2>hello world</h2>
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


    mounted() {
        let userProfile = localStorage.getItem('userProfile');
        if (userProfile) {
           this.userProfile = JSON.parse(userProfile);
            console.log(userProfile);
        } else {
            console.log('No user profile found in localStorage');
        }
        
    }

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


</style>