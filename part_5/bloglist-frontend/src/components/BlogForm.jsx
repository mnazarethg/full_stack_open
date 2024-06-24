import { useState } from "react"

const BlogForm = ({ createBlog }) => {
	const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })

	const addBlog = (event) => {
		event.preventDefault()
		createBlog({
			title: newBlog.title,
			author: newBlog.author,
			url: newBlog.url
		})

		setNewBlog({ title: '', author: '', url: '' })
  }

	const handleBlogChange = (event) => {
		const { name, value } = event.target
		setNewBlog(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={addBlog}>
				<div>
					title: 
						<input
						placeholder="Inser the title"
						name="title" 
						value={newBlog.title}
						onChange={handleBlogChange}
					/>
				</div>
				<div>
					author: 
						<input
							placeholder="Inser the author"
							name="author" 
							value={newBlog.author}
							onChange={handleBlogChange}
						/>
				</div>
				<div>
					url: 
						<input
						placeholder="Inser the url"
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