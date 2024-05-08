import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribed: false}

  onSubscribed = () => {
    this.setState(prevState => ({subscribed: !prevState.subscribed}))
  }

  onButtonText = () => {
    const {subscribed} = this.state

    return subscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.onButtonText()
    return (
      <div className="wel-container">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank You! Happy Learning</p>

        <div className="btn-container">
          <button className="sub-btn" type="button" onClick={this.onSubscribed}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
