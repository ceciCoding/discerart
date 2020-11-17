import { createRouter, createWebHistory } from 'vue-router';

import AdDetails from './pages/ads/AdDetails.vue';
import AdsList from './pages/ads/AdsList.vue';
import NewAd from './pages/ads/NewAd.vue';
import ContactUser from './pages/messages/ContactUser.vue';
import ReceivedMessages from './pages/messages/ReceivedMessages.vue';
import UserRegistration from './pages/users/UserRegistration.vue';
import UserDetails from './pages/users/UserDetails.vue';
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AdsList },
        { path: '/ad/:id', component: AdDetails },
        {
            path: '/user/:id', component: UserDetails, children: [
                { path: '/contact', component: ContactUser },
                { path: '/new-add', component: NewAd },

            ]
        },
        { path: '/register', component: UserRegistration },
        { path: '/messages', component: ReceivedMessages },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;