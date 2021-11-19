<template>
    <div id="product-list">
        <input type="text" v-model="query" class="form-control">
        <div class="toolbar-holder">
            <button class="btn btn-primary" @click="search">Search</button>
        </div>
        <p>Start enter the product name and then select from matches list</p>
    </div>
    <div id="products">
        <ConProduct :productList = "productState.productList"/>
    </div>
    <div id="product-rec">
        <ProductRec/>
    </div>
</template>

<script>
import ConProduct from './ConProduct.vue';
import ProductRec from './ProductRec.vue';
import { mapGetters,mapActions, mapState} from 'vuex';
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
        })
    },
    methods:{
        search(){
           store.dispatch('products/search',this.query).then((res)=>{

           });
        }
    },
    beforeCreate(to, from, next) {
        store.dispatch('products/search').then();
        store.dispatch('products/rec').then();
    },
    
}
</script>
