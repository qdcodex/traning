import Link from "next/link";
import { useState } from "react";
export default function MobileMenu({ handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
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
      <div className="crt_mobile_menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <nav className="menu-box">
          <div className="close-btn" onClick={handleMobileMenu}>
            <i className="icon-close" />
          </div>
          {/* <form role="search" method="get" action="#">
            <input
              type="search"
              className="search"
              placeholder="Search..."
              name="s"
              title="Search"
            />
            <button type="submit" className="sch_btn">
              {" "}
              <i className="icon-search" />
            </button>
          </form> */}
          <div className="menu-outer">
            <ul id="myNavbar" className="navbar_nav">
              <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                <Link href="/" className="dropdown-toggle nav-link">
                  <span>Home</span>
                </Link>
              </li>
              <li className="menu-item menu-item-has-children dropdown nav-item">
                <Link href="/about-us" className="dropdown-toggle nav-link">
                  <span>About Us</span>
                </Link>
              </li>
              <li className="menu-item menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                <Link href="/services" className="dropdown-toggle nav-link">
                  <span>Services</span>
                  <span className="fa fa-angle-down" />
                </Link>
                <ul
                  className="dropdown-menu"
                  style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
                >
                  <li className="menu-item nav-item">
                    <Link
                      href="/services/local-recruitment"
                      className="dropdown-item nav-link"
                    >
                      <span>Local Recruitment</span>
                    </Link>
                  </li>
                  <li className="menu-item  nav-item">
                    <Link
                      href="/services/overseas-recruitment"
                      className="dropdown-item nav-link"
                    >
                      <span>Overseas Recruitment</span>
                    </Link>
                  </li>
                  <li className="menu-item  nav-item">
                    <Link
                      href="/services/temporary-staffing"
                      className="dropdown-item nav-link"
                    >
                      <span>Temporary Staffing</span>
                    </Link>
                  </li>
                  <li className="menu-item  nav-item">
                    <Link
                      href="/services/permanent-staffing"
                      className="dropdown-item nav-link"
                    >
                      <span>Permanent Staffing</span>
                    </Link>
                  </li>
                  <li className="menu-item  nav-item">
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
                <div className="dropdown-btn" onClick={() => handleToggle(1)}>
                  <span className="fa fa-angle-down" />
                </div>
              </li>
              <li className="menu-item menu-item-has-children dropdown nav-item">
                <Link
                  href="/industries-we-serve"
                  className="dropdown-toggle nav-link"
                >
                  <span>Industries We Serve</span>
                </Link>
              </li>
              <li className="menu-item menu-item-has-children dropdown nav-item">
                <Link href="/job-seekers" className="dropdown-toggle nav-link">
                  <span>Job Seekers</span>
                </Link>
              </li>
              <li className="menu-item  menu-item-has-children dropdown nav-item">
                <Link href="/gallery" className="dropdown-toggle nav-link">
                  <span>Gallery</span>
                </Link>
              </li>
              <li className="menu-item  menu-item-has-children dropdown nav-item">
                <Link href="/blog" className="dropdown-toggle nav-link">
                  <span>Blog</span>
                </Link>
              </li>
              <li className="menu-item  menu-item-has-children dropdown nav-item">
                <Link href="/contact-us" className="dropdown-toggle nav-link">
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
