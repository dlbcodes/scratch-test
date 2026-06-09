import { createRouter, createWebHistory } from "vue-router";
import { pages } from "./registry";
import HomePage from "./pages/HomePage.vue";

const registryRoutes = pages.map((p) => ({
	path: `/${p.slug}`,
	name: p.slug,
	component: p.page,
}));

export const router = createRouter({    // ← named export
	history: createWebHistory(),
	routes: [
		{ path: "/", name: "home", component: HomePage },
		...registryRoutes,
		{
			path: "/dashboard-demo",
			name: "dashboard-demo",
			component: () => import("./pages/DashboardDemo.vue"),
			meta: { fullscreen: true },
		},
		{
			path: "/chat-demo",
			name: "chat-demo",
			component: () => import("./pages/ChatDemo.vue"),
			meta: { fullscreen: true },
		},
		{
			path: "/settings-demo",
			name: "settings-demo",
			component: () => import("./pages/SettingsDemo.vue"),
			meta: { fullscreen: true },
		},
	],
});