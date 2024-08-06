import React, { useEffect, useRef, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlidePic1 from './../images/desktop-image-hero-1.jpg'
import SlidePic2 from './../images/desktop-image-hero-2.jpg'
import SlidePic3 from './../images/desktop-image-hero-3.jpg'
import MobileSlidePic1 from './../images/mobile-image-hero-1.jpg'
import MobileSlidePic2 from './../images/mobile-image-hero-2.jpg'
import MobileSlidePic3 from './../images/mobile-image-hero-3.jpg'
import AngleLeft from './../images/icon-angle-left.svg'
import AngleRight from './../images/icon-angle-right.svg'
import SliderCard from "../components/SliderCard";

const Hero = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    let [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })

    useEffect(() => {
    function handleResize() {
        setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
        }) 
    }

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
    })

    const ref = useRef(null);

    const onPrevClick = () => {
        ref.current.prev();
      };
    const onNextClick = () => {
        ref.current.next();
    };

    return (    
        <Container fluid className="SliderContainer">
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} controls={false} ref={ref}>
                <Carousel.Item>
                    <Container fluid className="SliderItemContainer">
                        <Row>
                            <Col sm={6} md={7} lg={7} xxl={7} className='SlideImgCol'>
                                <img
                                className="w-100"
                                src={(window.innerWidth >= 426) ? SlidePic1 : MobileSlidePic1 }
                                alt="First slide"
                                />
                                <Container className="d-md-none d-lg-none CarouselButtonContainer" align="end">
                                    <button className='AngleLeft' onClick={onPrevClick}><img src={AngleLeft} alt={'angleToLeft'}></img></button>
                                    <button className='AngleRight' onClick={onNextClick}><img src={AngleRight} alt={'angleToRight'}></img></button>
                                </Container>
                            </Col>
                            <Col sm={6} md={5} lg={5} xxl={5} className='SlideTxtCol'>
                                <SliderCard heading={'Discover innovative ways to decorate'} text={"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."} />
                                <Container className="d-none d-md-block d-lg-block CarouselButtonContainer">
                                    <button className='AngleLeft' onClick={onPrevClick}><img src={AngleLeft} alt={'angleToLeft'}></img></button>
                                    <button className='AngleRight' onClick={onNextClick}><img src={AngleRight} alt={'angleToRight'}></img></button>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container fluid className="SliderItemContainer">
                        <Row>
                            <Col sm={6} md={7} lg={7} xxl={7} className='SlideImgCol'>        
                                <img 
                                    className="w-100"
                                    src={(window.innerWidth >= 426) ? SlidePic2 : MobileSlidePic2 }
                                    alt="Second slide"
                                />
                                <Container className="d-md-none d-lg-none CarouselButtonContainer" align="end">
                                    <button className='AngleLeft' onClick={onPrevClick}><img src={AngleLeft} alt={'angleToLeft'}></img></button>
                                    <button className='AngleRight' onClick={onNextClick}><img src={AngleRight} alt={'angleToRight'}></img></button>
                                </Container>
                            </Col>
                            <Col sm={6} md={5} lg={5} xxl={5} className='SlideTxtCol'>
                                <SliderCard heading={'We are available all across the globe'} text={"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we´re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."} />
                                <Container className="d-none d-md-block d-lg-block CarouselButtonContainer">
                                    <button className='AngleLeft' onClick={onPrevClick}><img src={AngleLeft} alt={'angleToLeft'}></img></button>
                                    <button className='AngleRight' onClick={onNextClick}><img src={AngleRight} alt={'angleToRight'}></img></button>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container fluid className="SliderItemContainer">
                        <Row>
                            <Col sm={6} md={7} lg={7} xxl={7} className='SlideImgCol'>
                                <img
                                className="w-100"
                                src={(window.innerWidth >= 426) ? SlidePic3 : MobileSlidePic3}
                                alt="Third slide"
                                />
                                <Container className="d-md-none d-lg-none CarouselButtonContainer" align="end">
                                    <button className='AngleLeft' onClick={onPrevClick}><img src={AngleLeft} alt={'angleToLeft'}></img></button>
                                    <button className='AngleRight' onClick={onNextClick}><img src={AngleRight} alt={'angleToRight'}></img></button>
                                </Container>
                            </Col>
                            <Col sm={6} md={5} lg={5} xxl={5} className='SlideTxtCol'>
                                <SliderCard heading={'Manufactured with the best materials'} text={"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience, we understand what customers want."} />
                                <Container className="d-none d-md-block d-lg-block CarouselButtonContainer">
                                    <button className='AngleLeft' onClick={onPrevClick}><img src={AngleLeft} alt={'angleToLeft'}></img></button>
                                    <button className='AngleRight' onClick={onNextClick}><img src={AngleRight} alt={'angleToRight'}></img></button>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}
export default Hero