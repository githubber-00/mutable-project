
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import BookContextProvider from './context/BookContext';

function App() {
    return (
        <div className="App">
            <AuthContextProvider>
                <ThemeContextProvider>
                    <Navbar />
                    <BookContextProvider>
                        <BookList />
                    </BookContextProvider>
                    <ThemeToggle />
                </ThemeContextProvider>
            </AuthContextProvider>
        </div>
    );
}

export default App;
