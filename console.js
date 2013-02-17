
function JSConsole (container, eval)
{
  var self = this;
  
  var win = document.createElement('PRE');
  var cmdline = document.createElement('TEXTAREA');
  var filterbox = document.createElement('textarea');

  win.setAttribute('class', 'console-window');

  with(cmdline) {
    setAttribute('class', 'console-cmdline');
    setAttribute('rows', 1);
    setAttribute('value', '');
    setAttribute('placeholder', "Enter an expression here.");
    addEventListener('keypress', function(ev) {
      if (self.onkeypress) {
        var res = self.onkeypress(ev, cmdline);
        if (res !== undefined && !res)
          return;
      }

      if (ev.which !== 13) return false;
      if (cmdline.value === "") return false;
      self.run(cmdline.value);
      cmdline.value = '';

      if (ev.preventDefault)
        ev.preventDefault();
    });
  }
  
  with(container) {
    innerHTML = "";
    setAttribute('class', 'console-container');
    appendChild(win);
    appendChild( (function() {
      var hr = document.createElement('HR');
      hr.setAttribute('class', 'console-separator');
      return hr;
    }) () );
    appendChild(cmdline);
  }

  function filterHTML(str) {
    filterbox.innerHTML = str;
    return filterbox.innerHTML
  }

  function stringify (obj) {
    if (typeof(obj) === "string")
      return obj;
    if (typeof(obj) === "function")
      return "" + obj;
    return JSON.stringify (obj);
  }

  function display(type, obj, nonl) {
    var span = document.createElement('SPAN');
    span.setAttribute('class', 'console-' + type);
    span.innerHTML = filterHTML(obj) + ((nonl)?'':'\n');
    win.appendChild(span);
  }

  self.run = function(expr) {
    display('expr', expr);
    try {
      var res = eval(expr);
      display('bullet', " ▶ ", true);
      display(typeof(res), res);
    } catch (e) {
      display("bullet-exception", " ▶ ", true);
      display('exception', (e.message)? e.message: e);
    }
  };

  self.onkeypress = function() {}
}

