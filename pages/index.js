import FloatingMenu from "@/components/layout/FloatingMenu"
import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Blog1 from "@/components/sections/Blog1"
import Expertise from "@/components/sections/Expertise"
import HeroSlider1 from "@/components/sections/HeroSlider1"
import Newsteller1 from "@/components/sections/Newsteller1"
import Process1 from "@/components/sections/Process1"
import Project1 from "@/components/sections/Project1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import { useState } from "react"
import Head from 'next/head'

export default function Home1() {
    // Floating
    const [isFloating, setFloating] = useState(false);
    const handleFloating = () => setFloating(!isFloating);

    return (
        <>
            
      <Head>
        <title>ABC Manpower Agency | Reliable Recruitment & Staffing Solutions</title>
        <meta
          name="description"
          content="ABC Manpower Agency provides expert recruitment, temporary staffing, overseas hiring, and HR consultancy services. Connecting employers with the right talent worldwide."
        />
        <meta
          name="keywords"
          content="manpower agency, recruitment agency, staffing services, HR consultancy, overseas hiring, job placement, employment agency"
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="ABC Manpower Agency | Trusted Recruitment & HR Solutions"
        />
        <meta
          property="og:description"
          content="Empowering businesses with skilled manpower. ABC Manpower Agency offers recruitment, staffing, and HR consulting services across industries."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/assets/images/home/banner-home.jpg"
        />
        <meta property="og:url" content="https://www.yourdomain.com/" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ABC Manpower Agency | Recruitment & Staffing Experts"
        />
        <meta
          name="twitter:description"
          content="Connecting employers and job seekers through professional manpower solutions. Discover opportunities with ABC Manpower Agency."
        />
        <meta
          name="twitter:image"
          content="/assets/images/home/banner-home.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourdomain.com/" />

       
      </Head>
            <Layout headerStyle={1} footerStyle={1}>
                <HeroSlider1 />
                <About1 />
                <Service1 />
                <Expertise />
                <Process1 />
                <Team1 />
                <Project1 />
                <Testimonial1 />
                <Blog1 />
                <Newsteller1 />
                {/* <FloatingMenu handleFloating={handleFloating} isFloating={isFloating} /> */}
            </Layout>
        </>
    )
}