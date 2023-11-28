<template >
    <div>
        <nav class="navbar navbar-expand-sm">
                <a class="navbar-brand" href="#" style="padding-left: 2%;">Users</a>
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

                        <div class="align-self-center" style=" !important; display: flex; justify-content: center; align-items: center; gap: 1em;">
                            <!-- <div class="userImageIcon" style="background-image: url(../icons/logo.svg); width:45px; height: 40px; border-radius: 100%;"></div> -->
                            <div class="userImageIcon" style="background-color: grey; width:45px; height: 40px; border-radius: 100%;"></div>
                            <p class="pt-3">Benjamin B.</p>
                            
                        </div>

                        <div class="align-self-center" style="margin-left: 20% !important;">Dropdown</div>


                    </div>

                 
                </div>
        </nav>

            <div class="d-flex justify-content-center" style="margin-top: 20px; margin-left: 30px ;width: 90%; border-radius: 35px; ">

                                                
                <div class="card" style="width: 25rem;">
                </div>


                <div class="card cardo" style="width: 25rem;">
                </div>


                <div class="card cardo" style="width: 25rem;">
                </div>
                
            </div> 

           

            <div style="display: flex; width: 100%; ">
                <div style=" width: 82%; "> 
                <div class=""  style=" width: 100% !important; display: flex; justify-content: center; position: relative;">
                    <div class="" style="width: 95% !important; height: 28vh; " > 
                        <div style="width: 95% !important; height: 27vh; border-radius:10px 10px 0 0; background-color: wheat; position: relative;">
                            <img src="../icons/logo.svg" style="width: 100%; height: 100%;">
                            <div style="width: 80px; height: 30px; position: absolute; top: 10px; left: 10px; background-color: white;border-radius: 10px;text-align: center;">
                                
                                Back
                            </div>
                        </div>
                        <div style="width: 60px; height: 55px; border-radius: 100%; background-color: aliceblue; display: flex; justify-content: center; position: absolute; top: 80%; left: 140px;">
                            <img src="../icons/user-account.svg" style="width: 40px;">
                        </div>
                        <div style="width: 95% !important; height: 18vh; background-color: white; border-radius:0px 0px 10px 10px; padding: 30px;">
                            <p>Gideon Destiny<br><span style="font-weight: 200;">Verified</span></p>
                           
                        </div>
                    </div>

                </div>

                <div class="orm" style=" width: 95% ; height: 30vh; margin-top: 120px; display: flex; justify-content: center;align-items: center;">
                    <div style="background-color: white; width: 95% !important; display: flex; justify-content: space-between;align-items: center; padding: 20px; border-radius: 10px;">
                        <div style="display: flex; flex-direction: column; gap: 1em;">
                            <div>
                                <label or="ull Name">ull Name</label>
                                <div style="border: 1px solid gray; width: 250px; height: 40px;border-radius: 7px;"></div>
                            </div>
                            <div>
                                <label or="ull Name">Email</label>
                                <div style="border: 1px solid gray; width: 250px; height: 40px; border-radius: 7px;"></div>
                             </div>
                        </div>
                        
                        <div style="display: flex; flex-direction: column; gap: 1em;">
                            <div>
                                <label or="ull Name">Number</label>
                                <div style="border: 1px solid gray; width: 250px; height: 40px;border-radius: 7px;"></div>
                            </div>
                            <div>
                                <label or="ull Name">Account Veriication</label>
                                <div style="border: 1px solid gray; width: 250px; height: 40px;border-radius: 7px;"></div>
                            </div>
                        </div>
                       
                        
                    </div>
                </div>
                </div>
                
                <div>
                <div class="sidebar" style="padding: 20px;padding-top: 0%; background-color: white; height: 88vh; margin-top: -30px;">          


<h6 class="menu">User Ino</h6>

<ul class="navbar-nav">

    <li class="d-flex flex-row">
    <img class="img2" src="../icons/layout-grid.svg" alt="" >
    
        <!-- <a class="nav-link" href="#" style="margin-left: 10%;">DashBoard</a> -->
        <router-link to="/dashboard" class="nav-link" style="margin-left: 10%;">DashBoard</router-link>


    </li>

    <li class="d-flex flex-row mt-2">
        
        <img class="img2" src="../icons/user-account.svg" alt="" >


        <!-- <a class="nav-link" href="#" style="margin-left: 10%;">Users</a> -->
        <router-link to="/dashboard/users" class="nav-link" href="#" style="margin-left: 10%;">Users</router-link>

    </li>

    <li class="d-flex flex-row mt-2">
        <img class="img2" src="../icons/user-question-01.svg" alt="" >

        <a class="nav-link" :class="img2" href="#" style="margin-left: 10%;">Consultation</a>
    </li>




    <li class="d-flex flex-row mt-2">
        <img class="img2"  src="../icons/dashboard.svg" alt="" >

        <a class="nav-link"  href="#" style="margin-left: 10%;">Survey Query</a>
    </li>

</ul>

                </div>
                </div>
                
            </div>
           
    

    </div>
   
</template>


<script>

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


</style>