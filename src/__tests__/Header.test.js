import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/layout/Header/Header'

describe('Header component', () => {
    it('renders Header section without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
    });
});
