import Ember from 'ember';

export default Ember.Component.extend({
  isDisp:false,
  actions:{
    disp(){
      this.set("isDisp",true);
    }
  }
});
