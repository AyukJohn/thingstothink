<template>
    <div>
        <nav class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand">Faculty Of Computing</a>



                <div class="dropdown">
                    <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Addministration
                    </button>
                    <ul class="dropdown-menu" style="margin-right: 5% !important;">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

            </div>
        </nav>
    </div>
</template>


<script>

export default{
    // name: HeaderPage
}

</script>


<style scoped>

    .navbar{
        height: 12vh !important;
        background-color: #ffffff;
        box-shadow: 0px 5px 10px rgba(15, 15, 15, 0.2);
        font-family: "Gupter", serif;
    }

    .navbar-brand{
        margin-left: 1.5%;
    }

</style>