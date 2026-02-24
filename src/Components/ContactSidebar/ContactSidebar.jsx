import React, { useContext } from "react";
import { ContactsContext } from "../../Context/ContactsContext";
import { getContacts } from '../../services/contactsService'
import { Link } from "react-router";



export default function ContactSidebar (){
   const {contacts} =  useContext(ContactsContext)
    
return (
<div> 
    <h2> WhatsApp </h2>
    <div>
           {
                contacts.map(
                    (contact ) => {
                        return (
                           <Link 
                                to={`/contact/${contact.id}`}
                                key={contact.id}
                                
                            >
                                
                                <img 
                                    src={contact.imagen_perfil} 
                                    alt={contact.name} 
                                    style={
                                        {
                                            width: '200px'
                                        }
                                    }
                                />
                                <h3>{contact.name}</h3>
                                <span>{contact.ultima_conexión}</span>
                                <br />
                                <hr />
                            </Link>
                        )
                    }
                )
            }
        </div>
    </div>
  )
}
