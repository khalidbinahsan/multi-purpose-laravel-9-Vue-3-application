import Dashboard from './components/Dashboard.vue';
import ListAppointments from './pages/appointments/ListAppointment.vue';
import ListUsers from './pages/users/ListUsers.vue';
import AdminSettings from './pages/settings/AdminSetting.vue';
import AdminProfile from './pages/profile/AdminProfile.vue';
export default[
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
    },
    {
        path: '/admin/appointment',
        name: 'admin.appointment',
        component: ListAppointments,
    },
    {
        path: '/admin/users',
        name: 'admin.users',
        component: ListUsers,
    },
    {
        path: '/admin/settings',
        name: 'admin.settings',
        component: AdminSettings,
    },
    {
        path: '/admin/profile',
        name: 'admin.profile',
        component: AdminProfile,
    }  

]