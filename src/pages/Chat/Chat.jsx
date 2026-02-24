import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import './Chat.css'

export default function Chat() {
  const { contacts } = useContext(ContactsContext)
  const { contact_id } = useParams()

  const contact_selected = contacts.find(
    contact => Number(contact.id) === Number(contact_id)
  )

  if (!contact_selected) {
    return <h1>El contacto seleccionado no existe</h1>
  }

  return (
    <div className='contenedor-chat'>
      <ContactSidebar />
     <div className='contacto-seleccionado'>
      <h1>Chat con {contact_selected.name}</h1>
    </div>
    <div className='mensaje-chat'>
      {contact_selected.mensajes.map(mensaje => (
        <div key={mensaje.id}>
          <h3>
            {mensaje.send_by_me
              ? 'Enviado por mí'
              : `Enviado por ${contact_selected.name}`}
          </h3>
          <p>{mensaje.text}</p>
          <span>{mensaje.time}</span>
          <hr />
        
        </div>
      ))}
      </div>

      <form className='chat-form'>
        <textarea placeholder="Escribe un mensaje..." />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}