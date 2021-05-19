import React from 'react';
import { render, screen } from '@testing-library/react';
import VillagerContainer from './VillagerContainer';
import { MemoryRouter } from 'react-router-dom';

describe('ACContainer', () => {
  it.skip('renders page of a villager', async () => {
    render(prop =>
    <MemoryRouter>
      <VillagerContainer {...prop}/>
    </MemoryRouter>
    );

    const unorderedList = await screen.findByRole('list', { name: 'villagers' });
    expect(unorderedList).toMatchSnapshot();
  });
});