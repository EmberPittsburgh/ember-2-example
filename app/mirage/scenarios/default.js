export default function(server) {
  const user1 = server.create('user');
  server.create('conversation', { sender: user1 });

  const user2 = server.create('user');
  server.create('conversation', { sender: user2 });
}
