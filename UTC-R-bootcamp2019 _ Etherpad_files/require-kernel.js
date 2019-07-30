var require=function(){function t(t){this.name="CircularDependencyError",this.message=t}function e(t){this.name="ArgumentError",this.message=t}function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function r(t,e,n){Q.push.apply(Q,arguments)}function o(){try{for(;Q.length;){var t=Q.shift();t()}W=!1}finally{W=Q.length>0,Q.length&&setTimeout(o,0)}}function i(){!W&&Q.length>0&&(Y?(W=!0,setTimeout(o,0)):o())}function u(t){try{W=!0,t(),W=!1,i()}finally{W=!1,Q.length&&setTimeout(i,0)}}function c(t){var e=t.match(rt),n=e&&{scheme:e[2],host:e[4],path:e[5],query:e[7],fragment:e[9]};return n}function a(t){var e="";return t.scheme&&(e+=t.scheme+":"),t.host&&(e+="//"+t.host),t.host&&t.path&&"/"!=t.path.charAt(0)&&(url+="/"),t.path&&(e+=t.path),t.query&&(e+="?"+t.query),e.fragment&&(e+="#"+t.fragment),e}function f(t){var e="undefined"==typeof location?{}:c(location.toString()),t=c(t);return!t.scheme&&!t.host||t.scheme===e.scheme&&t.host===e.host}function s(t){var e="undefined"==typeof location?{}:c(location.toString()),t=c(t);return t.scheme=e.scheme,t.host=e.host,a(t)}function l(t){for(var e,n=t.split("/"),r=[],o=0,i=n.length;i>o;o++)switch(e=n[o]){case"":0!=o&&o!=i-1||r.push(e);break;case".":break;case"..":if(r.length>1||1==r.length&&""!=r[0]&&"."!=r[0]){r.pop();break}default:r.push(e)}return r.join("/")}function h(t,e){var n=t;return"."==t.charAt(0)&&("/"==t.charAt(1)||"."==t.charAt(1)&&"/"==t.charAt(2))&&(e?"/"!=e.charAt(e.length-1)&&(e+="/"):e="",n=e+t),n}function d(t){if(!t)throw new e("Invalid root URI.");tt="/"==t.charAt(t.length-1)?t.slice(0,-1):t}function p(t){et="/"==t.charAt(t.length-1)?t:t+"/"}function m(t){for(var e=t.split("/"),n=0,r=e.length;r>n;n++)e[n]=encodeURIComponent(e[n]);if(t=e.join("/"),"/"==t.charAt(0)){if(!tt)throw new Error('Attempt to retrieve the root module "'+t+'" but no root URI is defined.');return tt+t}if(!et)throw new Error('Attempt to retrieve the library module "'+t+'" but no libary URI is defined.');return et+t}function v(t,e){return new Function(t)}function y(t,e){var n=ut._compileFunction||v;return n.apply(this,arguments)}function g(t){if(t==parseInt(t),!(t>0))throw new e("Value must be a positive integer.");J=t,q()}function w(t){Z=t}function b(){for(var t=!1,e=0,n=ot.length;n>e;e++){try{t=ot[e]()}catch(r){continue}break}return t}function A(t,e,n,r){function o(t){200==t.status?n(void 0,t.responseText):n(!0,void 0)}var r=r||b();if(!r)throw new Error("Error making remote request.");r.open("GET",t,!!e),e?(r.onreadystatechange=function(t){4==r.readyState&&o(r)},r.send(null)):(r.send(null),o(r))}function E(t,e){var n=new XDomainRequest;n.open("GET",t),n.error(function(){e(!0,void 0)}),n.onload(function(){e(void 0,request.responseText)}),n.send()}function T(t,e){var n=Z,r=function(e,r){if(e)O(t,null);else if(n)y(r,t)();else{var o=y("return (function (require, exports, module) {"+r+"\n})",t)();O(t,o)}},o=m(t);if(n&&(o+="?callback="+encodeURIComponent(Z+".define")),f(o))A(o,e,r);else{var i=b();i&&void 0!==i.withCredentials?A(o,e,r,i):e&&"undefined"!=typeof XDomainRequest?E(o,r):A(s(o),e,r)}}function j(t){var e=document.head||document.getElementsByTagName("head")[0]||document.documentElement,n=document.createElement("script");if(void 0!==n.async?n.async="true":n.defer="true",n.type="application/javascript",n.src=m(t)+"?callback="+encodeURIComponent(Z+".define"),1/0>nt){var r=setTimeout(function(){r=void 0,O(t,null)},nt);N[t].unshift(function(){void 0===r&&clearTimeout(r)})}e.insertBefore(n,e.firstChild)}function R(t,e){n(N,t)?N[t].push(e):(N[t]=[e],x(t))}function x(t){V.push(t),q()}function q(){if(V.length>0&&J>z){var t=V.pop();z++,N[t].unshift(function(){z--,q()}),Z&&"undefined"!=typeof document&&document.readyState&&/^loaded|complete$/.test(document.readyState)?j(t):T(t,!0)}}function I(t,e){T(t,!1),e()}function M(t){return n(B,t)}function X(e,r){if(M(e)){var o=B[e];r(o)}else{if(n(K,e))throw new t("Encountered circular dependency.");if(!C(e))throw new Error("Attempt to load undefined module.");if(null===$[e])r(null);else{var i=$[e],u={id:e,exports:{}},c=it(e);G||(G=u);try{K[e]=!0,i(c,u.exports,u),B[e]=u,delete K[e],r(u)}finally{delete K[e]}}}}function U(t,e,n){"ep_etherpad-lite/static/js/pad.js"===t&&(t="ep_etherpad-lite/static/js/pad");var r=[".js","/index.js"];"/"==t.charAt(t.length-1)&&(r=["index.js"]);var o=r.length,i=function(u){if(o>u){var c=t+r[u],a=function(){X(c,function(t){null===t?i(u+1):n(t)})};C(c)?a():e(c,a)}else n(null)};i(0)}function _(t,e){r(function(){U(t,R,e)})}function k(t){var e,n=Y;Y=!0,"async"==t&&(t="async/lib/async"),"underscore"==t&&(t="underscore/underscore"),"unorm"==t&&(t="unorm/lib/unorm");try{U(t,I,function(t){e=t})}finally{Y=n}return e}function C(t){return n($,t)}function S(t,n){if("string"!=typeof t||"function"!=typeof n&&null!==n)throw new e("Definition must be a (string, function) pair.");C(t)||($[t]=n)}function L(t){if("object"!=typeof t)throw new e("Mapping must be an object.");for(var r in t)n(t,r)&&S(r,t[r])}function O(t,o){var u;if(1==arguments.length)u=t,L(u);else{if(2!=arguments.length)throw new e("Expected 1 or 2 arguments, but got "+arguments.length+".");var c=t;S(t,o),u={},u[c]=o}for(var c in u)n(u,c)&&n(N,c)&&(r.apply(this,N[c]),delete N[c]);i()}function P(t,n){if(void 0===n){var r=k(t);if(!r)throw new Error('The module at "'+t+'" does not exist.');return r.exports}if("function"!=typeof n)throw new e("Continuation must be a function.");u(function(){_(t,function(t){n(t&&t.exports)})})}function D(t,e){var n=ut._designatedRequire||P;return n.apply(this,arguments)}function F(t,e,n){e=e.toString();var r=l(h(e,t));return D(r,n)}function H(t,n,r){function o(e){a.push(e),n.length>0?F(t,n.shift(),o):r.apply(this,a)}if("function"!=typeof r)throw new e("Final argument must be a continuation.");for(var i=[],u=0,c=n.length;c>u;u++)i[u]=n[u].toString();for(var a=[],u=0,c=n.length;c>u;u++)F(t,i[u],o)}var G=null,B={},$={},K={},N={},V=[],z=0,J=2,Q=[],W=!1,Y=void 0,Z=void 0,tt=void 0,et=void 0,nt=6e4;t.prototype=Error.prototype,e.prototype=Error.prototype;var rt=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,ot=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],it=function(t){function e(e,n){if(arguments.length>2){var r=Array.prototype.slice.call(arguments,0,-1),n=arguments[arguments.length-1];return H(t,r,n)}return F(t,e,n)}return t=t.replace(/[^\/]+$/,""),e.main=G,e},ut=it("/");return ut._modules=B,ut._definitions=$,ut._designatedRequire=P,ut._compileFunction=v,ut.define=O,ut.setRequestMaximum=g,ut.setGlobalKeyPath=w,ut.setRootURI=d,ut.setLibraryURI=p,ut}();