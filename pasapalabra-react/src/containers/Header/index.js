import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setPlayername }  from '../../actions'
import { 
    HeaderLogo, 
    HeaderTitle, 
    HeaderPlayername
} from '../../components'

function Header() {
    const [playername, setPlayername] = useState('')
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <header>
            <form onSubmit={() => this.props.setPlayername(playername)}>
                <input
                    className="input-playername--header"
                    type="text"
                    name="playername"
                    placeholder="Introduce your playername"
                    onChange={e => setPlayername(e.target.value)}
                    value={playername}
                >
                </input>
            </form>
            <div>
                {playername && <button onClick={isPlaying ? setIsPlaying(true) : setIsPlaying(false)}>
                    Jugar
                </button>}
            </div>
            <HeaderLogo />
            <HeaderTitle />
            <HeaderPlayername />
        </header>
    )
}

// Header.propTypes = {
//     playerName: PropTypes.string.isRequired,
//     isPlaying: PropTypes.boolean.isRequired
//   }

export default Header