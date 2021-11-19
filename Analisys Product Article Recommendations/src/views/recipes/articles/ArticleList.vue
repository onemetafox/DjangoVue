<template>
    <div id="article-list">
        <input type="text" v-model="query" class="form-control">
        <div class="toolbar-holder">
            <button class="btn btn-primary" @click="search">Search</button>
        </div>
        <p>Start enter the article name and then select from matches list</p>
    </div>
    <div id="articles">
        <ConArticle :articleList = "articleState.articleList"/>
    </div>
    <div id="article-rec">
        <ArticleRec/>
    </div>
</template>

<script>
import ConArticle from './ConArticle.vue';
import ArticleRec from './ArticleRec.vue';
import { mapGetters,mapActions, mapState} from 'vuex';
import store from '../../../store';
export default {
    name: 'ArticleList',
    components: {
        ConArticle,
        ArticleRec
    },
    computed: {
        ...mapGetters({
            articleState: 'articles/getState'
        })
    },
    methods:{
        search(){
           store.dispatch('articles/search',this.query).then((res)=>{

           });
        }
    },
    beforeCreate(to, from, next) {
        store.dispatch('articles/search').then(()=>{
            console.log(store.state)
        });
        store.dispatch('articles/rec').then();
    },
    
}
</script>
