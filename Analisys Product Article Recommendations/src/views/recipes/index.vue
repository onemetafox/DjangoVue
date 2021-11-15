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
          <!-- <ProductList /> -->This is the first Tab
        </div>
        <div class="tab-pane fade" id="articles" role="tabpanel" aria-labelledby="articles-tab">
          I'm the second tab
        </div>
      </div>
    </div>
    <Recommendations />
    
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import store from '../../store';
  // import LeadsHeader from './components/LeadHeader.vue';
  // import LeadsTable from './components/LeadTable.vue';
  // import LeadsEditPan from './components/LeadEditPannel.vue';
  // import EditLead from './components/info/EditLead.vue'

  export default {
    name: 'recipes',
    components: {
      // LeadsHeader,
      // LeadsTable,
      // LeadsEditPan,
      // EditLead,
    },
    // computed: {
    //   ...mapGetters({
    //     leadState: 'enLeads/getState'
    //   }),
    //   wrapClass() {
    //     return this.leadState.editID === -1 ? 'medium-12' : 'medium-9';
    //   },
    //   showEditPan() {
    //     return this.leadState.editID !== -1 && this.leadState.editID !== 'new';
    //   },
    // },
    // beforeRouteEnter(to, from, next) {
    //   store.dispatch('enLeads/search').then(() => {
    //     next()
    //   })
    // },
  };
</script>
<style lang="scss" scoped>
  .leads-page {
    width: 100%;
  }
  .left-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .strip {
    height: 25px;
    width: auto;
    background: #dcdcdc;
    color: black;
    float: left;
    font-size: 11px;
    margin: 0px 6px 0px 0px;
    padding: 1px 4px 1px 3px;
    text-align: right;
    width: 75px;
    -moz-border-radius-topleft: 7px;
    -moz-border-radius-bottomleft: 7px;
    -webkit-border-top-left-radius: 7px;
    -webkit-border-bottom-left-radius: 7px;
  }
</style>
