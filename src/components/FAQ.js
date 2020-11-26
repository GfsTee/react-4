import React, { Component } from 'react';

class FAQ extends Component {
    state = { radio: "0", select: "DE" }
    handleRadio = (e) => {
        this.setState({ radio: e.target.value });
    }
    handleSelect = (e) => {
        this.setState({ select: e.target.value });
    }
    render() {
        return (
            <div>
                <input type="radio" name="test" value="0" onChange={this.handleRadio} />
                <input type="radio" name="test" value="1" onChange={this.handleRadio} />
                <input type="radio" name="test" value="2" onChange={this.handleRadio} />
                <input type="radio" name="test" value="3" onChange={this.handleRadio} />
                <input type="radio" name="test" value="4" onChange={this.handleRadio} />
                <input type="radio" name="test" value="5" onChange={this.handleRadio} />
                <input type="radio" name="test" value="6" onChange={this.handleRadio} />
                {this.state.radio}
                <select onChange={this.handleSelect}>
                    <option value="DE">DE</option>
                    <option value="FR">FR</option>
                    <option value="EN">EN</option>
                    <option value="TR">TR</option>
                    <option value="PL">PL</option>
                    <option value="US">US</option>
                    <option value="JP">JP</option>
                </select>
                {this.state.select}
            </div>
        );
    }
}

export default FAQ;