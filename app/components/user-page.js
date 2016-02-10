import Ember from 'ember';

export default Ember.Component.extend({
  isShow:false,
  name:"",
  number:"",
  actions:{
    save(){
      this.set("isShow",true);
      alert("Success");
      console.log(this.name);
      console.log(this.number);
      var full=Ember.computed(this.name,this.number,function(){
        return `${this.get('name')}${this.get('number')}`;
      });
      console.log(full);
      }
    }
});
