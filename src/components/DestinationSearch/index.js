import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {userText: ''}

  userSearchText = event => {
    this.setState({userText: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {userText} = this.state
    console.log(userText)
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(userText.toLowerCase()),
    )
    console.log(searchResults)
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            placeholder="search"
            value={userText}
            onChange={this.userSearchText}
          />
          <img
            alt="search icon"
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
          />
        </div>
        <ul className="list-items">
          {searchResults.map(eachItem => (
            <DestinationItem key={eachItem.id} eachItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
