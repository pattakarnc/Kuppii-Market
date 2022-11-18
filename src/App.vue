<template>
  <div id="nav">
    <router-link to="/product"> Product </router-link>
    <router-link to="/cart"> Cart </router-link>
    <router-link to="/logout"> Logout </router-link>
  </div>
  <router-view></router-view>  
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      products: [
        {
          description : "An acrylic key chain",
          id : 1,
          price : 14,
          img: "https://s2.booth.pm/2faf5f7f-00bd-4576-ab0b-41ca409c267e/i/1952110/4c468024-586c-429f-8ad5-eb068645f650_base_resized.jpg",
          title : "Rufen Key Chain",
        }, 
        {
          description : "An acrylic key chain",
          id : 2,
          price : 12,
          img : "https://s2.booth.pm/2faf5f7f-00bd-4576-ab0b-41ca409c267e/i/1951819/99ec061a-8354-40d7-937b-2db9d99a9192_base_resized.jpg",
          title : "Alba Key Chain",
        }, 
        {
          description : "A primo art",
          id : 3,
          price : 133,
          img : "https://s2.booth.pm/2faf5f7f-00bd-4576-ab0b-41ca409c267e/i/1945587/b9df3567-3701-4e53-8fef-a55154959882_base_resized.jpg",
          title : "The Departure Of The Day",
        }, 
        {
          description : "A primo art",
          id : 4,
          price : 145,
          img : "https://s2.booth.pm/2faf5f7f-00bd-4576-ab0b-41ca409c267e/i/1941764/11b7988e-1cff-4aa3-a99c-900901bd5848_base_resized.jpg",
          title : "Floating Feelings",
        }, 
        {
          description : "A primo art",
          id : 5,
          price : 128,
          img : "https://s2.booth.pm/2faf5f7f-00bd-4576-ab0b-41ca409c267e/i/1941680/384feef3-c5ee-4608-ab4f-2af875b6515a_base_resized.jpg",
          title : "Walking The Beast",
        }, 
        {
          description : "An acrylic block",
          id : 6,
          price : 55,
          img : "https://s2.booth.pm/2faf5f7f-00bd-4576-ab0b-41ca409c267e/i/2038966/e931a6ec-f03b-497b-aa99-9f9f6a89370d_base_resized.jpg",
          title : "Rufen Acrylic Block",
        },
        {
          description : "An acrylic block",
          id : 7,
          price : 50,
          img : "https://s2.booth.pm/2faf5f7f-00bd-4576-ab0b-41ca409c267e/i/2038985/dd32cbad-f68f-4c46-ba07-de6eec193757_base_resized.jpg",
          title : "Alba Acrylic Block",
        },
        {
          description : "A set of Rufen photoshoot",
          id : 8,
          price : 10,
          img : "https://kemono-line.jp/_src/49905196/img20190721172141150875.webp?v=1604987446913",
          title : "Rufen Postcard Set A",
        },
        {
          description : "A set of Rufen photoshoot",
          id : 9,
          price : 10,
          img : "https://kemono-line.jp/_src/49905198/img20190721172141150745.webp?v=1604987446913",
          title : "Rufen Postcard Set B",
        },
        {
          description : "A collection of Rady's art",
          id : 10,
          price : 17,
          img : "https://kemono-line.jp/_src/49905054/img20191231152753937212.webp?v=1604987446913",
          title : "Rady's sketchbook",
        },
        {
          description : "A custom-made Rufen costume",
          id : 11,
          price : 9850,
          img : "https://kemono-line.jp/_src/49905194/img20190721172141144184.webp?v=1604987446913",
          title : "Rufen Fursuit",
        },
        {
          description : "A custom-made Alba costume",
          id : 12,
          price : 9750,
          img : "https://kemono-line.jp/_src/49905242/img20190721172141142965.webp?v=1604987446913",
          title : "Alba Fursuit",
        },
      ],  
    };
  },
  
  provide() {
    return {
      products: this.products,
    };
  },
};
</script>

<style scoped>
#nav {
  padding: 10px;
  width: 100%;
  height: 40px;
  background-color: rgb(79, 187, 182);
  line-height: 40px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
a {
  font-weight: bold;
  color: white ;
  text-decoration: none;
  margin: 10px 10px;
  font-size: 1.3rem;
}
a.router-link-active {
  color:#2c3e50;
}  
</style>
