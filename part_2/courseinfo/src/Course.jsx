
const Courses = ({ courses }) => 
  <>
    {courses.map(course => (
      <div key={course.id}>
        <h2>{course.name}</h2>
        <Part parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    ))}
  </>

const Part = ({ parts }) => 
  <>
    {parts.map(part => (
      <p key={part.id}>{part.name} {part.exercises}</p>
    ))}
  </>
  
const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);

  return (
    <div>
      <strong>total of exercises {total}</strong>
    </div>
  )
}

export default Courses