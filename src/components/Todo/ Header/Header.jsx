import React from "react";
import {Link, useLocation} from 'react-router-dom';

const Header = () => {
    const pathname = useLocation().pathname

    return <div>
        {pathname === "/" ? <div>Sarching</div> : <Link to="/">Назад</Link>}
    </div>
}

export default Header;