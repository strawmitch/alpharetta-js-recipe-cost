import React from 'react';

class TextBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text
        };
        this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
    }

    handleTextBoxChange(e) {
        this.setState({
            text: e.target.value
        });
        this.props.onRecipeChange(e.target.value);
        console.log(e.target.value);
    }

    render() {
        const { text } = this.props;
        return (
            <input
                placeholder={this.props.placeholderTxt}
                onChange={this.handleTextBoxChange}
                value={this.state.text}
            />
        )
    }
}

export default TextBox;
