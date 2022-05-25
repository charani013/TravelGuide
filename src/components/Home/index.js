import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ListTravel from '../ListTravel'
import './index.css'

class Home extends Component {
  state = {
    isLoading: false,
    travelList: [],
  }

  componentDidMount() {
    this.travelList()
  }

  travelList = async () => {
    this.setState({isLoading: true})
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(location => ({
        id: location.id,
        name: location.name,
        imageUrl: location.image_url,
        description: location.description,
      }))

      this.setState({
        travelList: updatedData,
        isLoading: false,
      })
    }
  }

  travelSuccess = () => {
    const {travelList} = this.state
    return (
      <ul className="travel-ul">
        {travelList.map(each => (
          <ListTravel travelItems={each} key={each.id} />
        ))}
      </ul>
    )
  }

  travelLoader = () => (
    <div testid="loader" className="travel-loader">
      <Loader type="TailSpin" color="#00BFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <h1 className="travel-heading">Travel Guide</h1>
        <div className="travel-container">
          {isLoading ? this.travelLoader() : this.travelSuccess()}
        </div>
      </div>
    )
  }
}

export default Home
