import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('topics', { path: '/' }, function() {
    this.route('show', { path: '/topics/show' });
    this.route('new', { path: '/topics/new' });
  });
});

export default Router;
