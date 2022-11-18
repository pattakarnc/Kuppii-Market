<template>
    <body>
        <div class="center">
        <h1>Logout ?</h1>
        <form @submit.prevent="submitForm">
            <input type="submit" value="Confirm">        
        </form>
        </div>
    </body>    
</template>

<script>
import { app } from "../main.js";

export default {
    methods: {
        submitForm() {
            app.config.globalProperties.$displayName = "";
            app.config.globalProperties.$idToken = "";
            app.config.globalProperties.$expiresIn = "";
            app.config.globalProperties.$authenticated = false;
            this.$router.replace("/login");               
        },
    },
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body{
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
}
.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 15px 15px 15px rgba(0,0,0,0.05);
}
.center h1{
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
}
.center form{
  padding: 0 40px;
  box-sizing: border-box;
}
input[type="submit"]{
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: rgb(79, 187, 182);
  border-radius: 25px;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  margin-top: 40px;
  margin-bottom: 40px;
}
input[type="submit"]:hover{
  border-color: rgb(79, 187, 182);
  transition: .5s;
}
</style>