import Ember from 'ember';

var rental = [{
  id: 1,
  number: '51',
  year: '2012',
  baja: 'BAJA SAE INDIA',
  image: '/Users/kumar-pt834/Documents/Styles conference/Baja webpage/51.jpg'
}, {
  id: 2,
  number: '102',
  year: '2013',
  baja: 'BAJA SAE INDIA',
  image: '102.jpg'
}, {
  id: 3,
  number: '66',
  year: '2015',
  baja: 'Baja Student India',
  image: 'https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiVsZb7mc3KAhWJcI4KHRtDB-sQjRwIBw&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FZoho_Corporation&psig=AFQjCNEUVV8w1DMh32f2JUyGewmZnwSzfA&ust=1454094407269205'
}];

export default Ember.Route.extend({
  model() {
   return this.store.findAll('rental');
 },
});
