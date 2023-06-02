<template>
  <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Contact</h2>
        <p>
          For more information please feel free to contact us through the below
          form or using the contact button above.
        </p>
      </div>

      <div class="row">
        <div class="col-lg-5 d-flex align-items-stretch">
          <div class="info">
            <div class="address">
              <i class="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>Education City, Al Rayyan, Doha, Qatar</p>
            </div>

            <div class="email">
              <i class="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>aislam@hbku.edu.qa</p>
            </div>
            <div class="phone">
              <i class="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+974 6608 1840</p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14426.965508366886!2d51.4462229532104!3d25.312891828924897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dbf161618311%3A0x8f946ae2ab84f7a4!2sMale%20housing%20education%20city!5e0!3m2!1sen!2sqa!4v1673104392460!5m2!1sen!2sqa"
              class="w-100 map"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfxJip2SmEIGLKWJZljTqw45Fy96UBBEZ0R7B1EhHkY1SOIoA/viewform?embedded=true"
            width="640"
            height="812"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            >Loading…</iframe
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
}
</script>

<style scoped lang="scss">
.map{
  height: 300px;
}
</style>
