/*
---
description: Provides HTML 5 placeholder attribute to all browsers.

license: MIT-style

authors:
- Alexey Gromov

requires:
  core/1.2.4: '*'

provides: none

...
*/
$(window).addEvent("domready",function(){"placeholder"in document.createElement("input")||$$("input").each(function(a){var b=a.get("placeholder"),d=a.getStyle("color");if(b){a.setStyle("color","#aaa").set("value",b).addEvent("focus",function(){if(a.value==""||a.value==b)a.setStyle("color",d).set("value","")}).addEvent("blur",function(){if(a.value==""||a.value==b)a.setStyle("color","#aaa").set("value",b)});var c=a.getParent("form");c&&c.addEvent("submit",function(){a.value==b&&a.set("value","")})}})});