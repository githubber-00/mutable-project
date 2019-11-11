
import React from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';

export class ModalContent extends React.Component {
    render() {
        return ReactDOM.createPortal(
            <FocusTrap>
                <aside className='modal-cover' aria-modal='true' tabIndex='-1' role='dialog' onKeyDown={this.props.onKeyDown} onClick={this.props.onClickOutside}>
                    <div className='modal-area' ref={this.props.modalRef}>
                        <button className='_modal-close' ref={this.props.buttonRef} onClick={this.props.closeModal} aria-label='Close Modal' aria-labelledby='close-modal'>
                            <span id='close-modal' className='_hide-visual'>Close</span>
                            <svg className="_modal-close-icon" viewBox="0 0 40 40">
                                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                            </svg>
                        </button>
                        <div className='modal-body'>
                            {this.props.content}
                        </div>
                    </div>
                </aside>
            </FocusTrap>,
        document.body);
    }
}

export default ModalContent;
