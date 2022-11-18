<template>
    <div class="card">
        <img class="img" :src="productImg">
        <h4 class="price">$ {{ productPrice }}</h4>
        <h3> {{ productTitle }}</h3>
        <p class="description"> {{ productDesc }} </p> 
        <p>
        <button class="add-button" @click="addToCart">Add to cart</button>
        </p>
    </div>
</template>

<script>
import AxiosService from "../services/AxiosService.js";
import { app } from "../main";

export default {
    props: [
        "productId",
        "productTitle",
        "productDesc",
        "productPrice",
        "productImg",
    ],
    methods: {
        addToCart() {
            AxiosService.post({
                productId: this.productId,
                productTitle: this.productTitle,
                productDesc: this.productDesc,
                productPrice: this.productPrice,
                productImg: this.productImg,
                userEmail: app.config.globalProperties.$displayName,
            })
            .then((response) => {
                console.log(response.status);
                alert("Successfully add " + this.productTitle + " to cart.");
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
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    transition: all .2s ease-in-out;
}
.img:hover {
    transform: scale(1.06);
}
.card {
    display: inline-block;
    width: 350px;
    margin: 30px;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 5px gray;
    font-family: Arial, Helvetica, sans-serif;
}
.price {
    color: gray;
}
.description {
    font-size: .95rem;
}
button.add-button {
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
button.add-button:hover {
    background-color: rgb(65, 135, 158);
}
button.add-button:active {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transform: translateY(4px);
}
</style>