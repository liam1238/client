import React from 'react';
import Sidebar from './Sidebar';
import { useConversations } from '../contexts/ConversationsProvaider';
import OpenConversation from './OpenConversation';


export default function Dashbord( { id } ) {
  const { selectedConversation } = useConversations();

  return (
    <div className='d-flex' style={{height: '100vh'}}>
        <Sidebar id={id}/>
        { selectedConversation && <OpenConversation /> }
    </div>
  )
}
