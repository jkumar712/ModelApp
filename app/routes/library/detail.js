import Ember from 'ember';

export default Ember.Route.extend({
<<<<<<< HEAD
=======

>>>>>>> 5886d14651269318f80d1bff9ac029196f0ef470
  model(params)
  {
    return this.store.findRecord('library',params.no);
  }
<<<<<<< HEAD
=======

>>>>>>> 5886d14651269318f80d1bff9ac029196f0ef470
});
