import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import {Form, Button} from 'react-bootstrap'
import { editContact, getOneContact } from "../Redux/Actions"

const EditContact=()=>{

    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneContact(id))
    },[])

    const oneContact = useSelector(state => state.oneContact)


    const [name, setName] = useState(oneContact.name)
    const [age, setAge] = useState(oneContact.age)
    const [email,setEmail] = useState(oneContact.email)

    

    useEffect(()=>{
        setName(oneContact.name)
        setAge(oneContact.age)
        setEmail(oneContact.email)
    },[oneContact])


    const navigate = useNavigate()

    const handleEdit=(e)=>{
        e.preventDefault()
        dispatch(editContact(id, {name,email,age}, navigate))
    }
    return(
          <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter age" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

            
            <Button onClick={(e)=> handleEdit(e)} variant="primary" type="submit">
                Edit
            </Button>
        </Form>
    )
}

export default EditContact