import React from 'react';
import { render, screen } from '@testing-library/react';
import ACContainer from './ACContainer';
import { MemoryRouter } from 'react-router-dom';

describe('ACContainer', () => {
  it('renders page of villagers', async () => {
    render(
    <MemoryRouter>
      <ACContainer />
    </MemoryRouter>
    );

    const unorderedList = await screen.findByRole('list', { name: 'villagers' });
    expect(unorderedList).toMatchSnapshot();
  });
});