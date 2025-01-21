import React, { useState } from "react";

import aboutImage from "./images/Bezkaa.png";

import prog from "./images/prog.jpg";
import marketing from "./images/marketing.jpg";
import content from "./images/content.jpg";

import blog3 from "./assets/images/blog/blog-3.jpg";
// Import Vendor CSS Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/aos/aos.css";
// import './assets/vendor/aos/aos.js'
import "./assets/vendor/swiper/swiper-bundle.min.css";
import im1 from "./images/examples/1.jpeg";

import im2 from "./images/examples/2.jpeg";
import im3 from "./images/examples/3.jpeg";
import im4 from "./images/examples/4.jpeg";
import im5 from "./images/examples/5.jpeg";
import im6 from "./images/examples/6.jpeg";
import im7 from "./images/examples/7.jpeg";
// Import Main CSS File
import "./assets/stylesheets/styles.css";
import MarqueeImg from "./MarqueeImg";
import { Block } from "@mui/icons-material";

import Services from "./ServiceCard";
import { Modal } from "react-bootstrap";
import RecentPosts from "./RecentPosts";
export default function Website({ setShowWebsite }) {
  const switchToDash = () => {
    setShowWebsite(false);
  };
  const [showPost, setshowPost] = useState(false);
  const examples = [im1, im2, im3, im4, im5, im6, im7];

  return (
    <>
      <>
        <header id="header" className="header d-flex align-items-center">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              <h1>
                Bezkaa<span>.</span>
              </h1>
            </a>

            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a href="#hero">الرئيسية</a>
                </li>
                <li>
                  <a href="#about">عنّا</a>
                </li>
                <li>
                  <a href="#testimonials">التوصيات</a>
                </li>
                <li>
                  <a href="#team">الفريق</a>
                </li>
                <li>
                  <a href="#faq">الأسئلة الشائعة</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>القائمة</span>{" "}
                    <i className="bi bi-chevron-down dropdown-indicator" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">التسعير</a>
                    </li>
                    <li>
                      <a href="#">الخدمات</a>
                    </li>
                    <li>
                      <a href="#">الشروط والأحكام</a>
                    </li>
                    <li>
                      <a href="#">سياسة الخصوصية</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#recent-posts">الأخبار</a>
                </li>
              </ul>
            </nav>
            {/* .navbar */}

            {/* Button in Header */}
            <div className="header-btn">
              <a
                onClick={switchToDash}
                className="btn btn-success btn-lg"
                style={{ cursor: "pointer" }}
              >
                ابدأ الآن
              </a>
            </div>

            <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
          </div>
        </header>

        {/* End Header */}
        {/* End Header */}
        {/* - - - - - - - -  Hero Section - - - - - - - -  */}
        <section id="hero" className="hero">
          <div className="container position-relative">
            <div className="row gy-5" data-aos="fade-in">
              <div className="col-lg-12 order-lg-1 d-flex flex-column justify-content-center text-center caption">
                <h2>
                  اهلا بك في <span>بذكاء</span>
                  <span className="circle">.</span>
                </h2>
                <p>
                  بوابتك نحو مستقبل إدارة المحتوى الذكي بتقنيات الذكاء
                  الاصطناعي.
                </p>

                {/* Button */}
              </div>
            </div>
          </div>

          <div className="icon-boxes position-relative">
            <div className="container position-relative">
              <div className="row gy-4 mt-5">
                <div
                  className="col-xl-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-fullscreen" />
                    </div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
                        نموذج فائق
                      </a>
                    </h4>
                  </div>
                </div>
                {/*End Icon Box */}
                <div
                  className="col-xl-4 col-md-4 card-two"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-headset" />
                    </div>
                    <h2 className="title">
                      <a className="stretched-link">سهولة</a>
                    </h2>
                    <h4 className="title">
                      <a className="stretched-link">سهولة الإستخدام</a>
                    </h4>
                  </div>
                </div>
                {/*End Icon Box */}
                <div
                  className="col-xl-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-person-check" />
                    </div>
                    <h4 className="title">
                      <a className="stretched-link">رضاك هدفنا</a>
                    </h4>
                  </div>
                </div>
                {/*End Icon Box */}
              </div>
            </div>
          </div>
        </section>
        {/* End Hero Section */}
        <main id="main">
          {/* - - - - - - - -  About Us Section - - - - - - - -  */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>من نحن</h2>
                <p>المنصة العربية الاقوي في خدمات الذكاء الاصطناعي.</p>
              </div>
              <div className="row gy-4">
                <div className="col-lg-4">
                  <img
                    src={aboutImage}
                    className="img-fluid rounded-4 mb-4"
                    alt="About"
                  />
                </div>
                <div className="col-lg-8">
                  <div className="content ps-0 ps-lg-5">
                    <p>
                      في منصتنا، نقدم حلولًا متكاملة باستخدام الذكاء الاصطناعي
                      لتمكين الشركات والأفراد من تحسين استراتيجيات التسويق،
                      كتابة المحتوى بشكل مبتكر، وتحليل النصوص والفيديوهات للحصول
                      على رؤى أعمق. نحن هنا لتمكينك من استخدام التكنولوجيا
                      لزيادة الإنتاجية وتحقيق أهدافك الرقمية بشكل فعال.
                    </p>
                    <ul>
                      <li>
                        نقدم حلول تسويق ذكية لتحسين تفاعل الجمهور وزيادة الوصول.
                      </li>
                      <li>
                        نساعدك في كتابة محتوى مبتكر وجذاب باستخدام تقنيات الذكاء
                        الاصطناعي.
                      </li>
                      <li>
                        نحلل النصوص والفيديوهات للحصول على رؤى دقيقة تدعم
                        قراراتك.
                      </li>
                      <li>
                        منصة شاملة تتيح لك استخدام الذكاء الاصطناعي في مختلف
                        جوانب العمل الرقمي.
                      </li>
                      <li>
                        نحن هنا لمساعدتك في أتمتة العمليات وتحقيق نتائج سريعة
                        وفعالة.
                      </li>
                      <li>
                        خدماتنا موجهة للأفراد والشركات التي ترغب في تحسين أدائها
                        الرقمي.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* End About Us Section */}
          {/* - - - - - - - -  Clients Section - - - - - - - -  */}
          <div style={{ all: "unset" }}>
            <Services />
          </div>
          {/* End Clients Section */}
          {/* - - - - - - - -  Call To Action Section - - - - - - - -  */}
          <section id="call-to-action" className="call-to-action">
            <div className="container text-center" data-aos="zoom-out">
              <h3>هل أنت مستعد للقيام بشيء عظيم؟</h3>
              <p>
                {" "}
                الآن هو الوقت المثالي للانطلاق! انضم إلينا واكتشف كيف يمكنك
                تحقيق أهدافك بكل سهولة وفعالية.
              </p>
              <p>
                {" "}
                لدينا الأدوات والموارد التي تحتاجها لتحقيق النجاح، فقط ابدأ الآن
                وابدأ رحلتك نحو التميز.
              </p>
              <p>لا تفوت الفرصة! استفد من عرضنا الحصري وابدأ بتجربة مميزة.</p>

              <a
                className="cta-btn"
                onClick={switchToDash}
                style={{ cursor: "pointer" }}
              >
                ابدأ الآن مجانًا
              </a>
            </div>
          </section>

          {/* End Call To Action Section */}
          {/* - - - - - - - -  Testimonials Section - - - - - - - -  */}
          <MarqueeImg images={examples} direction={"ltr"} />
          {/* End Testimonials Section */}
          {/* - - - - - - - -  Our Team Section - - - - - - - -  */}
          <section id="services" className="services sections-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>خدماتنا</h2>
                <p>
                  نقدم مجموعة من الخدمات المصممة بعناية باستخدام أحدث التقنيات
                  لضمان تحقيق أفضل النتائج لعملائنا.
                </p>
              </div>
              <div className="row gy-4">
                {/* Service 1 */}
                <div
                  className="col-xl-3 col-md-6 d-flex"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="service-card" style={{ textAlign: "center" }}>
                    <img
                      src={prog}
                      alt="Service 1"
                      style={{
                        width: "100%", // Makes image fill the container's width
                        height: "200px", // Fixed height for uniformity
                        objectFit: "cover", // Ensures images maintain their aspect ratio and cover the space
                        borderRadius: "10px", // Optional: Add rounded corners
                      }}
                    />
                    <h4 style={{ marginTop: "15px", fontSize: "1.2rem" }}>
                      تطوير التطبيقات
                    </h4>
                    <p style={{ fontSize: "1rem", marginTop: "10px" }}>
                      بناء تطبيقات مبتكرة بمواصفات عالمية تجمع بين التصميم
                      الجذاب وسهولة الاستخدام لتلبية جميع احتياجاتك.
                    </p>
                  </div>
                </div>

                {/* End Service 1 */}
                {/* Service 2 */}
                <div
                  className="col-xl-3 col-md-6 d-flex"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="service-card">
                    <img
                      src={marketing}
                      className="img-fluid"
                      alt="Service 2"
                      style={{
                        width: "100%", // Makes image fill the container's width
                        height: "200px", // Fixed height for uniformity
                        objectFit: "cover", // Ensures images maintain their aspect ratio and cover the space
                        borderRadius: "10px", // Optional: Add rounded corners
                      }}
                    />
                    <h4>أدوات التسويق</h4>
                    <p>
                      تعزيز تواجدك الرقمي من خلال تصميم هوية بصرية متكاملة، ووضع
                      استراتيجيات تسويقية مبتكرة تضمن تميزك.
                    </p>
                  </div>
                </div>
                {/* End Service 2 */}
                {/* Service 3 */}
                <div
                  className="col-xl-3 col-md-6 d-flex"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="service-card">
                    <img
                      src={content}
                      className="img-fluid"
                      alt="Service 3"
                      style={{
                        width: "100%", // Makes image fill the container's width
                        height: "200px", // Fixed height for uniformity
                        objectFit: "cover", // Ensures images maintain their aspect ratio and cover the space
                        borderRadius: "10px", // Optional: Add rounded corners
                      }}
                    />
                    <h4>كتابة المحتوى</h4>
                    <p>
                      إنتاج محتوى إبداعي يلبي تطلعاتك ويعكس هوية علامتك
                      التجارية، مع التركيز على جذب جمهورك المستهدف.
                    </p>
                  </div>
                </div>
                {/* End Service 3 */}
                {/* Service 4 */}
                <div
                  className="col-xl-3 col-md-6 d-flex"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="service-card">
                    <img
                      src={content}
                      className="img-fluid"
                      alt="Service 4"
                      style={{
                        width: "150%", // Makes image fill the container's width
                        height: "200px", // Fixed height for uniformity

                        borderRadius: "10px", // Optional: Add rounded corners
                      }}
                    />
                    <h4>إدارة المشاريع</h4>
                    <p>
                      تقديم حلول متكاملة لإدارة مشاريعك بكفاءة واحترافية لضمان
                      تحقيق أهدافك بأفضل النتائج.
                    </p>
                  </div>
                </div>
                {/* End Service 4 */}
              </div>
            </div>
          </section>

          {/* End Our Team Section */}
          {/* - - - - - - - -  Frequently Asked Questions Section - - - - - - - -  */}
          <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">
              <div className="row gy-4">
                <div className="col-lg-12">
                  <div className="content text-center">
                    <h3>الأسئلة المتكررة</h3>
                    <p>
                      يمكنم تقديم الأسئلة و التواصل معنا من خلال نموذج التواصل
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div
                    className="accordion accordion-flush"
                    id="faqlist"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="accordion-item">
                      <h3 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-1"
                        >
                          <span className="num">
                            <i className="bi bi-1-square" />
                          </span>
                          ما الفرق بيننا وبين شات جي بي تي؟
                        </button>
                      </h3>
                      <div
                        id="faq-content-1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div className="accordion-body">
                          نحن متخصصون في مجالات معينة مثل البرمجة وتصميم
                          التطبيقات والذكاء الصناعي. بينما شات جي بي تي هو نموذج
                          عام يجيب على الأسئلة بشكل عام دون التخصص في مجالات
                          معينة.
                        </div>
                      </div>
                    </div>
                    {/* # Faq item*/}
                    <div className="accordion-item">
                      <h3 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-2"
                        >
                          <span className="num">
                            <i className="bi bi-2-square" />
                          </span>
                          هل تقدمون خدمات خاصة؟
                        </button>
                      </h3>
                      <div
                        id="faq-content-2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div className="accordion-body">
                          نعم، نحن نقدم خدمات خاصة مثل البرمجة وتصميم التطبيقات
                          وتطوير الحلول المعتمدة على الذكاء الصناعي، بالإضافة
                          إلى العديد من الخدمات التقنية الأخرى.
                        </div>
                      </div>
                    </div>
                    {/* # Faq item*/}
                    <div className="accordion-item">
                      <h3 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-3"
                        >
                          <span className="num">
                            <i className="bi bi-3-square" />
                          </span>
                          ما هي مجالات تخصصكم؟
                        </button>
                      </h3>
                      <div
                        id="faq-content-3"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div className="accordion-body">
                          نحن متخصصون في البرمجة، تصميم التطبيقات، الذكاء
                          الصناعي، تطوير الويب، إدارة الخوادم، حلول البيانات،
                          وأتمتة العمليات.
                        </div>
                      </div>
                    </div>
                    {/* # Faq item*/}
                    <div className="accordion-item">
                      <h3 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-4"
                        >
                          <span className="num">
                            <i className="bi bi-4-square" />
                          </span>
                          هل تقدمون حلولًا مخصصة للشركات؟
                        </button>
                      </h3>
                      <div
                        id="faq-content-4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div className="accordion-body">
                          نعم، نحن نقدم حلولًا مخصصة بناءً على احتياجات كل عميل
                          سواء كان شركة صغيرة أو كبيرة. نركز على تقديم حلول و
                          خدمات تقنية مبتكرة تلائم متطلبات السوق.
                        </div>
                      </div>
                    </div>
                    {/* # Faq item*/}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Frequently Asked Questions Section */}
          <div class="pricing-cards">
            <div class="card free">
              <h3>الخطة المجانية</h3>
              <p class="points">200 نقطة</p>
              <p class="price">مجانًا</p>
              <button>اختر هذه الخطة</button>
            </div>

            <div class="card">
              <h3>الخطة الأساسية</h3>
              <p class="points">500 نقطة</p>
              <p class="price">300 جنيه مصري</p>
              <button>اختر هذه الخطة</button>
            </div>

            <div class="card">
              <h3>الخطة المتوسطة</h3>
              <p class="points">800 نقطة</p>
              <p class="price">500 جنيه مصري</p>
              <button>اختر هذه الخطة</button>
            </div>

            <div class="card premium">
              <h3>الخطة المميزة</h3>
              <p class="points">1500 نقطة</p>
              <p class="price">800 جنيه مصري</p>
              <button>اختر هذه الخطة</button>
            </div>
          </div>
          {/* - - - - - - - -  Recent Blog Posts Section - - - - - - - -  */}
          <RecentPosts />
          {/* End Recent Blog Posts Section */}
        </main>
        {/* End #main */}
        {/* - - - - - - - -  Footer - - - - - - - -  */}
        <footer id="footer" className="footer">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-12 col-md-12 footer-info text-center">
                <div className="social-links d-flex mt-4 justify-content-center">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-4">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>Bezkaa</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="#">Bezkaa</a>
            </div>
          </div>
        </footer>
        {/* End Footer */}
        {/* End Footer */}
        <a
          href="#"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>

        {/* <div id="preloader" /> */}
        {/* Vendor JS Files */}
        {/* Template Main JS File */}
      </>
    </>
  );
}
