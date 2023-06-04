<template>
  <footer id="footer">
    <div v-if="$route.path === '/inner-page'" class="footer-newsletter">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>SocAI</h3>
            <p>
              Education City <br />
              Al Rayyan, Doha<br />
              Qatar <br /><br />
              <strong>Phone:</strong> +974 6608 1840<br />
              <strong>Email:</strong> aislam@hbku.edu.qa<br />
            </p>
          </div>
          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Predictive modeling</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Data analysis</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Population health management</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Data management</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Research support</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Feel free to get in touch through social networks</p>
            <div class="social-links mt-3">
              <a
                href="https://www.linkedin.com/company/socaiio/"
                class="linkedin"
                ><i class="bx bxl-linkedin"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><span>SocAI</span></strong
        >. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>
