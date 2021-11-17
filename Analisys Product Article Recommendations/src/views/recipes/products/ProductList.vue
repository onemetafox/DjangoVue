<template>
    <div id="product-list">
        <input type="text" class="form-control">
        <div class="toolbar-holder">
            <button class="btn btn-primary">Analyze</button>
        </div>
        <p>Start enter the product name and then select from matches list</p>
    </div>
    <div id="products">
        <ConProduct :productList = "productState:productList"/>
    </div>
    <div id="product-rec">
        <ProductRec :productRecList="productState.productRecList"/>
    </div>
</template>

<script>
import ConProduct from './ConProduct.vue';
import ProductRec from './ProductRec.vue';
import { mapGetters,mapActions} from 'vuex';
import store from '../../../store';
export default {
    name: 'ProductList',
    components: {
        ConProduct,
        ProductRec
    },
    computed: {
      ...mapGetters({
        productState: 'products/getState'
      }),
      // wrapClass() {
      //   return this.leadState.editID === -1 ? 'medium-12' : 'medium-9';
      // },
      // showEditPan() {
      //   return this.leadState.editID !== -1 && this.leadState.editID !== 'new';
      // },
    },
    beforeCreate(to, from, next) {
      store.dispatch('products/search').then(() => {
        next()
      });
      store.dispatch('products/rec').then(() => {
        next()
      });
    },
    
}
</script>
