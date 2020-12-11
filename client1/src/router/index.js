import Vue from 'vue'
import Router from 'vue-router'
import Discharge from '@/components/catalog/Discharge'
import Inpatient from '@/components/catalog/Inpatient'
import Mhome from '@/components/login/Mhome'
import Login from '@/components/login/Login'
import Patientinfo from '@/components/catalog/Patientinfo'
import DoctorInfo from '@/components/catalog/DoctorInfo'
import MedInfo from '@/components/catalog/MedInfo'
import Bill from '@/components/catalog/Bill'
import Sector from '@/components/catalog/Sector'
import Find from '@/components/catalog/Find'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path:'/mhome',
      name:'mhome',
      component:Mhome,
      children: [
        {
          path:'/catalog/sector',
          name:'sector',
          component:Sector
        },
        {
          path:'/catalog/doctorinfo',
          name:'home',
          component:DoctorInfo
        },
        {
          path:'/catalog/patientinfo',
          name:'patientinfo',
          component:Patientinfo
        },
        {
          path:'/catalog/Discharge',
          name:'Discharge',
          component:Discharge
        },
        {
          path:'/catalog/bill',
          name:'bill',
          component:Bill
        },
        {
          path:'/catalog/medinfo',
          name:'medinfo',
          component:MedInfo
        },
        {
          path:'/catalog/Inpatient',
          name:'Inpatient',
          component:Inpatient
        },
        {
          path:'/catalog/Find',
          name:'Find',
          component:Find
        }
      ]
    }
  ]
})
