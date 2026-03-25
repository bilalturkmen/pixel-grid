import { useState } from "react";
import { companyLogos, testimonials } from "../../data/testimonials";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Section from "../layout/Section";

export default function RecommendationsSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <Section id="recommendations" title="Client Feedback" secondary>
      <div className="testimonials-container">
        <Quote className="quote-icon" size={48} />

        <div className="testimonial-content">
          <p className="testimonial-text">"{testimonials[current].text}"</p>
          <div className="testimonial-author">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
            />
            <div>
              <h4>{testimonials[current].name}</h4>
              <span>{testimonials[current].role}</span>
            </div>
          </div>
        </div>

        <div className="slider-controls">
          <button onClick={prevSlide} aria-label="Previous">
            <ChevronLeft />
          </button>
          <div className="slider-dots">
            {testimonials.map((_, i) => (
              <span key={i} className={current === i ? "active" : ""} />
            ))}
          </div>
          <button onClick={nextSlide} aria-label="Next">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* --- LOGO CLOUD --- */}
      <div className="logo-cloud">
        <p className="logo-title">Trusted by industry leaders</p>
        <div className="logo-grid">
          {companyLogos.map((logo, i) => (
            <img
              key={i}
              src={logo.url}
              alt={logo.name}
              className="company-logo"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
