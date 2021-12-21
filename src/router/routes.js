
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/home' },
      {
        path: '/home',
        component: () => import('pages/Home/Home.vue'),
      },
      {
        path: '/quiz',
        component: () => import('pages/Quiz/Quiz.vue'),
        children: [
          {
            path: '/quiz/FlagQuiz',
            component: () => import('pages/Quiz/FlagQuiz.vue'),
          },
          {
            path: '/quiz/FlagCaptalQuiz',
            component: () => import('pages/Quiz/FlagCaptalQuiz.vue'),
          },
        ]
      },
      {
        path: '/badges',
        component: () => import('pages/Badge/Badges.vue'),
        children: [
          {
            path: '/badges/badge',
            component: () => import('pages/Badge/Badge.vue'),
          }
        ]
      },
      {
        path: '/settings',
        component: () => import('pages/Setting/Setting.vue'),
      },
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
