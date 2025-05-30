import { GETALLCONTACTS, GETONECONTACT } from "./ActionTypes"
import axios from 'axios'
export const getAllContacts=()=>async(dispatch)=>{
    try {
       const res = await axios.get('/Contact/getAllContacts') 

       dispatch(
        {
            type : GETALLCONTACTS,
            payload : res.data.contacts
        }
       )


    } catch (error) {
        console.log(error)
    }
}


export const addContact=(newContact,navigate)=>async(dispatch)=>{
    try {
        await axios.post('/Contact/addContact',newContact)

        dispatch(getAllContacts())

        navigate('/ListContacts')
    } catch (error) {
        console.log(error)
    }
}

export const getOneContact=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/Contact/getOneContact/${id}`)

        dispatch(
            {
                type : GETONECONTACT,
                payload : res.data.oneContact
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const editContact=(id, upContact, navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/Contact/updateContact/${id}`, upContact)

        dispatch(getAllContacts())

        navigate('/ListContacts')
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/Contact/deleteContact/${id}`)

        dispatch(getAllContacts())
    } catch (error) {
        console.log(error)
    }
}