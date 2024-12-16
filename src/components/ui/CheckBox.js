import React, { Component } from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
            showConfirmation: false
        };
    }

    handleChange(e) {
        const { checked } = e.target;
        console.log('checked: ', checked);
        this.setState({ showConfirmation: true, checked: false });
    }

    confirmChange() {
        this.props.onChange(true); 
        this.setState({ showConfirmation: false });
    }

    cancelChange() {
        this.setState({ showConfirmation: false, checked: this.props.checked });
    }

    render() {
        return (
            <div>
                <input
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChange.bind(this)}
                />
                {this.state.showConfirmation && (
                    <div className="confirmation-dialog">
                        <p>Are you sure you want to mark this task as completed?</p>
                        <button onClick={() => this.confirmChange()}>Confirm</button>
                        <button onClick={() => this.cancelChange()}>Cancel</button>
                    </div>
                )}
            </div>
        );
    }
}

export default CheckBox;
