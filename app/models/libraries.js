import DS from 'ember-data';
store.createRecord('post', {
  title: 'Rails is Omakase',
  body: 'Lorem ipsum'
});
console.log(post.title);


export default DS.Model.extend({


//  book: DS.attr(),
  //author: DS.attr()
  //
  // FIXTURES: [
  //   {id:1, book: 'book1', author: 'author1'},
  //   {id:2, book: 'book2', author: 'author2'}];
});
