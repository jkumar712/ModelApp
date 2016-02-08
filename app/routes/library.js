import Ember from 'ember';
/*var lib=[];
lib[0]={
  Slno:0,
  book:"",
  author:""

};*/
export default Ember.Route.extend(
{
  model() {
    return this.store.findAll('booklib');
  }

});
