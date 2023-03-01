import { Component } from 'react';

import { nanoid } from 'nanoid';

import Out from './Out/Out.jsx';
import Links from './Links.jsx';

class App extends Component {
  state = {
    urlState: Links,
  };
  addUrl = ({ name, url, img }) => {
    const oneUrl = {
      id: nanoid(),
      name: name,
      url: url,
      img: img,
    };
    this.setState(prevState => ({
      urlState: [...prevState.urlState, oneUrl],
    }));
  };
  getVisibleUrls = () => {
    return this.state.urlState;
  };
  render() {
    const visibleUrls = this.getVisibleUrls();
    return (
      <>
        <h1>SUPER LINK</h1>
        <Out />
      </>
    );
  }
}

export default App;
