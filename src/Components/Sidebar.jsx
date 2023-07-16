import "../assets/css/style.css";
import React from "react";
import {
  IoMailOutline,
  IoCalendarOutline,
  IoLocationOutline,
} from "react-icons/io5";
import {
  RiFacebookCircleLine,
  RiTwitterLine,
  RiInstagramLine,
} from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import photo from "../assets/images/my-avatar.png";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={photo} alt="yashasvi sharma" width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">
              Yashasvi Sharma
            </h1>

            <p className="title">MERN developer</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <IoMailOutline />
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a
                  href="mailto:yashasvisharma67@gmail.com"
                  className="contact-link"
                >
                  yashasvisharma67@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <FaPhoneAlt />
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+12133522795" className="contact-link">
                  +91 6367162245
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <IoCalendarOutline />
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time datetime="1982-06-23">June 6, 2001</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <IoLocationOutline />
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Bharatpur, Rajasthan, India</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <RiFacebookCircleLine />
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <RiTwitterLine />
              </a>
            </li>

            <li className="social-item">
              <a href="https://www.instagram.com/yashasvi_6601/" target="_blank" className="social-link">
                <RiInstagramLine />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
