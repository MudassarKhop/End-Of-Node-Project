<template>
  <div class="card shadow mb-3">
    <!-- <img :src="item.image" class="car-img mb-2" alt="Picture of item" /> -->
    <h5 class="text-black">{{ product.name }}</h5>
    <p class="text-secondary">
      {{ product.brand }}
    </p>
    <p>R{{ product.price }}</p>
    <h5 class="text-black mb-3">{{ product.state }}</h5>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style></style>
