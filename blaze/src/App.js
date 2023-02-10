import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from 'stream-chat-react';
import '@stream-io/stream-chat-css/dist/css/index.css';

const filters = { type: 'gaming' };
const options = { state: true, presence: true, limit: 10 };
const sort = { last_message_at: -1 };

const App = () => {
const [client, setClient] = useState(null);

useEffect(() => {
const newClient = new StreamChat('2sfh4x6fvfs7');

    const handleConnectionChange = ({ online = false }) => {
      if (!online) return console.log('connection lost');
      setClient(newClient);
    };

    newClient.on('connection.changed', handleConnectionChange);

    newClient.connectUser(
      {
        id: 'dave-matthews',
        name: 'Dave Matthews',
      },
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGF2ZS1tYXR0aGV3cyJ9.-d0UZ9n1gwsiKUSVzZ1x5Eds8sFZziOXHsBTvbcjhgg',
    );

    return () => {
      newClient.off('connection.changed', handleConnectionChange);
      newClient.disconnectUser().then(() => console.log('connection closed'));
    };
}, []);

if (!client) return null;

return (
<Chat client={client}>
<ChannelList filters={filters} sort={sort} options={options} />
<Channel>
<Window>
<ChannelHeader />
<MessageList />
<MessageInput />
</Window>
<Thread />
</Channel>
</Chat>
);
};

export default App;