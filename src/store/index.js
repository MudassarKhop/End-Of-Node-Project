import { createStore } from "vuex";

export default createStore({
  state: {
    products: null,
    product: null,
    user: null,
    cart: [],
  },
  mutations: {
    // Product
    setProducts: (state, products) => {
      state.products = products;
    },

    setSingleProduct: (state, product) => {
      state.product = product;
    },

    // Cart

    updateCart: (state, product) => {
      state.cart.push(product);
    },

    removeFromCart: (state, cart) => {
      state.cart = cart;
    },

    // User

    setUser: (state, user) => {
      state.user = user;
    },

    // Other

    // sortByPrice: (state) => {
    //   state.products.sort((a, b) => {
    //     return a.price - b.price; //like vanilla javascript, this is how you make a sort function
    //   });
    //   if (!state.asc) {
    //     //if the asc is not true, it reverses the current order of the list
    //     state.products.reverse(); // reverts the order
    //   }
    //   state.asc = !state.asc; //states that when the function is run, asc becomes false instead of true
    // },
  },
  actions: {
    // Login and Register
    // register: async (context, payload) => {
    //   const response = await fetch(
    //     `https://joint-ecom.herokuapp.com/users/register`,
    //     {
    //       method: "POST",
    //       body: JSON.stringify(payload),
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //       },
    //     }
    //   );
    // },

    login: async (context, payload) => {
      fetch("https://joint-ecom.herokuapp.com/users/login", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      // const userData = await response.json(); //stores the response from the database
      // if (!userData.length)
      //   return alert("No user has been found with these credentials.");
      .then((res)=> res.json())
      .then((data)=>{
        console.log(payload);
        localStorage.setItem("token", JSON.stringify(data))
        context.commit("setUser", payload);
      })

    },

    // User
    getUser: async (context) => {
      fetch("https://joint-ecom.herokuapp.com/users/" + id)
        .then((res) => res.json())
        .then((user) => {
          context.commit(setUser, user);
        });
    },

    // Products
    getProducts: async (context) => {
      fetch("https://joint-ecom.herokuapp.com/products")
        .then((res) => res.json())
        .then((products) => {
          context.commit("setProducts", products);
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

    editProduct: async (context, product) => {
      fetch("https://joint-ecom.herokuapp.com/products/" + id, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          context.dispatch("getProducts", product);
        });
    },

    deleteItem: async (context, id) => {
      fetch("https://joint-ecom.herokuapp.com/products/" + id, {
        method: "DELETE",
      }).then(() => {
        context.dispatch("getItems");
      });
    },

    // Cart
    getCart: async (context) => {
      fetch("https://joint-ecom.herokuapp.com/users/" + id + "/cart")
        .then((res) => res.json())
        .then((product) => {
          context.commit("updateCart", product);
        });
    },

    addToCart: async (context, id) => {
      fetch("https://joint-ecom.herokuapp.com/users/" + id + "/cart", {
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

    deleteFromCart: async (context, id) => {
      fetch("https://joint-ecom.herokuapp.com/users/" + id + "/cart/" + id, {
        method: "DELETE",
      }).then(() => {
        context.dispatch("getItems");
      });
    },
  },
});
