<template>
    <div id="product-list">
        <input type="text" class="form-control">
        <div class="toolbar-holder">
            <button class="btn btn-primary">Analyze</button>
        </div>
        <p>Start enter the product name and then select from matches list</p>
    </div>
    <div id="products">
        <ConProduct/>
    </div>
</template>

<script>
import ConProduct from './ConProduct.vue';
import { mapGetters,mapActions} from 'vuex';
export default {
    name: 'ProductList',
    components: {
        ConProduct
    },
    computed: {
      ...mapGetters({
        leadState: 'products/getState'
      }),
      wrapClass() {
        return this.leadState.editID === -1 ? 'medium-12' : 'medium-9';
      },
      showEditPan() {
        return this.leadState.editID !== -1 && this.leadState.editID !== 'new';
      },
    },
    beforeRouteEnter(to, from, next) {
      store.dispatch('products/search').then(() => {
        next()
      })
    },
}
</script>
