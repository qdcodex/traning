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
        <title>Payroll Management | ABC Manpower Agency</title>
        <meta
          name="description"
          content="Simplify your employee salary and compliance management with ABC Manpower Agency’s expert payroll services."
        />
        <meta
          name="keywords"
          content="payroll services, salary processing, HR outsourcing, manpower agency"
        />
        <meta property="og:title" content="Payroll Management - ABC Manpower Agency" />
        <meta
          property="og:description"
          content="Reliable payroll management solutions to ensure accuracy, compliance, and employee satisfaction."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/payroll-banner.jpg" />
      </Head>
      <Layout breadcrumbTitle="Payroll Management">
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
        <div className="before_title">HR Employee Services</div>
        <div className="title">Payroll Management</div>
        <p>
          Managing payroll efficiently is essential for every organization.
          Our payroll management service ensures accuracy, compliance, and
          timely disbursement so you can focus on growing your business while
          we handle the complexities.
        </p>
      </div>
    </div>

    <div className="row no-space">
      {/* Left Column */}
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-5 mb-xl-0 ps-0 ps-lg-0 pe-0 pe-lg-0 pe-xl-3">
        <div className="description_box">
          <p>
            Our payroll solutions are tailored to meet the needs of businesses
            of all sizes. We take care of salary processing, tax calculations,
            statutory deductions, and reporting with complete confidentiality
            and precision.
          </p>
        </div>

        {/*===============spacing==============*/}
        <div className="pd_bottom_25" />
        {/*===============spacing==============*/}

        <div className="icon_box_all style_one">
          <div className="icon_content">
            <div className="icon">
              <img
                src="/assets/images/icon-image-nike.png"
                className="img-fluid svg_image"
                alt="Payroll Icon"
              />
            </div>
            <div className="txt_content">
              <h3>
                <Link href="#">Automated Salary Processing</Link>
              </h3>
              <p>
                We leverage modern software to automate payroll cycles, reduce
                manual errors, and ensure accurate salary distribution every
                month.
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
            alt="Payroll management illustration"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 ps-0 ps-lg-0 pe-0 pe-lg-0 ps-xl-3">
        <div className="icon_box_all style_one">
          <div className="icon_content">
            <div className="icon">
              <img
                src="/assets/images/icon-image-nike.png"
                className="img-fluid svg_image"
                alt="Compliance Icon"
              />
            </div>
            <div className="txt_content">
              <h3>
                <Link href="#">Tax & Compliance Handling</Link>
              </h3>
              <p>
                We manage PF, ESI, TDS, and other statutory filings, ensuring
                your company stays compliant with changing labor laws and tax
                regulations.
              </p>
            </div>
          </div>
        </div>

        {/*===============spacing==============*/}
        <div className="pd_bottom_25" />
        {/*===============spacing==============*/}

        <div className="icon_box_all style_one">
          <div className="icon_content">
            <div className="icon">
              <img
                src="/assets/images/icon-image-nike.png"
                className="img-fluid svg_image"
                alt="Report Icon"
              />
            </div>
            <div className="txt_content">
              <h3>
                <Link href="#">Custom Reports & Analytics</Link>
              </h3>
              <p>
                Gain actionable insights with detailed payroll reports and
                analytics designed to support better financial decision-making.
              </p>
            </div>
          </div>
        </div>

        {/*===============spacing==============*/}
        <div className="pd_bottom_25" />
        {/*===============spacing==============*/}

        <h3>Our Payroll Functions</h3>
        <div className="pd_bottom_15" />

        <div className="description_box">
          <p>
            From attendance management to payslip generation, we streamline
            every aspect of payroll. Our goal is to minimize errors, ensure
            compliance, and improve employee satisfaction through transparency
            and timeliness.
          </p>
        </div>

        <div className="pd_bottom_25" />

        <div className="content_box_cn style_one">
          <div className="txt_content">
            <h3>
              <Link href="#">Employee Self-Service Portal</Link>
            </h3>
            <p>
              We provide secure access for employees to view payslips, tax
              details, and leave balances, empowering them with transparency.
            </p>
          </div>
        </div>

        <div className="content_box_cn style_one">
          <div className="txt_content">
            <h3>
              <Link href="#">Confidential Data Security</Link>
            </h3>
            <p>
              All payroll data is handled with strict confidentiality protocols
              to safeguard sensitive employee and company information.
            </p>
          </div>
        </div>

        <div className="content_box_cn style_one">
          <div className="txt_content">
            <h3>
              <Link href="#">End-to-End Payroll Outsourcing</Link>
            </h3>
            <p>
              Whether you need full payroll outsourcing or just compliance
              support, we offer flexible solutions tailored to your business
              model.
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
              How secure is your payroll system?
              <span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{
                display: `${isActive.key == 1 ? "block" : "none"}`,
              }}
            >
              <p>
                Our payroll systems use encrypted servers and restricted access
                controls to ensure all company and employee data remain
                confidential and protected.
              </p>
            </dd>

            <dt
              className={isActive.key == 2 ? "faq_header active" : "faq_header"}
              onClick={() => handleToggle(2)}
            >
              Can you manage multi-location payrolls?
              <span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{
                display: `${isActive.key == 2 ? "block" : "none"}`,
              }}
            >
              <p>
                Yes, we handle payroll for organizations with multiple branches
                or offices across India, maintaining centralized control and
                local compliance.
              </p>
            </dd>

            <dt
              className={isActive.key == 3 ? "faq_header active" : "faq_header"}
              onClick={() => handleToggle(3)}
            >
              Do you provide monthly compliance reports?
              <span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{
                display: `${isActive.key == 3 ? "block" : "none"}`,
              }}
            >
              <p>
                Absolutely. We deliver detailed reports on salary payments,
                deductions, taxes, and statutory filings to maintain full
                transparency and control.
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
