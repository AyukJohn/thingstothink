<template>
    <div class="mainWrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card card1">
                        <div class="d-flex">
                            <div class="mt-4">
                                <h5 class="ps-3">12456</h5>
                                <span class="ps-3">Student</span>
                            </div>
                            
                            <div class="iconWrapper">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card2">
                        <div class="d-flex">
                            <div class="mt-4">
                                <h5 class="ps-3">12456</h5>
                                <span class="ps-3">Faculty</span>
                            </div>
                            
                            <div class="iconWrapper">
                                <i class="fa-solid fa-building-columns"></i>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card3">
                        <div class="d-flex">
                            <div class="mt-4">
                                <h5 class="ps-3">12456</h5>
                                <span class="ps-3">Academic</span>
                            </div>
                            
                            <div class="iconWrapper">
                                <i class="fa-solid fa-book-open"></i>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="container mt-3">
            <div class="row">
                <div class="col-md-6">

                    <div class="card card4">
                        <h5>Faculty Staff</h5>
                        <div class="table-wrapper mt-4">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">Handle</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>

                                    <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>

                                    <tr>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>

                                    <tr>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>

                                    <tr>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>

                                    <tr>
                                    <td>@twitter</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!--  -->

                </div>


                <div class="col-md-6">
                    <div class="card card5">
                        <h5 class="">Dean/HODs</h5>
                        <div class="table-wrapper mt-4">
                            <table class="table transparent-table">
                                
                                <tbody>
                                    <tr>
                                    <td>
                                        <div class="image-wrapper">
                                            <img src="/public/avater.jpg" alt="Your Image" class="circular-image">
                                        </div>
                                    </td>
                                    <td colspan="2">Larry the Bird</td>

                                    <td colspan="2">Larry the Bird</td>

                                    </tr>

                                    <tr>
                                        <td>
                                            <div class="image-wrapper">
                                                <img src="/public/avater.jpg" alt="Your Image" class="circular-image">
                                            </div>
                                        </td>
                                        <td colspan="2">Larry the Bird</td>

                                        <td colspan="2">Larry the Bird</td>

                                    </tr>

                                    <tr>
                                        <td>
                                            <div class="image-wrapper">
                                                <img src="/public/avater.jpg" alt="Your Image" class="circular-image">
                                            </div>
                                        </td>
                                        <td colspan="2">Larry the Bird</td>

                                        <td colspan="2">Larry the Bird</td>

                                    </tr>

                                    <tr>
                                        <td>
                                            <div class="image-wrapper">
                                                <img src="/public/avater.jpg" alt="Your Image" class="circular-image">
                                            </div>
                                        </td>
                                        <td colspan="2">Larry the Bird</td>

                                        <td colspan="2">Larry the Bird</td>

                                    </tr>

                                    <tr>
                                        <td>
                                            <div class="image-wrapper">
                                                <img src="/public/avater.jpg" alt="Your Image" class="circular-image">
                                            </div>
                                        </td>
                                        <td colspan="2">Larry the Bird</td>

                                        <td colspan="2">Larry the Bird</td>

                                    </tr>

                                    <tr>
                                        <td>
                                            <div class="image-wrapper">
                                                <img src="/public/avater.jpg" alt="Your Image" class="circular-image">
                                            </div>
                                        </td>
                                        <td colspan="2">Larry the Bird</td>

                                        <td colspan="2">Larry the Bird</td>

                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                    <CanvasJSChart :options="options" class="charts"/>

            </div>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
	  chart: null,
	  options: {
	    animationEnabled: true,
	    title:{
	      text: "Metrics Of Students Admitted for The Session",
          fontFamily: "Gupter",
          fontSize: 18,
	    },

        axisY: {
          title: "Number of Students",
          titleFontFamily: "Gupter",
          titleFontSize: 15,
          gridThickness: 0,
        },
	    data: [{
		  type: "column",
		  dataPoints: [
		    { label: "SoftWare Engineering",  y: 10 },
		    { label: "Data Science", y: 15 },
		    { label: "AI/ML", y: 25 },
		    { label: "Graphics and visual computing.",  y: 30 },
		    { label: "Computational science",  y: 28 },
		    { label: "Algorithms and complexity",  y: 28 },
		    { label: "Networking and communication",  y: 100 },


		  ]
	    }]
	  }
    }
  }
}

</script>

<style scoped>


.mainWrapper{
    font-family: "Gupter", serif;
}

.card {
    height: 20vh;
    margin-top: 20%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card1{
    background: linear-gradient(to right, #b7b7b7, #fff);
}

.card2{
    background: linear-gradient(to right, #5ac8ce, #88d2e3);
}

.card3{
    background: linear-gradient(to right, #373644, #656afe);
}

.text-right {
    text-align: right;
}


.iconWrapper{
    width: 60px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #01002b;
    margin-left: 6em !important;
    margin-top: 1.5em;
}

.iconWrapper i {
    font-size: 24px; 
    color: antiquewhite;
}
.card4 {
    height: 40vh;
    margin-top: 2%;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    font-size: 14px;
}

.card4 h5{
    padding-right: 55%;
    font-size: 16px;
}


.card5 {
    height: 40vh;
    width: 30vw;
    margin-top: 2%;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden; 
    font-size: 14px;
}

.card5 h5{
    padding-right: 50%;
    font-size: 16px;
}

.table-wrapper {
    height: 100%;
    overflow-y: auto; /* Adds vertical scrolling */
}


.table-wrapper::-webkit-scrollbar {
    width: 5px; 
}

.table-wrapper::-webkit-scrollbar-track {
    background: #ffffff;
}


.table {
    background-color: transparent !important;
}

.image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.circular-image {
    width: 30px;
    height: 30px;
    border-radius: 50%; 
    object-fit: cover;
}


.transparent-table {
    background-color: rgba(255, 255, 255, 0); /* Fully transparent background */
    border-collapse: collapse; /* Ensures borders are not doubled */
}

.transparent-table thead th,
.transparent-table tbody td {
    background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent background for cells */
    color: #000; /* Ensure text color is visible */
}

.transparent-table th {
    background-color: rgba(0, 0, 0, 0.1); /* Light semi-transparent background for table headers */
}





.charts{
    /* margin-left: 1% */
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 10px;
}

</style>
