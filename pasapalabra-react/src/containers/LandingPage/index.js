import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setPlayername }  from '../../actions'
import Header from '../Header'

function LandingPage() {
        const [playername, setPlayername] = useState('')
        const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div>
            <Header />
        </div>
    )
}

export default LandingPage