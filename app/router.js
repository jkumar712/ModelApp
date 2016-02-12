import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('library', function() {
    this.route('new');
    this.route('detail',{path:"/detail/:no"});
    this.route('edit');
    this.route('list');
  });
  this.route('user', function() {
    this.route('register');
    this.route('list');
    this.route('details',{path:'/details/:details_id'});
    this.route('edit',{path:'/edit/:edit_id'});
  });
});

export default Router;
