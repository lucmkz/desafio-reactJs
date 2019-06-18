import React, { PureComponent } from 'react'
import FormApp from './Form'

class Form extends PureComponent {
    constructor() {
        super()
        this.state = {
            value: '',
            className: 'disableSend',
            sucess: false
        }

        this.handleChange = (e) => {
            this.setState({value: e.target.value})
            e.target.value !== "" ? this.setState({ className: "enableSend" }) :
                this.setState({ className: "disableSend" })
        }

        this.handleClick = (e) => {
            e.preventDefault()
            if (this.state.value !== ""){
                this.setState({sucess : true})
                setTimeout(() => {
                    this.setState({sucess : false})
                  }, 2000);
            }
        }
    }

    render() {
        return (
            <FormApp
                value={this.state.value}
                handleChange={this.handleChange}
                className={this.state.className}
                handleClick={this.handleClick}
                sucess={this.state.sucess}
            />
        )
    }
}


export default Form