import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({

  type:'library',
  no(i){return i+1;},
  book(i){return `book ${i+1}`;},
  author(i){return `author ${i+1}`;},
  detail(i){return `detail ${i+1}`;}
});
