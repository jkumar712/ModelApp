import Ember from 'ember';

export default Ember.Route.extend({

  {
    return this.store.findRecord('library',params.no);
  }

});
