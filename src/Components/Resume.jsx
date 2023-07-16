import React from "react";
import { MdBook } from "react-icons/md";

const Resume = () => {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <MdBook />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Btech Computer Science & Engineering
            </h4>

            <span>2020 — ongoing</span>
            <span>
              IIIT Vadodara - International Campus Diu (IIITV-ICD), Education
              Hub, Kevdi, Diu - 362520.
            </span>
            <p className="timeline-text">7.49 Cpi</p>
          </li>

          {/* <li className="timeline-item">
            <h4 className="h4 timeline-item-title">New york academy of art</h4>

            <span>2006 — 2007</span>

            <p className="timeline-text">
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda
              ossimus, omnis voluptas assumenda est omnis..
            </p>
          </li> */}

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Senior Secondary Education
            </h4>

            <span>2017 — 2018</span>
            <span>Sony Academy Sr. Sec. School, Bharatpur , Rajasthan</span>
            <p className="timeline-text">88%</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Secondary Education</h4>
            <span>2015 — 2016</span>
            <span>Sony Academy Sr. Sec. School, Bharatpur , Rajasthan</span>
            <p className="timeline-text">87.67%</p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <MdBook />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Full Stack Web Developer Intern @ Vidyayan Eduventure Pvt. Ltd.
            </h4>
            <span>04-05-2023 - 07-07-2023</span>
            <p className="timeline-text">
              Worked as summer intern at Vidyayan group on project "Encodingo",
              MERN Stack application. The primary objective of this project was
              to develop a comprehensive web application that would enable
              children to learn coding in a fun and interactive manner. The
              website aims to provide a secure and engaging learning
              environment, encompassing features such as user registration,
              course enrollment, progress tracking, and interaction with coding
              exercises. Additionally, the implementation of an intuitive admin
              dashboard allows for easy course and teacher management.
            </p>
          </li>

          {/* <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Art director</h4>

            <span>2013 — 2015</span>

            <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web designer</h4>

            <span>2010 — 2013</span>

            <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li> */}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web design</h5>
              <data value="80">72%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "72%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Mongodb</h5>
              <data value="60">60%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "60%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">React Js</h5>
              <data value="70">70%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Node Js && Express Js</h5>
              <data value="65">65%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "65%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">HTML && CSS</h5>
              <data value="75">75%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "75%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">JAVA && OPPS</h5>
              <data value="75">75%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "75%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">JAVA SCRIPT</h5>
              <data value="60">60%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "60%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">BOOTSTRAP</h5>
              <data value="70">70%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Resume;
