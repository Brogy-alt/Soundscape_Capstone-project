import { createStore } from "vuex";
import axios from "axios";
const virtuverse = "https://virtuverse-capstone-project.onrender.com/";
// render
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: null,
    asc:true
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, value) {
      state.user = value;
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
    setMessage(state, value) {
      state.message = value;
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
      const res = await axios.post(`${virtuverse}login`, payload);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUser", result);
      } else {
        context.commit("setMessage", err);
      }
    },
    async register(context, payload) {
      let res = await axios.post(`${virtuverse}register`, payload);
      let { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
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
      context.commit("setUser", await res.data);
    },
  },
  modules: {},
})
