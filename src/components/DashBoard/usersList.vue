<template>
    <div>
        
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

                            
                            <button class="btn  btn-small text-light" style="margin-left: 25%; width: 180px; background-color: #D6A12B">View All</button>

                        </div>
                    </div>
                </div>

            </div>





            

                <div class="bg-light container"  style="width: 95%; height: 64vh !important">

                    <div class="container" style="width: 88%;">
                        <div class="d-flex align-items-center justify-content-between mt-5 mb-5" >
                            <img src="" alt="image here" style="margin-top: 5%;">
                            <h5 style="margin-top: 5%;">John Ayuk</h5>
                            <h6 style="margin-top: 5%;">Verified</h6>
                            <button class="btn  btn-small text-light" style=" width: 120px; margin-top: 5%; background-color: #D6A12B">View All</button>
                        </div>
        
                        <div class="d-flex justify-content-between" style="margin-top: 5%;">
                            <img src="" alt="image here">
                            <h5>John Ayuk</h5>
                            <h6>Verified</h6>
                            <button class="btn  btn-small text-light" style=" width:120px; background-color: #D6A12B">View All</button>
                        </div>
        
                        <div class="d-flex justify-content-between" style="margin-top: 5%;">
                            <img src="" alt="image here">
                            <h5>John Ayuk</h5>
                            <h6>Verified</h6>
                            <button class="btn  btn-small text-light" style=" width:120px; background-color: #D6A12B">View All</button>
                        </div>
        
                        <div class="d-flex justify-content-between" style="margin-top: 5%;">
                            <img src="" alt="image here">
                            <h5>John Ayuk</h5>
                            <h6>Verified</h6>
                            <button class="btn  btn-small text-light" style=" width:120px; background-color: #D6A12B">View All</button>
                        </div>
        
                        <div class="d-flex justify-content-between" style="margin-top: 5%; margin-bottom: 5% !important;">
                            <img src="" alt="image here">
                            <h5>John Ayuk</h5>
                            <h6>Verified</h6>
                            <button class="btn  btn-small text-light" style=" width:120px; background-color: #D6A12B">View All</button>
                        </div>
                    </div>
                   
                    

                </div>

         


    

    </div>
</template>


<script>

export default {
    data() {
        return {
        showDropdown: false,
        selectedOption: { label: 'Select Location', value: '' },
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
        ]
        };
    },
    methods: {
        toggleDropdown() {
        this.showDropdown = !this.showDropdown;
        },
        selectOption(option) {
        this.selectedOption = option;
        this.showDropdown = false;
        }
    }
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


</style>