<template>
    <div>
        
        <div class="container table-responsive mt-5">
                       
                        <table class="table mt-3">
                            <thead>
                                <tr>
                                <th scope="col">Consultation_Id</th>

                                <th scope="col">Client Name</th>
                                <th scope="col">Client Email</th>

                                <th scope="col">Visa Applied For</th>
                                <th scope="col">How Old Is the Passport</th>
                                <th scope="col">Held Any Canadian Vistor Passsport last 10yrs ?</th>
                                <th scope="col">Employment Status In Nigeria</th>
                                <th scope="col">Ever Attended School or work without authorization, stayed beyond validity ? </th>
                                <th scope="col">Ever denied visa or Ordered to leave any region ?</th>
                                <th scope="col">Owned a landed property or Business in Nigeria ?</th>
                                <th scope="col">Marital Status</th>
                                <th scope="col">Level Of Education</th>
                                <th scope="col">Health Related Concern ?</th>
                                <th scope="col">....</th>



                                </tr>
                            </thead>
                            <tbody>
                                <tr  v-for="consultation in list" :key="consultation.id" >
                                    <td>{{ consultation.reference }}</td>
                                    <td v-if="consultation.user">{{ consultation.user.first_name }} {{ consultation.user.last_name }}</td>
                                    <td v-if="consultation.user"> {{ consultation.user.email }} </td>
                                    <td>{{ consultation.visa_type }}</td>
                                    <td>{{ consultation.passport_age }}</td>
                                    <td>{{ consultation.held_any_past_visa }}</td>
                                    <td>{{ consultation.currently_employed_in_nigeria }}</td>
                                    <td>{{ consultation.stayed_in_canada_beyond_status }}</td>
                                    <td>{{ consultation.ever_been_refused_visa_deny_entry }}</td>
                                    <td>{{ consultation.landed_property_or_business_in_nigeria }}</td>
                                    <td>{{ consultation.marital_status }}</td>
                                    <td>{{ consultation.highest_level_of_education }}</td>
                                    <td>{{ consultation.any_sickness }}</td>
                                    <td>....</td>
                                </tr>
                            </tbody>
                        </table>


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
</template>


<script>

    export default{
     
        name: 'Dashboard',


        data() {
            return {
            currentDate: new Date(),


            list: [],
            pagination: {},
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



        mounted() {
            let admin = localStorage.getItem('adminlogin');
            // console.log(user);
            if (!admin){
                this.$router.push({name:'admin'})
            };

            this.fetchUserApplication()

        },




        methods: {

                async fetchUserApplication(page_url){
                try {

                    const token = localStorage.getItem('adminlogin');
                    page_url = page_url || 'https://stagingapp2.fintabng.com/api/v1/admin/getUserSurveys';
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
                    console.log(data.surveys);
                    this.list = data.surveys;
                    localStorage.setItem('surveyCount', data.survey_count);
                 

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
                        prev_page_url: links.prev
                    };

                    this.pagination = pagination;
                },


        },






    }


</script>

<style scoped>

.table-container {
    max-height: 300px; /* Set the maximum height of the table */
    overflow-y: auto; /* Enable vertical scrolling */
    overflow-x: auto; /* Hide horizontal scrollbar if not needed */
}



</style>