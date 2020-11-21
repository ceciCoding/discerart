import { createRouter, createWebHistory } from 'vue-router';

import TeacherDetails from './pages/teachers/TeacherDetails.vue';
import TeachersList from './pages/teachers/TeachersList.vue';
import ContactTeacher from './pages/messages/ContactTeacher.vue';
import ReceivedMessages from './pages/messages/ReceivedMessages.vue';
import TeacherRegistration from './pages/teachers/TeacherRegistration.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teachers' },
        { path: '/teachers', component: TeachersList},
        { path: '/teachers/:id', component: TeacherDetails, props: true, children: [
                { path: 'contact', component: ContactTeacher },
            ]
        },
        { path: '/login', component: UserAuth},
        { path: '/register', component: TeacherRegistration },
        { path: '/messages', component: ReceivedMessages },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;