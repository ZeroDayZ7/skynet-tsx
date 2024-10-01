import React, { useState, useEffect, useRef } from 'react';
import './Messages.css';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { width } from '@mui/system';

const Messages = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'John Doe',
      messages: [
        { id: 1, text: 'Cześć!', sender: 'John Doe' },
        { id: 2, text: 'Hej!', sender: 'You' },
        { id: 3, text: 'Jak się masz?', sender: 'John Doe' },
        { id: 4, text: 'Dobrze, a ty?', sender: 'You' },
        { id: 5, text: 'Też dobrze, dzięki!', sender: 'John Doe' },
        { id: 6, text: 'Co słychać?', sender: 'John Doe' },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      messages: [
        { id: 1, text: 'Cześć Jane!', sender: 'You' },
        { id: 2, text: 'Witaj!', sender: 'Jane Smith' },
        { id: 3, text: 'Jak minął twój dzień?', sender: 'You' },
        { id: 4, text: 'Bardzo dobrze, dziękuję!', sender: 'Jane Smith' },
      ],
    },
  ]); // Symulowane dane rozmów

  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null); // Referencja do diva z wiadomościami

  useEffect(() => {
    // Przewiń div z wiadomościami do dołu
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [selectedConversation]); // Uruchamia się przy zmianie selectedConversation










  
  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleSendMessage = () => {
    if (!newMessage) return;
    const updatedConversations = conversations.map((conversation) => {
      if (conversation === selectedConversation) {
        return {
          ...conversation,
          messages: [...conversation.messages, { id: conversation.messages.length + 1, text: newMessage, sender: 'You' }],
        };
      }
      return conversation;
    });
    setConversations(updatedConversations);
    setNewMessage('');
  };

  return (
    <div className="messages-container">
      <div className="conversations">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`conversation ${selectedConversation === conversation ? 'active' : ''}`}
            onClick={() => handleConversationClick(conversation)}>
            {conversation.name}
          </div>
        ))}

        <button className="btn-msg search-friends-button">Szukaj znajomych</button>
        <button className="btn-msg new-conversation-button">Utwórz nową konwersację</button>
      </div>
      <div className="conversation-messages">
      {selectedConversation ? (
          <>
            <div className="messages">
              {selectedConversation.messages.slice(0).reverse().map((message) => (
                <div key={message.id} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
                  <div className="message-text">{message.text}</div>
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>
            <div className="message-input">
              <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Wpisz wiadomość..." />
              <div className="message-actions">
                <button className="attachment-button">
                <FontAwesomeIcon icon={faPaperclip} />
                </button>
                <button className="image-button">
                  <FontAwesomeIcon icon={faImage} />
                </button>
                <button className="send-button" onClick={handleSendMessage}>
                  Wyślij
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
          <div className="no-conversation-text">Wybierz konwersację, aby zobaczyć wiadomości.</div>
          <hr style={{ width: '100%', borderColor: 'white' }} />
          <div className="no-conversation-text-low">Wszystkie wiadomości są szyfrowane END-to-END nikt poza Tobą i osobą z którą prowadzisz konwersację nie moze zobaczyć wiadomości! W trosce o bezpieczeństwo <strong>SKYNET</strong>.</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Messages;
