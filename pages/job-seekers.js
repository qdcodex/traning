import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Head from "next/head";

const PortfolioFilter1Col = dynamic(() => import('@/components/elements/PortfolioFilter1Col'), {
    ssr: false,
})

export default function Project1Grid() {
    return (
        <>
        <Head>
        <title>Job Seekers | ABC Manpower Agency</title>
        <meta
          name="description"
          content="Find your dream job with ABC Manpower Agency. We connect skilled job seekers with top employers across industries for local and overseas opportunities."
        />
        <meta
          name="keywords"
          content="job seekers, manpower agency, overseas jobs, recruitment, employment opportunities, career placement, staffing agency"
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Job Seekers - Find Employment with ABC Manpower Agency"
        />
        <meta
          property="og:description"
          content="Discover rewarding career opportunities with ABC Manpower Agency. Apply today and let us match your skills with the right employer."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/assets/images/job-seekers/job-seekers-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://www.yourdomain.com/job-seekers"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Job Seekers | ABC Manpower Agency"
        />
        <meta
          name="twitter:description"
          content="Explore new job openings and connect with trusted employers through ABC Manpower Agency."
        />
        <meta
          name="twitter:image"
          content="/assets/images/job-seekers/job-seekers-banner.jpg"
        />
      </Head>
            <Layout breadcrumbTitle="Job Seekers">
                <div>
                    <section className="project_all filt_style_two filter_enabled">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <PortfolioFilter1Col />
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_90" />
                        {/*===============spacing==============*/}
                    </section>
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
                    {/*-newsteller end-*/}
                </div>

            </Layout>
        </>
    )
}
