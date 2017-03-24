/**
 * Created by Donghui Huo on 2016/3/15.
 */
var $ = jQuery = require('jquery');
require("flexslider");
require("bootstrap");
var utilFun = require("utilFun");
$(document).ready(function () {
    //onclick give active
    $(".navbar-nav li.active").removeClass("active");
    $(".navbar-nav li."+$("body").attr("id")+"-li").addClass("active");
    $(".navbar-nav li."+$("body").attr("id")+"-li-parent").addClass("active");
});

