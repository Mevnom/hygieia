import React, { useEffect, useRef, useState } from "react";
import "./HealthFacts.css";
import rundeux from "./assets/rundeux.jpeg";
import weightuno from './assets/weightuno.jpeg';
import pulluno from './assets/pulluno.jpeg';
import rununo from './assets/rundeux.jpeg';
import vitamind from './assets/vitamind.jpeg';
import sleepuno from './assets/sleepuno.jpeg';
import mentalhealth from './assets/mentalhealth.jpeg';
import dbuno from './assets/dbuno.jpeg';
import dehydration from './assets/dehydration.jpeg';
import gutuno from './assets/weightuno.jpeg';
import aes from './assets/aes.jpeg';
import waterdeux from './assets/waterdeux.jpeg';


const healthFacts = [
    {
        title: "1. Running daily boosts heart and brain health.",
        description:
            "Running just 5 – 10 minutes a day at a moderate pace reduces your risk of heart disease and early death.",
        image: rundeux,
    },
    {
        title: "2. Mild Dehydration Affects Performance.",
        description:
            "Even 1-2% dehydration can impair focus and cause headaches. Make sure to stay hydrated always.",
        image: waterdeux,
    },
    {
        title: "3. Sleep Deprivation Shrinks Your Brain.",
        description:
            "Getting less than 6 hours of sleep daily can literally reduce brain volume, impair memory, and increase dementia risk.",
        image: sleepuno,
    },
    {
        title: "4. Regular workouts improve mood and longevity.",
        description:
            "Exercising consistently triggers the release of endorphins, and enhances overall wellbeing. It also lowers the risk of chronic diseases.",
        image: weightuno,
    },
    {
        title: "5. Vitamin D Deficiency is Widespread.",
        description:
            "40–80% of people are vitamin D deficient. It affects the bones, immunity, and hormones. Get sunlight or take a supplement after testing.",
        image: vitamind,
    },
    {
        title: "6. Diabetes Starts Years Before Diagnosis.",
        description:
            "Insulin resistance begins years before diagnosis. Early lifestyle changes can reverse insulin resistance completely.",
        image: dbuno,
    },
    {
        title: "7. Mental Health is Rooted in  the Health of the Body.",
        description:
            "Anxiety, depression, and brain fog often stem from poor sleep, blood sugar imbalances, and inflammation. Treat the root causes.",
        image: mentalhealth,
    },
    {
        title: "8. Get Healthy Today.",
        description: "",
        image: pulluno,
    },

];

const HealthFactsSlideshow = () => {
    const containerRef = useRef(null);
    const progressBarRef = useRef(null);
    const touchStartX = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            scrollToIndex((currentIndex + 1) % healthFacts.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, isHovered]);

    useEffect(() => {
        if (progressBarRef.current) {
            progressBarRef.current.classList.remove("active-progress");
            void progressBarRef.current.offsetWidth; // Trigger reflow
            progressBarRef.current.classList.add("active-progress");
        }
    }, [currentIndex]);

    const scrollToIndex = (index) => {
        if (containerRef.current) {
            const container = containerRef.current;
            const slideWidth = container.offsetWidth;
            container.scrollTo({
                left: index * slideWidth,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + healthFacts.length) % healthFacts.length;
        scrollToIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % healthFacts.length;
        scrollToIndex(newIndex);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (!touchStartX.current) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (diff > 50) nextSlide();
        else if (diff < -50) prevSlide();

        touchStartX.current = null;
    };

    return (
        <div>
            <div
                className="slideshow-wrapper"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
            >
                <button className="nav-button left" onClick={prevSlide}>&#10094;</button>
                <div
                    className="slideshow-container"
                    ref={containerRef}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {healthFacts.map((fact, index) => (
                        <div
                            key={index}
                            className="slide"
                            style={{ backgroundImage: `url(${fact.image})` }}
                        >
                            <div className="overlay">
                                <h2 className="slide-title">{fact.title}</h2>
                                <p className="slide-description">{fact.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="nav-button right" onClick={nextSlide}>&#10095;</button>
                <div className="dot-container">
                    {healthFacts.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? "active" : ""}`}
                            onClick={() => scrollToIndex(index)}
                        ></span>
                    ))}
                </div>
                <div className="progress-bar" ref={progressBarRef}></div>

            </div>
            {/* <div className="ctafacts"><button>Explore &nbsp; <i class="fa-solid fa-arrow-right"></i></button></div> */}
        </div>
    );
};

export default HealthFactsSlideshow;
