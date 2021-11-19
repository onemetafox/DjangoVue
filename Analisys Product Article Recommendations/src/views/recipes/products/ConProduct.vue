<template>
  <div>
    <div  id="product-header" class="row p-0 ps-5 pt-2" >
      <div class="col-lg-6 col-md-6"><p class="con-heading">Connected Products</p></div>
      <div class="col-lg-3 col-md-3"></div>
    </div>
    <div  id="product-list" class="row ps-5 p-0"  v-for="product in productList" :key="product.id" >  
      <v-card elevation="7" outlined shaped tile dark>
        <v-card-title>{{product.name}}</v-card-title>
        <v-card-subtitle>{{product.number}}</v-card-subtitle>
        <v-card-text>
          <p>category: {{product.category}}</p>
          <p>sold_item: {{product.sold_item}}</p>
        </v-card-text>
      </v-card>

    </div>
    <div  id="product-pagination" class="row ps-5 p-0" >
      <div class="main-articles-sold row">
        <pagination/>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductCard from "./ProductCard.vue";
  import Pagination from './Pagination.vue';
  import { mapGetters,mapActions, mapState} from 'vuex';
  import store from '../../../store';


  export default {
    name: "ConProduct",
    components: {
        ProductCard,
        Pagination,
    },
    props:{
      productList : {
        type : [],
        default: false
      }
    }
  };
</script>
