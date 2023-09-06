<template>
  <ul>
    <li><router-link active-class="active" to="/home">Home</router-link></li>
    <li><router-link active-class="active" to="/new">News</router-link></li>
    <li>
      <router-link active-class="active" to="/contact">Contact</router-link>
    </li>
    <li><router-link active-class="active" to="/post">Post</router-link></li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
}

li {
  float: left;
}

li a {
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a :hover:not(.active) {
  background-color: #ddd;
}

li a.active {
  color: white;
  background-color: #04aa6d;
}
</style>
