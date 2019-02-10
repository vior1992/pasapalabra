import React, { Component } from 'react'
import Header from '../Header'
import Input from '../Input'
// import Button from '../Button'

class Landing extends Component {
    state = { playerName: '' } 

    render () {
        return (
            <div>
                <Header />
                <Input />
                {/* <Button /> */}
            </div>
        )
    }  
}

export default Landing