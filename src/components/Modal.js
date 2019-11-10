
import React from 'react';

import ModalTrigger from './ModalTrigger';
import ModalContent from './ModalContent';

export class Modal extends React.Component {
    state = {
        isShown: false
    };

    showModal = () => {
        this.setState({
            isShown: true
        });
    }

    closeModal = () => {
        this.setState({
            isShown: false
        });
    }

    render() {
        return (
            <React.Fragment>
                <ModalTrigger triggerText={this.props.modalProps.triggerText} showModal={this.showModal} />
                {this.state.isShown ? <ModalContent closeModal={this.closeModal} /> : null}
            </React.Fragment>
        );
    }
}

export default Modal;
