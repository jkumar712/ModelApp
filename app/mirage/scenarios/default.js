export default function(server ) {
  var user=server.create('user');
  //let author = server.create('author', {name: 'Zelda'});
  server.createList('user', 10, {user_id: user.id});
  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);
}
