import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    return serialized+273;
  },

  serialize(deserialized) {
    return deserialized-273;
  }
});
