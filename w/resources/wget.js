// Generated by CoffeeScript 1.3.3
(function() {
  var _this = this;

  $(function() {
    var ws;
    $.ajax(location.href, {
      data: {
        __h__: "__at__"
      }
    }).done(function(data) {
      document.open();
      document.write(data);
      return document.close();
    }).fail(function(data) {
      document.open();
      document.write(data.responseText);
      return document.close();
    });
    _this.ws = ws = new WebSocket("ws://localhost:" + _this.__ws_port);
    ws.onclose = function(m) {
      return console.log("close " + m);
    };
    ws.onmessage = function(m) {
      _this.__w = JSON.parse(m.data);
      $('body').html('');
      return w_load();
    };
    ws.onerror = function(m) {
      return console.log("error " + m);
    };
    ws.onopen = function(m) {
      return console.log("open " + m);
    };
    return _this.onbeforeunload = function() {
      ws.send('QUIT');
      return void 0;
    };
  });

}).call(this);
