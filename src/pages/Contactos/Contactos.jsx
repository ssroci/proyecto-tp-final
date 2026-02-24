
import React, { useContext } from 'react'
import { Link } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import './Contactos.css'

export default function Contactos() {
  const { contacts } = useContext(ContactsContext)

  return (
    <div className='contenedor-contactos'>
      <ContactSidebar />
      <div className='lista-contactos'>

      <h1> CHATS </h1>

      {contacts.map(contact => (
        <Link
          key={contact.id}
          to={`/chat/${contact.id}`}
          className='contacto-item'
        >
          <p>{contact.name}</p>
        </Link>
      ))}
    </div>
    </div>
  )
}
