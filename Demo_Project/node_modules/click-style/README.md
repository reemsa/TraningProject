# Click-Style

Click Style is a simple but good looking and helpful jQuery plugin.  It styles the way a button looks when clicked automatically

## Usage
Put the jquery.clickstyle.min.js and clickstyle.css(optional) into your website's directory.

In your jquery script add: 

````javascript
$('button').clickStyle();
````

To change the parameters, do this:

````javascript
$('button').clickStyle({
  onclick: true, 
  color: "white", 
  background: "#29bf35",
  text: "Success!",
  rotate: true,
  transition: "1000",
  bordercolor: "none"
});
````

Inside the quotation marks change it to your desires.
