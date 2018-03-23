import React, { Component } from 'react';

export default class SingleChoice extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, required, optionsList, message, showMessage, choice } = this.props;
    const property = label.toLowerCase().replace(' ', '-');
    return (
      <div>
        <label> {label}: </label>
        { required && <span> * </span> }
        <form>
          {
            optionsList.map((option, index) => {
              return (
                <div key={index}>
                  {
                    index === choice ? <input
                      type='radio'
                      name={property}
                      value={option}
                      checked
                      onChange={(e) => this.props.onChange(e.target.value)} />
                    : <input
                      type='radio'
                      name={property}
                      value={option}
                      onChange={(e) => this.props.onChange(e.target.value)} />
                  }
                  <label>
                    {option} 
                  </label>
                </div>
              )
            })
          }
        </form>
        <div></div>
        { showMessage && message && <span> {message} </span> }
      </div>
    )
  }
}