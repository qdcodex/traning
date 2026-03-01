import Link from "next/link";

export default function ModalPopup({ isContactPopup, handleContactPopup }) {
  return (
    <>
      <div
        className={`modal_popup one ${
          isContactPopup ? "contact-popup-visible" : ""
        }`}
      >
        <div className="modal-popup-inner">
          <div className="close-modal" onClick={handleContactPopup}>
            <i className="fa fa-times" />
          </div>
          <div className="modal_box">
            <div className="row">
              <div className="col-lg-5 col-md-12 form_inner">
                <div className="form_content">
                  <form className="contact-form">
                    <p>
                      <label>
                        {" "}
                        Your name
                        <br />
                        <input
                          type="text"
                          name="name"
                          size={40}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Enter Your Name"
                        />
                        <br />
                        <i className="fa fa-user" />
                        <br />
                      </label>
                    </p>
                    <p>
                      <label>
                        {" "}
                        Your email
                        <br />
                        <input
                          type="email"
                          name="email"
                          size={40}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Enter Your Email"
                        />
                        <br />
                        <i className="fa fa-envelope" />
                        <br />
                      </label>
                    </p>
                    <p>
                      <label>
                        {" "}
                        Subject
                        <br />
                        <input
                          type="text"
                          name="subject"
                          size={40}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Enter Your Subject"
                        />
                        <br />
                        <i className="fa fa-folder" />
                        <br />
                      </label>
                    </p>
                    <p>
                      <label>
                        {" "}
                        Your message (optional)
                        <br />
                        <textarea
                          name="message"
                          cols={40}
                          rows={10}
                          className="wpcf7-form-control wpcf7-textarea"
                          aria-invalid="false"
                          placeholder="Enter Your Message"
                          defaultValue={""}
                        />
                        <br />
                        <i className="fa fa-comments" />
                        <br />
                      </label>
                    </p>
                    <p>
                      <input type="submit" defaultValue="Submit" />
                    </p>
                  </form>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 about_company_inner">
                <div className="abt_content">
                  <div className="logo">
                    <img
                      src="/assets/images/naxoraw.png"
                      alt="img"
                      className="company_logo_modal"
                    />
                  </div>
                  <div className="text">
                    <p>
                      {" "}
                      At NAXORA, we transform potential into performance. We don't just teach — we equip, train, and empower individuals and 
                      businesses for real-world success. Whether you're a student, job seeker, entrepreneur, 
                      or professional looking to upskill, your journey begins here.
                    </p>
                    <Link href="#">Read More</Link>
                  </div>
                  <div className="post_contet_modal">
                    <h2> Latest News</h2>
                    <div className="post_enable">
                      <div className="modal_post_grid">
                        <Link href="/blog-single">
                          <img
                            width={852}
                            height={812}
                            src="/assets/images/blog/blog-image-9.jpg"
                            className="main_img wp-post-image"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="modal_post_grid">
                        <Link href="/blog-single">
                          <img
                            width={852}
                            height={812}
                            src="/assets/images/blog/blog-image-8.jpg"
                            className="main_img wp-post-image"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="modal_post_grid">
                        <Link href="/blog-single">
                          <img
                            width={852}
                            height={812}
                            src="/assets/images/blog/blog-image-7.jpg"
                            className="main_img wp-post-image"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="modal_post_grid">
                        <Link href="/blog-single">
                          <img
                            width={852}
                            height={812}
                            src="/assets/images/blog/blog-image-6.jpg"
                            className="main_img wp-post-image"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="modal_post_grid">
                        <Link href="/blog-single">
                          <img
                            width={852}
                            height={812}
                            src="/assets/images/blog/blog-image-5.jpg"
                            className="main_img wp-post-image"
                            alt="img"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="copright">
                    © {new Date().getFullYear()}{" "}
                    <Link href="https://www.qdcodex.in/" target="_blank">
                      QDCODEX
                    </Link>
                    . All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
