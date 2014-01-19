var Widget = require("widget").Widget;
var data = require("sdk/self").data;
var panel = require("sdk/panel").Panel({
  width: 360,
  height: 360,
  contentURL: data.url("minipanel.html")
});

exports.main = function() {
    new Widget({
        id: "codexico-utf8-widget",
        label: "utf8 characters",
        contentURL: data.url("icon128.png"),
        onClick: function(event) {
            panel.show();
        }
    });
};
