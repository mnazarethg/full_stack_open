import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, vi } from 'vitest';
import BlogForm from './BlogForm';

test('creating a new blog calls event handler with correct details', async () => {
    const createBlog = vi.fn()
  
    render(
      <BlogForm createBlog={createBlog} />
    )
  
    const titleInput = screen.findAllByPlaceholderText("Inser the title")
    const authorInput = screen.findAllByPlaceholderText("Inser the author");
    const urlInput = screen.findAllByPlaceholderText("Inser the url");
    const createButton = screen.getByText('create');
  
    userEvent.type(titleInput, 'Test Blog Title');
    userEvent.type(authorInput, 'Test Author');
    userEvent.type(urlInput, 'https://testurl.com');
    userEvent.click(createButton);
  
    expect(createBlog).toHaveBeenCalledWith({
      title: 'Test Blog Title',
      author: 'Test Author',
      url: 'https://testurl.com'
    });
  })