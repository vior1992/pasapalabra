import React from 'react';
import { 
    HeaderLogo,
    HeaderPlayername,
    HeaderTitle
} from '../../components'

const Header = () => {
    return (
        <div>  
            <h1>HEADER</h1>
            <HeaderLogo/>
            <HeaderTitle/>
            <HeaderPlayername/>
        </div>
    )
}

export default Header