import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSession from 'vue-session';

Vue.use(VueSession)
Vue.use(VueRouter)
function guardMyroute(to, from, next) {
  var isAuthenticated = true;
  if (sessionStorage.length > 0)
    isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next("/ForbiddenAccess"); // go to '/login';
  }
}
const routes = [
  {
    path: '/home',
    name: 'home',
    beforeEnter: guardMyroute,
    component: () => import('../clerkComponents/Home.vue')
  },
  {
    path: '/homeMF',
    name: 'homeMF',
    beforeEnter: guardMyroute,
    component: () => import('../medicalFacilityComponents/HomeMedicalFacility.vue')
  },
  {
    path: '/add',
    name: 'add',
    beforeEnter: guardMyroute,
    component: () => import('../medicalFacilityComponents/CreateComponent.vue')
  },
  {
    path: '/viewProfileMF',
    name: 'profileMF',
    beforeEnter: guardMyroute,
    component: () => import('../medicalFacilityComponents/ProfileMF.vue')
  },
  {
    path: '/view',
    name: 'view',
    beforeEnter: guardMyroute,
    component: () => import('../components/ListComponent.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    beforeEnter: guardMyroute,
    component: () => import('../components/EditComponent.vue')
  },
  {
    path: '/register',
    name: 'register',
    beforeEnter: guardMyroute,
    component: () => import('../medicalFacilityComponents/FormValidation.vue')
  },
  {
    path: '/',
    name: 'LoginType',
    component: () => import('../components/LoginType.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../medicalFacilityComponents/LoginForm.vue')
  },
  {
    path: '/viewClerks',
    name: 'viewClerks',
    beforeEnter: guardMyroute,
    component: () => import('../medicalFacilityComponents/ClerkListComponent.vue')
  },
  {
    path: '/viewPatientsClerk',
    name: 'viewPatientsClerk',
    beforeEnter: guardMyroute,
    component: () => import('../clerkComponents/PatientListComponent.vue')
  },
  {
    path: '/viewPatientsMF',
    name: 'viewPatientsMF',
    beforeEnter: guardMyroute,
    component: () => import('../medicalFacilityComponents/PatientListComponentMF.vue')
  },
  {
    path: '/addMedicalRecord',
    name: 'addMedicalRecord',
    beforeEnter: guardMyroute,
    component: () => import('../clerkComponents/AddMedicalRecord.vue')
  },
  {
    path: '/registerMF',
    name: 'registerMF',
    beforeEnter: guardMyroute,
    component: () => import('../medicalFacilityComponents/MedicalFacilityFormValidation.vue')
  },
  {
    path: '/clerkLogin',
    name: 'clerkLogin',
    component: () => import('../clerkComponents/ClerkLoginForm.vue')
  },
  {
    path: '/ForbiddenAccess',
    name: 'forbiddenAccess',
    component: () => import('../components/ForbiddenAccess.vue')
  },
  {
    path: '/viewClerkDoctors',
    name: 'viewClerkDoctors',
    beforeEnter: guardMyroute,
    component: () => import('../clerkComponents/ViewClerkDoctor.vue')
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router