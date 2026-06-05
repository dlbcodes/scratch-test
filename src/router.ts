import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { pages } from "./registry";

const pageRoutes: RouteRecordRaw[] = pages.map((p) => ({
	path: `/${p.slug}`,
	name: p.name,
	component: p.page,
}));

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", name: "Home", component: () => import("./pages/HomePage.vue") },
		...pageRoutes,
	],
});