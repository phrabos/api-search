import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSerach from './NewsSearch';

describe('NewsSearch Container', () => {
  it('displays a list of news articles', async () => {
    render(<NewsSerach />);
    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).not.toBeEmptyDOMElement();

    const input = await screen.findByPlaceholderText('Search');
    userEvent.type(input, 'Twitter');

    const submitButton = await screen.findByRole('button', {
      name: 'fetch-articles', 
    });
    userEvent.click(submitButton);

    return waitFor(() => {
      const articles = screen.getAllByTestId('article-li');
      expect(articles).toHaveLength(5);
    });
  });
});
