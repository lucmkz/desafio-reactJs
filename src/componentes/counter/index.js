import React, { PureComponent } from 'react'
import CounterContainer from './CounterContainer'
import { connect } from 'react-redux'

class Counter extends PureComponent {
    constructor(){
        super()
        this.state = {
            counter: 0
        }
        this.increment = () => {this.props.dispatch({type: 'INCREMENT'})}
        this.decrement = () => {this.props.dispatch({type: 'DECREMENT'})}
    }

    render () {
        return(
          <CounterContainer 
          counter={this.props.counter}
          increment={this.increment}
          decrement={this.decrement}
          />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps)(Counter)