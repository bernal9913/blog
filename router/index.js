import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '@/views/Inicio.vue';
import ListaArticulos from '@/views/ListaArticulos.vue';
import DetalleArticulo from '@/views/DetalleArticulo.vue';

const routes = [
    { path: '/', name: 'Inicio', component: Inicio },
    { path: '/lista-articulos', name: 'ListaArticulos', component: ListaArticulos },
    { path: '/articulo/:id', name: 'DetalleArticulo', component: DetalleArticulo },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
