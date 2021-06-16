// emmet rcc - command to generate class template

import React, { Component } from 'react';
import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  render() {
    // const ids = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI"];
    const { ids } = this.props;

    return (
      <div className="gif-list">
        { ids.map((id) => <Gif id={id} key={id} />)}
      </div>
    );
  }
}

export default GifList;
