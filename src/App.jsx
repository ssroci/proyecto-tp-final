import React from 'react'
import { Route, Routes } from 'react-router'
import Login from "./pages/Login/Login";
import Contactos from "./pages/Contactos/Contactos";
import Chat from "./pages/Chat/Chat";
import Error from "./pages/Error/Error"; 

import ContactsContextProvider from './Context/ContactsContext';




function App() {

 return (
 <div>
  <ContactsContextProvider> 
 <Routes>
      <Route path="/" element={<Login />} />
   <Route
                        path='/contact/:contact_id'
                        element={
                            <Contactos/>
                        }
                    />
                    
      <Route path="/chats" element={<Chat />} />
      <Route path="*" element={<Error />} />

    </Routes>
  </ContactsContextProvider>
</div>

 )
}
export default App
