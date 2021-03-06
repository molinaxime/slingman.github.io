$(document).ready(function () {
  $(window).scroll(function () {
    $(".navbar-default").toggleClass("navbar-shrink", $(this).scrollTop() > 50)
  });
});

$(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

$('#acct').popover({
  html: true,
  trigger: 'hover',
  container: '#acct',
  content: function() {
    var content = $(this).attr("data-popover-content");
    return $(content).children(".popover-body").html();
  },
  title: function() {
    var title = $(this).attr("data-popover-content");
    return $(title).children(".popover-heading").html();
  }
});

$('#cart').popover({
  html: true,
  trigger: 'hover',
  container: '#cart',
  content: function() {
    var content = $(this).attr("data-popover-content");
    return $(content).children(".popover-body").html();
  },
  title: function() {
    var title = $(this).attr("data-popover-content");
    return $(title).children(".popover-heading").html();
  }
});

$('#club').popover({
  html: true,
  trigger: 'hover',
  container: '#club',
  content: function() {
    var content = $(this).attr("data-popover-content");
    return $(content).children(".popover-body").html();
  },
  title: function() {
    var title = $(this).attr("data-popover-content");
    return $(title).children(".popover-heading").html();
  }
});
