
import React from 'react';
import './App.css';

import Text from './components/Text';
import Modal from './components/Modal';

class App extends React.Component {
    modalProps = {
        triggerText: 'Launch the Modal!'
    };

    render() {
        return (
            <div className="App">
                <Text />
                <Modal modalProps={this.modalProps} />
                <Text />
                <Text />
            </div>
        );
    }
}

export default App;
