import React from 'react';
import CatItem from './../catItem/CatItem';
import UserItem from './../userItem/UserItem';

const WelcomeChat = ({ chat }) => {
    return (
        <div>
            {chat.map((message, index) =>
                message.emmiter === 'Cat' ?
                    <CatItem 
                        key={message.id}
                        text={message.msg} />
                    :
                    <UserItem
                        key={message.id}
                        text={message.msg} />
            )}
        </div>
    );
};

export default WelcomeChat;