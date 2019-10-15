import React, { useState, useEffect} from 'react'
import { Link} from 'react-router-dom'

export default function Edit() {
    const [ First, setFirst ] = useState('Evan')
    const [ Last, setLast ] = useState('Allen')
    const [ Email, setEmail ] = useState('evanallen13@gmail.com')
    const [ Phone, setPhone ] = useState('(714)264-2562')

    return (
        <div>
            <Link to="/">Home</Link>
            <form >
                <input onChange={(e) => setFirst(e.target.value)} value={First} type='text'></input>
                <input onChange={(e) => setLast(e.target.value)} value={Last} type='text' ></input>
                <input onChange={(e) => setEmail(e.target.value)} value={Email} type='tel'></input>
                <input onChange={(e) => setPhone(e.target.value)} value={Phone} type="email"></input>
            </form>
        </div>
    )
}
