
import { useState } from 'react'
import Notification from './Notification'

const BlogForm = ({ createBlog, errorMessage, setErrorMessage }) => {

	const [blogs, setBlogs] = useState([])
	const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })

	const addBlog = (event) => {
		event.preventDefault()
		const blogObject = {
			title: newBlog.title,
			author: newBlog.author,
			url: newBlog.url
		}

		blogService
			.createBlog(blogObject)
				.then(returnedBlog => {
				setBlogs(blogs.concat(returnedBlog))
				setNewBlog({ title: '', author: '', url: '' })
				setErrorMessage(
					`a new blog '${blogObject.title}' by '${blogObject.author}'`
				)
				setTimeout(() => {
					setErrorMessage(null)
				}, 5000)
			})
	}

	const handleBlogChange = (event) => {
		const { name, value } = event.target
		setNewBlog(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	const handleLogout = async () => {    
    window.localStorage.clear()
  }

	return (
		<div>
			<h2>blogs</h2>
			<Notification message={errorMessage} />
			<p> logged-in</p>
			<button type="submit" onClick={handleLogout}>logout</button> 
			<h2>create new</h2>
			<form onSubmit={addBlog}>
				<div>
					title: 
						<input
						name="title" 
						value={newBlog.title}
						onChange={handleBlogChange}
					/>
				</div>
				<div>
					author: 
						<input
							name="author" 
							value={newBlog.author}
							onChange={handleBlogChange}
						/>
				</div>
				<div>
					url: 
						<input
						name="url" 
						value={newBlog.url}
						onChange={handleBlogChange}
					/>
				</div>
				<div>
				<button type="submit">create</button>
				</div>
			</form>
			
		</div>
	)
}

export default BlogForm