import Carousel from "./widgets/Carousel";
import ResponsiveColumns from "./widgets/ResponsiveColumns";

export default function AsadorDePaco() {
    const images = ["https://img.restaurantguru.com/cf1c-Paco-Vejer-de-la-Frontera-photo.jpg?@m@t@s@d", "https://img.restaurantguru.com/rd0d-meals-Paco-2022-10-6.jpg", "https://img.restaurantguru.com/r54f-PACO-meals-2022-09-2.jpg"]
    const text = ["Paco - The owner", "Chicken with croquettas", "Pork medallions"]

    const col1 = [(
        <div className="surface" key={0}>
            <p className="card-title">Facebook Followers</p>
            <p className="card-content">1.1k+</p>
        </div>
        ),
        (
        <div className="surface" key={1}>
            <p className="card-title">Food Rating</p>
            <p className="card-content" style={{paddingBottom: "10px"}}>5/5</p>
            <div style={{fontSize: "30px", paddingLeft: "20px", paddingBottom: "10px"}}>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
            </div>
            <p className="card-title" style={{paddingTop: "0px"}}>According to Google</p>
        </div>
        )];
    
    const col2 = [(
        <div className="surface" key={2}>
            <p className="card-title">Food Rating</p>
            <p className="card-content" style={{paddingBottom: "10px"}}>5/5</p>
            <div style={{fontSize: "30px", paddingLeft: "20px", paddingBottom: "10px"}}>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
            </div>
            <p className="card-title" style={{paddingTop: "0px"}}>Rated by me</p>
        </div>
        ),
        (
        <div className="surface" key={3}>
            <p className="card-title">Unbiased review</p>
            <button className="card-button" onClick={() => window.open('https://es.restaurantguru.com/Asador-y-Freiduria-Paco-Spain','_blank')}>Click here</button>
        </div>
        )];
    
    const col3 = [(
        <div className="surface" key={4}>
            <p className="card-title">Facebook</p>
            <button className="card-button" onClick={() => window.open('https://m.facebook.com/p/Asador-y-Freidur%C3%ADa-Paco-100063722343177/','_blank')}>Click here</button>
        </div>
        ),
        (
        <div className="surface" key={5}>
            <p className="card-title">Instagram</p>
            <button className="card-button" onClick={() => window.open('https://www.instagram.com/asadoryfreiduriapaco_vejer/?hl=en','_blank')}>Click here</button>
        </div>
        )];

    const col4 = [(
        <div className="surface" key={6}>
            <p className="card-title">Phone Number</p>
            <p className="card-content" style={{fontSize: "32px"}}>+34 956450013</p>
        </div>
        ),
        (
        <div className="surface" key={7}>
            <p className="card-title">Address</p>
            <p className="card-content" style={{fontSize: "34px"}}>C. Barbate, 18, 11150 Vejer de la Frontera, Cádiz, Spain</p>
        </div>
        )];

    return (
        <>
            <br/>
            <h1 style={{padding: "5px"}}>Asador de Paco</h1>
            <div className="surface">
                <Carousel imageURLs={images} text={text} />
            </div>
            <ResponsiveColumns col1={col1} col2={col2} col3={col3} col4={col4} />
        </>
    );
};