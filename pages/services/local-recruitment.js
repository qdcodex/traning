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
        <title>Local Recruitment | ABC Manpower Agency</title>
        <meta
          name="description"
          content="ABC Manpower Agency offers reliable local recruitment services to connect businesses with skilled professionals in your region quickly and efficiently."
        />
        <meta
          name="keywords"
          content="local recruitment, manpower agency, staffing solutions, hiring services, HR outsourcing"
        />
        <meta property="og:title" content="Local Recruitment - ABC Manpower Agency" />
        <meta
          property="og:description"
          content="Streamline your hiring process with our trusted local recruitment solutions for all industries."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/local-recruitment-banner.jpg" />
        <meta property="og:url" content="https://www.yourdomain.com/services/local-recruitment" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Local Recruitment | ABC Manpower Agency" />
        <meta
          name="twitter:description"
          content="Find the right local talent for your business through ABC Manpower Agency’s professional recruitment services."
        />
        <meta name="twitter:image" content="/assets/images/local-recruitment-banner.jpg" />
      </Head>
      <Layout breadcrumbTitle="Local Recruitment">
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
        <div className="before_title">HR Consulting</div>
        <div className="title">Local Recruitment</div>
        <p>
          We specialize in connecting organizations with local talent, helping
          businesses grow while empowering communities. Our approach ensures
          that hiring remains efficient, compliant, and culturally aligned.
        </p>
      </div>
    </div>
    <div className="row no-space">
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-5 mb-xl-0 ps-0 ps-lg-0 pe-0 pe-lg-0 pe-xl-3">
        <div className="description_box">
          <p>
            Our local recruitment process emphasizes understanding regional
            dynamics and workforce potential. By leveraging local networks and
            data insights, we source candidates who not only meet skill
            requirements but also align with company culture and community
            values.
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
                <Link href="#">Community Sourcing</Link>
              </h3>
              <p>
                We collaborate with local institutions, job boards, and
                community programs to find dedicated professionals within your
                region.
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
            alt="image"
          />
        </div>
      </div>
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
                <Link href="#">Candidate Screening</Link>
              </h3>
              <p>
                We conduct thorough local background checks, reference
                verifications, and skill assessments before recommending
                candidates.
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
                <Link href="#">Position Mapping</Link>
              </h3>
              <p>
                We align each role with the best-suited local talent pool,
                ensuring efficiency and retention in every hire.
              </p>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_25" />
        {/*===============spacing==============*/}
        <h3>Local HR Functions</h3>
        {/*===============spacing==============*/}
        <div className="pd_bottom_15" />
        {/*===============spacing==============*/}
        <div className="description_box">
          <p>
            From sourcing and onboarding to performance monitoring, we handle
            every aspect of local HR operations with transparency and precision.
          </p>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_25" />
        {/*===============spacing==============*/}
        <div className="content_box_cn style_one">
          <div className="txt_content">
            <h3>
              <Link href="#">Local Partnerships</Link>
            </h3>
            <p>
              We work closely with regional organizations to create job
              opportunities that benefit both employers and the local workforce.
            </p>
          </div>
        </div>
        <div className="content_box_cn  style_one">
          <div className="txt_content">
            <h3>
              <Link href="#">Workplace Alignment</Link>
            </h3>
            <p>
              Every candidate is evaluated for both professional competence and
              cultural fit within the local work environment.
            </p>
          </div>
        </div>
        <div className="content_box_cn  style_one">
          <div className="txt_content">
            <h3>
              <Link href="#">Ongoing Support</Link>
            </h3>
            <p>
              We maintain relationships post-hiring to ensure long-term employee
              satisfaction and retention.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/*===============spacing==============*/}
    <div className="pd_bottom_25" />
    {/*===============spacing==============*/}
    <h3>Service Benefits</h3>
    {/*===============spacing==============*/}
    <div className="pd_bottom_25" />
    {/*===============spacing==============*/}
    <div className="faq_section type_two">
      <div className="block_faq">
        <div className="accordion">
          <dl>
            <dt
              className={isActive.key == 1 ? "faq_header active" : "faq_header"}
              onClick={() => handleToggle(1)}
            >
              Why focus on local recruitment?<span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{
                display: `${isActive.key == 1 ? "block" : "none"}`,
              }}
            >
              <p>
                Local recruitment enhances employee loyalty, reduces hiring
                costs, and fosters community development by providing
                opportunities close to home.
              </p>
            </dd>
            <dt
              className={isActive.key == 2 ? "faq_header active" : "faq_header"}
              onClick={() => handleToggle(2)}
            >
              How do you source local candidates?<span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{
                display: `${isActive.key == 2 ? "block" : "none"}`,
              }}
            >
              <p>
                We utilize regional job boards, educational partnerships, and
                professional networks to connect with qualified local
                applicants.
              </p>
            </dd>
            <dt
              className={isActive.key == 3 ? "faq_header active" : "faq_header"}
              onClick={() => handleToggle(3)}
            >
              Can you handle bulk local hiring?<span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{
                display: `${isActive.key == 3 ? "block" : "none"}`,
              }}
            >
              <p>
                Yes. Our team is equipped to manage high-volume hiring while
                maintaining quality through structured screening and onboarding
                systems.
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
