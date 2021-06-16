// emmet rcc - command to generate class template

import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" className="form-control form-search"/>
      </div>
    );
  }
}

export default SearchBar;
