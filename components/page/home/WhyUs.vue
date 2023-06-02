<template>
  <section id="why-us" class="why-us section-bg">
    <div class="container-fluid" data-aos="fade-up">
      <div class="row">
        <div
          class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1"
        >
          <div class="content">
            <h3>
              Here are the reasons why
              <strong>SocAI is a favorite of the health industries.</strong>
            </h3>
            <p>
              We work on the ground shoulder to shoulder with the hopitals. Our
              belief that better hospitals can harbor better societies is
              substantiated by our commitment to our customers. We do not just
              onboard clients, we enable and stay with them all the way.
            </p>
          </div>

          <div class="accordion-list">
            <ul>
              <li>
                <a
                  data-bs-toggle="collapse"
                  class="collapse"
                  data-bs-target="#accordion-list-1"
                  ><span>01</span> How is SocAI assisting the patients?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="accordion-list-1"
                  class="collapse show"
                  data-bs-parent=".accordion-list"
                >
                  <p>
                    SocAI enables the identification of trends, patterns, and
                    relationships in healthcare data, which can inform the
                    development of evidence-based practices and policies that
                    improve patient outcomes
                  </p>
                </div>
              </li>

              <li>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-list-2"
                  class="collapsed"
                  ><span>02</span> How is SocAI helping the hospitals?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="accordion-list-2"
                  class="collapse"
                  data-bs-parent=".accordion-list"
                >
                  <p>
                    By analyzing large and complex datasets, we can help to
                    identify opportunities for process improvement and cost
                    reduction, resulting in a more efficient and effective
                    healthcare system.
                  </p>
                </div>
              </li>

              <li>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-list-3"
                  class="collapsed"
                  ><span>03</span> How is SocAI transforming the soceity?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="accordion-list-3"
                  class="collapse"
                  data-bs-parent=".accordion-list"
                >
                  <p>
                    Through the use of predictive analytics, we can help to
                    forecast future healthcare needs and trends, allowing for
                    proactive and targeted interventions to prevent or mitigate
                    potential issues.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="col-lg-5 align-items-stretch order-1 order-lg-2 img"
          :style="{
            'background-image':
              'url(' + require('@/assets/images/why-us.png') + ')',
          }"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          &nbsp;
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyUs',
}
</script>
