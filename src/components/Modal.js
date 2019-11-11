
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
            // put focus on the close button
            this.closeButton.focus();
        });
        // locks the scrolling when the modal is active
        this.toggleScrollLock();
    };

    closeModal = () => {
        this.setState({
            isShown: false
        });
        // put focus on the trigger button
        this.triggerButton.focus();
        // unlocks the scrolling when the modal is no longer active
        this.toggleScrollLock();
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

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    render() {
        return (
            <React.Fragment>
                <ModalTrigger
                    triggerText={this.props.modalProps.triggerText}
                    showModal={this.showModal}
                    buttonRef={n => (this.triggerButton = n)}
                />
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
