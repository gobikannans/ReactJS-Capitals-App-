import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capital extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onSelectCapital = event => {
    this.setState({capitalId: event.target.value})
  }

  matchCountry = () => {
    const {capitalId} = this.state
    const countryText = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === capitalId,
    )
    return countryText.country
  }

  capitalList = countryDetails => {
    const capitalName = countryDetails.id
    const capitalText = countryDetails.capitalDisplayText

    return (
      <option key={capitalName} value={capitalName}>
        {capitalText}
      </option>
    )
  }

  render() {
    const {capitalId} = this.state

    const sameCountry = this.matchCountry(capitalId)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="card">
            <h1 className="heading">Countries and Capitals</h1>
            <div className="select-container">
              <select
                className="select-box"
                onChange={this.onSelectCapital}
                value={capitalId}
              >
                {countryAndCapitalsList.map(eachCountry =>
                  this.capitalList(eachCountry),
                )}
              </select>
              <p>is capital of which country?</p>
            </div>
            <h1 className="country-name">{sameCountry}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Capital
