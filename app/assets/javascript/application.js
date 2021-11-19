//= require jquery
//= require rails-ujs
//= require materialize
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function () {
    $(".dropdown-trigger").dropdown();
})