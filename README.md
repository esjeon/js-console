
js-console
==========

A simple javascript console written in javascript.


How to use
----------

    function JSConsole (container, eval)

`container`: An element in which you want to create a console.  
`eval`: a `function(exp)` that returns the evaluation result.  

JSConsole provides only one method: `run(expr)`. This evaluates the given string by passing it to `eval`.

If you set `onkeypress` to a `function(event, elem)`, then the function will be called whenever the input box(`elem`) fires a keypress event. This allows more customization.

See index.html for an example.


UI Customization
----------------

You can customize UI by modifying console.css.


License
-------

Copyright (c) 2013 Eon S. Jeon

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

