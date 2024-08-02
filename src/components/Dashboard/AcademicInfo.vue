<template>
    <div>
        
        <div class="container mt-5">
            <h5>List of Courses and Lectures Allocation</h5>
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
                </tbody>

            </table>
        </div>


        <div class="container">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#sameModal">
                    New Student Enrollment Form
                </button>

                <!-- Button trigger modal -->
                <button type="button" class="btn btn-dark ms-3" data-bs-toggle="modal" data-bs-target="#Modal">
                    Time table
                </button>


                <!-- Button trigger modal -->
                <button type="button" class="btn btn-dark m-3" data-bs-toggle="modal" data-bs-target="#example">
                    Faculty of Computing Curriculum
                </button>

                <!-- Button trigger modal -->
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Faculty oF Computing Syllabus
                </button>
        </div>


       
  

        <!-- Modal -->
        <div class="modal fade" id="sameModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="enrollment-form">
                    
                <h2>New Student Enrollment Form</h2>
                <form action="/submit-enrollment" method="post">
                    <label for="first-name">First Name:</label>
                    <input type="text" id="first-name" name="first-name" required>

                    <label for="last-name">Last Name:</label>
                    <input type="text" id="last-name" name="last-name" required>

                    <label for="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" required>

                    <label for="gender">Gender:</label>
                    <input type="radio" id="male" name="gender" value="male" required>
                    <label for="male" style="display: inline;">Male</label>
                    <input type="radio" id="female" name="gender" value="female" required>
                    <label for="female" style="display: inline;">Female</label>
                    <input type="radio" id="other" name="gender" value="other" required>
                    <label for="other" style="display: inline;">Other</label>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="phone">Phone Number:</label>
                    <input type="text" id="phone" name="phone" required>

                    <label for="address">Address:</label>
                    <textarea id="address" name="address" rows="4" required></textarea>

                    <label for="department">Department:</label>
                    <select id="department" name="department" required>
                        <option value="">Select a department</option>
                        <option value="computer_science">Computer Science</option>
                        <option value="information_technology">Information Technology</option>
                        <option value="software_engineering">Software Engineering</option>
                        <option value="cyber_security">Cyber Security</option>
                        <option value="data_science">Data Science</option>
                    </select>

                    <label for="course">Course Enrolling In:</label>
                    <select id="course" name="course" required>
                        <option value="">Select a course</option>
                        <option value="csc101">CSC101: Introduction to Computer Science</option>
                        <option value="csc102">CSC102: Programming Fundamentals</option>
                        <option value="csc201">CSC201: Data Structures and Algorithms</option>
                        <option value="csc202">CSC202: Object-Oriented Programming</option>
                        <option value="csc301">CSC301: Database Systems</option>
                        <option value="csc302">CSC302: Operating Systems</option>
                        <option value="csc303">CSC303: Computer Networks</option>
                        <option value="csc304">CSC304: Software Engineering</option>
                        <option value="csc305">CSC305: Web Development</option>
                        <option value="csc306">CSC306: Mobile Application Development</option>
                        <option value="csc401">CSC401: Artificial Intelligence</option>
                        <option value="csc402">CSC402: Machine Learning</option>
                        <option value="csc403">CSC403: Data Science</option>
                        <option value="csc404">CSC404: Cloud Computing</option>
                        <option value="csc405">CSC405: Cybersecurity</option>
                        <option value="csc499">CSC499: Capstone Project</option>
                    </select>

                    <label for="hobbies">Hobbies and Interests:</label>
                    <textarea id="hobbies" name="hobbies" rows="4"></textarea>

                    <label for="terms">
                        <input type="checkbox" id="terms" name="terms" required>
                        I agree to the <a href="#">terms and conditions</a>.
                    </label>

                    <button type="submit">Submit Enrollment</button>
                </form>
            </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>




    

        <!-- Modal -->
        <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <table class="timetable table">
                <tr>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
                <tr>
                    <td class="time-slot">08:00 - 09:00</td>
                    <td>Math 101</td>
                    <td>Physics 101</td>
                    <td>Chemistry 101</td>
                    <td>Biology 101</td>
                    <td>English 101</td>
                </tr>
                <tr>
                    <td class="time-slot">09:00 - 10:00</td>
                    <td>Math 101</td>
                    <td>Physics 101</td>
                    <td>Chemistry 101</td>
                    <td>Biology 101</td>
                    <td>English 101</td>
                </tr>
                <tr>
                    <td class="time-slot">10:00 - 11:00</td>
                    <td>Computer Science 101</td>
                    <td>History 101</td>
                    <td>Philosophy 101</td>
                    <td>Art 101</td>
                    <td>Music 101</td>
                </tr>
                <tr>
                    <td class="time-slot">11:00 - 12:00</td>
                    <td>Computer Science 101</td>
                    <td>History 101</td>
                    <td>Philosophy 101</td>
                    <td>Art 101</td>
                    <td>Music 101</td>
                </tr>
                <tr>
                    <td class="time-slot">12:00 - 13:00</td>
                    <td colspan="5">Lunch Break</td>
                </tr>
                <tr>
                    <td class="time-slot">13:00 - 14:00</td>
                    <td>Elective 101</td>
                    <td>Elective 102</td>
                    <td>Elective 103</td>
                    <td>Elective 104</td>
                    <td>Elective 105</td>
                </tr>
                <tr>
                    <td class="time-slot">14:00 - 15:00</td>
                    <td>Elective 101</td>
                    <td>Elective 102</td>
                    <td>Elective 103</td>
                    <td>Elective 104</td>
                    <td>Elective 105</td>
                </tr>
                <tr>
                    <td class="time-slot">15:00 - 16:00</td>
                    <td>Physical Education</td>
                    <td>Physical Education</td>
                    <td>Physical Education</td>
                    <td>Physical Education</td>
                    <td>Physical Education</td>
                </tr>
                <tr>
                    <td class="time-slot">16:00 - 17:00</td>
                    <td>Free Time</td>
                    <td>Free Time</td>
                    <td>Free Time</td>
                    <td>Free Time</td>
                    <td>Free Time</td>
                </tr>
            </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>








        <!-- Modal -->
        <div class="modal fade" id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="curriculum">
                    <h2>Faculty of Computing Curriculum</h2>
                    <ul>
                        <li>
                            <span>Introduction to Computer Science</span>
                            CSC101
                        </li>
                        <li>
                            <span>Programming Fundamentals</span>
                            CSC102
                        </li>
                        <li>
                            <span>Data Structures and Algorithms</span>
                            CSC201
                        </li>
                        <li>
                            <span>Object-Oriented Programming</span>
                            CSC202
                        </li>
                        <li>
                            <span>Database Systems</span>
                            CSC301
                        </li>
                        <li>
                            <span>Operating Systems</span>
                            CSC302
                        </li>
                        <li>
                            <span>Computer Networks</span>
                            CSC303
                        </li>
                        <li>
                            <span>Software Engineering</span>
                            CSC304
                        </li>
                        <li>
                            <span>Web Development</span>
                            CSC305
                        </li>
                        <li>
                            <span>Mobile Application Development</span>
                            CSC306
                        </li>
                        <li>
                            <span>Artificial Intelligence</span>
                            CSC401
                        </li>
                        <li>
                            <span>Machine Learning</span>
                            CSC402
                        </li>
                        <li>
                            <span>Data Science</span>
                            CSC403
                        </li>
                        <li>
                            <span>Cloud Computing</span>
                            CSC404
                        </li>
                        <li>
                            <span>Cybersecurity</span>
                            CSC405
                        </li>
                        <li>
                            <span>Capstone Project</span>
                            CSC499
                        </li>
                    </ul>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>









        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="row">

                        <div class="col-m-3">
                            <div class="syllabus">
                                <h2>Faculty of Computing Syllabus</h2>
                        
                                <div class="course">
                                    <h3>CSC101: Introduction to Computer Science</h3>
                                    <ul>
                                        <li>
                                            <span>Week 1: Introduction and History of Computers</span>
                                            Overview of the history and evolution of computers.
                                        </li>
                                        <li>
                                            <span>Week 2: Basic Computer Organization</span>
                                            Understanding the basic components of a computer.
                                        </li>
                                        <li>
                                            <span>Week 3: Introduction to Programming</span>
                                            Basics of programming and writing simple programs.
                                        </li>
                                        <li>
                                            <span>Week 4: Data Types and Variables</span>
                                            Understanding different data types and using variables.
                                        </li>
                                        <li>
                                            <span>Week 5: Control Structures</span>
                                            Introduction to loops and conditional statements.
                                        </li>
                                        <!-- Add more weeks as necessary -->
                                    </ul>
                                </div>
                        
                                <div class="course">
                                    <h3>CSC102: Programming Fundamentals</h3>
                                    <ul>
                                        <li>
                                            <span>Week 1: Introduction to Programming Languages</span>
                                            Overview of different programming languages.
                                        </li>
                                        <li>
                                            <span>Week 2: Basic Syntax and Semantics</span>
                                            Understanding the basic syntax and semantics of a programming language.
                                        </li>
                                        <li>
                                            <span>Week 3: Functions and Procedures</span>
                                            Writing and using functions and procedures.
                                        </li>
                                        <li>
                                            <span>Week 4: Arrays and Lists</span>
                                            Introduction to arrays and lists.
                                        </li>
                                        <li>
                                            <span>Week 5: Error Handling</span>
                                            Techniques for handling errors in programs.
                                        </li>
                                        <!-- Add more weeks as necessary -->
                                    </ul>
                                </div>

                                <div class="course">
                                    <h3>CSC201: Data Structures and Algorithms</h3>
                                    <ul>
                                        <li>
                                            <span>Week 1: Introduction to Data Structures</span>
                                            Overview of different data structures.
                                        </li>
                                        <li>
                                            <span>Week 2: Arrays and Linked Lists</span>
                                            Understanding and implementing arrays and linked lists.
                                        </li>
                                        <li>
                                            <span>Week 3: Stacks and Queues</span>
                                            Introduction to stacks and queues.
                                        </li>
                                        <li>
                                            <span>Week 4: Trees and Graphs</span>
                                            Basics of trees and graphs.
                                        </li>
                                        <li>
                                            <span>Week 5: Searching and Sorting Algorithms</span>
                                            Understanding different searching and sorting algorithms.
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>

                        </div>


                        <div class="col-m-3">

                        </div>




                        <div class="col-m-3"></div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>

</script>


<style scoped>
    .timetable {
            width: 100%;
            border-collapse: collapse;
        }
        .timetable th, .timetable td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }
        .timetable th {
            background-color: #f2f2f2;
            color: black;
        }
        .timetable td {
            background-color: #ffffff;
        }
        .timetable .time-slot {
            background-color: #e6f7ff;
        }


        .curriculum {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
        }
        .curriculum h2 {
            text-align: center;
        }
        .curriculum ul {
            list-style-type: none;
            padding: 0;
        }
        .curriculum li {
            background-color: #fff;
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .curriculum li span {
            display: block;
            font-weight: bold;
        }

        .syllabus {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
        }
        .syllabus h2 {
            text-align: center;
        }
        .syllabus .course {
            margin-bottom: 20px;
        }
        .syllabus .course h3 {
            margin-bottom: 10px;
            color: #333;
        }
        .syllabus .course ul {
            list-style-type: none;
            padding: 0;
        }
        .syllabus .course li {
            background-color: #fff;
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .syllabus .course li span {
            display: block;
            font-weight: bold;
        }

        .enrollment-form {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 600px;
        }
        .enrollment-form h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        .enrollment-form label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .enrollment-form input[type="text"],
        .enrollment-form input[type="email"],
        .enrollment-form input[type="date"],
        .enrollment-form select,
        .enrollment-form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        .enrollment-form input[type="radio"],
        .enrollment-form input[type="checkbox"] {
            margin-right: 10px;
        }
        .enrollment-form button {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: #ffffff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        .enrollment-form button:hover {
            background-color: #45a049;
        }
</style>