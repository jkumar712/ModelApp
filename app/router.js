import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('library');
  this.route('about');
  this.route('contact');
  this.route('workout', function() {
    this.route('new');
  });
  this.route('temp');
  this.route('user', function() {
    this.route('register');
  });
});

export default Router;
