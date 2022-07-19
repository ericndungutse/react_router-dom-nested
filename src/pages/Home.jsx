import Card from "../components/Card.component"

const Home = () =>{
    return (
        <>
            <div className="intro">
                <div className="intro__text">
                    <h1>

                        <span className="top">
                        DECODED COMPUTER
                        </span>

                        <span className="bottom">
                            SOLUTIONS
                        </span>
                        
                         </h1>
                    <button className="btn">REQUEST SERVICE</button>
                </div>
                </div>

                <section className="services">
                    <h2 className="services__header">
                        Our Services
                    </h2>

                    <div className="services__cards">
                        <Card img="software.jpg" text="SOFTWARE INSTALLATION"/>
                        <Card img="hardware.jpg" text=" HARDWARE REPAIR"/>
                        <Card img="malware.jpg" text="VIRUS REMOVAL"/>
                    </div>
                </section>
        </>
    )
}

export default Home