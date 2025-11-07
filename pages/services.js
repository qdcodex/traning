import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Service() {
  // Store all service data in a variable
  const services = [
    {
      title: "Talent Management",
      description:
        "Once your company has hired the best employees, the next step.",
      image: "/assets/images/service/service-image-6.jpg",
    },
    {
      title: "Health Care Benefits",
      description:
        "Workplace conflict can become a costly and time-consuming process.",
      image: "/assets/images/service/service-image-5.jpg",
    },
    {
      title: "Risk Management",
      description:
        "Mitigate workplace issues before they escalate. Shared Time Human.",
      image: "/assets/images/service/service-image-4.jpg",
    },
    {
      title: "Compliance Audits",
      description:
        "Prevents our being able to get what we like best every pleasure.",
      image: "/assets/images/service/service-image-3.png",
    },
    {
      title: "Employee Relations",
      description:
        "Indignation sed dislike men who are beguiled and demoralized.",
      image: "/assets/images/service/service-image-2.png",
    },
    {
      title: "Recruitment Process",
      description: "These cases are perfectly simple and easy to distinguish.",
      image: "/assets/images/service/service-image-1.png",
    },
  ];

  return (
    <Layout breadcrumbTitle="Services">
      {/*===============spacing==============*/}
      <div className="pd_top_90" />
      {/*===============spacing==============*/}

      <section className="creote-service-box">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"
              >
                <div className="service_post style_one">
                  <div className="image">
                    <div className="overlay" />
                    <img
                      loading="lazy"
                      width={500}
                      height={500}
                      src={service.image}
                      alt={service.title}
                    />
                  </div>
                  <div className="service_content icon_yes">
                    <div className="icon_box">
                      <span className="icon icon-thumbs-up icon" />
                    </div>
                    <h2 className="title_service">
                      <Link href="#">{service.title}</Link>
                    </h2>
                    <p className="short_desc">{service.description}</p>
                    <Link className="read_more" href="#">
                      Read More <i className="icon-right-arrow-long" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*===============spacing==============*/}
      <div className="pd_top_80" />
      {/*===============spacing==============*/}

      {/* Newsletter */}
      <section className="newsteller style_one bg_dark_1">
        <div className="pd_top_40" />
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="content">
                <h2>Join Our Mailing List</h2>
                <p>
                  For receiving our news and updates in your inbox directly.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="item_scubscribe">
                <div className="input_group">
                  <form
                    className="mc4wp-form"
                    method="post"
                    data-name="Subscribe"
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
        <div className="pd_bottom_40" />
      </section>
    </Layout>
  );
}
