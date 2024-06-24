const loginWith = async (page, username, password)  => {
  await page.getByTestId('username').fill(username)
  await page.getByTestId('password').fill(password)
  await page.getByRole('button', { name: 'login' }).click()
}

const createBlog = async (page, content) => {
  await page.getByRole('button', { name: 'new blog' }).click()
  const textboxes = await page.getByRole('textbox').all()  
  await textboxes[0].fill('a new blog')    
  await textboxes[1].fill('salainen')
  await textboxes[2].fill('www.salainen.com')
  await page.getByRole('button', { name: 'create' }).click()
  await page.getByText(content).waitFor()
}

const uploadBlog = async (page, content) => {
  await page.getByRole('button', { name: 'view' }).click()
  const textboxes = await page.getByRole('textbox').all()  
  await textboxes[0].fill('a new blog')    
  await textboxes[1].fill('salainen')
  await textboxes[2].fill('www.salainen.com')
  await page.getByRole('button', { name: 'create' }).click()
  await page.getByText(content).waitFor()
}

export { loginWith, createBlog, uploadBlog }