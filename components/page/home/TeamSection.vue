<template>
  <section id="team" class="team section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Team</h2>
        <p>
          We are a multi-disciplinary team bringing together a range of
          expertise and perspectives - ranging from industry to research with
          skills consisting of machine learning, finance and optimization.
        </p>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <div
            class="member d-flex align-items-start"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="pic">
              <img
                :src="require(`assets/images/team/team-1.jpg`)"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="member-info">
              <h4>Ashhadul Islam</h4>
              <p>Data Scientist</p>
              <div class="social">
                <a href="https://www.linkedin.com/in/ashhadul-islam-b508581a/">
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mt-4 mt-lg-0">
          <div
            class="member d-flex align-items-start w-100 h-100"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="pic">
              <img
                :src="require(`assets/images/team/team-2.jpg`)"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="member-info">
              <h4>Md Rafiul Biswas</h4>
              <p>Machine Learning Engineer</p>
              <div class="social">
                <a
                  href="https://www.linkedin.com/in/md-rafiul-biswas-04682389/"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mt-4">
          <div
            class="member d-flex align-items-start"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div class="pic">
              <img
                :src="require(`assets/images/team/team-3.jpg`)"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="member-info">
              <h4>Md Rakibul Hasan</h4>
              <p>Optimization Expert</p>
              <div class="social">
                <a href="https://www.linkedin.com/in/rakibul-hasan-107bb575/">
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mt-4">
          <div
            class="member d-flex align-items-start"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div class="pic">
              <img
                :src="require(`assets/images/team/team-4.jpg`)"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="member-info">
              <h4>Muhammad Fazlurrahman Syarif</h4>
              <p>Financial Analyst</p>
              <div class="social">
                <a href="https://www.linkedin.com/in/fazlursyarif/">
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamSection',
}
</script>
