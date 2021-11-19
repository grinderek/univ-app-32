//= require jquery
//= require rails-ujs
//= require materialize
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function () {
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    $('#fade-out-target').fadeOut(4000);
})