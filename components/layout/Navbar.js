import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}
      <ul id="myNavbar" className="navbar_nav">
        <li className="menu-item  position-static  nav-item">
          <Link href="/" className=" nav-link">
            <span>Home</span>
          </Link>
        </li>
        <li className="menu-item  nav-item">
          <Link href="/about-us" className=" nav-link">
            <span>About Us</span>
          </Link>
        </li>
        <li className="menu-item menu-item-has-children dropdown nav-item">
          <Link href="/services" className="dropdown-toggle nav-link">
            <span>Services</span>{" "}
          </Link>
          <ul className="dropdown-menu">
            <li className="menu-item nav-item">
              <Link
                href="/services/local-recruitment"
                className="dropdown-item nav-link"
              >
                <span>Local Recruitment</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link
                href="/services/overseas-recruitment"
                className="dropdown-item nav-link"
              >
                <span>Overseas Recruitment</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link
                href="/services/temporary-staffing"
                className="dropdown-item nav-link"
              >
                <span>Temporary Staffing</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link
                href="/services/permanent-staffing"
                className="dropdown-item nav-link"
              >
                <span>Permanent Staffing</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link
                href="/services/payroll-management"
                className="dropdown-item nav-link"
              >
                <span>Payroll Management</span>
              </Link>
            </li>
            <li className="menu-item nav-item">
              <Link
                href="/services/hr-consulting"
                className="dropdown-item nav-link"
              >
                <span>HR Consulting</span>
              </Link>
            </li>
          </ul>

          <div className="dropdown-btn">
            <span className="fa fa-angle-down"></span>
          </div>
        </li>
        <li className="menu-item  nav-item">
          <Link href="/industries-we-serve" className=" nav-link">
            <span>Industries We Serve</span>
          </Link>
        </li>
        <li className="menu-item  nav-item">
          <Link href="/job-seekers" className=" nav-link">
            <span>Job Seekers</span>
          </Link>
        </li>

        <li className="menu-item  nav-item">
          <Link href="/gallery" className=" nav-link">
            <span>Gallery</span>
          </Link>
        </li>
        <li className="menu-item   nav-item">
          <Link href="/blog" className=" nav-link">
            <span>Blog</span>
          </Link>
        </li>
        <li className="menu-item  nav-item">
          <Link href="/contact-us" className=" nav-link">
            <span>Contact Us</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
