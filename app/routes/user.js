import Ember from 'ember';
var user=[],i=0;
var person={};
person.uName="aaabbb";
person.ind=1;
person.rNo=1;
user[i]=person;
i++;

var temp=Ember.Component.extend;

export default Ember.Route.extend({
  model:function(){
      console.log(user);
      return user;
  }
});
