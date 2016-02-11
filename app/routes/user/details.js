import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log(params.details_id);
    /*return {
      no: 1,
      name: 'jk'
    };*/
    return this.store.peekRecord('user',params.details_id);
  }
});
