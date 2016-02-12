export default function(server) {
var library=server.create('library');
server.createList('library',10,{library_id: library.id})

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  //server.createList('contact', 10);
}
