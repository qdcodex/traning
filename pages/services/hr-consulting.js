import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import Link from "next/link"
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
        <title>HR Consulting | ABC Manpower Agency</title>
        <meta
          name="description"
          content="Professional HR consulting services to optimize your workforce, improve compliance, and enhance productivity."
        />
        <meta
          name="keywords"
          content="HR consulting, manpower agency, human resources, recruitment strategy"
        />
        <meta property="og:title" content="HR Consulting - ABC Manpower Agency" />
        <meta
          property="og:description"
          content="Get expert HR consulting to streamline your recruitment and workforce management processes."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/hr-consulting-banner.jpg" />
      </Head>
            <Layout breadcrumbTitle="HR Consulting">
                <div>
                    <div className="auto-container">
                        <div className="row default_row">
                            <div id="primary" className="content-area service col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <main id="main" className="site-main" role="main">
  {/*===============spacing==============*/}
  <div className="pd_top_85" />
  {/*===============spacing==============*/}
  <article className="clearfix service type-service status-publish has-post-thumbnail hentry">
    <div className="title_all_box style_one dark_color">
      <div className="title_sections left">
        <div className="before_title">Human Resource Solutions</div>
        <div className="title">HR Consulting</div>
        <p>
          Our HR Consulting services empower organizations to build efficient
          teams, strengthen workplace culture, and align their people strategy
          with business growth. From talent acquisition to compliance and
          performance management, we partner with you to enhance every stage
          of your HR journey.
        </p>
      </div>
    </div>

    <div className="row no-space">
      {/* LEFT COLUMN */}
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-5 mb-lg-5 mb-xl-0 ps-0 pe-xl-3">
        <div className="description_box">
          <p>
            In today’s dynamic business environment, managing human resources
            effectively requires more than just operational efficiency — it
            demands strategic insight. Our experienced HR consultants help you
            develop policies, frameworks, and processes that foster engagement,
            compliance, and long-term growth.
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
                alt="icon png"
              />
            </div>
            <div className="txt_content">
              <h3>
                <Link href="#">Strategic HR Planning</Link>
              </h3>
              <p>
                We help organizations align their human capital strategies with
                long-term business objectives to achieve sustainable success.
              </p>
            </div>
          </div>
        </div>

        <div className="pd_bottom_25" />

        <div className="simple_image_boxes">
          <img
            src="/assets/images/blog/single-post-gal-1.jpg"
            className="object-fit-cover-center height_570px"
            alt="HR Consulting Team"
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
              <h3>
                <Link href="#">Talent Acquisition</Link>
              </h3>
              <p>
                From defining job roles to conducting in-depth assessments, our
                consultants ensure you attract and retain top-performing talent
                that fits your organization’s culture and goals.
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
              <h3>
                <Link href="#">HR Policy & Compliance</Link>
              </h3>
              <p>
                Our experts develop HR policies that align with legal standards
                and organizational ethics, ensuring compliance and transparency
                across all levels.
              </p>
            </div>
          </div>
        </div>

        <div className="pd_bottom_25" />

        <h3>Core HR Functions</h3>
        <div className="pd_bottom_15" />

        <div className="description_box">
          <p>
            We provide end-to-end HR support — from recruitment and onboarding to
            training, performance management, and employee relations — to help
            organizations operate more effectively.
          </p>
        </div>

        <div className="pd_bottom_25" />

        <div className="content_box_cn style_one">
          <div className="txt_content">
            <h3>
              <Link href="#">Performance Management</Link>
            </h3>
            <p>
              We help design evaluation frameworks that motivate employees and
              align their goals with your organizational vision.
            </p>
          </div>
        </div>

        <div className="content_box_cn style_one">
          <div className="txt_content">
            <h3>
              <Link href="#">Learning & Development</Link>
            </h3>
            <p>
              Upskill your workforce with customized training programs designed
              to enhance productivity and leadership capabilities.
            </p>
          </div>
        </div>

        <div className="content_box_cn style_one">
          <div className="txt_content">
            <h3>
              <Link href="#">Employee Engagement</Link>
            </h3>
            <p>
              We create strategies that build trust, recognition, and
              collaboration — leading to happier and more loyal teams.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/*===============spacing==============*/}
    <div className="pd_bottom_25" />
    <h3>Service Benefits</h3>
    <div className="pd_bottom_25" />

    {/* FAQ Section */}
    <div className="faq_section type_two">
      <div className="block_faq">
        <div className="accordion">
          <dl>
            <dt
              className={isActive.key == 1 ? "faq_header active" : "faq_header"}
              onClick={() => handleToggle(1)}
            >
              What does HR Consulting include?
              <span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
            >
              <p>
                HR Consulting covers services such as recruitment strategy,
                policy development, compliance management, performance systems,
                and workforce planning to help companies strengthen their people
                management practices.
              </p>
            </dd>

            <dt
              className={isActive.key == 2 ? "faq_header active" : "faq_header"}
              onClick={() => handleToggle(2)}
            >
              How can HR Consulting improve business performance?
              <span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
            >
              <p>
                By optimizing recruitment, training, and employee engagement,
                HR Consulting ensures that your workforce operates efficiently
                and contributes directly to business growth.
              </p>
            </dd>

            <dt
              className={isActive.key == 3 ? "faq_header active" : "faq_header"}
              onClick={() => handleToggle(3)}
            >
              Do you provide customized HR solutions?
              <span className="icon-play" />
            </dt>
            <dd
              className="accordion-content hide"
              style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
            >
              <p>
                Yes. We tailor our consulting services to suit your industry,
                company size, and organizational goals — ensuring effective and
                practical HR outcomes.
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
                            <aside id="secondary" className="widget-area all_side_bar col-lg-4 col-md-12 col-sm-12">
                                <div className="service_siderbar side_bar">
                                    {/*===============spacing==============*/}
                                    <div className="pd_top_85" />
                                    {/*===============spacing==============*/}
                                   <div className="widgets_grid_box">
    <div className="widget creote_widget_service_list">
        <h4 className="widget-title">Our Services</h4>
        <ul className="service_list_box">
            <li><Link href="/services/local-recruitment">Local Recruitment</Link></li>
            <li><Link href="/services/overseas-recruitment">Overseas Recruitment</Link></li>
            <li><Link href="/services/temporary-staffing">Temporary Staffing</Link></li>
            <li><Link href="/services/permanent-staffing">Permanent Staffing</Link></li>
            <li><Link href="/services/payroll-management">Payroll Management</Link></li>
            <li><Link href="/services/hr-consulting">HR Consulting</Link></li>
        </ul>
    </div>
</div>

                                    <div className="widgets_grid_box">
                                        <div className="brouchure_box_widget">
                                            <div className="widget_content">
                                                <h3>A Complete Guide to Employee Engagement</h3>
                                                <div className="color_white_1 clearfix">
                                                    <Link href="#" className="theme-btn color_white_1 one">Download</Link>
                                                </div>
                                                <img src="/assets/images/broucher-img.jpg" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widgets_grid_box">
                                        <div id="creote-contactus-3" className="widget widget_contactus">
                                            <div className="contact_box_widget widget_box">
                                                <div className="widget_content">
                                                    <img src="/assets/images/service-sidebar-contact-bg.jpg" alt="backgroundimage" />
                                                    <div className="top_section">
                                                        <h3>Have Questions?</h3>
                                                        <p>Nothing prevents our being to what we like. </p>
                                                    </div>
                                                    <div className="bottom_section">
                                                        <Link href="#" className="phone_number">+98 060 712 34</Link>
                                                        <Link href="#" className="mailid">sendmail@qetus.com</Link>
                                                    </div>
                                                </div>
                                                <Link href="#" className="theme-btn one">Appointment</Link>
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
                                        <p>For receiving our news and updates in your inbox directly. </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="item_scubscribe">
                                        <div className="input_group">
                                            <form className="mc4wp-form" method="post" data-name="Subscibe">
                                                <div className="mc4wp-form-fields">
                                                    <input type="email" name="EMAIL" placeholder="Your email address" required />
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
    )
}