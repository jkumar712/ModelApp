import Ember from 'ember';
/*var user=[],i=0;
var person={};
person.uName="aaabbb";
person.ind=1;
person.rno=1;
user[i]=person;
i++;
*/
export default Ember.Route.extend({
  model(){
    return this.store.findAll('user');
  }
});
