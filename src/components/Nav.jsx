import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Nav.css'

export default function Nav() {
    return (
        <div className="Nav">
            <Link to={'/'}><h1 className="returnHome">&#60;Contact</h1></Link>
        </div>
    )
}
