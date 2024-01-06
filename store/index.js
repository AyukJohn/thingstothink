// Inside your Vuex store file (store/index.js or where userConsultation module is defined)

const userConsultation = {
    state: {
      consultationData: null,
    },
    mutations: {
      SET_USER_CONSULTATION(state, consultation) {
        state.consultationData = consultation;
      },
    },
    actions: {
      async fetchUserConsultation({ commit }, userId) {
        try {
          const token = localStorage.getItem('adminlogin');
          const userDetailsUrl = `http://127.0.0.1:8000/api/v1/admin/getUserConsultationById/${userId}`;
  
          const res = await fetch(userDetailsUrl, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (!res.ok) {
            throw new Error('Network was not okay');
          }
  
          const userData = await res.json();
          const consultation = userData.bookings; // Assuming bookings is the relevant data
  
          commit('SET_USER_CONSULTATION', consultation);
        } catch (error) {
          console.error('Error fetching user consultation:', error.message);
          throw error; // Re-throw the error for the component to handle
        }
      },
    },
    getters: {
      consultationData: state => state.consultationData,
    },
  };
  
  // ... other modules and store setup
  
  export default new Vuex.Store({
    modules: {
      userConsultation,
      // ... other modules
    },
  });
  