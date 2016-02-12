import { Factory }/*, {faker} */ from 'ember-cli-mirage';

export default Factory.extend({
  type:'users',
  no(i) {return i+1;},
  name(i) {return `User ${i+1}`;},
  rno(i) {return Math.floor((Math.random() * 100000) + i);}
});
