<template>
    <div class="center">
        <div class="popup center">
            <div class="icon">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <i class="fa fa-check"></i>
            </div>
            <div class="title">
                Success!
            </div>
            <div class="description">
                You have completed your purchase.
            </div>
            <div class="dismiss-btn">
                <router-link to="/product">
                    <button id="dismiss-popup-btn">
                        Continue Shopping
                    </button>
                </router-link>
            </div>          
        </div>
    </div>     
</template>

<style scoped>
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
.popup {
    width: 350px;
    height: 280px;
    padding: 30px 20px;
    border-radius: 10px;
    box-sizing: border-box;
    z-index: 2;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}
.popup .icon {
    margin: 5px 0px;
    width: 50px;
    height: 50px;
    border: 2px solid #34f234;
    text-align: center;
    display: inline-block;
    border-radius: 50%;
    line-height: 60px;
}
.popup .icon i.fa {
    font-size: 30px;
    color:#34f234;
}
.popup .title {
    margin: 10px;
    font-size: 40px;
    font-weight: 600;
}
.popup .description {
    color: #222;
    font-size: 17px;
    padding: 5px;
}
.popup .dismiss-btn {
    margin-top: 19px;
    border: none;
}
.popup .dismiss-btn button {
    padding: 15px 20px;
    background: rgb(79, 187, 182);
    color: #f5f5f5;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    border: none;
}
.popup .dismiss-btn button:hover {
    color:#111;
    background: #f5f5f5;
}
</style>