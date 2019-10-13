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
            <h4>First</h4>
            <input onChange={(e) => setFirst(e.target.value)} value={First} type='text'></input>

            <h4>Last</h4>
            <input onChange={(e) => setLast(e.target.value)} value={Last} type='text'></input>

            <h4>Phone Number</h4>
            <input onChange={(e) => setEmail(e.target.value)} value={Email} type='tel'></input>

            <h4>Gmail</h4>
            <input onChange={(e) => setPhone(e.target.value)} value={Phone} type="email"></input>

            <br></br>
                <button type='submit' >Submit</button>
        </form>
    )
}
