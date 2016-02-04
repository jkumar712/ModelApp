import Ember from 'ember';

export default Ember.Component.extend({
  isShow:false,
  actions:{
    save(){
      this.set("isShow",true);
      alert("Success");

    }
  }
});
