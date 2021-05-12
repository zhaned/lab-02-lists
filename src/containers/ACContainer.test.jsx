import React from 'react';
import { render, screen } from '@testing-library/react';
import ACContainer from './ACContainer';

describe('ACContainer', () => {
  it('renders page of villagers', async () => {
    render(<ACContainer />);

    const unorderedList = await screen.findByRole('list', { name: 'villagers' });
    expect(unorderedList).toMatchSnapshot();
  });
});