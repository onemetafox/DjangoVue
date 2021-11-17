<template>
  <div>
    <div  id="recommendations" class="row p-0 ps-5 pt-2" >
      <div class="col-lg-6 col-md-6"><p class="con-heading">Connected Products</p></div>
      <div class="col-lg-3 col-md-3"></div>
    </div>
    <div  id="recommendations" class="row ps-5 p-0"  v-for="product in productList" :key="user.li" >  
      <ProductCard  :product = "product"/>
    </div>
    <div  id="recommendations" class="row ps-5 p-0" >
      <div class="main-articles-sold row">
        <pagination/>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductCard from "./ProductCard.vue";
  import Pagination from './Pagination.vue';

  export default {
    name: "ConProduct",
    components: {
        ProductCard,
        Pagination,
    },
    props:{
      productList: {
        type: any,
        default: false
      }
    }
  };
</script>
