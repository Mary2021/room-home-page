import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import logo from './../images/logo.svg'
import hb from './../images/icon-hamburger.svg'
import x from './../images/icon-close.svg'

const NavBar = () => {
    let [open, setOpen] = useState(false)
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

    document.className = open ? 'visible' : 'hidden';

    if (window.outerWidth >= 768) {
        return (
            <>
            <header className='Menu'>
                <img src={logo} alt='logo'className='Logo' />
                <a className='MenuLink'>Home</a>
                <a className='MenuLink'>Shop</a>
                <a className='MenuLink'>About</a>
                <a className='MenuLink'>Contact</a>
            </header>
            </>
        )
    } else {
        return(
            <>
            <header className='Menu'>
                <img src={hb} className="MenuIcon" alt="MenuIcon" onClick={() => setOpen(!open)}/>
                <img src={logo} alt='logo' className='Logo' />
                <div className={document.className}>
                    <Container>
                        <img src={x} className="CloseIcon" alt="CloseIcon" onClick={() => setOpen(!open)}/>
                        <div className='LinkContainer'>
                            <a className='MenuLink'>Home</a>
                            <a className='MenuLink'>Shop</a>
                            <a className='MenuLink'>About</a>
                            <a className='MenuLink'>Contact</a>
                        </div>
                    </Container>
                </div>
            </header>
            </>
        )
    }
}

export default NavBar