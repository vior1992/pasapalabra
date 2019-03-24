import React from 'react';
import { 
    HeaderLogo,
    HeaderPlayername,
    HeaderTitle
} from '../../components'

const Header = () => {
    return (
        <div>  
            <HeaderLogo/>
            <HeaderTitle/>
            <HeaderPlayername/>
        </div>
    )
}

export default Header