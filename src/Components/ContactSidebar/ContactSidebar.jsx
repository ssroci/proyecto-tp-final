import React, { useContext } from "react";
import { ContactsContext } from "../../Context/ContactsContext";
import { getContacts } from '../../services/contactsService'
import { Link } from "react-router";
import './ContactSidebar.css'




export default function ContactSidebar (){
   const {contacts} =  useContext(ContactsContext)
    
return (
<div className="sidebar-lista"> 
    <h2> Contactos </h2>
    <div className="contactos-sidebar">
           {
                contacts.map(
                    (contact ) => {
                        return (
                           <Link 
                                to={`/contact/${contact.id}`}
                                key={contact.id}
                                
                            >
                                
                                <img 
                                    src ={contact.imagen_perfil} 
                                    alt={contact.name} 
                                    className="foto-perfil"
                    
                                    style={
                                        {
                                            
                                            
                                            
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
