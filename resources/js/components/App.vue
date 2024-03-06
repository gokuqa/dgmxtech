<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark .bg-light">
            <div class="container-fluid">
             
                
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"></li>
                        <li class="nav-item">
                            <router-link
                                exact-active-class="active"
                                to="/blogs"
                                class="nav-link text-dark"
                            >
                                <img
                                    src="../../../public/descarga.png"
                                    alt=""
                                    width="140"
                                    height="24"
                                />
                            </router-link>
                        </li>
                        <li class="nav-item"></li>
                    </ul>
                </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
export default {};
</script>
