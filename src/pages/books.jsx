import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goBack, bookAcover, bookAcover2, bookAcover3, bookAcover4, bookA1, bookA2, bookA3, bookA4, bookA5, bookA6, bookA7, bookA8, bookA9, bookA10, bookA11, bookA12, bookA13, bookA14, bookA15, bookA16, bookA17, bookA18, bookA19, bookBcover, bookBcover2, bookBcover3, bookBcover4, bookB1, bookB2, bookB3, bookB4, bookB5, bookB6, bookB7, bookB8, bookB9, bookB10, bookB11, bookB12, bookB13, bookB14, bookB15, bookB16, bookB17, bookB18, bookB19, bookB20, bookB21, bookB22, bookCcover, bookCcover2, bookCcover3, bookCcover4, bookC1, bookC2, bookC3, bookC4, bookC5, bookC6, bookC7, bookC8, bookC9, bookC10, bookC11, bookC12, bookC13, bookC14, bookC15, bookC16, bookC17, bookC18, bookC19, bookC20, bookC21, bookC22 } from "../assets/images";
import "../App.modules.css";

const Books = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { category } = location.state || {};

    const pagesData = {
        bookA: [
            { frontImage: bookAcover, backImage: bookAcover2 },
            { frontImage: bookAcover3, backImage: bookAcover4 },
            { frontImage: bookA1, backImage: bookA2 },
            { frontImage: bookA3, backImage: bookA4 },
            { frontImage: bookA5, backImage: bookA6 },
            { frontImage: bookA7, backImage: bookA8 },
            { frontImage: bookA9, backImage: bookA10 },
            { frontImage: bookA11, backImage: bookA12 },
            { frontImage: bookA13, backImage: bookA14 },
            { frontImage: bookA15, backImage: bookA16 },
            { frontImage: bookA17, backImage: bookA18 },
        ],
        bookB: [
            { frontImage: bookBcover, backImage: bookBcover2 },
            { frontImage: bookBcover3, backImage: bookBcover4 },
            { frontImage: bookB1, backImage: bookB2 },
            { frontImage: bookB3, backImage: bookB4 },
            { frontImage: bookB5, backImage: bookB6 },
            { frontImage: bookB7, backImage: bookB8 },
            { frontImage: bookB9, backImage: bookB10 },
            { frontImage: bookB11, backImage: bookB12 },
            { frontImage: bookB13, backImage: bookB14 },
            { frontImage: bookB15, backImage: bookB16 },
            { frontImage: bookB17, backImage: bookB18 },
            { frontImage: bookB19, backImage: bookB20 },
            { frontImage: bookB21, backImage: bookB22 },
        ],
        bookC: [
            { frontImage: bookCcover, backImage: bookCcover2 },
            { frontImage: bookCcover3, backImage: bookCcover4 },
            { frontImage: bookC1, backImage: bookC2 },
            { frontImage: bookC3, backImage: bookC4 },
            { frontImage: bookC5, backImage: bookC6 },
            { frontImage: bookC7, backImage: bookC8 },
            { frontImage: bookC9, backImage: bookC10 },
            { frontImage: bookC11, backImage: bookC12 },
            { frontImage: bookC13, backImage: bookC14 },
            { frontImage: bookC15, backImage: bookC16 },
            { frontImage: bookC17, backImage: bookC18 },
            { frontImage: bookC19, backImage: bookC20 },
            { frontImage: bookC21, backImage: bookC22 },
        ],
    };

    const bookPages = pagesData[category] || [];
    const [page, setPage] = useState(0);
    const [zIndexes, setZIndexes] = useState(
        Array.from({ length: bookPages.length + 1 }, (_, i) => bookPages.length - i)
    );

    useEffect(() => {
        const updatedZIndexes = Array.from({ length: bookPages.length + 1 }, (_, i) =>
            i < page ? 0 : bookPages.length - i + page
        );
        const timer = setTimeout(() => {
            setZIndexes(updatedZIndexes);
        }, 225);
        return () => clearTimeout(timer);
    }, [page, bookPages.length]);

    const handleNext = () => {
        if (page < bookPages.length) setPage(page + 1);
    };

    const handlePrev = () => {
        if (page > 0) setPage(page - 1);
    };

    return (
        <div className="container">
            <button className="image-buttonGoBack goBack" onClick={() => navigate(-1)}>
                <img src={goBack} alt="Go Back" className="goBack-image" />
            </button>
            <div className="book">
                {bookPages.map((pageContent, index) => (
                    <div
                        key={index}
                        className={`page page${index + 1} ${page >= index + 1 ? "flipped" : ""}`}
                        style={{ zIndex: zIndexes[index] }}
                    >
                        <div className="front-page">
                            {pageContent.frontImage?.endsWith(".mp4") ? (
                                <video controls className="front-page">
                                    <source src={pageContent.frontImage} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img src={pageContent.frontImage} alt={`Page ${index}`} />
                            )}
                        </div>
                        {pageContent.backImage?.endsWith(".mp4") ? (
                            <video controls className="back-page">
                                <source src={pageContent.backImage} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <div className="back-page">
                                <img src={pageContent.backImage} alt={`Page ${index}`} />
                            </div>
                        )}
                    </div>
                ))}
                <div
                    className="back-cover"
                    style={{ zIndex: zIndexes[bookPages.length] }}>
                </div>
            </div>
            <div className="controls">
                <button onClick={handlePrev} disabled={page === 0} className="bookButton">
                    🢀
                </button>
                <button onClick={handleNext} disabled={page === bookPages.length} className="bookButton">
                    🢂
                </button>
            </div>
        </div>
    );
};

export default Books;