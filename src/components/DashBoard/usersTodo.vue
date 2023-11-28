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
                         
                        </div>
            
                    </div>
                </div>


                <div class="card cardo" style="width: 25rem;">
                    <div class="card-body">
                        <div class="d-flex">
                            <img src="@/assets/filter.svg" alt="" style="margin-left: 5%;">

                            
                            <button class="btn  btn-small text-light" style="margin-left: 25%; width: 180px; background-color: #D6A12B">View All</button>

                        </div>
                    </div>
                </div>
                
            </div> 



            <p style="width: 90%; margin: auto;height: 14vh; display: flex; justify-content:flex-start; align-items: center; margin-bottom: -50px;">Showing <span style="font-weight: 800; margin-left: 10px;">  60 filtered users</span></p>
            <div style="width: 90%; margin: auto;height: 14vh; padding-right: 30px ;display: flex; justify-content:space-between; align-items: center; margin-bottom: 0px;">
                <p><span style="font-weight: 800; margin-right: 10px;">  To Do</span>(308)</p>
                <div class="d-flex justify-content-center" style="gap: 1em">
                    <p style="font-weight: 800; font-size: 30px; color:grey" >+</p>
                    <p style="font-weight: 800; font-size: 30px; color:grey" >...</p>

                </div>
            </div>
           

                <div class=""  style="width: 95% !important" >

                    <div class="" style="width: 100%; display: flex; flex-direction: column; gap: 1em; align-items: center;">
                        <div class="bg-light" style="width: 91%; padding: 30px; display: flex; align-items: center; justify-content: space-between;">
                          
                           <div>
                            <h5>Gideon Destiny</h5>
                            <h6>Verified</h6>
                           </div>
                            <p style=" width:300px; font-size: 12px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ut. Nam possimus earum, 
                                maiores quia obcaecati soluta consequuntur nostrum aut!
                            </p>
                            <div class="d-flex justify-content-center" style="align-items: center; gap: 3em;">
                                <div class="date">
                                    Nov30
                                </div>
                                <div class="userImageIcon" style="background-color:darkgrey; width:40px; height: 40px; border-radius: 100%;"></div>
                                <p style="font-weight: 800; font-size: 30px; color:grey" >...</p>
                            </div>
                            
                           
                        </div>
        
                        <div class="bg-light" style="width: 91%; padding: 30px; display: flex; align-items: center; justify-content: space-between;">
                            
                           <div>
                            <h5>Emediong Destiny</h5>
                            <h6>Verified</h6>
                           </div>
                            <p style=" width:300px; font-size: 12px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ut. Nam possimus earum, 
                                maiores quia obcaecati soluta consequuntur nostrum aut!
                            </p>
                            <div class="d-flex justify-content-center" style="align-items: center; gap: 3em;">
                                <div class="date">
                                    Nov30
                                </div>
                                <div class="userImageIcon" style="background-color:darkgrey; width:40px; height: 40px; border-radius: 100%;"></div>
                                <p style="font-weight: 800; font-size: 30px; color:grey" >...</p>
                            </div>
                            
                           
                        </div>
        
                        <div class="bg-light " style="width: 91%; padding: 30px; display: flex; align-items: center; justify-content: space-between;">
                            
                           <div>
                            <h5>John Ayuk</h5>
                            <h6>Developer</h6>
                           </div>
                            <p style=" width:300px; font-size: 12px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ut. Nam possimus earum, 
                                maiores quia obcaecati soluta consequuntur nostrum aut!
                            </p>
                            <div class="d-flex justify-content-center" style="align-items: center; gap: 3em;">
                                <div class="date">
                                    Nov30
                                </div>
                                <div class="userImageIcon" style="background-color:darkgrey; width:40px; height: 40px; border-radius: 100%;"></div>
                                <p style="font-weight: 800; font-size: 30px; color:grey" >...</p>
                            </div>
                            
                            
                        </div>
        
                        <div class="bg-light" style="width: 91%; padding: 30px; display: flex; align-items: center; justify-content: space-between;">
                           
                           <div>
                            <h5>John Ayuk</h5>
                            <h6>Verified</h6>
                           </div>
                            <p style=" width:300px; font-size: 12px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ut. Nam possimus earum, 
                                maiores quia obcaecati soluta consequuntur nostrum aut!
                            </p>
                            <div class="d-flex justify-content-center" style="align-items: center; gap: 3em;">
                                <div class="date">
                                    Nov30
                                </div>
                                <div class="userImageIcon" style="background-color:darkgrey; width:40px; height: 40px; border-radius: 100%;"></div>
                                <p style="font-weight: 800; font-size: 30px; color:grey" >...</p>
                            </div>
                            
                          
                        </div>
        
                        <div class="bg-light " style="width: 91%; padding: 30px; display: flex; align-items: center; justify-content: space-between;">
                           
                           <div>
                            <h5>John Ayuk</h5>
                            <h6>Verified</h6>
                           </div>
                            <p style=" width:300px; font-size: 12px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ut. Nam possimus earum, 
                                maiores quia obcaecati soluta consequuntur nostrum aut!
                            </p>
                            <div class="d-flex justify-content-center" style="align-items: center; gap: 3em;">
                                <div class="date">
                                    Nov30
                                </div>
                                <div class="userImageIcon" style="background-color:darkgrey; width:40px; height: 40px; border-radius: 100%;"></div>
                                <p style="font-weight: 800; font-size: 30px; color:grey" >...</p>
                            </div>
                            
                           
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