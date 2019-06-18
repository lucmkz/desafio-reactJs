import React, { PureComponent }from 'react'
import StickersAvailableApp from './StickersAvailableApp'

class Stickers extends PureComponent {
    constructor(){
        super()
        this.state = {
            checkedReact: false,
            checkedVue: false,
            checkedAngular: false
        }

        this.handleClick = (e) => {
            e.target.id === "react" ? 
            this.setState({checkedReact: !this.state.checkedReact}) : 
            e.target.id === "vue" ? 
            this.setState({checkedVue: !this.state.checkedVue}) :
            this.setState({checkedAngular: !this.state.checkedAngular})
        }
    }

    render () {
        return (
            <StickersAvailableApp 
            checkedReact={this.state.checkedReact}
            checkedVue={this.state.checkedVue}
            checkedAngular={this.state.checkedAngular}
            handleClick = {this.handleClick}
            />
        )
    }
}

export default Stickers