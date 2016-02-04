import DS from 'ember-data';

export default DS.Model.extend({
  i: DS.attr(),
  book: DS.attr(),
  author: DS.attr()
});
