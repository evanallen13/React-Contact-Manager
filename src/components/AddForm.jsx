import React, { useState } from 'react'

export default function AddForm(props) {
    const [ First, setFirst ] = useState('')
    const [ Last, setLast ] = useState('')
    const [ Email, setEmail ] = useState('')
    const [ Phone, setPhone ] = useState('')
    const { FormSubmit } = props
    return (
        <form onSubmit={e =>{
            e.preventDefault()
            FormSubmit({
                variables : {
                    first : First,
                    last : Last,
                    email : Email,
                    phone : Phone
                }
            }).then(() => {
                setFirst('')
                setLast('')
            })
            }}>
            <input onChange={(e) => setFirst(e.target.value)} value={First} type='text' placeholder="First"></input>
            <input onChange={(e) => setLast(e.target.value)} value={Last} type='text' placeholder="Last"></input>
            <input onChange={(e) => setEmail(e.target.value)} value={Email} type='tel' placeholder="Phone"></input>
            <input onChange={(e) => setPhone(e.target.value)} value={Phone} type="email" placeholder="Email"></input>

            <br></br>
                <button type='submit' id='submitBtn'>Submit</button>
        </form>
    )
}
