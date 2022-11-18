<template>
    <div class="cart-item-card" v-if="this.amount > 0">
        <img class="img" :src="productImg">
        <h3>{{ productTitle }}</h3>
        <h4>Cost: ${{ productPrice }}</h4>
        <h4>quantity: {{ amount }}</h4>
        <button class="remove-button" @click="removeFromCart">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <i class="fa fa-trash"></i>
        </button>
    </div>
    
</template>

<script>
import axios from "axios";
import AxiosService from "../services/AxiosService.js";
import { app } from "../main";

export default {
    props: ["productId", "productTitle","productDesc","productPrice","productImg"],
    data() {
        return {
            result: [],
            amount: 0,
        }
    },
    mounted() {
        this.getResult();
    },
    methods: {
        getResult() {
            AxiosService.get()
            .then((response) => {
                const data = response.data;
                const localArray = [];
                for (const frbId in data) {
                    const anObj = {};
                    anObj.productId = data[frbId].productId;
                    anObj.productTitle = data[frbId].productTitle;
                    anObj.productDesc = data[frbId].productDesc;
                    anObj.productPrice = data[frbId].productPrice;
                    anObj.productImg = data[frbId].productImg;
                    if (anObj.productId === this.productId && data[frbId].userEmail === app.config.globalProperties.$displayName) {
                        localArray.push(anObj);
                    } 
                }
                this.result = localArray;
                this.amount = this.result.length;
            })
            .catch((error) => {
                console.log(error);
            });
        },
        removeFromCart() {
            AxiosService.get()
            .then((response) => {
                const data = response.data;
                let itemId = "";
                for (const frbId in data) {
                    if (this.productId === data[frbId].productId && data[frbId].userEmail === app.config.globalProperties.$displayName) {
                        itemId = frbId;
                        break;
                    }
                }
                const baseURL = "https://iccs340-project-default-rtdb.asia-southeast1.firebasedatabase.app/cartitem/";
                axios.delete(baseURL + itemId + ".json?auth=" + app.config.globalProperties.$idToken);
                this.amount = this.amount - 1;
            })
            .catch((error) => {
                console.log(error);
            });
        },
    },
};
</script>

<style scoped>
h3 {
    color: rgb(26, 168, 62);
}
.img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 140px;
    float: left;
    margin-right: 30px;
}
.cart-item-card {
    margin: 30px;
    padding: 10px;
    height: 155px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 10px gray;
    font-family: Arial, Helvetica, sans-serif;
}
button.remove-button {
    padding: 15px 25px;
    background-color: red;
    border: none;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    float: right;
    margin-top: -85px;
    
}
</style>