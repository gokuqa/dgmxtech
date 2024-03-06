const Mostrar = () => import("./components/blog/Mostrar.vue");
const Crear = () => import("./components/blog/Crear.vue");
const Editar = () => import("./components/blog/Editar.vue");

export const routes = [
  
    {
        name: "mostrarBlogs",
        path: "/blogs",
        component: Mostrar
    },
    {
        name: "crearBlog",
        path: "/crear",
        component: Crear
    },
    {
        name: "editarBlog",
        path: "/editar/:id",
        component: Editar
    }
];
