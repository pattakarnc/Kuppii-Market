<template>
    <div class="boxContainer">
        <table class="search-wrapper">
            <tr>
                <td>
                    <input type="text" class="search" v-model="search" placeholder="Search Products.."/>
                </td>
                 <td>
                    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </td>
            </tr>
        </table>
    </div>
    <h3>Sort by: </h3>
    <div class="dropdown">
        <div class="select">
            <select v-model="sortBy" @change="onChange()">
                <option value="lowhi">Price: Low - High</option>
                <option value="hilow">Price: High - Low</option>
                <option value="a-z">Alphabet: A - Z</option>
                <option value="z-a">Alphabet: Z - A</option>
            </select>
        </div>      
    </div>  
    <div class="product">
        <product-item
            v-for="product in filteredList"
            :key="product.id"
            :productId="product.id"
            :productTitle="product.title"
            :productDesc="product.description"
            :productPrice="product.price"
            :productImg="product.img"
        >
        </product-item>
    </div>
</template>

<script>
import ProductItem from "./ProductItem.vue"

export default {
    data() {
        return {
            search: '',
            sortBy: '',
        }
    },
    inject: ["products"],
    components: { ProductItem },
    methods: {
        compareLowHi(a, b) {
            if (a.title < b.title)
                return -1;
            if (a.title > b.title)
                return 1;
            return 0;
        },
        compareHiLow(a, b) {
            if (b.title < a.title)
                return -1;
            if (b.title > a.title)
                return 1;
            return 0;
        },
        onChange() {
            if (this.sortBy == "a-z") {
                return this.products.sort(this.compareLowHi);
            }
            if (this.sortBy == "z-a") {
                return this.products.sort(this.compareHiLow);
            } 
            if (this.sortBy == "lowhi") {
                return this.products.sort((a, b) => a.price - b.price);
            }
            if (this.sortBy == "hilow") {
                return this.products.sort((a, b) => b.price - a.price);
            }
        },
    },
    computed: {
        filteredList() {
        return this.products.filter(post => {
            return post.title.toLowerCase().includes(this.search.toLowerCase())
        })
        }
    }
};
</script>

<style scoped>
.product {
    text-align: center;
}
.boxContainer {
    margin: auto;
    margin-top: 50px;
    margin-bottom: 25px;
    position: relative;
    width: 300px;
    height: 42px;
    border: 4px solid rgb(79, 187, 182);
    padding: 0px 10px;
    border-radius: 50px;
}
.search-wrapper {
    width: 100%;
    height: 100%;
    vertical-align: middle;
}
.search {
    border: none;
    width: 100%;
    height: 100%;
    padding: 0px 5px;
    font-size: 16px;
    color: #424242;
    font-weight: 500;
}
.search:focus {
    outline: none;
}
i {
    color: rgb(79, 187, 182);
}
h3 {
    font-family: Arial, Helvetica, sans-serif; 
    margin-left: 10px;
    margin-bottom: 10px;
    font-weight: 600;
    color:rgb(79, 160, 187);
}
.dropdown{
  font-size: 17px;
  padding: 10px 8px 10px 14px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  width: 200px;
  margin-bottom: 10px;
  margin-left: 10px;
}
.dropdown .select{
  width: 100%;
  background-position: 80% center;
}
.dropdown .select select{
  background: transparent;
  line-height: 1;
  border: 0;
  padding: 0;
  border-radius: 0;
  width: 100%;
  position: relative;
  z-index: 10;
  font-size: 1em;
  outline: none;
}
</style>