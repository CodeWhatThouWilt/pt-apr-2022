import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import Clock, { ClockToggle } from '../components/Clock.js';

describe('ClockToggle', () => {
  it('should display a "Toggle Clock" button', () => {
    render(<ClockToggle />);
    screen.getByRole('button', { name: 'Toggle Clock' });
  })

  it('should run its callback when clicked', async () => {
    const toggleClock = jest.fn();
    render(<ClockToggle toggleClock={toggleClock} />);
    const clockToggleButton = screen.getByRole('button', { name: 'Toggle Clock' });
    await userEvent.click(clockToggleButton);
    expect(toggleClock).toHaveBeenCalled();
  })
})

describe('Clock', ()=> {
  beforeEach(() => {
    jest.useFakeTimers();
    // Always set the test time to 10:15:20 on Tuesday, Feb 14, 2023
    jest.setSystemTime(new Date(2023, 1, 14, 10, 15, 20));
    render(<Clock />);
  })

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  })

  // Because these tests use `FakeTimers`, an `act()` warning will appear if the
  // tests do not use (and await) asynchronous methods (e.g., `findBy*`). This
  // ensures that the tests will not miss any updates that a user might see.
  it('should show the Clock Widget', async () => {
    expect(await screen.findByRole('heading', { name: /^Clock/ })).toBeInTheDocument();
  })

  it('should display the correct time', async () => {
    expect(await screen.findByText(/^10:15:20/)).toBeInTheDocument();
  })

  it('should display the correct date', async () => {
    expect(await screen.findByText(/^Tue Feb 14 2023/)).toBeInTheDocument();
  })
  
  it('should increment the seconds every second', async () => {
    expect(screen.getByText(/^10:15:20/)).toBeInTheDocument();
    act(() => jest.advanceTimersByTime(1000));
    expect(await screen.findByText(/^10:15:21/)).toBeInTheDocument();
  })
})