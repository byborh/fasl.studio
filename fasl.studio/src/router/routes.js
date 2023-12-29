
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      // { path: 'testFile', component: () => import('pages/testFile.vue') }
      { path: 'nouveautes', component: () => import('pages/LesNouveautes.vue') },
      { path: 'vetements', component: () => import('pages/LesVetements.vue') },
      { path: 'accessoires', component: () => import('pages/LesAccessoires.vue') },
      { path: 'a-propos', component: () => import('pages/APropos.vue') },
      { path: 'contactes', component: () => import('pages/LesContactes.vue') }


    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
