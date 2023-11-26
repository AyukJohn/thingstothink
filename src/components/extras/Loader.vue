<template>
    <div v-if="isLoading" class="loader"></div>
</template>
  
  <script>
  export default {
    props: {
      isLoading: Boolean,
    },
  };
  </script>
  
  <style scoped>
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #db7134;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  