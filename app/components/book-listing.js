import Ember from 'ember';
export default Ember.Component.extend({
  print: false,
  actions:
  {
    addData(){
      this.set('print',true);
  }

  }
});
