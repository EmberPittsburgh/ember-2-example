export default function(server) {
  let iterations = Math.floor(Math.random() * 8) + 2;
  for (let i = 0; i < iterations; i++) {
    const sender = server.create('user');
    const fromSender = server.createList('chat', 10);
    const fromUser = server.createList('chat', 10, { sender });
    server.create('conversation', {
      sender,
      chats: fromSender.concat(fromUser)
    });
  }
}
