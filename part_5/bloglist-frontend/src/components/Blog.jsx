import { useState } from "react"
import blogService from '../services/blogs'
const Blog = ({ blog  }) => {
	const [detailsVisible, setDetailsVisible] = useState(false)
	
	const blogStyle = {
		paddingTop: 10,
		paddingLeft: 2,
		border: 'solid',
		borderWidth: 1,
		marginBottom: 5
	}

	const urlStyle = {
		color: 'blue',
	}

	const removeStyle = {
		backgroundColor: 'blue'
	}

	const handleLike = async () => {
		const changedBlog = { ...blog, likes: blog.likes + 1 };

		blogService
			.update(blog, changedBlog)
		}

	const handleDeleteClick = () => {
		if (window.confirm(`Remove blog '${blog.title}' by '${blog.author}'`)) {
			blogService
				.remove(blog.id);
		}
	};

	return (
		<div style={blogStyle}>
			<div>
				{blog.title} 
				<button onClick={() => setDetailsVisible(!detailsVisible)}>
					{detailsVisible ? 'hide' : 'view'}
				</button>
			</div>
			{detailsVisible && (
			<div>
				<p style={urlStyle}>{blog.url}</p>
				<p>likes {blog.likes}
				<button onClick={handleLike}>like</button></p>
				<p>{blog.author}</p>
				{blog.user && blog.user.username === blog.user.username && (
					<button style={removeStyle} onClick={handleDeleteClick}>remove</button>
				)}
			</div>
		)}
	</div>
)}

export default Blog