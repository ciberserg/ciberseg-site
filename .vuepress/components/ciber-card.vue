<template>

<div class="card">
  <img :src="img" :alt="title">
  <div class="container">
    <router-link :to="to"><h4><b>{{ title }}</b></h4></router-link>
    <p>{{ subtitle }}</p>
  </div>
</div>

</template>

<script>
  export default {
    props: ['img','title','subtitle','to'],
    data() {
      return {
        msg: 'Hello Card'
      }
    }
  }
</script>

<style scoped>

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  width: 200px;
  height: 300px;
  flex: 1;
}

.card > img {
  width:50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.card h4 {
  text-align:center;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  /* padding: 2px 2px; */
}

</style>
