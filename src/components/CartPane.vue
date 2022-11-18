<template>
    <div class="product">
        <cart-item
            v-for="item in products"
            :key="item"
            :productId="item.id"
            :productTitle="item.title"
            :productDesc="item.description"
            :productPrice="item.price"
            :productImg="item.img"
        >
        </cart-item>
    </div>
    <div class="button">
        <button id="myBtn" class="checkout-button" @click="checkout" v-if="this.totalPrice > 0">Proceed to Checkout</button>
    </div>
    <div class="modal" id="myModal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>Total Price: ${{ totalPrice }}</h3>
            <button class="pay-button" @click="pay">Pay</button>
        </div>    
    </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import AxiosService from "../services/AxiosService.js";
import axios from "axios";
import { app } from "../main";

export default {
    inject: ["products"],
    components: { CartItem }, 
    data() {
        return {
            totalPrice: 0,
        }
    },
    mounted() {
        this.checkout();
    },
    methods: {
        checkout() {
            AxiosService.get()
            .then((response) => {
                const data = response.data;
                this.totalPrice = 0;
                for (const frbId in data) {
                    if (data[frbId].userEmail === app.config.globalProperties.$displayName) {
                        this.totalPrice = this.totalPrice + data[frbId].productPrice;
                    }
                }
                var modal = document.getElementById("myModal");
                var btn = document.getElementById("myBtn");
                var span = document.getElementsByClassName("close")[0];
                btn.onclick = function() {
                modal.style.display = "block";
                }
                span.onclick = function() {
                modal.style.display = "none";
                }
                window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
                }
            })
            .catch((error) => {
                console.log(error);
            });
        },
        pay() {
            if (this.totalPrice == 0) {
                alert("Your cart is empty!")
            }
            else {
                AxiosService.get()
                .then((response) => {
                    const data = response.data;
                    const baseURL = "https://iccs340-project-default-rtdb.asia-southeast1.firebasedatabase.app/cartitem/";
                    for (const frbId in data) {
                        if (data[frbId].userEmail == app.config.globalProperties.$displayName) {
                            axios.delete(baseURL + frbId + ".json?auth=" + app.config.globalProperties.$idToken);
                        }
                    }
                    this.$router.replace("/thankyou");
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        },
    },
};
</script>

<style scoped>
h3 {
    font-family: Arial, Helvetica, sans-serif;
}
.button {
    margin-top: 30px;
}
button.checkout-button {
    padding: 15px;
    background-color: rgb(79, 160, 187);
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
    margin: auto;
    display: block;
}
button.checkout-button:hover {
    background-color: rgb(65, 135, 158);
}
.checkout-button:active {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transform: translateY(4px);
}
button.pay-button {
    padding: 10px;
    background-color: rgb(69, 204, 64);
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.10rem;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    width: 100%;
    margin-top: 60px;
}
button.pay-button:hover {
    background-color: rgb(56, 158, 50);
}
.pay-button:active {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transform: translateY(4px);
}

/* Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal */
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
}
/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>