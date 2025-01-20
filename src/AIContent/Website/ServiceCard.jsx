import React from "react";
import Marquee from "react-fast-marquee";
import im1 from "./images/services/1.jpg";
import im2 from "./images/services/2.jpg";
import im3 from "./images/services/3.jpg";
import im4 from "./images/services/4.jpg";
import im5 from "./images/services/5.jpg";
import im6 from "./images/services/6.jpg";

const services = [
  {
    name: "كاتب المحتوي",
    desc: "إنشاء محتوى احترافي يناسب جميع الاستخدامات.",
    img: im1,
    route: "/content-generation", // رابط الكارت
  },
  {
    name: "مبرمج الوجهات",
    desc: "تصميم واجهات تفاعلية بسرعة وكفاءة.",
    img: im5,
    route: "/ui-gen", // رابط الكارت
  },
  {
    name: "المصمم",
    desc: "إنشاء صور مخصصة ومميزة.",
    img: im4,
    route: "/ui-img-gen", // رابط الكارت
  },
  {
    name: "المترجم",
    desc: "ترجمة نصوص بجودة عالية.",
    img: im3,
    route: "/transelate", // رابط الكارت
  },
  {
    name: "المبرمج",
    desc: "خبير لغات البرمجة المختلفة",
    img: im6,
    route: "/seo", // رابط الكارت
  },
  {
    name: "خبير محركات البحث",
    desc: "رفع ترتيب موقعك في نتائج البحث.",
    img: im2,
    route: "/seo", // رابط الكارت
  },
];

const ServiceCard = ({ title, description, image, route }) => {
  const link = "http://localhost:3000/#";
  return (
    <div
      style={{
        display: "inline-block",
        width: "250px", // حجم العرض الثابت
        height: "320px", // حجم الارتفاع الثابت
        margin: "10px",
        padding: "10px", // حشو داخلي
        backgroundColor: "#333", // خلفية الكارت
        color: "#fff", // لون النص
        borderRadius: "10px", // حواف مستديرة
        textAlign: "center",
        position: "relative", // لضبط الصورة داخل الكارت
        overflow: "hidden", // إخفاء أي جزء من الصورة يخرج عن حدود الكارت
      }}
    >
      {/* الصورة بعرض الكارت */}
      <img
        src={image}
        alt={title}
        style={{
          width: "100%", // الصورة بعرض الكارت بالكامل
          height: "150px", // تحديد ارتفاع الصورة
          objectFit: "cover", // الحفاظ على النسب وتغطية الكارت
          borderRadius: "8px", // إضافة حواف مستديرة للصورة
          marginBottom: "10px", // مسافة بين الصورة والنصوص
        }}
      />
      {/* العنوان */}
      <h4 style={{ fontSize: "18px", marginBottom: "5px" }}>{title}</h4>{" "}
      {/* العنوان بحجم 18px */}
      {/* الوصف */}
      <p style={{ fontSize: "14px", marginBottom: "10px" }}>
        {description}
      </p>{" "}
      {/* الوصف بحجم 14px */}
      {/* رابط التوجيه */}
      <a
        href={link + route}
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          textDecoration: "none",
          color: "#fff",
          backgroundColor: "#28a745", // لون الخلفية
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "14px",
        }}
      >
        اذهب إلى الخدمة
      </a>
    </div>
  );
};

const Services = () => {
  return (
    <div dir="ltr">
      <Marquee speed={100} pauseOnHover={true}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.name}
            description={service.desc}
            image={service.img}
            route={service.route} // تمرير الرابط إلى الكارت
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Services;
