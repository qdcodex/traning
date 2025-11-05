import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"

export default function HeroSlider1() {
    const swiperOptions = {
        direction: "horizontal",
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".h1n",
            prevEl: ".h1p",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    }

    return (
        <>
            <section className="slider style_four nav_position_one">
                <Swiper {...swiperOptions} className="owl_nav_block owl_dots_none theme_carousel">

                    {/* Slide 1 */}
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_left">
                            <div
                                className="image-layer"
                                style={{ backgroundImage: "url(/assets/images/sliders/slider-1-1.jpg)" }}
                            ></div>
                            <div className="auto-container">
                                <div className="slider_content pd_top_180 pd_bottom_200">
                                    <h6 className="animate_up d-inline-block"> Trusted Manpower Partner </h6>
                                    <h1 className="animate_left"> Connecting Talent <br /> With Opportunity </h1>
                                    <p className="description animate_right">
                                        We specialize in local and overseas recruitment, ensuring businesses find the
                                        right people — and candidates find the right career path.
                                    </p>
                                    <div className="button_all animate_down">
                                        <Link href="/about" className="theme-btn one animated">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_center">
                            <div
                                className="image-layer"
                                style={{ backgroundImage: "url(/assets/images/sliders/slider-1-2.jpg)" }}
                            ></div>
                            <div className="auto-container">
                                <div className="slider_content pd_top_180 pd_bottom_200">
                                    <h6 className="animate_up d-inline-block"> Comprehensive HR Solutions </h6>
                                    <h1 className="animate_left"> Hire Smarter, <br /> Grow Faster </h1>
                                    <p className="description animate_right">
                                        From temporary staffing to payroll management — we deliver flexible HR solutions
                                        that keep your business moving forward.
                                    </p>
                                    <div className="button_all animate_down">
                                        <Link href="/services" className="theme-btn one animated">Our Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_right">
                            <div
                                className="image-layer"
                                style={{ backgroundImage: "url(/assets/images/sliders/slider-1-3.jpg)" }}
                            ></div>
                            <div className="auto-container">
                                <div className="slider_content pd_top_180 pd_bottom_200">
                                    <h6 className="animate_up d-inline-block"> Empowering Global Workforce </h6>
                                    <h1 className="animate_left"> Building Careers <br /> Beyond Borders </h1>
                                    <p className="description animate_right">
                                        We take pride in connecting skilled professionals with top employers across
                                        industries — locally and internationally.
                                    </p>
                                    <div className="button_all animate_down">
                                        <Link href="/contact" className="theme-btn one animated">Get in Touch</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="owl-nav">
                        <div className="owl-prev h1p">
                            <span>‹</span>
                        </div>
                        <div className="owl-next h1n">
                            <span>›</span>
                        </div>
                    </div>
                </Swiper>
            </section>
        </>
    )
}
