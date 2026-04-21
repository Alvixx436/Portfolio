import React from "react";
import Experience from "./Experience";
function About() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-3">
        <div className="card  shadow-sm  p-4 col-span-1 md:col-span-4 space-y-2 group animate__animated animate__fadeIn rounded-lg ">
          <h2 className="text-lg font-bold">
            {" "}
            <i className="fa-solid fa-circle-info"></i> About
          </h2>
          <p className="text-sm  leading-relaxed">
            I’m a passionate full-stack developer with experience in both web
            development and software development. I specialize in creating
            robust, scalable, and user-friendly applications that meet both
            functional and performance needs.
            <br />
            <br />
            On the front-end, I work with React to build interactive, responsive
            user interfaces that ensure seamless user experiences. For the
            back-end, I use Laravel (PHP) to create powerful, scalable APIs and
            server-side logic. I also have experience with C# and ASP.NET,
            enabling me to develop enterprise-level applications and web
            services, both on Windows and cross-platform environments.
            <br />
            <br />
            With a strong foundation in both front-end and back-end development,
            I am passionate about delivering end-to-end solutions that bring
            ideas to life while maintaining best practices in performance,
            security, and maintainability.
          </p>
        </div>
        <Experience />
      </div>
    </>
  );
}

export default About;
