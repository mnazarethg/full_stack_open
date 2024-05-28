const Notification = ({ errorMessage, type }) => {
  const className = type === 'error' ? 'error' : 'error2';

  return (
    <div className={className}>
      {errorMessage}
    </div>
  )
}

export default Notification