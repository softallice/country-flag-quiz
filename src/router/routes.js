
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/home' },
      {
        path: '/home',
        component: () => import('pages/Home/Home.vue'),
        children: [
          {
            path: '/home/FlagQuiz',
            component: () => import('pages/Quiz/FlagQuiz.vue'),
          },
          {
            path: '/home/FlagCaptalQuiz',
            component: () => import('pages/Quiz/FlagCaptalQuiz.vue'),
          },
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes