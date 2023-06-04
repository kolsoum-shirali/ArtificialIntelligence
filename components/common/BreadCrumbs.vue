<template>
  <div>
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li>{{ title }}</li>
        </ol>
        <h2>{{ title }}</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
