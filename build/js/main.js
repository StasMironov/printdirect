"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) {
      n.d(r, i, function (t) {
        return e[t];
      }.bind(null, i));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 3);
}([function (e, t, n) {
  var r;
  /*!
   * jQuery JavaScript Library v3.6.0
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2021-03-02T17:08Z
   */

  !function (t, n) {
    "use strict";

    "object" == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e);
    } : n(t);
  }("undefined" != typeof window ? window : this, function (n, i) {
    "use strict";

    var o = [],
        s = Object.getPrototypeOf,
        a = o.slice,
        l = o.flat ? function (e) {
      return o.flat.call(e);
    } : function (e) {
      return o.concat.apply([], e);
    },
        c = o.push,
        u = o.indexOf,
        d = {},
        p = d.toString,
        h = d.hasOwnProperty,
        f = h.toString,
        g = f.call(Object),
        m = {},
        v = function v(e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    },
        y = function y(e) {
      return null != e && e === e.window;
    },
        b = n.document,
        x = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

    function w(e, t, n) {
      var r,
          i,
          o = (n = n || b).createElement("script");
      if (o.text = e, t) for (r in x) {
        (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
      }
      n.head.appendChild(o).parentNode.removeChild(o);
    }

    function _(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? d[p.call(e)] || "object" : _typeof(e);
    }

    var T = function T(e, t) {
      return new T.fn.init(e, t);
    };

    function C(e) {
      var t = !!e && "length" in e && e.length,
          n = _(e);

      return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }

    T.fn = T.prototype = {
      jquery: "3.6.0",
      constructor: T,
      length: 0,
      toArray: function toArray() {
        return a.call(this);
      },
      get: function get(e) {
        return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function pushStack(e) {
        var t = T.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      each: function each(e) {
        return T.each(this, e);
      },
      map: function map(e) {
        return this.pushStack(T.map(this, function (t, n) {
          return e.call(t, n, t);
        }));
      },
      slice: function slice() {
        return this.pushStack(a.apply(this, arguments));
      },
      first: function first() {
        return this.eq(0);
      },
      last: function last() {
        return this.eq(-1);
      },
      even: function even() {
        return this.pushStack(T.grep(this, function (e, t) {
          return (t + 1) % 2;
        }));
      },
      odd: function odd() {
        return this.pushStack(T.grep(this, function (e, t) {
          return t % 2;
        }));
      },
      eq: function eq(e) {
        var t = this.length,
            n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function end() {
        return this.prevObject || this.constructor();
      },
      push: c,
      sort: o.sort,
      splice: o.splice
    }, T.extend = T.fn.extend = function () {
      var e,
          t,
          n,
          r,
          i,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;

      for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == _typeof(s) || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
        if (null != (e = arguments[a])) for (t in e) {
          r = e[t], "__proto__" !== t && s !== r && (c && r && (T.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t], o = i && !Array.isArray(n) ? [] : i || T.isPlainObject(n) ? n : {}, i = !1, s[t] = T.extend(c, o, r)) : void 0 !== r && (s[t] = r));
        }
      }

      return s;
    }, T.extend({
      expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function error(e) {
        throw new Error(e);
      },
      noop: function noop() {},
      isPlainObject: function isPlainObject(e) {
        var t, n;
        return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && f.call(n) === g);
      },
      isEmptyObject: function isEmptyObject(e) {
        var t;

        for (t in e) {
          return !1;
        }

        return !0;
      },
      globalEval: function globalEval(e, t, n) {
        w(e, {
          nonce: t && t.nonce
        }, n);
      },
      each: function each(e, t) {
        var n,
            r = 0;
        if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {
          ;
        } else for (r in e) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
        return e;
      },
      makeArray: function makeArray(e, t) {
        var n = t || [];
        return null != e && (C(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
      },
      inArray: function inArray(e, t, n) {
        return null == t ? -1 : u.call(t, e, n);
      },
      merge: function merge(e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
          e[i++] = t[r];
        }

        return e.length = i, e;
      },
      grep: function grep(e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) {
          !t(e[i], i) !== s && r.push(e[i]);
        }

        return r;
      },
      map: function map(e, t, n) {
        var r,
            i,
            o = 0,
            s = [];
        if (C(e)) for (r = e.length; o < r; o++) {
          null != (i = t(e[o], o, n)) && s.push(i);
        } else for (o in e) {
          null != (i = t(e[o], o, n)) && s.push(i);
        }
        return l(s);
      },
      guid: 1,
      support: m
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      d["[object " + t + "]"] = t.toLowerCase();
    });

    var A =
    /*!
     * Sizzle CSS Selector Engine v2.3.6
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2021-02-16
     */
    function (e) {
      var t,
          n,
          r,
          i,
          o,
          s,
          a,
          l,
          c,
          u,
          d,
          p,
          h,
          f,
          g,
          m,
          v,
          y,
          b,
          x = "sizzle" + 1 * new Date(),
          w = e.document,
          _ = 0,
          T = 0,
          C = le(),
          A = le(),
          S = le(),
          $ = le(),
          E = function E(e, t) {
        return e === t && (d = !0), 0;
      },
          D = {}.hasOwnProperty,
          k = [],
          j = k.pop,
          L = k.push,
          O = k.push,
          q = k.slice,
          N = function N(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          if (e[n] === t) return n;
        }

        return -1;
      },
          P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          H = "[\\x20\\t\\r\\n\\f]",
          I = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          R = "\\[" + H + "*(" + I + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + H + "*\\]",
          M = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
          z = new RegExp(H + "+", "g"),
          U = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
          W = new RegExp("^" + H + "*," + H + "*"),
          F = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
          B = new RegExp(H + "|>"),
          G = new RegExp(M),
          Y = new RegExp("^" + I + "$"),
          V = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + R),
        PSEUDO: new RegExp("^" + M),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
      },
          X = /HTML$/i,
          K = /^(?:input|select|textarea|button)$/i,
          Z = /^h\d$/i,
          Q = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
          ne = function ne(e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
          re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ie = function ie(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
          oe = function oe() {
        p();
      },
          se = xe(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });

      try {
        O.apply(k = q.call(w.childNodes), w.childNodes), k[w.childNodes.length].nodeType;
      } catch (e) {
        O = {
          apply: k.length ? function (e, t) {
            L.apply(e, q.call(t));
          } : function (e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];) {
              ;
            }

            e.length = n - 1;
          }
        };
      }

      function ae(e, t, r, i) {
        var o,
            a,
            c,
            u,
            d,
            f,
            v,
            y = t && t.ownerDocument,
            w = t ? t.nodeType : 9;
        if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;

        if (!i && (p(t), t = t || h, g)) {
          if (11 !== w && (d = J.exec(e))) if (o = d[1]) {
            if (9 === w) {
              if (!(c = t.getElementById(o))) return r;
              if (c.id === o) return r.push(c), r;
            } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return r.push(c), r;
          } else {
            if (d[2]) return O.apply(r, t.getElementsByTagName(e)), r;
            if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(o)), r;
          }

          if (n.qsa && !$[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
            if (v = e, y = t, 1 === w && (B.test(e) || F.test(e))) {
              for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(re, ie) : t.setAttribute("id", u = x)), a = (f = s(e)).length; a--;) {
                f[a] = (u ? "#" + u : ":scope") + " " + be(f[a]);
              }

              v = f.join(",");
            }

            try {
              return O.apply(r, y.querySelectorAll(v)), r;
            } catch (t) {
              $(e, !0);
            } finally {
              u === x && t.removeAttribute("id");
            }
          }
        }

        return l(e.replace(U, "$1"), t, r, i);
      }

      function le() {
        var e = [];
        return function t(n, i) {
          return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
        };
      }

      function ce(e) {
        return e[x] = !0, e;
      }

      function ue(e) {
        var t = h.createElement("fieldset");

        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }

      function de(e, t) {
        for (var n = e.split("|"), i = n.length; i--;) {
          r.attrHandle[n[i]] = t;
        }
      }

      function pe(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) for (; n = n.nextSibling;) {
          if (n === t) return -1;
        }
        return e ? 1 : -1;
      }

      function he(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }

      function fe(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }

      function ge(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e;
        };
      }

      function me(e) {
        return ce(function (t) {
          return t = +t, ce(function (n, r) {
            for (var i, o = e([], n.length, t), s = o.length; s--;) {
              n[i = o[s]] && (n[i] = !(r[i] = n[i]));
            }
          });
        });
      }

      function ve(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }

      for (t in n = ae.support = {}, o = ae.isXML = function (e) {
        var t = e && e.namespaceURI,
            n = e && (e.ownerDocument || e).documentElement;
        return !X.test(t || n && n.nodeName || "HTML");
      }, p = ae.setDocument = function (e) {
        var t,
            i,
            s = e ? e.ownerDocument || e : w;
        return s != h && 9 === s.nodeType && s.documentElement ? (f = (h = s).documentElement, g = !o(h), w != h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ue(function (e) {
          return f.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
        }), n.attributes = ue(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), n.getElementsByTagName = ue(function (e) {
          return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
        }), n.getElementsByClassName = Q.test(h.getElementsByClassName), n.getById = ue(function (e) {
          return f.appendChild(e).id = x, !h.getElementsByName || !h.getElementsByName(x).length;
        }), n.getById ? (r.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            return e.getAttribute("id") === t;
          };
        }, r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n = t.getElementById(e);
            return n ? [n] : [];
          }
        }) : (r.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t;
          };
        }, r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n,
                r,
                i,
                o = t.getElementById(e);

            if (o) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];

              for (i = t.getElementsByName(e), r = 0; o = i[r++];) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
              }
            }

            return [];
          }
        }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var n,
              r = [],
              i = 0,
              o = t.getElementsByTagName(e);

          if ("*" === e) {
            for (; n = o[i++];) {
              1 === n.nodeType && r.push(n);
            }

            return r;
          }

          return o;
        }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
        }, v = [], m = [], (n.qsa = Q.test(h.querySelectorAll)) && (ue(function (e) {
          var t;
          f.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]");
        }), ue(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = h.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
        })), (n.matchesSelector = Q.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ue(function (e) {
          n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M);
        }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(f.compareDocumentPosition), b = t || Q.test(f.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;
          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) {
            if (t === e) return !0;
          }
          return !1;
        }, E = t ? function (e, t) {
          if (e === t) return d = !0, 0;
          var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == h || e.ownerDocument == w && b(w, e) ? -1 : t == h || t.ownerDocument == w && b(w, t) ? 1 : u ? N(u, e) - N(u, t) : 0 : 4 & r ? -1 : 1);
        } : function (e, t) {
          if (e === t) return d = !0, 0;
          var n,
              r = 0,
              i = e.parentNode,
              o = t.parentNode,
              s = [e],
              a = [t];
          if (!i || !o) return e == h ? -1 : t == h ? 1 : i ? -1 : o ? 1 : u ? N(u, e) - N(u, t) : 0;
          if (i === o) return pe(e, t);

          for (n = e; n = n.parentNode;) {
            s.unshift(n);
          }

          for (n = t; n = n.parentNode;) {
            a.unshift(n);
          }

          for (; s[r] === a[r];) {
            r++;
          }

          return r ? pe(s[r], a[r]) : s[r] == w ? -1 : a[r] == w ? 1 : 0;
        }, h) : h;
      }, ae.matches = function (e, t) {
        return ae(e, null, null, t);
      }, ae.matchesSelector = function (e, t) {
        if (p(e), n.matchesSelector && g && !$[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
          var r = y.call(e, t);
          if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
        } catch (e) {
          $(t, !0);
        }
        return ae(t, h, null, [e]).length > 0;
      }, ae.contains = function (e, t) {
        return (e.ownerDocument || e) != h && p(e), b(e, t);
      }, ae.attr = function (e, t) {
        (e.ownerDocument || e) != h && p(e);
        var i = r.attrHandle[t.toLowerCase()],
            o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
        return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
      }, ae.escape = function (e) {
        return (e + "").replace(re, ie);
      }, ae.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, ae.uniqueSort = function (e) {
        var t,
            r = [],
            i = 0,
            o = 0;

        if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(E), d) {
          for (; t = e[o++];) {
            t === e[o] && (i = r.push(o));
          }

          for (; i--;) {
            e.splice(r[i], 1);
          }
        }

        return u = null, e;
      }, i = ae.getText = function (e) {
        var t,
            n = "",
            r = 0,
            o = e.nodeType;

        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;

            for (e = e.firstChild; e; e = e.nextSibling) {
              n += i(e);
            }
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; t = e[r++];) {
          n += i(t);
        }

        return n;
      }, (r = ae.selectors = {
        cacheLength: 50,
        createPseudo: ce,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function ATTR(e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function CHILD(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e;
          },
          PSEUDO: function PSEUDO(e) {
            var t,
                n = !e[6] && e[2];
            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          }
        },
        filter: {
          TAG: function TAG(e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          },
          CLASS: function CLASS(e) {
            var t = C[e + " "];
            return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && C(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR: function ATTR(e, t, n) {
            return function (r) {
              var i = ae.attr(r, e);
              return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(z, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function CHILD(e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t;
            return 1 === r && 0 === i ? function (e) {
              return !!e.parentNode;
            } : function (t, n, l) {
              var c,
                  u,
                  d,
                  p,
                  h,
                  f,
                  g = o !== s ? "nextSibling" : "previousSibling",
                  m = t.parentNode,
                  v = a && t.nodeName.toLowerCase(),
                  y = !l && !a,
                  b = !1;

              if (m) {
                if (o) {
                  for (; g;) {
                    for (p = t; p = p[g];) {
                      if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                    }

                    f = g = "only" === e && !f && "nextSibling";
                  }

                  return !0;
                }

                if (f = [s ? m.firstChild : m.lastChild], s && y) {
                  for (b = (h = (c = (u = (d = (p = m)[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === _ && c[1]) && c[2], p = h && m.childNodes[h]; p = ++h && p && p[g] || (b = h = 0) || f.pop();) {
                    if (1 === p.nodeType && ++b && p === t) {
                      u[e] = [_, h, b];
                      break;
                    }
                  }
                } else if (y && (b = h = (c = (u = (d = (p = t)[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === _ && c[1]), !1 === b) for (; (p = ++h && p && p[g] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [_, b]), p !== t));) {
                  ;
                }

                return (b -= i) === r || b % r == 0 && b / r >= 0;
              }
            };
          },
          PSEUDO: function PSEUDO(e, t) {
            var n,
                i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
            return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function (e, n) {
              for (var r, o = i(e, t), s = o.length; s--;) {
                e[r = N(e, o[s])] = !(n[r] = o[s]);
              }
            }) : function (e) {
              return i(e, 0, n);
            }) : i;
          }
        },
        pseudos: {
          not: ce(function (e) {
            var t = [],
                n = [],
                r = a(e.replace(U, "$1"));
            return r[x] ? ce(function (e, t, n, i) {
              for (var o, s = r(e, null, i, []), a = e.length; a--;) {
                (o = s[a]) && (e[a] = !(t[a] = o));
              }
            }) : function (e, i, o) {
              return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
            };
          }),
          has: ce(function (e) {
            return function (t) {
              return ae(e, t).length > 0;
            };
          }),
          contains: ce(function (e) {
            return e = e.replace(te, ne), function (t) {
              return (t.textContent || i(t)).indexOf(e) > -1;
            };
          }),
          lang: ce(function (e) {
            return Y.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
              var n;

              do {
                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
              } while ((t = t.parentNode) && 1 === t.nodeType);

              return !1;
            };
          }),
          target: function target(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function root(e) {
            return e === f;
          },
          focus: function focus(e) {
            return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function checked(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected;
          },
          selected: function selected(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function empty(e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (e.nodeType < 6) return !1;
            }

            return !0;
          },
          parent: function parent(e) {
            return !r.pseudos.empty(e);
          },
          header: function header(e) {
            return Z.test(e.nodeName);
          },
          input: function input(e) {
            return K.test(e.nodeName);
          },
          button: function button(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t;
          },
          text: function text(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: me(function () {
            return [0];
          }),
          last: me(function (e, t) {
            return [t - 1];
          }),
          eq: me(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: me(function (e, t) {
            for (var n = 0; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          odd: me(function (e, t) {
            for (var n = 1; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          lt: me(function (e, t, n) {
            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) {
              e.push(r);
            }

            return e;
          }),
          gt: me(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) {
              e.push(r);
            }

            return e;
          })
        }
      }).pseudos.nth = r.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) {
        r.pseudos[t] = he(t);
      }

      for (t in {
        submit: !0,
        reset: !0
      }) {
        r.pseudos[t] = fe(t);
      }

      function ye() {}

      function be(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) {
          r += e[t].value;
        }

        return r;
      }

      function xe(e, t, n) {
        var r = t.dir,
            i = t.next,
            o = i || r,
            s = n && "parentNode" === o,
            a = T++;
        return t.first ? function (t, n, i) {
          for (; t = t[r];) {
            if (1 === t.nodeType || s) return e(t, n, i);
          }

          return !1;
        } : function (t, n, l) {
          var c,
              u,
              d,
              p = [_, a];

          if (l) {
            for (; t = t[r];) {
              if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            }
          } else for (; t = t[r];) {
            if (1 === t.nodeType || s) if (u = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
              if ((c = u[o]) && c[0] === _ && c[1] === a) return p[2] = c[2];
              if (u[o] = p, p[2] = e(t, n, l)) return !0;
            }
          }

          return !1;
        };
      }

      function we(e) {
        return e.length > 1 ? function (t, n, r) {
          for (var i = e.length; i--;) {
            if (!e[i](t, n, r)) return !1;
          }

          return !0;
        } : e[0];
      }

      function _e(e, t, n, r, i) {
        for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) {
          (o = e[a]) && (n && !n(o, r, i) || (s.push(o), c && t.push(a)));
        }

        return s;
      }

      function Te(e, t, n, r, i, o) {
        return r && !r[x] && (r = Te(r)), i && !i[x] && (i = Te(i, o)), ce(function (o, s, a, l) {
          var c,
              u,
              d,
              p = [],
              h = [],
              f = s.length,
              g = o || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) {
              ae(e, t[r], n);
            }

            return n;
          }(t || "*", a.nodeType ? [a] : a, []),
              m = !e || !o && t ? g : _e(g, p, e, a, l),
              v = n ? i || (o ? e : f || r) ? [] : s : m;

          if (n && n(m, v, a, l), r) for (c = _e(v, h), r(c, [], a, l), u = c.length; u--;) {
            (d = c[u]) && (v[h[u]] = !(m[h[u]] = d));
          }

          if (o) {
            if (i || e) {
              if (i) {
                for (c = [], u = v.length; u--;) {
                  (d = v[u]) && c.push(m[u] = d);
                }

                i(null, v = [], c, l);
              }

              for (u = v.length; u--;) {
                (d = v[u]) && (c = i ? N(o, d) : p[u]) > -1 && (o[c] = !(s[c] = d));
              }
            }
          } else v = _e(v === s ? v.splice(f, v.length) : v), i ? i(null, s, v, l) : O.apply(s, v);
        });
      }

      function Ce(e) {
        for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], l = s ? 1 : 0, u = xe(function (e) {
          return e === t;
        }, a, !0), d = xe(function (e) {
          return N(t, e) > -1;
        }, a, !0), p = [function (e, n, r) {
          var i = !s && (r || n !== c) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
          return t = null, i;
        }]; l < o; l++) {
          if (n = r.relative[e[l].type]) p = [xe(we(p), n)];else {
            if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
              for (i = ++l; i < o && !r.relative[e[i].type]; i++) {
                ;
              }

              return Te(l > 1 && we(p), l > 1 && be(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(U, "$1"), n, l < i && Ce(e.slice(l, i)), i < o && Ce(e = e.slice(i)), i < o && be(e));
            }

            p.push(n);
          }
        }

        return we(p);
      }

      return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), s = ae.tokenize = function (e, t) {
        var n,
            i,
            o,
            s,
            a,
            l,
            c,
            u = A[e + " "];
        if (u) return t ? 0 : u.slice(0);

        for (a = e, l = [], c = r.preFilter; a;) {
          for (s in n && !(i = W.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), n = !1, (i = F.exec(a)) && (n = i.shift(), o.push({
            value: n,
            type: i[0].replace(U, " ")
          }), a = a.slice(n.length)), r.filter) {
            !(i = V[s].exec(a)) || c[s] && !(i = c[s](i)) || (n = i.shift(), o.push({
              value: n,
              type: s,
              matches: i
            }), a = a.slice(n.length));
          }

          if (!n) break;
        }

        return t ? a.length : a ? ae.error(e) : A(e, l).slice(0);
      }, a = ae.compile = function (e, t) {
        var n,
            i = [],
            o = [],
            a = S[e + " "];

        if (!a) {
          for (t || (t = s(e)), n = t.length; n--;) {
            (a = Ce(t[n]))[x] ? i.push(a) : o.push(a);
          }

          (a = S(e, function (e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function o(_o, s, a, l, u) {
              var d,
                  f,
                  m,
                  v = 0,
                  y = "0",
                  b = _o && [],
                  x = [],
                  w = c,
                  T = _o || i && r.find.TAG("*", u),
                  C = _ += null == w ? 1 : Math.random() || .1,
                  A = T.length;

              for (u && (c = s == h || s || u); y !== A && null != (d = T[y]); y++) {
                if (i && d) {
                  for (f = 0, s || d.ownerDocument == h || (p(d), a = !g); m = e[f++];) {
                    if (m(d, s || h, a)) {
                      l.push(d);
                      break;
                    }
                  }

                  u && (_ = C);
                }

                n && ((d = !m && d) && v--, _o && b.push(d));
              }

              if (v += y, n && y !== v) {
                for (f = 0; m = t[f++];) {
                  m(b, x, s, a);
                }

                if (_o) {
                  if (v > 0) for (; y--;) {
                    b[y] || x[y] || (x[y] = j.call(l));
                  }
                  x = _e(x);
                }

                O.apply(l, x), u && !_o && x.length > 0 && v + t.length > 1 && ae.uniqueSort(l);
              }

              return u && (_ = C, c = w), b;
            };

            return n ? ce(o) : o;
          }(o, i))).selector = e;
        }

        return a;
      }, l = ae.select = function (e, t, n, i) {
        var o,
            l,
            c,
            u,
            d,
            p = "function" == typeof e && e,
            h = !i && s(e = p.selector || e);

        if (n = n || [], 1 === h.length) {
          if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
            if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
            p && (t = t.parentNode), e = e.slice(l.shift().value.length);
          }

          for (o = V.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !r.relative[u = c.type]);) {
            if ((d = r.find[u]) && (i = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
              if (l.splice(o, 1), !(e = i.length && be(l))) return O.apply(n, i), n;
              break;
            }
          }
        }

        return (p || a(e, h))(i, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n;
      }, n.sortStable = x.split("").sort(E).join("") === x, n.detectDuplicates = !!d, p(), n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
      }), ue(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || de("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), n.attributes && ue(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || de("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), ue(function (e) {
        return null == e.getAttribute("disabled");
      }) || de(P, function (e, t, n) {
        var r;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }), ae;
    }(n);

    T.find = A, T.expr = A.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = A.uniqueSort, T.text = A.getText, T.isXMLDoc = A.isXML, T.contains = A.contains, T.escapeSelector = A.escape;

    var S = function S(e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (i && T(e).is(n)) break;
          r.push(e);
        }
      }

      return r;
    },
        $ = function $(e, t) {
      for (var n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }

      return n;
    },
        E = T.expr.match.needsContext;

    function D(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }

    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) {
      return v(t) ? T.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      }) : t.nodeType ? T.grep(e, function (e) {
        return e === t !== n;
      }) : "string" != typeof t ? T.grep(e, function (e) {
        return u.call(t, e) > -1 !== n;
      }) : T.filter(t, e, n);
    }

    T.filter = function (e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, T.fn.extend({
      find: function find(e) {
        var t,
            n,
            r = this.length,
            i = this;
        if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
          for (t = 0; t < r; t++) {
            if (T.contains(i[t], this)) return !0;
          }
        }));

        for (n = this.pushStack([]), t = 0; t < r; t++) {
          T.find(e, i[t], n);
        }

        return r > 1 ? T.uniqueSort(n) : n;
      },
      filter: function filter(e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function not(e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function is(e) {
        return !!j(this, "string" == typeof e && E.test(e) ? T(e) : e || [], !1).length;
      }
    });
    var L,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;

      if (n = n || L, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

        if (r[1]) {
          if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), k.test(r[1]) && T.isPlainObject(t)) for (r in t) {
            v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          }
          return this;
        }

        return (i = b.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
      }

      return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
    }).prototype = T.fn, L = T(b);
    var q = /^(?:parents|prev(?:Until|All))/,
        N = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

    function P(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) {
        ;
      }

      return e;
    }

    T.fn.extend({
      has: function has(e) {
        var t = T(e, this),
            n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) {
            if (T.contains(this, t[e])) return !0;
          }
        });
      },
      closest: function closest(e, t) {
        var n,
            r = 0,
            i = this.length,
            o = [],
            s = "string" != typeof e && T(e);
        if (!E.test(e)) for (; r < i; r++) {
          for (n = this[r]; n && n !== t; n = n.parentNode) {
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
          }
        }
        return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
      },
      index: function index(e) {
        return e ? "string" == typeof e ? u.call(T(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function add(e, t) {
        return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
      },
      addBack: function addBack(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }), T.each({
      parent: function parent(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function parents(e) {
        return S(e, "parentNode");
      },
      parentsUntil: function parentsUntil(e, t, n) {
        return S(e, "parentNode", n);
      },
      next: function next(e) {
        return P(e, "nextSibling");
      },
      prev: function prev(e) {
        return P(e, "previousSibling");
      },
      nextAll: function nextAll(e) {
        return S(e, "nextSibling");
      },
      prevAll: function prevAll(e) {
        return S(e, "previousSibling");
      },
      nextUntil: function nextUntil(e, t, n) {
        return S(e, "nextSibling", n);
      },
      prevUntil: function prevUntil(e, t, n) {
        return S(e, "previousSibling", n);
      },
      siblings: function siblings(e) {
        return $((e.parentNode || {}).firstChild, e);
      },
      children: function children(e) {
        return $(e.firstChild);
      },
      contents: function contents(e) {
        return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e), T.merge([], e.childNodes));
      }
    }, function (e, t) {
      T.fn[e] = function (n, r) {
        var i = T.map(this, t, n);
        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = T.filter(r, i)), this.length > 1 && (N[e] || T.uniqueSort(i), q.test(e) && i.reverse()), this.pushStack(i);
      };
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function I(e) {
      return e;
    }

    function R(e) {
      throw e;
    }

    function M(e, t, n, r) {
      var i;

      try {
        e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }

    T.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};
        return T.each(e.match(H) || [], function (e, n) {
          t[n] = !0;
        }), t;
      }(e) : T.extend({}, e);

      var t,
          n,
          r,
          i,
          o = [],
          s = [],
          a = -1,
          l = function l() {
        for (i = i || e.once, r = t = !0; s.length; a = -1) {
          for (n = s.shift(); ++a < o.length;) {
            !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
          }
        }

        e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
      },
          c = {
        add: function add() {
          return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
            T.each(n, function (n, r) {
              v(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== _(r) && t(r);
            });
          }(arguments), n && !t && l()), this;
        },
        remove: function remove() {
          return T.each(arguments, function (e, t) {
            for (var n; (n = T.inArray(t, o, n)) > -1;) {
              o.splice(n, 1), n <= a && a--;
            }
          }), this;
        },
        has: function has(e) {
          return e ? T.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function empty() {
          return o && (o = []), this;
        },
        disable: function disable() {
          return i = s = [], o = n = "", this;
        },
        disabled: function disabled() {
          return !o;
        },
        lock: function lock() {
          return i = s = [], n || t || (o = n = ""), this;
        },
        locked: function locked() {
          return !!i;
        },
        fireWith: function fireWith(e, n) {
          return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
        },
        fire: function fire() {
          return c.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!r;
        }
      };

      return c;
    }, T.extend({
      Deferred: function Deferred(e) {
        var t = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
            r = "pending",
            i = {
          state: function state() {
            return r;
          },
          always: function always() {
            return o.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return i.then(null, e);
          },
          pipe: function pipe() {
            var e = arguments;
            return T.Deferred(function (n) {
              T.each(t, function (t, r) {
                var i = v(e[r[4]]) && e[r[4]];
                o[r[1]](function () {
                  var e = i && i.apply(this, arguments);
                  e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          then: function then(e, r, i) {
            var o = 0;

            function s(e, t, r, i) {
              return function () {
                var a = this,
                    l = arguments,
                    c = function c() {
                  var n, c;

                  if (!(e < o)) {
                    if ((n = r.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                    c = n && ("object" == _typeof(n) || "function" == typeof n) && n.then, v(c) ? i ? c.call(n, s(o, t, I, i), s(o, t, R, i)) : (o++, c.call(n, s(o, t, I, i), s(o, t, R, i), s(o, t, I, t.notifyWith))) : (r !== I && (a = void 0, l = [n]), (i || t.resolveWith)(a, l));
                  }
                },
                    u = i ? c : function () {
                  try {
                    c();
                  } catch (n) {
                    T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= o && (r !== R && (a = void 0, l = [n]), t.rejectWith(a, l));
                  }
                };

                e ? u() : (T.Deferred.getStackHook && (u.stackTrace = T.Deferred.getStackHook()), n.setTimeout(u));
              };
            }

            return T.Deferred(function (n) {
              t[0][3].add(s(0, n, v(i) ? i : I, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : I)), t[2][3].add(s(0, n, v(r) ? r : R));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? T.extend(e, i) : i;
          }
        },
            o = {};
        return T.each(t, function (e, n) {
          var s = n[2],
              a = n[5];
          i[n[1]] = s.add, a && s.add(function () {
            r = a;
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), o[n[0]] = function () {
            return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
          }, o[n[0] + "With"] = s.fireWith;
        }), i.promise(o), e && e.call(o, o), o;
      },
      when: function when(e) {
        var t = arguments.length,
            n = t,
            r = Array(n),
            i = a.call(arguments),
            o = T.Deferred(),
            s = function s(e) {
          return function (n) {
            r[e] = this, i[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(r, i);
          };
        };

        if (t <= 1 && (M(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();

        for (; n--;) {
          M(i[n], s(n), o.reject);
        }

        return o.promise();
      }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function (e, t) {
      n.console && n.console.warn && e && z.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, T.readyException = function (e) {
      n.setTimeout(function () {
        throw e;
      });
    };
    var U = T.Deferred();

    function W() {
      b.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), T.ready();
    }

    T.fn.ready = function (e) {
      return U.then(e)["catch"](function (e) {
        T.readyException(e);
      }), this;
    }, T.extend({
      isReady: !1,
      readyWait: 1,
      ready: function ready(e) {
        (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || U.resolveWith(b, [T]));
      }
    }), T.ready.then = U.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(T.ready) : (b.addEventListener("DOMContentLoaded", W), n.addEventListener("load", W));

    var F = function F(e, t, n, r, i, o, s) {
      var a = 0,
          l = e.length,
          c = null == n;
      if ("object" === _(n)) for (a in i = !0, n) {
        F(e, t, a, n[a], !0, o, s);
      } else if (void 0 !== r && (i = !0, v(r) || (s = !0), c && (s ? (t.call(e, r), t = null) : (c = t, t = function t(e, _t2, n) {
        return c.call(T(e), n);
      })), t)) for (; a < l; a++) {
        t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      }
      return i ? e : c ? t.call(e) : l ? t(e[0], n) : o;
    },
        B = /^-ms-/,
        G = /-([a-z])/g;

    function Y(e, t) {
      return t.toUpperCase();
    }

    function V(e) {
      return e.replace(B, "ms-").replace(G, Y);
    }

    var X = function X(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function K() {
      this.expando = T.expando + K.uid++;
    }

    K.uid = 1, K.prototype = {
      cache: function cache(e) {
        var t = e[this.expando];
        return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function set(e, t, n) {
        var r,
            i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
          i[V(r)] = t[r];
        }
        return i;
      },
      get: function get(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
      },
      access: function access(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function remove(e, t) {
        var n,
            r = e[this.expando];

        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(H) || []).length;

            for (; n--;) {
              delete r[t[n]];
            }
          }

          (void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function hasData(e) {
        var t = e[this.expando];
        return void 0 !== t && !T.isEmptyObject(t);
      }
    };
    var Z = new K(),
        Q = new K(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = function (e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e);
          }(n);
        } catch (e) {}

        Q.set(e, t, n);
      } else n = void 0;
      return n;
    }

    T.extend({
      hasData: function hasData(e) {
        return Q.hasData(e) || Z.hasData(e);
      },
      data: function data(e, t, n) {
        return Q.access(e, t, n);
      },
      removeData: function removeData(e, t) {
        Q.remove(e, t);
      },
      _data: function _data(e, t, n) {
        return Z.access(e, t, n);
      },
      _removeData: function _removeData(e, t) {
        Z.remove(e, t);
      }
    }), T.fn.extend({
      data: function data(e, t) {
        var n,
            r,
            i,
            o = this[0],
            s = o && o.attributes;

        if (void 0 === e) {
          if (this.length && (i = Q.get(o), 1 === o.nodeType && !Z.get(o, "hasDataAttrs"))) {
            for (n = s.length; n--;) {
              s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = V(r.slice(5)), te(o, r, i[r]));
            }

            Z.set(o, "hasDataAttrs", !0);
          }

          return i;
        }

        return "object" == _typeof(e) ? this.each(function () {
          Q.set(this, e);
        }) : F(this, function (t) {
          var n;
          if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) || void 0 !== (n = te(o, e)) ? n : void 0;
          this.each(function () {
            Q.set(this, e, t);
          });
        }, null, t, arguments.length > 1, null, !0);
      },
      removeData: function removeData(e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      }
    }), T.extend({
      queue: function queue(e, t, n) {
        var r;
        if (e) return t = (t || "fx") + "queue", r = Z.get(e, t), n && (!r || Array.isArray(n) ? r = Z.access(e, t, T.makeArray(n)) : r.push(n)), r || [];
      },
      dequeue: function dequeue(e, t) {
        t = t || "fx";

        var n = T.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = T._queueHooks(e, t);

        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
          T.dequeue(e, t);
        }, o)), !r && o && o.empty.fire();
      },
      _queueHooks: function _queueHooks(e, t) {
        var n = t + "queueHooks";
        return Z.get(e, n) || Z.access(e, n, {
          empty: T.Callbacks("once memory").add(function () {
            Z.remove(e, [t + "queue", n]);
          })
        });
      }
    }), T.fn.extend({
      queue: function queue(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = T.queue(this, e, t);
          T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
        });
      },
      dequeue: function dequeue(e) {
        return this.each(function () {
          T.dequeue(this, e);
        });
      },
      clearQueue: function clearQueue(e) {
        return this.queue(e || "fx", []);
      },
      promise: function promise(e, t) {
        var n,
            r = 1,
            i = T.Deferred(),
            o = this,
            s = this.length,
            a = function a() {
          --r || i.resolveWith(o, [o]);
        };

        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
          (n = Z.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
        }

        return a(), i.promise(t);
      }
    });

    var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        oe = b.documentElement,
        se = function se(e) {
      return T.contains(e.ownerDocument, e);
    },
        ae = {
      composed: !0
    };

    oe.getRootNode && (se = function se(e) {
      return T.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
    });

    var le = function le(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === T.css(e, "display");
    };

    function ce(e, t, n, r) {
      var i,
          o,
          s = 20,
          a = r ? function () {
        return r.cur();
      } : function () {
        return T.css(e, t, "");
      },
          l = a(),
          c = n && n[3] || (T.cssNumber[t] ? "" : "px"),
          u = e.nodeType && (T.cssNumber[t] || "px" !== c && +l) && re.exec(T.css(e, t));

      if (u && u[3] !== c) {
        for (l /= 2, c = c || u[3], u = +l || 1; s--;) {
          T.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
        }

        u *= 2, T.style(e, t, u + c), n = n || [];
      }

      return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i;
    }

    var ue = {};

    function de(e) {
      var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = ue[r];
      return i || (t = n.body.appendChild(n.createElement(r)), i = T.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ue[r] = i, i);
    }

    function pe(e, t) {
      for (var n, r, i = [], o = 0, s = e.length; o < s; o++) {
        (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Z.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && le(r) && (i[o] = de(r))) : "none" !== n && (i[o] = "none", Z.set(r, "display", n)));
      }

      for (o = 0; o < s; o++) {
        null != i[o] && (e[o].style.display = i[o]);
      }

      return e;
    }

    T.fn.extend({
      show: function show() {
        return pe(this, !0);
      },
      hide: function hide() {
        return pe(this);
      },
      toggle: function toggle(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          le(this) ? T(this).show() : T(this).hide();
        });
      }
    });
    var he,
        fe,
        ge = /^(?:checkbox|radio)$/i,
        me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ve = /^$|^module$|\/(?:java|ecma)script/i;
    he = b.createDocumentFragment().appendChild(b.createElement("div")), (fe = b.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), he.appendChild(fe), m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue, he.innerHTML = "<option></option>", m.option = !!he.lastChild;
    var ye = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

    function be(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? T.merge([e], n) : n;
    }

    function xe(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
      }
    }

    ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, m.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
    var we = /<|&#?\w+;/;

    function _e(e, t, n, r, i) {
      for (var o, s, a, l, c, u, d = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++) {
        if ((o = e[h]) || 0 === o) if ("object" === _(o)) T.merge(p, o.nodeType ? [o] : o);else if (we.test(o)) {
          for (s = s || d.appendChild(t.createElement("div")), a = (me.exec(o) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], u = l[0]; u--;) {
            s = s.lastChild;
          }

          T.merge(p, s.childNodes), (s = d.firstChild).textContent = "";
        } else p.push(t.createTextNode(o));
      }

      for (d.textContent = "", h = 0; o = p[h++];) {
        if (r && T.inArray(o, r) > -1) i && i.push(o);else if (c = se(o), s = be(d.appendChild(o), "script"), c && xe(s), n) for (u = 0; o = s[u++];) {
          ve.test(o.type || "") && n.push(o);
        }
      }

      return d;
    }

    var Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
      return !0;
    }

    function Ae() {
      return !1;
    }

    function Se(e, t) {
      return e === function () {
        try {
          return b.activeElement;
        } catch (e) {}
      }() == ("focus" === t);
    }

    function $e(e, t, n, r, i, o) {
      var s, a;

      if ("object" == _typeof(t)) {
        for (a in "string" != typeof n && (r = r || n, n = void 0), t) {
          $e(e, a, n, r, t[a], o);
        }

        return e;
      }

      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ae;else if (!i) return e;
      return 1 === o && (s = i, (i = function i(e) {
        return T().off(e), s.apply(this, arguments);
      }).guid = s.guid || (s.guid = T.guid++)), e.each(function () {
        T.event.add(this, t, i, r, n);
      });
    }

    function Ee(e, t, n) {
      n ? (Z.set(e, t, !1), T.event.add(e, t, {
        namespace: !1,
        handler: function handler(e) {
          var r,
              i,
              o = Z.get(this, t);

          if (1 & e.isTrigger && this[t]) {
            if (o.length) (T.event.special[t] || {}).delegateType && e.stopPropagation();else if (o = a.call(arguments), Z.set(this, t, o), r = n(this, t), this[t](), o !== (i = Z.get(this, t)) || r ? Z.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i && i.value;
          } else o.length && (Z.set(this, t, {
            value: T.event.trigger(T.extend(o[0], T.Event.prototype), o.slice(1), this)
          }), e.stopImmediatePropagation());
        }
      })) : void 0 === Z.get(e, t) && T.event.add(e, t, Ce);
    }

    T.event = {
      global: {},
      add: function add(e, t, n, r, i) {
        var o,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            h,
            f,
            g,
            m = Z.get(e);
        if (X(e)) for (n.handler && (n = (o = n).handler, i = o.selector), i && T.find.matchesSelector(oe, i), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function (t) {
          return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
        }), c = (t = (t || "").match(H) || [""]).length; c--;) {
          h = g = (a = Te.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), h && (d = T.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, d = T.event.special[h] || {}, u = T.extend({
            type: h,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && T.expr.match.needsContext.test(i),
            namespace: f.join(".")
          }, o), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, f, s) || e.addEventListener && e.addEventListener(h, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, u) : p.push(u), T.event.global[h] = !0);
        }
      },
      remove: function remove(e, t, n, r, i) {
        var o,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            h,
            f,
            g,
            m = Z.hasData(e) && Z.get(e);

        if (m && (l = m.events)) {
          for (c = (t = (t || "").match(H) || [""]).length; c--;) {
            if (h = g = (a = Te.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
              for (d = T.event.special[h] || {}, p = l[h = (r ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) {
                u = p[o], !i && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
              }

              s && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, m.handle) || T.removeEvent(e, h, m.handle), delete l[h]);
            } else for (h in l) {
              T.event.remove(e, h + t[c], n, r, !0);
            }
          }

          T.isEmptyObject(l) && Z.remove(e, "handle events");
        }
      },
      dispatch: function dispatch(e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            a = new Array(arguments.length),
            l = T.event.fix(e),
            c = (Z.get(this, "events") || Object.create(null))[l.type] || [],
            u = T.event.special[l.type] || {};

        for (a[0] = l, t = 1; t < arguments.length; t++) {
          a[t] = arguments[t];
        }

        if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
          for (s = T.event.handlers.call(this, l, c), t = 0; (i = s[t++]) && !l.isPropagationStopped();) {
            for (l.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();) {
              l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
            }
          }

          return u.postDispatch && u.postDispatch.call(this, l), l.result;
        }
      },
      handlers: function handlers(e, t) {
        var n,
            r,
            i,
            o,
            s,
            a = [],
            l = t.delegateCount,
            c = e.target;
        if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++) {
              void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? T(i, this).index(c) > -1 : T.find(i, this, null, [c]).length), s[i] && o.push(r);
            }

            o.length && a.push({
              elem: c,
              handlers: o
            });
          }
        }
        return c = this, l < t.length && a.push({
          elem: c,
          handlers: t.slice(l)
        }), a;
      },
      addProp: function addProp(e, t) {
        Object.defineProperty(T.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: v(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[e];
          },
          set: function set(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            });
          }
        });
      },
      fix: function fix(e) {
        return e[T.expando] ? e : new T.Event(e);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function setup(e) {
            var t = this || e;
            return ge.test(t.type) && t.click && D(t, "input") && Ee(t, "click", Ce), !1;
          },
          trigger: function trigger(e) {
            var t = this || e;
            return ge.test(t.type) && t.click && D(t, "input") && Ee(t, "click"), !0;
          },
          _default: function _default(e) {
            var t = e.target;
            return ge.test(t.type) && t.click && D(t, "input") && Z.get(t, "click") || D(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }, T.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, T.Event = function (e, t) {
      if (!(this instanceof T.Event)) return new T.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ae, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0;
    }, T.Event.prototype = {
      constructor: T.Event,
      isDefaultPrevented: Ae,
      isPropagationStopped: Ae,
      isImmediatePropagationStopped: Ae,
      isSimulated: !1,
      preventDefault: function preventDefault() {
        var e = this.originalEvent;
        this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function stopPropagation() {
        var e = this.originalEvent;
        this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, T.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: !0
    }, T.event.addProp), T.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      T.event.special[e] = {
        setup: function setup() {
          return Ee(this, e, Se), !1;
        },
        trigger: function trigger() {
          return Ee(this, e), !0;
        },
        _default: function _default() {
          return !0;
        },
        delegateType: t
      };
    }), T.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      T.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function handle(e) {
          var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
          return i && (i === r || T.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
        }
      };
    }), T.fn.extend({
      on: function on(e, t, n, r) {
        return $e(this, e, t, n, r);
      },
      one: function one(e, t, n, r) {
        return $e(this, e, t, n, r, 1);
      },
      off: function off(e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

        if ("object" == _typeof(e)) {
          for (i in e) {
            this.off(i, t, e[i]);
          }

          return this;
        }

        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ae), this.each(function () {
          T.event.remove(this, e, n, t);
        });
      }
    });
    var De = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
      return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e;
    }

    function Oe(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }

    function qe(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }

    function Ne(e, t) {
      var n, r, i, o, s, a;

      if (1 === t.nodeType) {
        if (Z.hasData(e) && (a = Z.get(e).events)) for (i in Z.remove(t, "handle events"), a) {
          for (n = 0, r = a[i].length; n < r; n++) {
            T.event.add(t, i, a[i][n]);
          }
        }
        Q.hasData(e) && (o = Q.access(e), s = T.extend({}, o), Q.set(t, s));
      }
    }

    function Pe(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }

    function He(e, t, n, r) {
      t = l(t);
      var i,
          o,
          s,
          a,
          c,
          u,
          d = 0,
          p = e.length,
          h = p - 1,
          f = t[0],
          g = v(f);
      if (g || p > 1 && "string" == typeof f && !m.checkClone && ke.test(f)) return e.each(function (i) {
        var o = e.eq(i);
        g && (t[0] = f.call(this, i, o.html())), He(o, t, n, r);
      });

      if (p && (o = (i = _e(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
        for (a = (s = T.map(be(i, "script"), Oe)).length; d < p; d++) {
          c = i, d !== h && (c = T.clone(c, !0, !0), a && T.merge(s, be(c, "script"))), n.call(e[d], c, d);
        }

        if (a) for (u = s[s.length - 1].ownerDocument, T.map(s, qe), d = 0; d < a; d++) {
          c = s[d], ve.test(c.type || "") && !Z.access(c, "globalEval") && T.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? T._evalUrl && !c.noModule && T._evalUrl(c.src, {
            nonce: c.nonce || c.getAttribute("nonce")
          }, u) : w(c.textContent.replace(je, ""), c, u));
        }
      }

      return e;
    }

    function Ie(e, t, n) {
      for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
        n || 1 !== r.nodeType || T.cleanData(be(r)), r.parentNode && (n && se(r) && xe(be(r, "script")), r.parentNode.removeChild(r));
      }

      return e;
    }

    T.extend({
      htmlPrefilter: function htmlPrefilter(e) {
        return e;
      },
      clone: function clone(e, t, n) {
        var r,
            i,
            o,
            s,
            a = e.cloneNode(!0),
            l = se(e);
        if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (s = be(a), r = 0, i = (o = be(e)).length; r < i; r++) {
          Pe(o[r], s[r]);
        }
        if (t) if (n) for (o = o || be(e), s = s || be(a), r = 0, i = o.length; r < i; r++) {
          Ne(o[r], s[r]);
        } else Ne(e, a);
        return (s = be(a, "script")).length > 0 && xe(s, !l && be(e, "script")), a;
      },
      cleanData: function cleanData(e) {
        for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++) {
          if (X(n)) {
            if (t = n[Z.expando]) {
              if (t.events) for (r in t.events) {
                i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
              }
              n[Z.expando] = void 0;
            }

            n[Q.expando] && (n[Q.expando] = void 0);
          }
        }
      }
    }), T.fn.extend({
      detach: function detach(e) {
        return Ie(this, e, !0);
      },
      remove: function remove(e) {
        return Ie(this, e);
      },
      text: function text(e) {
        return F(this, function (e) {
          return void 0 === e ? T.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      },
      append: function append() {
        return He(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
        });
      },
      prepend: function prepend() {
        return He(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function before() {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function after() {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function empty() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          1 === e.nodeType && (T.cleanData(be(e, !1)), e.textContent = "");
        }

        return this;
      },
      clone: function clone(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return T.clone(this, e, t);
        });
      },
      html: function html(e) {
        return F(this, function (e) {
          var t = this[0] || {},
              n = 0,
              r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

          if ("string" == typeof e && !De.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = T.htmlPrefilter(e);

            try {
              for (; n < r; n++) {
                1 === (t = this[n] || {}).nodeType && (T.cleanData(be(t, !1)), t.innerHTML = e);
              }

              t = 0;
            } catch (e) {}
          }

          t && this.empty().append(e);
        }, null, e, arguments.length);
      },
      replaceWith: function replaceWith() {
        var e = [];
        return He(this, arguments, function (t) {
          var n = this.parentNode;
          T.inArray(this, e) < 0 && (T.cleanData(be(this)), n && n.replaceChild(t, this));
        }, e);
      }
    }), T.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      T.fn[e] = function (e) {
        for (var n, r = [], i = T(e), o = i.length - 1, s = 0; s <= o; s++) {
          n = s === o ? this : this.clone(!0), T(i[s])[t](n), c.apply(r, n.get());
        }

        return this.pushStack(r);
      };
    });

    var Re = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        Me = function Me(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = n), t.getComputedStyle(e);
    },
        ze = function ze(e, t, n) {
      var r,
          i,
          o = {};

      for (i in t) {
        o[i] = e.style[i], e.style[i] = t[i];
      }

      for (i in r = n.call(e), t) {
        e.style[i] = o[i];
      }

      return r;
    },
        Ue = new RegExp(ie.join("|"), "i");

    function We(e, t, n) {
      var r,
          i,
          o,
          s,
          a = e.style;
      return (n = n || Me(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = T.style(e, t)), !m.pixelBoxStyles() && Re.test(s) && Ue.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s;
    }

    function Fe(e, t) {
      return {
        get: function get() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        }
      };
    }

    !function () {
      function e() {
        if (u) {
          c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(c).appendChild(u);
          var e = n.getComputedStyle(u);
          r = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), u.style.position = "absolute", o = 12 === t(u.offsetWidth / 3), oe.removeChild(c), u = null;
        }
      }

      function t(e) {
        return Math.round(parseFloat(e));
      }

      var r,
          i,
          o,
          s,
          a,
          l,
          c = b.createElement("div"),
          u = b.createElement("div");
      u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === u.style.backgroundClip, T.extend(m, {
        boxSizingReliable: function boxSizingReliable() {
          return e(), i;
        },
        pixelBoxStyles: function pixelBoxStyles() {
          return e(), s;
        },
        pixelPosition: function pixelPosition() {
          return e(), r;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return e(), l;
        },
        scrollboxSize: function scrollboxSize() {
          return e(), o;
        },
        reliableTrDimensions: function reliableTrDimensions() {
          var e, t, r, i;
          return null == a && (e = b.createElement("table"), t = b.createElement("tr"), r = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", r.style.height = "9px", r.style.display = "block", oe.appendChild(e).appendChild(t).appendChild(r), i = n.getComputedStyle(t), a = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, oe.removeChild(e)), a;
        }
      }));
    }();
    var Be = ["Webkit", "Moz", "ms"],
        Ge = b.createElement("div").style,
        Ye = {};

    function Ve(e) {
      var t = T.cssProps[e] || Ye[e];
      return t || (e in Ge ? e : Ye[e] = function (e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = Be.length; n--;) {
          if ((e = Be[n] + t) in Ge) return e;
        }
      }(e) || e);
    }

    var Xe = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Ze = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
        Qe = {
      letterSpacing: "0",
      fontWeight: "400"
    };

    function Je(e, t, n) {
      var r = re.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }

    function et(e, t, n, r, i, o) {
      var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0;
      if (n === (r ? "border" : "content")) return 0;

      for (; s < 4; s += 2) {
        "margin" === n && (l += T.css(e, n + ie[s], !0, i)), r ? ("content" === n && (l -= T.css(e, "padding" + ie[s], !0, i)), "margin" !== n && (l -= T.css(e, "border" + ie[s] + "Width", !0, i))) : (l += T.css(e, "padding" + ie[s], !0, i), "padding" !== n ? l += T.css(e, "border" + ie[s] + "Width", !0, i) : a += T.css(e, "border" + ie[s] + "Width", !0, i));
      }

      return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l;
    }

    function tt(e, t, n) {
      var r = Me(e),
          i = (!m.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r),
          o = i,
          s = We(e, t, r),
          a = "offset" + t[0].toUpperCase() + t.slice(1);

      if (Re.test(s)) {
        if (!n) return s;
        s = "auto";
      }

      return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && D(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === T.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === T.css(e, "boxSizing", !1, r), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, s) + "px";
    }

    function nt(e, t, n, r, i) {
      return new nt.prototype.init(e, t, n, r, i);
    }

    T.extend({
      cssHooks: {
        opacity: {
          get: function get(e, t) {
            if (t) {
              var n = We(e, "opacity");
              return "" === n ? "1" : n;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function style(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
              o,
              s,
              a = V(t),
              l = Ke.test(t),
              c = e.style;
          if (l || (t = Ve(a)), s = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];
          "string" === (o = _typeof(n)) && (i = re.exec(n)) && i[1] && (n = ce(e, t, i), o = "number"), null != n && n == n && ("number" !== o || l || (n += i && i[3] || (T.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n));
        }
      },
      css: function css(e, t, n, r) {
        var i,
            o,
            s,
            a = V(t);
        return Ke.test(t) || (t = Ve(a)), (s = T.cssHooks[t] || T.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
      }
    }), T.each(["height", "width"], function (e, t) {
      T.cssHooks[t] = {
        get: function get(e, n, r) {
          if (n) return !Xe.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : ze(e, Ze, function () {
            return tt(e, t, r);
          });
        },
        set: function set(e, n, r) {
          var i,
              o = Me(e),
              s = !m.scrollboxSize() && "absolute" === o.position,
              a = (s || r) && "border-box" === T.css(e, "boxSizing", !1, o),
              l = r ? et(e, t, r, a, o) : 0;
          return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)), l && (i = re.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = T.css(e, t)), Je(0, n, l);
        }
      };
    }), T.cssHooks.marginLeft = Fe(m.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), T.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      T.cssHooks[e + t] = {
        expand: function expand(n) {
          for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
            i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
          }

          return i;
        }
      }, "margin" !== e && (T.cssHooks[e + t].set = Je);
    }), T.fn.extend({
      css: function css(e, t) {
        return F(this, function (e, t, n) {
          var r,
              i,
              o = {},
              s = 0;

          if (Array.isArray(t)) {
            for (r = Me(e), i = t.length; s < i; s++) {
              o[t[s]] = T.css(e, t[s], !1, r);
            }

            return o;
          }

          return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
        }, e, t, arguments.length > 1);
      }
    }), T.Tween = nt, nt.prototype = {
      constructor: nt,
      init: function init(e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (T.cssNumber[n] ? "" : "px");
      },
      cur: function cur() {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function run(e) {
        var t,
            n = nt.propHooks[this.prop];
        return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
      }
    }, nt.prototype.init.prototype = nt.prototype, nt.propHooks = {
      _default: {
        get: function get(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        },
        set: function set(e) {
          T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }, nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
      set: function set(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, T.easing = {
      linear: function linear(e) {
        return e;
      },
      swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, T.fx = nt.prototype.init, T.fx.step = {};
    var rt,
        it,
        ot = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;

    function at() {
      it && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(at) : n.setTimeout(at, T.fx.interval), T.fx.tick());
    }

    function lt() {
      return n.setTimeout(function () {
        rt = void 0;
      }), rt = Date.now();
    }

    function ct(e, t) {
      var n,
          r = 0,
          i = {
        height: e
      };

      for (t = t ? 1 : 0; r < 4; r += 2 - t) {
        i["margin" + (n = ie[r])] = i["padding" + n] = e;
      }

      return t && (i.opacity = i.width = e), i;
    }

    function ut(e, t, n) {
      for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, s = i.length; o < s; o++) {
        if (r = i[o].call(n, t, e)) return r;
      }
    }

    function dt(e, t, n) {
      var r,
          i,
          o = 0,
          s = dt.prefilters.length,
          a = T.Deferred().always(function () {
        delete l.elem;
      }),
          l = function l() {
        if (i) return !1;

        for (var t = rt || lt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) {
          c.tweens[o].run(r);
        }

        return a.notifyWith(e, [c, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
      },
          c = a.promise({
        elem: e,
        props: T.extend({}, t),
        opts: T.extend(!0, {
          specialEasing: {},
          easing: T.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: rt || lt(),
        duration: n.duration,
        tweens: [],
        createTween: function createTween(t, n) {
          var r = T.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
          return c.tweens.push(r), r;
        },
        stop: function stop(t) {
          var n = 0,
              r = t ? c.tweens.length : 0;
          if (i) return this;

          for (i = !0; n < r; n++) {
            c.tweens[n].run(1);
          }

          return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
        }
      }),
          u = c.props;

      for (!function (e, t) {
        var n, r, i, o, s;

        for (n in e) {
          if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = T.cssHooks[r]) && ("expand" in s)) for (n in o = s.expand(o), delete e[r], o) {
            (n in e) || (e[n] = o[n], t[n] = i);
          } else t[r] = i;
        }
      }(u, c.opts.specialEasing); o < s; o++) {
        if (r = dt.prefilters[o].call(c, e, u, c.opts)) return v(r.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
      }

      return T.map(u, ut, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), T.fx.timer(T.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c;
    }

    T.Animation = T.extend(dt, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return ce(n.elem, e, re.exec(t), n), n;
        }]
      },
      tweener: function tweener(e, t) {
        v(e) ? (t = e, e = ["*"]) : e = e.match(H);

        for (var n, r = 0, i = e.length; r < i; r++) {
          n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
        }
      },
      prefilters: [function (e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            l,
            c,
            u,
            d = "width" in t || "height" in t,
            p = this,
            h = {},
            f = e.style,
            g = e.nodeType && le(e),
            m = Z.get(e, "fxshow");

        for (r in n.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
          s.unqueued || a();
        }), s.unqueued++, p.always(function () {
          p.always(function () {
            s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
          });
        })), t) {
          if (i = t[r], ot.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
              if ("show" !== i || !m || void 0 === m[r]) continue;
              g = !0;
            }

            h[r] = m && m[r] || T.style(e, r);
          }
        }

        if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(h)) for (r in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = m && m.display) && (c = Z.get(e, "display")), "none" === (u = T.css(e, "display")) && (c ? u = c : (pe([e], !0), c = e.style.display || c, u = T.css(e, "display"), pe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === T.css(e, "float") && (l || (p.done(function () {
          f.display = c;
        }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function () {
          f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
        })), l = !1, h) {
          l || (m ? "hidden" in m && (g = m.hidden) : m = Z.access(e, "fxshow", {
            display: c
          }), o && (m.hidden = !g), g && pe([e], !0), p.done(function () {
            for (r in g || pe([e]), Z.remove(e, "fxshow"), h) {
              T.style(e, r, h[r]);
            }
          })), l = ut(g ? m[r] : 0, r, p), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0));
        }
      }],
      prefilter: function prefilter(e, t) {
        t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
      }
    }), T.speed = function (e, t, n) {
      var r = e && "object" == _typeof(e) ? T.extend({}, e) : {
        complete: n || !n && t || v(e) && e,
        duration: e,
        easing: n && t || t && !v(t) && t
      };
      return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
        v(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
      }, r;
    }, T.fn.extend({
      fadeTo: function fadeTo(e, t, n, r) {
        return this.filter(le).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r);
      },
      animate: function animate(e, t, n, r) {
        var i = T.isEmptyObject(e),
            o = T.speed(t, n, r),
            s = function s() {
          var t = dt(this, T.extend({}, e), o);
          (i || Z.get(this, "finish")) && t.stop(!0);
        };

        return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
      },
      stop: function stop(e, t, n) {
        var r = function r(e) {
          var t = e.stop;
          delete e.stop, t(n);
        };

        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
              i = null != e && e + "queueHooks",
              o = T.timers,
              s = Z.get(this);
          if (i) s[i] && s[i].stop && r(s[i]);else for (i in s) {
            s[i] && s[i].stop && st.test(i) && r(s[i]);
          }

          for (i = o.length; i--;) {
            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
          }

          !t && n || T.dequeue(this, e);
        });
      },
      finish: function finish(e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t,
              n = Z.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = T.timers,
              s = r ? r.length : 0;

          for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          }

          for (t = 0; t < s; t++) {
            r[t] && r[t].finish && r[t].finish.call(this);
          }

          delete n.finish;
        });
      }
    }), T.each(["toggle", "show", "hide"], function (e, t) {
      var n = T.fn[t];

      T.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, r, i);
      };
    }), T.each({
      slideDown: ct("show"),
      slideUp: ct("hide"),
      slideToggle: ct("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, t) {
      T.fn[e] = function (e, n, r) {
        return this.animate(t, e, n, r);
      };
    }), T.timers = [], T.fx.tick = function () {
      var e,
          t = 0,
          n = T.timers;

      for (rt = Date.now(); t < n.length; t++) {
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      }

      n.length || T.fx.stop(), rt = void 0;
    }, T.fx.timer = function (e) {
      T.timers.push(e), T.fx.start();
    }, T.fx.interval = 13, T.fx.start = function () {
      it || (it = !0, at());
    }, T.fx.stop = function () {
      it = null;
    }, T.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, T.fn.delay = function (e, t) {
      return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
        var i = n.setTimeout(t, e);

        r.stop = function () {
          n.clearTimeout(i);
        };
      });
    }, function () {
      var e = b.createElement("input"),
          t = b.createElement("select").appendChild(b.createElement("option"));
      e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value;
    }();
    var pt,
        ht = T.expr.attrHandle;
    T.fn.extend({
      attr: function attr(e, t) {
        return F(this, T.attr, e, t, arguments.length > 1);
      },
      removeAttr: function removeAttr(e) {
        return this.each(function () {
          T.removeAttr(this, e);
        });
      }
    }), T.extend({
      attr: function attr(e, t, n) {
        var r,
            i,
            o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r);
      },
      attrHooks: {
        type: {
          set: function set(e, t) {
            if (!m.radioValue && "radio" === t && D(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function removeAttr(e, t) {
        var n,
            r = 0,
            i = t && t.match(H);
        if (i && 1 === e.nodeType) for (; n = i[r++];) {
          e.removeAttribute(n);
        }
      }
    }), pt = {
      set: function set(e, t, n) {
        return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ht[t] || T.find.attr;

      ht[t] = function (e, t, r) {
        var i,
            o,
            s = t.toLowerCase();
        return r || (o = ht[s], ht[s] = i, i = null != n(e, t, r) ? s : null, ht[s] = o), i;
      };
    });
    var ft = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function mt(e) {
      return (e.match(H) || []).join(" ");
    }

    function vt(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }

    function yt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || [];
    }

    T.fn.extend({
      prop: function prop(e, t) {
        return F(this, T.prop, e, t, arguments.length > 1);
      },
      removeProp: function removeProp(e) {
        return this.each(function () {
          delete this[T.propFix[e] || e];
        });
      }
    }), T.extend({
      prop: function prop(e, t, n) {
        var r,
            i,
            o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, i = T.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function get(e) {
            var t = T.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : ft.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), m.optSelected || (T.propHooks.selected = {
      get: function get(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function set(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      T.propFix[this.toLowerCase()] = this;
    }), T.fn.extend({
      addClass: function addClass(e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l = 0;
        if (v(e)) return this.each(function (t) {
          T(this).addClass(e.call(this, t, vt(this)));
        });
        if ((t = yt(e)).length) for (; n = this[l++];) {
          if (i = vt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
            for (s = 0; o = t[s++];) {
              r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            }

            i !== (a = mt(r)) && n.setAttribute("class", a);
          }
        }
        return this;
      },
      removeClass: function removeClass(e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l = 0;
        if (v(e)) return this.each(function (t) {
          T(this).removeClass(e.call(this, t, vt(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = yt(e)).length) for (; n = this[l++];) {
          if (i = vt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
            for (s = 0; o = t[s++];) {
              for (; r.indexOf(" " + o + " ") > -1;) {
                r = r.replace(" " + o + " ", " ");
              }
            }

            i !== (a = mt(r)) && n.setAttribute("class", a);
          }
        }
        return this;
      },
      toggleClass: function toggleClass(e, t) {
        var n = _typeof(e),
            r = "string" === n || Array.isArray(e);

        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function (n) {
          T(this).toggleClass(e.call(this, n, vt(this), t), t);
        }) : this.each(function () {
          var t, i, o, s;
          if (r) for (i = 0, o = T(this), s = yt(e); t = s[i++];) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          } else void 0 !== e && "boolean" !== n || ((t = vt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""));
        });
      },
      hasClass: function hasClass(e) {
        var t,
            n,
            r = 0;

        for (t = " " + e + " "; n = this[r++];) {
          if (1 === n.nodeType && (" " + mt(vt(n)) + " ").indexOf(t) > -1) return !0;
        }

        return !1;
      }
    });
    var bt = /\r/g;
    T.fn.extend({
      val: function val(e) {
        var t,
            n,
            r,
            i = this[0];
        return arguments.length ? (r = v(e), this.each(function (n) {
          var i;
          1 === this.nodeType && (null == (i = r ? e.call(this, n, T(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = T.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        })) : i ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0;
      }
    }), T.extend({
      valHooks: {
        option: {
          get: function get(e) {
            var t = T.find.attr(e, "value");
            return null != t ? t : mt(T.text(e));
          }
        },
        select: {
          get: function get(e) {
            var t,
                n,
                r,
                i = e.options,
                o = e.selectedIndex,
                s = "select-one" === e.type,
                a = s ? null : [],
                l = s ? o + 1 : i.length;

            for (r = o < 0 ? l : s ? o : 0; r < l; r++) {
              if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                if (t = T(n).val(), s) return t;
                a.push(t);
              }
            }

            return a;
          },
          set: function set(e, t) {
            for (var n, r, i = e.options, o = T.makeArray(t), s = i.length; s--;) {
              ((r = i[s]).selected = T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
            }

            return n || (e.selectedIndex = -1), o;
          }
        }
      }
    }), T.each(["radio", "checkbox"], function () {
      T.valHooks[this] = {
        set: function set(e, t) {
          if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1;
        }
      }, m.checkOn || (T.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    }), m.focusin = "onfocusin" in n;

    var xt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function wt(e) {
      e.stopPropagation();
    };

    T.extend(T.event, {
      trigger: function trigger(e, t, r, i) {
        var o,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f = [r || b],
            g = h.call(e, "type") ? e.type : e,
            m = h.call(e, "namespace") ? e.namespace.split(".") : [];

        if (s = p = a = r = r || b, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(g + T.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), c = g.indexOf(":") < 0 && "on" + g, (e = e[T.expando] ? e : new T.Event(g, "object" == _typeof(e) && e)).isTrigger = i ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : T.makeArray(t, [e]), d = T.event.special[g] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, t))) {
          if (!i && !d.noBubble && !y(r)) {
            for (l = d.delegateType || g, xt.test(l + g) || (s = s.parentNode); s; s = s.parentNode) {
              f.push(s), a = s;
            }

            a === (r.ownerDocument || b) && f.push(a.defaultView || a.parentWindow || n);
          }

          for (o = 0; (s = f[o++]) && !e.isPropagationStopped();) {
            p = s, e.type = o > 1 ? l : d.bindType || g, (u = (Z.get(s, "events") || Object.create(null))[e.type] && Z.get(s, "handle")) && u.apply(s, t), (u = c && s[c]) && u.apply && X(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
          }

          return e.type = g, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), t) || !X(r) || c && v(r[g]) && !y(r) && ((a = r[c]) && (r[c] = null), T.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, wt), r[g](), e.isPropagationStopped() && p.removeEventListener(g, wt), T.event.triggered = void 0, a && (r[c] = a)), e.result;
        }
      },
      simulate: function simulate(e, t, n) {
        var r = T.extend(new T.Event(), n, {
          type: e,
          isSimulated: !0
        });
        T.event.trigger(r, null, t);
      }
    }), T.fn.extend({
      trigger: function trigger(e, t) {
        return this.each(function () {
          T.event.trigger(e, t, this);
        });
      },
      triggerHandler: function triggerHandler(e, t) {
        var n = this[0];
        if (n) return T.event.trigger(e, t, n, !0);
      }
    }), m.focusin || T.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var n = function n(e) {
        T.event.simulate(t, e.target, T.event.fix(e));
      };

      T.event.special[t] = {
        setup: function setup() {
          var r = this.ownerDocument || this.document || this,
              i = Z.access(r, t);
          i || r.addEventListener(e, n, !0), Z.access(r, t, (i || 0) + 1);
        },
        teardown: function teardown() {
          var r = this.ownerDocument || this.document || this,
              i = Z.access(r, t) - 1;
          i ? Z.access(r, t, i) : (r.removeEventListener(e, n, !0), Z.remove(r, t));
        }
      };
    });
    var _t = n.location,
        Tt = {
      guid: Date.now()
    },
        Ct = /\?/;

    T.parseXML = function (e) {
      var t, r;
      if (!e || "string" != typeof e) return null;

      try {
        t = new n.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {}

      return r = t && t.getElementsByTagName("parsererror")[0], t && !r || T.error("Invalid XML: " + (r ? T.map(r.childNodes, function (e) {
        return e.textContent;
      }).join("\n") : e)), t;
    };

    var At = /\[\]$/,
        St = /\r?\n/g,
        $t = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;

    function Dt(e, t, n, r) {
      var i;
      if (Array.isArray(t)) T.each(t, function (t, i) {
        n || At.test(e) ? r(e, i) : Dt(e + "[" + ("object" == _typeof(i) && null != i ? t : "") + "]", i, n, r);
      });else if (n || "object" !== _(t)) r(e, t);else for (i in t) {
        Dt(e + "[" + i + "]", t[i], n, r);
      }
    }

    T.param = function (e, t) {
      var n,
          r = [],
          i = function i(e, t) {
        var n = v(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };

      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
        i(this.name, this.value);
      });else for (n in e) {
        Dt(n, e[n], t, i);
      }
      return r.join("&");
    }, T.fn.extend({
      serialize: function serialize() {
        return T.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          var e = T.prop(this, "elements");
          return e ? T.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !T(this).is(":disabled") && Et.test(this.nodeName) && !$t.test(e) && (this.checked || !ge.test(e));
        }).map(function (e, t) {
          var n = T(this).val();
          return null == n ? null : Array.isArray(n) ? T.map(n, function (e) {
            return {
              name: t.name,
              value: e.replace(St, "\r\n")
            };
          }) : {
            name: t.name,
            value: n.replace(St, "\r\n")
          };
        }).get();
      }
    });
    var kt = /%20/g,
        jt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qt = /^(?:GET|HEAD)$/,
        Nt = /^\/\//,
        Pt = {},
        Ht = {},
        It = "*/".concat("*"),
        Rt = b.createElement("a");

    function Mt(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var r,
            i = 0,
            o = t.toLowerCase().match(H) || [];
        if (v(n)) for (; r = o[i++];) {
          "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        }
      };
    }

    function zt(e, t, n, r) {
      var i = {},
          o = e === Ht;

      function s(a) {
        var l;
        return i[a] = !0, T.each(e[a] || [], function (e, a) {
          var c = a(t, n, r);
          return "string" != typeof c || o || i[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1);
        }), l;
      }

      return s(t.dataTypes[0]) || !i["*"] && s("*");
    }

    function Ut(e, t) {
      var n,
          r,
          i = T.ajaxSettings.flatOptions || {};

      for (n in t) {
        void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      }

      return r && T.extend(!0, e, r), e;
    }

    Rt.href = _t.href, T.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: _t.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": T.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function ajaxSetup(e, t) {
        return t ? Ut(Ut(e, T.ajaxSettings), t) : Ut(T.ajaxSettings, e);
      },
      ajaxPrefilter: Mt(Pt),
      ajaxTransport: Mt(Ht),
      ajax: function ajax(e, t) {
        "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
        var r,
            i,
            o,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            h = T.ajaxSetup({}, t),
            f = h.context || h,
            g = h.context && (f.nodeType || f.jquery) ? T(f) : T.event,
            m = T.Deferred(),
            v = T.Callbacks("once memory"),
            y = h.statusCode || {},
            x = {},
            w = {},
            _ = "canceled",
            C = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;

            if (c) {
              if (!s) for (s = {}; t = Ot.exec(o);) {
                s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = s[e.toLowerCase() + " "];
            }

            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return c ? o : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == c && (h.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (c) C.always(e[C.status]);else for (t in e) {
              y[t] = [y[t], e[t]];
            }
            return this;
          },
          abort: function abort(e) {
            var t = e || _;
            return r && r.abort(t), A(0, t), this;
          }
        };

        if (m.promise(C), h.url = ((e || h.url || _t.href) + "").replace(Nt, _t.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(H) || [""], null == h.crossDomain) {
          l = b.createElement("a");

          try {
            l.href = h.url, l.href = l.href, h.crossDomain = Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host;
          } catch (e) {
            h.crossDomain = !0;
          }
        }

        if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), zt(Pt, h, t, C), c) return C;

        for (d in (u = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !qt.test(h.type), i = h.url.replace(jt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(kt, "+")) : (p = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Ct.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Lt, "$1"), p = (Ct.test(i) ? "&" : "?") + "_=" + Tt.guid++ + p), h.url = i + p), h.ifModified && (T.lastModified[i] && C.setRequestHeader("If-Modified-Since", T.lastModified[i]), T.etag[i] && C.setRequestHeader("If-None-Match", T.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]), h.headers) {
          C.setRequestHeader(d, h.headers[d]);
        }

        if (h.beforeSend && (!1 === h.beforeSend.call(f, C, h) || c)) return C.abort();

        if (_ = "abort", v.add(h.complete), C.done(h.success), C.fail(h.error), r = zt(Ht, h, t, C)) {
          if (C.readyState = 1, u && g.trigger("ajaxSend", [C, h]), c) return C;
          h.async && h.timeout > 0 && (a = n.setTimeout(function () {
            C.abort("timeout");
          }, h.timeout));

          try {
            c = !1, r.send(x, A);
          } catch (e) {
            if (c) throw e;
            A(-1, e);
          }
        } else A(-1, "No Transport");

        function A(e, t, s, l) {
          var d,
              p,
              b,
              x,
              w,
              _ = t;
          c || (c = !0, a && n.clearTimeout(a), r = void 0, o = l || "", C.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, s && (x = function (e, t, n) {
            for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
              l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            }

            if (r) for (i in a) {
              if (a[i] && a[i].test(r)) {
                l.unshift(i);
                break;
              }
            }
            if (l[0] in n) o = l[0];else {
              for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                  o = i;
                  break;
                }

                s || (s = i);
              }

              o = o || s;
            }
            if (o) return o !== l[0] && l.unshift(o), n[o];
          }(h, C, s)), !d && T.inArray("script", h.dataTypes) > -1 && T.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {}), x = function (e, t, n, r) {
            var i,
                o,
                s,
                a,
                l,
                c = {},
                u = e.dataTypes.slice();
            if (u[1]) for (s in e.converters) {
              c[s.toLowerCase()] = e.converters[s];
            }

            for (o = u.shift(); o;) {
              if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
                if (!(s = c[l + " " + o] || c["* " + o])) for (i in c) {
                  if ((a = i.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                    !0 === s ? s = c[i] : !0 !== c[i] && (o = a[0], u.unshift(a[1]));
                    break;
                  }
                }
                if (!0 !== s) if (s && e["throws"]) t = s(t);else try {
                  t = s(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + l + " to " + o
                  };
                }
              }
            }

            return {
              state: "success",
              data: t
            };
          }(h, x, C, d), d ? (h.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (T.lastModified[i] = w), (w = C.getResponseHeader("etag")) && (T.etag[i] = w)), 204 === e || "HEAD" === h.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = x.state, p = x.data, d = !(b = x.error))) : (b = _, !e && _ || (_ = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || _) + "", d ? m.resolveWith(f, [p, _, C]) : m.rejectWith(f, [C, _, b]), C.statusCode(y), y = void 0, u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [C, h, d ? p : b]), v.fireWith(f, [C, _]), u && (g.trigger("ajaxComplete", [C, h]), --T.active || T.event.trigger("ajaxStop")));
        }

        return C;
      },
      getJSON: function getJSON(e, t, n) {
        return T.get(e, t, n, "json");
      },
      getScript: function getScript(e, t) {
        return T.get(e, void 0, t, "script");
      }
    }), T.each(["get", "post"], function (e, t) {
      T[t] = function (e, n, r, i) {
        return v(n) && (i = i || r, r = n, n = void 0), T.ajax(T.extend({
          url: e,
          type: t,
          dataType: i,
          data: n,
          success: r
        }, T.isPlainObject(e) && e));
      };
    }), T.ajaxPrefilter(function (e) {
      var t;

      for (t in e.headers) {
        "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
      }
    }), T._evalUrl = function (e, t, n) {
      return T.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function textScript() {}
        },
        dataFilter: function dataFilter(e) {
          T.globalEval(e, t, n);
        }
      });
    }, T.fn.extend({
      wrapAll: function wrapAll(e) {
        var t;
        return this[0] && (v(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) {
            e = e.firstElementChild;
          }

          return e;
        }).append(this)), this;
      },
      wrapInner: function wrapInner(e) {
        return v(e) ? this.each(function (t) {
          T(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = T(this),
              n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function wrap(e) {
        var t = v(e);
        return this.each(function (n) {
          T(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function unwrap(e) {
        return this.parent(e).not("body").each(function () {
          T(this).replaceWith(this.childNodes);
        }), this;
      }
    }), T.expr.pseudos.hidden = function (e) {
      return !T.expr.pseudos.visible(e);
    }, T.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, T.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (e) {}
    };
    var Wt = {
      0: 200,
      1223: 204
    },
        Ft = T.ajaxSettings.xhr();
    m.cors = !!Ft && "withCredentials" in Ft, m.ajax = Ft = !!Ft, T.ajaxTransport(function (e) {
      var _t3, r;

      if (m.cors || Ft && !e.crossDomain) return {
        send: function send(i, o) {
          var s,
              a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) {
            a[s] = e.xhrFields[s];
          }

          for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) {
            a.setRequestHeader(s, i[s]);
          }

          _t3 = function t(e) {
            return function () {
              _t3 && (_t3 = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Wt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()));
            };
          }, a.onload = _t3(), r = a.onerror = a.ontimeout = _t3("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
            4 === a.readyState && n.setTimeout(function () {
              _t3 && r();
            });
          }, _t3 = _t3("abort");

          try {
            a.send(e.hasContent && e.data || null);
          } catch (e) {
            if (_t3) throw e;
          }
        },
        abort: function abort() {
          _t3 && _t3();
        }
      };
    }), T.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), T.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(e) {
          return T.globalEval(e), e;
        }
      }
    }), T.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), T.ajaxTransport("script", function (e) {
      var t, _n;

      if (e.crossDomain || e.scriptAttrs) return {
        send: function send(r, i) {
          t = T("<script>").attr(e.scriptAttrs || {}).prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n = function n(e) {
            t.remove(), _n = null, e && i("error" === e.type ? 404 : 200, e.type);
          }), b.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n && _n();
        }
      };
    });
    var Bt,
        Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function jsonpCallback() {
        var e = Gt.pop() || T.expando + "_" + Tt.guid++;
        return this[e] = !0, e;
      }
    }), T.ajaxPrefilter("json jsonp", function (e, t, r) {
      var i,
          o,
          s,
          a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + i) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
        return s || T.error(i + " was not called"), s[0];
      }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
        s = arguments;
      }, r.always(function () {
        void 0 === o ? T(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Gt.push(i)), s && v(o) && o(s[0]), s = o = void 0;
      }), "script";
    }), m.createHTMLDocument = ((Bt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Bt.childNodes.length), T.parseHTML = function (e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(r)) : t = b), o = !n && [], (i = k.exec(e)) ? [t.createElement(i[1])] : (i = _e([e], t, o), o && o.length && T(o).remove(), T.merge([], i.childNodes)));
      var r, i, o;
    }, T.fn.load = function (e, t, n) {
      var r,
          i,
          o,
          s = this,
          a = e.indexOf(" ");
      return a > -1 && (r = mt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), s.length > 0 && T.ajax({
        url: e,
        type: i || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        o = arguments, s.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
      }).always(n && function (e, t) {
        s.each(function () {
          n.apply(this, o || [e.responseText, t, e]);
        });
      }), this;
    }, T.expr.pseudos.animated = function (e) {
      return T.grep(T.timers, function (t) {
        return e === t.elem;
      }).length;
    }, T.offset = {
      setOffset: function setOffset(e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            l,
            c = T.css(e, "position"),
            u = T(e),
            d = {};
        "static" === c && (e.style.position = "relative"), a = u.offset(), o = T.css(e, "top"), l = T.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (r = u.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), v(t) && (t = t.call(e, n, T.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : u.css(d);
      }
    }, T.fn.extend({
      offset: function offset(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          T.offset.setOffset(this, e, t);
        });
        var t,
            n,
            r = this[0];
        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0;
      },
      position: function position() {
        if (this[0]) {
          var e,
              t,
              n,
              r = this[0],
              i = {
            top: 0,
            left: 0
          };
          if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) {
              e = e.parentNode;
            }

            e && e !== r && 1 === e.nodeType && ((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0), i.left += T.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - i.top - T.css(r, "marginTop", !0),
            left: t.left - i.left - T.css(r, "marginLeft", !0)
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === T.css(e, "position");) {
            e = e.offsetParent;
          }

          return e || oe;
        });
      }
    }), T.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var n = "pageYOffset" === t;

      T.fn[e] = function (r) {
        return F(this, function (e, r, i) {
          var o;
          if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
          o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
        }, e, r, arguments.length);
      };
    }), T.each(["top", "left"], function (e, t) {
      T.cssHooks[t] = Fe(m.pixelPosition, function (e, n) {
        if (n) return n = We(e, t), Re.test(n) ? T(e).position()[t] + "px" : n;
      });
    }), T.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      T.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (n, r) {
        T.fn[r] = function (i, o) {
          var s = arguments.length && (n || "boolean" != typeof i),
              a = n || (!0 === i || !0 === o ? "margin" : "border");
          return F(this, function (t, n, i) {
            var o;
            return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? T.css(t, n, a) : T.style(t, n, i, a);
          }, t, s ? i : void 0, s);
        };
      });
    }), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      T.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), T.fn.extend({
      bind: function bind(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function unbind(e, t) {
        return this.off(e, null, t);
      },
      delegate: function delegate(e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function undelegate(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      },
      hover: function hover(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      T.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    });
    var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    T.proxy = function (e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = a.call(arguments, 2), (i = function i() {
        return e.apply(t || this, r.concat(a.call(arguments)));
      }).guid = e.guid = e.guid || T.guid++, i;
    }, T.holdReady = function (e) {
      e ? T.readyWait++ : T.ready(!0);
    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = D, T.isFunction = v, T.isWindow = y, T.camelCase = V, T.type = _, T.now = Date.now, T.isNumeric = function (e) {
      var t = T.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, T.trim = function (e) {
      return null == e ? "" : (e + "").replace(Vt, "");
    }, void 0 === (r = function () {
      return T;
    }.apply(t, [])) || (e.exports = r);
    var Xt = n.jQuery,
        Kt = n.$;
    return T.noConflict = function (e) {
      return n.$ === T && (n.$ = Kt), e && n.jQuery === T && (n.jQuery = Xt), T;
    }, void 0 === i && (n.jQuery = n.$ = T), T;
  });
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  n.r(t);

  var i = function () {
    function e(t, n, r) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.init = !0, this.name = t, this.view = n, this.space = r, this.settings = {
        slidesPerView: this.view,
        spaceBetween: this.space
      };
    }

    var t, n, i;
    return t = e, (n = [{
      key: "createSlider",
      value: function value() {
        var e = this;
        return this.slider = new Swiper(this.name, {
          slidesPerView: this.view,
          spaceBetween: this.space
        }), setTimeout(function () {
          $(e.name).css("opacity", 1);
        }, 600), this.slider;
      }
    }, {
      key: "updateSlider",
      value: function value(e) {
        var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";

        switch (e) {
          case "loop":
            this.settings.loop = n, this.slider.destroy(), this.slider = new Swiper(this.name, this.settings);
            break;

          case "space":
            this.slider.params.spaceBetween = n, this.slider.update();
            break;

          case "view":
            this.slider.params.slidesPerView = n, this.slider.update();
            break;

          case "center":
            this.slider.params.centeredSlides = n, this.slider.update();
            break;

          case "initialSlide":
            this.slider.params.initialSlide = n, this.slider.update();
            break;

          case "slideActiveClass":
            this.slider.params.slideActiveClass = n, this.slider.update();
            break;

          case "autoHeight":
            this.slider.params.autoHeight = n, this.slider.update();
            break;

          case "slideToClickedSlide":
            this.slider.params.slideToClickedSlide = n, this.slider.update();
            break;

          case "controller":
            this.slider.params.controller = n, this.slider.update(), console.log(this.slider.params.controller);
            break;

          case "loop":
            this.slider.params.loop = !1, this.slider.update();
            break;

          case "group":
            this.slider.params.slidesPerGroup = n, this.slider.params.speed = 1e3, this.slider.update();
            break;

          case "skip":
            this.slider.params.slidesPerGroupSkip = n, this.slider.update();
            break;

          case "pagination":
            var r = $(this.name).find(".pagination")[0];
            this.settings.pagination = {
              el: r,
              clickable: !0
            }, this.slider.destroy(), this.slider = new Swiper(this.name, this.settings);
            break;

          case "arrow":
            var i = $(this.name).find(".arrow__link--next")[0],
                o = $(this.name).find(".arrow__link--prev")[0];
            this.settings.navigation = {
              nextEl: i,
              prevEl: o
            }, this.slider.destroy(), this.slider = new Swiper(this.name, this.settings);
        }

        setTimeout(function () {
          $(t.name).css("opacity", 1);
        }, 600);
      }
    }]) && r(t.prototype, n), i && r(t, i), e;
  }();

  t["default"] = i;
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  n.r(t);

  var o = function () {
    function e(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cart",
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "js-plus",
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "js-minus",
          s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "delete";
      r(this, e), this.items = t, this.plusClass = i, this.minusClass = o, this.deleteClass = s, this.cartClass = n, this.currency = "₽";
    }

    var t, n, o;
    return t = e, (n = [{
      key: "goodsPlus",
      value: function value(e) {
        this.items[e].count++;
      }
    }, {
      key: "goodsMinus",
      value: function value(e) {
        this.items[e].count - 1 <= 0 ? this.goodsDelete(e) : this.items[e].count--;
      }
    }, {
      key: "goodsDelete",
      value: function value(e) {
        delete this.items[e];
      }
    }, {
      key: "getTotal",
      value: function value() {
        var e = 0;

        for (var t in this.items) {
          e += this.items[t].count * this.items[t].price;
        }

        return e;
      }
    }, {
      key: "render",
      value: function value() {
        var e = "";

        for (var t in this.items) {
          e += '<div class="cart-card js-card">', e += '<div class="cart-card__column cart-card__column--img">', e += '<img src="'.concat(this.items[t].image, '">'), e += "</div>", e += '<div class="cart-card__column cart-card__column--title">', e += "".concat(this.items[t].name), e += "</div>", e += '<div class="cart-card__column cart-card__column--size">', e += '<div class="qty-bloc">', e += '<div class="qty-bloc__txt">Размер:</div>', e += '<select class="js-select">', e += '<option value="S">S</option>', e += '<option value="M">M</option>', e += '<option value="L">L</option>', e += "</select>", e += "</div>", e += "</div>", e += '<div class="cart-card__column cart-card__column--qty">', e += '<div class="quantity">', e += '<div class="quantity__txt">Кол-во:</div>', e += '<div class="quantity__box">', e += '<button class="minus js-minus" data-articul="'.concat(t, '"><svg class="b-svg svg-minus"><use xlink:href="svg/symbol/sprite.svg#minus"></use></svg></button>'), e += '<input class="quantity__field js-input-qty" type="text" data-min="1" value='.concat(this.items[t].count, ' data-step="1">'), e += '<button class="plus js-plus" data-articul="'.concat(t, '"><svg class="b-svg svg-plus"><use xlink:href="svg/symbol/sprite.svg#plus"></use></svg></button>'), e += "</div>", e += '<div class="quantity__cost">', e += '<span class="cost js-cost">'.concat(this.items[t].price, "</span>"), e += '<span class="symbol">₽/шт.</span>', e += "</div>", e += "</div>", e += "</div>", e += '<div class="cart-card__column cart-card__column--favourites">', e += '<label class="favorite">', e += '<input type="checkbox">', e += '<span class="favorite__icon js-favorite"><svg width="20" height="22" viewBox="-1 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M17.9 0C15.4 0 13.3 1.4 12.2 3.5C11.1 1.4 9 0 6.5 0C2.9 0 0 3 0 6.7C0 7.8 0.3 8.9 0.8 9.8C0.8 9.9 1 10.2 1.3 10.6C1.5 10.9 1.7 11.1 2 11.4C4.9 14.8 12.3 22 12.3 22C12.3 22 19.7 14.8 22.6 11.4C22.8 11.2 23.1 10.9 23.3 10.6C23.6 10.2 23.8 9.9 23.8 9.8C24.3 8.9 24.6 7.8 24.6 6.7C24.4 3 21.5 0 17.9 0Z" fill="#FF6C96"></path>\n        </svg></span>', e += '<span class="favorite__txt">В избранное</span>', e += "</label>", e += "</div>", e += '<div class="cart-card__column cart-card__column--price">', e += '<span class="cost">'.concat(this.items[t].price * this.items[t].count, "</span>"), e += '<span class="symbol">₽</span>', e += "</div>", e += '<div class="cart-card__column cart-card__column--del">', e += '<div class="delete" data-articul="'.concat(t, '">'), e += '<div class="delete__txt"> Удалить', e += "</div>", e += "</div>", e += "</div>", e += "</div>";
        }

        return $(".js-itog").text(this.getTotal()), $(".js-cart-qty").text("(".concat(Object.keys(this.items).length, ")")), $(".js-cart-dis").text(this.getTotal()), e;
      }
    }]) && i(t.prototype, n), o && i(t, o), e;
  }();

  t["default"] = o;
}, function (e, t, n) {
  n(4), n(2), e.exports = n(1);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var r = n(1),
      i = n(2),
      o = n(0),
      s = n.n(o);
  n(5);

  s.a.fn.exists = function () {
    return s()(this).length;
  };

  var a = function a(e) {
    if (s()(e).exists()) try {
      s()(e).select2();
    } catch (e) {
      console.log(e);
    }
  },
      l = function l() {
    if (s()(".js-favorite ").exists()) try {
      s()(".js-favorite").each(function (e, t) {
        s()(t).on("click", function () {
          s()(t).toggleClass("open"), s()(t).find("input").is(":checked") && s()(t).find("input").prop("checked", !1);
        });
      });
    } catch (e) {
      console.log(e);
    }
  },
      c = function c() {
    var e = new r["default"](".js-slider", 6.37, 18);
    e.createSlider(), s()(window).on("resize load", function () {
      s()(window).width() <= 1300 && s()(window).width() > 1235 ? (e.updateSlider("space", 13), e.updateSlider("view", 5)) : s()(window).width() <= 1235 && s()(window).width() > 1024 ? e.updateSlider("view", 4.6) : s()(window).width() <= 1024 && s()(window).width() > 767 ? e.updateSlider("view", 4) : s()(window).width() <= 767 && s()(window).width() > 620 ? e.updateSlider("view", 3.3) : s()(window).width() <= 620 && s()(window).width() > 320 ? e.updateSlider("view", 2.35) : (e.updateSlider("space", 18), e.updateSlider("view", 6.37));
    }).resize();
  };

  s()(function () {
    c();
    var e = new i["default"]({
      p92779: {
        name: "Футболка Теория относительности и коты, серая",
        url: "#",
        image: "./img/cart/p1.jpg",
        price: 1720,
        count: 1
      },
      p93039: {
        name: "Плакат Воздушный шар",
        url: "#",
        image: "./img/cart/p2.jpg",
        price: 872,
        count: 1
      },
      p93034: {
        name: "Блокнот TOP SECRET, A5",
        url: "#",
        image: "./img/cart/p3.jpg",
        price: 672,
        count: 1
      },
      p93035: {
        name: "Услуга подарочной упаковки",
        url: "#",
        image: "./img/cart/p4.jpg",
        price: 2500,
        count: 1
      }
    });
    document.querySelector(".cart__cards").innerHTML = "", document.querySelector(".cart__cards").innerHTML = e.render(), a(".js-select"), l(), document.querySelector(".cart__cards").addEventListener("click", function (t) {
      var n = t.target;
      return n.classList.contains("delete") ? (e.goodsDelete(n.dataset.articul), document.querySelector(".cart__cards").innerHTML = "", document.querySelector(".cart__cards").innerHTML = e.render(), a(".js-select"), l(), !0) : n.classList.contains("js-plus") ? (t.preventDefault(), e.goodsPlus(n.dataset.articul), document.querySelector(".cart__cards").innerHTML = "", document.querySelector(".cart__cards").innerHTML = e.render(), a(".js-select"), l(), !0) : n.classList.contains("js-minus") ? (e.goodsMinus(n.dataset.articul), document.querySelector(".cart__cards").innerHTML = "", document.querySelector(".cart__cards").innerHTML = e.render(), a(".js-select"), l(), !0) : void 0;
    });
  });
}, function (e, t, n) {
  var r, i, o;
  i = [n(0)], void 0 === (o = "function" == typeof (r = function r(e) {
    var t = function () {
      if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
      return function () {
        /**
         * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
         * Released under MIT license, http://github.com/requirejs/almond/LICENSE
         */
        var e, n, r;
        t && t.requirejs || (t ? n = t : t = {}, function (t) {
          var i,
              _o2,
              s,
              a,
              l = {},
              c = {},
              u = {},
              d = {},
              p = Object.prototype.hasOwnProperty,
              h = [].slice,
              f = /\.js$/;

          function g(e, t) {
            return p.call(e, t);
          }

          function m(e, t) {
            var n,
                r,
                i,
                o,
                s,
                a,
                l,
                c,
                d,
                p,
                h,
                g = t && t.split("/"),
                m = u.map,
                v = m && m["*"] || {};

            if (e) {
              for (s = (e = e.split("/")).length - 1, u.nodeIdCompat && f.test(e[s]) && (e[s] = e[s].replace(f, "")), "." === e[0].charAt(0) && g && (e = g.slice(0, g.length - 1).concat(e)), d = 0; d < e.length; d++) {
                if ("." === (h = e[d])) e.splice(d, 1), d -= 1;else if (".." === h) {
                  if (0 === d || 1 === d && ".." === e[2] || ".." === e[d - 1]) continue;
                  d > 0 && (e.splice(d - 1, 2), d -= 2);
                }
              }

              e = e.join("/");
            }

            if ((g || v) && m) {
              for (d = (n = e.split("/")).length; d > 0; d -= 1) {
                if (r = n.slice(0, d).join("/"), g) for (p = g.length; p > 0; p -= 1) {
                  if ((i = m[g.slice(0, p).join("/")]) && (i = i[r])) {
                    o = i, a = d;
                    break;
                  }
                }
                if (o) break;
                !l && v && v[r] && (l = v[r], c = d);
              }

              !o && l && (o = l, a = c), o && (n.splice(0, a, o), e = n.join("/"));
            }

            return e;
          }

          function v(e, t) {
            return function () {
              var n = h.call(arguments, 0);
              return "string" != typeof n[0] && 1 === n.length && n.push(null), _o2.apply(void 0, n.concat([e, t]));
            };
          }

          function y(e) {
            return function (t) {
              l[e] = t;
            };
          }

          function b(e) {
            if (g(c, e)) {
              var t = c[e];
              delete c[e], d[e] = !0, i.apply(void 0, t);
            }

            if (!g(l, e) && !g(d, e)) throw new Error("No " + e);
            return l[e];
          }

          function x(e) {
            var t,
                n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e];
          }

          function w(e) {
            return e ? x(e) : [];
          }

          function _(e) {
            return function () {
              return u && u.config && u.config[e] || {};
            };
          }

          s = function s(e, t) {
            var n,
                r,
                i = x(e),
                o = i[0],
                s = t[1];
            return e = i[1], o && (n = b(o = m(o, s))), o ? e = n && n.normalize ? n.normalize(e, (r = s, function (e) {
              return m(e, r);
            })) : m(e, s) : (o = (i = x(e = m(e, s)))[0], e = i[1], o && (n = b(o))), {
              f: o ? o + "!" + e : e,
              n: e,
              pr: o,
              p: n
            };
          }, a = {
            require: function require(e) {
              return v(e);
            },
            exports: function exports(e) {
              var t = l[e];
              return void 0 !== t ? t : l[e] = {};
            },
            module: function module(e) {
              return {
                id: e,
                uri: "",
                exports: l[e],
                config: _(e)
              };
            }
          }, i = function i(e, t, n, r) {
            var i,
                o,
                u,
                p,
                h,
                f,
                m,
                x = [],
                _ = _typeof(n);

            if (f = w(r = r || e), "undefined" === _ || "function" === _) {
              for (t = !t.length && n.length ? ["require", "exports", "module"] : t, h = 0; h < t.length; h += 1) {
                if ("require" === (o = (p = s(t[h], f)).f)) x[h] = a.require(e);else if ("exports" === o) x[h] = a.exports(e), m = !0;else if ("module" === o) i = x[h] = a.module(e);else if (g(l, o) || g(c, o) || g(d, o)) x[h] = b(o);else {
                  if (!p.p) throw new Error(e + " missing " + o);
                  p.p.load(p.n, v(r, !0), y(o), {}), x[h] = l[o];
                }
              }

              u = n ? n.apply(l[e], x) : void 0, e && (i && void 0 !== i.exports && i.exports !== l[e] ? l[e] = i.exports : void 0 === u && m || (l[e] = u));
            } else e && (l[e] = n);
          }, e = n = _o2 = function o(e, t, n, r, l) {
            if ("string" == typeof e) return a[e] ? a[e](t) : b(s(e, w(t)).f);

            if (!e.splice) {
              if ((u = e).deps && _o2(u.deps, u.callback), !t) return;
              t.splice ? (e = t, t = n, n = null) : e = void 0;
            }

            return t = t || function () {}, "function" == typeof n && (n = r, r = l), r ? i(void 0, e, t, n) : setTimeout(function () {
              i(void 0, e, t, n);
            }, 4), _o2;
          }, _o2.config = function (e) {
            return _o2(e);
          }, e._defined = l, (r = function r(e, t, n) {
            if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
            t.splice || (n = t, t = []), g(l, e) || g(c, e) || (c[e] = [e, t, n]);
          }).amd = {
            jQuery: !0
          };
        }(), t.requirejs = e, t.require = n, t.define = r);
      }(), t.define("almond", function () {}), t.define("jquery", [], function () {
        var t = e || $;
        return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t;
      }), t.define("select2/utils", ["jquery"], function (e) {
        var t = {};

        function n(e) {
          var t = e.prototype,
              n = [];

          for (var r in t) {
            "function" == typeof t[r] && "constructor" !== r && n.push(r);
          }

          return n;
        }

        t.Extend = function (e, t) {
          var n = {}.hasOwnProperty;

          function r() {
            this.constructor = e;
          }

          for (var i in t) {
            n.call(t, i) && (e[i] = t[i]);
          }

          return r.prototype = t.prototype, e.prototype = new r(), e.__super__ = t.prototype, e;
        }, t.Decorate = function (e, t) {
          var r = n(t),
              i = n(e);

          function o() {
            var n = Array.prototype.unshift,
                r = t.prototype.constructor.length,
                i = e.prototype.constructor;
            r > 0 && (n.call(arguments, e.prototype.constructor), i = t.prototype.constructor), i.apply(this, arguments);
          }

          t.displayName = e.displayName, o.prototype = new function () {
            this.constructor = o;
          }();

          for (var s = 0; s < i.length; s++) {
            var a = i[s];
            o.prototype[a] = e.prototype[a];
          }

          for (var l = function l(e) {
            var n = function n() {};

            (e in o.prototype) && (n = o.prototype[e]);
            var r = t.prototype[e];
            return function () {
              var e = Array.prototype.unshift;
              return e.call(arguments, n), r.apply(this, arguments);
            };
          }, c = 0; c < r.length; c++) {
            var u = r[c];
            o.prototype[u] = l(u);
          }

          return o;
        };

        var r = function r() {
          this.listeners = {};
        };

        r.prototype.on = function (e, t) {
          this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t];
        }, r.prototype.trigger = function (e) {
          var t = Array.prototype.slice,
              n = t.call(arguments, 1);
          this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
        }, r.prototype.invoke = function (e, t) {
          for (var n = 0, r = e.length; n < r; n++) {
            e[n].apply(this, t);
          }
        }, t.Observable = r, t.generateChars = function (e) {
          for (var t = "", n = 0; n < e; n++) {
            t += Math.floor(36 * Math.random()).toString(36);
          }

          return t;
        }, t.bind = function (e, t) {
          return function () {
            e.apply(t, arguments);
          };
        }, t._convertData = function (e) {
          for (var t in e) {
            var n = t.split("-"),
                r = e;

            if (1 !== n.length) {
              for (var i = 0; i < n.length; i++) {
                var o = n[i];
                (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in r || (r[o] = {}), i == n.length - 1 && (r[o] = e[t]), r = r[o];
              }

              delete e[t];
            }
          }

          return e;
        }, t.hasScroll = function (t, n) {
          var r = e(n),
              i = n.style.overflowX,
              o = n.style.overflowY;
          return (i !== o || "hidden" !== o && "visible" !== o) && ("scroll" === i || "scroll" === o || r.innerHeight() < n.scrollHeight || r.innerWidth() < n.scrollWidth);
        }, t.escapeMarkup = function (e) {
          var t = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
          };
          return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
            return t[e];
          });
        }, t.__cache = {};
        var i = 0;
        return t.GetUniqueElementId = function (e) {
          var n = e.getAttribute("data-select2-id");
          return null != n || (n = e.id ? "select2-data-" + e.id : "select2-data-" + (++i).toString() + "-" + t.generateChars(4), e.setAttribute("data-select2-id", n)), n;
        }, t.StoreData = function (e, n, r) {
          var i = t.GetUniqueElementId(e);
          t.__cache[i] || (t.__cache[i] = {}), t.__cache[i][n] = r;
        }, t.GetData = function (n, r) {
          var i = t.GetUniqueElementId(n);
          return r ? t.__cache[i] && null != t.__cache[i][r] ? t.__cache[i][r] : e(n).data(r) : t.__cache[i];
        }, t.RemoveData = function (e) {
          var n = t.GetUniqueElementId(e);
          null != t.__cache[n] && delete t.__cache[n], e.removeAttribute("data-select2-id");
        }, t.copyNonInternalCssClasses = function (e, t) {
          var n = e.getAttribute("class").trim().split(/\s+/);
          n = n.filter(function (e) {
            return 0 === e.indexOf("select2-");
          });
          var r = t.getAttribute("class").trim().split(/\s+/);
          r = r.filter(function (e) {
            return 0 !== e.indexOf("select2-");
          });
          var i = n.concat(r);
          e.setAttribute("class", i.join(" "));
        }, t;
      }), t.define("select2/results", ["jquery", "./utils"], function (e, t) {
        function n(e, t, r) {
          this.$element = e, this.data = r, this.options = t, n.__super__.constructor.call(this);
        }

        return t.Extend(n, t.Observable), n.prototype.render = function () {
          var t = e('<ul class="select2-results__options" role="listbox"></ul>');
          return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t;
        }, n.prototype.clear = function () {
          this.$results.empty();
        }, n.prototype.displayMessage = function (t) {
          var n = this.options.get("escapeMarkup");
          this.clear(), this.hideLoading();
          var r = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
              i = this.options.get("translations").get(t.message);
          r.append(n(i(t.args))), r[0].className += " select2-results__message", this.$results.append(r);
        }, n.prototype.hideMessages = function () {
          this.$results.find(".select2-results__message").remove();
        }, n.prototype.append = function (e) {
          this.hideLoading();
          var t = [];

          if (null != e.results && 0 !== e.results.length) {
            e.results = this.sort(e.results);

            for (var n = 0; n < e.results.length; n++) {
              var r = e.results[n],
                  i = this.option(r);
              t.push(i);
            }

            this.$results.append(t);
          } else 0 === this.$results.children().length && this.trigger("results:message", {
            message: "noResults"
          });
        }, n.prototype.position = function (e, t) {
          t.find(".select2-results").append(e);
        }, n.prototype.sort = function (e) {
          return this.options.get("sorter")(e);
        }, n.prototype.highlightFirstItem = function () {
          var e = this.$results.find(".select2-results__option--selectable"),
              t = e.filter(".select2-results__option--selected");
          t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible();
        }, n.prototype.setClasses = function () {
          var n = this;
          this.data.current(function (r) {
            var i = r.map(function (e) {
              return e.id.toString();
            });
            n.$results.find(".select2-results__option--selectable").each(function () {
              var n = e(this),
                  r = t.GetData(this, "data"),
                  o = "" + r.id;
              null != r.element && r.element.selected || null == r.element && i.indexOf(o) > -1 ? (this.classList.add("select2-results__option--selected"), n.attr("aria-selected", "true")) : (this.classList.remove("select2-results__option--selected"), n.attr("aria-selected", "false"));
            });
          });
        }, n.prototype.showLoading = function (e) {
          this.hideLoading();
          var t = {
            disabled: !0,
            loading: !0,
            text: this.options.get("translations").get("searching")(e)
          },
              n = this.option(t);
          n.className += " loading-results", this.$results.prepend(n);
        }, n.prototype.hideLoading = function () {
          this.$results.find(".loading-results").remove();
        }, n.prototype.option = function (n) {
          var r = document.createElement("li");
          r.classList.add("select2-results__option"), r.classList.add("select2-results__option--selectable");
          var i = {
            role: "option"
          },
              o = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;

          for (var s in (null != n.element && o.call(n.element, ":disabled") || null == n.element && n.disabled) && (i["aria-disabled"] = "true", r.classList.remove("select2-results__option--selectable"), r.classList.add("select2-results__option--disabled")), null == n.id && r.classList.remove("select2-results__option--selectable"), null != n._resultId && (r.id = n._resultId), n.title && (r.title = n.title), n.children && (i.role = "group", i["aria-label"] = n.text, r.classList.remove("select2-results__option--selectable"), r.classList.add("select2-results__option--group")), i) {
            var a = i[s];
            r.setAttribute(s, a);
          }

          if (n.children) {
            var l = e(r),
                c = document.createElement("strong");
            c.className = "select2-results__group", this.template(n, c);

            for (var u = [], d = 0; d < n.children.length; d++) {
              var p = n.children[d],
                  h = this.option(p);
              u.push(h);
            }

            var f = e("<ul></ul>", {
              "class": "select2-results__options select2-results__options--nested",
              role: "none"
            });
            f.append(u), l.append(c), l.append(f);
          } else this.template(n, r);

          return t.StoreData(r, "data", n), r;
        }, n.prototype.bind = function (n, r) {
          var i = this,
              o = n.id + "-results";
          this.$results.attr("id", o), n.on("results:all", function (e) {
            i.clear(), i.append(e.data), n.isOpen() && (i.setClasses(), i.highlightFirstItem());
          }), n.on("results:append", function (e) {
            i.append(e.data), n.isOpen() && i.setClasses();
          }), n.on("query", function (e) {
            i.hideMessages(), i.showLoading(e);
          }), n.on("select", function () {
            n.isOpen() && (i.setClasses(), i.options.get("scrollAfterSelect") && i.highlightFirstItem());
          }), n.on("unselect", function () {
            n.isOpen() && (i.setClasses(), i.options.get("scrollAfterSelect") && i.highlightFirstItem());
          }), n.on("open", function () {
            i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible();
          }), n.on("close", function () {
            i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant");
          }), n.on("results:toggle", function () {
            var e = i.getHighlightedResults();
            0 !== e.length && e.trigger("mouseup");
          }), n.on("results:select", function () {
            var e = i.getHighlightedResults();

            if (0 !== e.length) {
              var n = t.GetData(e[0], "data");
              e.hasClass("select2-results__option--selected") ? i.trigger("close", {}) : i.trigger("select", {
                data: n
              });
            }
          }), n.on("results:previous", function () {
            var e = i.getHighlightedResults(),
                t = i.$results.find(".select2-results__option--selectable"),
                n = t.index(e);

            if (!(n <= 0)) {
              var r = n - 1;
              0 === e.length && (r = 0);
              var o = t.eq(r);
              o.trigger("mouseenter");
              var s = i.$results.offset().top,
                  a = o.offset().top,
                  l = i.$results.scrollTop() + (a - s);
              0 === r ? i.$results.scrollTop(0) : a - s < 0 && i.$results.scrollTop(l);
            }
          }), n.on("results:next", function () {
            var e = i.getHighlightedResults(),
                t = i.$results.find(".select2-results__option--selectable"),
                n = t.index(e) + 1;

            if (!(n >= t.length)) {
              var r = t.eq(n);
              r.trigger("mouseenter");
              var o = i.$results.offset().top + i.$results.outerHeight(!1),
                  s = r.offset().top + r.outerHeight(!1),
                  a = i.$results.scrollTop() + s - o;
              0 === n ? i.$results.scrollTop(0) : s > o && i.$results.scrollTop(a);
            }
          }), n.on("results:focus", function (e) {
            e.element[0].classList.add("select2-results__option--highlighted"), e.element[0].setAttribute("aria-selected", "true");
          }), n.on("results:message", function (e) {
            i.displayMessage(e);
          }), e.fn.mousewheel && this.$results.on("mousewheel", function (e) {
            var t = i.$results.scrollTop(),
                n = i.$results.get(0).scrollHeight - t + e.deltaY,
                r = e.deltaY > 0 && t - e.deltaY <= 0,
                o = e.deltaY < 0 && n <= i.$results.height();
            r ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), e.preventDefault(), e.stopPropagation());
          }), this.$results.on("mouseup", ".select2-results__option--selectable", function (n) {
            var r = e(this),
                o = t.GetData(this, "data");
            r.hasClass("select2-results__option--selected") ? i.options.get("multiple") ? i.trigger("unselect", {
              originalEvent: n,
              data: o
            }) : i.trigger("close", {}) : i.trigger("select", {
              originalEvent: n,
              data: o
            });
          }), this.$results.on("mouseenter", ".select2-results__option--selectable", function (n) {
            var r = t.GetData(this, "data");
            i.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"), i.trigger("results:focus", {
              data: r,
              element: e(this)
            });
          });
        }, n.prototype.getHighlightedResults = function () {
          return this.$results.find(".select2-results__option--highlighted");
        }, n.prototype.destroy = function () {
          this.$results.remove();
        }, n.prototype.ensureHighlightVisible = function () {
          var e = this.getHighlightedResults();

          if (0 !== e.length) {
            var t = this.$results.find(".select2-results__option--selectable").index(e),
                n = this.$results.offset().top,
                r = e.offset().top,
                i = this.$results.scrollTop() + (r - n),
                o = r - n;
            i -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(i);
          }
        }, n.prototype.template = function (t, n) {
          var r = this.options.get("templateResult"),
              i = this.options.get("escapeMarkup"),
              o = r(t, n);
          null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = i(o) : e(n).append(o);
        }, n;
      }), t.define("select2/keys", [], function () {
        return {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46
        };
      }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (e, t, n) {
        function r(e, t) {
          this.$element = e, this.options = t, r.__super__.constructor.call(this);
        }

        return t.Extend(r, t.Observable), r.prototype.render = function () {
          var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
          return this._tabindex = 0, null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), n.attr("aria-disabled", "false"), this.$selection = n, n;
        }, r.prototype.bind = function (e, t) {
          var r = this,
              i = e.id + "-results";
          this.container = e, this.$selection.on("focus", function (e) {
            r.trigger("focus", e);
          }), this.$selection.on("blur", function (e) {
            r._handleBlur(e);
          }), this.$selection.on("keydown", function (e) {
            r.trigger("keypress", e), e.which === n.SPACE && e.preventDefault();
          }), e.on("results:focus", function (e) {
            r.$selection.attr("aria-activedescendant", e.data._resultId);
          }), e.on("selection:update", function (e) {
            r.update(e.data);
          }), e.on("open", function () {
            r.$selection.attr("aria-expanded", "true"), r.$selection.attr("aria-owns", i), r._attachCloseHandler(e);
          }), e.on("close", function () {
            r.$selection.attr("aria-expanded", "false"), r.$selection.removeAttr("aria-activedescendant"), r.$selection.removeAttr("aria-owns"), r.$selection.trigger("focus"), r._detachCloseHandler(e);
          }), e.on("enable", function () {
            r.$selection.attr("tabindex", r._tabindex), r.$selection.attr("aria-disabled", "false");
          }), e.on("disable", function () {
            r.$selection.attr("tabindex", "-1"), r.$selection.attr("aria-disabled", "true");
          });
        }, r.prototype._handleBlur = function (t) {
          var n = this;
          window.setTimeout(function () {
            document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t);
          }, 1);
        }, r.prototype._attachCloseHandler = function (n) {
          e(document.body).on("mousedown.select2." + n.id, function (n) {
            var r = e(n.target).closest(".select2");
            e(".select2.select2-container--open").each(function () {
              this != r[0] && t.GetData(this, "element").select2("close");
            });
          });
        }, r.prototype._detachCloseHandler = function (t) {
          e(document.body).off("mousedown.select2." + t.id);
        }, r.prototype.position = function (e, t) {
          t.find(".selection").append(e);
        }, r.prototype.destroy = function () {
          this._detachCloseHandler(this.container);
        }, r.prototype.update = function (e) {
          throw new Error("The `update` method must be defined in child classes.");
        }, r.prototype.isEnabled = function () {
          return !this.isDisabled();
        }, r.prototype.isDisabled = function () {
          return this.options.get("disabled");
        }, r;
      }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, r) {
        function i() {
          i.__super__.constructor.apply(this, arguments);
        }

        return n.Extend(i, t), i.prototype.render = function () {
          var e = i.__super__.render.call(this);

          return e[0].classList.add("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e;
        }, i.prototype.bind = function (e, t) {
          var n = this;

          i.__super__.bind.apply(this, arguments);

          var r = e.id + "-container";
          this.$selection.find(".select2-selection__rendered").attr("id", r).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", r), this.$selection.attr("aria-controls", r), this.$selection.on("mousedown", function (e) {
            1 === e.which && n.trigger("toggle", {
              originalEvent: e
            });
          }), this.$selection.on("focus", function (e) {}), this.$selection.on("blur", function (e) {}), e.on("focus", function (t) {
            e.isOpen() || n.$selection.trigger("focus");
          });
        }, i.prototype.clear = function () {
          var e = this.$selection.find(".select2-selection__rendered");
          e.empty(), e.removeAttr("title");
        }, i.prototype.display = function (e, t) {
          var n = this.options.get("templateSelection");
          return this.options.get("escapeMarkup")(n(e, t));
        }, i.prototype.selectionContainer = function () {
          return e("<span></span>");
        }, i.prototype.update = function (e) {
          if (0 !== e.length) {
            var t = e[0],
                n = this.$selection.find(".select2-selection__rendered"),
                r = this.display(t, n);
            n.empty().append(r);
            var i = t.title || t.text;
            i ? n.attr("title", i) : n.removeAttr("title");
          } else this.clear();
        }, i;
      }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (e, t, n) {
        function r(e, t) {
          r.__super__.constructor.apply(this, arguments);
        }

        return n.Extend(r, t), r.prototype.render = function () {
          var e = r.__super__.render.call(this);

          return e[0].classList.add("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e;
        }, r.prototype.bind = function (t, i) {
          var o = this;

          r.__super__.bind.apply(this, arguments);

          var s = t.id + "-container";
          this.$selection.find(".select2-selection__rendered").attr("id", s), this.$selection.on("click", function (e) {
            o.trigger("toggle", {
              originalEvent: e
            });
          }), this.$selection.on("click", ".select2-selection__choice__remove", function (t) {
            if (!o.isDisabled()) {
              var r = e(this).parent(),
                  i = n.GetData(r[0], "data");
              o.trigger("unselect", {
                originalEvent: t,
                data: i
              });
            }
          }), this.$selection.on("keydown", ".select2-selection__choice__remove", function (e) {
            o.isDisabled() || e.stopPropagation();
          });
        }, r.prototype.clear = function () {
          var e = this.$selection.find(".select2-selection__rendered");
          e.empty(), e.removeAttr("title");
        }, r.prototype.display = function (e, t) {
          var n = this.options.get("templateSelection");
          return this.options.get("escapeMarkup")(n(e, t));
        }, r.prototype.selectionContainer = function () {
          return e('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>');
        }, r.prototype.update = function (e) {
          if (this.clear(), 0 !== e.length) {
            for (var t = [], r = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", i = 0; i < e.length; i++) {
              var o = e[i],
                  s = this.selectionContainer(),
                  a = this.display(o, s),
                  l = r + n.generateChars(4) + "-";
              o.id ? l += o.id : l += n.generateChars(4), s.find(".select2-selection__choice__display").append(a).attr("id", l);
              var c = o.title || o.text;
              c && s.attr("title", c);
              var u = this.options.get("translations").get("removeItem"),
                  d = s.find(".select2-selection__choice__remove");
              d.attr("title", u()), d.attr("aria-label", u()), d.attr("aria-describedby", l), n.StoreData(s[0], "data", o), t.push(s);
            }

            this.$selection.find(".select2-selection__rendered").append(t);
          }
        }, r;
      }), t.define("select2/selection/placeholder", [], function () {
        function e(e, t, n) {
          this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n);
        }

        return e.prototype.normalizePlaceholder = function (e, t) {
          return "string" == typeof t && (t = {
            id: "",
            text: t
          }), t;
        }, e.prototype.createPlaceholder = function (e, t) {
          var n = this.selectionContainer();
          n.html(this.display(t)), n[0].classList.add("select2-selection__placeholder"), n[0].classList.remove("select2-selection__choice");
          var r = t.title || t.text || n.text();
          return this.$selection.find(".select2-selection__rendered").attr("title", r), n;
        }, e.prototype.update = function (e, t) {
          var n = 1 == t.length && t[0].id != this.placeholder.id;
          if (t.length > 1 || n) return e.call(this, t);
          this.clear();
          var r = this.createPlaceholder(this.placeholder);
          this.$selection.find(".select2-selection__rendered").append(r);
        }, e;
      }), t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (e, t, n) {
        function r() {}

        return r.prototype.bind = function (e, t, n) {
          var r = this;
          e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
            r._handleClear(e);
          }), t.on("keypress", function (e) {
            r._handleKeyboardClear(e, t);
          });
        }, r.prototype._handleClear = function (e, t) {
          if (!this.isDisabled()) {
            var r = this.$selection.find(".select2-selection__clear");

            if (0 !== r.length) {
              t.stopPropagation();
              var i = n.GetData(r[0], "data"),
                  o = this.$element.val();
              this.$element.val(this.placeholder.id);
              var s = {
                data: i
              };
              if (this.trigger("clear", s), s.prevented) this.$element.val(o);else {
                for (var a = 0; a < i.length; a++) {
                  if (s = {
                    data: i[a]
                  }, this.trigger("unselect", s), s.prevented) return void this.$element.val(o);
                }

                this.$element.trigger("input").trigger("change"), this.trigger("toggle", {});
              }
            }
          }
        }, r.prototype._handleKeyboardClear = function (e, n, r) {
          r.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n);
        }, r.prototype.update = function (t, r) {
          if (t.call(this, r), this.$selection.find(".select2-selection__clear").remove(), this.$selection[0].classList.remove("select2-selection--clearable"), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === r.length)) {
            var i = this.$selection.find(".select2-selection__rendered").attr("id"),
                o = this.options.get("translations").get("removeAllItems"),
                s = e('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>');
            s.attr("title", o()), s.attr("aria-label", o()), s.attr("aria-describedby", i), n.StoreData(s[0], "data", r), this.$selection.prepend(s), this.$selection[0].classList.add("select2-selection--clearable");
          }
        }, r;
      }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (e, t, n) {
        function r(e, t, n) {
          e.call(this, t, n);
        }

        return r.prototype.render = function (t) {
          var n = this.options.get("translations").get("search"),
              r = e('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');
          this.$searchContainer = r, this.$search = r.find("textarea"), this.$search.prop("autocomplete", this.options.get("autocomplete")), this.$search.attr("aria-label", n());
          var i = t.call(this);
          return this._transferTabIndex(), i.append(this.$searchContainer), i;
        }, r.prototype.bind = function (e, r, i) {
          var o = this,
              s = r.id + "-results",
              a = r.id + "-container";
          e.call(this, r, i), o.$search.attr("aria-describedby", a), r.on("open", function () {
            o.$search.attr("aria-controls", s), o.$search.trigger("focus");
          }), r.on("close", function () {
            o.$search.val(""), o.resizeSearch(), o.$search.removeAttr("aria-controls"), o.$search.removeAttr("aria-activedescendant"), o.$search.trigger("focus");
          }), r.on("enable", function () {
            o.$search.prop("disabled", !1), o._transferTabIndex();
          }), r.on("disable", function () {
            o.$search.prop("disabled", !0);
          }), r.on("focus", function (e) {
            o.$search.trigger("focus");
          }), r.on("results:focus", function (e) {
            e.data._resultId ? o.$search.attr("aria-activedescendant", e.data._resultId) : o.$search.removeAttr("aria-activedescendant");
          }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
            o.trigger("focus", e);
          }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
            o._handleBlur(e);
          }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
            if (e.stopPropagation(), o.trigger("keypress", e), o._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === o.$search.val()) {
              var r = o.$selection.find(".select2-selection__choice").last();

              if (r.length > 0) {
                var i = t.GetData(r[0], "data");
                o.searchRemoveChoice(i), e.preventDefault();
              }
            }
          }), this.$selection.on("click", ".select2-search--inline", function (e) {
            o.$search.val() && e.stopPropagation();
          });
          var l = document.documentMode,
              c = l && l <= 11;
          this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
            c ? o.$selection.off("input.search input.searchcheck") : o.$selection.off("keyup.search");
          }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
            if (c && "input" === e.type) o.$selection.off("input.search input.searchcheck");else {
              var t = e.which;
              t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && o.handleSearch(e);
            }
          });
        }, r.prototype._transferTabIndex = function (e) {
          this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
        }, r.prototype.createPlaceholder = function (e, t) {
          this.$search.attr("placeholder", t.text);
        }, r.prototype.update = function (e, t) {
          var n = this.$search[0] == document.activeElement;
          this.$search.attr("placeholder", ""), e.call(this, t), this.resizeSearch(), n && this.$search.trigger("focus");
        }, r.prototype.handleSearch = function () {
          if (this.resizeSearch(), !this._keyUpPrevented) {
            var e = this.$search.val();
            this.trigger("query", {
              term: e
            });
          }

          this._keyUpPrevented = !1;
        }, r.prototype.searchRemoveChoice = function (e, t) {
          this.trigger("unselect", {
            data: t
          }), this.$search.val(t.text), this.handleSearch();
        }, r.prototype.resizeSearch = function () {
          this.$search.css("width", "25px");
          var e = "100%";
          "" === this.$search.attr("placeholder") && (e = .75 * (this.$search.val().length + 1) + "em"), this.$search.css("width", e);
        }, r;
      }), t.define("select2/selection/selectionCss", ["../utils"], function (e) {
        function t() {}

        return t.prototype.render = function (t) {
          var n = t.call(this),
              r = this.options.get("selectionCssClass") || "";
          return -1 !== r.indexOf(":all:") && (r = r.replace(":all:", ""), e.copyNonInternalCssClasses(n[0], this.$element[0])), n.addClass(r), n;
        }, t;
      }), t.define("select2/selection/eventRelay", ["jquery"], function (e) {
        function t() {}

        return t.prototype.bind = function (t, n, r) {
          var i = this,
              o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
              s = ["opening", "closing", "selecting", "unselecting", "clearing"];
          t.call(this, n, r), n.on("*", function (t, n) {
            if (-1 !== o.indexOf(t)) {
              n = n || {};
              var r = e.Event("select2:" + t, {
                params: n
              });
              i.$element.trigger(r), -1 !== s.indexOf(t) && (n.prevented = r.isDefaultPrevented());
            }
          });
        }, t;
      }), t.define("select2/translation", ["jquery", "require"], function (e, t) {
        function n(e) {
          this.dict = e || {};
        }

        return n.prototype.all = function () {
          return this.dict;
        }, n.prototype.get = function (e) {
          return this.dict[e];
        }, n.prototype.extend = function (t) {
          this.dict = e.extend({}, t.all(), this.dict);
        }, n._cache = {}, n.loadPath = function (e) {
          if (!(e in n._cache)) {
            var r = t(e);
            n._cache[e] = r;
          }

          return new n(n._cache[e]);
        }, n;
      }), t.define("select2/diacritics", [], function () {
        return {
          "Ⓐ": "A",
          "Ａ": "A",
          "À": "A",
          "Á": "A",
          "Â": "A",
          "Ầ": "A",
          "Ấ": "A",
          "Ẫ": "A",
          "Ẩ": "A",
          "Ã": "A",
          "Ā": "A",
          "Ă": "A",
          "Ằ": "A",
          "Ắ": "A",
          "Ẵ": "A",
          "Ẳ": "A",
          "Ȧ": "A",
          "Ǡ": "A",
          "Ä": "A",
          "Ǟ": "A",
          "Ả": "A",
          "Å": "A",
          "Ǻ": "A",
          "Ǎ": "A",
          "Ȁ": "A",
          "Ȃ": "A",
          "Ạ": "A",
          "Ậ": "A",
          "Ặ": "A",
          "Ḁ": "A",
          "Ą": "A",
          "Ⱥ": "A",
          "Ɐ": "A",
          "Ꜳ": "AA",
          "Æ": "AE",
          "Ǽ": "AE",
          "Ǣ": "AE",
          "Ꜵ": "AO",
          "Ꜷ": "AU",
          "Ꜹ": "AV",
          "Ꜻ": "AV",
          "Ꜽ": "AY",
          "Ⓑ": "B",
          "Ｂ": "B",
          "Ḃ": "B",
          "Ḅ": "B",
          "Ḇ": "B",
          "Ƀ": "B",
          "Ƃ": "B",
          "Ɓ": "B",
          "Ⓒ": "C",
          "Ｃ": "C",
          "Ć": "C",
          "Ĉ": "C",
          "Ċ": "C",
          "Č": "C",
          "Ç": "C",
          "Ḉ": "C",
          "Ƈ": "C",
          "Ȼ": "C",
          "Ꜿ": "C",
          "Ⓓ": "D",
          "Ｄ": "D",
          "Ḋ": "D",
          "Ď": "D",
          "Ḍ": "D",
          "Ḑ": "D",
          "Ḓ": "D",
          "Ḏ": "D",
          "Đ": "D",
          "Ƌ": "D",
          "Ɗ": "D",
          "Ɖ": "D",
          "Ꝺ": "D",
          "Ǳ": "DZ",
          "Ǆ": "DZ",
          "ǲ": "Dz",
          "ǅ": "Dz",
          "Ⓔ": "E",
          "Ｅ": "E",
          "È": "E",
          "É": "E",
          "Ê": "E",
          "Ề": "E",
          "Ế": "E",
          "Ễ": "E",
          "Ể": "E",
          "Ẽ": "E",
          "Ē": "E",
          "Ḕ": "E",
          "Ḗ": "E",
          "Ĕ": "E",
          "Ė": "E",
          "Ë": "E",
          "Ẻ": "E",
          "Ě": "E",
          "Ȅ": "E",
          "Ȇ": "E",
          "Ẹ": "E",
          "Ệ": "E",
          "Ȩ": "E",
          "Ḝ": "E",
          "Ę": "E",
          "Ḙ": "E",
          "Ḛ": "E",
          "Ɛ": "E",
          "Ǝ": "E",
          "Ⓕ": "F",
          "Ｆ": "F",
          "Ḟ": "F",
          "Ƒ": "F",
          "Ꝼ": "F",
          "Ⓖ": "G",
          "Ｇ": "G",
          "Ǵ": "G",
          "Ĝ": "G",
          "Ḡ": "G",
          "Ğ": "G",
          "Ġ": "G",
          "Ǧ": "G",
          "Ģ": "G",
          "Ǥ": "G",
          "Ɠ": "G",
          "Ꞡ": "G",
          "Ᵹ": "G",
          "Ꝿ": "G",
          "Ⓗ": "H",
          "Ｈ": "H",
          "Ĥ": "H",
          "Ḣ": "H",
          "Ḧ": "H",
          "Ȟ": "H",
          "Ḥ": "H",
          "Ḩ": "H",
          "Ḫ": "H",
          "Ħ": "H",
          "Ⱨ": "H",
          "Ⱶ": "H",
          "Ɥ": "H",
          "Ⓘ": "I",
          "Ｉ": "I",
          "Ì": "I",
          "Í": "I",
          "Î": "I",
          "Ĩ": "I",
          "Ī": "I",
          "Ĭ": "I",
          "İ": "I",
          "Ï": "I",
          "Ḯ": "I",
          "Ỉ": "I",
          "Ǐ": "I",
          "Ȉ": "I",
          "Ȋ": "I",
          "Ị": "I",
          "Į": "I",
          "Ḭ": "I",
          "Ɨ": "I",
          "Ⓙ": "J",
          "Ｊ": "J",
          "Ĵ": "J",
          "Ɉ": "J",
          "Ⓚ": "K",
          "Ｋ": "K",
          "Ḱ": "K",
          "Ǩ": "K",
          "Ḳ": "K",
          "Ķ": "K",
          "Ḵ": "K",
          "Ƙ": "K",
          "Ⱪ": "K",
          "Ꝁ": "K",
          "Ꝃ": "K",
          "Ꝅ": "K",
          "Ꞣ": "K",
          "Ⓛ": "L",
          "Ｌ": "L",
          "Ŀ": "L",
          "Ĺ": "L",
          "Ľ": "L",
          "Ḷ": "L",
          "Ḹ": "L",
          "Ļ": "L",
          "Ḽ": "L",
          "Ḻ": "L",
          "Ł": "L",
          "Ƚ": "L",
          "Ɫ": "L",
          "Ⱡ": "L",
          "Ꝉ": "L",
          "Ꝇ": "L",
          "Ꞁ": "L",
          "Ǉ": "LJ",
          "ǈ": "Lj",
          "Ⓜ": "M",
          "Ｍ": "M",
          "Ḿ": "M",
          "Ṁ": "M",
          "Ṃ": "M",
          "Ɱ": "M",
          "Ɯ": "M",
          "Ⓝ": "N",
          "Ｎ": "N",
          "Ǹ": "N",
          "Ń": "N",
          "Ñ": "N",
          "Ṅ": "N",
          "Ň": "N",
          "Ṇ": "N",
          "Ņ": "N",
          "Ṋ": "N",
          "Ṉ": "N",
          "Ƞ": "N",
          "Ɲ": "N",
          "Ꞑ": "N",
          "Ꞥ": "N",
          "Ǌ": "NJ",
          "ǋ": "Nj",
          "Ⓞ": "O",
          "Ｏ": "O",
          "Ò": "O",
          "Ó": "O",
          "Ô": "O",
          "Ồ": "O",
          "Ố": "O",
          "Ỗ": "O",
          "Ổ": "O",
          "Õ": "O",
          "Ṍ": "O",
          "Ȭ": "O",
          "Ṏ": "O",
          "Ō": "O",
          "Ṑ": "O",
          "Ṓ": "O",
          "Ŏ": "O",
          "Ȯ": "O",
          "Ȱ": "O",
          "Ö": "O",
          "Ȫ": "O",
          "Ỏ": "O",
          "Ő": "O",
          "Ǒ": "O",
          "Ȍ": "O",
          "Ȏ": "O",
          "Ơ": "O",
          "Ờ": "O",
          "Ớ": "O",
          "Ỡ": "O",
          "Ở": "O",
          "Ợ": "O",
          "Ọ": "O",
          "Ộ": "O",
          "Ǫ": "O",
          "Ǭ": "O",
          "Ø": "O",
          "Ǿ": "O",
          "Ɔ": "O",
          "Ɵ": "O",
          "Ꝋ": "O",
          "Ꝍ": "O",
          "Œ": "OE",
          "Ƣ": "OI",
          "Ꝏ": "OO",
          "Ȣ": "OU",
          "Ⓟ": "P",
          "Ｐ": "P",
          "Ṕ": "P",
          "Ṗ": "P",
          "Ƥ": "P",
          "Ᵽ": "P",
          "Ꝑ": "P",
          "Ꝓ": "P",
          "Ꝕ": "P",
          "Ⓠ": "Q",
          "Ｑ": "Q",
          "Ꝗ": "Q",
          "Ꝙ": "Q",
          "Ɋ": "Q",
          "Ⓡ": "R",
          "Ｒ": "R",
          "Ŕ": "R",
          "Ṙ": "R",
          "Ř": "R",
          "Ȑ": "R",
          "Ȓ": "R",
          "Ṛ": "R",
          "Ṝ": "R",
          "Ŗ": "R",
          "Ṟ": "R",
          "Ɍ": "R",
          "Ɽ": "R",
          "Ꝛ": "R",
          "Ꞧ": "R",
          "Ꞃ": "R",
          "Ⓢ": "S",
          "Ｓ": "S",
          "ẞ": "S",
          "Ś": "S",
          "Ṥ": "S",
          "Ŝ": "S",
          "Ṡ": "S",
          "Š": "S",
          "Ṧ": "S",
          "Ṣ": "S",
          "Ṩ": "S",
          "Ș": "S",
          "Ş": "S",
          "Ȿ": "S",
          "Ꞩ": "S",
          "Ꞅ": "S",
          "Ⓣ": "T",
          "Ｔ": "T",
          "Ṫ": "T",
          "Ť": "T",
          "Ṭ": "T",
          "Ț": "T",
          "Ţ": "T",
          "Ṱ": "T",
          "Ṯ": "T",
          "Ŧ": "T",
          "Ƭ": "T",
          "Ʈ": "T",
          "Ⱦ": "T",
          "Ꞇ": "T",
          "Ꜩ": "TZ",
          "Ⓤ": "U",
          "Ｕ": "U",
          "Ù": "U",
          "Ú": "U",
          "Û": "U",
          "Ũ": "U",
          "Ṹ": "U",
          "Ū": "U",
          "Ṻ": "U",
          "Ŭ": "U",
          "Ü": "U",
          "Ǜ": "U",
          "Ǘ": "U",
          "Ǖ": "U",
          "Ǚ": "U",
          "Ủ": "U",
          "Ů": "U",
          "Ű": "U",
          "Ǔ": "U",
          "Ȕ": "U",
          "Ȗ": "U",
          "Ư": "U",
          "Ừ": "U",
          "Ứ": "U",
          "Ữ": "U",
          "Ử": "U",
          "Ự": "U",
          "Ụ": "U",
          "Ṳ": "U",
          "Ų": "U",
          "Ṷ": "U",
          "Ṵ": "U",
          "Ʉ": "U",
          "Ⓥ": "V",
          "Ｖ": "V",
          "Ṽ": "V",
          "Ṿ": "V",
          "Ʋ": "V",
          "Ꝟ": "V",
          "Ʌ": "V",
          "Ꝡ": "VY",
          "Ⓦ": "W",
          "Ｗ": "W",
          "Ẁ": "W",
          "Ẃ": "W",
          "Ŵ": "W",
          "Ẇ": "W",
          "Ẅ": "W",
          "Ẉ": "W",
          "Ⱳ": "W",
          "Ⓧ": "X",
          "Ｘ": "X",
          "Ẋ": "X",
          "Ẍ": "X",
          "Ⓨ": "Y",
          "Ｙ": "Y",
          "Ỳ": "Y",
          "Ý": "Y",
          "Ŷ": "Y",
          "Ỹ": "Y",
          "Ȳ": "Y",
          "Ẏ": "Y",
          "Ÿ": "Y",
          "Ỷ": "Y",
          "Ỵ": "Y",
          "Ƴ": "Y",
          "Ɏ": "Y",
          "Ỿ": "Y",
          "Ⓩ": "Z",
          "Ｚ": "Z",
          "Ź": "Z",
          "Ẑ": "Z",
          "Ż": "Z",
          "Ž": "Z",
          "Ẓ": "Z",
          "Ẕ": "Z",
          "Ƶ": "Z",
          "Ȥ": "Z",
          "Ɀ": "Z",
          "Ⱬ": "Z",
          "Ꝣ": "Z",
          "ⓐ": "a",
          "ａ": "a",
          "ẚ": "a",
          "à": "a",
          "á": "a",
          "â": "a",
          "ầ": "a",
          "ấ": "a",
          "ẫ": "a",
          "ẩ": "a",
          "ã": "a",
          "ā": "a",
          "ă": "a",
          "ằ": "a",
          "ắ": "a",
          "ẵ": "a",
          "ẳ": "a",
          "ȧ": "a",
          "ǡ": "a",
          "ä": "a",
          "ǟ": "a",
          "ả": "a",
          "å": "a",
          "ǻ": "a",
          "ǎ": "a",
          "ȁ": "a",
          "ȃ": "a",
          "ạ": "a",
          "ậ": "a",
          "ặ": "a",
          "ḁ": "a",
          "ą": "a",
          "ⱥ": "a",
          "ɐ": "a",
          "ꜳ": "aa",
          "æ": "ae",
          "ǽ": "ae",
          "ǣ": "ae",
          "ꜵ": "ao",
          "ꜷ": "au",
          "ꜹ": "av",
          "ꜻ": "av",
          "ꜽ": "ay",
          "ⓑ": "b",
          "ｂ": "b",
          "ḃ": "b",
          "ḅ": "b",
          "ḇ": "b",
          "ƀ": "b",
          "ƃ": "b",
          "ɓ": "b",
          "ⓒ": "c",
          "ｃ": "c",
          "ć": "c",
          "ĉ": "c",
          "ċ": "c",
          "č": "c",
          "ç": "c",
          "ḉ": "c",
          "ƈ": "c",
          "ȼ": "c",
          "ꜿ": "c",
          "ↄ": "c",
          "ⓓ": "d",
          "ｄ": "d",
          "ḋ": "d",
          "ď": "d",
          "ḍ": "d",
          "ḑ": "d",
          "ḓ": "d",
          "ḏ": "d",
          "đ": "d",
          "ƌ": "d",
          "ɖ": "d",
          "ɗ": "d",
          "ꝺ": "d",
          "ǳ": "dz",
          "ǆ": "dz",
          "ⓔ": "e",
          "ｅ": "e",
          "è": "e",
          "é": "e",
          "ê": "e",
          "ề": "e",
          "ế": "e",
          "ễ": "e",
          "ể": "e",
          "ẽ": "e",
          "ē": "e",
          "ḕ": "e",
          "ḗ": "e",
          "ĕ": "e",
          "ė": "e",
          "ë": "e",
          "ẻ": "e",
          "ě": "e",
          "ȅ": "e",
          "ȇ": "e",
          "ẹ": "e",
          "ệ": "e",
          "ȩ": "e",
          "ḝ": "e",
          "ę": "e",
          "ḙ": "e",
          "ḛ": "e",
          "ɇ": "e",
          "ɛ": "e",
          "ǝ": "e",
          "ⓕ": "f",
          "ｆ": "f",
          "ḟ": "f",
          "ƒ": "f",
          "ꝼ": "f",
          "ⓖ": "g",
          "ｇ": "g",
          "ǵ": "g",
          "ĝ": "g",
          "ḡ": "g",
          "ğ": "g",
          "ġ": "g",
          "ǧ": "g",
          "ģ": "g",
          "ǥ": "g",
          "ɠ": "g",
          "ꞡ": "g",
          "ᵹ": "g",
          "ꝿ": "g",
          "ⓗ": "h",
          "ｈ": "h",
          "ĥ": "h",
          "ḣ": "h",
          "ḧ": "h",
          "ȟ": "h",
          "ḥ": "h",
          "ḩ": "h",
          "ḫ": "h",
          "ẖ": "h",
          "ħ": "h",
          "ⱨ": "h",
          "ⱶ": "h",
          "ɥ": "h",
          "ƕ": "hv",
          "ⓘ": "i",
          "ｉ": "i",
          "ì": "i",
          "í": "i",
          "î": "i",
          "ĩ": "i",
          "ī": "i",
          "ĭ": "i",
          "ï": "i",
          "ḯ": "i",
          "ỉ": "i",
          "ǐ": "i",
          "ȉ": "i",
          "ȋ": "i",
          "ị": "i",
          "į": "i",
          "ḭ": "i",
          "ɨ": "i",
          "ı": "i",
          "ⓙ": "j",
          "ｊ": "j",
          "ĵ": "j",
          "ǰ": "j",
          "ɉ": "j",
          "ⓚ": "k",
          "ｋ": "k",
          "ḱ": "k",
          "ǩ": "k",
          "ḳ": "k",
          "ķ": "k",
          "ḵ": "k",
          "ƙ": "k",
          "ⱪ": "k",
          "ꝁ": "k",
          "ꝃ": "k",
          "ꝅ": "k",
          "ꞣ": "k",
          "ⓛ": "l",
          "ｌ": "l",
          "ŀ": "l",
          "ĺ": "l",
          "ľ": "l",
          "ḷ": "l",
          "ḹ": "l",
          "ļ": "l",
          "ḽ": "l",
          "ḻ": "l",
          "ſ": "l",
          "ł": "l",
          "ƚ": "l",
          "ɫ": "l",
          "ⱡ": "l",
          "ꝉ": "l",
          "ꞁ": "l",
          "ꝇ": "l",
          "ǉ": "lj",
          "ⓜ": "m",
          "ｍ": "m",
          "ḿ": "m",
          "ṁ": "m",
          "ṃ": "m",
          "ɱ": "m",
          "ɯ": "m",
          "ⓝ": "n",
          "ｎ": "n",
          "ǹ": "n",
          "ń": "n",
          "ñ": "n",
          "ṅ": "n",
          "ň": "n",
          "ṇ": "n",
          "ņ": "n",
          "ṋ": "n",
          "ṉ": "n",
          "ƞ": "n",
          "ɲ": "n",
          "ŉ": "n",
          "ꞑ": "n",
          "ꞥ": "n",
          "ǌ": "nj",
          "ⓞ": "o",
          "ｏ": "o",
          "ò": "o",
          "ó": "o",
          "ô": "o",
          "ồ": "o",
          "ố": "o",
          "ỗ": "o",
          "ổ": "o",
          "õ": "o",
          "ṍ": "o",
          "ȭ": "o",
          "ṏ": "o",
          "ō": "o",
          "ṑ": "o",
          "ṓ": "o",
          "ŏ": "o",
          "ȯ": "o",
          "ȱ": "o",
          "ö": "o",
          "ȫ": "o",
          "ỏ": "o",
          "ő": "o",
          "ǒ": "o",
          "ȍ": "o",
          "ȏ": "o",
          "ơ": "o",
          "ờ": "o",
          "ớ": "o",
          "ỡ": "o",
          "ở": "o",
          "ợ": "o",
          "ọ": "o",
          "ộ": "o",
          "ǫ": "o",
          "ǭ": "o",
          "ø": "o",
          "ǿ": "o",
          "ɔ": "o",
          "ꝋ": "o",
          "ꝍ": "o",
          "ɵ": "o",
          "œ": "oe",
          "ƣ": "oi",
          "ȣ": "ou",
          "ꝏ": "oo",
          "ⓟ": "p",
          "ｐ": "p",
          "ṕ": "p",
          "ṗ": "p",
          "ƥ": "p",
          "ᵽ": "p",
          "ꝑ": "p",
          "ꝓ": "p",
          "ꝕ": "p",
          "ⓠ": "q",
          "ｑ": "q",
          "ɋ": "q",
          "ꝗ": "q",
          "ꝙ": "q",
          "ⓡ": "r",
          "ｒ": "r",
          "ŕ": "r",
          "ṙ": "r",
          "ř": "r",
          "ȑ": "r",
          "ȓ": "r",
          "ṛ": "r",
          "ṝ": "r",
          "ŗ": "r",
          "ṟ": "r",
          "ɍ": "r",
          "ɽ": "r",
          "ꝛ": "r",
          "ꞧ": "r",
          "ꞃ": "r",
          "ⓢ": "s",
          "ｓ": "s",
          "ß": "s",
          "ś": "s",
          "ṥ": "s",
          "ŝ": "s",
          "ṡ": "s",
          "š": "s",
          "ṧ": "s",
          "ṣ": "s",
          "ṩ": "s",
          "ș": "s",
          "ş": "s",
          "ȿ": "s",
          "ꞩ": "s",
          "ꞅ": "s",
          "ẛ": "s",
          "ⓣ": "t",
          "ｔ": "t",
          "ṫ": "t",
          "ẗ": "t",
          "ť": "t",
          "ṭ": "t",
          "ț": "t",
          "ţ": "t",
          "ṱ": "t",
          "ṯ": "t",
          "ŧ": "t",
          "ƭ": "t",
          "ʈ": "t",
          "ⱦ": "t",
          "ꞇ": "t",
          "ꜩ": "tz",
          "ⓤ": "u",
          "ｕ": "u",
          "ù": "u",
          "ú": "u",
          "û": "u",
          "ũ": "u",
          "ṹ": "u",
          "ū": "u",
          "ṻ": "u",
          "ŭ": "u",
          "ü": "u",
          "ǜ": "u",
          "ǘ": "u",
          "ǖ": "u",
          "ǚ": "u",
          "ủ": "u",
          "ů": "u",
          "ű": "u",
          "ǔ": "u",
          "ȕ": "u",
          "ȗ": "u",
          "ư": "u",
          "ừ": "u",
          "ứ": "u",
          "ữ": "u",
          "ử": "u",
          "ự": "u",
          "ụ": "u",
          "ṳ": "u",
          "ų": "u",
          "ṷ": "u",
          "ṵ": "u",
          "ʉ": "u",
          "ⓥ": "v",
          "ｖ": "v",
          "ṽ": "v",
          "ṿ": "v",
          "ʋ": "v",
          "ꝟ": "v",
          "ʌ": "v",
          "ꝡ": "vy",
          "ⓦ": "w",
          "ｗ": "w",
          "ẁ": "w",
          "ẃ": "w",
          "ŵ": "w",
          "ẇ": "w",
          "ẅ": "w",
          "ẘ": "w",
          "ẉ": "w",
          "ⱳ": "w",
          "ⓧ": "x",
          "ｘ": "x",
          "ẋ": "x",
          "ẍ": "x",
          "ⓨ": "y",
          "ｙ": "y",
          "ỳ": "y",
          "ý": "y",
          "ŷ": "y",
          "ỹ": "y",
          "ȳ": "y",
          "ẏ": "y",
          "ÿ": "y",
          "ỷ": "y",
          "ẙ": "y",
          "ỵ": "y",
          "ƴ": "y",
          "ɏ": "y",
          "ỿ": "y",
          "ⓩ": "z",
          "ｚ": "z",
          "ź": "z",
          "ẑ": "z",
          "ż": "z",
          "ž": "z",
          "ẓ": "z",
          "ẕ": "z",
          "ƶ": "z",
          "ȥ": "z",
          "ɀ": "z",
          "ⱬ": "z",
          "ꝣ": "z",
          "Ά": "Α",
          "Έ": "Ε",
          "Ή": "Η",
          "Ί": "Ι",
          "Ϊ": "Ι",
          "Ό": "Ο",
          "Ύ": "Υ",
          "Ϋ": "Υ",
          "Ώ": "Ω",
          "ά": "α",
          "έ": "ε",
          "ή": "η",
          "ί": "ι",
          "ϊ": "ι",
          "ΐ": "ι",
          "ό": "ο",
          "ύ": "υ",
          "ϋ": "υ",
          "ΰ": "υ",
          "ώ": "ω",
          "ς": "σ",
          "’": "'"
        };
      }), t.define("select2/data/base", ["../utils"], function (e) {
        function t(e, n) {
          t.__super__.constructor.call(this);
        }

        return e.Extend(t, e.Observable), t.prototype.current = function (e) {
          throw new Error("The `current` method must be defined in child classes.");
        }, t.prototype.query = function (e, t) {
          throw new Error("The `query` method must be defined in child classes.");
        }, t.prototype.bind = function (e, t) {}, t.prototype.destroy = function () {}, t.prototype.generateResultId = function (t, n) {
          var r = t.id + "-result-";
          return r += e.generateChars(4), null != n.id ? r += "-" + n.id.toString() : r += "-" + e.generateChars(4), r;
        }, t;
      }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, n) {
        function r(e, t) {
          this.$element = e, this.options = t, r.__super__.constructor.call(this);
        }

        return t.Extend(r, e), r.prototype.current = function (e) {
          var t = this;
          e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), function (e) {
            return t.item(n(e));
          }));
        }, r.prototype.select = function (e) {
          var t = this;
          if (e.selected = !0, null != e.element && "option" === e.element.tagName.toLowerCase()) return e.element.selected = !0, void this.$element.trigger("input").trigger("change");
          if (this.$element.prop("multiple")) this.current(function (n) {
            var r = [];
            (e = [e]).push.apply(e, n);

            for (var i = 0; i < e.length; i++) {
              var o = e[i].id;
              -1 === r.indexOf(o) && r.push(o);
            }

            t.$element.val(r), t.$element.trigger("input").trigger("change");
          });else {
            var n = e.id;
            this.$element.val(n), this.$element.trigger("input").trigger("change");
          }
        }, r.prototype.unselect = function (e) {
          var t = this;

          if (this.$element.prop("multiple")) {
            if (e.selected = !1, null != e.element && "option" === e.element.tagName.toLowerCase()) return e.element.selected = !1, void this.$element.trigger("input").trigger("change");
            this.current(function (n) {
              for (var r = [], i = 0; i < n.length; i++) {
                var o = n[i].id;
                o !== e.id && -1 === r.indexOf(o) && r.push(o);
              }

              t.$element.val(r), t.$element.trigger("input").trigger("change");
            });
          }
        }, r.prototype.bind = function (e, t) {
          var n = this;
          this.container = e, e.on("select", function (e) {
            n.select(e.data);
          }), e.on("unselect", function (e) {
            n.unselect(e.data);
          });
        }, r.prototype.destroy = function () {
          this.$element.find("*").each(function () {
            t.RemoveData(this);
          });
        }, r.prototype.query = function (e, t) {
          var r = [],
              i = this;
          this.$element.children().each(function () {
            if ("option" === this.tagName.toLowerCase() || "optgroup" === this.tagName.toLowerCase()) {
              var t = n(this),
                  o = i.item(t),
                  s = i.matches(e, o);
              null !== s && r.push(s);
            }
          }), t({
            results: r
          });
        }, r.prototype.addOptions = function (e) {
          this.$element.append(e);
        }, r.prototype.option = function (e) {
          var r;
          e.children ? (r = document.createElement("optgroup")).label = e.text : void 0 !== (r = document.createElement("option")).textContent ? r.textContent = e.text : r.innerText = e.text, void 0 !== e.id && (r.value = e.id), e.disabled && (r.disabled = !0), e.selected && (r.selected = !0), e.title && (r.title = e.title);

          var i = this._normalizeItem(e);

          return i.element = r, t.StoreData(r, "data", i), n(r);
        }, r.prototype.item = function (e) {
          var r = {};
          if (null != (r = t.GetData(e[0], "data"))) return r;
          var i = e[0];
          if ("option" === i.tagName.toLowerCase()) r = {
            id: e.val(),
            text: e.text(),
            disabled: e.prop("disabled"),
            selected: e.prop("selected"),
            title: e.prop("title")
          };else if ("optgroup" === i.tagName.toLowerCase()) {
            r = {
              text: e.prop("label"),
              children: [],
              title: e.prop("title")
            };

            for (var o = e.children("option"), s = [], a = 0; a < o.length; a++) {
              var l = n(o[a]),
                  c = this.item(l);
              s.push(c);
            }

            r.children = s;
          }
          return (r = this._normalizeItem(r)).element = e[0], t.StoreData(e[0], "data", r), r;
        }, r.prototype._normalizeItem = function (e) {
          return e !== Object(e) && (e = {
            id: e,
            text: e
          }), null != (e = n.extend({}, {
            text: ""
          }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, {
            selected: !1,
            disabled: !1
          }, e);
        }, r.prototype.matches = function (e, t) {
          return this.options.get("matcher")(e, t);
        }, r;
      }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, n) {
        function r(e, t) {
          this._dataToConvert = t.get("data") || [], r.__super__.constructor.call(this, e, t);
        }

        return t.Extend(r, e), r.prototype.bind = function (e, t) {
          r.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert));
        }, r.prototype.select = function (e) {
          var t = this.$element.find("option").filter(function (t, n) {
            return n.value == e.id.toString();
          });
          0 === t.length && (t = this.option(e), this.addOptions(t)), r.__super__.select.call(this, e);
        }, r.prototype.convertToOptions = function (e) {
          var t = this,
              r = this.$element.find("option"),
              i = r.map(function () {
            return t.item(n(this)).id;
          }).get(),
              o = [];

          function s(e) {
            return function () {
              return n(this).val() == e.id;
            };
          }

          for (var a = 0; a < e.length; a++) {
            var l = this._normalizeItem(e[a]);

            if (i.indexOf(l.id) >= 0) {
              var c = r.filter(s(l)),
                  u = this.item(c),
                  d = n.extend(!0, {}, l, u),
                  p = this.option(d);
              c.replaceWith(p);
            } else {
              var h = this.option(l);

              if (l.children) {
                var f = this.convertToOptions(l.children);
                h.append(f);
              }

              o.push(h);
            }
          }

          return o;
        }, r;
      }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, n) {
        function r(e, t) {
          this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), r.__super__.constructor.call(this, e, t);
        }

        return t.Extend(r, e), r.prototype._applyDefaults = function (e) {
          var t = {
            data: function data(e) {
              return n.extend({}, e, {
                q: e.term
              });
            },
            transport: function transport(e, t, r) {
              var i = n.ajax(e);
              return i.then(t), i.fail(r), i;
            }
          };
          return n.extend({}, t, e, !0);
        }, r.prototype.processResults = function (e) {
          return e;
        }, r.prototype.query = function (e, t) {
          var r = this;
          null != this._request && ("function" == typeof this._request.abort && this._request.abort(), this._request = null);
          var i = n.extend({
            type: "GET"
          }, this.ajaxOptions);

          function o() {
            var n = i.transport(i, function (n) {
              var i = r.processResults(n, e);
              r.options.get("debug") && window.console && console.error && (i && i.results && Array.isArray(i.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(i);
            }, function () {
              (!("status" in n) || 0 !== n.status && "0" !== n.status) && r.trigger("results:message", {
                message: "errorLoading"
              });
            });
            r._request = n;
          }

          "function" == typeof i.url && (i.url = i.url.call(this.$element, e)), "function" == typeof i.data && (i.data = i.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(o, this.ajaxOptions.delay)) : o();
        }, r;
      }), t.define("select2/data/tags", ["jquery"], function (e) {
        function t(e, t, n) {
          var r = n.get("tags"),
              i = n.get("createTag");
          void 0 !== i && (this.createTag = i);
          var o = n.get("insertTag");
          if (void 0 !== o && (this.insertTag = o), e.call(this, t, n), Array.isArray(r)) for (var s = 0; s < r.length; s++) {
            var a = r[s],
                l = this._normalizeItem(a),
                c = this.option(l);

            this.$element.append(c);
          }
        }

        return t.prototype.query = function (e, t, n) {
          var r = this;
          this._removeOldTags(), null != t.term && null == t.page ? e.call(this, t, function e(i, o) {
            for (var s = i.results, a = 0; a < s.length; a++) {
              var l = s[a],
                  c = null != l.children && !e({
                results: l.children
              }, !0);
              if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || c) return !o && (i.data = s, void n(i));
            }

            if (o) return !0;
            var u = r.createTag(t);

            if (null != u) {
              var d = r.option(u);
              d.attr("data-select2-tag", "true"), r.addOptions([d]), r.insertTag(s, u);
            }

            i.results = s, n(i);
          }) : e.call(this, t, n);
        }, t.prototype.createTag = function (e, t) {
          if (null == t.term) return null;
          var n = t.term.trim();
          return "" === n ? null : {
            id: n,
            text: n
          };
        }, t.prototype.insertTag = function (e, t, n) {
          t.unshift(n);
        }, t.prototype._removeOldTags = function (t) {
          this.$element.find("option[data-select2-tag]").each(function () {
            this.selected || e(this).remove();
          });
        }, t;
      }), t.define("select2/data/tokenizer", ["jquery"], function (e) {
        function t(e, t, n) {
          var r = n.get("tokenizer");
          void 0 !== r && (this.tokenizer = r), e.call(this, t, n);
        }

        return t.prototype.bind = function (e, t, n) {
          e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field");
        }, t.prototype.query = function (t, n, r) {
          var i = this;
          n.term = n.term || "";
          var o = this.tokenizer(n, this.options, function (t) {
            var n = i._normalizeItem(t);

            if (!i.$element.find("option").filter(function () {
              return e(this).val() === n.id;
            }).length) {
              var r = i.option(n);
              r.attr("data-select2-tag", !0), i._removeOldTags(), i.addOptions([r]);
            }

            !function (e) {
              i.trigger("select", {
                data: e
              });
            }(n);
          });
          o.term !== n.term && (this.$search.length && (this.$search.val(o.term), this.$search.trigger("focus")), n.term = o.term), t.call(this, n, r);
        }, t.prototype.tokenizer = function (t, n, r, i) {
          for (var o = r.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function (e) {
            return {
              id: e.term,
              text: e.term
            };
          }; a < s.length;) {
            var c = s[a];

            if (-1 !== o.indexOf(c)) {
              var u = s.substr(0, a),
                  d = l(e.extend({}, n, {
                term: u
              }));
              null != d ? (i(d), s = s.substr(a + 1) || "", a = 0) : a++;
            } else a++;
          }

          return {
            term: s
          };
        }, t;
      }), t.define("select2/data/minimumInputLength", [], function () {
        function e(e, t, n) {
          this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n);
        }

        return e.prototype.query = function (e, t, n) {
          t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
            message: "inputTooShort",
            args: {
              minimum: this.minimumInputLength,
              input: t.term,
              params: t
            }
          }) : e.call(this, t, n);
        }, e;
      }), t.define("select2/data/maximumInputLength", [], function () {
        function e(e, t, n) {
          this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n);
        }

        return e.prototype.query = function (e, t, n) {
          t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
            message: "inputTooLong",
            args: {
              maximum: this.maximumInputLength,
              input: t.term,
              params: t
            }
          }) : e.call(this, t, n);
        }, e;
      }), t.define("select2/data/maximumSelectionLength", [], function () {
        function e(e, t, n) {
          this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n);
        }

        return e.prototype.bind = function (e, t, n) {
          var r = this;
          e.call(this, t, n), t.on("select", function () {
            r._checkIfMaximumSelected();
          });
        }, e.prototype.query = function (e, t, n) {
          var r = this;

          this._checkIfMaximumSelected(function () {
            e.call(r, t, n);
          });
        }, e.prototype._checkIfMaximumSelected = function (e, t) {
          var n = this;
          this.current(function (e) {
            var r = null != e ? e.length : 0;
            n.maximumSelectionLength > 0 && r >= n.maximumSelectionLength ? n.trigger("results:message", {
              message: "maximumSelected",
              args: {
                maximum: n.maximumSelectionLength
              }
            }) : t && t();
          });
        }, e;
      }), t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
        function n(e, t) {
          this.$element = e, this.options = t, n.__super__.constructor.call(this);
        }

        return t.Extend(n, t.Observable), n.prototype.render = function () {
          var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
          return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t;
        }, n.prototype.bind = function () {}, n.prototype.position = function (e, t) {}, n.prototype.destroy = function () {
          this.$dropdown.remove();
        }, n;
      }), t.define("select2/dropdown/search", ["jquery"], function (e) {
        function t() {}

        return t.prototype.render = function (t) {
          var n = t.call(this),
              r = this.options.get("translations").get("search"),
              i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
          return this.$searchContainer = i, this.$search = i.find("input"), this.$search.prop("autocomplete", this.options.get("autocomplete")), this.$search.attr("aria-label", r()), n.prepend(i), n;
        }, t.prototype.bind = function (t, n, r) {
          var i = this,
              o = n.id + "-results";
          t.call(this, n, r), this.$search.on("keydown", function (e) {
            i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented();
          }), this.$search.on("input", function (t) {
            e(this).off("keyup");
          }), this.$search.on("keyup input", function (e) {
            i.handleSearch(e);
          }), n.on("open", function () {
            i.$search.attr("tabindex", 0), i.$search.attr("aria-controls", o), i.$search.trigger("focus"), window.setTimeout(function () {
              i.$search.trigger("focus");
            }, 0);
          }), n.on("close", function () {
            i.$search.attr("tabindex", -1), i.$search.removeAttr("aria-controls"), i.$search.removeAttr("aria-activedescendant"), i.$search.val(""), i.$search.trigger("blur");
          }), n.on("focus", function () {
            n.isOpen() || i.$search.trigger("focus");
          }), n.on("results:all", function (e) {
            null != e.query.term && "" !== e.query.term || (i.showSearch(e) ? i.$searchContainer[0].classList.remove("select2-search--hide") : i.$searchContainer[0].classList.add("select2-search--hide"));
          }), n.on("results:focus", function (e) {
            e.data._resultId ? i.$search.attr("aria-activedescendant", e.data._resultId) : i.$search.removeAttr("aria-activedescendant");
          });
        }, t.prototype.handleSearch = function (e) {
          if (!this._keyUpPrevented) {
            var t = this.$search.val();
            this.trigger("query", {
              term: t
            });
          }

          this._keyUpPrevented = !1;
        }, t.prototype.showSearch = function (e, t) {
          return !0;
        }, t;
      }), t.define("select2/dropdown/hidePlaceholder", [], function () {
        function e(e, t, n, r) {
          this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, r);
        }

        return e.prototype.append = function (e, t) {
          t.results = this.removePlaceholder(t.results), e.call(this, t);
        }, e.prototype.normalizePlaceholder = function (e, t) {
          return "string" == typeof t && (t = {
            id: "",
            text: t
          }), t;
        }, e.prototype.removePlaceholder = function (e, t) {
          for (var n = t.slice(0), r = t.length - 1; r >= 0; r--) {
            var i = t[r];
            this.placeholder.id === i.id && n.splice(r, 1);
          }

          return n;
        }, e;
      }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
        function t(e, t, n, r) {
          this.lastParams = {}, e.call(this, t, n, r), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
        }

        return t.prototype.append = function (e, t) {
          this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded());
        }, t.prototype.bind = function (e, t, n) {
          var r = this;
          e.call(this, t, n), t.on("query", function (e) {
            r.lastParams = e, r.loading = !0;
          }), t.on("query:append", function (e) {
            r.lastParams = e, r.loading = !0;
          }), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
        }, t.prototype.loadMoreIfNeeded = function () {
          var t = e.contains(document.documentElement, this.$loadingMore[0]);
          !this.loading && t && this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore();
        }, t.prototype.loadMore = function () {
          this.loading = !0;
          var t = e.extend({}, {
            page: 1
          }, this.lastParams);
          t.page++, this.trigger("query:append", t);
        }, t.prototype.showLoadingMore = function (e, t) {
          return t.pagination && t.pagination.more;
        }, t.prototype.createLoadingMore = function () {
          var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
              n = this.options.get("translations").get("loadingMore");
          return t.html(n(this.lastParams)), t;
        }, t;
      }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (e, t) {
        function n(t, n, r) {
          this.$dropdownParent = e(r.get("dropdownParent") || document.body), t.call(this, n, r);
        }

        return n.prototype.bind = function (e, t, n) {
          var r = this;
          e.call(this, t, n), t.on("open", function () {
            r._showDropdown(), r._attachPositioningHandler(t), r._bindContainerResultHandlers(t);
          }), t.on("close", function () {
            r._hideDropdown(), r._detachPositioningHandler(t);
          }), this.$dropdownContainer.on("mousedown", function (e) {
            e.stopPropagation();
          });
        }, n.prototype.destroy = function (e) {
          e.call(this), this.$dropdownContainer.remove();
        }, n.prototype.position = function (e, t, n) {
          t.attr("class", n.attr("class")), t[0].classList.remove("select2"), t[0].classList.add("select2-container--open"), t.css({
            position: "absolute",
            top: -999999
          }), this.$container = n;
        }, n.prototype.render = function (t) {
          var n = e("<span></span>"),
              r = t.call(this);
          return n.append(r), this.$dropdownContainer = n, n;
        }, n.prototype._hideDropdown = function (e) {
          this.$dropdownContainer.detach();
        }, n.prototype._bindContainerResultHandlers = function (e, t) {
          if (!this._containerResultsHandlersBound) {
            var n = this;
            t.on("results:all", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("results:append", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("results:message", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("select", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("unselect", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), this._containerResultsHandlersBound = !0;
          }
        }, n.prototype._attachPositioningHandler = function (n, r) {
          var i = this,
              o = "scroll.select2." + r.id,
              s = "resize.select2." + r.id,
              a = "orientationchange.select2." + r.id,
              l = this.$container.parents().filter(t.hasScroll);
          l.each(function () {
            t.StoreData(this, "select2-scroll-position", {
              x: e(this).scrollLeft(),
              y: e(this).scrollTop()
            });
          }), l.on(o, function (n) {
            var r = t.GetData(this, "select2-scroll-position");
            e(this).scrollTop(r.y);
          }), e(window).on(o + " " + s + " " + a, function (e) {
            i._positionDropdown(), i._resizeDropdown();
          });
        }, n.prototype._detachPositioningHandler = function (n, r) {
          var i = "scroll.select2." + r.id,
              o = "resize.select2." + r.id,
              s = "orientationchange.select2." + r.id;
          this.$container.parents().filter(t.hasScroll).off(i), e(window).off(i + " " + o + " " + s);
        }, n.prototype._positionDropdown = function () {
          var t = e(window),
              n = this.$dropdown[0].classList.contains("select2-dropdown--above"),
              r = this.$dropdown[0].classList.contains("select2-dropdown--below"),
              i = null,
              o = this.$container.offset();
          o.bottom = o.top + this.$container.outerHeight(!1);
          var s = {
            height: this.$container.outerHeight(!1)
          };
          s.top = o.top, s.bottom = o.top + s.height;
          var a = this.$dropdown.outerHeight(!1),
              l = t.scrollTop(),
              c = t.scrollTop() + t.height(),
              u = l < o.top - a,
              d = c > o.bottom + a,
              p = {
            left: o.left,
            top: s.bottom
          },
              h = this.$dropdownParent;
          "static" === h.css("position") && (h = h.offsetParent());
          var f = {
            top: 0,
            left: 0
          };
          (e.contains(document.body, h[0]) || h[0].isConnected) && (f = h.offset()), p.top -= f.top, p.left -= f.left, n || r || (i = "below"), d || !u || n ? !u && d && n && (i = "below") : i = "above", ("above" == i || n && "below" !== i) && (p.top = s.top - f.top - a), null != i && (this.$dropdown[0].classList.remove("select2-dropdown--below"), this.$dropdown[0].classList.remove("select2-dropdown--above"), this.$dropdown[0].classList.add("select2-dropdown--" + i), this.$container[0].classList.remove("select2-container--below"), this.$container[0].classList.remove("select2-container--above"), this.$container[0].classList.add("select2-container--" + i)), this.$dropdownContainer.css(p);
        }, n.prototype._resizeDropdown = function () {
          var e = {
            width: this.$container.outerWidth(!1) + "px"
          };
          this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e);
        }, n.prototype._showDropdown = function (e) {
          this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
        }, n;
      }), t.define("select2/dropdown/minimumResultsForSearch", [], function () {
        function e(e, t, n, r) {
          this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, r);
        }

        return e.prototype.showSearch = function (e, t) {
          return !(function e(t) {
            for (var n = 0, r = 0; r < t.length; r++) {
              var i = t[r];
              i.children ? n += e(i.children) : n++;
            }

            return n;
          }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t);
        }, e;
      }), t.define("select2/dropdown/selectOnClose", ["../utils"], function (e) {
        function t() {}

        return t.prototype.bind = function (e, t, n) {
          var r = this;
          e.call(this, t, n), t.on("close", function (e) {
            r._handleSelectOnClose(e);
          });
        }, t.prototype._handleSelectOnClose = function (t, n) {
          if (n && null != n.originalSelect2Event) {
            var r = n.originalSelect2Event;
            if ("select" === r._type || "unselect" === r._type) return;
          }

          var i = this.getHighlightedResults();

          if (!(i.length < 1)) {
            var o = e.GetData(i[0], "data");
            null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {
              data: o
            });
          }
        }, t;
      }), t.define("select2/dropdown/closeOnSelect", [], function () {
        function e() {}

        return e.prototype.bind = function (e, t, n) {
          var r = this;
          e.call(this, t, n), t.on("select", function (e) {
            r._selectTriggered(e);
          }), t.on("unselect", function (e) {
            r._selectTriggered(e);
          });
        }, e.prototype._selectTriggered = function (e, t) {
          var n = t.originalEvent;
          n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
            originalEvent: n,
            originalSelect2Event: t
          });
        }, e;
      }), t.define("select2/dropdown/dropdownCss", ["../utils"], function (e) {
        function t() {}

        return t.prototype.render = function (t) {
          var n = t.call(this),
              r = this.options.get("dropdownCssClass") || "";
          return -1 !== r.indexOf(":all:") && (r = r.replace(":all:", ""), e.copyNonInternalCssClasses(n[0], this.$element[0])), n.addClass(r), n;
        }, t;
      }), t.define("select2/dropdown/tagsSearchHighlight", ["../utils"], function (e) {
        function t() {}

        return t.prototype.highlightFirstItem = function (t) {
          var n = this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");

          if (n.length > 0) {
            var r = n.first(),
                i = e.GetData(r[0], "data").element;
            if (i && i.getAttribute && "true" === i.getAttribute("data-select2-tag")) return void r.trigger("mouseenter");
          }

          t.call(this);
        }, t;
      }), t.define("select2/i18n/en", [], function () {
        return {
          errorLoading: function errorLoading() {
            return "The results could not be loaded.";
          },
          inputTooLong: function inputTooLong(e) {
            var t = e.input.length - e.maximum,
                n = "Please delete " + t + " character";
            return 1 != t && (n += "s"), n;
          },
          inputTooShort: function inputTooShort(e) {
            return "Please enter " + (e.minimum - e.input.length) + " or more characters";
          },
          loadingMore: function loadingMore() {
            return "Loading more results…";
          },
          maximumSelected: function maximumSelected(e) {
            var t = "You can only select " + e.maximum + " item";
            return 1 != e.maximum && (t += "s"), t;
          },
          noResults: function noResults() {
            return "No results found";
          },
          searching: function searching() {
            return "Searching…";
          },
          removeAllItems: function removeAllItems() {
            return "Remove all items";
          },
          removeItem: function removeItem() {
            return "Remove item";
          },
          search: function search() {
            return "Search";
          }
        };
      }), t.define("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/selectionCss", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./dropdown/dropdownCss", "./dropdown/tagsSearchHighlight", "./i18n/en"], function (e, t, n, r, i, o, s, a, l, c, u, d, p, h, f, g, m, v, y, b, x, w, _, T, C, A, S, $, E, D, k) {
        function j() {
          this.reset();
        }

        return j.prototype.apply = function (u) {
          if (null == (u = e.extend(!0, {}, this.defaults, u)).dataAdapter && (null != u.ajax ? u.dataAdapter = f : null != u.data ? u.dataAdapter = h : u.dataAdapter = p, u.minimumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, v)), u.maximumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, y)), u.maximumSelectionLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, b)), u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, g)), null == u.tokenSeparators && null == u.tokenizer || (u.dataAdapter = c.Decorate(u.dataAdapter, m))), null == u.resultsAdapter && (u.resultsAdapter = t, null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, T)), null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, _)), u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, S)), u.tags && (u.resultsAdapter = c.Decorate(u.resultsAdapter, D))), null == u.dropdownAdapter) {
            if (u.multiple) u.dropdownAdapter = x;else {
              var d = c.Decorate(x, w);
              u.dropdownAdapter = d;
            }
            0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, A)), u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, $)), null != u.dropdownCssClass && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, E)), u.dropdownAdapter = c.Decorate(u.dropdownAdapter, C);
          }

          null == u.selectionAdapter && (u.multiple ? u.selectionAdapter = r : u.selectionAdapter = n, null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, i)), u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, o)), u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, s)), null != u.selectionCssClass && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)), u.selectionAdapter = c.Decorate(u.selectionAdapter, l)), u.language = this._resolveLanguage(u.language), u.language.push("en");

          for (var k = [], j = 0; j < u.language.length; j++) {
            var L = u.language[j];
            -1 === k.indexOf(L) && k.push(L);
          }

          return u.language = k, u.translations = this._processTranslations(u.language, u.debug), u;
        }, j.prototype.reset = function () {
          function t(e) {
            return e.replace(/[^\u0000-\u007E]/g, function (e) {
              return d[e] || e;
            });
          }

          this.defaults = {
            amdLanguageBase: "./i18n/",
            autocomplete: "off",
            closeOnSelect: !0,
            debug: !1,
            dropdownAutoWidth: !1,
            escapeMarkup: c.escapeMarkup,
            language: {},
            matcher: function n(r, i) {
              if (null == r.term || "" === r.term.trim()) return i;

              if (i.children && i.children.length > 0) {
                for (var o = e.extend(!0, {}, i), s = i.children.length - 1; s >= 0; s--) {
                  null == n(r, i.children[s]) && o.children.splice(s, 1);
                }

                return o.children.length > 0 ? o : n(r, o);
              }

              var a = t(i.text).toUpperCase(),
                  l = t(r.term).toUpperCase();
              return a.indexOf(l) > -1 ? i : null;
            },
            minimumInputLength: 0,
            maximumInputLength: 0,
            maximumSelectionLength: 0,
            minimumResultsForSearch: 0,
            selectOnClose: !1,
            scrollAfterSelect: !1,
            sorter: function sorter(e) {
              return e;
            },
            templateResult: function templateResult(e) {
              return e.text;
            },
            templateSelection: function templateSelection(e) {
              return e.text;
            },
            theme: "default",
            width: "resolve"
          };
        }, j.prototype.applyFromElement = function (e, t) {
          var n = e.language,
              r = this.defaults.language,
              i = t.prop("lang"),
              o = t.closest("[lang]").prop("lang"),
              s = Array.prototype.concat.call(this._resolveLanguage(i), this._resolveLanguage(n), this._resolveLanguage(r), this._resolveLanguage(o));
          return e.language = s, e;
        }, j.prototype._resolveLanguage = function (t) {
          if (!t) return [];
          if (e.isEmptyObject(t)) return [];
          if (e.isPlainObject(t)) return [t];
          var n;
          n = Array.isArray(t) ? t : [t];

          for (var r = [], i = 0; i < n.length; i++) {
            if (r.push(n[i]), "string" == typeof n[i] && n[i].indexOf("-") > 0) {
              var o = n[i].split("-")[0];
              r.push(o);
            }
          }

          return r;
        }, j.prototype._processTranslations = function (t, n) {
          for (var r = new u(), i = 0; i < t.length; i++) {
            var o = new u(),
                s = t[i];
            if ("string" == typeof s) try {
              o = u.loadPath(s);
            } catch (e) {
              try {
                s = this.defaults.amdLanguageBase + s, o = u.loadPath(s);
              } catch (e) {
                n && window.console && console.warn && console.warn('Select2: The language file for "' + s + '" could not be automatically loaded. A fallback will be used instead.');
              }
            } else o = e.isPlainObject(s) ? new u(s) : s;
            r.extend(o);
          }

          return r;
        }, j.prototype.set = function (t, n) {
          var r = {};
          r[e.camelCase(t)] = n;

          var i = c._convertData(r);

          e.extend(!0, this.defaults, i);
        }, new j();
      }), t.define("select2/options", ["jquery", "./defaults", "./utils"], function (e, t, n) {
        function r(e, n) {
          this.options = e, null != n && this.fromElement(n), null != n && (this.options = t.applyFromElement(this.options, n)), this.options = t.apply(this.options);
        }

        return r.prototype.fromElement = function (t) {
          var r = ["select2"];
          null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.autocomplete && t.prop("autocomplete") && (this.options.autocomplete = t.prop("autocomplete")), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), n.GetData(t[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), n.StoreData(t[0], "data", n.GetData(t[0], "select2Tags")), n.StoreData(t[0], "tags", !0)), n.GetData(t[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", n.GetData(t[0], "ajaxUrl")), n.StoreData(t[0], "ajax-Url", n.GetData(t[0], "ajaxUrl")));
          var i = {};

          function o(e, t) {
            return t.toUpperCase();
          }

          for (var s = 0; s < t[0].attributes.length; s++) {
            var a = t[0].attributes[s].name;

            if ("data-" == a.substr(0, "data-".length)) {
              var l = a.substring("data-".length),
                  c = n.GetData(t[0], l);
              i[l.replace(/-([a-z])/g, o)] = c;
            }
          }

          e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset && (i = e.extend(!0, {}, t[0].dataset, i));
          var u = e.extend(!0, {}, n.GetData(t[0]), i);

          for (var d in u = n._convertData(u)) {
            r.indexOf(d) > -1 || (e.isPlainObject(this.options[d]) ? e.extend(this.options[d], u[d]) : this.options[d] = u[d]);
          }

          return this;
        }, r.prototype.get = function (e) {
          return this.options[e];
        }, r.prototype.set = function (e, t) {
          this.options[e] = t;
        }, r;
      }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (e, t, n, r) {
        var i = function i(e, r) {
          null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), r = r || {}, this.options = new t(r, e), i.__super__.constructor.call(this);
          var o = e.attr("tabindex") || 0;
          n.StoreData(e[0], "old-tabindex", o), e.attr("tabindex", "-1");
          var s = this.options.get("dataAdapter");
          this.dataAdapter = new s(e, this.options);
          var a = this.render();

          this._placeContainer(a);

          var l = this.options.get("selectionAdapter");
          this.selection = new l(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, a);
          var c = this.options.get("dropdownAdapter");
          this.dropdown = new c(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, a);
          var u = this.options.get("resultsAdapter");
          this.results = new u(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
          var d = this;
          this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
            d.trigger("selection:update", {
              data: e
            });
          }), e[0].classList.add("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(e[0], "select2", this), e.data("select2", this);
        };

        return n.Extend(i, n.Observable), i.prototype._generateId = function (e) {
          return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
        }, i.prototype._placeContainer = function (e) {
          e.insertAfter(this.$element);

          var t = this._resolveWidth(this.$element, this.options.get("width"));

          null != t && e.css("width", t);
        }, i.prototype._resolveWidth = function (e, t) {
          var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

          if ("resolve" == t) {
            var r = this._resolveWidth(e, "style");

            return null != r ? r : this._resolveWidth(e, "element");
          }

          if ("element" == t) {
            var i = e.outerWidth(!1);
            return i <= 0 ? "auto" : i + "px";
          }

          if ("style" == t) {
            var o = e.attr("style");
            if ("string" != typeof o) return null;

            for (var s = o.split(";"), a = 0, l = s.length; a < l; a += 1) {
              var c = s[a].replace(/\s/g, "").match(n);
              if (null !== c && c.length >= 1) return c[1];
            }

            return null;
          }

          return "computedstyle" == t ? window.getComputedStyle(e[0]).width : t;
        }, i.prototype._bindAdapters = function () {
          this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
        }, i.prototype._registerDomEvents = function () {
          var e = this;
          this.$element.on("change.select2", function () {
            e.dataAdapter.current(function (t) {
              e.trigger("selection:update", {
                data: t
              });
            });
          }), this.$element.on("focus.select2", function (t) {
            e.trigger("focus", t);
          }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this._observer = new window.MutationObserver(function (t) {
            e._syncA(), e._syncS(t);
          }), this._observer.observe(this.$element[0], {
            attributes: !0,
            childList: !0,
            subtree: !1
          });
        }, i.prototype._registerDataEvents = function () {
          var e = this;
          this.dataAdapter.on("*", function (t, n) {
            e.trigger(t, n);
          });
        }, i.prototype._registerSelectionEvents = function () {
          var e = this,
              t = ["toggle", "focus"];
          this.selection.on("toggle", function () {
            e.toggleDropdown();
          }), this.selection.on("focus", function (t) {
            e.focus(t);
          }), this.selection.on("*", function (n, r) {
            -1 === t.indexOf(n) && e.trigger(n, r);
          });
        }, i.prototype._registerDropdownEvents = function () {
          var e = this;
          this.dropdown.on("*", function (t, n) {
            e.trigger(t, n);
          });
        }, i.prototype._registerResultsEvents = function () {
          var e = this;
          this.results.on("*", function (t, n) {
            e.trigger(t, n);
          });
        }, i.prototype._registerEvents = function () {
          var e = this;
          this.on("open", function () {
            e.$container[0].classList.add("select2-container--open");
          }), this.on("close", function () {
            e.$container[0].classList.remove("select2-container--open");
          }), this.on("enable", function () {
            e.$container[0].classList.remove("select2-container--disabled");
          }), this.on("disable", function () {
            e.$container[0].classList.add("select2-container--disabled");
          }), this.on("blur", function () {
            e.$container[0].classList.remove("select2-container--focus");
          }), this.on("query", function (t) {
            e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function (n) {
              e.trigger("results:all", {
                data: n,
                query: t
              });
            });
          }), this.on("query:append", function (t) {
            this.dataAdapter.query(t, function (n) {
              e.trigger("results:append", {
                data: n,
                query: t
              });
            });
          }), this.on("keypress", function (t) {
            var n = t.which;
            e.isOpen() ? n === r.ESC || n === r.UP && t.altKey ? (e.close(t), t.preventDefault()) : n === r.ENTER || n === r.TAB ? (e.trigger("results:select", {}), t.preventDefault()) : n === r.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === r.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === r.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === r.ENTER || n === r.SPACE || n === r.DOWN && t.altKey) && (e.open(), t.preventDefault());
          });
        }, i.prototype._syncAttributes = function () {
          this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
        }, i.prototype._isChangeMutation = function (e) {
          var t = this;

          if (e.addedNodes && e.addedNodes.length > 0) {
            for (var n = 0; n < e.addedNodes.length; n++) {
              if (e.addedNodes[n].selected) return !0;
            }
          } else {
            if (e.removedNodes && e.removedNodes.length > 0) return !0;
            if (Array.isArray(e)) return e.some(function (e) {
              return t._isChangeMutation(e);
            });
          }

          return !1;
        }, i.prototype._syncSubtree = function (e) {
          var t = this._isChangeMutation(e),
              n = this;

          t && this.dataAdapter.current(function (e) {
            n.trigger("selection:update", {
              data: e
            });
          });
        }, i.prototype.trigger = function (e, t) {
          var n = i.__super__.trigger,
              r = {
            open: "opening",
            close: "closing",
            select: "selecting",
            unselect: "unselecting",
            clear: "clearing"
          };

          if (void 0 === t && (t = {}), e in r) {
            var o = r[e],
                s = {
              prevented: !1,
              name: e,
              args: t
            };
            if (n.call(this, o, s), s.prevented) return void (t.prevented = !0);
          }

          n.call(this, e, t);
        }, i.prototype.toggleDropdown = function () {
          this.isDisabled() || (this.isOpen() ? this.close() : this.open());
        }, i.prototype.open = function () {
          this.isOpen() || this.isDisabled() || this.trigger("query", {});
        }, i.prototype.close = function (e) {
          this.isOpen() && this.trigger("close", {
            originalEvent: e
          });
        }, i.prototype.isEnabled = function () {
          return !this.isDisabled();
        }, i.prototype.isDisabled = function () {
          return this.options.get("disabled");
        }, i.prototype.isOpen = function () {
          return this.$container[0].classList.contains("select2-container--open");
        }, i.prototype.hasFocus = function () {
          return this.$container[0].classList.contains("select2-container--focus");
        }, i.prototype.focus = function (e) {
          this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"), this.trigger("focus", {}));
        }, i.prototype.enable = function (e) {
          this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
          var t = !e[0];
          this.$element.prop("disabled", t);
        }, i.prototype.data = function () {
          this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
          var e = [];
          return this.dataAdapter.current(function (t) {
            e = t;
          }), e;
        }, i.prototype.val = function (e) {
          if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
          var t = e[0];
          Array.isArray(t) && (t = t.map(function (e) {
            return e.toString();
          })), this.$element.val(t).trigger("input").trigger("change");
        }, i.prototype.destroy = function () {
          n.RemoveData(this.$container[0]), this.$container.remove(), this._observer.disconnect(), this._observer = null, this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element[0].classList.remove("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
        }, i.prototype.render = function () {
          var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
          return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container[0].classList.add("select2-container--" + this.options.get("theme")), n.StoreData(t[0], "element", this.$element), t;
        }, i;
      }), t.define("jquery-mousewheel", ["jquery"], function (e) {
        return e;
      }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (e, t, n, r, i) {
        if (null == e.fn.select2) {
          var o = ["open", "close", "destroy"];

          e.fn.select2 = function (t) {
            if ("object" == _typeof(t = t || {})) return this.each(function () {
              var r = e.extend(!0, {}, t);
              new n(e(this), r);
            }), this;

            if ("string" == typeof t) {
              var r,
                  s = Array.prototype.slice.call(arguments, 1);
              return this.each(function () {
                var e = i.GetData(this, "select2");
                null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), r = e[t].apply(e, s);
              }), o.indexOf(t) > -1 ? this : r;
            }

            throw new Error("Invalid arguments for Select2: " + t);
          };
        }

        return null == e.fn.select2.defaults && (e.fn.select2.defaults = r), n;
      }), {
        define: t.define,
        require: t.require
      };
    }(),
        n = t.require("jquery.select2");

    return e.fn.select2.amd = t, n;
  }) ? r.apply(t, i) : r) || (e.exports = o);
}]);