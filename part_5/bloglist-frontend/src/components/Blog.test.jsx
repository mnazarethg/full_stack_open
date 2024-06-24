import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Blog from './Blog';

test('renders content', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'true'
  }

  render(<Blog blog={blog} />)

  const element = screen.getByText('Component testing is done with react-testing-library')
  expect(element).toBeDefined()
})

test('clicking the button calls event handler once', async () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'true',
  }

  const mockHandler = vi.fn()

  render(
    <Blog blog={blog} handleLike={mockHandler} />
  )

  const user = userEvent.setup()
  const viewButton = screen.getByText('view');
  await user.click(viewButton);

  expect(mockHandler).toHaveBeenCalledTimes(0);
});

test('clicking the like button twice calls event handler twice', async () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'true',
    likes: 0 
  }

  const mockHandler = vi.fn()

  render(
    <Blog blog={blog} handleLike={mockHandler} />
  )

  const user = userEvent.setup()
  const likeButton = screen.getByText('like');

  await user.click(likeButton);
  await user.click(likeButton);

  expect(mockHandler).toHaveBeenCalledTimes(2);
})