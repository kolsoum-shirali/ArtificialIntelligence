<template>
  <div>
    <div class="portfolio-info">
      <h3>{{ info.caption }}</h3>
      <ul>
        <li><strong>Category</strong>: {{ info.category }}</li>
        <li><strong>Client</strong>: {{ info.client }}</li>
        <li><strong>Project date</strong>: {{ info.projectDate }}</li>
        <li>
          <strong>Project URL</strong>:
          <a
            href="https://ashhadulislam-medium-streamlit-pox-detection-main-h0zk0k.streamlit.app/"
            >{{ info.projectURL }}</a
          >
        </li>
      </ul>
    </div>
    <div class="portfolio-description">
      <h2>
        {{ info.content.title }}
      </h2>
      <p>
        {{ info.content.description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PortfolioDetails',
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
