import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import tf1 from "../assets/img/tf1.png";
import keras from "../assets/img/keras.png";
import RStudio from "../assets/img/RStudio.png";
import PowerBI from "../assets/img/PowerBI.png";
import scikit from "../assets/img/scikit.png";
import np from "../assets/img/np.png";
import pandas from "../assets/img/pandas.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>This category showcases my ability to derive actionable insights from complex datasets. Through techniques such as data analysis, cleaning, preprocessing, and web scraping, I convert raw data into valuable information.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item skill-image-container">
                                    <img src={tf1} alt="TensorFlow" className="skill-image" />
                                </div>
                                <div className="item skill-image-container">
                                    <img src={keras} alt="Keras" className="skill-image" />
                                </div>
                                <div className="item skill-image-container">
                                    <img src={scikit} alt="scikit" className="skill-image" />
                                </div>
                                <div className="item skill-image-container">
                                    <img src={np} alt="np" className="skill-image" />
                                </div>
                                <div className="item skill-image-container">
                                    <img src={pandas} alt="pandas" className="skill-image" />
                                </div>
                                <div className="item skill-image-container">
                                    <img src={RStudio} alt="RStudio" className="skill-image" />
                                </div>
                                <div className="item skill-image-container">
                                    <img src={PowerBI} alt="PowerBI" className="skill-image" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
};

