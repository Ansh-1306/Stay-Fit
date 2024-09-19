import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Protected(props) {
    const { Component } = props
    const navigate = useNavigate() 
    useEffect(() => {
        let login = localStorage.getItem("user")
        if(!login){
            navigate("/login")
        }
    })

  return (
    <div>
        <Component />
    </div>
  )
}

export default Protected