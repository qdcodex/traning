import Link from "next/link"
export default function About1() {
    return (
        <>
            <section className="about_us_section" id="about">
                {/*===============spacing==============*/}
                <div className="pd_top_100" />
                {/*===============spacing==============*/}
                <div className="container pd_zero">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections left">
                                    <div className="before_title"> NAXORA </div>
                                    <h2> Empowering Careers & Businesses</h2>
                                    <p> At NAXORA, we transform potential into performance. We don't just teach — we equip, train, 
                                        and empower individuals and businesses for real-world success. Whether you're a student, 
                                        job seeker, entrepreneur, or professional looking to upskill, 
                                        your journey begins here..</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                            <div className="process_box style_one dark_color">
                                <div className="process_box_outer">
                                    <div className="icon">
                                        <span className=" icon-line-chart" />
                                        <div className="number"> 01 </div>
                                    </div>
                                    <div className="content_box">
                                        <h2>
                                            <Link href="#" >Practical over theoretical</Link>
                                        </h2>
                                        <p> We focus on execution over explanation and skill over certificate.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="process_box style_one dark_color">
                                <div className="process_box_outer">
                                    <div className="icon">
                                        <span className=" icon-line-chart" />
                                        <div className="number"> 02 </div>
                                    </div>
                                    <div className="content_box">
                                        <h2>
                                            <Link href="#" > Growth over temporary success </Link>
                                        </h2>
                                        <p> NAXORA is a strategic service coordination platform that connects individuals, 
                                            institutions, and businesses with the right expertise for measurable growth.</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                            <div className="signature_wrapper">
                                <div className="row gutter_15px">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="theme_btn_all color_one">
                                            <Link href="#" className="theme-btn two">Read
                                                More</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12">
                                        <div className="extra_content authour_box dark_color">
                                            <div className="authour_box_content">
                                                <div className="image">
                                                    <img src="/assets/images/riya.png" className="img-fluid sign_image" alt="authour Image" />
                                                </div>
                                                <div className="text">
                                                    <h6>RIYA MAX, <span>Founder &amp; CEO of NAXORA</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                            <div className="extra_content download_docs dark_color">
                                <div className="download_box_content">
                                    <Link href="#" download>Download our latest presentation <i className="icon-download-symbol" />
                                    </Link>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="service_wrapper">
                                <div className="move_image_absolute">
                                    <img src="/assets/images/about/about-1-1.png" className="class-fluid" alt="image" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="service_box style_one dark_color">
                                            <div className="service_content">
                                                <div className="image ">
                                                    <img src="/assets/images/service-illu-1.png" className="img-fluid" alt="Service Image" />
                                                </div>
                                                <div className="content_inner">
                                                    <h2>
                                                        <Link href="#"> Training Skills & Presentation </Link>
                                                    </h2>
                                                    <p> We provide structured solutions that bridge the gap between learning and real-world success.
                                                    </p>
                                                    <Link href="#" className="read_more"> Read more </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        {/*===============spacing==============*/}
                                        <div className="pd_top_100" />
                                        <div className="pd_top_100 d_md_none" />
                                        {/*===============spacing==============*/}
                                        <div className="service_box style_one dark_color last">
                                            <div className="service_content">
                                                <div className="image ">
                                                    <img src="/assets/images/service-illu-1.png" className="img-fluid" alt="Service Image" />
                                                </div>
                                                <div className="content_inner">
                                                    <h2>
                                                        <Link href="#"> Business & Strategic Consulting </Link>
                                                    </h2>
                                                    <p> We solve real challenges: lack of practical skills, career confusion, and limited growth direction.
                                                    </p>
                                                    <Link href="#" className="read_more"> Read more </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
            </section>


        </>
    )
}
