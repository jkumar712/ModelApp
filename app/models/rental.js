import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr(),
  year: DS.attr(),
  baja: DS.attr(),
  image: DS.attr()

});
