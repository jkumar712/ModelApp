import Ember from 'ember';

export default Ember.Component.extend({
  willRender(){
  this.set('categories',{'animal':['dog','cow','goat'], 'bird':['sparrow','crow','peacock']});
}});
