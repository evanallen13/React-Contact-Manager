import React, { useState } from 'react'
import Nav from '../components/Nav'
import { Mutation } from 'react-apollo'
import gql  from "graphql-tag";
import '../style/Add.css'
import AddForm from './AddForm'

export default function Add() {
    return (
        <div>
            <Nav></Nav>
            <Mutation mutation={NEW_CONTACT}>
            {createContact =>( 
                <AddForm FormSubmit={createContact}/>
            )}
            </Mutation>
        </div>
    )
}

const NEW_CONTACT = gql`
    mutation createContact($first: String!, $last: String, $email: String, $phone: String){
        createContact(
            data : {
              status : PUBLISHED
              first : $first
              last : $last
              email : $email
              phone : $phone
            }){
                id
            }

        }
`
