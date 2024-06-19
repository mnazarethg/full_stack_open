import { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')   
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const blogFormRef = useRef()

  const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes);

  useEffect(() => {    
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')    
    if (loggedUserJSON) {      
      const user = JSON.parse(loggedUserJSON)      
      setUser(user)      
      blogService.setToken(user.token)    
    }  
  }, [])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const handleLogin = async (event) => {    
    event.preventDefault()

    try {      
      const user = await loginService.login({        
        username, password,      
      })
      window.localStorage.setItem(        
        'loggedBlogappUser', JSON.stringify(user)      
      ) 
      blogService.setToken(user.token)  
      setUser(user)
      setUsername('')      
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const addBlog = (blogObject) => {
    blogFormRef.current.toggleVisibility()
    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
      })
      setErrorMessage(
        `a new blog '${blogObject.title}' by '${blogObject.author}' added`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }

  const handleLogout = async () => {    
    window.localStorage.clear()
  }

  if (user === null) {
    return (
      <div>
        <h2>Login</h2>
        <Notification message={errorMessage} />
        <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={errorMessage} />
      {!user && LoginForm()}
      {user && <div>
      <p>{user.username} logged in</p>
      <button type="submit" onClick={handleLogout}>logout</button> 
      <Togglable buttonLabel='new blog' ref={blogFormRef}>
        <BlogForm
          createBlog={addBlog}
        />
      </Togglable>
      </div>
     } 
      {sortedBlogs.map(blog =>
        <Blog key={blog.id} blog={blog} user={user}/>
      )}
    </div>
  )
}

export default App