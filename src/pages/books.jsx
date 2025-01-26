import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goBack } from "../assets/images";
import "../App.modules.css";

const Books = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { category } = location.state || {};

    const handleGoBack = () => {
        navigate(-1);
    };

    const pages = [
        { frontContent: "Cover Page", frontImage: "0.jpg", backContent: "Page 1", backImage: "1.jpg" },
        { frontContent: "Page 2", frontImage: "2.jpg", backContent: "Page 3", backImage: "3.jpg" },
        { frontContent: "Page 4", frontImage: "4.jpg", backContent: "Page 5", backImage: "5.jpg" },
        { frontContent: "Page 6", frontImage: "6.jpg", backContent: "Back Cover", backImage: "back.jpg" },
    ];

    const [page, setPage] = useState(0);
    const [zIndexes, setZIndexes] = useState(
        Array.from({ length: pages.length + 1 }, (_, i) => pages.length - i)
    );

    useEffect(() => {
        const updatedZIndexes = Array.from({ length: pages.length + 1 }, (_, i) =>
            i < page ? 0 : pages.length - i + page
        );
        const timer = setTimeout(() => {
            setZIndexes(updatedZIndexes);
        }, 225);
        return () => clearTimeout(timer);
    }, [page, pages.length]);

    const handleNext = () => {
        if (page < pages.length) setPage(page + 1);
    };

    const handlePrev = () => {
        if (page > 0) setPage(page - 1);
    };

    return (
        <div className="container">
            <button className="image-button goBack" onClick={handleGoBack}>
                <img src={goBack} alt="Go Back" className="goBack-image" />
            </button>
            <div className="book">
                {pages.map((pageContent, index) => (
                    <div
                        key={index}
                        className={`page page${index + 1} ${page >= index + 1 ? "flipped" : ""}`}
                        style={{ zIndex: zIndexes[index] }}
                    >
                        <div className="front-page">
                            <h2>-------------------{pageContent.frontContent}-------------------</h2>
                            <img src={pageContent.frontImage} alt={pageContent.frontContent} />
                        </div>
                        <div className="back-page">
                            <h2>-------------------{pageContent.backContent}-------------------</h2>
                            <img src={pageContent.backImage} alt={pageContent.backContent} />
                        </div>
                    </div>
                ))}
                <div
                    className="back-cover"
                    style={{ zIndex: zIndexes[pages.length] }}>
                </div>
            </div>
            <div className="controls">
                <button onClick={handlePrev} disabled={page === 0} className="bookButton">
                    Previous
                </button>
                <button onClick={handleNext} disabled={page === pages.length} className="bookButton">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Books;