import React from "react";
import articlesData from "./data.json"; // استيراد بيانات المقالات من الملف المحلي

const RecentPosts = () => {
  return (
    <section id="recent-posts" className="recent-posts sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>أحدث المقالات</h2>
          <p>اكتشف أحدث المقالات في عالم الذكاء الاصطناعي</p>
        </div>
        <div className="row gy-4">
          {articlesData.map((article, index) => (
            <div className="col-xl-4 col-md-6" key={index}>
              <article>
                <div className="post-img">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="img-fluid"
                  />
                </div>
                <p className="post-category">{article.category}</p>
                <h2 className="title">
                  <a href="#">{article.title}</a>
                </h2>
                <p>{article.content}</p>
                <div className="d-flex align-items-center">
                  <div className="post-meta">
                    <p className="post-author">{article.author}</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;

/*

 <section id="recent-posts" className="recent-posts sections-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Recent Blog Posts</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className="row gy-4">
                <div className="col-xl-4 col-md-6">
                  <article>
                    <div className="post-img">
                      <img
                        src={blog3}
                        alt="Blog Post 3"
                        className="img-fluid"
                      />
                    </div>
                    <p className="post-category">Domain &amp; Hosting</p>
                    <h2 className="title">
                      <a href="blog-details.html">
                        How to host website on any hosting provider?
                      </a>
                    </h2>
                    <div className="d-flex align-items-center">
                      <div className="post-meta">
                        <p className="post-author">William Bla</p>
                        <p className="post-date">
                          <time dateTime="2022-01-01">Feb 1, 2022</time>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                {/* End post list item */
// <div className="col-xl-4 col-md-6">
//   <article>
//     <div className="post-img">
//       <img
//         src={blog3}
//         alt="Blog Post 3"
//         className="img-fluid"
//       />
//     </div>
//     <p className="post-category">Advertisement</p>
//     <h2 className="title">
//       <a href="blog-details.html">
//         How to create add on google adwords?
//       </a>
//     </h2>
//     <div className="d-flex align-items-center">
//       <div className="post-meta">
//         <p className="post-author">Jobi Ret</p>
//         <p className="post-date">
//           <time dateTime="2022-01-01">Oct 5, 2022</time>
//         </p>
//       </div>
//     </div>
//   </article>
// </div>
// {/* End post list item */}
// <div className="col-xl-4 col-md-6">
//   <article>
//     <div className="post-img">
//       <img
//         src={blog3}
//         alt="Blog Post 3"
//         className="img-fluid"
//       />
//     </div>
//     <p className="post-category">Marketing</p>
//     <h2 className="title">
//       <a href="blog-details.html">
//         What is digital marketing and why is important?
//       </a>
//     </h2>
//     <div className="d-flex align-items-center">
//       <div className="post-meta">
//         <p className="post-author">Main Dow</p>
//         <p className="post-date">
//           <time dateTime="2022-01-01">Dec 22, 2022</time>
//         </p>
//       </div>
//     </div>
//   </article>
// </div>
{
  /* End post list item */
}
//   </div>
{
  /* End recent posts list */
}
// </div>
//   </section>
