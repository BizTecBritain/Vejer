import Carousel from "./widgets/Carousel";
import ResponsiveColumns from "./widgets/ResponsiveColumns";

export default function Beaches() {
    const images = ["https://static.wixstatic.com/media/29b35b_16095b41b1f64e2883eb7c37202d7334~mv2.jpg/v1/crop/x_56,y_0,w_1167,h_1059/fill/w_804,h_729,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/BY%20SEA%20Kite%20Surfing.jpg", "https://static.wixstatic.com/media/29b35b_73f5a80ab1f7455d958343a6f15ef9c7~mv2.jpeg/v1/crop/x_190,y_185,w_991,h_847/fill/w_804,h_690,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Palmar%20surf%20School.jpeg", "https://static.wixstatic.com/media/29b35b_6343b03dd02d4cba80363dcd843bff72~mv2.jpg/v1/crop/x_263,y_33,w_403,h_344/fill/w_561,h_482,al_c,lg_1,q_80,enc_auto/Zahora%20Spain%202.jpg", "https://static.wixstatic.com/media/29b35b_11ae2c4aced742dba34a9fae1ebe43cd~mv2.jpg/v1/crop/x_225,y_0,w_1598,h_1366/fill/w_804,h_690,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Huerto%20beach%20restaurant%202.jpg", "https://static.wixstatic.com/media/29b35b_82c2c83553f845f0b1caf453f04b940f~mv2.jpeg/v1/crop/x_71,y_0,w_936,h_800/fill/w_804,h_690,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%20Zahara%20de%20los%20Atunes%205.jpeg", "https://static.wixstatic.com/media/29b35b_9de7991dd3dd46c0929f7e9d7573d30c~mv2.jpeg/v1/crop/x_101,y_0,w_547,h_468/fill/w_654,h_562,al_c,lg_1,q_85,enc_auto/bolonia-beach.jpeg"]
    const text = ["Los Caños de Meca is known for kite-surfing", "El Palmar de Vejer is a quiet beach for surfers", "Zahora is surrounded by forests - an unspoiled spot of nature", "Conil de la Frontera is also a town with amazing tapas bars", "Zahara de los Atunes is over 6km long so it is rarely busy", "Bolonia has Spains largest sand dune and is next to some must-see Roman ruins"]

    const col1 = [(
        <div className="surface" key={0}>
            <p className="card-title">Los Caños de Meca (15 minutes)</p>
            <p className="card-content" style={{fontSize: "32px"}}>Beside the lighthouse of Trafalgar (and facing the spot of Nelson's famous victory), Los Caños de Meca is famed for its kitesurfing. Surrounded by forested hills, it also offers great walks. After you've spent some time relaxing on its wide golden sands, we'd suggest you sit in the shade of Bar Ohana's grass umbrellas, sipping drinks, eating great, inexpensive seafood and watching a blaze of colour fill the sky as kitesurfers skim the water and perform amazing acrobatics.</p>
        </div>
        ),
        (
        <div className="surface" key={1}>
            <p className="card-title">El Palmar de Vejer (15 minutes)</p>
            <p className="card-content" style={{fontSize: "32px"}}>There are no large hotels in El Palmar. Instead, you'll find miles of soft, golden beaches, a relaxed vibe, and low-key, friendly restaurants and bars. Spend your day surfing or learning to surf at one of the many shore-front surf schools facing the beach. Stay for sundowners and enjoy live music and DJs at many of the bars in the summer months.</p>
        </div>
        )];
    
    const col2 = [(
        <div className="surface" key={2}>
            <p className="card-title">Zahora (15 minutes)</p>
            <p className="card-content" style={{fontSize: "32px"}}>This is an unspoilt beach at the edge of the Parque Natural del Acantilado surrounded by forests. Zahora beach is well known for its great bars and restaurants, often offering live music in the summer evenings. This is a great spot to spend the day. And when the sun begins to set, experience the famous phenomenon, the Rayo Verde (green flash) lighting up the sky.</p>
        </div>
        ),
        (
        <div className="surface" key={3}>
            <p className="card-title">Conil de la Frontera (20 minutes)</p>
            <p className="card-content" style={{fontSize: "32px"}}>A small yet lively beach town. In summer, Conil's seafront is lined with 'pop up' tapas bars and restaurants called 'Chiringuitos' which are built on the sand and are well worth a visit. The beaches are wide and go on forever and you can spend the day relaxing in the sun, or for a change of scene, you can walk into the old town.</p>
        </div>
        )];
    
    const col3 = [(
        <div className="surface" key={4}>
            <p className="card-title">Zahara de los Atunes (30 minutes)</p>
            <p className="card-content" style={{fontSize: "32px"}}>Because of its sheer size of this blue flag beach, Zahara de los Atunes is never over-crowded, even during summer. Stretching more than six kilometres, and backed by low cliffs it is perfect for families. A popular spot for swimming and snorkelling, windsurfing and sailing, there are natural pools to explore, a fort and a sunken wreck visible at low tide. Famous for their tuna,  bars and restaurants line the beach </p>
        </div>
        )];

    const col4 = [(
        <div className="surface" key={5}>
            <p className="card-title">Bolonia (45 minutes)</p>
            <p className="card-content" style={{fontSize: "32px"}}>A stunning beach on the edge of El Estrecho natural park overlooking the 'Gran Duna', Spain's largest sand dune, which if you are feeling brave, you can surf down from. The beach is not developed except for a couple of pop-up restaurants during the summer. What makes Bolonia extra special is the Baelo Claudia archaeological site, a must-see, beautifully preserved Roman town, only a three-minute drive away.</p>
        </div>
        )];

    return (
        <>
            <br/>
            <h1 style={{padding: "5px"}}>Beaches</h1>
            <div className="surface">
                <Carousel imageURLs={images} text={text} />
            </div>
            <ResponsiveColumns col1={col1} col2={col2} col3={col3} col4={col4} maxTwo={true} />

            <button className="link-button" style={{marginLeft: "15px", marginTop: "10px"}} onClick={() => window.open('https://www.vejercasas.com/beaches','_blank')}>Thanks to Vejer Casas for Pictures and Info</button>
        </>
    );
};