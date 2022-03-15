import Slider from "react-slick";
import Slides from "../Slides/Slides";
import "./Hero.css"
import herowaves from "../../assets/HeroWaves.png"
import aave from "../../assets/aave.png"
import aragon from "../../assets/aragon.png"
import vantis from "../../assets/vantis.png"
import omisego from "../../assets/omisego.png"
import twitter from "../../assets/twitter.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // vertical: true
};

const Hero = () => {
    return (
        <div className="pt-4 mt-4 hero-container">
            <div className="container ">
                <Slider className="hero-slider" {...settings}>
                    <Slides />
                    <Slides />
                    <Slides />
                    <Slides />
                    <Slides />
                </Slider>
            </div>

            <div className='d-flex flex-column gap-4 social_icons'>
                <div>
                    <img src={facebook} alt="facebook" />
                </div>
                <div>
                    <img src={instagram} alt="instagram" />
                </div>
                <div>
                    <img src={twitter} alt="twitter" />
                </div>
                <div className="ms-3">
                    <hr width="3" size="145" style={{ color: "white" }} />
                </div>
            </div>

            <div className="hero-waves">
                <img src={herowaves} alt="hero-waves" />
            </div>
            <div className="companies">
                <h5>Trusted By Leading Dapp Teams and Enterprises</h5>
                <div className="d-flex mt-3 mt-md-0 gap-4 flex-wrap company-logos">
                    <div>
                        <img src={aave} alt="aave" />
                    </div>
                    <div>
                        <img src={aragon} alt="aragon" />

                    </div>
                    <div>
                        <img src={vantis} alt="vantis" />

                    </div>
                    <div>
                        <img src={omisego} alt="omisego" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero