#Front protecting algotirhm
- PHP 7.2 | JS
- HTTPS Only

# Description
The alghorithn for protection JS from copying.


Main idea: any JS code on any page can be copied. So, if we have some part of the code without which, the code will not work. It won't work.

Finding an algorithm becomes more difficult if JS is minimized.

The main part of it - browser id that sendings with HTTP request. This ID becomes incrypts in backend and saves in browser cockies. Then own browser id compares with data from backend. If comparsion is successed - user can work with web site.
