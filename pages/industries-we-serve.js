import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Head from 'next/head'

export default function Service() {
  return (
    <>
    <Head>
        <title>Industries We Serve | ABC Manpower Agency</title>
        <meta
          name="description"
          content="ABC Manpower Agency provides professional staffing and recruitment services across multiple industries including construction, healthcare, IT, manufacturing, logistics, and more."
        />
        <meta
          name="keywords"
          content="industries we serve, manpower agency, staffing services, recruitment solutions, HR outsourcing, industrial workforce"
        />
        <meta
          property="og:title"
          content="Industries We Serve - ABC Manpower Agency"
        />
        <meta
          property="og:description"
          content="Explore the diverse industries we serve with expert recruitment and manpower solutions tailored to your business needs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/assets/images/industries/industries-we-serve.jpg"
        />
        <meta
          property="og:url"
          content="https://www.yourdomain.com/industries-we-serve"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Industries We Serve | ABC Manpower Agency"
        />
        <meta
          name="twitter:description"
          content="ABC Manpower Agency delivers staffing expertise across multiple industries with reliable and skilled workforce solutions."
        />
        <meta
          name="twitter:image"
          content="/assets/images/industries/industries-we-serve.jpg"
        />
      </Head>
      <Layout breadcrumbTitle="Industries We Serve">
        <div>
          {/*===============spacing==============*/}
          <div className="pd_top_90" />
          {/*===============spacing==============*/}
          <section className="creote-service-box">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_post style_one">
                    <div className="image">
                      <div className="overlay" />
                      <img
                        loading="lazy"
                        width={500}
                        height={500}
                        src="/assets/images/service/service-image-6.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="service_content icon_yes">
                      <div className="icon_box">
                        <span className="icon icon-thumbs-up icon" />
                      </div>
                      <h2 className="title_service">
                        <Link href="#">Talent Management</Link>
                      </h2>
                      <p className="short_desc">
                        Once your company has hired the best employees, the next
                        step.
                      </p>
                      <Link className="read_more" href="#">
                        {" "}
                        Read More
                        <i className="icon-right-arrow-long" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_post style_one">
                    <div className="image">
                      <div className="overlay" />
                      <img
                        loading="lazy"
                        width={500}
                        height={500}
                        src="/assets/images/service/service-image-5.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="service_content icon_yes">
                      <div className="icon_box">
                        <span className="icon icon-thumbs-up icon" />
                      </div>
                      <h2 className="title_service">
                        <Link href="#">Health Care Benefits</Link>
                      </h2>
                      <p className="short_desc">
                        Workplace conflict can become a costly and
                        time-consuming process.
                      </p>
                      <Link className="read_more" href="#">
                        {" "}
                        Read More
                        <i className="icon-right-arrow-long" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_post style_one">
                    <div className="image">
                      <div className="overlay" />
                      <img
                        loading="lazy"
                        width={500}
                        height={500}
                        src="/assets/images/service/service-image-4.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="service_content icon_yes">
                      <div className="icon_box">
                        <span className="icon icon-thumbs-up icon" />
                      </div>
                      <h2 className="title_service">
                        <Link href="#">Risk Management</Link>
                      </h2>
                      <p className="short_desc">
                        Mitigate workplace issues before they escalate ,Shared
                        Time Human.
                      </p>
                      <Link className="read_more" href="#">
                        {" "}
                        Read More
                        <i className="icon-right-arrow-long" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_post style_one">
                    <div className="image">
                      <div className="overlay" />
                      <img
                        loading="lazy"
                        width={500}
                        height={500}
                        src="/assets/images/service/service-image-3.png"
                        alt="img"
                      />
                    </div>
                    <div className="service_content icon_yes">
                      <div className="icon_box">
                        <span className="icon icon-thumbs-up icon" />
                      </div>
                      <h2 className="title_service">
                        <Link href="#">Compliance Audits</Link>
                      </h2>
                      <p className="short_desc">
                        Prevents our being able too what get like best every
                        pleasure.
                      </p>
                      <Link className="read_more" href="#">
                        {" "}
                        Read More
                        <i className="icon-right-arrow-long" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_post style_one">
                    <div className="image">
                      <div className="overlay" />
                      <img
                        loading="lazy"
                        width={500}
                        height={500}
                        src="/assets/images/service/service-image-2.png"
                        alt="img"
                      />
                    </div>
                    <div className="service_content icon_yes">
                      <div className="icon_box">
                        <span className="icon icon-thumbs-up icon" />
                      </div>
                      <h2 className="title_service">
                        <Link href="#">Employee Relations</Link>
                      </h2>
                      <p className="short_desc">
                        Indignation sed dislike men who are beguiled and
                        demoralized.
                      </p>
                      <Link className="read_more" href="#">
                        {" "}
                        Read More
                        <i className="icon-right-arrow-long" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_post style_one">
                    <div className="image">
                      <div className="overlay" />
                      <img
                        loading="lazy"
                        width={500}
                        height={500}
                        src="/assets/images/service/service-image-1.png"
                        alt="img"
                      />
                    </div>
                    <div className="service_content icon_yes">
                      <div className="icon_box">
                        <span className="icon icon-thumbs-up icon" />
                      </div>
                      <h2 className="title_service">
                        <Link href="#">Recruitment Process</Link>
                      </h2>
                      <p className="short_desc">
                        These cases are perfectly simple and easy to
                        distinguish.
                      </p>
                      <Link className="read_more" href="#">
                        {" "}
                        Read More
                        <i className="icon-right-arrow-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*===============spacing==============*/}
          <div className="pd_top_80" />
          {/*===============spacing==============*/}
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
          {/*-newsteller end-*/}
        </div>
      </Layout>
    </>
  );
}
