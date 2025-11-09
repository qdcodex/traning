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
        <title>Temporary Staffing | ABC Manpower Agency</title>
        <meta
          name="description"
          content="ABC Manpower Agency provides flexible and reliable temporary staffing solutions to help businesses manage short-term workforce needs efficiently."
        />
        <meta
          name="keywords"
          content="temporary staffing, contract hiring, manpower agency, short-term staffing, workforce solutions, HR outsourcing"
        />
        <meta property="og:title" content="Temporary Staffing - ABC Manpower Agency" />
        <meta
          property="og:description"
          content="Get skilled temporary staff quickly with ABC Manpower Agency’s customized short-term staffing solutions for your business."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/services/temporary-staffing.jpg" />
        <meta
          property="og:url"
          content="https://www.yourdomain.com/services/temporary-staffing"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Temporary Staffing | ABC Manpower Agency" />
        <meta
          name="twitter:description"
          content="Find experienced temporary staff for your short-term projects with ABC Manpower Agency’s professional staffing services."
        />
        <meta
          name="twitter:image"
          content="/assets/images/services/temporary-staffing.jpg"
        />
      </Head>
      <Layout breadcrumbTitle="Temporary Staffing">
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
        <div className="before_title">Workforce Flexibility</div>
        <div className="title">Temporary Staffing</div>
        <p>
          Our Temporary Staffing services provide businesses with the flexibility
          to scale their workforce according to demand — ensuring productivity,
          efficiency, and cost control without long-term commitments.
        </p>
      </div>
    </div>

    <div className="row no-space">
      {/* LEFT COLUMN */}
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-5 mb-lg-5 mb-xl-0 ps-0 pe-xl-3">
        <div className="description_box">
          <p>
            At times when workloads increase unexpectedly or specialized skills are
            needed for short-term projects, our Temporary Staffing solutions offer
            a reliable, quick, and compliant way to bring the right talent on board.
            We handle sourcing, screening, payroll, and HR compliance — so you can
            focus on your core business priorities.
          </p>
        </div>

        <div className="pd_bottom_25" />

        <div className="icon_box_all style_one">
          <div className="icon_content">
            <div className="icon">
              <img
                src="/assets/images/icon-image-nike.png"
                className="img-fluid svg_image"
                alt="icon png"
              />
            </div>
            <div className="txt_content">
              <h3><Link href="#">Fast Hiring Process</Link></h3>
              <p>
                Our pre-verified candidate pool ensures we can fill urgent roles
                within hours — not weeks — helping you avoid downtime and workflow gaps.
              </p>
            </div>
          </div>
        </div>

        <div className="pd_bottom_25" />

        <div className="simple_image_boxes">
          <img
            src="/assets/images/blog/single-post-gal-1.jpg"
            className="object-fit-cover-center height_570px"
            alt="Temporary Staffing team"
          />
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 ps-0 pe-0 ps-xl-3">
        <div className="icon_box_all style_one">
          <div className="icon_content">
            <div className="icon">
              <img
                src="/assets/images/icon-image-nike.png"
                className="img-fluid svg_image"
                alt="icon png"
              />
            </div>
            <div className="txt_content">
              <h3><Link href="#">Skill-Matched Profiles</Link></h3>
              <p>
                Every temporary hire is carefully screened to ensure technical
                expertise, reliability, and cultural fit with your organization.
              </p>
            </div>
          </div>
        </div>

        <div className="pd_bottom_25" />

        <div className="icon_box_all style_one">
          <div className="icon_content">
            <div className="icon">
              <img
                src="/assets/images/icon-image-nike.png"
                className="img-fluid svg_image"
                alt="icon png"
              />
            </div>
            <div className="txt_content">
              <h3><Link href="#">Compliance & Payroll</Link></h3>
              <p>
                We manage employment contracts, statutory compliance, and payroll
                processes — ensuring a hassle-free experience for your HR team.
              </p>
            </div>
          </div>
        </div>

        <div className="pd_bottom_25" />

        <h3>Industries We Serve</h3>
        <div className="pd_bottom_15" />

        <div className="description_box">
          <p>
            From IT and manufacturing to logistics, retail, and healthcare — our
            temporary staffing expertise spans multiple industries, ensuring you
            get the right talent when and where you need it.
          </p>
        </div>

        <div className="pd_bottom_25" />

        <div className="content_box_cn style_one">
          <div className="txt_content">
            <h3><Link href="#">On-Demand Workforce</Link></h3>
            <p>
              Quickly scale your workforce during seasonal peaks, special projects,
              or new product launches — without the burden of permanent hiring.
            </p>
          </div>
        </div>

        <div className="content_box_cn style_one">
          <div className="txt_content">
            <h3><Link href="#">Reduced Overheads</Link></h3>
            <p>
              Save costs associated with recruitment, training, and benefits by
              leveraging our ready-to-work temp professionals.
            </p>
          </div>
        </div>

        <div className="content_box_cn style_one">
          <div className="txt_content">
            <h3><Link href="#">HR Support & Flexibility</Link></h3>
            <p>
              Our dedicated HR team supports both clients and employees throughout
              the assignment for smooth onboarding, attendance, and reporting.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="pd_bottom_25" />
    <h3>Service Benefits</h3>
    <div className="pd_bottom_25" />

    {/* FAQ SECTION */}
    <div className="faq_section type_two">
      <div className="block_faq">
        <div className="accordion">
          <dl>
            <dt
              className={isActive.key == 1 ? "faq_header active" : "faq_header"}
              onClick={() => handleToggle(1)}
            >
              What is Temporary Staffing?
              <span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
            >
              <p>
                Temporary Staffing is a workforce solution that allows businesses
                to hire qualified employees for short-term projects, seasonal work,
                or specific assignments without long-term obligations.
              </p>
            </dd>

            <dt
              className={isActive.key == 2 ? "faq_header active" : "faq_header"}
              onClick={() => handleToggle(2)}
            >
              What roles can you fill through temporary staffing?
              <span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
            >
              <p>
                We provide temporary staff for a wide range of roles including
                administrative, technical, finance, logistics, IT, and customer
                support positions.
              </p>
            </dd>

            <dt
              className={isActive.key == 3 ? "faq_header active" : "faq_header"}
              onClick={() => handleToggle(3)}
            >
              How do you ensure candidate quality?
              <span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
            >
              <p>
                Every candidate goes through a thorough screening process that
                includes background checks, skill assessments, and reference
                verification before being assigned to a client.
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
