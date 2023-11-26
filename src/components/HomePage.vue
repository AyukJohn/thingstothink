<template>

    <div class="wrapper">

        <div class="container-fluid">

            <div class="row">

                <div class="col-md-6 row1 no-gutter">
                    <img id="img1" src="../assets/coverPage.svg" alt="" >
                </div>

                <div class="col-md-6 row2">

                    <div class="container">

                        <div class="d-flex justify-content-center">

                            
                            <form id="form" @submit.prevent="loginAdmin">

                                <div v-if="error" class="alert alert-danger mt-3 text-center">
                                    {{ error }}
                                </div>
                                
                                <div class="form-row">

                                    <div class="mb-4">
                                        <h4 id="header1">Sign In to your Account</h4>
                                        <p id="parag1">Welcome Back! Please Enter Your Detail</p>
                                    </div>

                                    <div class="form-group">
                                        <div class="input-group input-group-sm mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <input v-model="email" type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                                        </div>
                                    </div>
    
    
                                    <div class="form-group">
                                        <div class="input-group input-group-sm mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="inputGroup-sizing-sm">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" >
                                                        <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <input v-model="password" type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                                        </div>
                                    </div>
    
                                </div>
                                <div>
                                
    

                                   </div>
                                <!-- <button type="submit" class="btn col-md-12">Sign In</button> -->

                                <button type="submit" class="btn col-md-12" :disabled="loading">
                                        <span v-if="loading">
                                            <!-- Display the loader while loading is true -->
                                            <Loader :isLoading="loading" />
                                        </span>
                                        <span v-else>Sign In</span>
                                </button>
    
                            </form>


                        </div>


                    </div>
                    
                </div>

            </div>


        </div>

    </div>

</template>


<!-- <script  setup lang="ts">
    
</script> -->

<script lang="ts">

    import Loader from './extras/Loader.vue';


    export default {
        name:'HomePage',

        data:() =>{
            return{
                email:'',
                password:'',
                error:null,
                loading: false,
            };
        },


        methods: {
            loginAdmin(){
                // console.log(this.email);
                // console.log(this.password);
                
                
                fetch("https://stagingapp2.fintabng.com/api/v1/admin/loginAdmin", {

                    method: "POST",
                    mode: 'no-cors',
                    headers: {
                    "Accept":"application/json",
                    "Content-Type": "application/json",
                    },

                    body:JSON.stringify({
                        email:this.email,
                        password:this.password  
                    })
                    })
                    .then(res => res.json())
                    .then((res) => {

                       
                        

                        if (!res.access_token) {
                            this.error = res.error
                        }
                        else{
                             localStorage.setItem('adminlogin', res.access_token);
                            
                           
                             this.$router.push({name:'dashboard'})
                        }

                    })
                    .catch(error => {
                        console.error("Error:", error);
                        this.error = "An error occurred. Please try again.";
                        })
                    .finally(() => {
                        this.loading = false; // Set loading to false when the request completes (success or failure)
                    });

                    



            }
        },
    }


    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap/dist/js/bootstrap.bundle.min';

</script>


<style scoped>

/* @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap'); */


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');


@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

#img{
    padding: 0% !important;
    margin: auto !important;
}


/* #img1{
    height: 0% !important;
} */

.row1{
    margin: 0% !important;
    padding: 0% !important;
    height: 10%;
}

#form{
    margin-top: 45%;
}

.btn{
    background: linear-gradient(to right, #8D133e, #D6A12B);
    color: #fff;
}

#header1,#parag1{
    font-family: 'Inter', serif;
}

#parag1{
    font-weight: 100 !important;
    font-size: small;
}

#header1{
    font-weight: 1000;
}



</style>