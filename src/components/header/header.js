import './header-styles.css'
import {useEffect} from "react";

function Header({page, setPage}) {
    useEffect(() => {
        setPage(0)
    }, [])
    return (
        <div id={'header-image'}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid architecto culpa deserunt
                fuga inventore nisi quasi sequi veniam!</h3>
        </div>
    )
}

export default Header