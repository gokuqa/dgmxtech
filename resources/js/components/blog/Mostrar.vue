<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 mb-3">
                <router-link
                    :to="{ name: 'crearBlog' }"
                    class="btn btn-success"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-plus-square-fill"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"
                        />
                    </svg>
                    Crear nuevo post
                </router-link>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <div class="table-container">
                        <table class="table table-striped">
                            <thead class="purple text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Título</th>
                                    <th>Contenido</th>
                                    <th class="small-cell">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="blog in blogs"
                                    :key="blog.id"
                                    class="table-row-hover"
                                >
                                    <td>{{ blog.id }}</td>
                                    <td>{{ blog.titulo }}</td>
                                    <td>{{ blog.contenido }}</td>
                                    <td class="small-cell">
                                        <router-link
                                            :to="{
                                                name: 'editarBlog',
                                                params: { id: blog.id }
                                            }"
                                            class="btn btn-info btn-sm me-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-pencil"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
                                                />
                                            </svg>
                                        </router-link>
                                        <button
                                            @click="borrarBlog(blog.id)"
                                            class="btn btn-danger btn-sm"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-trash"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                                                />
                                                <path
                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                                                />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "blogs",
    data() {
        return {
            blogs: []
        };
    },
    mounted() {
        this.mostrarBlogs();
    },
    methods: {
        async mostrarBlogs() {
            try {
                const response = await this.axios.get("/api/blog");
                this.blogs = response.data;
            } catch (error) {
                console.log(error);
                this.blogs = [];
            }
        },
        borrarBlog(id) {
            if (
                confirm(
                    "seguro que deseas eliminar esto? no hay forma de deshacer esta accion."
                )
            ) {
                this.axios
                    .delete(`/api/blog/${id}`)
                    .then(() => {
                        this.mostrarBlogs();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
};
</script>

<style scoped>
.table-row-hover:hover {
    background-color: #f5f5f5;
}

.small-cell {
    width: 120px;
}

.purple {
    background-color: #390495;
}

.table {
    border-radius: 10px;
    overflow: hidden; /* Para asegurar que el borde redondeado se aplique correctamente */
}

.table thead th:first-child {
    border-top-left-radius: 10px;
}

.table thead th:last-child {
    border-top-right-radius: 10px;
}

.table tbody tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
}

.table tbody tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
}
</style>
