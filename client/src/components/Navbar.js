import logo from '../mockup/Icon2.png'
import photoProfile from '../mockup/tyun.png'
import navbarCss from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import iconProfile from '../mockup/user1.svg'
import iconSubscribe from '../mockup/bill1.svg'
import iconLogout from '../mockup/logout1.svg'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext'
import { Button } from 'react-bootstrap'
import { API } from '../config/api'

function Navbar(subscribe) {
    // const { isSubscribe } = props
    const navigate = useNavigate()
    const [state, dispatch] = useContext(UserContext)
    const [profile, setProfile] = useState([])
    const [status, setStatus] = useState(null)

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

    const logout = () => {
        console.log(state);
        dispatch({
            type: "LOGOUT",
        });
        navigate("/");
    };
    
    const bong = () => {
        // getUserNav(state.user.id)
        console.log(state.user.id);
        console.log(subscribe);
        console.log(subscribe?.transaction?.length);
    }

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
                        <p className={contentName}>{state.user.fullname}</p>
                        {/* <p className={contentP}>Not Subscribed Yet</p> */}

                        {subscribe.transaction?.length !== 0 ? (
                            subscribe.transaction?.userStatus !==0 && subscribe.transaction?.userStatus!==0 ? 
                            (<p className={contentP}>Not Subscribed Yet</p>) : (
                                <p className={contentPS}>Subscribed</p>)
                        ) : (
                        <p className={contentP}>Not Subscribed Yet</p>
                        )}

                    </div>
                    <hr />
                    <div className={divMenu}>
                        <Button onClick={() => navigate('/profile')}
                            style={{ border: "none", backgroundColor: "transparent", padding: 0 }}>
                            <object data={iconProfile} className={iconMenu}></object>
                            <span className={textMenu}>Profile</span>
                        </Button>
                    </div>
                    <div className={divMenu}>
                        <Button onClick={() => navigate('/subscribe')}
                            style={{ border: "none", backgroundColor: "transparent", padding: 0 }}>
                            <object data={iconSubscribe} className={iconMenu}></object>
                            <span className={textMenu}>Subscribed</span>
                        </Button>
                    </div>
                    <hr />
                    <div className={divMenu}>
                        <Button onClick={logout} style={{ border: "none", backgroundColor: "transparent", padding: 0 }}>
                            <object data={iconLogout} className={iconMenu}></object>
                            <span className={textMenu}>Logout</span>
                        </Button>
                        <Button onClick={bong}>
                            meong
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
