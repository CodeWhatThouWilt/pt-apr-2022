import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Autocomplete from '../components/Autocomplete.js';

describe('Folder', ()=> {
  const names = [
    'Abba',
    'Barbara',
    'Brenda'
  ];
  
  beforeEach(() => {
    render(<Autocomplete names={names} />);
  })
  
  it('should show the Autocomplete Widget', () => {
    expect(screen.getByRole('heading', { name: /^Autocomplete/ })).toBeInTheDocument();
  })
  
  it('should show a dropdown list of potential names when user clicks in box', async () => {
    const entry = screen.getByRole('textbox');
    expect(screen.queryByText('Abba')).not.toBeInTheDocument();
    userEvent.click(entry);
    expect(await screen.findByText('Abba')).toBeInTheDocument();
    expect(await screen.findByText('Barbara')).toBeInTheDocument();
  })
  
  it('should eliminate names from dropdown as user types', async () => {
    const entry = screen.getByRole('textbox');
    userEvent.type(entry, 'B');
    await waitFor(() => expect(screen.queryByText('Abba')).not.toBeInTheDocument());
    expect(await screen.findByText('Barbara')).toBeInTheDocument();
    expect(await screen.findByText('Brenda')).toBeInTheDocument();
    userEvent.type(entry, 'a');
    expect(await screen.findByText('Barbara')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText('Brenda')).not.toBeInTheDocument());
  })

  it('should autocomplete when a user clicks on a suggested name', async () => {
    const entry = screen.getByRole('textbox');
    userEvent.type(entry, 'B');
    const brenda = await screen.findByText('Brenda');
    userEvent.click(brenda);
    expect(await screen.findByRole('textbox', 'Brenda')).toBeInTheDocument();
  })

  it('should close dropdown when a user clicks on a suggested name', async () => {
    const entry = screen.getByRole('textbox');
    userEvent.click(entry);
    const brenda = await screen.findByText('Brenda');
    userEvent.click(brenda);
    await waitFor(() => expect(brenda).not.toBeInTheDocument());
  })

  it('should close dropdown when a user clicks outside the entry box', async () => {
    const entry = screen.getByRole('textbox');
    userEvent.type(entry, 'B');
    const brenda = await screen.findByText('Brenda');
    userEvent.click(document.body);
    await waitFor(() => expect(brenda).not.toBeInTheDocument());
    expect(await screen.findByRole('textbox', 'B')).toBeInTheDocument();
  })
})
