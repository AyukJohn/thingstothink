const userProfileModule = {
  state: {
    userProfile: null,
  },

  mutations: {
    SET_USER_PROFILE(state, userProfile) {
      state.userProfile = userProfile;
    },
  },

  actions: {
    async fetchUserProfile({ commit }, userId) {
      try {
        const token = localStorage.getItem('adminlogin');
        const userDetailsUrl = `https://stagingapp2.fintabng.com/api/v1/admin/user/${userId}`;

        const res = await fetch(userDetailsUrl, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Network was not ok');
        }

        const userData = await res.json();
        // console.log(userData);
        commit('SET_USER_PROFILE', userData.user);
      } catch (error) {
        console.error('Error fetching user details:', error.message);
      }
    },
  },

  getters: {
    getUserProfile: (state) => state.userProfile,
  },
};

export default userProfileModule;
