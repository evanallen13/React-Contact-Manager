import React from 'react'
import gql  from "graphql-tag";
import { Query  } from 'react-apollo'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import ContactFooter from './ContactFooter'
import '../style/Contact.css'
import phone from '../imgs/call.png'
import email from '../imgs/gmail.png'

export default function Contact(props) {
    const { match } = props
    return (
        <div style={{margin : '20px 0 0 0'}}>
            <Nav></Nav>
            <Query query={CONTACT_QUERY} variables={{
            id : match.params.id
            }}>
            {({loading, data}) => {
                if(loading) return null
                const { contact } = data
                return <div>
                    {contact.photo ? 
                        <img src={contact.photo.url} alt={"Photo"}style={{width:'100px',height:'100px',borderRadius:'50%'}}></img> :
                        <div style={{width:'100px',height:'75px',borderRadius:'50%', backgroundColor:'grey',margin:'0 auto',paddingTop:'25px'}}>
                            <h1 style={{color:'white'}}>{contact.last[0]}</h1>
                        </div>
                    }
                    <br/>
                    <h1>{contact.first} {contact.last}</h1>
                    <div>
                        {
                            contact.phone ?
                            <a href={`tel:${contact.phone}`}>
                                <img src={phone} alt="call" style={{margin: '0 10px 0 10px'}}/> 
                            </a>
                            : null
                        }
                        {
                           contact.email ?
                           <a href={`mailto:${contact.email}`}>
                               <img src={email} alt="email" style={{margin: '0 10px 0 10px'}}/>
                           </a>
                           : null 
                        }
                    </div>
                    <h4>Phone: </h4>
                    <h4>{contact.phone}</h4>
                    <h4>Email:</h4>
                    <h4>{contact.email}</h4>
                </div>
            }}
        </Query>
        <ContactFooter></ContactFooter>
        </div>
    )
}

const CONTACT_QUERY = gql`
query contacts($id : ID!){
    contact (where : {id : $id}){
        id
        first
        last
        phone
        email
        photo{
            url
        }
    }
}
`
