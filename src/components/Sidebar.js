import React, { useState } from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import { NewContactModal, NewConversationModal } from './modal/index';
import Conversations from './Conversations';
import Contacts from './Contacts';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

export default function Sidebar( { id } ) {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const conversationsOpen = activeKey === CONVERSATIONS_KEY;

    function closeModal() {
        setModalIsOpen(false);
    }
    
  return (
    <div className='d-flex flex-column' style={{width: '250px'}}>
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
            <Nav variant='tabs' className='justify-content-center'>
                <Nav.Item>
                    <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className='overflow-auto flex-grow-1' style={{borderRight: '1px solid #e9ecef'}}>
                <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                    <Conversations/>
                </Tab.Pane>
                <Tab.Pane eventKey={CONTACTS_KEY}>
                    <Contacts/>
                </Tab.Pane>
            </Tab.Content>
            <div className='p-2 border-top small' style={{borderRight: '1px solid #e9ecef'}}>
                Your Id: <span className='text-muted'>{id}</span>
            </div>
            <Button className='rounded-0' onClick={() => setModalIsOpen(true)}>New {conversationsOpen ? 'Conversation' : 'Contact'} </Button>
        </Tab.Container>
        <Modal show={modalIsOpen} onHide={closeModal}>
            {conversationsOpen ? 
                <NewConversationModal closeModal={closeModal}/> 
                :
                <NewContactModal closeModal={closeModal}/>
            }
        </Modal>
    </div>
  )
}
