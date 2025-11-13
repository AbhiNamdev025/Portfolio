import React, { useState } from "react";
import styles from "./contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BASE_URL } from "../../../utils/constants";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch(`${BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully ");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message ");
      }
    } catch (error) {
      toast.error("Server error — please try again later ");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>
            Get In <span className={styles.highlight}>Touch</span>
          </h2>
          <p>
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </header>

        <div className={styles.contactGrid}>
          {/* LEFT: Contact Info */}
          <div className={styles.contactInfo}>
            <h3>
              Contact <span className={styles.accentPurple}>Information</span>
            </h3>

            <a href="tel:+919812409496" className={styles.infoBox}>
              <div className={styles.iconBox}>
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+91 9812409496</p>
              </div>
            </a>

            <a href="mailto:namdevabhi025@gmail.com" className={styles.infoBox}>
              <div className={styles.iconBox}>
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>namdevabhi025@gmail.com</p>
              </div>
            </a>

            <a
              href="https://maps.app.goo.gl/ESQmpcDhHhLcxawv7"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoBox}
            >
              <div className={styles.iconBox}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>Naraingarh, India</p>
              </div>
            </a>

            <div className={styles.socials}>
              <a
                href="https://github.com/AbhiNamdev025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinamdev025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className={styles.contactFormWrap}>
            <h3>
              Send Me a <span className={styles.accentPurple}>Message</span>
            </h3>

            <form onSubmit={handleSubmit} className={styles.form}>
              <label>
                Your Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Your Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </label>

              <label>
                Your Message
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Abhishek, I'd like to talk about..."
                  required
                />
              </label>

              <button type="submit" className={styles.btn} disabled={isSending}>
                {isSending ? (
                  <span className={styles.loader}></span>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2500} theme="dark" />
    </section>
  );
};

export default Contact;
