import Carousel from "./widgets/Carousel";
import ResponsiveColumns from "./widgets/ResponsiveColumns";

export default function Festivals() {
    const images = ["https://i0.wp.com/explorelatierra.com/wp-content/uploads/2020/03/Easter-Vejer-de-la-Frontera-hermandad-April.jpg?w=1000&ssl=1", "https://i0.wp.com/explorelatierra.com/wp-content/uploads/2020/03/Toro-embolao-sunday-resurrection-in-Vejer-de-la-Frontera-Easter-1.jpg?w=1000&ssl=1", "https://i0.wp.com/explorelatierra.com/wp-content/uploads/2020/06/IMG_20190629_230813-min.jpg?resize=1024%2C768&ssl=1", "https://3.bp.blogspot.com/-5RXzPzq2Jgg/U4YkKjO671I/AAAAAAAABnE/MoOltGtwUkw/s1600/+%252815+of+46%2529.jpg"]
    const text = ["Easter Parade during Semana Santa (Holy Week)", "Bulls runing through the street during Toro Embolao, people attempt to dodge them", "The candles lined up around the main square during Noche de las velas", "One of the magnificent patios in Vejer de la Frontera"]

    const col1 = [(
        <div className="surface">
            <p className="card-title">Carnival in Vejer de la Frontera</p>
            <p className="card-content" style={{fontSize: "32px"}}>Carnival takes place at the beginning of March 4-13 March, depending on the year. It usually lasts from around 10 days to two weeks. Every evening and weekend you will find groups of people dressed up in the same costumes and singing. They do competitions, similar to the famous ones in Cadiz, but on a smaller scale. It is a very fun atmosphere.</p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Live Nativity</p>
            <p className="card-content" style={{fontSize: "32px"}}>More than 200 extras shape this living Bethlehem through the streets of the historic artistic center of Vejer, converted into Judea, among which are children, young people and monitors belonging to the Scout Group Eden 309, organizers of this event.</p>
        </div>
        )];
    
    const col2 = [(
        <div className="surface">
            <p className="card-title">Sunshine Tour - Equestrian Competition</p>
            <p className="card-content" style={{fontSize: "32px"}}>With a privileged location, just 5 km from the town of Vejer de la Frontera, the Dehesa Montenmedio becomes the ideal place for the celebration of this high-level sporting event, which attracts the most prestigious riders in the world and lovers of the horse world. It is an international equestrian competition in the discipline of show jumping, held every year during the winter months.</p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Toro Embolao</p>
            <p className="card-content" style={{fontSize: "32px"}}>On Easter Sunday (Sunday of Resurrection) the 17th of April. Instead of having an Easter procession they run with the bulls in Vejer de la Frontera. This year they will have 3 bulls, one in the morning and two in the afternoon running from side to side of a long Street (Av. San Miguel - Hotel Convento San Francisco). They let them free at 13:00, 16:00 and 17:00.</p>
        </div>
        )];
    
    const col3 = [(
        <div className="surface">
            <p className="card-title">Flower competitions in private houses</p>
            <p className="card-content" style={{fontSize: "32px"}}>With the aim of publicizing the beauty of the old courtyards, which in spring reach their maximum splendor, the Municipal Delegation of Culture organizes the "Week of the old patios" in which the Contest of Patios, Facades and Zaguanes is included</p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Easter (Semana Santa)</p>
            <p className="card-content" style={{fontSize: "32px"}}>Easter in Spain is one of the best experiences you will enjoy. It starts 40 days after Ash Wednesday, which is when Carnival finishes. The music, smell, costumes, and the figures covered in gold, silk and silver are outstanding. Even if you are not religious you will be thrilled to enjoy this celebration. There are so many events you should click below to see them all!</p>
            <button className="card-button" onClick={() => window.open('https://explorelatierra.com/en/2020/03/14/vejer-de-la-frontera-easter/','_blank')}>See more on Semana Santa</button>
        </div>
        )];

    const col4 = [(
        <div className="surface">
            <p className="card-title">Candle night in Vejer</p>
            <p className="card-content" style={{fontSize: "32px"}}>"Noche de las velas" in Spanish, this spectacle can get quite busy, and deservedly so. It usually happens in mid to end of June. All electrical lights are turned off and the streets are filled with over 10,000 candles! There is an easy path to follow to the "Plaza de España in Vejer" where there is a superb classical concert. It's truly a romantic evening!</p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Subida a Vejer</p>
            <p className="card-content" style={{fontSize: "32px"}}>Another well known event is the Subida a Vejer, an uphill rally car race up the curving roads to Vejer de la Frontera. It usually only lasts one weekend, around the beginning of October. You can follow the crowds to watch the race from a safe distance on the side of the road.</p>
        </div>
        )];
    
    const col5 = [(
        <div className="surface">
            <p className="card-title">Annual Revenue of Sunshine Tour</p>
            <p className="card-content">$6.7M</p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Sunshine Tour Tickets</p>
            <button className="card-button" onClick={() => window.open('https://www.sunshinetour.net/','_blank')}>Click Here</button>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Max gradient of Subida a Vejer</p>
            <p className="card-content">30.8%</p>
        </div>
        )];
    
    const col6 = [(
        <div className="surface">
            <p className="card-title">Total Bull Running Deaths in Spain</p>
            <p className="card-content" style={{paddingBottom: "5px"}}>16</p>
            <p className="card-title" style={{paddingTop: "0px"}}>Since 1910</p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Number of Candles on Noche de las velas</p>
            <p className="card-content">Over 10,000</p>
        </div>
        )];
    
    const col7 = [(
        <div className="surface">
            <p className="card-title">Car race number</p>
            <p className="card-content" style={{paddingBottom: "5px"}}>39</p>
            <p className="card-title" style={{paddingTop: "0px"}}>Stat from 2022</p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Number of parades during Semana Santa</p>
            <p className="card-content">7</p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Fastest time of Subida a Vejer</p>
            <p className="card-content" style={{paddingBottom: "5px"}}>7:21</p>
            <p className="card-title" style={{paddingTop: "0px"}}>According to Strava</p>
        </div>
        )];

    const col8 = [(
        <div className="surface">
            <p className="card-title">Number of brotherhoods in Semana Santa</p>
            <p className="card-content">3</p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Distance of Subida a Vejer</p>
            <p className="card-content">2.6km</p>
        </div>
        ),
        (
        <div className="surface">
            <p className="card-title">Fastest Woman's time of Subida a Vejer</p>
            <p className="card-content" style={{paddingBottom: "5px"}}>9:21</p>
            <p className="card-title" style={{paddingTop: "0px"}}>According to Strava</p>
        </div>
        )];

    return (
        <>
            <br/>
            <h1 style={{padding: "5px"}}>Festivals</h1>
            <div className="surface">
                <Carousel imageURLs={images} text={text} />
            </div>
            <ResponsiveColumns col1={col1} col2={col2} col3={col3} col4={col4} maxTwo={true} />

            <h2 style={{padding: "5px"}}>More stats</h2>

            <ResponsiveColumns col1={col5} col2={col6} col3={col7} col4={col8} />

            <button className="link-button" style={{marginLeft: "15px", marginTop: "10px"}} onClick={() => window.open('https://explorelatierra.com/en/2020/07/15/events-and-festivals-in-vejer-de-la-frontera/','_blank')}>Thanks to Explore La Tierra for Pictures and Info</button>
        </>
    );
};