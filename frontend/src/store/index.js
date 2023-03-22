import { createStore } from "vuex";
import axios from "axios";
import {useCookies} from "vue3-cookies";
const {cookies} = useCookies();
import router from "@/router";
const virtuverse = "https://virtuverse-capstone-project.onrender.com/";
// render
export default createStore({
  state: {
    users: null,
    user: null,
    // userAuth: true,
    products: null,
    product: null,
    token: null,
    showSpinner: null,
    asc:true,
    data: {}
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, value) {
      state.user = value;
      state.userAuth = true
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setSpinner(state, value) {
      state.showSpinner = value;
    },
    setToken(state, value) {
      state.token = value
    },
    updateData(state, newData) {
      state.data = newData
    },
    setMessage(state, message) {
      state.message = message;
    },
    sortProductsByprice:(state) =>  {
      state.products.sort((a,b) => {
        return a.prodPrice - b.prodPrice;
      });
      if(!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc
    }
  },
  actions: {
    async login(context, payload) {
    try {
      const res = await axios.post(`${virtuverse}login`, payload);
      console.log('Results:', res);
      const { result, jwToken, msg , err } = await res.data;
      if (result) {
        context.commit("setUser", result);
        context.commit('setToken', jwToken);
        cookies.set('user_cookie', jwToken)
        context.commit('setMessage', msg)
        setTimeout(() => {
          router.push({name: 'home'})
        }), 3000
      } else {
        context.commit("setMessage", err);
      }
    }
    catch (error) {
      console.error(error)
    }
  },
    async userRegister(context, payload) {
      try {
        const res = await axios.post(`${virtuverse}register`, payload);
        console.log('Result:', res);
        const { result, message, err } = await res.data;
        if (result) {
          context.commit("setUser", result)
          context.commit("setMessage", message);
        } else {
          context.commit("setMessage", err);
        }
      } catch (error) {
        console.error(error)
      }
    },
    async createProduct(context, payload) {
      try {
        const res = await axios.post(`${virtuverse}product`, payload);
        console.log('Result:', res);
        const { result, message, err } = await res.data;
        if (result) {
          context.commit("setProduct", result)
          context.commit("setMessage", message);
        } else {
          context.commit("setMessage", err);
        }
      } catch (error) {
        console.error(error)
      }
    },
    async fetchProducts(context) {
      const res = await axios.get(`${virtuverse}products`);
      const { results } = await res.data;
      if (results) {
        console.log(results);
        context.commit("setProducts", results);
      }
    },
    async fetchProduct(context, id) {
      const res = await axios.get(`${virtuverse}product/${id}`);
      const {results} = (await res.data);
      if(results){
       console.log(results);
       context.commit("setProduct", results[0]);
      }
    },
    async deleteProduct({commit, dispatch}, id) {
      try {
        await axios.delete(`${virtuverse}product/${id}`)
        commit('setMessage', 'Product Deleted');
        dispatch('fetchProducts');
      } catch (error) {
        commit('setMessage', 'Unable to delete product')
      }
    },
    async fetchUsers(context) {
      const res = await axios.get(`${virtuverse}users`);
      const { results } = await res.data;
      if (results) {
        console.log(results);
        context.commit("setUsers", results);
      }
    },
    async fetchUser(context, id) {
      const res = await axios.get(`${virtuverse}user/${id}`);
      console.log(await res.data);
      context.commit("setUser", res[0]);
    },
    async deleteUser({commit, dispatch}, id) {
      try {
        await axios.delete(`${virtuverse}user/${id}`)
        commit('setMessage', 'User Deleted');
        dispatch('fetchUsers');
      } catch (error) {
        commit('setMessage', 'Unable to delete user')
      }
  },
  async updateProduct({ commit }, updateProduct) {
    const response = await axios.put(`${virtuverse}product`, updateProduct)
    commit('updateProduct', response.data)
  }
},
  modules: {},
})
