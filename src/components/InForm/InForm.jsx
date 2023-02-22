import React, { Component } from 'react';

class InForm extends Component {
  state = {
    name: '',
    url: '',
    img: '',
  };
  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    //console.log(e.target.value, 'onInputChange');
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(() => ({
      name: '',
      url: '',
      img: '',
    }));
    //console.log(this.state, 'inform');
  };

  render() {
    return (
      <>
        <div>
          <h1>FORM INPUT</h1>
          <form onSubmit={this.onFormSubmit}>
            <label>
              naaaaaaaaaaaaame
              <input
                value={this.state.name}
                onChange={this.onInputChange}
                type="text"
                name="name"
              ></input>
            </label>
            <label>
              uuuuuuuuuuuuuuuurl
              <input
                value={this.state.url}
                onChange={this.onInputChange}
                type="text"
                name="url"
              ></input>
            </label>
            <label>
              iiiiiiiiiiiiiiiiimg
              <input
                value={this.state.img}
                onChange={this.onInputChange}
                type="text"
                name="img"
              ></input>
            </label>

            <button type="submit">SAVE</button>
          </form>
        </div>
      </>
    );
  }
}

export default InForm;
