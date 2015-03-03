Bustle.ApplicationController = Ember.Controller.extend({
  isExpanded: false,
  actions: {
    toggleSocialMenu: function() {
      this.set('isExpanded', !this.isExpanded);
    }
  }
});
