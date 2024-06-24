const { test, describe, expect, beforeEach } = require('@playwright/test')
const { loginWith, createBlog, uploadBlog } = require('./helper')

describe('Blog app', () => {
  beforeEach(async ({ page, request }) => {
    await request.post('http:localhost:3001/api/testing/reset')
    await request.post('http://localhost:3001/api/users', {
      data: {
        username: 'mluukkai',
        password: 'salainen'
      }
    })
    await page.goto('http://localhost:5173')
  })
    
  test('Login form is shown', async ({ page }) => {
    await page.goto('http://localhost:5173')
  })

  test('user can log in', async ({ page }) => {
    await loginWith(page, 'mluukkai', 'salainen')    
    await expect(page.getByText('mluukkai logged in')).toBeVisible()
  })

  test('login fails with wrong password', async ({ page }) => {
    await loginWith(page, 'mluukkai', 'wrong')

    const errorDiv = await page.locator('.error')
    await expect(errorDiv).toContainText('wrong username or password')
    await expect(errorDiv).toHaveCSS('border-style', 'solid')
    await expect(errorDiv).toHaveCSS('color', 'rgb(0, 0, 0)')
    await expect(page.getByText('mluukkai logged in')).not.toBeVisible()
  })  

  describe('When logged in', () => {
    beforeEach(async ({ page }) => {
      await loginWith(page, 'mluukkai', 'salainen')
    })

    test('a new blog can be created', async ({ page }) => {
      await createBlog(page, 'a new blog', 'salainen', 'www.salainen.com')
      await expect(page.getByText('a new blog a new blog by salainen added')).toBeVisible()
    })
    
    describe('and a blog exists', () => {
      beforeEach(async ({ page }) => {
        await createBlog(page, 'first blog', 'salainen', 'firstblog.com')
        await createBlog(page, 'second blog', 'salainen', 'secondtblog.com')
        await createBlog(page, 'third blog', 'salainen', 'thirdblog.com')
      })
    })

    test('a blog can be edited', async ({ page }) => {
      await page.pause()
      const otherBlogText = await page.getByText('second blog')
      const otherBlogElement = await otherBlogText.locator('..')
    
      await otherBlogElement.getByRole('button', { name: 'like' }).click()
      await expect(otherBlogElement.getByText('')).toBeVisible()
      })

    test('a user who created a blog can delete it', async ({ page }) => {
      await page.pause()
      const otherBlogText = await page.getByText('second blog')
      const otherBlogElement = await otherBlogText.locator('..')
    
      await otherBlogElement.getByRole('button', { name: 'remove' }).click()
      await expect(otherBlogElement.getByText('')).toBeVisible()
      })
  })
})
