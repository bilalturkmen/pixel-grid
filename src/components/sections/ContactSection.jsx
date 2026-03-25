import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Section from "../layout/Section";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your toast notification or logic here
  };

  return (
    <Section id="contact" title="Get in Touch">
      <div className="contact-layout">
        <div className="contact-info-column">
          <p className="contact-description">
            Have a project in mind? Looking to hire a developer? Or just want to
            say hi? Drop me a message and I'll get back to you within 24 hours.
          </p>
          <div className="social-links-grid">
            {["LinkedIn", "GitHub", "Twitter", "Dribbble"].map((platform) => (
              <a key={platform} href="#" className="social-link-item">
                <span>{platform}</span>
                <ArrowRight size={14} />
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label className={formData.name ? "active" : ""}>Full Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label className={formData.email ? "active" : ""}>
              Email Address
            </label>
          </div>

          <div className="input-group">
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label className={formData.message ? "active" : ""}>
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="btn-cv"
            style={{ width: "100%", border: "none", cursor: "pointer" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}
