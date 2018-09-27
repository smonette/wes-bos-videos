import React from 'react';
import { render } from 'react-dom';

class Storepicker extends React.Component {
  render(){
    return (
        <form action="" className="store-selector">
          <h2>Please enter a store</h2>
          <input type="text" placeholder="Store name" />
          <input type="submit" placeholder="Visit store" />
        </form>
      )
  }
}
export default Storepicker;