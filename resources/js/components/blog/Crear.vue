<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
             
                <div class="card-header purple  text-center"><h4 class="text-white">Crear</h4></div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Título</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="blog.titulo"
                                    />
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-floating">
                                    <textarea
                                        class="form-control"
                                        id="floatingTextarea2"
                                        v-model="blog.contenido"
                                        style="height: 100px"
                                    ></textarea>
                                    <label for="floatingTextarea2"
                                        >Contenido</label
                                    >
                                </div>
                            </div>
                            <div class="row justify-content-between">
                                <div class="col-auto">
                                    <router-link
                                        exact-active-class="active"
                                        to="/blogs"
                                        class="btn blue"
                                        >Cancelar</router-link
                                    >
                                </div>
                                <div class="col-auto">
                                    <button
                                        type="submit"
                                        class="btn btn-success"
                                    >
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "crear-blog",
    data() {
        return {
            blog: {
                titulo: "",
                contenido: ""
            }
        };
    },
    methods: {
        async crear() {
            await this.axios
                .post("/api/blog", this.blog)
                .then(response => {
                    this.$router.push({ name: "mostrarBlogs" });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
<style scoped>
.purple {
    background-color: #390495;
}
.blue{
    background-color: #0dcaf0;
    color: white;
}
</style>
