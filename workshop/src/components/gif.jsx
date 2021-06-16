// emmet rcc - command to generate class template

import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  handleClick = () => {
    const { id, changeSelectedGif } = this.props;
    changeSelectedGif(id);
  }

  render() {
    const { id } = this.props;
    const url = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <div>
        <img src={url} alt="gif" className="gif" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Gif;
