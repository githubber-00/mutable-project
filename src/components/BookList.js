
import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

class BookList extends React.Component {
    static contextType = ThemeContext;

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>The way of kings</li>
                    <li style={{ background: theme.ui }}>The Name of the wind</li>
                    <li style={{ background: theme.ui }}>The final empire</li>
                </ul>
            </div>
        );
    }
}

export default BookList;
