import React from 'react';
import OctopusItem from '../octopusItem/OctopusItem';
import UserItem from './../userItem/UserItem';

const WelcomeChat = ({ chat }) => {
    return (
        <div>
            {chat.map((message, index) =>
                message.emmiter === 'Octopus' ?
                    <OctopusItem 
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