<template>
  <div>
    <div id="product-tabs">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="product-tab" data-bs-toggle="tab" data-bs-target="#product" type="button" role="tab" aria-controls="product" aria-selected="true">Products</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="articles-tab" data-bs-toggle="tab" data-bs-target="#articles" type="button" role="tab" aria-controls="articles" aria-selected="false">Articles</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="product" role="tabpanel" aria-labelledby="product-tab">
          <ProductList /> 
        </div>
        <div class="tab-pane fade" id="articles" role="tabpanel" aria-labelledby="articles-tab">
          <ArticleList /> 
        </div>
      </div>
    </div>
    <Recommendations />
    
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import store from '../../store';
  import ProductList from './products/ProductList.vue';
  import ArticleList from './articles/ArticleList.vue';

  export default {
    name: 'recipes',
    components: {
      ProductList,
      ArticleList
    },
    beforeCreate(to, from, next) {
      store.dispatch('products/search').then(() => {
        next()
      })
    },
  };
</script>
