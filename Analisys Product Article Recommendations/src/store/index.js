import { createStore } from 'vuex'

import global from "./modules/global"
import enLeads from './modules/entity/leads';


const store = createStore({
	modules: {
    global,
    enLeads
  },
  
});

export default store;
