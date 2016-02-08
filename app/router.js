import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('library', function() {
    this.route('new');
    this.route('detail');
    this.route('edit');
    this.route('list');
  });
  this.route('user', function() {
    this.route('register');
  });
});

export default Router;
