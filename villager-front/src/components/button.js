import React from 'react';

class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  incrementCount() {
    // this.setState({
    //   count: this.state.count + 1
    // })

    console.log('a')

    fetch('http://localhost:3000/islandsfdjklfdsjld')
      .then(resp => {
        if(resp.status !== 200) {
          throw new Error(resp.statusText)
        }
        console.log('b', resp)
        return resp.json()
      })
      .then(data => console.log('c', data))
      .catch(errors => console.log('d',errors)) 
    
 
    console.log('e')

    // a, e, d
  }

  render() {
    return (
      <>
      <button onClick={this.incrementCount.bind(this)}>{this.state.count}</button>
      </>
    )
  }
}

export default Button;