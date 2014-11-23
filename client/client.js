if (Meteor.isClient) {
  var clicked = false;
  Template.body.events({
    'click .home-query strong': function(event, template) {
      var verticalSelect = template.find('.vertical-select');
      var main = template.find('.main');
      if (!clicked) {
        main.className += ' blur';
        verticalSelect.className += ' show';
      } else {
        main.className = main.className.replace(' blur', '');
        verticalSelect.className = verticalSelect.className.replace(' show', '');
      }
      clicked = !clicked;
    }
  })

  Template.body.events({
    'click .vertical-select li': function(event, template) {
      var main = template.find('.main');
      var verticalSelect = template.find('.vertical-select');
      if (!clicked) {
        verticalSelect.className += ' show';
        main.className += ' blur';
      } else {
        verticalSelect.className = verticalSelect.className.replace(' show', '');
        main.className = main.className.replace(' blur', '');
      }
      clicked = !clicked;
    }
  })
}