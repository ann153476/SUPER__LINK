import { Component } from 'react';

import { nanoid } from 'nanoid';

import InForm from './InForm/InForm.jsx';
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
        <h1>dfghjgbeouhruhvwrougoiuhgurghrghk</h1>
        <InForm onSubmit={this.addUrl}></InForm>
        <Out urls={visibleUrls} />
      </>
    );
  }
}

export default App;
