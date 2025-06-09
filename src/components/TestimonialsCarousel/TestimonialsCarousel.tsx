import React, { useState } from 'react';
import './TestimonialsCarousel.css';

interface Testimonial {
    id: number;
    company: string;
    companyLogo: string;
    text: string;
    name: string;
    position: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        company: "Serene Living Products",
        companyLogo: "/logos/serene-living.jpg",
        text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
        name: "Ethan Morgan",
        position: "Founder and CEO, Serene Living Products",
        avatar: "/avatars/ethan-morgan.jpg"
    },
    {
        id: 2,
        company: "Starlight Creations",
        companyLogo: "/logos/starlight-creations.jpg",
        text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
        name: "Olivia Hayes",
        position: "Owner, Starlight Creations",
        avatar: "/avatars/olivia-hayes.jpg"
    },
    {
        id: 3,
        company: "Opulent Living Group",
        companyLogo: "/logos/opulent-living.jpg",
        text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
        name: "Alexander Reed",
        position: "Co-Founder, Opulent Living Group",
        avatar: "/avatars/alexander-reed.jpg"
    }
];

const TestimonialsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextTestimonial();
        }
        if (isRightSwipe) {
            prevTestimonial();
        }
    };

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
        }
        return visible;
    };

    return (
        <section className="testimonials-section">
            <div className="container">
                <h1 className="testimonials-title">
                    Voices of Success with Sales Fortuna
                </h1>

                <div className="testimonials-carousel">
                    <button
                        className="carousel-arrow carousel-arrow--left"
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <div
                        className="testimonials-wrapper"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="testimonials-track">
                            {getVisibleTestimonials().map((testimonial, index) => (
                                <div key={`${testimonial.id}-${currentIndex}-${index}`} className="testimonial-card">
                                    <div className="testimonial-header">
                                        <img
                                            src={testimonial.companyLogo}
                                            alt={`${testimonial.company} logo`}
                                            className="company-logo"
                                        />
                                    </div>

                                    <div className="testimonial-content">
                                        <blockquote className="testimonial-text">
                                            "{testimonial.text}"
                                        </blockquote>
                                    </div>

                                    <div className="testimonial-author">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="author-avatar"
                                        />
                                        <div className="author-info">
                                            <h3 className="author-name">{testimonial.name}</h3>
                                            <p className="author-position">{testimonial.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="carousel-arrow carousel-arrow--right"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                <div className="carousel-indicators">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;