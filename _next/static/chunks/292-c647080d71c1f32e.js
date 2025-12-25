(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [292],
  {
    12436: function (e, t, n) {
      var r = n(54073),
        o = n(29259);
      e.exports = function (e, t, n) {
        var i = !0,
          u = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return (
          o(n) &&
            ((i = "leading" in n ? !!n.leading : i),
            (u = "trailing" in n ? !!n.trailing : u)),
          r(e, t, { leading: i, maxWait: t, trailing: u })
        );
      };
    },
    13289: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(2784);
      /**
       * @license lucide-react v0.460.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        i = (...e) =>
          e
            .filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t)
            .join(" ")
            .trim();
      /**
       * @license lucide-react v0.460.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var u = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      /**
       * @license lucide-react v0.460.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let l = (0, r.forwardRef)(
          (
            {
              color: e = "currentColor",
              size: t = 24,
              strokeWidth: n = 2,
              absoluteStrokeWidth: o,
              className: l = "",
              children: a,
              iconNode: s,
              ...c
            },
            d
          ) =>
            (0, r.createElement)(
              "svg",
              {
                ref: d,
                ...u,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: o ? (24 * Number(n)) / Number(t) : n,
                className: i("lucide", l),
                ...c,
              },
              [
                ...s.map(([e, t]) => (0, r.createElement)(e, t)),
                ...(Array.isArray(a) ? a : [a]),
              ]
            )
        ),
        a = (e, t) => {
          let n = (0, r.forwardRef)(({ className: n, ...u }, a) =>
            (0, r.createElement)(l, {
              ref: a,
              iconNode: t,
              className: i(`lucide-${o(e)}`, n),
              ...u,
            })
          );
          return (n.displayName = `${e}`), n;
        };
    },
    83030: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.460.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(13289).Z)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    81395: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.460.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(13289).Z)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    89019: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.460.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(13289).Z)("LoaderCircle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    88724: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.460.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(13289).Z)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    23981: function (e, t, n) {
      "use strict";
      let r, o;
      n.d(t, {
        V: function () {
          return ew;
        },
      });
      var i,
        u,
        l,
        a,
        s,
        c,
        d,
        f = n(2784),
        p = n.t(f, 2),
        m = n(58314),
        v = n(55559),
        h = n(61742);
      function g(e, t, n, r) {
        let o = (0, h.E)(n);
        (0, f.useEffect)(() => {
          function n(e) {
            o.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, n, r),
            () => e.removeEventListener(t, n, r)
          );
        }, [e, t, r]);
      }
      var E = n(81061),
        b = n(91554);
      function y(e) {
        let t = (0, v.z)(e),
          n = (0, f.useRef)(!1);
        (0, f.useEffect)(
          () => (
            (n.current = !1),
            () => {
              (n.current = !0),
                (0, b.Y)(() => {
                  n.current && t();
                });
            }
          ),
          [t]
        );
      }
      var w = n(70592),
        T = n(76460),
        R = n(33401),
        S = n(56902),
        P =
          (((i = P || {})[(i.Forwards = 0)] = "Forwards"),
          (i[(i.Backwards = 1)] = "Backwards"),
          i);
      function C(e, t) {
        let n = (0, f.useRef)([]),
          r = (0, v.z)(e);
        (0, f.useEffect)(() => {
          let e = [...n.current];
          for (let [o, i] of t.entries())
            if (n.current[o] !== i) {
              let o = r(t, e);
              return (n.current = t), o;
            }
        }, [r, ...t]);
      }
      var M = n(90544),
        F =
          (((u = F || {})[(u.None = 1)] = "None"),
          (u[(u.Focusable = 2)] = "Focusable"),
          (u[(u.Hidden = 4)] = "Hidden"),
          u);
      let O = (0, M.yV)(function (e, t) {
          var n;
          let { features: r = 1, ...o } = e,
            i = {
              ref: t,
              "aria-hidden":
                (2 & r) == 2 || (null != (n = o["aria-hidden"]) ? n : void 0),
              hidden: (4 & r) == 4 || void 0,
              style: {
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0",
                ...((4 & r) == 4 && (2 & r) != 2 && { display: "none" }),
              },
            };
          return (0,
          M.sY)({ ourProps: i, theirProps: o, slot: {}, defaultTag: "div", name: "Hidden" });
        }),
        x = [];
      !(function (e) {
        function t() {
          "loading" !== document.readyState &&
            (e(), document.removeEventListener("DOMContentLoaded", t));
        }
        "undefined" != typeof window &&
          "undefined" != typeof document &&
          (document.addEventListener("DOMContentLoaded", t), t());
      })(() => {
        function e(e) {
          e.target instanceof HTMLElement &&
            e.target !== document.body &&
            x[0] !== e.target &&
            (x.unshift(e.target),
            (x = x.filter((e) => null != e && e.isConnected)).splice(10));
        }
        window.addEventListener("click", e, { capture: !0 }),
          window.addEventListener("mousedown", e, { capture: !0 }),
          window.addEventListener("focus", e, { capture: !0 }),
          document.body.addEventListener("click", e, { capture: !0 }),
          document.body.addEventListener("mousedown", e, { capture: !0 }),
          document.body.addEventListener("focus", e, { capture: !0 });
      });
      var L = n(52929),
        k = n(3703);
      function I(e) {
        if (!e) return new Set();
        if ("function" == typeof e) return new Set(e());
        let t = new Set();
        for (let n of e.current)
          n.current instanceof HTMLElement && t.add(n.current);
        return t;
      }
      var D =
        (((l = D || {})[(l.None = 1)] = "None"),
        (l[(l.InitialFocus = 2)] = "InitialFocus"),
        (l[(l.TabLock = 4)] = "TabLock"),
        (l[(l.FocusLock = 8)] = "FocusLock"),
        (l[(l.RestoreFocus = 16)] = "RestoreFocus"),
        (l[(l.All = 30)] = "All"),
        l);
      let A = Object.assign(
        (0, M.yV)(function (e, t) {
          let n,
            r = (0, f.useRef)(null),
            o = (0, R.T)(r, t),
            { initialFocus: i, containers: u, features: l = 30, ...a } = e;
          (0, T.H)() || (l = 1);
          let s = (0, w.i)(r);
          !(function ({ ownerDocument: e }, t) {
            let n = (function (e = !0) {
              let t = (0, f.useRef)(x.slice());
              return (
                C(
                  ([e], [n]) => {
                    !0 === n &&
                      !1 === e &&
                      (0, b.Y)(() => {
                        t.current.splice(0);
                      }),
                      !1 === n && !0 === e && (t.current = x.slice());
                  },
                  [e, x, t]
                ),
                (0, v.z)(() => {
                  var e;
                  return null !=
                    (e = t.current.find((e) => null != e && e.isConnected))
                    ? e
                    : null;
                })
              );
            })(t);
            C(() => {
              t ||
                ((null == e ? void 0 : e.activeElement) ===
                  (null == e ? void 0 : e.body) &&
                  (0, L.C5)(n()));
            }, [t]),
              y(() => {
                t && (0, L.C5)(n());
              });
          })({ ownerDocument: s }, !!(16 & l));
          let c = (function (
            { ownerDocument: e, container: t, initialFocus: n },
            r
          ) {
            let o = (0, f.useRef)(null),
              i = (0, E.t)();
            return (
              C(() => {
                if (!r) return;
                let u = t.current;
                u &&
                  (0, b.Y)(() => {
                    if (!i.current) return;
                    let t = null == e ? void 0 : e.activeElement;
                    if (null != n && n.current) {
                      if ((null == n ? void 0 : n.current) === t) {
                        o.current = t;
                        return;
                      }
                    } else if (u.contains(t)) {
                      o.current = t;
                      return;
                    }
                    null != n && n.current
                      ? (0, L.C5)(n.current)
                      : (0, L.jA)(u, L.TO.First) === L.fE.Error &&
                        console.warn(
                          "There are no focusable elements inside the <FocusTrap />"
                        ),
                      (o.current = null == e ? void 0 : e.activeElement);
                  });
              }, [r]),
              o
            );
          })({ ownerDocument: s, container: r, initialFocus: i }, !!(2 & l));
          !(function (
            {
              ownerDocument: e,
              container: t,
              containers: n,
              previousActiveElement: r,
            },
            o
          ) {
            let i = (0, E.t)();
            g(
              null == e ? void 0 : e.defaultView,
              "focus",
              (e) => {
                if (!o || !i.current) return;
                let u = I(n);
                t.current instanceof HTMLElement && u.add(t.current);
                let l = r.current;
                if (!l) return;
                let a = e.target;
                a && a instanceof HTMLElement
                  ? N(u, a)
                    ? ((r.current = a), (0, L.C5)(a))
                    : (e.preventDefault(), e.stopPropagation(), (0, L.C5)(l))
                  : (0, L.C5)(r.current);
              },
              !0
            );
          })(
            {
              ownerDocument: s,
              container: r,
              containers: u,
              previousActiveElement: c,
            },
            !!(8 & l)
          );
          let d =
              ((n = (0, f.useRef)(0)),
              (0, S.s)(
                "keydown",
                (e) => {
                  "Tab" === e.key && (n.current = e.shiftKey ? 1 : 0);
                },
                !0
              ),
              n),
            p = (0, v.z)((e) => {
              let t = r.current;
              t &&
                (0, k.E)(d.current, {
                  [P.Forwards]: () => {
                    (0, L.jA)(t, L.TO.First, {
                      skipElements: [e.relatedTarget],
                    });
                  },
                  [P.Backwards]: () => {
                    (0, L.jA)(t, L.TO.Last, {
                      skipElements: [e.relatedTarget],
                    });
                  },
                });
            }),
            h = (0, m.G)(),
            D = (0, f.useRef)(!1);
          return f.createElement(
            f.Fragment,
            null,
            !!(4 & l) &&
              f.createElement(O, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: p,
                features: F.Focusable,
              }),
            (0, M.sY)({
              ourProps: {
                ref: o,
                onKeyDown(e) {
                  "Tab" == e.key &&
                    ((D.current = !0),
                    h.requestAnimationFrame(() => {
                      D.current = !1;
                    }));
                },
                onBlur(e) {
                  let t = I(u);
                  r.current instanceof HTMLElement && t.add(r.current);
                  let n = e.relatedTarget;
                  n instanceof HTMLElement &&
                    "true" !== n.dataset.headlessuiFocusGuard &&
                    (N(t, n) ||
                      (D.current
                        ? (0, L.jA)(
                            r.current,
                            (0, k.E)(d.current, {
                              [P.Forwards]: () => L.TO.Next,
                              [P.Backwards]: () => L.TO.Previous,
                            }) | L.TO.WrapAround,
                            { relativeTo: e.target }
                          )
                        : e.target instanceof HTMLElement &&
                          (0, L.C5)(e.target)));
                },
              },
              theirProps: a,
              defaultTag: "div",
              name: "FocusTrap",
            }),
            !!(4 & l) &&
              f.createElement(O, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: p,
                features: F.Focusable,
              })
          );
        }),
        { features: D }
      );
      function N(e, t) {
        for (let n of e) if (n.contains(t)) return !0;
        return !1;
      }
      var H = n(28316),
        z = n(88064);
      let j = (0, f.createContext)(!1);
      function V(e) {
        return f.createElement(j.Provider, { value: e.force }, e.children);
      }
      var Y = n(64727);
      let _ = f.Fragment,
        B = f.Fragment,
        U = (0, f.createContext)(null),
        Z = (0, f.createContext)(null),
        $ = Object.assign(
          (0, M.yV)(function (e, t) {
            let n = (0, f.useRef)(null),
              r = (0, R.T)(
                (0, R.h)((e) => {
                  n.current = e;
                }),
                t
              ),
              o = (0, w.i)(n),
              i = (function (e) {
                let t = (0, f.useContext)(j),
                  n = (0, f.useContext)(U),
                  r = (0, w.i)(e),
                  [o, i] = (0, f.useState)(() => {
                    if ((!t && null !== n) || Y.O.isServer) return null;
                    let e =
                      null == r
                        ? void 0
                        : r.getElementById("headlessui-portal-root");
                    if (e) return e;
                    if (null === r) return null;
                    let o = r.createElement("div");
                    return (
                      o.setAttribute("id", "headlessui-portal-root"),
                      r.body.appendChild(o)
                    );
                  });
                return (
                  (0, f.useEffect)(() => {
                    null !== o &&
                      ((null != r && r.body.contains(o)) ||
                        null == r ||
                        r.body.appendChild(o));
                  }, [o, r]),
                  (0, f.useEffect)(() => {
                    t || (null !== n && i(n.current));
                  }, [n, i, t]),
                  o
                );
              })(n),
              [u] = (0, f.useState)(() => {
                var e;
                return Y.O.isServer
                  ? null
                  : null != (e = null == o ? void 0 : o.createElement("div"))
                  ? e
                  : null;
              }),
              l = (0, f.useContext)(Z),
              a = (0, T.H)();
            return (
              (0, z.e)(() => {
                !i ||
                  !u ||
                  i.contains(u) ||
                  (u.setAttribute("data-headlessui-portal", ""),
                  i.appendChild(u));
              }, [i, u]),
              (0, z.e)(() => {
                if (u && l) return l.register(u);
              }, [l, u]),
              y(() => {
                var e;
                i &&
                  u &&
                  (u instanceof Node && i.contains(u) && i.removeChild(u),
                  i.childNodes.length <= 0 &&
                    (null == (e = i.parentElement) || e.removeChild(i)));
              }),
              a && i && u
                ? (0, H.createPortal)(
                    (0, M.sY)({
                      ourProps: { ref: r },
                      theirProps: e,
                      defaultTag: _,
                      name: "Portal",
                    }),
                    u
                  )
                : null
            );
          }),
          {
            Group: (0, M.yV)(function (e, t) {
              let { target: n, ...r } = e,
                o = { ref: (0, R.T)(t) };
              return f.createElement(
                U.Provider,
                { value: n },
                (0, M.sY)({
                  ourProps: o,
                  theirProps: r,
                  defaultTag: B,
                  name: "Popover.Group",
                })
              );
            }),
          }
        ),
        { useState: W, useEffect: q, useLayoutEffect: G, useDebugValue: K } = p;
      "undefined" != typeof window &&
        void 0 !== window.document &&
        window.document.createElement;
      let J = p.useSyncExternalStore;
      var Q = n(6173),
        X = n(25371);
      let ee =
        ((a = {
          PUSH(e, t) {
            var n;
            let r =
              null != (n = this.get(e))
                ? n
                : { doc: e, count: 0, d: (0, Q.k)(), meta: new Set() };
            return r.count++, r.meta.add(t), this.set(e, r), this;
          },
          POP(e, t) {
            let n = this.get(e);
            return n && (n.count--, n.meta.delete(t)), this;
          },
          SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
            let r;
            let o = {
                doc: e,
                d: t,
                meta: (function (e) {
                  let t = {};
                  for (let n of e) Object.assign(t, n(t));
                  return t;
                })(n),
              },
              i = [
                (0, X.gn)()
                  ? {
                      before({ doc: e, d: t, meta: n }) {
                        function r(e) {
                          return n.containers
                            .flatMap((e) => e())
                            .some((t) => t.contains(e));
                        }
                        t.microTask(() => {
                          var n;
                          if (
                            "auto" !==
                            window.getComputedStyle(e.documentElement)
                              .scrollBehavior
                          ) {
                            let n = (0, Q.k)();
                            n.style(
                              e.documentElement,
                              "scrollBehavior",
                              "auto"
                            ),
                              t.add(() => t.microTask(() => n.dispose()));
                          }
                          let o =
                              null != (n = window.scrollY)
                                ? n
                                : window.pageYOffset,
                            i = null;
                          t.addEventListener(
                            e,
                            "click",
                            (t) => {
                              if (t.target instanceof HTMLElement)
                                try {
                                  let n = t.target.closest("a");
                                  if (!n) return;
                                  let { hash: o } = new URL(n.href),
                                    u = e.querySelector(o);
                                  u && !r(u) && (i = u);
                                } catch {}
                            },
                            !0
                          ),
                            t.addEventListener(e, "touchstart", (e) => {
                              if (e.target instanceof HTMLElement) {
                                if (r(e.target)) {
                                  let n = e.target;
                                  for (
                                    ;
                                    n.parentElement && r(n.parentElement);

                                  )
                                    n = n.parentElement;
                                  t.style(n, "overscrollBehavior", "contain");
                                } else t.style(e.target, "touchAction", "none");
                              }
                            }),
                            t.addEventListener(
                              e,
                              "touchmove",
                              (e) => {
                                if (e.target instanceof HTMLElement) {
                                  if (r(e.target)) {
                                    let t = e.target;
                                    for (
                                      ;
                                      t.parentElement &&
                                      "" !== t.dataset.headlessuiPortal &&
                                      !(
                                        t.scrollHeight > t.clientHeight ||
                                        t.scrollWidth > t.clientWidth
                                      );

                                    )
                                      t = t.parentElement;
                                    "" === t.dataset.headlessuiPortal &&
                                      e.preventDefault();
                                  } else e.preventDefault();
                                }
                              },
                              { passive: !1 }
                            ),
                            t.add(() => {
                              var e;
                              o !==
                                (null != (e = window.scrollY)
                                  ? e
                                  : window.pageYOffset) &&
                                window.scrollTo(0, o),
                                i &&
                                  i.isConnected &&
                                  (i.scrollIntoView({ block: "nearest" }),
                                  (i = null));
                            });
                        });
                      },
                    }
                  : {},
                {
                  before({ doc: e }) {
                    var t;
                    let n = e.documentElement;
                    r =
                      (null != (t = e.defaultView) ? t : window).innerWidth -
                      n.clientWidth;
                  },
                  after({ doc: e, d: t }) {
                    let n = e.documentElement,
                      o = n.clientWidth - n.offsetWidth,
                      i = r - o;
                    t.style(n, "paddingRight", `${i}px`);
                  },
                },
                {
                  before({ doc: e, d: t }) {
                    t.style(e.documentElement, "overflow", "hidden");
                  },
                },
              ];
            i.forEach(({ before: e }) => (null == e ? void 0 : e(o))),
              i.forEach(({ after: e }) => (null == e ? void 0 : e(o)));
          },
          SCROLL_ALLOW({ d: e }) {
            e.dispose();
          },
          TEARDOWN({ doc: e }) {
            this.delete(e);
          },
        }),
        (r = new Map()),
        (o = new Set()),
        {
          getSnapshot: () => r,
          subscribe: (e) => (o.add(e), () => o.delete(e)),
          dispatch(e, ...t) {
            let n = a[e].call(r, ...t);
            n && ((r = n), o.forEach((e) => e()));
          },
        });
      ee.subscribe(() => {
        let e = ee.getSnapshot(),
          t = new Map();
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
          let e = "hidden" === t.get(n.doc),
            r = 0 !== n.count;
          ((r && !e) || (!r && e)) &&
            ee.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            0 === n.count && ee.dispatch("TEARDOWN", n);
        }
      });
      var et = n(80586);
      let en = new Map(),
        er = new Map();
      function eo(e, t = !0) {
        (0, z.e)(() => {
          var n;
          if (!t) return;
          let r = "function" == typeof e ? e() : e.current;
          if (!r) return;
          let o = null != (n = er.get(r)) ? n : 0;
          return (
            er.set(r, o + 1),
            0 !== o ||
              (en.set(r, {
                "aria-hidden": r.getAttribute("aria-hidden"),
                inert: r.inert,
              }),
              r.setAttribute("aria-hidden", "true"),
              (r.inert = !0)),
            function () {
              var e;
              if (!r) return;
              let t = null != (e = er.get(r)) ? e : 1;
              if ((1 === t ? er.delete(r) : er.set(r, t - 1), 1 !== t)) return;
              let n = en.get(r);
              n &&
                (null === n["aria-hidden"]
                  ? r.removeAttribute("aria-hidden")
                  : r.setAttribute("aria-hidden", n["aria-hidden"]),
                (r.inert = n.inert),
                en.delete(r));
            }
          );
        }, [e, t]);
      }
      var ei = n(32994),
        eu = n(47215);
      let el = (0, f.createContext)(() => {});
      el.displayName = "StackContext";
      var ea =
        (((s = ea || {})[(s.Add = 0)] = "Add"),
        (s[(s.Remove = 1)] = "Remove"),
        s);
      function es({
        children: e,
        onUpdate: t,
        type: n,
        element: r,
        enabled: o,
      }) {
        let i = (0, f.useContext)(el),
          u = (0, v.z)((...e) => {
            null == t || t(...e), i(...e);
          });
        return (
          (0, z.e)(() => {
            let e = void 0 === o || !0 === o;
            return (
              e && u(0, n, r),
              () => {
                e && u(1, n, r);
              }
            );
          }, [u, n, r, o]),
          f.createElement(el.Provider, { value: u }, e)
        );
      }
      var ec = n(15426);
      let ed = (0, f.createContext)(null),
        ef = Object.assign(
          (0, M.yV)(function (e, t) {
            let n = (0, et.M)(),
              { id: r = `headlessui-description-${n}`, ...o } = e,
              i = (function e() {
                let t = (0, f.useContext)(ed);
                if (null === t) {
                  let t = Error(
                    "You used a <Description /> component, but it is not inside a relevant parent."
                  );
                  throw (
                    (Error.captureStackTrace && Error.captureStackTrace(t, e),
                    t)
                  );
                }
                return t;
              })(),
              u = (0, R.T)(t);
            (0, z.e)(() => i.register(r), [r, i.register]);
            let l = { ref: u, ...i.props, id: r };
            return (0,
            M.sY)({ ourProps: l, theirProps: o, slot: i.slot || {}, defaultTag: "p", name: i.name || "Description" });
          }),
          {}
        );
      var ep = n(99108),
        em =
          (((c = em || {})[(c.Open = 0)] = "Open"),
          (c[(c.Closed = 1)] = "Closed"),
          c),
        ev = (((d = ev || {})[(d.SetTitleId = 0)] = "SetTitleId"), d);
      let eh = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        eg = (0, f.createContext)(null);
      function eE(e) {
        let t = (0, f.useContext)(eg);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, eE), t);
        }
        return t;
      }
      function eb(e, t) {
        return (0, k.E)(t.type, eh, e, t);
      }
      eg.displayName = "DialogContext";
      let ey = M.AN.RenderStrategy | M.AN.Static,
        ew = Object.assign(
          (0, M.yV)(function (e, t) {
            let n,
              r,
              o,
              i,
              u,
              l = (0, et.M)(),
              {
                id: a = `headlessui-dialog-${l}`,
                open: s,
                onClose: c,
                initialFocus: d,
                role: p = "dialog",
                __demoMode: m = !1,
                ...h
              } = e,
              [E, b] = (0, f.useState)(0),
              y = (0, f.useRef)(!1);
            p =
              "dialog" === p || "alertdialog" === p
                ? p
                : (y.current ||
                    ((y.current = !0),
                    console.warn(
                      `Invalid role [${p}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`
                    )),
                  "dialog");
            let S = (0, eu.oJ)();
            void 0 === s && null !== S && (s = (S & eu.ZM.Open) === eu.ZM.Open);
            let P = (0, f.useRef)(null),
              C = (0, R.T)(P, t),
              x = (0, w.i)(P),
              L = e.hasOwnProperty("open") || null !== S,
              I = e.hasOwnProperty("onClose");
            if (!L && !I)
              throw Error(
                "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
              );
            if (!L)
              throw Error(
                "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
              );
            if (!I)
              throw Error(
                "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
              );
            if ("boolean" != typeof s)
              throw Error(
                `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s}`
              );
            if ("function" != typeof c)
              throw Error(
                `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${c}`
              );
            let D = s ? 0 : 1,
              [N, H] = (0, f.useReducer)(eb, {
                titleId: null,
                descriptionId: null,
                panelRef: (0, f.createRef)(),
              }),
              j = (0, v.z)(() => c(!1)),
              Y = (0, v.z)((e) => H({ type: 0, id: e })),
              _ = !!(0, T.H)() && !m && 0 === D,
              B = E > 1,
              U = null !== (0, f.useContext)(eg),
              [W, q] =
                ((n = (0, f.useContext)(Z)),
                (r = (0, f.useRef)([])),
                (o = (0, v.z)(
                  (e) => (r.current.push(e), n && n.register(e), () => i(e))
                )),
                (i = (0, v.z)((e) => {
                  let t = r.current.indexOf(e);
                  -1 !== t && r.current.splice(t, 1), n && n.unregister(e);
                })),
                (u = (0, f.useMemo)(
                  () => ({ register: o, unregister: i, portals: r }),
                  [o, i, r]
                )),
                [
                  r,
                  (0, f.useMemo)(
                    () =>
                      function ({ children: e }) {
                        return f.createElement(Z.Provider, { value: u }, e);
                      },
                    [u]
                  ),
                ]),
              {
                resolveContainers: G,
                mainTreeNodeRef: K,
                MainTreeNode: Q,
              } = (function ({
                defaultContainers: e = [],
                portals: t,
                mainTreeNodeRef: n,
              } = {}) {
                var r;
                let o = (0, f.useRef)(
                    null != (r = null == n ? void 0 : n.current) ? r : null
                  ),
                  i = (0, w.i)(o),
                  u = (0, v.z)(() => {
                    var n, r, u;
                    let l = [];
                    for (let t of e)
                      null !== t &&
                        (t instanceof HTMLElement
                          ? l.push(t)
                          : "current" in t &&
                            t.current instanceof HTMLElement &&
                            l.push(t.current));
                    if (null != t && t.current)
                      for (let e of t.current) l.push(e);
                    for (let e of null !=
                    (n =
                      null == i
                        ? void 0
                        : i.querySelectorAll("html > *, body > *"))
                      ? n
                      : [])
                      e !== document.body &&
                        e !== document.head &&
                        e instanceof HTMLElement &&
                        "headlessui-portal-root" !== e.id &&
                        (e.contains(o.current) ||
                          e.contains(
                            null ==
                              (u =
                                null == (r = o.current)
                                  ? void 0
                                  : r.getRootNode())
                              ? void 0
                              : u.host
                          ) ||
                          l.some((t) => e.contains(t)) ||
                          l.push(e));
                    return l;
                  });
                return {
                  resolveContainers: u,
                  contains: (0, v.z)((e) => u().some((t) => t.contains(e))),
                  mainTreeNodeRef: o,
                  MainTreeNode: (0, f.useMemo)(
                    () =>
                      function () {
                        return null != n
                          ? null
                          : f.createElement(O, { features: F.Hidden, ref: o });
                      },
                    [o, n]
                  ),
                };
              })({
                portals: W,
                defaultContainers: [
                  {
                    get current() {
                      var X;
                      return null != (X = N.panelRef.current) ? X : P.current;
                    },
                  },
                ],
              }),
              en = null !== S && (S & eu.ZM.Closing) === eu.ZM.Closing,
              er = !U && !en && _;
            eo(
              (0, f.useCallback)(() => {
                var e, t;
                return null !=
                  (t = Array.from(
                    null !=
                      (e = null == x ? void 0 : x.querySelectorAll("body > *"))
                      ? e
                      : []
                  ).find(
                    (e) =>
                      "headlessui-portal-root" !== e.id &&
                      e.contains(K.current) &&
                      e instanceof HTMLElement
                  ))
                  ? t
                  : null;
              }, [K]),
              er
            );
            let el = !!B || _;
            eo(
              (0, f.useCallback)(() => {
                var e, t;
                return null !=
                  (t = Array.from(
                    null !=
                      (e =
                        null == x
                          ? void 0
                          : x.querySelectorAll("[data-headlessui-portal]"))
                      ? e
                      : []
                  ).find(
                    (e) => e.contains(K.current) && e instanceof HTMLElement
                  ))
                  ? t
                  : null;
              }, [K]),
              el
            );
            let ec = !(!_ || B);
            (0, ei.O)(
              G,
              (e) => {
                e.preventDefault(), j();
              },
              ec
            );
            let ef = !(B || 0 !== D);
            g(null == x ? void 0 : x.defaultView, "keydown", (e) => {
              ef &&
                (e.defaultPrevented ||
                  (e.key === ep.R.Escape &&
                    (e.preventDefault(), e.stopPropagation(), j())));
            }),
              (function (e, t, n = () => [document.body]) {
                var r;
                let o, i;
                (r = (e) => {
                  var t;
                  return {
                    containers: [...(null != (t = e.containers) ? t : []), n],
                  };
                }),
                  (o = J(ee.subscribe, ee.getSnapshot, ee.getSnapshot)),
                  (i = e ? o.get(e) : void 0) && i.count,
                  (0, z.e)(() => {
                    if (!(!e || !t))
                      return (
                        ee.dispatch("PUSH", e, r),
                        () => ee.dispatch("POP", e, r)
                      );
                  }, [t, e]);
              })(x, !(en || 0 !== D || U), G),
              (0, f.useEffect)(() => {
                if (0 !== D || !P.current) return;
                let e = new ResizeObserver((e) => {
                  for (let t of e) {
                    let e = t.target.getBoundingClientRect();
                    0 === e.x &&
                      0 === e.y &&
                      0 === e.width &&
                      0 === e.height &&
                      j();
                  }
                });
                return e.observe(P.current), () => e.disconnect();
              }, [D, P, j]);
            let [em, ev] = (function () {
                let [e, t] = (0, f.useState)([]);
                return [
                  e.length > 0 ? e.join(" ") : void 0,
                  (0, f.useMemo)(
                    () =>
                      function (e) {
                        let n = (0, v.z)(
                            (e) => (
                              t((t) => [...t, e]),
                              () =>
                                t((t) => {
                                  let n = t.slice(),
                                    r = n.indexOf(e);
                                  return -1 !== r && n.splice(r, 1), n;
                                })
                            )
                          ),
                          r = (0, f.useMemo)(
                            () => ({
                              register: n,
                              slot: e.slot,
                              name: e.name,
                              props: e.props,
                            }),
                            [n, e.slot, e.name, e.props]
                          );
                        return f.createElement(
                          ed.Provider,
                          { value: r },
                          e.children
                        );
                      },
                    [t]
                  ),
                ];
              })(),
              eh = (0, f.useMemo)(
                () => [{ dialogState: D, close: j, setTitleId: Y }, N],
                [D, N, j, Y]
              ),
              eE = (0, f.useMemo)(() => ({ open: 0 === D }), [D]),
              ew = {
                ref: C,
                id: a,
                role: p,
                "aria-modal": 0 === D || void 0,
                "aria-labelledby": N.titleId,
                "aria-describedby": em,
              };
            return f.createElement(
              es,
              {
                type: "Dialog",
                enabled: 0 === D,
                element: P,
                onUpdate: (0, v.z)((e, t) => {
                  "Dialog" === t &&
                    (0, k.E)(e, {
                      [ea.Add]: () => b((e) => e + 1),
                      [ea.Remove]: () => b((e) => e - 1),
                    });
                }),
              },
              f.createElement(
                V,
                { force: !0 },
                f.createElement(
                  $,
                  null,
                  f.createElement(
                    eg.Provider,
                    { value: eh },
                    f.createElement(
                      $.Group,
                      { target: P },
                      f.createElement(
                        V,
                        { force: !1 },
                        f.createElement(
                          ev,
                          { slot: eE, name: "Dialog.Description" },
                          f.createElement(
                            A,
                            {
                              initialFocus: d,
                              containers: G,
                              features: _
                                ? (0, k.E)(B ? "parent" : "leaf", {
                                    parent: A.features.RestoreFocus,
                                    leaf:
                                      A.features.All & ~A.features.FocusLock,
                                  })
                                : A.features.None,
                            },
                            f.createElement(
                              q,
                              null,
                              (0, M.sY)({
                                ourProps: ew,
                                theirProps: h,
                                slot: eE,
                                defaultTag: "div",
                                features: ey,
                                visible: 0 === D,
                                name: "Dialog",
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              f.createElement(Q, null)
            );
          }),
          {
            Backdrop: (0, M.yV)(function (e, t) {
              let n = (0, et.M)(),
                { id: r = `headlessui-dialog-backdrop-${n}`, ...o } = e,
                [{ dialogState: i }, u] = eE("Dialog.Backdrop"),
                l = (0, R.T)(t);
              (0, f.useEffect)(() => {
                if (null === u.panelRef.current)
                  throw Error(
                    "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
                  );
              }, [u.panelRef]);
              let a = (0, f.useMemo)(() => ({ open: 0 === i }), [i]);
              return f.createElement(
                V,
                { force: !0 },
                f.createElement(
                  $,
                  null,
                  (0, M.sY)({
                    ourProps: { ref: l, id: r, "aria-hidden": !0 },
                    theirProps: o,
                    slot: a,
                    defaultTag: "div",
                    name: "Dialog.Backdrop",
                  })
                )
              );
            }),
            Panel: (0, M.yV)(function (e, t) {
              let n = (0, et.M)(),
                { id: r = `headlessui-dialog-panel-${n}`, ...o } = e,
                [{ dialogState: i }, u] = eE("Dialog.Panel"),
                l = (0, R.T)(t, u.panelRef),
                a = (0, f.useMemo)(() => ({ open: 0 === i }), [i]),
                s = (0, v.z)((e) => {
                  e.stopPropagation();
                });
              return (0,
              M.sY)({ ourProps: { ref: l, id: r, onClick: s }, theirProps: o, slot: a, defaultTag: "div", name: "Dialog.Panel" });
            }),
            Overlay: (0, M.yV)(function (e, t) {
              let n = (0, et.M)(),
                { id: r = `headlessui-dialog-overlay-${n}`, ...o } = e,
                [{ dialogState: i, close: u }] = eE("Dialog.Overlay"),
                l = (0, R.T)(t),
                a = (0, v.z)((e) => {
                  if (e.target === e.currentTarget) {
                    if ((0, ec.P)(e.currentTarget)) return e.preventDefault();
                    e.preventDefault(), e.stopPropagation(), u();
                  }
                }),
                s = (0, f.useMemo)(() => ({ open: 0 === i }), [i]);
              return (0,
              M.sY)({ ourProps: { ref: l, id: r, "aria-hidden": !0, onClick: a }, theirProps: o, slot: s, defaultTag: "div", name: "Dialog.Overlay" });
            }),
            Title: (0, M.yV)(function (e, t) {
              let n = (0, et.M)(),
                { id: r = `headlessui-dialog-title-${n}`, ...o } = e,
                [{ dialogState: i, setTitleId: u }] = eE("Dialog.Title"),
                l = (0, R.T)(t);
              (0, f.useEffect)(() => (u(r), () => u(null)), [r, u]);
              let a = (0, f.useMemo)(() => ({ open: 0 === i }), [i]);
              return (0,
              M.sY)({ ourProps: { ref: l, id: r }, theirProps: o, slot: a, defaultTag: "h2", name: "Dialog.Title" });
            }),
            Description: ef,
          }
        );
    },
    99108: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return o;
        },
      });
      var r,
        o =
          (((r = o || {}).Space = " "),
          (r.Enter = "Enter"),
          (r.Escape = "Escape"),
          (r.Backspace = "Backspace"),
          (r.Delete = "Delete"),
          (r.ArrowLeft = "ArrowLeft"),
          (r.ArrowUp = "ArrowUp"),
          (r.ArrowRight = "ArrowRight"),
          (r.ArrowDown = "ArrowDown"),
          (r.Home = "Home"),
          (r.End = "End"),
          (r.PageUp = "PageUp"),
          (r.PageDown = "PageDown"),
          (r.Tab = "Tab"),
          r);
    },
    1425: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return j;
        },
      });
      var r,
        o,
        i,
        u,
        l = n(2784),
        a = n(58314),
        s = n(55559),
        c = n(80586),
        d = n(88064),
        f = n(32994),
        p = n(70592);
      function m(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      var v = n(33401);
      let h =
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
      function g(e) {
        var t, n;
        let r = null != (t = e.innerText) ? t : "",
          o = e.cloneNode(!0);
        if (!(o instanceof HTMLElement)) return r;
        let i = !1;
        for (let e of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
          e.remove(), (i = !0);
        let u = i ? (null != (n = o.innerText) ? n : "") : r;
        return h.test(u) && (u = u.replace(h, "")), u;
      }
      function E(e) {
        return [e.screenX, e.screenY];
      }
      var b = n(29833),
        y = n(47215),
        w = n(15426),
        T =
          (((r = T || {})[(r.First = 0)] = "First"),
          (r[(r.Previous = 1)] = "Previous"),
          (r[(r.Next = 2)] = "Next"),
          (r[(r.Last = 3)] = "Last"),
          (r[(r.Specific = 4)] = "Specific"),
          (r[(r.Nothing = 5)] = "Nothing"),
          r),
        R = n(6173),
        S = n(52929),
        P = n(3703),
        C = n(90544),
        M = n(99108),
        F =
          (((o = F || {})[(o.Open = 0)] = "Open"),
          (o[(o.Closed = 1)] = "Closed"),
          o),
        O =
          (((i = O || {})[(i.Pointer = 0)] = "Pointer"),
          (i[(i.Other = 1)] = "Other"),
          i),
        x =
          (((u = x || {})[(u.OpenMenu = 0)] = "OpenMenu"),
          (u[(u.CloseMenu = 1)] = "CloseMenu"),
          (u[(u.GoToItem = 2)] = "GoToItem"),
          (u[(u.Search = 3)] = "Search"),
          (u[(u.ClearSearch = 4)] = "ClearSearch"),
          (u[(u.RegisterItem = 5)] = "RegisterItem"),
          (u[(u.UnregisterItem = 6)] = "UnregisterItem"),
          u);
      function L(e, t = (e) => e) {
        let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
          r = (0, S.z2)(
            t(e.items.slice()),
            (e) => e.dataRef.current.domRef.current
          ),
          o = n ? r.indexOf(n) : null;
        return -1 === o && (o = null), { items: r, activeItemIndex: o };
      }
      let k = {
          1: (e) =>
            1 === e.menuState
              ? e
              : { ...e, activeItemIndex: null, menuState: 1 },
          0: (e) =>
            0 === e.menuState ? e : { ...e, __demoMode: !1, menuState: 0 },
          2: (e, t) => {
            var n;
            let r = L(e),
              o = (function (e, t) {
                let n = t.resolveItems();
                if (n.length <= 0) return null;
                let r = t.resolveActiveIndex(),
                  o = null != r ? r : -1;
                switch (e.focus) {
                  case 0:
                    for (let e = 0; e < n.length; ++e)
                      if (!t.resolveDisabled(n[e], e, n)) return e;
                    return r;
                  case 1:
                    for (let e = o - 1; e >= 0; --e)
                      if (!t.resolveDisabled(n[e], e, n)) return e;
                    return r;
                  case 2:
                    for (let e = o + 1; e < n.length; ++e)
                      if (!t.resolveDisabled(n[e], e, n)) return e;
                    return r;
                  case 3:
                    for (let e = n.length - 1; e >= 0; --e)
                      if (!t.resolveDisabled(n[e], e, n)) return e;
                    return r;
                  case 4:
                    for (let r = 0; r < n.length; ++r)
                      if (t.resolveId(n[r], r, n) === e.id) return r;
                    return r;
                  case 5:
                    return null;
                  default:
                    !(function (e) {
                      throw Error("Unexpected object: " + e);
                    })(e);
                }
              })(t, {
                resolveItems: () => r.items,
                resolveActiveIndex: () => r.activeItemIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return {
              ...e,
              ...r,
              searchQuery: "",
              activeItemIndex: o,
              activationTrigger: null != (n = t.trigger) ? n : 1,
            };
          },
          3: (e, t) => {
            let n = "" !== e.searchQuery ? 0 : 1,
              r = e.searchQuery + t.value.toLowerCase(),
              o = (
                null !== e.activeItemIndex
                  ? e.items
                      .slice(e.activeItemIndex + n)
                      .concat(e.items.slice(0, e.activeItemIndex + n))
                  : e.items
              ).find((e) => {
                var t;
                return (
                  (null == (t = e.dataRef.current.textValue)
                    ? void 0
                    : t.startsWith(r)) && !e.dataRef.current.disabled
                );
              }),
              i = o ? e.items.indexOf(o) : -1;
            return -1 === i || i === e.activeItemIndex
              ? { ...e, searchQuery: r }
              : {
                  ...e,
                  searchQuery: r,
                  activeItemIndex: i,
                  activationTrigger: 1,
                };
          },
          4: (e) =>
            "" === e.searchQuery
              ? e
              : { ...e, searchQuery: "", searchActiveItemIndex: null },
          5: (e, t) => {
            let n = L(e, (e) => [...e, { id: t.id, dataRef: t.dataRef }]);
            return { ...e, ...n };
          },
          6: (e, t) => {
            let n = L(e, (e) => {
              let n = e.findIndex((e) => e.id === t.id);
              return -1 !== n && e.splice(n, 1), e;
            });
            return { ...e, ...n, activationTrigger: 1 };
          },
        },
        I = (0, l.createContext)(null);
      function D(e) {
        let t = (0, l.useContext)(I);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Menu /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, D), t);
        }
        return t;
      }
      function A(e, t) {
        return (0, P.E)(t.type, k, e, t);
      }
      I.displayName = "MenuContext";
      let N = l.Fragment,
        H = C.AN.RenderStrategy | C.AN.Static,
        z = l.Fragment,
        j = Object.assign(
          (0, C.yV)(function (e, t) {
            let { __demoMode: n = !1, ...r } = e,
              o = (0, l.useReducer)(A, {
                __demoMode: n,
                menuState: n ? 0 : 1,
                buttonRef: (0, l.createRef)(),
                itemsRef: (0, l.createRef)(),
                items: [],
                searchQuery: "",
                activeItemIndex: null,
                activationTrigger: 1,
              }),
              [{ menuState: i, itemsRef: u, buttonRef: a }, c] = o,
              d = (0, v.T)(t);
            (0, f.O)(
              [a, u],
              (e, t) => {
                var n;
                c({ type: 1 }),
                  (0, S.sP)(t, S.tJ.Loose) ||
                    (e.preventDefault(), null == (n = a.current) || n.focus());
              },
              0 === i
            );
            let p = (0, s.z)(() => {
                c({ type: 1 });
              }),
              m = (0, l.useMemo)(() => ({ open: 0 === i, close: p }), [i, p]);
            return l.createElement(
              I.Provider,
              { value: o },
              l.createElement(
                y.up,
                { value: (0, P.E)(i, { 0: y.ZM.Open, 1: y.ZM.Closed }) },
                (0, C.sY)({
                  ourProps: { ref: d },
                  theirProps: r,
                  slot: m,
                  defaultTag: N,
                  name: "Menu",
                })
              )
            );
          }),
          {
            Button: (0, C.yV)(function (e, t) {
              var n;
              let r = (0, c.M)(),
                { id: o = `headlessui-menu-button-${r}`, ...i } = e,
                [u, f] = D("Menu.Button"),
                p = (0, v.T)(u.buttonRef, t),
                h = (0, a.G)(),
                g = (0, s.z)((e) => {
                  switch (e.key) {
                    case M.R.Space:
                    case M.R.Enter:
                    case M.R.ArrowDown:
                      e.preventDefault(),
                        e.stopPropagation(),
                        f({ type: 0 }),
                        h.nextFrame(() => f({ type: 2, focus: T.First }));
                      break;
                    case M.R.ArrowUp:
                      e.preventDefault(),
                        e.stopPropagation(),
                        f({ type: 0 }),
                        h.nextFrame(() => f({ type: 2, focus: T.Last }));
                  }
                }),
                E = (0, s.z)((e) => {
                  e.key === M.R.Space && e.preventDefault();
                }),
                b = (0, s.z)((t) => {
                  if ((0, w.P)(t.currentTarget)) return t.preventDefault();
                  e.disabled ||
                    (0 === u.menuState
                      ? (f({ type: 1 }),
                        h.nextFrame(() => {
                          var e;
                          return null == (e = u.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        }))
                      : (t.preventDefault(), f({ type: 0 })));
                }),
                y = (0, l.useMemo)(() => ({ open: 0 === u.menuState }), [u]),
                R = {
                  ref: p,
                  id: o,
                  type: (function (e, t) {
                    let [n, r] = (0, l.useState)(() => m(e));
                    return (
                      (0, d.e)(() => {
                        r(m(e));
                      }, [e.type, e.as]),
                      (0, d.e)(() => {
                        n ||
                          (t.current &&
                            t.current instanceof HTMLButtonElement &&
                            !t.current.hasAttribute("type") &&
                            r("button"));
                      }, [n, t]),
                      n
                    );
                  })(e, u.buttonRef),
                  "aria-haspopup": "menu",
                  "aria-controls":
                    null == (n = u.itemsRef.current) ? void 0 : n.id,
                  "aria-expanded": 0 === u.menuState,
                  onKeyDown: g,
                  onKeyUp: E,
                  onClick: b,
                };
              return (0,
              C.sY)({ ourProps: R, theirProps: i, slot: y, defaultTag: "button", name: "Menu.Button" });
            }),
            Items: (0, C.yV)(function (e, t) {
              var n, r;
              let o = (0, c.M)(),
                { id: i = `headlessui-menu-items-${o}`, ...u } = e,
                [f, m] = D("Menu.Items"),
                h = (0, v.T)(f.itemsRef, t),
                g = (0, p.i)(f.itemsRef),
                E = (0, a.G)(),
                w = (0, y.oJ)(),
                P =
                  null !== w
                    ? (w & y.ZM.Open) === y.ZM.Open
                    : 0 === f.menuState;
              (0, l.useEffect)(() => {
                let e = f.itemsRef.current;
                e &&
                  0 === f.menuState &&
                  e !== (null == g ? void 0 : g.activeElement) &&
                  e.focus({ preventScroll: !0 });
              }, [f.menuState, f.itemsRef, g]),
                (function ({
                  container: e,
                  accept: t,
                  walk: n,
                  enabled: r = !0,
                }) {
                  let o = (0, l.useRef)(t),
                    i = (0, l.useRef)(n);
                  (0, l.useEffect)(() => {
                    (o.current = t), (i.current = n);
                  }, [t, n]),
                    (0, d.e)(() => {
                      if (!e || !r) return;
                      let t = (0, b.r)(e);
                      if (!t) return;
                      let n = o.current,
                        u = i.current,
                        l = Object.assign((e) => n(e), { acceptNode: n }),
                        a = t.createTreeWalker(
                          e,
                          NodeFilter.SHOW_ELEMENT,
                          l,
                          !1
                        );
                      for (; a.nextNode(); ) u(a.currentNode);
                    }, [e, r, o, i]);
                })({
                  container: f.itemsRef.current,
                  enabled: 0 === f.menuState,
                  accept: (e) =>
                    "menuitem" === e.getAttribute("role")
                      ? NodeFilter.FILTER_REJECT
                      : e.hasAttribute("role")
                      ? NodeFilter.FILTER_SKIP
                      : NodeFilter.FILTER_ACCEPT,
                  walk(e) {
                    e.setAttribute("role", "none");
                  },
                });
              let F = (0, s.z)((e) => {
                  var t, n;
                  switch ((E.dispose(), e.key)) {
                    case M.R.Space:
                      if ("" !== f.searchQuery)
                        return (
                          e.preventDefault(),
                          e.stopPropagation(),
                          m({ type: 3, value: e.key })
                        );
                    case M.R.Enter:
                      if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        m({ type: 1 }),
                        null !== f.activeItemIndex)
                      ) {
                        let { dataRef: e } = f.items[f.activeItemIndex];
                        null ==
                          (n =
                            null == (t = e.current)
                              ? void 0
                              : t.domRef.current) || n.click();
                      }
                      (0, S.wI)(f.buttonRef.current);
                      break;
                    case M.R.ArrowDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        m({ type: 2, focus: T.Next })
                      );
                    case M.R.ArrowUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        m({ type: 2, focus: T.Previous })
                      );
                    case M.R.Home:
                    case M.R.PageUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        m({ type: 2, focus: T.First })
                      );
                    case M.R.End:
                    case M.R.PageDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        m({ type: 2, focus: T.Last })
                      );
                    case M.R.Escape:
                      e.preventDefault(),
                        e.stopPropagation(),
                        m({ type: 1 }),
                        (0, R.k)().nextFrame(() => {
                          var e;
                          return null == (e = f.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        });
                      break;
                    case M.R.Tab:
                      e.preventDefault(),
                        e.stopPropagation(),
                        m({ type: 1 }),
                        (0, R.k)().nextFrame(() => {
                          (0, S.EO)(
                            f.buttonRef.current,
                            e.shiftKey ? S.TO.Previous : S.TO.Next
                          );
                        });
                      break;
                    default:
                      1 === e.key.length &&
                        (m({ type: 3, value: e.key }),
                        E.setTimeout(() => m({ type: 4 }), 350));
                  }
                }),
                O = (0, s.z)((e) => {
                  e.key === M.R.Space && e.preventDefault();
                }),
                x = (0, l.useMemo)(() => ({ open: 0 === f.menuState }), [f]),
                L = {
                  "aria-activedescendant":
                    null === f.activeItemIndex ||
                    null == (n = f.items[f.activeItemIndex])
                      ? void 0
                      : n.id,
                  "aria-labelledby":
                    null == (r = f.buttonRef.current) ? void 0 : r.id,
                  id: i,
                  onKeyDown: F,
                  onKeyUp: O,
                  role: "menu",
                  tabIndex: 0,
                  ref: h,
                };
              return (0,
              C.sY)({ ourProps: L, theirProps: u, slot: x, defaultTag: "div", features: H, visible: P, name: "Menu.Items" });
            }),
            Item: (0, C.yV)(function (e, t) {
              let n,
                r,
                o,
                i = (0, c.M)(),
                {
                  id: u = `headlessui-menu-item-${i}`,
                  disabled: a = !1,
                  ...f
                } = e,
                [p, m] = D("Menu.Item"),
                h =
                  null !== p.activeItemIndex &&
                  p.items[p.activeItemIndex].id === u,
                b = (0, l.useRef)(null),
                y = (0, v.T)(t, b);
              (0, d.e)(() => {
                if (
                  p.__demoMode ||
                  0 !== p.menuState ||
                  !h ||
                  0 === p.activationTrigger
                )
                  return;
                let e = (0, R.k)();
                return (
                  e.requestAnimationFrame(() => {
                    var e, t;
                    null ==
                      (t =
                        null == (e = b.current) ? void 0 : e.scrollIntoView) ||
                      t.call(e, { block: "nearest" });
                  }),
                  e.dispose
                );
              }, [p.__demoMode, b, h, p.menuState, p.activationTrigger, p.activeItemIndex]);
              let w =
                  ((n = (0, l.useRef)("")),
                  (r = (0, l.useRef)("")),
                  (0, s.z)(() => {
                    let e = b.current;
                    if (!e) return "";
                    let t = e.innerText;
                    if (n.current === t) return r.current;
                    let o = (function (e) {
                      let t = e.getAttribute("aria-label");
                      if ("string" == typeof t) return t.trim();
                      let n = e.getAttribute("aria-labelledby");
                      if (n) {
                        let e = n
                          .split(" ")
                          .map((e) => {
                            let t = document.getElementById(e);
                            if (t) {
                              let e = t.getAttribute("aria-label");
                              return "string" == typeof e
                                ? e.trim()
                                : g(t).trim();
                            }
                            return null;
                          })
                          .filter(Boolean);
                        if (e.length > 0) return e.join(", ");
                      }
                      return g(e).trim();
                    })(e)
                      .trim()
                      .toLowerCase();
                    return (n.current = t), (r.current = o), o;
                  })),
                P = (0, l.useRef)({
                  disabled: a,
                  domRef: b,
                  get textValue() {
                    return w();
                  },
                });
              (0, d.e)(() => {
                P.current.disabled = a;
              }, [P, a]),
                (0, d.e)(
                  () => (
                    m({ type: 5, id: u, dataRef: P }),
                    () => m({ type: 6, id: u })
                  ),
                  [P, u]
                );
              let M = (0, s.z)(() => {
                  m({ type: 1 });
                }),
                F = (0, s.z)((e) => {
                  if (a) return e.preventDefault();
                  m({ type: 1 }), (0, S.wI)(p.buttonRef.current);
                }),
                O = (0, s.z)(() => {
                  if (a) return m({ type: 2, focus: T.Nothing });
                  m({ type: 2, focus: T.Specific, id: u });
                }),
                x =
                  ((o = (0, l.useRef)([-1, -1])),
                  {
                    wasMoved(e) {
                      let t = E(e);
                      return (
                        (o.current[0] !== t[0] || o.current[1] !== t[1]) &&
                        ((o.current = t), !0)
                      );
                    },
                    update(e) {
                      o.current = E(e);
                    },
                  }),
                L = (0, s.z)((e) => x.update(e)),
                k = (0, s.z)((e) => {
                  x.wasMoved(e) &&
                    (a ||
                      h ||
                      m({ type: 2, focus: T.Specific, id: u, trigger: 0 }));
                }),
                I = (0, s.z)((e) => {
                  x.wasMoved(e) &&
                    (a || (h && m({ type: 2, focus: T.Nothing })));
                }),
                A = (0, l.useMemo)(
                  () => ({ active: h, disabled: a, close: M }),
                  [h, a, M]
                );
              return (0,
              C.sY)({ ourProps: { id: u, ref: y, role: "menuitem", tabIndex: !0 === a ? void 0 : -1, "aria-disabled": !0 === a || void 0, disabled: void 0, onClick: F, onFocus: O, onPointerEnter: L, onMouseEnter: L, onPointerMove: k, onMouseMove: k, onPointerLeave: I, onMouseLeave: I }, theirProps: f, slot: A, defaultTag: z, name: "Menu.Item" });
            }),
          }
        );
    },
    49442: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return k;
        },
      });
      var r,
        o = n(2784),
        i = n(58314),
        u = n(55559),
        l = n(81061),
        a = n(88064),
        s = n(61742),
        c = n(76460),
        d = n(33401),
        f = n(6173),
        p = n(3703);
      function m(e, ...t) {
        e && t.length > 0 && e.classList.add(...t);
      }
      function v(e, ...t) {
        e && t.length > 0 && e.classList.remove(...t);
      }
      var h = n(47215),
        g = n(94020),
        E = n(90544);
      function b(e = "") {
        return e.split(/\s+/).filter((e) => e.length > 1);
      }
      let y = (0, o.createContext)(null);
      y.displayName = "TransitionContext";
      var w = (((r = w || {}).Visible = "visible"), (r.Hidden = "hidden"), r);
      let T = (0, o.createContext)(null);
      function R(e) {
        return "children" in e
          ? R(e.children)
          : e.current
              .filter(({ el: e }) => null !== e.current)
              .filter(({ state: e }) => "visible" === e).length > 0;
      }
      function S(e, t) {
        let n = (0, s.E)(e),
          r = (0, o.useRef)([]),
          a = (0, l.t)(),
          c = (0, i.G)(),
          d = (0, u.z)((e, t = E.l4.Hidden) => {
            let o = r.current.findIndex(({ el: t }) => t === e);
            -1 !== o &&
              ((0, p.E)(t, {
                [E.l4.Unmount]() {
                  r.current.splice(o, 1);
                },
                [E.l4.Hidden]() {
                  r.current[o].state = "hidden";
                },
              }),
              c.microTask(() => {
                var e;
                !R(r) && a.current && (null == (e = n.current) || e.call(n));
              }));
          }),
          f = (0, u.z)((e) => {
            let t = r.current.find(({ el: t }) => t === e);
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : r.current.push({ el: e, state: "visible" }),
              () => d(e, E.l4.Unmount)
            );
          }),
          m = (0, o.useRef)([]),
          v = (0, o.useRef)(Promise.resolve()),
          h = (0, o.useRef)({ enter: [], leave: [], idle: [] }),
          g = (0, u.z)((e, n, r) => {
            m.current.splice(0),
              t &&
                (t.chains.current[n] = t.chains.current[n].filter(
                  ([t]) => t !== e
                )),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    m.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    Promise.all(h.current[n].map(([e, t]) => t)).then(() =>
                      e()
                    );
                  }),
                ]),
              "enter" === n
                ? (v.current = v.current
                    .then(() => (null == t ? void 0 : t.wait.current))
                    .then(() => r(n)))
                : r(n);
          }),
          b = (0, u.z)((e, t, n) => {
            Promise.all(h.current[t].splice(0).map(([e, t]) => t))
              .then(() => {
                var e;
                null == (e = m.current.shift()) || e();
              })
              .then(() => n(t));
          });
        return (0, o.useMemo)(
          () => ({
            children: r,
            register: f,
            unregister: d,
            onStart: g,
            onStop: b,
            wait: v,
            chains: h,
          }),
          [f, d, r, g, b, h, v]
        );
      }
      function P() {}
      T.displayName = "NestingContext";
      let C = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
      function M(e) {
        var t;
        let n = {};
        for (let r of C) n[r] = null != (t = e[r]) ? t : P;
        return n;
      }
      let F = E.AN.RenderStrategy,
        O = (0, E.yV)(function (e, t) {
          let { show: n, appear: r = !1, unmount: i = !0, ...l } = e,
            s = (0, o.useRef)(null),
            f = (0, d.T)(s, t);
          (0, c.H)();
          let p = (0, h.oJ)();
          if (
            (void 0 === n && null !== p && (n = (p & h.ZM.Open) === h.ZM.Open),
            ![!0, !1].includes(n))
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
          let [m, v] = (0, o.useState)(n ? "visible" : "hidden"),
            g = S(() => {
              v("hidden");
            }),
            [b, w] = (0, o.useState)(!0),
            P = (0, o.useRef)([n]);
          (0, a.e)(() => {
            !1 !== b &&
              P.current[P.current.length - 1] !== n &&
              (P.current.push(n), w(!1));
          }, [P, n]);
          let C = (0, o.useMemo)(
            () => ({ show: n, appear: r, initial: b }),
            [n, r, b]
          );
          (0, o.useEffect)(() => {
            if (n) v("visible");
            else if (R(g)) {
              let e = s.current;
              if (!e) return;
              let t = e.getBoundingClientRect();
              0 === t.x &&
                0 === t.y &&
                0 === t.width &&
                0 === t.height &&
                v("hidden");
            } else v("hidden");
          }, [n, g]);
          let M = { unmount: i },
            O = (0, u.z)(() => {
              var t;
              b && w(!1), null == (t = e.beforeEnter) || t.call(e);
            }),
            L = (0, u.z)(() => {
              var t;
              b && w(!1), null == (t = e.beforeLeave) || t.call(e);
            });
          return o.createElement(
            T.Provider,
            { value: g },
            o.createElement(
              y.Provider,
              { value: C },
              (0, E.sY)({
                ourProps: {
                  ...M,
                  as: o.Fragment,
                  children: o.createElement(x, {
                    ref: f,
                    ...M,
                    ...l,
                    beforeEnter: O,
                    beforeLeave: L,
                  }),
                },
                theirProps: {},
                defaultTag: o.Fragment,
                features: F,
                visible: "visible" === m,
                name: "Transition",
              })
            )
          );
        }),
        x = (0, E.yV)(function (e, t) {
          var n, r, w;
          let P;
          let {
              beforeEnter: C,
              afterEnter: O,
              beforeLeave: x,
              afterLeave: L,
              enter: k,
              enterFrom: I,
              enterTo: D,
              entered: A,
              leave: N,
              leaveFrom: H,
              leaveTo: z,
              ...j
            } = e,
            V = (0, o.useRef)(null),
            Y = (0, d.T)(V, t),
            _ = null == (n = j.unmount) || n ? E.l4.Unmount : E.l4.Hidden,
            {
              show: B,
              appear: U,
              initial: Z,
            } = (function () {
              let e = (0, o.useContext)(y);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            [$, W] = (0, o.useState)(B ? "visible" : "hidden"),
            q = (function () {
              let e = (0, o.useContext)(T);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            { register: G, unregister: K } = q;
          (0, o.useEffect)(() => G(V), [G, V]),
            (0, o.useEffect)(() => {
              if (_ === E.l4.Hidden && V.current) {
                if (B && "visible" !== $) {
                  W("visible");
                  return;
                }
                return (0, p.E)($, { hidden: () => K(V), visible: () => G(V) });
              }
            }, [$, V, G, K, B, _]);
          let J = (0, s.E)({
              base: b(j.className),
              enter: b(k),
              enterFrom: b(I),
              enterTo: b(D),
              entered: b(A),
              leave: b(N),
              leaveFrom: b(H),
              leaveTo: b(z),
            }),
            Q =
              ((w = {
                beforeEnter: C,
                afterEnter: O,
                beforeLeave: x,
                afterLeave: L,
              }),
              (P = (0, o.useRef)(M(w))),
              (0, o.useEffect)(() => {
                P.current = M(w);
              }, [w]),
              P),
            X = (0, c.H)();
          (0, o.useEffect)(() => {
            if (X && "visible" === $ && null === V.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }, [V, $, X]);
          let ee = U && B && Z,
            et = X && (!Z || U) ? (B ? "enter" : "leave") : "idle",
            en = (function (e = 0) {
              let [t, n] = (0, o.useState)(e),
                r = (0, l.t)(),
                i = (0, o.useCallback)(
                  (e) => {
                    r.current && n((t) => t | e);
                  },
                  [t, r]
                ),
                u = (0, o.useCallback)((e) => !!(t & e), [t]);
              return {
                flags: t,
                addFlag: i,
                hasFlag: u,
                removeFlag: (0, o.useCallback)(
                  (e) => {
                    r.current && n((t) => t & ~e);
                  },
                  [n, r]
                ),
                toggleFlag: (0, o.useCallback)(
                  (e) => {
                    r.current && n((t) => t ^ e);
                  },
                  [n]
                ),
              };
            })(0),
            er = (0, u.z)((e) =>
              (0, p.E)(e, {
                enter: () => {
                  en.addFlag(h.ZM.Opening), Q.current.beforeEnter();
                },
                leave: () => {
                  en.addFlag(h.ZM.Closing), Q.current.beforeLeave();
                },
                idle: () => {},
              })
            ),
            eo = (0, u.z)((e) =>
              (0, p.E)(e, {
                enter: () => {
                  en.removeFlag(h.ZM.Opening), Q.current.afterEnter();
                },
                leave: () => {
                  en.removeFlag(h.ZM.Closing), Q.current.afterLeave();
                },
                idle: () => {},
              })
            ),
            ei = S(() => {
              W("hidden"), K(V);
            }, q),
            eu = (0, o.useRef)(!1);
          !(function ({
            immediate: e,
            container: t,
            direction: n,
            classes: r,
            onStart: o,
            onStop: u,
          }) {
            let c = (0, l.t)(),
              d = (0, i.G)(),
              h = (0, s.E)(n);
            (0, a.e)(() => {
              e && (h.current = "enter");
            }, [e]),
              (0, a.e)(() => {
                let e = (0, f.k)();
                d.add(e.dispose);
                let n = t.current;
                if (n && "idle" !== h.current && c.current) {
                  var i, l, a;
                  let t, s, c, d, g, E, b;
                  return (
                    e.dispose(),
                    o.current(h.current),
                    e.add(
                      ((i = r.current),
                      (l = "enter" === h.current),
                      (a = () => {
                        e.dispose(), u.current(h.current);
                      }),
                      (s = l ? "enter" : "leave"),
                      (c = (0, f.k)()),
                      (d =
                        void 0 !== a
                          ? ((t = { called: !1 }),
                            (...e) => {
                              if (!t.called) return (t.called = !0), a(...e);
                            })
                          : () => {}),
                      "enter" === s &&
                        (n.removeAttribute("hidden"), (n.style.display = "")),
                      (g = (0, p.E)(s, {
                        enter: () => i.enter,
                        leave: () => i.leave,
                      })),
                      (E = (0, p.E)(s, {
                        enter: () => i.enterTo,
                        leave: () => i.leaveTo,
                      })),
                      (b = (0, p.E)(s, {
                        enter: () => i.enterFrom,
                        leave: () => i.leaveFrom,
                      })),
                      v(
                        n,
                        ...i.base,
                        ...i.enter,
                        ...i.enterTo,
                        ...i.enterFrom,
                        ...i.leave,
                        ...i.leaveFrom,
                        ...i.leaveTo,
                        ...i.entered
                      ),
                      m(n, ...i.base, ...g, ...b),
                      c.nextFrame(() => {
                        v(n, ...i.base, ...g, ...b),
                          m(n, ...i.base, ...g, ...E),
                          (function (e, t) {
                            let n = (0, f.k)();
                            if (!e) return n.dispose;
                            let { transitionDuration: r, transitionDelay: o } =
                                getComputedStyle(e),
                              [i, u] = [r, o].map((e) => {
                                let [t = 0] = e
                                  .split(",")
                                  .filter(Boolean)
                                  .map((e) =>
                                    e.includes("ms")
                                      ? parseFloat(e)
                                      : 1e3 * parseFloat(e)
                                  )
                                  .sort((e, t) => t - e);
                                return t;
                              }),
                              l = i + u;
                            if (0 !== l) {
                              n.group((n) => {
                                n.setTimeout(() => {
                                  t(), n.dispose();
                                }, l),
                                  n.addEventListener(
                                    e,
                                    "transitionrun",
                                    (e) => {
                                      e.target === e.currentTarget &&
                                        n.dispose();
                                    }
                                  );
                              });
                              let r = n.addEventListener(
                                e,
                                "transitionend",
                                (e) => {
                                  e.target === e.currentTarget && (t(), r());
                                }
                              );
                            } else t();
                            n.add(() => t()), n.dispose;
                          })(
                            n,
                            () => (
                              v(n, ...i.base, ...g),
                              m(n, ...i.base, ...i.entered),
                              d()
                            )
                          );
                      }),
                      c.dispose)
                    ),
                    e.dispose
                  );
                }
              }, [n]);
          })({
            immediate: ee,
            container: V,
            classes: J,
            direction: et,
            onStart: (0, s.E)((e) => {
              (eu.current = !0), ei.onStart(V, e, er);
            }),
            onStop: (0, s.E)((e) => {
              (eu.current = !1),
                ei.onStop(V, e, eo),
                "leave" !== e || R(ei) || (W("hidden"), K(V));
            }),
          });
          let el = j;
          return (
            ee
              ? (el = {
                  ...el,
                  className: (0, g.A)(
                    j.className,
                    ...J.current.enter,
                    ...J.current.enterFrom
                  ),
                })
              : eu.current &&
                ((el.className = (0, g.A)(
                  j.className,
                  null == (r = V.current) ? void 0 : r.className
                )),
                "" === el.className && delete el.className),
            o.createElement(
              T.Provider,
              { value: ei },
              o.createElement(
                h.up,
                {
                  value:
                    (0, p.E)($, { visible: h.ZM.Open, hidden: h.ZM.Closed }) |
                    en.flags,
                },
                (0, E.sY)({
                  ourProps: { ref: Y },
                  theirProps: el,
                  defaultTag: "div",
                  features: F,
                  visible: "visible" === $,
                  name: "Transition.Child",
                })
              )
            )
          );
        }),
        L = (0, E.yV)(function (e, t) {
          let n = null !== (0, o.useContext)(y),
            r = null !== (0, h.oJ)();
          return o.createElement(
            o.Fragment,
            null,
            !n && r
              ? o.createElement(O, { ref: t, ...e })
              : o.createElement(x, { ref: t, ...e })
          );
        }),
        k = Object.assign(O, { Child: L, Root: O });
    },
    58314: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return i;
        },
      });
      var r = n(2784),
        o = n(6173);
      function i() {
        let [e] = (0, r.useState)(o.k);
        return (0, r.useEffect)(() => () => e.dispose(), [e]), e;
      }
    },
    55559: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return i;
        },
      });
      var r = n(2784),
        o = n(61742);
      let i = function (e) {
        let t = (0, o.E)(e);
        return r.useCallback((...e) => t.current(...e), [t]);
      };
    },
    80586: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return a;
        },
      });
      var r,
        o = n(2784),
        i = n(64727),
        u = n(88064),
        l = n(76460);
      let a =
        null != (r = o.useId)
          ? r
          : function () {
              let e = (0, l.H)(),
                [t, n] = o.useState(e ? () => i.O.nextId() : null);
              return (
                (0, u.e)(() => {
                  null === t && n(i.O.nextId());
                }, [t]),
                null != t ? "" + t : void 0
              );
            };
    },
    81061: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return i;
        },
      });
      var r = n(2784),
        o = n(88064);
      function i() {
        let e = (0, r.useRef)(!1);
        return (
          (0, o.e)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
    },
    88064: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return i;
        },
      });
      var r = n(2784),
        o = n(64727);
      let i = (e, t) => {
        o.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t);
      };
    },
    61742: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return i;
        },
      });
      var r = n(2784),
        o = n(88064);
      function i(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, o.e)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    32994: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return s;
        },
      });
      var r = n(2784),
        o = n(52929),
        i = n(25371),
        u = n(61742);
      function l(e, t, n) {
        let o = (0, u.E)(t);
        (0, r.useEffect)(() => {
          function t(e) {
            o.current(e);
          }
          return (
            document.addEventListener(e, t, n),
            () => document.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
      var a = n(56902);
      function s(e, t, n = !0) {
        let u = (0, r.useRef)(!1);
        function s(n, r) {
          if (!u.current || n.defaultPrevented) return;
          let i = r(n);
          if (null !== i && i.getRootNode().contains(i) && i.isConnected) {
            for (let t of (function e(t) {
              return "function" == typeof t
                ? e(t())
                : Array.isArray(t) || t instanceof Set
                ? t
                : [t];
            })(e)) {
              if (null === t) continue;
              let e = t instanceof HTMLElement ? t : t.current;
              if (
                (null != e && e.contains(i)) ||
                (n.composed && n.composedPath().includes(e))
              )
                return;
            }
            return (
              (0, o.sP)(i, o.tJ.Loose) ||
                -1 === i.tabIndex ||
                n.preventDefault(),
              t(n, i)
            );
          }
        }
        (0, r.useEffect)(() => {
          requestAnimationFrame(() => {
            u.current = n;
          });
        }, [n]);
        let c = (0, r.useRef)(null);
        l(
          "pointerdown",
          (e) => {
            var t, n;
            u.current &&
              (c.current =
                (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                  ? void 0
                  : n[0]) || e.target);
          },
          !0
        ),
          l(
            "mousedown",
            (e) => {
              var t, n;
              u.current &&
                (c.current =
                  (null ==
                  (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                    ? void 0
                    : n[0]) || e.target);
            },
            !0
          ),
          l(
            "click",
            (e) => {
              (0, i.tq)() ||
                (c.current && (s(e, () => c.current), (c.current = null)));
            },
            !0
          ),
          l(
            "touchend",
            (e) =>
              s(e, () => (e.target instanceof HTMLElement ? e.target : null)),
            !0
          ),
          (0, a.s)(
            "blur",
            (e) =>
              s(e, () =>
                window.document.activeElement instanceof HTMLIFrameElement
                  ? window.document.activeElement
                  : null
              ),
            !0
          );
      }
    },
    70592: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return i;
        },
      });
      var r = n(2784),
        o = n(29833);
      function i(...e) {
        return (0, r.useMemo)(() => (0, o.r)(...e), [...e]);
      }
    },
    76460: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return u;
        },
      });
      var r,
        o = n(2784),
        i = n(64727);
      function u() {
        let e;
        let t =
            ((e = "undefined" == typeof document),
            (0, (r || (r = n.t(o, 2))).useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !e
            )),
          [u, l] = o.useState(i.O.isHandoffComplete);
        return (
          u && !1 === i.O.isHandoffComplete && l(!1),
          o.useEffect(() => {
            !0 !== u && l(!0);
          }, [u]),
          o.useEffect(() => i.O.handoff(), []),
          !t && u
        );
      }
    },
    33401: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return l;
        },
        h: function () {
          return u;
        },
      });
      var r = n(2784),
        o = n(55559);
      let i = Symbol();
      function u(e, t = !0) {
        return Object.assign(e, { [i]: t });
      }
      function l(...e) {
        let t = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = (0, o.z)((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[i]))
          ? void 0
          : n;
      }
    },
    56902: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return i;
        },
      });
      var r = n(2784),
        o = n(61742);
      function i(e, t, n) {
        let i = (0, o.E)(t);
        (0, r.useEffect)(() => {
          function t(e) {
            i.current(e);
          }
          return (
            window.addEventListener(e, t, n),
            () => window.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
    },
    47215: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZM: function () {
          return u;
        },
        oJ: function () {
          return l;
        },
        up: function () {
          return a;
        },
      });
      var r,
        o = n(2784);
      let i = (0, o.createContext)(null);
      i.displayName = "OpenClosedContext";
      var u =
        (((r = u || {})[(r.Open = 1)] = "Open"),
        (r[(r.Closed = 2)] = "Closed"),
        (r[(r.Closing = 4)] = "Closing"),
        (r[(r.Opening = 8)] = "Opening"),
        r);
      function l() {
        return (0, o.useContext)(i);
      }
      function a({ value: e, children: t }) {
        return o.createElement(i.Provider, { value: e }, t);
      }
    },
    15426: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = e.parentElement,
          n = null;
        for (; t && !(t instanceof HTMLFieldSetElement); )
          t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
        let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
        return (
          !(
            r &&
            (function (e) {
              if (!e) return !1;
              let t = e.previousElementSibling;
              for (; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(n)
          ) && r
        );
      }
      n.d(t, {
        P: function () {
          return r;
        },
      });
    },
    94020: function (e, t, n) {
      "use strict";
      function r(...e) {
        return Array.from(
          new Set(e.flatMap((e) => ("string" == typeof e ? e.split(" ") : [])))
        )
          .filter(Boolean)
          .join(" ");
      }
      n.d(t, {
        A: function () {
          return r;
        },
      });
    },
    6173: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return function e() {
            let t = [],
              n = {
                addEventListener: (e, t, r, o) => (
                  e.addEventListener(t, r, o),
                  n.add(() => e.removeEventListener(t, r, o))
                ),
                requestAnimationFrame(...e) {
                  let t = requestAnimationFrame(...e);
                  return n.add(() => cancelAnimationFrame(t));
                },
                nextFrame: (...e) =>
                  n.requestAnimationFrame(() => n.requestAnimationFrame(...e)),
                setTimeout(...e) {
                  let t = setTimeout(...e);
                  return n.add(() => clearTimeout(t));
                },
                microTask(...e) {
                  let t = { current: !0 };
                  return (
                    (0, r.Y)(() => {
                      t.current && e[0]();
                    }),
                    n.add(() => {
                      t.current = !1;
                    })
                  );
                },
                style(e, t, n) {
                  let r = e.style.getPropertyValue(t);
                  return (
                    Object.assign(e.style, { [t]: n }),
                    this.add(() => {
                      Object.assign(e.style, { [t]: r });
                    })
                  );
                },
                group(t) {
                  let n = e();
                  return t(n), this.add(() => n.dispose());
                },
                add: (e) => (
                  t.push(e),
                  () => {
                    let n = t.indexOf(e);
                    if (n >= 0) for (let e of t.splice(n, 1)) e();
                  }
                ),
                dispose() {
                  for (let e of t.splice(0)) e();
                },
              };
            return n;
          };
        },
      });
      var r = n(91554);
    },
    64727: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return l;
        },
      });
      var r = Object.defineProperty,
        o = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        i = (e, t, n) => (o(e, "symbol" != typeof t ? t + "" : t, n), n);
      class u {
        constructor() {
          i(this, "current", this.detect()),
            i(this, "handoffState", "pending"),
            i(this, "currentId", 0);
        }
        set(e) {
          this.current !== e &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
      }
      let l = new u();
    },
    52929: function (e, t, n) {
      "use strict";
      n.d(t, {
        C5: function () {
          return y;
        },
        EO: function () {
          return T;
        },
        TO: function () {
          return f;
        },
        fE: function () {
          return p;
        },
        jA: function () {
          return R;
        },
        sP: function () {
          return g;
        },
        tJ: function () {
          return h;
        },
        wI: function () {
          return E;
        },
        z2: function () {
          return w;
        },
      });
      var r,
        o,
        i,
        u,
        l,
        a = n(6173),
        s = n(3703),
        c = n(29833);
      let d = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
      ]
        .map((e) => `${e}:not([tabindex='-1'])`)
        .join(",");
      var f =
          (((r = f || {})[(r.First = 1)] = "First"),
          (r[(r.Previous = 2)] = "Previous"),
          (r[(r.Next = 4)] = "Next"),
          (r[(r.Last = 8)] = "Last"),
          (r[(r.WrapAround = 16)] = "WrapAround"),
          (r[(r.NoScroll = 32)] = "NoScroll"),
          r),
        p =
          (((o = p || {})[(o.Error = 0)] = "Error"),
          (o[(o.Overflow = 1)] = "Overflow"),
          (o[(o.Success = 2)] = "Success"),
          (o[(o.Underflow = 3)] = "Underflow"),
          o),
        m =
          (((i = m || {})[(i.Previous = -1)] = "Previous"),
          (i[(i.Next = 1)] = "Next"),
          i);
      function v(e = document.body) {
        return null == e
          ? []
          : Array.from(e.querySelectorAll(d)).sort((e, t) =>
              Math.sign(
                (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                  (t.tabIndex || Number.MAX_SAFE_INTEGER)
              )
            );
      }
      var h =
        (((u = h || {})[(u.Strict = 0)] = "Strict"),
        (u[(u.Loose = 1)] = "Loose"),
        u);
      function g(e, t = 0) {
        var n;
        return (
          e !== (null == (n = (0, c.r)(e)) ? void 0 : n.body) &&
          (0, s.E)(t, {
            0: () => e.matches(d),
            1() {
              let t = e;
              for (; null !== t; ) {
                if (t.matches(d)) return !0;
                t = t.parentElement;
              }
              return !1;
            },
          })
        );
      }
      function E(e) {
        let t = (0, c.r)(e);
        (0, a.k)().nextFrame(() => {
          t && !g(t.activeElement, 0) && y(e);
        });
      }
      var b =
        (((l = b || {})[(l.Keyboard = 0)] = "Keyboard"),
        (l[(l.Mouse = 1)] = "Mouse"),
        l);
      function y(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      function w(e, t = (e) => e) {
        return e.slice().sort((e, n) => {
          let r = t(e),
            o = t(n);
          if (null === r || null === o) return 0;
          let i = r.compareDocumentPosition(o);
          return i & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : i & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function T(e, t) {
        return R(v(), t, { relativeTo: e });
      }
      function R(
        e,
        t,
        { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}
      ) {
        var i, u, l;
        let a = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          s = Array.isArray(e) ? (n ? w(e) : e) : v(e);
        o.length > 0 && s.length > 1 && (s = s.filter((e) => !o.includes(e))),
          (r = null != r ? r : a.activeElement);
        let c = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, s.indexOf(r)) - 1;
            if (4 & t) return Math.max(0, s.indexOf(r)) + 1;
            if (8 & t) return s.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          f = 32 & t ? { preventScroll: !0 } : {},
          p = 0,
          m = s.length,
          h;
        do {
          if (p >= m || p + m <= 0) return 0;
          let e = d + p;
          if (16 & t) e = (e + m) % m;
          else {
            if (e < 0) return 3;
            if (e >= m) return 1;
          }
          null == (h = s[e]) || h.focus(f), (p += c);
        } while (h !== a.activeElement);
        return (
          6 & t &&
            null !=
              (l =
                null == (u = null == (i = h) ? void 0 : i.matches)
                  ? void 0
                  : u.call(i, "textarea,input")) &&
            l &&
            h.select(),
          2
        );
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (e) => {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ),
        document.addEventListener(
          "click",
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ));
    },
    3703: function (e, t, n) {
      "use strict";
      function r(e, t, ...n) {
        if (e in t) {
          let r = t[e];
          return "function" == typeof r ? r(...n) : r;
        }
        let o = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(o, r), o);
      }
      n.d(t, {
        E: function () {
          return r;
        },
      });
    },
    91554: function (e, t, n) {
      "use strict";
      function r(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                })
              );
      }
      n.d(t, {
        Y: function () {
          return r;
        },
      });
    },
    29833: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(64727);
      function o(e) {
        return r.O.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
    },
    25371: function (e, t, n) {
      "use strict";
      function r() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
        );
      }
      function o() {
        return r() || /Android/gi.test(window.navigator.userAgent);
      }
      n.d(t, {
        gn: function () {
          return r;
        },
        tq: function () {
          return o;
        },
      });
    },
    90544: function (e, t, n) {
      "use strict";
      n.d(t, {
        AN: function () {
          return a;
        },
        l4: function () {
          return s;
        },
        sY: function () {
          return c;
        },
        yV: function () {
          return m;
        },
      });
      var r,
        o,
        i = n(2784),
        u = n(94020),
        l = n(3703),
        a =
          (((r = a || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        s =
          (((o = s || {})[(o.Unmount = 0)] = "Unmount"),
          (o[(o.Hidden = 1)] = "Hidden"),
          o);
      function c({
        ourProps: e,
        theirProps: t,
        slot: n,
        defaultTag: r,
        features: o,
        visible: i = !0,
        name: u,
        mergeRefs: a,
      }) {
        a = null != a ? a : f;
        let s = p(t, e);
        if (i) return d(s, n, r, u, a);
        let c = null != o ? o : 0;
        if (2 & c) {
          let { static: e = !1, ...t } = s;
          if (e) return d(t, n, r, u, a);
        }
        if (1 & c) {
          let { unmount: e = !0, ...t } = s;
          return (0, l.E)(e ? 0 : 1, {
            0: () => null,
            1: () =>
              d({ ...t, hidden: !0, style: { display: "none" } }, n, r, u, a),
          });
        }
        return d(s, n, r, u, a);
      }
      function d(e, t = {}, n, r, o) {
        let {
            as: l = n,
            children: a,
            refName: s = "ref",
            ...c
          } = h(e, ["unmount", "static"]),
          d = void 0 !== e.ref ? { [s]: e.ref } : {},
          f = "function" == typeof a ? a(t) : a;
        "className" in c &&
          c.className &&
          "function" == typeof c.className &&
          (c.className = c.className(t));
        let m = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t))
            "boolean" == typeof o && (e = !0), !0 === o && n.push(r);
          e && (m["data-headlessui-state"] = n.join(" "));
        }
        if (l === i.Fragment && Object.keys(v(c)).length > 0) {
          if (!(0, i.isValidElement)(f) || (Array.isArray(f) && f.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${r} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(c).map((e) => `  - ${e}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((e) => `  - ${e}`).join(`
`),
              ].join(`
`)
            );
          let e = f.props,
            t =
              "function" == typeof (null == e ? void 0 : e.className)
                ? (...t) =>
                    (0, u.A)(
                      null == e ? void 0 : e.className(...t),
                      c.className
                    )
                : (0, u.A)(null == e ? void 0 : e.className, c.className);
          return (0, i.cloneElement)(
            f,
            Object.assign(
              {},
              p(f.props, v(h(c, ["ref"]))),
              m,
              d,
              { ref: o(f.ref, d.ref) },
              t ? { className: t } : {}
            )
          );
        }
        return (0, i.createElement)(
          l,
          Object.assign(
            {},
            h(c, ["ref"]),
            l !== i.Fragment && d,
            l !== i.Fragment && m
          ),
          f
        );
      }
      function f(...e) {
        return e.every((e) => null == e)
          ? void 0
          : (t) => {
              for (let n of e)
                null != n && ("function" == typeof n ? n(t) : (n.current = t));
            };
      }
      function p(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let r of e)
          for (let e in r)
            e.startsWith("on") && "function" == typeof r[e]
              ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
              : (t[e] = r[e]);
        if (t.disabled || t["aria-disabled"])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((e) => [e, void 0]))
          );
        for (let e in n)
          Object.assign(t, {
            [e](t, ...r) {
              for (let o of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                o(t, ...r);
              }
            },
          });
        return t;
      }
      function m(e) {
        var t;
        return Object.assign((0, i.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function v(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function h(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
    },
  },
]);
