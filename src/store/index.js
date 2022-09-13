import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[],
    name:'fucking'
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    }
  },
  mutations: {
    addCounter(state,payload) {
      payload.count++;
    },
    addCart(state,payload) {
      payload.checked=true;
      state.cartList.push(payload);
    }
  },
  actions: {
    addCart(context,payload) {
      return new Promise((resolve,reject) =>{
        //payload中新添加商品
      //方法1
      let oldProduct=null;
      for(let item of context.state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct =item;
        }
      }
      //方法2
      // let oldProduct=state.cartList.find(item=>item.iid===payload.iid)
      //判断oldProduct
      if (oldProduct) {
        context.commit('addCounter',oldProduct);
        resolve('商品的数量+1');
       } else {
         payload.count=1;
         // context.state.cartList.push(payload);
         context.commit('addCart',payload)
         resolve('添加了新的商品')
       }
      })    
    }
  },
  modules: {
  }
})
