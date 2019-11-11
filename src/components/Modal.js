
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
        }, () => {
            this.closeButton.focus();
        });
    };

    closeModal = () => {
        this.setState({
            isShown: false
        });
    };

    onKeyDown = (event) => {
        // if the user presses 'Esc' button
        if (event.keyCode === 27) {
            this.closeModal();
        }
    };

    onClickOutside = (event) => {
        if (this.modal && this.modal.contains(event.target)) return;
        this.closeModal();
    };

    render() {
        return (
            <React.Fragment>
                <ModalTrigger triggerText={this.props.modalProps.triggerText} showModal={this.showModal} />
                {
                    this.state.isShown ? 
                        <ModalContent
                            closeModal={this.closeModal}
                            content={this.props.modalContent}
                            onKeyDown={this.onKeyDown}
                            onClickOutside={this.onClickOutside}
                            modalRef={n => (this.modal = n)}
                            buttonRef={n => (this.closeButton = n)}
                        />
                    : null
                }
            </React.Fragment>
        );
    }
}

export default Modal;
