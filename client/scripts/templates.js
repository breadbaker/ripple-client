module.exports = function(Handlebars) {

var templates = {};

templates["balances"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>\n    Balances\n</h1>\n<div class=\"balances\">\n</div>";
  },"useData":true});

templates["util/fart"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>fort</h1>";
  },"useData":true});

return templates;

};