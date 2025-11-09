import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from "next/head";

export default function Blog() {
    return (
        <>
        <Head>
        <title>Blog | ABC Manpower Agency</title>
        <meta
          name="description"
          content="Stay updated with the latest insights, recruitment trends, and workforce management tips from ABC Manpower Agency — your trusted HR and staffing partner."
        />
        <meta
          name="keywords"
          content="manpower blog, recruitment news, HR tips, staffing insights, overseas jobs, hiring trends, workforce solutions"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Blog - ABC Manpower Agency" />
        <meta
          property="og:description"
          content="Read expert articles on recruitment, HR management, and global employment solutions from ABC Manpower Agency."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/assets/images/blog/blog-banner.jpg"
        />
        <meta property="og:url" content="https://www.yourdomain.com/blog" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | ABC Manpower Agency" />
        <meta
          name="twitter:description"
          content="Explore manpower recruitment insights, career advice, and industry trends from ABC Manpower Agency experts."
        />
        <meta
          name="twitter:image"
          content="/assets/images/blog/blog-banner.jpg"
        />
      </Head>
            <Layout breadcrumbTitle="Blog">
                <div className="auto-container">
                    <div className="row default_row">
                        <div id="primary" className="content-area service col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            {/*===============spacing==============*/}
                            <div className="pd_top_90" />
                            {/*===============spacing==============*/}
                            <main id="main" className="site-main" role="main">
  <article className="clearfix service type-service status-publish has-post-thumbnail hentry">
    <div className="row grid_layout">
      {/* 1 */}
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box">
        <div className="news_box style_one blog_classic has_images">
          <div className="image img_hover-1">
            <img
              width={750}
              height={420}
              src="/assets/images/blog/blog-image-9.jpg"
              className="wp-post-image"
              alt="img"
            />
            <Link className="arrow" href="#">
              <i className="fa fa-angle-right" />
            </Link>
          </div>
          <div className="content_box">
            <div className="date">
              <span className="date_in_number">08</span>
              <span className="date_in_month">Oct</span>
            </div>
            <Link href="#" className="categories">
              <i className="icon-folder" />Manpower Solutions
            </Link>
            <h2 className="title">
              <Link href="/">Why Businesses Choose Manpower Agencies</Link>
            </h2>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box">
        <div className="news_box style_one blog_classic has_images">
          <div className="image img_hover-1">
            <img
              width={750}
              height={420}
              src="/assets/images/blog/blog-image-8.jpg"
              className="wp-post-image"
              alt="img"
            />
            <Link className="arrow" href="#">
              <i className="fa fa-angle-right" />
            </Link>
          </div>
          <div className="content_box">
            <div className="date">
              <span className="date_in_number">08</span>
              <span className="date_in_month">Oct</span>
            </div>
            <Link href="#" className="categories">
              <i className="icon-folder" />Recruitment Strategy
            </Link>
            <h2 className="title">
              <Link href="/">Top Benefits of Outsourcing Hiring Needs</Link>
            </h2>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box">
        <div className="news_box style_one blog_classic has_images">
          <div className="image img_hover-1">
            <img
              width={750}
              height={420}
              src="/assets/images/blog/blog-image-7.jpg"
              className="wp-post-image"
              alt="img"
            />
            <Link className="arrow" href="#">
              <i className="fa fa-angle-right" />
            </Link>
          </div>
          <div className="content_box">
            <div className="date">
              <span className="date_in_number">08</span>
              <span className="date_in_month">Oct</span>
            </div>
            <Link href="#" className="categories">
              <i className="icon-folder" />Workforce Planning
            </Link>
            <h2 className="title">
              <Link href="/">How Manpower Agencies Streamline Recruitment</Link>
            </h2>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box">
        <div className="news_box style_one blog_classic has_images">
          <div className="image img_hover-1">
            <img
              width={750}
              height={420}
              src="/assets/images/blog/blog-image-6.jpg"
              className="wp-post-image"
              alt="img"
            />
            <Link className="arrow" href="#">
              <i className="fa fa-angle-right" />
            </Link>
          </div>
          <div className="content_box">
            <div className="date">
              <span className="date_in_number">08</span>
              <span className="date_in_month">Oct</span>
            </div>
            <Link href="#" className="categories">
              <i className="icon-folder" />HR Outsourcing
            </Link>
            <h2 className="title">
              <Link href="/">Retaining Skilled Employees Effectively</Link>
            </h2>
          </div>
        </div>
      </div>

      {/* 5 */}
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box">
        <div className="news_box style_one blog_classic has_images">
          <div className="image img_hover-1">
            <img
              width={750}
              height={420}
              src="/assets/images/blog/blog-image-5.jpg"
              className="wp-post-image"
              alt="img"
            />
            <Link className="arrow" href="#">
              <i className="fa fa-angle-right" />
            </Link>
          </div>
          <div className="content_box">
            <div className="date">
              <span className="date_in_number">08</span>
              <span className="date_in_month">Oct</span>
            </div>
            <Link href="#" className="categories">
              <i className="icon-folder" />Global Hiring
            </Link>
            <h2 className="title">
              <Link href="/">International Workforce Recruitment Trends</Link>
            </h2>
          </div>
        </div>
      </div>

      {/* 6 */}
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box">
        <div className="news_box style_one blog_classic has_images">
          <div className="image img_hover-1">
            <img
              width={750}
              height={420}
              src="/assets/images/blog/blog-image-4.jpg"
              className="wp-post-image"
              alt="img"
            />
            <Link className="arrow" href="#">
              <i className="fa fa-angle-right" />
            </Link>
          </div>
          <div className="content_box">
            <div className="date">
              <span className="date_in_number">08</span>
              <span className="date_in_month">Oct</span>
            </div>
            <Link href="#" className="categories">
              <i className="icon-folder" />Contract Staffing
            </Link>
            <h2 className="title">
              <Link href="/">Temporary Staffing Solutions for Modern Businesses</Link>
            </h2>
          </div>
        </div>
      </div>

      {/* 7 */}
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box">
        <div className="news_box style_one blog_classic has_images">
          <div className="image img_hover-1">
            <img
              width={750}
              height={420}
              src="/assets/images/blog/blog-image-3.jpg"
              className="wp-post-image"
              alt="img"
            />
            <Link className="arrow" href="#">
              <i className="fa fa-angle-right" />
            </Link>
          </div>
          <div className="content_box">
            <div className="date">
              <span className="date_in_number">08</span>
              <span className="date_in_month">Oct</span>
            </div>
            <Link href="#" className="categories">
              <i className="icon-folder" />Recruitment Insights
            </Link>
            <h2 className="title">
              <Link href="/">Workforce Challenges & Opportunities Ahead</Link>
            </h2>
          </div>
        </div>
      </div>

      {/* 8 */}
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box">
        <div className="news_box style_one blog_classic has_images">
          <div className="image img_hover-1">
            <img
              width={750}
              height={420}
              src="/assets/images/blog/blog-image-11.jpg"
              className="wp-post-image"
              alt="img"
            />
            <Link className="arrow" href="#">
              <i className="fa fa-angle-right" />
            </Link>
          </div>
          <div className="content_box">
            <div className="date">
              <span className="date_in_number">08</span>
              <span className="date_in_month">Oct</span>
            </div>
            <Link href="#" className="categories">
              <i className="icon-folder" />HR Management
            </Link>
            <h2 className="title">
              <Link href="/">Solving Common Workforce Management Problems</Link>
            </h2>
          </div>
        </div>
      </div>

      {/* 9 */}
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box">
        <div className="news_box style_one blog_classic has_images">
          <div className="image img_hover-1">
            <img
              width={750}
              height={420}
              src="/assets/images/blog/blog-image-10.jpg"
              className="wp-post-image"
              alt="img"
            />
            <Link className="arrow" href="#">
              <i className="fa fa-angle-right" />
            </Link>
          </div>
          <div className="content_box">
            <div className="date">
              <span className="date_in_number">08</span>
              <span className="date_in_month">Oct</span>
            </div>
            <Link href="#" className="categories">
              <i className="icon-folder" />Employee Relations
            </Link>
            <h2 className="title">
              <Link href="/">Building Strong Employer–Employee Partnerships</Link>
            </h2>
          </div>
        </div>
      </div>

      {/* 10 */}
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box">
        <div className="news_box style_one blog_classic has_images">
          <div className="image img_hover-1">
            <img
              width={750}
              height={420}
              src="/assets/images/blog/blog-image-2.jpg"
              className="wp-post-image"
              alt="img"
            />
            <Link className="arrow" href="#">
              <i className="fa fa-angle-right" />
            </Link>
          </div>
          <div className="content_box">
            <div className="date">
              <span className="date_in_number">08</span>
              <span className="date_in_month">Oct</span>
            </div>
            <Link href="#" className="categories">
              <i className="icon-folder" />Business Solutions
            </Link>
            <h2 className="title">
              <Link href="/">HR Policies for Growing Recruitment Firms</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>

    {/* Pagination */}
    <div className="row">
      <div className="col-lg-12">
        <nav aria-label="Page navigation example">
          <ul className="pagination text-center">
            <li className="active">
              <Link href="blog-simple">1</Link>
            </li>
            <li>
              <Link href="blog-simple">2</Link>
            </li>
            <li className="next_link">
              <Link href="blog-simple">
                <div className="nav-next">
                  <i className="fas fa-angle-right" />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </article>
</main>

                            {/*===============spacing==============*/}
                            <div className="pd_bottom_90" />
                            {/*===============spacing==============*/}
                        </div>
                        <aside id="secondary" className="widget-area all_side_bar col-lg-4 col-md-12 col-sm-12">
  <div className="side_bar">
    {/*===============spacing==============*/}
    <div className="pd_top_90" />
    {/*===============spacing==============*/}

    {/* 🔍 Search Bar */}
    <div className="widgets_grid_box">
      <form role="search" method="get" action="index/">
        <div className="wp-block-search__inside-wrapper">
          <input type="search" name="s" placeholder="Search jobs or topics..." required />
          <i className="fa fa-search" />
        </div>
      </form>
    </div>

    {/* 👤 About Author */}
    <div className="widgets_grid_box">
      <h2 className="widget-title">About the Author</h2>
      <div className="about_authour_widget">
        <h3>Hi! I’m Rahul Sharma</h3>
        <img src="/assets/images/authour-image-wdts.jpg" alt="author" />
        <p>
          With 10+ years of experience in manpower recruitment and HR outsourcing,
          I help companies find the right talent and professionals secure their dream jobs.
        </p>
        <Link href="#">View All Articles</Link>
      </div>
    </div>

    {/* 📂 Post Categories */}
    <div className="widgets_grid_box">
      <h2 className="widget-title">Service Categories</h2>
      <ul className="wp-block-categories">
        <li><Link href="#">Overseas Recruitment</Link> (5)</li>
        <li><Link href="#">Local Staffing</Link> (7)</li>
        <li><Link href="#">Contract Workforce</Link> (6)</li>
        <li><Link href="#">Payroll Management</Link> (4)</li>
        <li><Link href="#">HR Consulting</Link> (5)</li>
        <li><Link href="#">Skilled & Unskilled Labour</Link> (8)</li>
        <li><Link href="#">Blue Collar Hiring</Link> (6)</li>
        <li><Link href="#">Executive Search</Link> (3)</li>
        <li><Link href="#">Training & Onboarding</Link> (4)</li>
      </ul>
    </div>

    {/* 📰 Recent Posts */}
    <div className="widgets_grid_box">
      <h2 className="widget-title">Recent Posts</h2>
      <div className="widget_post_box">

        <div className="blog_in clearfix image_in">
          <div className="image">
            <img decoding="async" src="/assets/images/blog/blog-image-7.jpg" alt="Recruitment Tips" />
          </div>
          <div className="content_inner">
            <p className="post-date"><span className="icon-calendar" />October 8, {new Date().getFullYear()}</p>
            <h3><Link href="/">Top Strategies for International Recruitment</Link></h3>
          </div>
        </div>

        <div className="blog_in clearfix image_in">
          <div className="image">
            <img decoding="async" src="/assets/images/blog/blog-image-9.jpg" alt="Payroll" />
          </div>
          <div className="content_inner">
            <p className="post-date"><span className="icon-calendar" />October 8, {new Date().getFullYear()}</p>
            <h3><Link href="/">Simplifying Payroll Outsourcing for SMEs</Link></h3>
          </div>
        </div>

        <div className="blog_in clearfix image_in">
          <div className="image">
            <img decoding="async" src="/assets/images/blog/blog-image-8.jpg" alt="Hiring" />
          </div>
          <div className="content_inner">
            <p className="post-date"><span className="icon-calendar" />October 8, {new Date().getFullYear()}</p>
            <h3><Link href="/">Why Background Verification Matters</Link></h3>
          </div>
        </div>

        <div className="blog_in clearfix image_in">
          <div className="image">
            <img decoding="async" src="/assets/images/blog/blog-image-7.jpg" alt="Employee Retention" />
          </div>
          <div className="content_inner">
            <p className="post-date"><span className="icon-calendar" />October 8, {new Date().getFullYear()}</p>
            <h3><Link href="/">Retaining Skilled Workers in a Competitive Market</Link></h3>
          </div>
        </div>
      </div>
    </div>

    {/* 🏷️ Tag Cloud */}
    <div className="widgets_grid_box">
      <h2 className="widget-title">Tag Clouds</h2>
      <div className="wp-block-tag-cloud">
        <Link href="#">Recruitment</Link>
        <Link href="#">HR</Link>
        <Link href="#">Payroll</Link>
        <Link href="#">Workforce</Link>
        <Link href="#">Hiring</Link>
        <Link href="#">Outsourcing</Link>
        <Link href="#">Training</Link>
        <Link href="#">Job Placement</Link>
        <Link href="#">Talent Search</Link>
        <Link href="#">Employee Management</Link>
      </div>
    </div>

    {/*===============spacing==============*/}
    <div className="pd_bottom_70" />
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



            </Layout>
        </>
    )
}