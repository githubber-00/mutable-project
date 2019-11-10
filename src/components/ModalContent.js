
import React from 'react';
import ReactDOM from 'react-dom';

export class ModalContent extends React.Component {
    render() {
        return ReactDOM.createPortal(
            <aside className='modal-cover'>
                <div className='modal-area'>
                    <button className='_modal-close' onClick={this.props.closeModal}>
                        <span id='close-modal' className='_hide-visual'>Close</span>
                        <svg className="_modal-close-icon" viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                        </svg>
                    </button>
                    <div className='modal-body'>The Actual Content in the Modal</div>
                </div>
            </aside>,
        document.body);
    }
}

export default ModalContent;
