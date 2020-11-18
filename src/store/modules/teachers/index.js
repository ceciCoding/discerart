import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
    namespaced: true,
    state() {
        return {
            teachers: [
                {
                    id: 't1',
                    name: 'Laura Hamilton',
                    areas: ['plastic'], 
                    description: 'As lick i the shoes annoy owner until he gives you food say meow repeatedly until belly rubs, feels good yet if it fits, i sits grab pompom in mouth and put in water dish. Throwup on your pillow chew foot. Plays league of legends tweeting a baseball. ',
                    fee: 30
                },
                {
                    id: 't2',
                    name: 'Matt Smith',
                    areas: ['music', 'acting'],
                    description: 'Litter box is life chase mice peer out window, chatter at birds, lure them to mouth, so good now the other hand, too if it fits, i sits. Toy mouse squeak roll over step on your keyboard while you\'re gaming and then turn in a circle, but run outside as soon as door open, or meow all night having their mate disturbing sleeping humans purr for no reason.',
                    fee: 25
                }
            ]
        }
    },
    mutations,
    actions,
    getters
}