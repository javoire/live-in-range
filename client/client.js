(function() {

  // this is prooobably not the meteor way.... !

  var showVerticalSelect = false;
  Template.body.helpers({
    showVerticalSelect: function() {
      return showVerticalSelect.toString();
    }
  });

  Template.body.events({
    'click .home-query strong': function(event, template) {
      var verticalSelect = template.find('.vertical-select');
      var main = template.find('.main');
      if (!showVerticalSelect) {
        main.className += ' blur';
        verticalSelect.className += ' show';
      } else {
        main.className = main.className.replace(' blur', '');
        verticalSelect.className = verticalSelect.className.replace(' show', '');
      }
      showVerticalSelect = !showVerticalSelect;
    },
    'click .vertical-select li': function(event, template) {
      var main = template.find('.main');
      var verticalSelect = template.find('.vertical-select');
      if (!showVerticalSelect) {
        verticalSelect.className += ' show';
        main.className += ' blur';
      } else {
        verticalSelect.className = verticalSelect.className.replace(' show', '');
        main.className = main.className.replace(' blur', '');
      }
      showVerticalSelect = !showVerticalSelect;
    }
  })
})();