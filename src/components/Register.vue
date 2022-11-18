<template>
    <body>
        <div class="center">
        <h1>Register</h1>
        <form @submit.prevent="submitForm">
            <div class="txt_field">
                <input type="text" id="username" v-model="username" required>
                <span></span>
                <label for="username">Username</label>
            </div>
            <div class="txt_field">
                <input type="text" id="email" v-model="email" required>
                <span></span>
                <label for="email">Email</label>
            </div>
            <div class="txt_field">
                <input type="password" id="password1" v-model="password1" required>
                <span></span>
                <label for="password1">Password</label>
            </div>
            <div class="txt_field">
                <input type="password" id="password2" v-model="password2" required>
                <span></span>
                <label for="password2">Confirm Password</label>
            </div>
            <input type="submit" value="Signup">
            <div class="signup_link">
              Already a member? <router-link to="/login"><a>Signin</a></router-link>
            </div>    
            </form>
        </div>
     </body>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            email: "",
            password1: "",
            password2: "",
        };
    },
    methods: {
        submitForm() {
            console.log(
                this.username + 
                " " + 
                this.email + 
                " " + 
                this.password1 + 
                " " + 
                this.password2
            );
            if (this.password1 === this.password2) {
                fetch(
                    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyATeE6sPRB4Qso56mxh2FRrvQMleOkq3L8",
                    {
                        method: "POST",
                        body: JSON.stringify(
                            {
                                displayName: this.username,
                                email: this.email,
                                password: this.password1,
                                returnSecureToken: true,
                            }
                        ),
                    }
                )
                 .then((response) => response.json())
                 .then((data) => {
                     if (data.error != null) {
                         console.log("ERROR: signUp");
                         console.log(data.error);
                         alert(data.error.message)
                     }
                     else {
                         alert("Proceed to login page");
                         this.$router.replace("/login");
                     }
                 })
                 .catch((error) => console.log(error));
            }
            else {
                alert("The passwords do not match!");
            }
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
form .txt_field{
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;  
}
.txt_field input{
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
.txt_field label{
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: .5s;
}
.txt_field span::before{
  content: '';
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #2691d9;
  transition: .5s;
}
.txt_field input:focus ~ label,
.txt_field input:valid ~ label{
  top: -5px;
  color: #2691d9;
}
.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before{
  width: 100%;
}
.pass{
  margin: -5px 0 20px 5px;
  color: #a6a6a6;
  cursor: pointer;
}
.pass:hover{
  text-decoration: underline;
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
}
input[type="submit"]:hover{
  border-color: rgb(79, 187, 182);
  transition: .5s;
}
.signup_link{
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}
.signup_link a{
  color: #2691d9;
  text-decoration: none;
}
.signup_link a:hover{
  text-decoration: underline;
}
</style>
