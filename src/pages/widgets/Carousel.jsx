import { useState } from "react";

function Image({ url, number, text, total, displayStyle }) {
    return (
        <div className="mySlides fade" style={{display: displayStyle}}>
            <div className="numbertext">{number} / {total}</div>
            <img src={url} alt={text} style={{width: "100%"}} />
            <div className="text">{text}</div>
        </div>
    );
}

export default function Carousel({ imageURLs, text }) {
    const [slideIndex, setSlideIndex] = useState(1);
    
    if (slideIndex > imageURLs.length) {setSlideIndex(1);}    
    if (slideIndex < 1) {setSlideIndex(imageURLs.length);}

    const images = [];
    const dots = [];
    for (let i = 0; i < imageURLs.length; i++) {
        images.push(<Image url={imageURLs[i]} number={i + 1} text={text == null ? "" : text[i]} key={i} total={imageURLs.length} displayStyle={i == slideIndex - 1 ? "block" : "none"} />);
        dots.push(<span className={i == slideIndex - 1 ? "dot activeDot" : "dot"} onClick={() => setSlideIndex(i + 1)} key={i}></span>);
    }

    const dotDiv = imageURLs.length > 7 ? <></> : <><br/><div style={{textAlign: "center"}}>{dots}</div></>

    return (
        <>
            <div className="slideshow-container">
                {images}

                <a className="prev" onClick={() => setSlideIndex(slideIndex - 1)}>❮</a>
                <a className="next" onClick={() => setSlideIndex(slideIndex + 1)}>❯</a>
            </div>

            {dotDiv}
        </>
    );
}