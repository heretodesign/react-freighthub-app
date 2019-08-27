import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/layout/Footer/Footer.js'

describe('Footer component', () => {
    it('renders footer section without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
    });
});
