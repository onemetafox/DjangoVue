import { createStore } from 'vuex'

import global from "./modules/global"
import products from './modules/products';
import articles from './modules/articles';


const store = createStore({
	modules: {
    global,
    products,
    articles
  },
  
});

export default store;
