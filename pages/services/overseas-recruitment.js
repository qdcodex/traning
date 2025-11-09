import Layout from "@/components/layout/Layout";
import { useState } from "react";
import Link from "next/link";
import Head from 'next/head'

export default function ServiceDetails() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
    <Head>
        <title>Overseas Recruitment | ABC Manpower Agency</title>
        <meta
          name="description"
          content="We specialize in overseas recruitment, connecting employers with top international talent across multiple industries."
        />
        <meta
          name="keywords"
          content="overseas recruitment, international staffing, manpower agency, global hiring"
        />
        <meta property="og:title" content="Overseas Recruitment - ABC Manpower Agency" />
        <meta
          property="og:description"
          content="Expand your workforce globally with our trusted overseas manpower recruitment services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/overseas-banner.jpg" />
      </Head>
      <Layout breadcrumbTitle="Overseas Recruitment">
        <div>
          <div className="auto-container">
            <div className="row default_row">
              <div
                id="primary"
                className="content-area service col-lg-8 col-md-12 col-sm-12 col-xs-12"
              >
                <main id="main" className="site-main" role="main">
  {/*===============spacing==============*/}
  <div className="pd_top_85" />
  {/*===============spacing==============*/}
  <article className="clearfix service type-service status-publish has-post-thumbnail hentry">
    <div className="title_all_box style_one dark_color">
      <div className="title_sections left">
        <div className="before_title">Global HR Solutions</div>
        <div className="title">Overseas Recruitment</div>
        <p>
          We specialize in connecting skilled professionals with international
          employers across diverse industries. Our overseas recruitment process
          ensures the right talent reaches the right opportunity, no matter
          where in the world.
        </p>
      </div>
    </div>

    <div className="row no-space">
      {/* Left Column */}
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-5 mb-xl-0 ps-0 ps-lg-0 pe-0 pe-lg-0 pe-xl-3">
        <div className="description_box">
          <p>
            Our overseas recruitment services bridge the gap between global
            employers and talented candidates. We handle every stage — from
            screening, documentation, and visa processing to deployment —
            ensuring full compliance and transparency throughout.
          </p>
        </div>

        {/*===============spacing==============*/}
        <div className="pd_bottom_25" />
        {/*===============spacing==============*/}

        <div className="icon_box_all style_one">
          <div className="icon_content ">
            <div className="icon">
              <img
                src="/assets/images/icon-image-nike.png"
                className="img-fluid svg_image"
                alt="icon png"
              />
            </div>
            <div className="txt_content">
              <h3>
                <Link href="#">Global Sourcing Network</Link>
              </h3>
              <p>
                We maintain a vast international talent database, helping
                companies find candidates from Asia, the Middle East, and Europe
                quickly and efficiently.
              </p>
            </div>
          </div>
        </div>

        {/*===============spacing==============*/}
        <div className="pd_bottom_25" />
        {/*===============spacing==============*/}

        <div className="simple_image_boxes">
          <img
            src="/assets/images/blog/single-post-gal-1.jpg"
            className="object-fit-cover-center height_570px"
            alt="Overseas recruitment image"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 ps-0 ps-lg-0 pe-0 pe-lg-0 ps-xl-3">
        <div className="icon_box_all style_one">
          <div className="icon_content ">
            <div className="icon">
              <img
                src="/assets/images/icon-image-nike.png"
                className="img-fluid svg_image"
                alt="icon png"
              />
            </div>
            <div className="txt_content">
              <h3>
                <Link href="#">Pre-Screening & Selection</Link>
              </h3>
              <p>
                Our experienced HR consultants conduct detailed assessments to
                match the best candidates with international job requirements.
              </p>
            </div>
          </div>
        </div>

        {/*===============spacing==============*/}
        <div className="pd_bottom_25" />
        {/*===============spacing==============*/}

        <div className="icon_box_all style_one">
          <div className="icon_content ">
            <div className="icon">
              <img
                src="/assets/images/icon-image-nike.png"
                className="img-fluid svg_image"
                alt="icon png"
              />
            </div>
            <div className="txt_content">
              <h3>
                <Link href="#">Visa & Documentation Support</Link>
              </h3>
              <p>
                From work permits to visa processing, we coordinate with
                authorized agencies to ensure smooth onboarding for overseas
                employees.
              </p>
            </div>
          </div>
        </div>

        {/*===============spacing==============*/}
        <div className="pd_bottom_25" />
        {/*===============spacing==============*/}

        <h3>Our HR Functions</h3>
        <div className="pd_bottom_15" />

        <div className="description_box">
          <p>
            We manage the complete overseas hiring lifecycle — from candidate
            sourcing and document verification to post-placement follow-ups —
            ensuring clients receive trusted, compliant, and productive talent.
          </p>
        </div>

        {/*===============spacing==============*/}
        <div className="pd_bottom_25" />
        {/*===============spacing==============*/}

        <div className="content_box_cn style_one">
          <div className="txt_content">
            <h3>
              <Link href="#">Cultural Orientation</Link>
            </h3>
            <p>
              We provide pre-departure orientation to help candidates understand
              work culture, ethics, and legal norms of their destination country.
            </p>
          </div>
        </div>

        <div className="content_box_cn style_one">
          <div className="txt_content">
            <h3>
              <Link href="#">International Compliance</Link>
            </h3>
            <p>
              All recruitments adhere to global labor regulations, ensuring
              ethical hiring and transparent contracts for all parties.
            </p>
          </div>
        </div>

        <div className="content_box_cn style_one">
          <div className="txt_content">
            <h3>
              <Link href="#">Post-Deployment Support</Link>
            </h3>
            <p>
              We offer continued support for both employers and employees to
              ensure successful adaptation and long-term satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/*===============spacing==============*/}
    <div className="pd_bottom_25" />
    {/*===============spacing==============*/}
    <h3>Service Benefits</h3>
    <div className="pd_bottom_25" />

    <div className="faq_section type_two">
      <div className="block_faq">
        <div className="accordion">
          <dl>
            <dt
              className={isActive.key == 1 ? "faq_header active" : "faq_header"}
              onClick={() => handleToggle(1)}
            >
              Which countries do you recruit for?
              <span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{
                display: `${isActive.key == 1 ? "block" : "none"}`,
              }}
            >
              <p>
                We recruit for various countries across the Middle East, Europe,
                and Asia — including UAE, Saudi Arabia, Qatar, Kuwait, and more.
              </p>
            </dd>

            <dt
              className={isActive.key == 2 ? "faq_header active" : "faq_header"}
              onClick={() => handleToggle(2)}
            >
              How do you ensure candidate reliability?
              <span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{
                display: `${isActive.key == 2 ? "block" : "none"}`,
              }}
            >
              <p>
                All candidates go through rigorous screening, including
                background verification, skill testing, and medical checks to
                ensure authenticity and competence.
              </p>
            </dd>

            <dt
              className={isActive.key == 3 ? "faq_header active" : "faq_header"}
              onClick={() => handleToggle(3)}
            >
              Do you handle visa and travel arrangements?
              <span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{
                display: `${isActive.key == 3 ? "block" : "none"}`,
              }}
            >
              <p>
                Yes, our team assists with complete visa processing, flight
                arrangements, and onboarding coordination for smooth deployment.
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </article>

  {/*===============spacing==============*/}
  <div className="pd_bottom_65" />
  {/*===============spacing==============*/}
</main>

              </div>
              <aside
                id="secondary"
                className="widget-area all_side_bar col-lg-4 col-md-12 col-sm-12"
              >
                <div className="service_siderbar side_bar">
                  {/*===============spacing==============*/}
                  <div className="pd_top_85" />
                  {/*===============spacing==============*/}
                  <div className="widgets_grid_box">
                    <div className="widget creote_widget_service_list">
                      <h4 className="widget-title">Our Services</h4>
                      <ul className="service_list_box">
                        <li>
                          <Link href="/services/local-recruitment">
                            Local Recruitment
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/overseas-recruitment">
                            Overseas Recruitment
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/temporary-staffing">
                            Temporary Staffing
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/permanent-staffing">
                            Permanent Staffing
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/payroll-management">
                            Payroll Management
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/hr-consulting">
                            HR Consulting
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="widgets_grid_box">
                    <div className="brouchure_box_widget">
                      <div className="widget_content">
                        <h3>A Complete Guide to Employee Engagement</h3>
                        <div className="color_white_1 clearfix">
                          <Link
                            href="#"
                            className="theme-btn color_white_1 one"
                          >
                            Download
                          </Link>
                        </div>
                        <img
                          src="/assets/images/broucher-img.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="widgets_grid_box">
                    <div
                      id="creote-contactus-3"
                      className="widget widget_contactus"
                    >
                      <div className="contact_box_widget widget_box">
                        <div className="widget_content">
                          <img
                            src="/assets/images/service-sidebar-contact-bg.jpg"
                            alt="backgroundimage"
                          />
                          <div className="top_section">
                            <h3>Have Questions?</h3>
                            <p>Nothing prevents our being to what we like. </p>
                          </div>
                          <div className="bottom_section">
                            <Link href="#" className="phone_number">
                              +98 060 712 34
                            </Link>
                            <Link href="#" className="mailid">
                              sendmail@qetus.com
                            </Link>
                          </div>
                        </div>
                        <Link href="#" className="theme-btn one">
                          Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_65" />
                  {/*===============spacing==============*/}
                </div>
              </aside>
            </div>
          </div>
          {/*-newsteller-*/}
          <section className="newsteller style_one bg_dark_1">
            {/*===============spacing==============*/}
            <div className="pd_top_40" />
            {/*===============spacing==============*/}
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="content">
                    <h2>Join Our Mailing List</h2>
                    <p>
                      For receiving our news and updates in your inbox directly.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="item_scubscribe">
                    <div className="input_group">
                      <form
                        className="mc4wp-form"
                        method="post"
                        data-name="Subscibe"
                      >
                        <div className="mc4wp-form-fields">
                          <input
                            type="email"
                            name="EMAIL"
                            placeholder="Your email address"
                            required
                          />
                          <input type="submit" defaultValue="Sign up" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_40" />
            {/*===============spacing==============*/}
          </section>
        </div>
      </Layout>
    </>
  );
}
