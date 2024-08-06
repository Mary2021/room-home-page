import IconArrow from './../images/icon-arrow.svg'

const SliderCard = ({ heading, text }) => {

        return (
            <div className='CardContainer'>
                <h1 className='HeroHeading'>{heading}</h1>
                <p className='SliderText'>{text}</p>
                <div className='LinkContainer'>
                    <a className='SliderLink'>Shop now</a>
                    <img src={IconArrow} alt={'arrowToRight'}></img>
                </div>
            </div>)
}

export default SliderCard