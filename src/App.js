
import React, {useState,useEffect} from 'react'
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
       
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>ERROR: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>LOADING...</div>;
    } else {
      return (

        <table class="rate-class">
          <tbody>
            <tr>
              <td class="table-title">Currency</td>
              <td class="table-title">Rate</td>
            </tr>
            <tr class="info">
              <td class="name">
              {items.map(item=> (
                <td key={item.id}>{item.txt}</td>
              ))}
              </td>
              <td class="rate">
              {items.map(item=> (
                <td key={item.id}>{item.rate}</td>
              ))}    
              </td>
              </tr>
          </tbody>
        </table>
        // <ul>
        //   {items.map(item => (
        //     <li key={item.id}>
        //       {item.txt} {item.rate}
        //     </li>
        //   ))}
        // </ul>
      );
    }
  }
}
export default App;




