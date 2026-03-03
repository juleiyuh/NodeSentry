// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeSentry title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeSentry/i);
    expect(titleElement).toBeInTheDocument();
});
