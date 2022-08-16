<template>
  <section>
    <div class="filters">
      <div class="prohead">
        <h1>Find Your <span>Watch</span></h1>
        <p>Use the filters below to find the right piece for you.</p>
      </div>
      <div class="filters2">
        <div class="group">
          <input type="text" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Search</label>
        </div>
        <select name="Product Type" id="">
          <option value="Product Type">Product Type</option>
          <option value="Jewellery">Jewellery</option>
          <option value="Watches">Watches</option>
        </select>
        <select name="Price" id="">
          <option value="price">Price</option>
          <option value="Asc">Ascending</option>
          <option value="Dec">Decending</option>
        </select>
        <select name="Condition" id="">
          <option value="Condition">Conditon</option>
          <option value="new">Brand New</option>
          <option value="pre-owned">Pre-Owned</option>
        </select>
        <select name="Type" id="">
          <option value="Type">Movement</option>
          <option value="automatic">Automatic</option>
          <option value="quartz">Quartz</option>
        </select>
        <select name="Gender" id="">
          <option value="Gender">Gender</option>
          <option value="malew">Male Watches</option>
          <option value="femalew">Female Watches</option>
          <option value="malej">Male Jewellery</option>
          <option value="femalej">Female Jewellery</option>
        </select>
        <select name="Brand" id="">
          <option value="Brand">Brand</option>
          <option value="Rolex">Rolex</option>
          <option value="Audemars Piguet">Audemars Piguet</option>
          <option value="Patek Philippe">Patek Philippe</option>
          <option value="Richard Mille">Richard Mille</option>
          <option value="Jaeger-leCoultre">Jaeger-leCoultre</option>
          <option value=""></option>
        </select>
      </div>
    </div>
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />>
  </section>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  //   data() {
  //     return {
  //       products: null,
  //     };
  //   },

  components: {
    ProductCard,
  },

  mounted() {
    this.$store.dispatch("getProducts");
    // fetch("https://joint-ecom.herokuapp.com/products")
    //   .then((res) => res.json())
    //   .then((data) => (this.products = data));
  },
  computed: {
    products() {
      return this.$store.state.products;
      //Returning the current state of the store
      //Must have when looping through properties
    },
  },
};
</script>
<style scoped>
section {
  min-height: 86vh;
  background-color: #131312;
}
.filters {
  padding: 20px;
  min-height: 86vh;
  width: 20%;
  background-color: #040f0f;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 25px;
}
.filters2 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
select {
  font-family: Maron;
  width: 250px;
  height: 35px;
  border-radius: 9px;
  background-color: #183c38;
  color: white;
  padding: 5px;
  border: thin solid #b1b942;
}
h1 {
  font-family: Maron;
  font-size: 35px;
  color: white;
  margin-bottom: 0;
  text-shadow: 2px 2px black;
}
p {
  font-family: "Cormorant SC", serif;
  margin-top: none;
  font-size: 20px;
  color: white;
  margin-bottom: 0;
  line-height: 20px;
}
span {
  color: #b1b942;
}
.group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 5 px;
}
input {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 250px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #757575;
  color: white;
}
input:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #b1b942;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 250px;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #b1b942;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
</style>
