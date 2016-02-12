import DS from 'ember-data';

export default DS.Model.extend({
  no: DS.attr(),
  book: DS.attr(),
  author: DS.attr(),
  detail: DS.attr()
});
