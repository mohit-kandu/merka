import "./Slides.css"
import bitcoinImg from "../../assets/bitcoin.png"
import packageImg from "../../assets/package.png"

const Slides = () => {
    return (
        <>
            <div className="d-flex flex-column flex-lg-row justify-content-between">
                <div className="hero-left">
                    <h1>MERKLABS BLOCKCHAIN DEVELOPMENT AND  <div className='package_box'>
                        <img src={packageImg} alt="boxImg" />
                    </div> SECURITY SOLUTIONS</h1>
                    <p className="py-3">We provide blockchain development services and also assure you comprehensive security in blockchain development</p>
                    <div className="explore-btn">Explore More</div>
                </div>
                <div className="hero-right">
                    <img src={bitcoinImg} alt="hero_image" />
                </div>
            </div>
        </>
    )
}

export default Slides