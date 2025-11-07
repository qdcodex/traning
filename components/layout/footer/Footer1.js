import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <div className="footer_area" id="footer_contents">
        <div className="footer_widgets_wrap bg_dark_2">
          <div className="pd_top_80" />

          <div className="container">
            <div className="row">
              {/* Column 1 - About */}
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer_widgets about_company light_color">
                  <div className="about_company_inner">
                    <div className="footer_logo">
                      <Link href="/">
                        <img
                          src="/assets/images/logo-white.png"
                          className="img-fluid"
                          alt="logo"
                        />
                      </Link>
                      <div className="pd_bottom_30" />
                    </div>
                    <div className="content_box">
                      <p>
                        We are a trusted manpower agency providing skilled and
                        unskilled workers across various industries — connecting
                        talent with opportunity globally.
                      </p>
                      <div className="consulting">
                        <div className="image">
                          <img
                            src="/assets/images/authour-image.png"
                            alt="need help"
                          />
                        </div>
                        <div className="help_con">
                          <h6>Need Help?</h6>
                          <h2>
                            <Link href="/contact">Free Consultation</Link>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2 - Company */}
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer_widgets wid_tit style_one">
                  <div className="fo_wid_title">
                    <h2>Company</h2>
                  </div>
                </div>
                <div className="pd_bottom_25" />
                <div className="footer_widgets navigation_foo light_color style_one">
                  <div className="navigation_foo_box">
                    <ul className="menu">
                      <li>
                        <Link href="/" className="text-white">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about-us" className="text-white">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/services" className="text-white">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/industries-we-serve"
                          className="text-white"
                        >
                          Industries We Serve
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-white">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 3 - Services */}
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer_widgets wid_tit style_one">
                  <div className="fo_wid_title">
                    <h2>Our Services</h2>
                  </div>
                </div>
                <div className="pd_bottom_25" />
                <div className="footer_widgets navigation_foo light_color style_one">
                  <div className="navigation_foo_box">
                    <ul className="menu">
                      <li>
                        <Link
                          href="/services/local-recruitment"
                          className="text-white"
                        >
                          Local Recruitment
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/overseas-recruitment"
                          className="text-white"
                        >
                          Overseas Recruitment
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/temporary-staffing"
                          className="text-white"
                        >
                          Temporary Staffing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/permanent-staffing"
                          className="text-white"
                        >
                          Permanent Staffing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/hr-consulting"
                          className="text-white"
                        >
                          HR Consulting
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 4 - Contact Info */}
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer_widgets wid_tit style_one">
                  <div className="fo_wid_title">
                    <h2>Get In Touch</h2>
                  </div>
                </div>
                <div className="pd_bottom_25" />
                <div className="footer_widgets get_in_touch_foo light_color">
                  <div className="get_intouch_inrfo">
                    <div className="foo_cont_inner">
                      <div className="top">
                        <h6>Location</h6>
                        <p>123 Workforce Avenue, Business Bay, Dubai, UAE</p>
                      </div>
                      <div className="bottom">
                        <h6>Contact</h6>
                        <div className="con_content">
                          <h5>Phone:</h5>
                          <Link href="tel:+971501234567">+971 50 123 4567</Link>
                        </div>
                        <div className="con_content">
                          <h5>Email:</h5>
                          <Link href="mailto:info@manpoweragency.com">
                            info@manpoweragency.com
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pd_bottom_50" />
        </div>

        {/* Copyright Bar */}
        <div className="creote-footer-copyright bg_dark_3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="pd_top_10" />
                <div className="footer_copy_content color_white">
                  © {new Date().getFullYear()}{" "}
                  <Link href="https://www.qdcodex.in/" target="_blank">
                    QDCODEX
                  </Link>
                  . All Rights Reserved.
                </div>
                <div className="pd_bottom_10" />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-md-end">
                <div className="pd_top_10" />
                <div className="footer_copy_content_right">
                  <div className="social_media_v_one">
                    <ul>
                      <li>
                        <Link href="#">
                          <span className="fa fa-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="fa fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="fa fa-linkedin" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="fa fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pd_bottom_10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
