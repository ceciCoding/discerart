import { createRouter, createWebHistory } from 'vue-router';

import TeacherDetails from './pages/teachers/TeacherDetails.vue';
import TeachersList from './pages/teachers/TeachersList.vue';
import ContactTeacher from './pages/messages/ContactTeacher.vue';
import ReceivedMessages from './pages/messages/ReceivedMessages.vue';
import TeacherRegistration from './pages/teachers/TeacherRegistration.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teachers' },
        { path: '/teachers', component: TeachersList },
        {
            path: '/teachers/:id', component: TeacherDetails, props: true, children: [
                { path: 'contact', component: ContactTeacher },
            ]
        },
        { path: '/login', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/register', component: TeacherRegistration, meta: { requiresAuth: true } },
        { path: '/messages', component: ReceivedMessages, meta: { requiresAuth: true } },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

router.beforeEach(function (to, _, next) {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/login');
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next('/');
    } else {
        next();
    }
})

export default router;