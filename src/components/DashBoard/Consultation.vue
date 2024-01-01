<template>
    <div>
        <div class="container mt-5">
                        <div class="d-flex">
                            <h5>Consultations</h5>
                        </div>
                       
                        <table class="table mt-3">
                            <thead>
                                <tr>
                                <th scope="col">Consultation_Id</th>
                                <th scope="col">Visa Category</th>
                                <th scope="col">Consultation_Date</th>
                                <th scope="col">Consultation_Time</th>
                                <th scope="col">Consultation_Price</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Email</th>
                                <th scope="col">....</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  v-for="consultation in list" :key="consultation.id" >
                                    <td>{{ consultation.reference }}</td>
                                    <td>{{ consultation.visaType }}</td>
                                    <td>{{ consultation.date }}</td>
                                    <td>{{ consultation.time }}</td>
                                    <td>{{ consultation.processingFee }}</td>
                                    <td v-if="consultation.user">{{ consultation.user.first_name }} {{ consultation.user.last_name }}</td>
                                    <td v-if="consultation.user"> {{ consultation.user.email }} </td>
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
                    page_url = page_url || 'http://127.0.0.1:8000/api/v1/admin/getUserConsultations';
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
                    console.log(data.data);
                    this.list = data.data;
                    localStorage.setItem('bookingCount', data.booking_count);
                    localStorage.setItem('amountInWallet', data.amountAvailable);


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