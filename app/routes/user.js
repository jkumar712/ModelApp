import Ember from 'ember';
var user=[{
  name: 'jeyakumar',
  number: 1009092
}]
export default Ember.Route.extend({
  model(){
    return user;
  }
});
