import React from 'react';
import './InputChat.css';

const InputChat = ({ sendMessage, getMeMessage, msg, chat }) => {
    return (
        <form
            onSubmit={ (e) => sendMessage(e) } 
            className='chatbot-chat-input-container'>
            <input
                autoFocus={true}
                disabled={ chat.length >= 3 ? true : false }
                placeholder={ chat.length >= 3 ? 'Ya no puedes escribir' : 'Escribe tu nombre' }
                type="text"
                value={msg.msg || ''}
                onChange={ (e) => getMeMessage(e.target.value) }
            />
            <button type='submit' disabled={ !msg.msg || (chat.length >= 3 ? true : false) }/>
        </form>
    );
};

export default InputChat;