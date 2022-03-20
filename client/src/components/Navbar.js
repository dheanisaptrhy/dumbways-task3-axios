import logo from '../mockup/Icon2.png'
import photoProfile from '../mockup/tyun.png'
import navbarCss from './Navbar.module.css'
import { Link } from 'react-router-dom'
import iconProfile from '../mockup/user1.svg'
import iconSubscribe from '../mockup/bill1.svg'
import iconLogout from '../mockup/logout1.svg'

function Navbar() {
    // const { isSubscribe } = props
    const { main,
        logoDiv,
        imageLogo,
        imageDiv,
        imageProfile,
        contentDiv,
        contentName,
        contentP,
        contentPS,
        divMenu,
        textMenu,
        iconMenu } = navbarCss
    return (
        <>
            <div className={main}>
                <div>
                    <Link to="/home">
                        <div className={logoDiv}>
                            <img src={logo} className={imageLogo} />
                        </div>
                    </Link>
                    <div className={imageDiv}>
                        <img src={photoProfile} className={imageProfile} />
                    </div>
                    <div className={contentDiv}>
                        <p className={contentName}>Denis Putra</p>
                        <p className={contentP}>Not Subscribed Yet</p>
{/* 
                        {isSubscribe ?
                            (<p className={contentPS}>Subscribed</p>) :
                            (<p className={contentP}>Not Subscribed Yet</p>)} */}

                    </div>
                    <hr />
                    <div className={divMenu}>
                        <Link to="/profile">
                            <object data={iconProfile} className={iconMenu}></object>
                            <span className={textMenu}>Profile</span>
                        </Link>
                    </div>
                    <div className={divMenu}>
                        <Link to="/subscribe">
                            <object data={iconSubscribe} className={iconMenu}></object>
                            <span className={textMenu}>Subscribed</span>
                        </Link>
                    </div>
                    <hr />
                    <div className={divMenu}>
                        <Link to="/">
                            <object data={iconLogout} className={iconMenu}></object>
                            <span className={textMenu}>Logout</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
