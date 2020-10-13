import React from 'react';
import './App.css';
// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import {Cards, Chart, CountryPicker} from './components'
import { fetchData} from './components/api'
import corona from './images/image.png'


class App extends React.Component {

  state = {
    data: {},
    country:''

  }
  async componentDidMount() {
    const fetcheddata = await fetchData();

    this.setState({ data:fetcheddata  });
  }
 handleCountryChange = async (country)=>{
  const fetcheddata = await fetchData(country);
  this.setState({ data:fetcheddata , country:country});
}

  render(){
    const {data, country}=this.state
  return (
    <div className="container">
      <img className="image" src={corona} alt="COVID-19"/>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country} />

    </div>
  );
}
}

export default App;
