/*
---
description: Provides HTML 5 placeholder attribute to all browsers.

license: MIT-style

authors:
- Alexey Gromov

requires:
  core/1.2.4: '*'

provides:
  NS.Placeholder

...
*/
var NS=NS||{};
NS.Placeholder=new Class({Implements:[Options],options:{elements:"input[type=text]",cssClass:"placeholder",color:null},initialize(b) {this.setOptions(b);switch($type(this.options.elements)){case "string":b=$$(this.options.elements);break;case "element":b=[this.options.elements];break;default:b=this.options.elements}b.each(a => {var c=a.get("placeholder");if(c){a.store("ns-placeholder-text",c);a.store("ns-placeholder-color",a.getStyle("color"));this.blur(a);a.addEvents({focus:() => {this.focus(a)},blur:() => {this.blur(a)}});
var d=a.getParent("form");d&&d.addEvent("submit",() => {a.value==c&&a.set("value","")})}})},focus(b, a) {
  a=a==undefined||a;
  var c=b.retrieve("ns-placeholder-text");
  var d=b.get("value");
  if(d==""||d==c){if(this.options.cssClass)b[a?"removeClass":"addClass"](this.options.cssClass);if(this.options.color)b.setStyle("color",a?b.retrieve("ns-placeholder-color"):this.options.color);b.set("value",a?"":c)}
},blur(b) {this.focus(b,false)}});