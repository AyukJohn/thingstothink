<template>
    <div class="container">

        <div class="tableWrapper">
            <table class="table">
                <h4>Students</h4>
                <div class="d-flex">
                            <div class="btn btn-sm btn-dark mb-3">Add Record</div>
                               
                               <ul class="pagination ms-3">
                                   <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                   <li class="page-item"><a class="page-link" href="#">1</a></li>
                                   <li class="page-item"><a class="page-link" href="#">2</a></li>
                                   <li class="page-item"><a class="page-link" href="#">3</a></li>
                                   <li class="page-item"><a class="page-link" href="#">Next</a></li>
                               </ul>
                        </div>
                <thead>
                    <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>

                    <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>

                    <tr>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div class="row">

            <div class="col-md-6 chart">
                <CanvasJSChart :options="options" class="charts"/>
            </div>


            <div class="col-md-6 mt-4">
                <div class="tableWrapper2">
                    <table class="table">
                        <h4>Graduating Students</h4>
                        <div class="d-flex">
                            <div class="btn btn-sm btn-dark mb-4">Add Record</div>
                               
                               <ul class="pagination ms-3">
                                   <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                   <li class="page-item"><a class="page-link" href="#">1</a></li>
                                   <li class="page-item"><a class="page-link" href="#">2</a></li>
                                   <li class="page-item"><a class="page-link" href="#">3</a></li>
                                   <li class="page-item"><a class="page-link" href="#">Next</a></li>
                               </ul>
                        </div>


                        <thead>
                            <tr>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>

                            <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>

                            <tr>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>

                            <tr>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>

                            <tr>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
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
	      text: "Number of Students Admitted for The Session",
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

    .container{
        font-family: "Gupter", serif;
    }

    .tableWrapper{
        margin-top: 5%;
    }

    .chart{
        margin-bottom: 4%;
    }

    .tableWrapper2{
        height: 20vh;
    }
</style>