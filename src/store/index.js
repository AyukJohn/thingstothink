import userProfile from './modules/userProfile'


import { createStore } from 'vuex';

const store = createStore({
    modules: {
        userProfile
    }
});



export default store;
