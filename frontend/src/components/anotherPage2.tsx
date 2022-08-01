import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const AnotherPage2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <a>
          <Link to="/anotherPage">Click here</Link>
        </a>
      </div>
    </>
  )
}

export default AnotherPage2