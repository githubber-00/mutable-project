
import React from 'react';

export class ModalTrigger extends React.Component {
    render() {
        return (
            <button className='modal-button' onClick={this.props.showModal}>
                {this.props.triggerText}
            </button>
        );
    }
}

export default ModalTrigger;
