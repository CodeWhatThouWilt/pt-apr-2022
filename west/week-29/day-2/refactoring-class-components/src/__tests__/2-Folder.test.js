import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Folder from '../components/Folder.js';

describe('Folder', ()=> {
  const folders = [
    { title: 'one', content: 'I am the first' },
    { title: 'two', content: 'Second folder here' },
    { title: 'three', content: 'Third folder here' }
  ];

  beforeEach(() => {
    render(<Folder folders={folders} />);
  })

  it('should show the Folder/Tabs Widget', () => {
    expect(screen.getByRole('heading', { name: /^Tabs/ })).toBeInTheDocument();
  })

  it('should switch to a folder when its tab is clicked', async () => {
    const tab2 = screen.getByText('two');
    userEvent.click(tab2);
    expect(await screen.findByText('Second folder here')).toBeInTheDocument();
    expect(screen.queryByText('I am the first')).not.toBeInTheDocument();
    expect(screen.queryByText('Third folder here')).not.toBeInTheDocument();
    
    const tab3 = screen.getByText('three');
    userEvent.click(tab3);
    await waitFor(() => expect(screen.queryByText('Second folder here')).not.toBeInTheDocument());
    expect(await screen.findByText('Third folder here')).toBeInTheDocument();
    expect(screen.queryByText('I am the first')).not.toBeInTheDocument();
  })
})
