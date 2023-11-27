import Carousel from "./widgets/Carousel";
import ResponsiveColumns from "./widgets/ResponsiveColumns";

export default function Location() {
    const images = ["https://www.andalucia.com/image/maps/town/vejer.gif", "https://upload.wikimedia.org/wikipedia/commons/5/56/Map_of_Vejer_de_la_Frontera_%28C%C3%A1diz%29.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Vejer_de_la_Frontera_Spain_%282nd_Coat_of_Arms_Variant%29.svg/1280px-Flag_of_Vejer_de_la_Frontera_Spain_%282nd_Coat_of_Arms_Variant%29.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Coat_of_Arms_of_Vejer_de_la_Frontera.svg/800px-Coat_of_Arms_of_Vejer_de_la_Frontera.svg.png"]
    const text = ["Vejer de la Frontera location with respect to Andalusia", "Location of Vejer de la Frontera", "Flag of Vejer de la Frontera", "Seal of Vejer de la Frontera"]

    const col1 = [(
        <div className="surface">
            <p className="card-title">Area (Kilometers)</p>
            <p className="card-content">58 km<sup>2</sup></p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Area (Miles)</p>
            <p className="card-content">22 sq miles</p>
        </div>
        )];
    
    const col2 = [(
        <div className="surface">
            <p className="card-title">Population</p>
            <p className="card-content" style={{paddingBottom: "5px"}}>12,739</p>
            <p className="card-title" style={{paddingTop: "0px"}}>In 2018</p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Pop. Density</p>
            <p className="card-content" style={{paddingBottom: "5px"}}>220/km<sup>2</sup></p>
            <p className="card-title" style={{paddingTop: "0px"}}>In 2018</p>
        </div>
        )];
    
    const col3 = [(
        <div className="surface">
            <p className="card-title">Demonym</p>
            <p className="card-content" style={{fontSize: "32px"}}>Vejeriegos/ Vejeriegas</p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Time Zone</p>
            <p className="card-content" style={{fontSize: "32px"}}>UTC+1 (CET)<br/>UTC+2 (CEST)</p>
        </div>
        )];

    const col4 = [(
        <div className="surface">
            <p className="card-title">Co-ordinates</p>
            <p className="card-content" style={{fontSize: "32px"}}>36°15′N 5°58′W</p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Official language</p>
            <p className="card-content">Spanish</p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Postal Code</p>
            <p className="card-content">11150</p>
        </div>
        )];

    return (
        <>
            <br/>
            <h1 style={{padding: "5px"}}>Location</h1>
            <div className="surface">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12869.995890689064!2d-5.975810939133074!3d36.25166315853399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c45c91240e403%3A0xc7939fe29cb2a440!2s11150%20Vejer%20de%20la%20Frontera%2C%20C%C3%A1diz%2C%20Spain!5e0!3m2!1sen!2suk!4v1701100627788!5m2!1sen!2suk" width="100%" height="450" style={{border: 0, padding: "10px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="surface">
                <Carousel imageURLs={images} text={text} />
            </div>
            <ResponsiveColumns col1={col1} col2={col2} col3={col3} col4={col4} />
        </>
    );
};