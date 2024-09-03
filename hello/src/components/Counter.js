import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0
         
      }
    }
    Increment(){
        // this.setState({
        //     count:this.state.count+1
        // },
        // ()=>{console.log('callback', this.state.count)})
        // console.log(this.state)

        this.setState((prevState)=>({
            count:prevState.count+1
        }))
            
        console.log(this.state.count)
    }

    IncrementFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }
    
  render() {
    return (
      <div>
        <h1>Count-{this.state.count}</h1>
        <button onClick={()=> this.IncrementFive()}>Increment</button>
      </div>
    )
  }
}
export default Counter
