<template>
  <div>
    <div  id="article-header" class="row p-0 ps-5 pt-2" >
      <div class="col-lg-6 col-md-6"><p class="con-heading">Connected Articles</p></div>
      <div class="col-lg-3 col-md-3"></div>
    </div>
    <div  id="article-list" class="row ps-5 p-0"  v-for="article in articleList" :key="article.id" >  
      <v-card elevation="7" outlined shaped tile dark>
        <v-card-title>{{article.name}}</v-card-title>
        <v-card-subtitle>{{article.number}}</v-card-subtitle>
        <v-card-text>
          <p>category: {{article.category}}</p>
          <p>sold_item: {{article.sold_item}}</p>
        </v-card-text>
      </v-card>

    </div>
    <div  id="article-pagination" class="row ps-5 p-0" >
      <div class="main-articles-sold row">
        <pagination/>
      </div>
    </div>
  </div>
</template>

<script>
  import ArticleCard from "./ArticleCard.vue";
  import Pagination from './Pagination.vue';
  import { mapGetters,mapActions, mapState} from 'vuex';
  import store from '../../../store';


  export default {
    name: "ConArticle",
    components: {
        ArticleCard,
        Pagination,
    },
    props:{
      articleList : {
        type : [],
        default: false
      }
    }
  };
</script>
