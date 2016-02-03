import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    addData(){
      lib.Slno++;
      lib.book= 'x';
      lib.author='y';
    }
  }
});
