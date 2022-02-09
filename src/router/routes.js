const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "",
      component: () => import("pages/Products.vue"),
      name:"Products"},
      { path: "/about",
        component: () => import("pages/About.vue"),
        name:"About"}
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
