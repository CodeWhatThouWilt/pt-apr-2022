import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App.js';

describe('App', ()=> {
  beforeEach(() => {
    render(<App />);
  })

  it('should show the Clock Widget', () => {
    expect(screen.getByRole('heading', {name: /^Clock/})).toBeInTheDocument();
  })

  it('should show a button to toggle the Clock', () => {
    expect(screen.getByRole('button', {name: 'Toggle Clock'})).toBeInTheDocument();
  })

  it('should show the Autocomplete Widget', () => {
    expect(screen.getByRole('heading', {name: 'Autocomplete'})).toBeInTheDocument();
  })

  it('should show the Folder/Tabs Widget', () => {
    expect(screen.getByRole('heading', {name: 'Tabs'})).toBeInTheDocument();
  })

  it('should show the Weather Widget', () => {
    expect(screen.getByRole('heading', {name: 'Weather'})).toBeInTheDocument();
  })

  it('should toggle the Clock Widget when the "Toggle Clock" button is pushed', async () => {
    const toggleClockButton = screen.getByRole('button', {name: 'Toggle Clock'});
    userEvent.click(toggleClockButton);
    await waitFor(() => expect(screen.queryByRole('heading', {name: /^Clock/})).not.toBeInTheDocument());

    userEvent.click(toggleClockButton);
    expect(await screen.findByRole('heading', {name: /^Clock/})).toBeInTheDocument();
  })
})
