import { createStore } from "vuex";

export default createStore({
  state: {
    products: null,
    product: null,
    user: null,
    cart: [],
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },

    setSingleProduct: (state, product) => {
      state.product = product;
    },
    updateCart: (state, product) => {
      state.cart.push(product);
    },
    setUser: (state, user) => {
      state.user = user;
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
    },

    sortByPrice: (state) => {
      state.items.sort((a, b) => {
        return a.price - b.price; //like vanilla javascript, this is how you make a sort function
      });
      if (!state.asc) {
        //if the asc is not true, it reverses the current order of the list
        state.items.reverse(); // reverts the order
      }
      state.asc = !state.asc; //states that when the function is run, asc becomes false instead of true
    },
  },
  actions: {
    //     login: async (context, payload) => {
    //       fetch
    // }

    getProdcuts: async (context) => {
      fetch("https://joint-ecom.herokuapp.com/products")
        .then((res) => res.json())
        .then((products) => {
          context.commit(setProducts, products);
        });
    },

    getSingleProduct: async (context, id) => {
      fetch("https://joint-ecom.herokuapp.com/products/" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setSingleProduct", product));
    },

    createProduct: async (context, product) => {
      fetch("https://joint-ecom.herokuapp.com/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          context.dispatch("getProduct", product);
        });
    },
  },
});
