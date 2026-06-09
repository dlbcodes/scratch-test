import type { Component } from "vue";

// Single source of truth for the demo pages: add an entry here and it gets a
// route AND shows up on the home page.
export interface PageEntry {
	/** URL path: /<slug> */
	slug: string;
	/** Display name (nav + home card) */
	name: string;
	/** One-line description for the home card */
	description: string;
	/** Lazy-loaded page component */
	page: () => Promise<{ default: Component }>;
}

export const pages: PageEntry[] = [
	{
		slug: "login",
		name: "Login",
		description: "Auth screen with email, password, remember me, and social buttons.",
		page: () => import("./pages/LoginPage.vue"),
	},
	{
		slug: "settings",
		name: "Settings",
		description: "Account form using Field, Input, Textarea, Switch, Select, and Checkbox.",
		page: () => import("./pages/SettingsPage.vue"),
	},
	{
		slug: "team",
		name: "Team",
		description: "Member list with Avatar, Badge, Dropdown actions, and a remove Modal.",
		page: () => import("./pages/TeamPage.vue"),
	},
	{
		slug: "command",
		name: "Command",
		description: "A searchable command palette in a Modal with Kbd and Spinner.",
		page: () => import("./pages/CommandPage.vue"),
	},
	{
		slug: "profile",
		name: "Profile",
		description: "Profile editor with a large Avatar, Field, and MultiSelect skills.",
		page: () => import("./pages/ProfilePage.vue"),
	},
	{
		slug: "dashboard",
		name: "Dashboard",
		description: "Overview with Panel stat cards and an activity feed.",
		page: () => import("./pages/DashboardPage.vue")
	},
	{
		slug: "create-project",
		name: "Create project",
		description: "Validation form showing the Field error path.",
		page: () => import("./pages/CreateProjectPage.vue")
	},
	{
		slug: "filters",
		name: "Filters",
		description: "Popover-based filter controls with counts.",
		page: () => import("./pages/FiltersPage.vue")
	},
	{
		slug: "workspace",
		name: "Workspace",
		description: "A team switcher popover with avatars, plan badges, and key hints.",
		page: () => import("./pages/WorkspacePage.vue")
	},
	{
		slug: "faq",
		name: "FAQ",
		description: "Help page with Tabs for categories and Disclosure for each question.",
		page: () => import("./pages/FaqPage.vue"),
	},
	{
		slug: "account",
		name: "Account",
		description: "Tabbed account settings with a Disclosure for advanced options.",
		page: () => import("./pages/AccountPage.vue"),
	},
	{
		slug: "sidebar",
		name: "Sidebar",
		description: "A responsive dashboard shell with a sidebar and mobile drawer.",
		page: () => import("./pages/SidebarPage.vue"),
	},
];