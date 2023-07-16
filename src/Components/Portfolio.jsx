import React from "react";
import { IoEyeOutline, IoChevronDown } from "react-icons/io5";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
const Portfolio = () => {
  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {/* <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li> */}

          {/* <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li> */}

          {/* <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li> */}
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-select-value>
              Select category
            </div>

            <div className="select-icon">
              <IoChevronDown />
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            {/* <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li> */}
          </ul>
        </div>

        <ul className="project-list">
          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="https://ecommercean.onrender.com/" target="_blank">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>
                <img
                  src={project1}
                  alt="finance"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Ecommerce Website</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="https://encodingo.com/" target="_blank">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>
                <img
                  src={project2}
                  alt="finance"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Encodingo Site</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="https://academatee.netlify.app/" target="_blank">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>
                <img
                  src={project3}
                  alt="finance"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Academate Website</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="https://yashasvifitness.netlify.app/#exercises" target="_blank">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>
                <img
                  src={project4}
                  alt="finance"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Fiti Website</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>
                <img
                  src={project5}
                  alt="finance"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Food  Website</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>

          {/* ... Repeat the remaining project items here ... */}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
