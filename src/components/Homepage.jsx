import React, { useState } from 'react'
import { Query  } from 'react-apollo'
import { Link } from 'react-router-dom'
import gql  from "graphql-tag";
import '../style/Homepage.css'

export default function Homepage() {
    
    const [ search, setSearch ] = useState('')
    const seachName = (first, last) =>{
        const name = `${first} ${last}`
        if(name.toLowerCase().includes(search.toLowerCase())){
            return true
        }else{
            return false
        }
    }
    
    return (
        <div className="Homepage">
            <div>
                <h1 className="title">Contacts</h1>
                <Link to={'/add'}>
                    <h1 className="plus">+</h1>   
                </Link>
            </div>
            <input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
               <Query query={CONTACT_QUERY}>
                    {({data,loading}) => {
                        if(loading) return 'Loading..'
                        const { contacts } = data

                        return contacts.map( contact => 
                            (seachName(contact.first,contact.last) ?
                            <Link to={`/contact/${contact.id}`} key={contact.id} style={{textDecoration:'none'}}>
                            <div className='Row'>
                                <h4>{contact.first} {contact.last}</h4>
                            </div>
                            </Link> : null

                            )
                        )
                    }}
               </Query>
        </div>
    )
}

const CONTACT_QUERY = gql`
    {
        contacts{
        id
        first 
        last
        }
    }
`
