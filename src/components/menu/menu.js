import './menu-styles.css'
import {Outlet, Link} from "react-router-dom";
import {useEffect} from "react";

let menuLinks = document.getElementsByClassName('menuLinks')
const iconList=['logo-instagram','logo-pinterest',"logo-facebook","logo-linkedin","logo-twitter"]


function Menu({page, setPage}) {
    function setColorMenu() {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].style.color = 'white';
            menuLinks[i].style.fontWeight = '500';
        }
        menuLinks[page].style.color = 'var(--main-color)';
        menuLinks[page].style.fontWeight = '700';
    }

    useEffect(() => {
        setColorMenu()
    }, [page])
    return (
        <>
            <div className={'main'}>

                <div id={'menuPart'} >
                    <h2 className={'menu__title'}>
                        GO TO FRONT END</h2>
                    <ul style={{listStyleType: 'none'}}>

                        <li className={'menuItems'}>
                            <Link className={'menuLinks link'} to='/'>HOME</Link></li>
                        <li className={'menuItems '}>
                            <Link className={'menuLinks link'} to='/team'>OUR TEAM</Link></li>
                        <li className={'menuItems '}>
                            <Link className={'menuLinks link'} to={'/contact-us'}>CONTACT US</Link></li>
                    </ul>
                    <div className={'icon'}>
                        {iconList.map(icon=><ion-icon className={'menuItems'} name={icon}></ion-icon>)}
                    </div>
                </div>
                <div id={'outletPart'}>
                    <Outlet/>
                </div>
            </div>
        </>

    )

}

export default Menu