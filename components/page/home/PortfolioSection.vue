<template>
  <div>
    <section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Below are some of our running projects.</p>
        </div>

        <ul
          id="portfolio-flters"
          class="d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li data-filter="*" class="filter-active">All</li>
          <li data-filter=".filter-app">Machine Learning</li>
          <li data-filter=".filter-card">Deep Learning</li>
        </ul>
        <div
          class="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-img">
              <img
                :src="require(`assets/images/portfolio/portfolio-1.jpg`)"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="portfolio-info">
              <h4>Patient Re-admission Prediction</h4>
              <p>
                Predicting the chances of discharged patients coming back to the
                hopitals within 30 days
              </p>
              <a
              :href="require(`assets/images/portfolio/portfolio-1.jpg`)"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox preview-link"
                title="App 1"
                ><i class="bx bx-plus"></i
              ></a>
              <nuxt-link to="/portfolio-details"
                class="details-link"
                title="More Details"
                ><i class="bx bx-link"></i
              ></nuxt-link>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-img">
              <img
                :src="require(`assets/images/portfolio/portfolio-3.jpg`)"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="portfolio-info">
              <h4>Breast Cancer Detection</h4>
              <p>
                Detecting and localizing cancerous tissues from mammogram images
              </p>
              <a
                :href="require(`assets/images/portfolio/portfolio-3.jpg`)"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox preview-link"
                title="App 2"
                ><i class="bx bx-plus"></i
              ></a>
              <a href="#portfolio" class="details-link" title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-img">
              <img
                :src="require(`assets/images/portfolio/portfolio-4.jpg`)"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="portfolio-info">
              <h4>Pox Detection from skin images</h4>
              <p>Detecting chicken pox, smallpox, measles, and monkeypox</p>
              <a
                :href="require(`assets/images/portfolio/portfolio-4.jpg`)"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox preview-link"
                title="Card 2"
                ><i class="bx bx-plus"></i
              ></a>
              <nuxt-link
                to="/portfolio-details-pox"
                class="details-link"
                title="More Details"
                ><i class="bx bx-link"></i
              ></nuxt-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-img">
              <img
                :src="require(`assets/images/portfolio/portfolio-6.jpg`)"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="portfolio-info">
              <h4>Autism Screeing</h4>
              <p>
                Machine learning algorithms analyzing patterns in behavioral
                data, speech and language data to identify autism.
              </p>
              <a
                :href="require(`assets/images/portfolio/portfolio-6.jpg`)"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox preview-link"
                title="App 3"
                ><i class="bx bx-plus"></i
              ></a>
              <a href="#portfolio" class="details-link" title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-img">
              <img
                :src="require(`assets/images/portfolio/portfolio-7.jpg`)"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="portfolio-info">
              <h4>Diabetes Onset detection</h4>
              <p>
                Identifying individuals who are at risk of developing diabetes
                as early as possible, so that they can be offered preventive
                measures or early treatment.
              </p>
              <a
                :href="require(`assets/images/portfolio/portfolio-7.jpg`)"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox preview-link"
                title="Card 1"
                ><i class="bx bx-plus"></i
              ></a>
              <a href="#portfolio" class="details-link" title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-img">
              <img
                :src="require(`assets/images/portfolio/portfolio-8.jpg`)"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="portfolio-info">
              <h4>Heart Disease Prediction</h4>
              <p>
                Using artificial neural networks to predict the likelihood of an
                individual developing heart disease based on a range of risk
                factors
              </p>
              <a
                :href="require(`assets/images/portfolio/portfolio-8.jpg`)"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox preview-link"
                title="Card 3"
                ><i class="bx bx-plus"></i
              ></a>
              <a href="#portfolio" class="details-link" title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PortfolioSection',
}
</script>
