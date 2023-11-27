import Carousel from "./widgets/Carousel";
import ResponsiveColumns from "./widgets/ResponsiveColumns";

export default function Home() {
    const images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Plaza_de_Espa%C3%B1a%2C_Vejer_de_la_Frontera%2C_C%C3%A1diz%2C_Espa%C3%B1a%2C_2015-12-09%2C_DD_03.JPG/1280px-Plaza_de_Espa%C3%B1a%2C_Vejer_de_la_Frontera%2C_C%C3%A1diz%2C_Espa%C3%B1a%2C_2015-12-09%2C_DD_03.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ayuntamiento_de_Vejer_%2832830690160%29.jpg/1280px-Ayuntamiento_de_Vejer_%2832830690160%29.jpg", "https://explorelatierra.com/wp-content/uploads/2020/05/Feature-image-Vejer-de-la-frontera-best-virws-Explore-la-Tierra-Cadiz-min-e1608645551118.jpg", "https://www.lajuderiadevejer.com/wp-content/uploads/2021/05/vejerjpg-1.jpg", "https://www.upo.es/patio-colorado/wp-content/uploads/2021/01/724082b0f9974a805072f66cb511f263.jpg", "https://static.wixstatic.com/media/29b35b_657aed781d124a7eb151dbf29d50bae2~mv2.jpg/v1/fill/w_672,h_504,al_c,lg_1,q_80,enc_auto/vejer-iglesia%20church.jpg"]
    const text = ["Main square in Vejer (Plaza España)", "Town Hall", "Drone shot of the town", "Old castle in the old town", "Statue and woman wearing the traditional dress called a Cobijada", "View of the front of the church"]

    const col1 = [(
        <div className="surface" key={0}>
            <p className="card-title">Official Website</p>
            <button className="card-button" onClick={() => window.open('http://www.vejerdelafrontera.es/','_blank')}>Click here</button>
        </div>
        ),
        (
        <div className="surface" key={1}>
            <p className="card-title">Vejer Rating</p>
            <p className="card-content" style={{paddingBottom: "10px"}}>4.5/5</p>
            <div style={{fontSize: "30px", paddingLeft: "20px", paddingBottom: "10px"}}>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star-half-o checked"></span>
            </div>
            <p className="card-title" style={{paddingTop: "0px"}}>According to TripAdvisor</p>
        </div>
        )];
    
    const col2 = [(
        <div className="surface" key={2}>
            <p className="card-title">Vejer Rating</p>
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
            <p className="card-title">Mayor</p>
            <p className="card-content" style={{fontSize: "40px"}}>José Ortíz Galván</p>
        </div>
        )];
    
    const col3 = [(
        <div className="surface" key={4}>
            <p className="card-title">Nickname</p>
            <p className="card-content" style={{fontSize: "40px"}}>The Olives' Town</p>
        </div>
        ),
        (
        <div className="surface" key={5}>
            <p className="card-title">Municipality</p>
            <p className="card-content">Cádiz</p>
        </div>
        )];

    const col4 = [(
        <div className="surface" key={6}>
            <p className="card-title">Italian Sister City</p>
            <button className="card-button" onClick={() => window.open('https://en.wikipedia.org/wiki/Ostuni','_blank')}>Ostuni</button>
        </div>
        ),
        (
        <div className="surface" key={7}>
            <p className="card-title">Morrocan Sister City</p>
            <button className="card-button" onClick={() => window.open('https://en.wikipedia.org/wiki/Chefchaouen','_blank')}>Chefchaouen</button>
        </div>
        ),
        (
        <div className="surface" key={8}>
            <p className="card-title">French Sister City</p>
            <button className="card-button" onClick={() => window.open('https://en.wikipedia.org/wiki/Amboise','_blank')}>Amboise</button>
        </div>
        )];

    return (
        <>
            <br/>
            <h1 style={{padding: "5px"}}>Welcome to Vejer</h1>
            <div className="surface">
                <Carousel imageURLs={images} text={text} />
            </div>
            <ResponsiveColumns col1={col1} col2={col2} col3={col3} col4={col4} />
        </>
    );
};