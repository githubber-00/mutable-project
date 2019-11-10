
import React from 'react';
import './App.css';

import Text from './components/Text';
import Modal from './components/Modal';

class App extends React.Component {
    modalProps = {
        triggerText: 'Launch the Modal!'
    };

    modalContent = (
        <React.Fragment>
            <p>Hello From passed modalContent from App!</p>
        </React.Fragment>
    );

    render() {
        return (
            <div className="App">
                <Text />
                <Modal modalProps={this.modalProps} modalContent={this.modalContent} />
                <Text />
                <Text />
            </div>
        );
    }
}

export default App;
