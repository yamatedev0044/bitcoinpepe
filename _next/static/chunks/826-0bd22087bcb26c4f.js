(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [826],
  {
    2321: function () {},
    93158: function (e, t, i) {
      "use strict";
      let r, s, n;
      i.d(t, {
        tq: function () {
          return eo;
        },
        o5: function () {
          return ed;
        },
      });
      var l = i(2784);
      function a(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function o(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {});
        let i = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > i.indexOf(e))
          .forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : a(t[i]) &&
                a(e[i]) &&
                Object.keys(t[i]).length > 0 &&
                o(e[i], t[i]);
          });
      }
      let d = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function c() {
        let e = "undefined" != typeof document ? document : {};
        return o(e, d), e;
      }
      let u = {
        document: d,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function p() {
        let e = "undefined" != typeof window ? window : {};
        return o(e, u), e;
      }
      function h(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function f() {
        return Date.now();
      }
      function m(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function v() {
        let e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          let r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (
            null != r &&
            ("undefined" != typeof window && void 0 !== window.HTMLElement
              ? !(r instanceof HTMLElement)
              : !r || (1 !== r.nodeType && 11 !== r.nodeType))
          ) {
            let i = Object.keys(Object(r)).filter((e) => 0 > t.indexOf(e));
            for (let t = 0, s = i.length; t < s; t += 1) {
              let s = i[t],
                n = Object.getOwnPropertyDescriptor(r, s);
              void 0 !== n &&
                n.enumerable &&
                (m(e[s]) && m(r[s])
                  ? r[s].__swiper__
                    ? (e[s] = r[s])
                    : v(e[s], r[s])
                  : !m(e[s]) && m(r[s])
                  ? ((e[s] = {}),
                    r[s].__swiper__ ? (e[s] = r[s]) : v(e[s], r[s]))
                  : (e[s] = r[s]));
            }
          }
        }
        return e;
      }
      function g(e, t, i) {
        e.style.setProperty(t, i);
      }
      function w(e) {
        let t,
          { swiper: i, targetPosition: r, side: s } = e,
          n = p(),
          l = -i.translate,
          a = null,
          o = i.params.speed;
        (i.wrapperEl.style.scrollSnapType = "none"),
          n.cancelAnimationFrame(i.cssModeFrameID);
        let d = r > l ? "next" : "prev",
          c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
          u = () => {
            (t = new Date().getTime()), null === a && (a = t);
            let e =
              l +
              (0.5 -
                Math.cos(Math.max(Math.min((t - a) / o, 1), 0) * Math.PI) / 2) *
                (r - l);
            if (
              (c(e, r) && (e = r), i.wrapperEl.scrollTo({ [s]: e }), c(e, r))
            ) {
              (i.wrapperEl.style.overflow = "hidden"),
                (i.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (i.wrapperEl.style.overflow = ""),
                    i.wrapperEl.scrollTo({ [s]: e });
                }),
                n.cancelAnimationFrame(i.cssModeFrameID);
              return;
            }
            i.cssModeFrameID = n.requestAnimationFrame(u);
          };
        u();
      }
      function S(e, t) {
        void 0 === t && (t = "");
        let i = p(),
          r = [...e.children];
        return (i.HTMLSlotElement &&
          e instanceof HTMLSlotElement &&
          r.push(...e.assignedElements()),
        t)
          ? r.filter((e) => e.matches(t))
          : r;
      }
      function b(e) {
        try {
          console.warn(e);
          return;
        } catch (e) {}
      }
      function y(e, t) {
        var i;
        void 0 === t && (t = []);
        let r = document.createElement(e);
        return (
          r.classList.add(
            ...(Array.isArray(t)
              ? t
              : (void 0 === (i = t) && (i = ""),
                i
                  .trim()
                  .split(" ")
                  .filter((e) => !!e.trim())))
          ),
          r
        );
      }
      function E(e, t) {
        return p().getComputedStyle(e, null).getPropertyValue(t);
      }
      function T(e) {
        let t,
          i = e;
        if (i) {
          for (t = 0; null !== (i = i.previousSibling); )
            1 === i.nodeType && (t += 1);
          return t;
        }
      }
      function x(e, t, i) {
        let r = p();
        return i
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      function M() {
        return (
          r ||
            (r = (function () {
              let e = p(),
                t = c();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          r
        );
      }
      function C(e) {
        return (
          void 0 === e && (e = {}),
          s ||
            (s = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e,
                i = M(),
                r = p(),
                s = r.navigator.platform,
                n = t || r.navigator.userAgent,
                l = { ios: !1, android: !1 },
                a = r.screen.width,
                o = r.screen.height,
                d = n.match(/(Android);?[\s\/]+([\d.]+)?/),
                c = n.match(/(iPad).*OS\s([\d_]+)/),
                u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                h = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "MacIntel" === s;
              return (
                !c &&
                  f &&
                  i.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${a}x${o}`) >= 0 &&
                  ((c = n.match(/(Version)\/([\d.]+)/)) ||
                    (c = [0, 1, "13_0_0"]),
                  (f = !1)),
                d && "Win32" !== s && ((l.os = "android"), (l.android = !0)),
                (c || h || u) && ((l.os = "ios"), (l.ios = !0)),
                l
              );
            })(e)),
          s
        );
      }
      function P() {
        return (
          n ||
            (n = (function () {
              let e = p(),
                t = C(),
                i = !1;
              function r() {
                let t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  0 > t.indexOf("chrome") &&
                  0 > t.indexOf("android")
                );
              }
              if (r()) {
                let t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                  let [e, r] = t
                    .split("Version/")[1]
                    .split(" ")[0]
                    .split(".")
                    .map((e) => Number(e));
                  i = e < 16 || (16 === e && r < 2);
                }
              }
              let s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
                n = r(),
                l = n || (s && t.ios);
              return {
                isSafari: i || n,
                needPerspectiveFix: i,
                need3dFix: l,
                isWebView: s,
              };
            })()),
          n
        );
      }
      let k = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        L = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        O = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          let i = t.closest(
            e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
          );
          if (i) {
            let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
              e.isElement &&
              (i.shadowRoot
                ? (t = i.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  ))
                : requestAnimationFrame(() => {
                    i.shadowRoot &&
                      (t = i.shadowRoot.querySelector(
                        `.${e.params.lazyPreloaderClass}`
                      )) &&
                      t.remove();
                  })),
              t && t.remove();
          }
        },
        _ = (e, t) => {
          if (!e.slides[t]) return;
          let i = e.slides[t].querySelector('[loading="lazy"]');
          i && i.removeAttribute("loading");
        },
        I = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext,
            i = e.slides.length;
          if (!i || !t || t < 0) return;
          t = Math.min(t, i);
          let r =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            s = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            let i = [s - t];
            i.push(...Array.from({ length: t }).map((e, t) => s + r + t)),
              e.slides.forEach((t, r) => {
                i.includes(t.column) && _(e, r);
              });
            return;
          }
          let n = s + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let r = s - t; r <= n + t; r += 1) {
              let t = ((r % i) + i) % i;
              (t < s || t > n) && _(e, t);
            }
          else
            for (
              let r = Math.max(s - t, 0);
              r <= Math.min(n + t, i - 1);
              r += 1
            )
              r !== s && (r > n || r < s) && _(e, r);
        };
      function z(e) {
        let { swiper: t, runCallbacks: i, direction: r, step: s } = e,
          { activeIndex: n, previousIndex: l } = t,
          a = r;
        if (
          (a || (a = n > l ? "next" : n < l ? "prev" : "reset"),
          t.emit(`transition${s}`),
          i && n !== l)
        ) {
          if ("reset" === a) {
            t.emit(`slideResetTransition${s}`);
            return;
          }
          t.emit(`slideChangeTransition${s}`),
            "next" === a
              ? t.emit(`slideNextTransition${s}`)
              : t.emit(`slidePrevTransition${s}`);
        }
      }
      function A(e, t, i) {
        let r = p(),
          { params: s } = e,
          n = s.edgeSwipeDetection,
          l = s.edgeSwipeThreshold;
        return (
          !n ||
          (!(i <= l) && !(i >= r.innerWidth - l)) ||
          ("prevent" === n && (t.preventDefault(), !0))
        );
      }
      function D(e) {
        let t = c(),
          i = e;
        i.originalEvent && (i = i.originalEvent);
        let r = this.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
          r.pointerId = i.pointerId;
        } else
          "touchstart" === i.type &&
            1 === i.targetTouches.length &&
            (r.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) {
          A(this, i, i.targetTouches[0].pageX);
          return;
        }
        let { params: s, touches: n, enabled: l } = this;
        if (
          !l ||
          (!s.simulateTouch && "mouse" === i.pointerType) ||
          (this.animating && s.preventInteractionOnTransition)
        )
          return;
        !this.animating && s.cssMode && s.loop && this.loopFix();
        let a = i.target;
        if (
          ("wrapper" === s.touchEventsTarget &&
            !(function (e, t) {
              let i = p(),
                r = t.contains(e);
              return (
                !r &&
                  i.HTMLSlotElement &&
                  t instanceof HTMLSlotElement &&
                  !(r = [...t.assignedElements()].includes(e)) &&
                  (r = (function (e, t) {
                    let i = [t];
                    for (; i.length > 0; ) {
                      let t = i.shift();
                      if (e === t) return !0;
                      i.push(
                        ...t.children,
                        ...(t.shadowRoot ? t.shadowRoot.children : []),
                        ...(t.assignedElements ? t.assignedElements() : [])
                      );
                    }
                  })(e, t)),
                r
              );
            })(a, this.wrapperEl)) ||
          ("which" in i && 3 === i.which) ||
          ("button" in i && i.button > 0) ||
          (r.isTouched && r.isMoved)
        )
          return;
        let o = !!s.noSwipingClass && "" !== s.noSwipingClass,
          d = i.composedPath ? i.composedPath() : i.path;
        o && i.target && i.target.shadowRoot && d && (a = d[0]);
        let u = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
          h = !!(i.target && i.target.shadowRoot);
        if (
          s.noSwiping &&
          (h
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(i) {
                    if (!i || i === c() || i === p()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let r = i.closest(e);
                    return r || i.getRootNode
                      ? r || t(i.getRootNode().host)
                      : null;
                  })(t)
                );
              })(u, a)
            : a.closest(u))
        ) {
          this.allowClick = !0;
          return;
        }
        if (s.swipeHandler && !a.closest(s.swipeHandler)) return;
        (n.currentX = i.pageX), (n.currentY = i.pageY);
        let m = n.currentX,
          v = n.currentY;
        if (!A(this, i, m)) return;
        Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (n.startX = m),
          (n.startY = v),
          (r.touchStartTime = f()),
          (this.allowClick = !0),
          this.updateSize(),
          (this.swipeDirection = void 0),
          s.threshold > 0 && (r.allowThresholdMove = !1);
        let g = !0;
        a.matches(r.focusableElements) &&
          ((g = !1), "SELECT" === a.nodeName && (r.isTouched = !1)),
          t.activeElement &&
            t.activeElement.matches(r.focusableElements) &&
            t.activeElement !== a &&
            ("mouse" === i.pointerType ||
              ("mouse" !== i.pointerType && !a.matches(r.focusableElements))) &&
            t.activeElement.blur();
        let w = g && this.allowTouchMove && s.touchStartPreventDefault;
        (s.touchStartForcePreventDefault || w) &&
          !a.isContentEditable &&
          i.preventDefault(),
          s.freeMode &&
            s.freeMode.enabled &&
            this.freeMode &&
            this.animating &&
            !s.cssMode &&
            this.freeMode.onTouchStart(),
          this.emit("touchStart", i);
      }
      function G(e) {
        let t, i;
        let r = c(),
          s = this.touchEventsData,
          { params: n, touches: l, rtlTranslate: a, enabled: o } = this;
        if (!o || (!n.simulateTouch && "mouse" === e.pointerType)) return;
        let d = e;
        if (
          (d.originalEvent && (d = d.originalEvent),
          "pointermove" === d.type &&
            (null !== s.touchId || d.pointerId !== s.pointerId))
        )
          return;
        if ("touchmove" === d.type) {
          if (
            !(t = [...d.changedTouches].find(
              (e) => e.identifier === s.touchId
            )) ||
            t.identifier !== s.touchId
          )
            return;
        } else t = d;
        if (!s.isTouched) {
          s.startMoving && s.isScrolling && this.emit("touchMoveOpposite", d);
          return;
        }
        let u = t.pageX,
          p = t.pageY;
        if (d.preventedByNestedSwiper) {
          (l.startX = u), (l.startY = p);
          return;
        }
        if (!this.allowTouchMove) {
          d.target.matches(s.focusableElements) || (this.allowClick = !1),
            s.isTouched &&
              (Object.assign(l, {
                startX: u,
                startY: p,
                currentX: u,
                currentY: p,
              }),
              (s.touchStartTime = f()));
          return;
        }
        if (n.touchReleaseOnEdges && !n.loop) {
          if (this.isVertical()) {
            if (
              (p < l.startY && this.translate <= this.maxTranslate()) ||
              (p > l.startY && this.translate >= this.minTranslate())
            ) {
              (s.isTouched = !1), (s.isMoved = !1);
              return;
            }
          } else if (
            a &&
            ((u > l.startX && -this.translate <= this.maxTranslate()) ||
              (u < l.startX && -this.translate >= this.minTranslate()))
          )
            return;
          else if (
            !a &&
            ((u < l.startX && this.translate <= this.maxTranslate()) ||
              (u > l.startX && this.translate >= this.minTranslate()))
          )
            return;
        }
        if (
          (r.activeElement &&
            r.activeElement.matches(s.focusableElements) &&
            r.activeElement !== d.target &&
            "mouse" !== d.pointerType &&
            r.activeElement.blur(),
          r.activeElement &&
            d.target === r.activeElement &&
            d.target.matches(s.focusableElements))
        ) {
          (s.isMoved = !0), (this.allowClick = !1);
          return;
        }
        s.allowTouchCallbacks && this.emit("touchMove", d),
          (l.previousX = l.currentX),
          (l.previousY = l.currentY),
          (l.currentX = u),
          (l.currentY = p);
        let h = l.currentX - l.startX,
          m = l.currentY - l.startY;
        if (
          this.params.threshold &&
          Math.sqrt(h ** 2 + m ** 2) < this.params.threshold
        )
          return;
        if (void 0 === s.isScrolling) {
          let e;
          (this.isHorizontal() && l.currentY === l.startY) ||
          (this.isVertical() && l.currentX === l.startX)
            ? (s.isScrolling = !1)
            : h * h + m * m >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(m), Math.abs(h))) / Math.PI),
              (s.isScrolling = this.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (s.isScrolling && this.emit("touchMoveOpposite", d),
          void 0 === s.startMoving &&
            (l.currentX !== l.startX || l.currentY !== l.startY) &&
            (s.startMoving = !0),
          s.isScrolling ||
            ("touchmove" === d.type && s.preventTouchMoveFromPointerMove))
        ) {
          s.isTouched = !1;
          return;
        }
        if (!s.startMoving) return;
        (this.allowClick = !1),
          !n.cssMode && d.cancelable && d.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && d.stopPropagation();
        let v = this.isHorizontal() ? h : m,
          g = this.isHorizontal()
            ? l.currentX - l.previousX
            : l.currentY - l.previousY;
        n.oneWayMovement &&
          ((v = Math.abs(v) * (a ? 1 : -1)), (g = Math.abs(g) * (a ? 1 : -1))),
          (l.diff = v),
          (v *= n.touchRatio),
          a && ((v = -v), (g = -g));
        let w = this.touchesDirection;
        (this.swipeDirection = v > 0 ? "prev" : "next"),
          (this.touchesDirection = g > 0 ? "prev" : "next");
        let S = this.params.loop && !n.cssMode,
          b =
            ("next" === this.touchesDirection && this.allowSlideNext) ||
            ("prev" === this.touchesDirection && this.allowSlidePrev);
        if (!s.isMoved) {
          if (
            (S && b && this.loopFix({ direction: this.swipeDirection }),
            (s.startTranslate = this.getTranslate()),
            this.setTransition(0),
            this.animating)
          ) {
            let e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            this.wrapperEl.dispatchEvent(e);
          }
          (s.allowMomentumBounce = !1),
            n.grabCursor &&
              (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) &&
              this.setGrabCursor(!0),
            this.emit("sliderFirstMove", d);
        }
        if (
          (new Date().getTime(),
          !1 !== n._loopSwapReset &&
            s.isMoved &&
            s.allowThresholdMove &&
            w !== this.touchesDirection &&
            S &&
            b &&
            Math.abs(v) >= 1)
        ) {
          Object.assign(l, {
            startX: u,
            startY: p,
            currentX: u,
            currentY: p,
            startTranslate: s.currentTranslate,
          }),
            (s.loopSwapReset = !0),
            (s.startTranslate = s.currentTranslate);
          return;
        }
        this.emit("sliderMove", d),
          (s.isMoved = !0),
          (s.currentTranslate = v + s.startTranslate);
        let y = !0,
          E = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (E = 0),
          v > 0
            ? (S &&
                b &&
                !i &&
                s.allowThresholdMove &&
                s.currentTranslate >
                  (n.centeredSlides
                    ? this.minTranslate() -
                      this.slidesSizesGrid[this.activeIndex + 1] -
                      ("auto" !== n.slidesPerView &&
                      this.slides.length - n.slidesPerView >= 2
                        ? this.slidesSizesGrid[this.activeIndex + 1] +
                          this.params.spaceBetween
                        : 0) -
                      this.params.spaceBetween
                    : this.minTranslate()) &&
                this.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              s.currentTranslate > this.minTranslate() &&
                ((y = !1),
                n.resistance &&
                  (s.currentTranslate =
                    this.minTranslate() -
                    1 +
                    (-this.minTranslate() + s.startTranslate + v) ** E)))
            : v < 0 &&
              (S &&
                b &&
                !i &&
                s.allowThresholdMove &&
                s.currentTranslate <
                  (n.centeredSlides
                    ? this.maxTranslate() +
                      this.slidesSizesGrid[this.slidesSizesGrid.length - 1] +
                      this.params.spaceBetween +
                      ("auto" !== n.slidesPerView &&
                      this.slides.length - n.slidesPerView >= 2
                        ? this.slidesSizesGrid[
                            this.slidesSizesGrid.length - 1
                          ] + this.params.spaceBetween
                        : 0)
                    : this.maxTranslate()) &&
                this.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    this.slides.length -
                    ("auto" === n.slidesPerView
                      ? this.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(n.slidesPerView, 10))),
                }),
              s.currentTranslate < this.maxTranslate() &&
                ((y = !1),
                n.resistance &&
                  (s.currentTranslate =
                    this.maxTranslate() +
                    1 -
                    (this.maxTranslate() - s.startTranslate - v) ** E))),
          y && (d.preventedByNestedSwiper = !0),
          !this.allowSlideNext &&
            "next" === this.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !this.allowSlidePrev &&
            "prev" === this.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          this.allowSlidePrev ||
            this.allowSlideNext ||
            (s.currentTranslate = s.startTranslate),
          n.threshold > 0)
        ) {
          if (Math.abs(v) > n.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
              (s.allowThresholdMove = !0),
                (l.startX = l.currentX),
                (l.startY = l.currentY),
                (s.currentTranslate = s.startTranslate),
                (l.diff = this.isHorizontal()
                  ? l.currentX - l.startX
                  : l.currentY - l.startY);
              return;
            }
          } else {
            s.currentTranslate = s.startTranslate;
            return;
          }
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && this.freeMode) ||
            n.watchSlidesProgress) &&
            (this.updateActiveIndex(), this.updateSlidesClasses()),
          n.freeMode &&
            n.freeMode.enabled &&
            this.freeMode &&
            this.freeMode.onTouchMove(),
          this.updateProgress(s.currentTranslate),
          this.setTranslate(s.currentTranslate));
      }
      function N(e) {
        let t, i;
        let r = this,
          s = r.touchEventsData,
          n = e;
        if (
          (n.originalEvent && (n = n.originalEvent),
          "touchend" === n.type || "touchcancel" === n.type)
        ) {
          if (
            !(t = [...n.changedTouches].find(
              (e) => e.identifier === s.touchId
            )) ||
            t.identifier !== s.touchId
          )
            return;
        } else {
          if (null !== s.touchId || n.pointerId !== s.pointerId) return;
          t = n;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(n.type) &&
          !(
            ["pointercancel", "contextmenu"].includes(n.type) &&
            (r.browser.isSafari || r.browser.isWebView)
          )
        )
          return;
        (s.pointerId = null), (s.touchId = null);
        let {
          params: l,
          touches: a,
          rtlTranslate: o,
          slidesGrid: d,
          enabled: c,
        } = r;
        if (!c || (!l.simulateTouch && "mouse" === n.pointerType)) return;
        if (
          (s.allowTouchCallbacks && r.emit("touchEnd", n),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        ) {
          s.isMoved && l.grabCursor && r.setGrabCursor(!1),
            (s.isMoved = !1),
            (s.startMoving = !1);
          return;
        }
        l.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === r.allowSlideNext || !0 === r.allowSlidePrev) &&
          r.setGrabCursor(!1);
        let u = f(),
          p = u - s.touchStartTime;
        if (r.allowClick) {
          let e = n.path || (n.composedPath && n.composedPath());
          r.updateClickedSlide((e && e[0]) || n.target, e),
            r.emit("tap click", n),
            p < 300 &&
              u - s.lastClickTime < 300 &&
              r.emit("doubleTap doubleClick", n);
        }
        if (
          ((s.lastClickTime = f()),
          h(() => {
            r.destroyed || (r.allowClick = !0);
          }),
          !s.isTouched ||
            !s.isMoved ||
            !r.swipeDirection ||
            (0 === a.diff && !s.loopSwapReset) ||
            (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
        ) {
          (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
          return;
        }
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (i = l.followFinger
            ? o
              ? r.translate
              : -r.translate
            : -s.currentTranslate),
          l.cssMode)
        )
          return;
        if (l.freeMode && l.freeMode.enabled) {
          r.freeMode.onTouchEnd({ currentPos: i });
          return;
        }
        let m = i >= -r.maxTranslate() && !r.params.loop,
          v = 0,
          g = r.slidesSizesGrid[0];
        for (
          let e = 0;
          e < d.length;
          e += e < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
        ) {
          let t = e < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
          void 0 !== d[e + t]
            ? (m || (i >= d[e] && i < d[e + t])) &&
              ((v = e), (g = d[e + t] - d[e]))
            : (m || i >= d[e]) &&
              ((v = e), (g = d[d.length - 1] - d[d.length - 2]));
        }
        let w = null,
          S = null;
        l.rewind &&
          (r.isBeginning
            ? (S =
                l.virtual && l.virtual.enabled && r.virtual
                  ? r.virtual.slides.length - 1
                  : r.slides.length - 1)
            : r.isEnd && (w = 0));
        let b = (i - d[v]) / g,
          y = v < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
        if (p > l.longSwipesMs) {
          if (!l.longSwipes) {
            r.slideTo(r.activeIndex);
            return;
          }
          "next" === r.swipeDirection &&
            (b >= l.longSwipesRatio
              ? r.slideTo(l.rewind && r.isEnd ? w : v + y)
              : r.slideTo(v)),
            "prev" === r.swipeDirection &&
              (b > 1 - l.longSwipesRatio
                ? r.slideTo(v + y)
                : null !== S && b < 0 && Math.abs(b) > l.longSwipesRatio
                ? r.slideTo(S)
                : r.slideTo(v));
        } else {
          if (!l.shortSwipes) {
            r.slideTo(r.activeIndex);
            return;
          }
          r.navigation &&
          (n.target === r.navigation.nextEl || n.target === r.navigation.prevEl)
            ? n.target === r.navigation.nextEl
              ? r.slideTo(v + y)
              : r.slideTo(v)
            : ("next" === r.swipeDirection && r.slideTo(null !== w ? w : v + y),
              "prev" === r.swipeDirection && r.slideTo(null !== S ? S : v));
        }
      }
      function B() {
        let e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let { allowSlideNext: r, allowSlidePrev: s, snapGrid: n } = e,
          l = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        let a = l && t.loop;
        ("auto" !== t.slidesPerView && !(t.slidesPerView > 1)) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        a
          ? e.params.loop && !l
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = s),
          (e.allowSlideNext = r),
          e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
      }
      function V(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function R() {
        let { wrapperEl: e, rtlTranslate: t, enabled: i } = this;
        if (!i) return;
        (this.previousTranslate = this.translate),
          this.isHorizontal()
            ? (this.translate = -e.scrollLeft)
            : (this.translate = -e.scrollTop),
          0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        let r = this.maxTranslate() - this.minTranslate();
        (0 === r ? 0 : (this.translate - this.minTranslate()) / r) !==
          this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit("setTranslate", this.translate, !1);
      }
      function $(e) {
        O(this, e.target),
          !this.params.cssMode &&
            ("auto" === this.params.slidesPerView || this.params.autoHeight) &&
            this.update();
      }
      function F() {
        !this.documentTouchHandlerProceeded &&
          ((this.documentTouchHandlerProceeded = !0),
          this.params.touchReleaseOnEdges &&
            (this.el.style.touchAction = "auto"));
      }
      let H = (e, t) => {
          let i = c(),
            { params: r, el: s, wrapperEl: n, device: l } = e,
            a = !!r.nested,
            o = "on" === t ? "addEventListener" : "removeEventListener";
          s &&
            "string" != typeof s &&
            (i[o]("touchstart", e.onDocumentTouchStart, {
              passive: !1,
              capture: a,
            }),
            s[o]("touchstart", e.onTouchStart, { passive: !1 }),
            s[o]("pointerdown", e.onTouchStart, { passive: !1 }),
            i[o]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
            i[o]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
            i[o]("touchend", e.onTouchEnd, { passive: !0 }),
            i[o]("pointerup", e.onTouchEnd, { passive: !0 }),
            i[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
            i[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
            i[o]("pointerout", e.onTouchEnd, { passive: !0 }),
            i[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
            i[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
            (r.preventClicks || r.preventClicksPropagation) &&
              s[o]("click", e.onClick, !0),
            r.cssMode && n[o]("scroll", e.onScroll),
            r.updateOnWindowResize
              ? e[t](
                  l.ios || l.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  B,
                  !0
                )
              : e[t]("observerUpdate", B, !0),
            s[o]("load", e.onLoad, { capture: !0 }));
        },
        j = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var W = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      let X = {
          eventsEmitter: {
            on(e, t, i) {
              let r = this;
              if (!r.eventsListeners || r.destroyed || "function" != typeof t)
                return r;
              let s = i ? "unshift" : "push";
              return (
                e.split(" ").forEach((e) => {
                  r.eventsListeners[e] || (r.eventsListeners[e] = []),
                    r.eventsListeners[e][s](t);
                }),
                r
              );
            },
            once(e, t, i) {
              let r = this;
              if (!r.eventsListeners || r.destroyed || "function" != typeof t)
                return r;
              function s() {
                r.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
                for (var i = arguments.length, n = Array(i), l = 0; l < i; l++)
                  n[l] = arguments[l];
                t.apply(r, n);
              }
              return (s.__emitterProxy = t), r.on(e, s, i);
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  "function" != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? "unshift" : "push"](e)),
                this
              );
            },
            offAny(e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this;
              let t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off(e, t) {
              let i = this;
              return (
                i.eventsListeners &&
                  !i.destroyed &&
                  i.eventsListeners &&
                  e.split(" ").forEach((e) => {
                    void 0 === t
                      ? (i.eventsListeners[e] = [])
                      : i.eventsListeners[e] &&
                        i.eventsListeners[e].forEach((r, s) => {
                          (r === t ||
                            (r.__emitterProxy && r.__emitterProxy === t)) &&
                            i.eventsListeners[e].splice(s, 1);
                        });
                  }),
                i
              );
            },
            emit() {
              let e, t, i;
              let r = this;
              if (!r.eventsListeners || r.destroyed || !r.eventsListeners)
                return r;
              for (var s = arguments.length, n = Array(s), l = 0; l < s; l++)
                n[l] = arguments[l];
              return (
                "string" == typeof n[0] || Array.isArray(n[0])
                  ? ((e = n[0]), (t = n.slice(1, n.length)), (i = r))
                  : ((e = n[0].events),
                    (t = n[0].data),
                    (i = n[0].context || r)),
                t.unshift(i),
                (Array.isArray(e) ? e : e.split(" ")).forEach((e) => {
                  r.eventsAnyListeners &&
                    r.eventsAnyListeners.length &&
                    r.eventsAnyListeners.forEach((r) => {
                      r.apply(i, [e, ...t]);
                    }),
                    r.eventsListeners &&
                      r.eventsListeners[e] &&
                      r.eventsListeners[e].forEach((e) => {
                        e.apply(i, t);
                      });
                }),
                r
              );
            },
          },
          update: {
            updateSize: function () {
              let e, t;
              let i = this.el;
              (e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : i.clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : i.clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt(E(i, "padding-left") || 0, 10) -
                    parseInt(E(i, "padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt(E(i, "padding-top") || 0, 10) -
                    parseInt(E(i, "padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              let e;
              let t = this;
              function i(e, i) {
                return parseFloat(
                  e.getPropertyValue(t.getDirectionLabel(i)) || 0
                );
              }
              let r = t.params,
                {
                  wrapperEl: s,
                  slidesEl: n,
                  size: l,
                  rtlTranslate: a,
                  wrongRTL: o,
                } = t,
                d = t.virtual && r.virtual.enabled,
                c = d ? t.virtual.slides.length : t.slides.length,
                u = S(n, `.${t.params.slideClass}, swiper-slide`),
                p = d ? t.virtual.slides.length : u.length,
                h = [],
                f = [],
                m = [],
                v = r.slidesOffsetBefore;
              "function" == typeof v && (v = r.slidesOffsetBefore.call(t));
              let w = r.slidesOffsetAfter;
              "function" == typeof w && (w = r.slidesOffsetAfter.call(t));
              let b = t.snapGrid.length,
                y = t.slidesGrid.length,
                T = r.spaceBetween,
                M = -v,
                C = 0,
                P = 0;
              if (void 0 === l) return;
              "string" == typeof T && T.indexOf("%") >= 0
                ? (T = (parseFloat(T.replace("%", "")) / 100) * l)
                : "string" == typeof T && (T = parseFloat(T)),
                (t.virtualSize = -T),
                u.forEach((e) => {
                  a ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                    (e.style.marginBottom = ""),
                    (e.style.marginTop = "");
                }),
                r.centeredSlides &&
                  r.cssMode &&
                  (g(s, "--swiper-centered-offset-before", ""),
                  g(s, "--swiper-centered-offset-after", ""));
              let k = r.grid && r.grid.rows > 1 && t.grid;
              k ? t.grid.initSlides(u) : t.grid && t.grid.unsetSlides();
              let L =
                "auto" === r.slidesPerView &&
                r.breakpoints &&
                Object.keys(r.breakpoints).filter(
                  (e) => void 0 !== r.breakpoints[e].slidesPerView
                ).length > 0;
              for (let s = 0; s < p; s += 1) {
                let n;
                if (
                  ((e = 0),
                  u[s] && (n = u[s]),
                  k && t.grid.updateSlide(s, n, u),
                  !u[s] || "none" !== E(n, "display"))
                ) {
                  if ("auto" === r.slidesPerView) {
                    L && (u[s].style[t.getDirectionLabel("width")] = "");
                    let l = getComputedStyle(n),
                      a = n.style.transform,
                      o = n.style.webkitTransform;
                    if (
                      (a && (n.style.transform = "none"),
                      o && (n.style.webkitTransform = "none"),
                      r.roundLengths)
                    )
                      e = t.isHorizontal()
                        ? x(n, "width", !0)
                        : x(n, "height", !0);
                    else {
                      let t = i(l, "width"),
                        r = i(l, "padding-left"),
                        s = i(l, "padding-right"),
                        a = i(l, "margin-left"),
                        o = i(l, "margin-right"),
                        d = l.getPropertyValue("box-sizing");
                      if (d && "border-box" === d) e = t + a + o;
                      else {
                        let { clientWidth: i, offsetWidth: l } = n;
                        e = t + r + s + a + o + (l - i);
                      }
                    }
                    a && (n.style.transform = a),
                      o && (n.style.webkitTransform = o),
                      r.roundLengths && (e = Math.floor(e));
                  } else
                    (e = (l - (r.slidesPerView - 1) * T) / r.slidesPerView),
                      r.roundLengths && (e = Math.floor(e)),
                      u[s] &&
                        (u[s].style[t.getDirectionLabel("width")] = `${e}px`);
                  u[s] && (u[s].swiperSlideSize = e),
                    m.push(e),
                    r.centeredSlides
                      ? ((M = M + e / 2 + C / 2 + T),
                        0 === C && 0 !== s && (M = M - l / 2 - T),
                        0 === s && (M = M - l / 2 - T),
                        0.001 > Math.abs(M) && (M = 0),
                        r.roundLengths && (M = Math.floor(M)),
                        P % r.slidesPerGroup == 0 && h.push(M),
                        f.push(M))
                      : (r.roundLengths && (M = Math.floor(M)),
                        (P - Math.min(t.params.slidesPerGroupSkip, P)) %
                          t.params.slidesPerGroup ==
                          0 && h.push(M),
                        f.push(M),
                        (M = M + e + T)),
                    (t.virtualSize += e + T),
                    (C = e),
                    (P += 1);
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, l) + w),
                a &&
                  o &&
                  ("slide" === r.effect || "coverflow" === r.effect) &&
                  (s.style.width = `${t.virtualSize + T}px`),
                r.setWrapperSize &&
                  (s.style[t.getDirectionLabel("width")] = `${
                    t.virtualSize + T
                  }px`),
                k && t.grid.updateWrapperSize(e, h),
                !r.centeredSlides)
              ) {
                let e = [];
                for (let i = 0; i < h.length; i += 1) {
                  let s = h[i];
                  r.roundLengths && (s = Math.floor(s)),
                    h[i] <= t.virtualSize - l && e.push(s);
                }
                (h = e),
                  Math.floor(t.virtualSize - l) - Math.floor(h[h.length - 1]) >
                    1 && h.push(t.virtualSize - l);
              }
              if (d && r.loop) {
                let e = m[0] + T;
                if (r.slidesPerGroup > 1) {
                  let i = Math.ceil(
                      (t.virtual.slidesBefore + t.virtual.slidesAfter) /
                        r.slidesPerGroup
                    ),
                    s = e * r.slidesPerGroup;
                  for (let e = 0; e < i; e += 1) h.push(h[h.length - 1] + s);
                }
                for (
                  let i = 0;
                  i < t.virtual.slidesBefore + t.virtual.slidesAfter;
                  i += 1
                )
                  1 === r.slidesPerGroup && h.push(h[h.length - 1] + e),
                    f.push(f[f.length - 1] + e),
                    (t.virtualSize += e);
              }
              if ((0 === h.length && (h = [0]), 0 !== T)) {
                let e =
                  t.isHorizontal() && a
                    ? "marginLeft"
                    : t.getDirectionLabel("marginRight");
                u.filter(
                  (e, t) => !r.cssMode || !!r.loop || t !== u.length - 1
                ).forEach((t) => {
                  t.style[e] = `${T}px`;
                });
              }
              if (r.centeredSlides && r.centeredSlidesBounds) {
                let e = 0;
                m.forEach((t) => {
                  e += t + (T || 0);
                });
                let t = (e -= T) > l ? e - l : 0;
                h = h.map((e) => (e <= 0 ? -v : e > t ? t + w : e));
              }
              if (r.centerInsufficientSlides) {
                let e = 0;
                m.forEach((t) => {
                  e += t + (T || 0);
                }),
                  (e -= T);
                let t =
                  (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
                if (e + t < l) {
                  let i = (l - e - t) / 2;
                  h.forEach((e, t) => {
                    h[t] = e - i;
                  }),
                    f.forEach((e, t) => {
                      f[t] = e + i;
                    });
                }
              }
              if (
                (Object.assign(t, {
                  slides: u,
                  snapGrid: h,
                  slidesGrid: f,
                  slidesSizesGrid: m,
                }),
                r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
              ) {
                g(s, "--swiper-centered-offset-before", `${-h[0]}px`),
                  g(
                    s,
                    "--swiper-centered-offset-after",
                    `${t.size / 2 - m[m.length - 1] / 2}px`
                  );
                let e = -t.snapGrid[0],
                  i = -t.slidesGrid[0];
                (t.snapGrid = t.snapGrid.map((t) => t + e)),
                  (t.slidesGrid = t.slidesGrid.map((e) => e + i));
              }
              if (
                (p !== c && t.emit("slidesLengthChange"),
                h.length !== b &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit("snapGridLengthChange")),
                f.length !== y && t.emit("slidesGridLengthChange"),
                r.watchSlidesProgress && t.updateSlidesOffset(),
                t.emit("slidesUpdated"),
                !d &&
                  !r.cssMode &&
                  ("slide" === r.effect || "fade" === r.effect))
              ) {
                let e = `${r.containerModifierClass}backface-hidden`,
                  i = t.el.classList.contains(e);
                p <= r.maxBackfaceHiddenSlides
                  ? i || t.el.classList.add(e)
                  : i && t.el.classList.remove(e);
              }
            },
            updateAutoHeight: function (e) {
              let t;
              let i = this,
                r = [],
                s = i.virtual && i.params.virtual.enabled,
                n = 0;
              "number" == typeof e
                ? i.setTransition(e)
                : !0 === e && i.setTransition(i.params.speed);
              let l = (e) =>
                s ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
              if (
                "auto" !== i.params.slidesPerView &&
                i.params.slidesPerView > 1
              ) {
                if (i.params.centeredSlides)
                  (i.visibleSlides || []).forEach((e) => {
                    r.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    let e = i.activeIndex + t;
                    if (e > i.slides.length && !s) break;
                    r.push(l(e));
                  }
              } else r.push(l(i.activeIndex));
              for (t = 0; t < r.length; t += 1)
                if (void 0 !== r[t]) {
                  let e = r[t].offsetHeight;
                  n = e > n ? e : n;
                }
              (n || 0 === n) && (i.wrapperEl.style.height = `${n}px`);
            },
            updateSlidesOffset: function () {
              let e = this.slides,
                t = this.isElement
                  ? this.isHorizontal()
                    ? this.wrapperEl.offsetLeft
                    : this.wrapperEl.offsetTop
                  : 0;
              for (let i = 0; i < e.length; i += 1)
                e[i].swiperSlideOffset =
                  (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
                  t -
                  this.cssOverflowAdjustment();
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              let t = this.params,
                { slides: i, rtlTranslate: r, snapGrid: s } = this;
              if (0 === i.length) return;
              void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
              let n = -e;
              r && (n = e),
                (this.visibleSlidesIndexes = []),
                (this.visibleSlides = []);
              let l = t.spaceBetween;
              "string" == typeof l && l.indexOf("%") >= 0
                ? (l = (parseFloat(l.replace("%", "")) / 100) * this.size)
                : "string" == typeof l && (l = parseFloat(l));
              for (let e = 0; e < i.length; e += 1) {
                let a = i[e],
                  o = a.swiperSlideOffset;
                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                let d =
                    (n + (t.centeredSlides ? this.minTranslate() : 0) - o) /
                    (a.swiperSlideSize + l),
                  c =
                    (n -
                      s[0] +
                      (t.centeredSlides ? this.minTranslate() : 0) -
                      o) /
                    (a.swiperSlideSize + l),
                  u = -(n - o),
                  p = u + this.slidesSizesGrid[e],
                  h = u >= 0 && u <= this.size - this.slidesSizesGrid[e],
                  f =
                    (u >= 0 && u < this.size - 1) ||
                    (p > 1 && p <= this.size) ||
                    (u <= 0 && p >= this.size);
                f &&
                  (this.visibleSlides.push(a),
                  this.visibleSlidesIndexes.push(e)),
                  k(a, f, t.slideVisibleClass),
                  k(a, h, t.slideFullyVisibleClass),
                  (a.progress = r ? -d : d),
                  (a.originalProgress = r ? -c : c);
              }
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                {
                  progress: r,
                  isBeginning: s,
                  isEnd: n,
                  progressLoop: l,
                } = this,
                a = s,
                o = n;
              if (0 === i) (r = 0), (s = !0), (n = !0);
              else {
                r = (e - this.minTranslate()) / i;
                let t = 1 > Math.abs(e - this.minTranslate()),
                  l = 1 > Math.abs(e - this.maxTranslate());
                (s = t || r <= 0),
                  (n = l || r >= 1),
                  t && (r = 0),
                  l && (r = 1);
              }
              if (t.loop) {
                let t = this.getSlideIndexByData(0),
                  i = this.getSlideIndexByData(this.slides.length - 1),
                  r = this.slidesGrid[t],
                  s = this.slidesGrid[i],
                  n = this.slidesGrid[this.slidesGrid.length - 1],
                  a = Math.abs(e);
                (l = a >= r ? (a - r) / n : (a + n - s) / n) > 1 && (l -= 1);
              }
              Object.assign(this, {
                progress: r,
                progressLoop: l,
                isBeginning: s,
                isEnd: n,
              }),
                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
                  this.updateSlidesProgress(e),
                s && !a && this.emit("reachBeginning toEdge"),
                n && !o && this.emit("reachEnd toEdge"),
                ((a && !s) || (o && !n)) && this.emit("fromEdge"),
                this.emit("progress", r);
            },
            updateSlidesClasses: function () {
              let e, t, i;
              let { slides: r, params: s, slidesEl: n, activeIndex: l } = this,
                a = this.virtual && s.virtual.enabled,
                o = this.grid && s.grid && s.grid.rows > 1,
                d = (e) => S(n, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
              if (a) {
                if (s.loop) {
                  let t = l - this.virtual.slidesBefore;
                  t < 0 && (t = this.virtual.slides.length + t),
                    t >= this.virtual.slides.length &&
                      (t -= this.virtual.slides.length),
                    (e = d(`[data-swiper-slide-index="${t}"]`));
                } else e = d(`[data-swiper-slide-index="${l}"]`);
              } else
                o
                  ? ((e = r.find((e) => e.column === l)),
                    (i = r.find((e) => e.column === l + 1)),
                    (t = r.find((e) => e.column === l - 1)))
                  : (e = r[l]);
              e &&
                !o &&
                ((i = (function (e, t) {
                  let i = [];
                  for (; e.nextElementSibling; ) {
                    let r = e.nextElementSibling;
                    t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
                  }
                  return i;
                })(e, `.${s.slideClass}, swiper-slide`)[0]),
                s.loop && !i && (i = r[0]),
                (t = (function (e, t) {
                  let i = [];
                  for (; e.previousElementSibling; ) {
                    let r = e.previousElementSibling;
                    t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
                  }
                  return i;
                })(e, `.${s.slideClass}, swiper-slide`)[0]),
                s.loop),
                r.forEach((r) => {
                  L(r, r === e, s.slideActiveClass),
                    L(r, r === i, s.slideNextClass),
                    L(r, r === t, s.slidePrevClass);
                }),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              let t, i;
              let r = this,
                s = r.rtlTranslate ? r.translate : -r.translate,
                {
                  snapGrid: n,
                  params: l,
                  activeIndex: a,
                  realIndex: o,
                  snapIndex: d,
                } = r,
                c = e,
                u = (e) => {
                  let t = e - r.virtual.slidesBefore;
                  return (
                    t < 0 && (t = r.virtual.slides.length + t),
                    t >= r.virtual.slides.length &&
                      (t -= r.virtual.slides.length),
                    t
                  );
                };
              if (
                (void 0 === c &&
                  (c = (function (e) {
                    let t;
                    let { slidesGrid: i, params: r } = e,
                      s = e.rtlTranslate ? e.translate : -e.translate;
                    for (let e = 0; e < i.length; e += 1)
                      void 0 !== i[e + 1]
                        ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                          ? (t = e)
                          : s >= i[e] && s < i[e + 1] && (t = e + 1)
                        : s >= i[e] && (t = e);
                    return (
                      r.normalizeSlideIndex &&
                        (t < 0 || void 0 === t) &&
                        (t = 0),
                      t
                    );
                  })(r)),
                n.indexOf(s) >= 0)
              )
                t = n.indexOf(s);
              else {
                let e = Math.min(l.slidesPerGroupSkip, c);
                t = e + Math.floor((c - e) / l.slidesPerGroup);
              }
              if (
                (t >= n.length && (t = n.length - 1), c === a && !r.params.loop)
              ) {
                t !== d && ((r.snapIndex = t), r.emit("snapIndexChange"));
                return;
              }
              if (
                c === a &&
                r.params.loop &&
                r.virtual &&
                r.params.virtual.enabled
              ) {
                r.realIndex = u(c);
                return;
              }
              let p = r.grid && l.grid && l.grid.rows > 1;
              if (r.virtual && l.virtual.enabled && l.loop) i = u(c);
              else if (p) {
                let e = r.slides.find((e) => e.column === c),
                  t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(t) && (t = Math.max(r.slides.indexOf(e), 0)),
                  (i = Math.floor(t / l.grid.rows));
              } else if (r.slides[c]) {
                let e = r.slides[c].getAttribute("data-swiper-slide-index");
                i = e ? parseInt(e, 10) : c;
              } else i = c;
              Object.assign(r, {
                previousSnapIndex: d,
                snapIndex: t,
                previousRealIndex: o,
                realIndex: i,
                previousIndex: a,
                activeIndex: c,
              }),
                r.initialized && I(r),
                r.emit("activeIndexChange"),
                r.emit("snapIndexChange"),
                (r.initialized || r.params.runCallbacksOnInit) &&
                  (o !== i && r.emit("realIndexChange"), r.emit("slideChange"));
            },
            updateClickedSlide: function (e, t) {
              let i;
              let r = this.params,
                s = e.closest(`.${r.slideClass}, swiper-slide`);
              !s &&
                this.isElement &&
                t &&
                t.length > 1 &&
                t.includes(e) &&
                [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                  !s &&
                    e.matches &&
                    e.matches(`.${r.slideClass}, swiper-slide`) &&
                    (s = e);
                });
              let n = !1;
              if (s) {
                for (let e = 0; e < this.slides.length; e += 1)
                  if (this.slides[e] === s) {
                    (n = !0), (i = e);
                    break;
                  }
              }
              if (s && n)
                (this.clickedSlide = s),
                  this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(
                        s.getAttribute("data-swiper-slide-index"),
                        10
                      ))
                    : (this.clickedIndex = i);
              else {
                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                return;
              }
              r.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              let {
                params: t,
                rtlTranslate: i,
                translate: r,
                wrapperEl: s,
              } = this;
              if (t.virtualTranslate) return i ? -r : r;
              if (t.cssMode) return r;
              let n = (function (e, t) {
                let i, r, s;
                void 0 === t && (t = "x");
                let n = p(),
                  l = (function (e) {
                    let t;
                    let i = p();
                    return (
                      i.getComputedStyle && (t = i.getComputedStyle(e, null)),
                      !t && e.currentStyle && (t = e.currentStyle),
                      t || (t = e.style),
                      t
                    );
                  })(e);
                return (
                  n.WebKitCSSMatrix
                    ? ((r = l.transform || l.webkitTransform).split(",")
                        .length > 6 &&
                        (r = r
                          .split(", ")
                          .map((e) => e.replace(",", "."))
                          .join(", ")),
                      (s = new n.WebKitCSSMatrix("none" === r ? "" : r)))
                    : (i = (s =
                        l.MozTransform ||
                        l.OTransform ||
                        l.MsTransform ||
                        l.msTransform ||
                        l.transform ||
                        l
                          .getPropertyValue("transform")
                          .replace("translate(", "matrix(1, 0, 0, 1,"))
                        .toString()
                        .split(",")),
                  "x" === t &&
                    (r = n.WebKitCSSMatrix
                      ? s.m41
                      : 16 === i.length
                      ? parseFloat(i[12])
                      : parseFloat(i[4])),
                  "y" === t &&
                    (r = n.WebKitCSSMatrix
                      ? s.m42
                      : 16 === i.length
                      ? parseFloat(i[13])
                      : parseFloat(i[5])),
                  r || 0
                );
              })(s, e);
              return (n += this.cssOverflowAdjustment()), i && (n = -n), n || 0;
            },
            setTranslate: function (e, t) {
              let {
                  rtlTranslate: i,
                  params: r,
                  wrapperEl: s,
                  progress: n,
                } = this,
                l = 0,
                a = 0;
              this.isHorizontal() ? (l = i ? -e : e) : (a = e),
                r.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? l : a),
                r.cssMode
                  ? (s[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      this.isHorizontal() ? -l : -a)
                  : r.virtualTranslate ||
                    (this.isHorizontal()
                      ? (l -= this.cssOverflowAdjustment())
                      : (a -= this.cssOverflowAdjustment()),
                    (s.style.transform = `translate3d(${l}px, ${a}px, 0px)`));
              let o = this.maxTranslate() - this.minTranslate();
              (0 === o ? 0 : (e - this.minTranslate()) / o) !== n &&
                this.updateProgress(e),
                this.emit("setTranslate", this.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, i, r, s) {
              let n;
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === r && (r = !0);
              let l = this,
                { params: a, wrapperEl: o } = l;
              if (l.animating && a.preventInteractionOnTransition) return !1;
              let d = l.minTranslate(),
                c = l.maxTranslate();
              if (
                ((n = r && e > d ? d : r && e < c ? c : e),
                l.updateProgress(n),
                a.cssMode)
              ) {
                let e = l.isHorizontal();
                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -n;
                else {
                  if (!l.support.smoothScroll)
                    return (
                      w({
                        swiper: l,
                        targetPosition: -n,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  o.scrollTo({ [e ? "left" : "top"]: -n, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (l.setTransition(0),
                    l.setTranslate(n),
                    i &&
                      (l.emit("beforeTransitionStart", t, s),
                      l.emit("transitionEnd")))
                  : (l.setTransition(t),
                    l.setTranslate(n),
                    i &&
                      (l.emit("beforeTransitionStart", t, s),
                      l.emit("transitionStart")),
                    l.animating ||
                      ((l.animating = !0),
                      l.onTranslateToWrapperTransitionEnd ||
                        (l.onTranslateToWrapperTransitionEnd = function (e) {
                          l &&
                            !l.destroyed &&
                            e.target === this &&
                            (l.wrapperEl.removeEventListener(
                              "transitionend",
                              l.onTranslateToWrapperTransitionEnd
                            ),
                            (l.onTranslateToWrapperTransitionEnd = null),
                            delete l.onTranslateToWrapperTransitionEnd,
                            (l.animating = !1),
                            i && l.emit("transitionEnd"));
                        }),
                      l.wrapperEl.addEventListener(
                        "transitionend",
                        l.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode ||
                ((this.wrapperEl.style.transitionDuration = `${e}ms`),
                (this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              i.cssMode ||
                (i.autoHeight && this.updateAutoHeight(),
                z({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              (this.animating = !1),
                i.cssMode ||
                  (this.setTransition(0),
                  z({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: {
            slideTo: function (e, t, i, r, s) {
              let n;
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let l = this,
                a = e;
              a < 0 && (a = 0);
              let {
                params: o,
                snapGrid: d,
                slidesGrid: c,
                previousIndex: u,
                activeIndex: p,
                rtlTranslate: h,
                wrapperEl: f,
                enabled: m,
              } = l;
              if (
                (!m && !r && !s) ||
                l.destroyed ||
                (l.animating && o.preventInteractionOnTransition)
              )
                return !1;
              void 0 === t && (t = l.params.speed);
              let v = Math.min(l.params.slidesPerGroupSkip, a),
                g = v + Math.floor((a - v) / l.params.slidesPerGroup);
              g >= d.length && (g = d.length - 1);
              let S = -d[g];
              if (o.normalizeSlideIndex)
                for (let e = 0; e < c.length; e += 1) {
                  let t = -Math.floor(100 * S),
                    i = Math.floor(100 * c[e]),
                    r = Math.floor(100 * c[e + 1]);
                  void 0 !== c[e + 1]
                    ? t >= i && t < r - (r - i) / 2
                      ? (a = e)
                      : t >= i && t < r && (a = e + 1)
                    : t >= i && (a = e);
                }
              if (
                l.initialized &&
                a !== p &&
                ((!l.allowSlideNext &&
                  (h
                    ? S > l.translate && S > l.minTranslate()
                    : S < l.translate && S < l.minTranslate())) ||
                  (!l.allowSlidePrev &&
                    S > l.translate &&
                    S > l.maxTranslate() &&
                    (p || 0) !== a))
              )
                return !1;
              a !== (u || 0) && i && l.emit("beforeSlideChangeStart"),
                l.updateProgress(S),
                (n = a > p ? "next" : a < p ? "prev" : "reset");
              let b = l.virtual && l.params.virtual.enabled;
              if (
                !(b && s) &&
                ((h && -S === l.translate) || (!h && S === l.translate))
              )
                return (
                  l.updateActiveIndex(a),
                  o.autoHeight && l.updateAutoHeight(),
                  l.updateSlidesClasses(),
                  "slide" !== o.effect && l.setTranslate(S),
                  "reset" !== n &&
                    (l.transitionStart(i, n), l.transitionEnd(i, n)),
                  !1
                );
              if (o.cssMode) {
                let e = l.isHorizontal(),
                  i = h ? S : -S;
                if (0 === t)
                  b &&
                    ((l.wrapperEl.style.scrollSnapType = "none"),
                    (l._immediateVirtual = !0)),
                    b &&
                    !l._cssModeVirtualInitialSet &&
                    l.params.initialSlide > 0
                      ? ((l._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(() => {
                          f[e ? "scrollLeft" : "scrollTop"] = i;
                        }))
                      : (f[e ? "scrollLeft" : "scrollTop"] = i),
                    b &&
                      requestAnimationFrame(() => {
                        (l.wrapperEl.style.scrollSnapType = ""),
                          (l._immediateVirtual = !1);
                      });
                else {
                  if (!l.support.smoothScroll)
                    return (
                      w({
                        swiper: l,
                        targetPosition: i,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  f.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
                }
                return !0;
              }
              let y = P().isSafari;
              return (
                b && !s && y && l.isElement && l.virtual.update(!1, !1, a),
                l.setTransition(t),
                l.setTranslate(S),
                l.updateActiveIndex(a),
                l.updateSlidesClasses(),
                l.emit("beforeTransitionStart", t, r),
                l.transitionStart(i, n),
                0 === t
                  ? l.transitionEnd(i, n)
                  : l.animating ||
                    ((l.animating = !0),
                    l.onSlideToWrapperTransitionEnd ||
                      (l.onSlideToWrapperTransitionEnd = function (e) {
                        l &&
                          !l.destroyed &&
                          e.target === this &&
                          (l.wrapperEl.removeEventListener(
                            "transitionend",
                            l.onSlideToWrapperTransitionEnd
                          ),
                          (l.onSlideToWrapperTransitionEnd = null),
                          delete l.onSlideToWrapperTransitionEnd,
                          l.transitionEnd(i, n));
                      }),
                    l.wrapperEl.addEventListener(
                      "transitionend",
                      l.onSlideToWrapperTransitionEnd
                    )),
                !0
              );
            },
            slideToLoop: function (e, t, i, r) {
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let s = this;
              if (s.destroyed) return;
              void 0 === t && (t = s.params.speed);
              let n = s.grid && s.params.grid && s.params.grid.rows > 1,
                l = e;
              if (s.params.loop) {
                if (s.virtual && s.params.virtual.enabled)
                  l += s.virtual.slidesBefore;
                else {
                  let e;
                  if (n) {
                    let t = l * s.params.grid.rows;
                    e = s.slides.find(
                      (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                    ).column;
                  } else e = s.getSlideIndexByData(l);
                  let t = n
                      ? Math.ceil(s.slides.length / s.params.grid.rows)
                      : s.slides.length,
                    { centeredSlides: i } = s.params,
                    a = s.params.slidesPerView;
                  "auto" === a
                    ? (a = s.slidesPerViewDynamic())
                    : ((a = Math.ceil(parseFloat(s.params.slidesPerView, 10))),
                      i && a % 2 == 0 && (a += 1));
                  let o = t - e < a;
                  if (
                    (i && (o = o || e < Math.ceil(a / 2)),
                    r &&
                      i &&
                      "auto" !== s.params.slidesPerView &&
                      !n &&
                      (o = !1),
                    o)
                  ) {
                    let r = i
                      ? e < s.activeIndex
                        ? "prev"
                        : "next"
                      : e - s.activeIndex - 1 < s.params.slidesPerView
                      ? "next"
                      : "prev";
                    s.loopFix({
                      direction: r,
                      slideTo: !0,
                      activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                      slideRealIndex: "next" === r ? s.realIndex : void 0,
                    });
                  }
                  if (n) {
                    let e = l * s.params.grid.rows;
                    l = s.slides.find(
                      (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                    ).column;
                  } else l = s.getSlideIndexByData(l);
                }
              }
              return (
                requestAnimationFrame(() => {
                  s.slideTo(l, t, i, r);
                }),
                s
              );
            },
            slideNext: function (e, t, i) {
              void 0 === t && (t = !0);
              let r = this,
                { enabled: s, params: n, animating: l } = r;
              if (!s || r.destroyed) return r;
              void 0 === e && (e = r.params.speed);
              let a = n.slidesPerGroup;
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
              let o = r.activeIndex < n.slidesPerGroupSkip ? 1 : a,
                d = r.virtual && n.virtual.enabled;
              if (n.loop) {
                if (l && !d && n.loopPreventsSliding) return !1;
                if (
                  (r.loopFix({ direction: "next" }),
                  (r._clientLeft = r.wrapperEl.clientLeft),
                  r.activeIndex === r.slides.length - 1 && n.cssMode)
                )
                  return (
                    requestAnimationFrame(() => {
                      r.slideTo(r.activeIndex + o, e, t, i);
                    }),
                    !0
                  );
              }
              return n.rewind && r.isEnd
                ? r.slideTo(0, e, t, i)
                : r.slideTo(r.activeIndex + o, e, t, i);
            },
            slidePrev: function (e, t, i) {
              void 0 === t && (t = !0);
              let r = this,
                {
                  params: s,
                  snapGrid: n,
                  slidesGrid: l,
                  rtlTranslate: a,
                  enabled: o,
                  animating: d,
                } = r;
              if (!o || r.destroyed) return r;
              void 0 === e && (e = r.params.speed);
              let c = r.virtual && s.virtual.enabled;
              if (s.loop) {
                if (d && !c && s.loopPreventsSliding) return !1;
                r.loopFix({ direction: "prev" }),
                  (r._clientLeft = r.wrapperEl.clientLeft);
              }
              function u(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let p = u(a ? r.translate : -r.translate),
                h = n.map((e) => u(e)),
                f = s.freeMode && s.freeMode.enabled,
                m = n[h.indexOf(p) - 1];
              if (void 0 === m && (s.cssMode || f)) {
                let e;
                n.forEach((t, i) => {
                  p >= t && (e = i);
                }),
                  void 0 !== e && (m = f ? n[e] : n[e > 0 ? e - 1 : e]);
              }
              let v = 0;
              if (
                (void 0 !== m &&
                  ((v = l.indexOf(m)) < 0 && (v = r.activeIndex - 1),
                  "auto" === s.slidesPerView &&
                    1 === s.slidesPerGroup &&
                    s.slidesPerGroupAuto &&
                    (v = Math.max(
                      (v = v - r.slidesPerViewDynamic("previous", !0) + 1),
                      0
                    ))),
                s.rewind && r.isBeginning)
              ) {
                let s =
                  r.params.virtual && r.params.virtual.enabled && r.virtual
                    ? r.virtual.slides.length - 1
                    : r.slides.length - 1;
                return r.slideTo(s, e, t, i);
              }
              return s.loop && 0 === r.activeIndex && s.cssMode
                ? (requestAnimationFrame(() => {
                    r.slideTo(v, e, t, i);
                  }),
                  !0)
                : r.slideTo(v, e, t, i);
            },
            slideReset: function (e, t, i) {
              if ((void 0 === t && (t = !0), !this.destroyed))
                return (
                  void 0 === e && (e = this.params.speed),
                  this.slideTo(this.activeIndex, e, t, i)
                );
            },
            slideToClosest: function (e, t, i, r) {
              if (
                (void 0 === t && (t = !0),
                void 0 === r && (r = 0.5),
                this.destroyed)
              )
                return;
              void 0 === e && (e = this.params.speed);
              let s = this.activeIndex,
                n = Math.min(this.params.slidesPerGroupSkip, s),
                l = n + Math.floor((s - n) / this.params.slidesPerGroup),
                a = this.rtlTranslate ? this.translate : -this.translate;
              if (a >= this.snapGrid[l]) {
                let e = this.snapGrid[l];
                a - e > (this.snapGrid[l + 1] - e) * r &&
                  (s += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[l - 1];
                a - e <= (this.snapGrid[l] - e) * r &&
                  (s -= this.params.slidesPerGroup);
              }
              return (
                (s = Math.min(
                  (s = Math.max(s, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(s, e, t, i)
              );
            },
            slideToClickedSlide: function () {
              let e;
              let t = this;
              if (t.destroyed) return;
              let { params: i, slidesEl: r } = t,
                s =
                  "auto" === i.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : i.slidesPerView,
                n = t.clickedIndex,
                l = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
              if (i.loop) {
                if (t.animating) return;
                (e = parseInt(
                  t.clickedSlide.getAttribute("data-swiper-slide-index"),
                  10
                )),
                  i.centeredSlides
                    ? n < t.loopedSlides - s / 2 ||
                      n > t.slides.length - t.loopedSlides + s / 2
                      ? (t.loopFix(),
                        (n = t.getSlideIndex(
                          S(r, `${l}[data-swiper-slide-index="${e}"]`)[0]
                        )),
                        h(() => {
                          t.slideTo(n);
                        }))
                      : t.slideTo(n)
                    : n > t.slides.length - s
                    ? (t.loopFix(),
                      (n = t.getSlideIndex(
                        S(r, `${l}[data-swiper-slide-index="${e}"]`)[0]
                      )),
                      h(() => {
                        t.slideTo(n);
                      }))
                    : t.slideTo(n);
              } else t.slideTo(n);
            },
          },
          loop: {
            loopCreate: function (e, t) {
              let i = this,
                { params: r, slidesEl: s } = i;
              if (!r.loop || (i.virtual && i.params.virtual.enabled)) return;
              let n = i.grid && r.grid && r.grid.rows > 1,
                l = r.slidesPerGroup * (n ? r.grid.rows : 1),
                a = i.slides.length % l != 0,
                o = n && i.slides.length % r.grid.rows != 0,
                d = (e) => {
                  for (let t = 0; t < e; t += 1) {
                    let e = i.isElement
                      ? y("swiper-slide", [r.slideBlankClass])
                      : y("div", [r.slideClass, r.slideBlankClass]);
                    i.slidesEl.append(e);
                  }
                };
              a
                ? r.loopAddBlankSlides
                  ? (d(l - (i.slides.length % l)),
                    i.recalcSlides(),
                    i.updateSlides())
                  : b(
                      "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                    )
                : o &&
                  (r.loopAddBlankSlides
                    ? (d(r.grid.rows - (i.slides.length % r.grid.rows)),
                      i.recalcSlides(),
                      i.updateSlides())
                    : b(
                        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                      )),
                S(s, `.${r.slideClass}, swiper-slide`).forEach((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t);
                }),
                i.loopFix({
                  slideRealIndex: e,
                  direction: r.centeredSlides ? void 0 : "next",
                  initial: t,
                });
            },
            loopFix: function (e) {
              let {
                  slideRealIndex: t,
                  slideTo: i = !0,
                  direction: r,
                  setTranslate: s,
                  activeSlideIndex: n,
                  initial: l,
                  byController: a,
                  byMousewheel: o,
                } = void 0 === e ? {} : e,
                d = this;
              if (!d.params.loop) return;
              d.emit("beforeLoopFix");
              let {
                  slides: c,
                  allowSlidePrev: u,
                  allowSlideNext: p,
                  slidesEl: h,
                  params: f,
                } = d,
                { centeredSlides: m, initialSlide: v } = f;
              if (
                ((d.allowSlidePrev = !0),
                (d.allowSlideNext = !0),
                d.virtual && f.virtual.enabled)
              ) {
                i &&
                  (f.centeredSlides || 0 !== d.snapIndex
                    ? f.centeredSlides && d.snapIndex < f.slidesPerView
                      ? d.slideTo(
                          d.virtual.slides.length + d.snapIndex,
                          0,
                          !1,
                          !0
                        )
                      : d.snapIndex === d.snapGrid.length - 1 &&
                        d.slideTo(d.virtual.slidesBefore, 0, !1, !0)
                    : d.slideTo(d.virtual.slides.length, 0, !1, !0)),
                  (d.allowSlidePrev = u),
                  (d.allowSlideNext = p),
                  d.emit("loopFix");
                return;
              }
              let g = f.slidesPerView;
              "auto" === g
                ? (g = d.slidesPerViewDynamic())
                : ((g = Math.ceil(parseFloat(f.slidesPerView, 10))),
                  m && g % 2 == 0 && (g += 1));
              let w = f.slidesPerGroupAuto ? g : f.slidesPerGroup,
                S = w;
              S % w != 0 && (S += w - (S % w)),
                (S += f.loopAdditionalSlides),
                (d.loopedSlides = S);
              let y = d.grid && f.grid && f.grid.rows > 1;
              c.length < g + S ||
              ("cards" === d.params.effect && c.length < g + 2 * S)
                ? b(
                    "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
                  )
                : y &&
                  "row" === f.grid.fill &&
                  b(
                    "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
                  );
              let E = [],
                T = [],
                x = y ? Math.ceil(c.length / f.grid.rows) : c.length,
                M = l && x - v < g && !m,
                C = M ? v : d.activeIndex;
              void 0 === n
                ? (n = d.getSlideIndex(
                    c.find((e) => e.classList.contains(f.slideActiveClass))
                  ))
                : (C = n);
              let P = "next" === r || !r,
                k = "prev" === r || !r,
                L = 0,
                O = 0,
                _ =
                  (y ? c[n].column : n) +
                  (m && void 0 === s ? -g / 2 + 0.5 : 0);
              if (_ < S) {
                L = Math.max(S - _, w);
                for (let e = 0; e < S - _; e += 1) {
                  let t = e - Math.floor(e / x) * x;
                  if (y) {
                    let e = x - t - 1;
                    for (let t = c.length - 1; t >= 0; t -= 1)
                      c[t].column === e && E.push(t);
                  } else E.push(x - t - 1);
                }
              } else if (_ + g > x - S) {
                (O = Math.max(_ - (x - 2 * S), w)),
                  M && (O = Math.max(O, g - x + v + 1));
                for (let e = 0; e < O; e += 1) {
                  let t = e - Math.floor(e / x) * x;
                  y
                    ? c.forEach((e, i) => {
                        e.column === t && T.push(i);
                      })
                    : T.push(t);
                }
              }
              if (
                ((d.__preventObserver__ = !0),
                requestAnimationFrame(() => {
                  d.__preventObserver__ = !1;
                }),
                "cards" === d.params.effect &&
                  c.length < g + 2 * S &&
                  (T.includes(n) && T.splice(T.indexOf(n), 1),
                  E.includes(n) && E.splice(E.indexOf(n), 1)),
                k &&
                  E.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0),
                      h.prepend(c[e]),
                      (c[e].swiperLoopMoveDOM = !1);
                  }),
                P &&
                  T.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0),
                      h.append(c[e]),
                      (c[e].swiperLoopMoveDOM = !1);
                  }),
                d.recalcSlides(),
                "auto" === f.slidesPerView
                  ? d.updateSlides()
                  : y &&
                    ((E.length > 0 && k) || (T.length > 0 && P)) &&
                    d.slides.forEach((e, t) => {
                      d.grid.updateSlide(t, e, d.slides);
                    }),
                f.watchSlidesProgress && d.updateSlidesOffset(),
                i)
              ) {
                if (E.length > 0 && k) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[C],
                      t = d.slidesGrid[C + L] - e;
                    o
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(C + Math.ceil(L), 0, !1, !0),
                        s &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else if (s) {
                    let e = y ? E.length / f.grid.rows : E.length;
                    d.slideTo(d.activeIndex + e, 0, !1, !0),
                      (d.touchEventsData.currentTranslate = d.translate);
                  }
                } else if (T.length > 0 && P) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[C],
                      t = d.slidesGrid[C - O] - e;
                    o
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(C - O, 0, !1, !0),
                        s &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else {
                    let e = y ? T.length / f.grid.rows : T.length;
                    d.slideTo(d.activeIndex - e, 0, !1, !0);
                  }
                }
              }
              if (
                ((d.allowSlidePrev = u),
                (d.allowSlideNext = p),
                d.controller && d.controller.control && !a)
              ) {
                let e = {
                  slideRealIndex: t,
                  direction: r,
                  setTranslate: s,
                  activeSlideIndex: n,
                  byController: !0,
                };
                Array.isArray(d.controller.control)
                  ? d.controller.control.forEach((t) => {
                      !t.destroyed &&
                        t.params.loop &&
                        t.loopFix({
                          ...e,
                          slideTo:
                            t.params.slidesPerView === f.slidesPerView && i,
                        });
                    })
                  : d.controller.control instanceof d.constructor &&
                    d.controller.control.params.loop &&
                    d.controller.control.loopFix({
                      ...e,
                      slideTo:
                        d.controller.control.params.slidesPerView ===
                          f.slidesPerView && i,
                    });
              }
              d.emit("loopFix");
            },
            loopDestroy: function () {
              let { params: e, slidesEl: t } = this;
              if (
                !e.loop ||
                !t ||
                (this.virtual && this.params.virtual.enabled)
              )
                return;
              this.recalcSlides();
              let i = [];
              this.slides.forEach((e) => {
                i[
                  void 0 === e.swiperSlideIndex
                    ? 1 * e.getAttribute("data-swiper-slide-index")
                    : e.swiperSlideIndex
                ] = e;
              }),
                this.slides.forEach((e) => {
                  e.removeAttribute("data-swiper-slide-index");
                }),
                i.forEach((e) => {
                  t.append(e);
                }),
                this.recalcSlides(),
                this.slideTo(this.realIndex, 0);
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              let t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              let i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (i.style.cursor = "move"),
                (i.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              let e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              let { params: e } = this;
              (this.onTouchStart = D.bind(this)),
                (this.onTouchMove = G.bind(this)),
                (this.onTouchEnd = N.bind(this)),
                (this.onDocumentTouchStart = F.bind(this)),
                e.cssMode && (this.onScroll = R.bind(this)),
                (this.onClick = V.bind(this)),
                (this.onLoad = $.bind(this)),
                H(this, "on");
            },
            detachEvents: function () {
              H(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                { realIndex: t, initialized: i, params: r, el: s } = e,
                n = r.breakpoints;
              if (!n || (n && 0 === Object.keys(n).length)) return;
              let l = c(),
                a =
                  "window" !== r.breakpointsBase && r.breakpointsBase
                    ? "container"
                    : r.breakpointsBase,
                o =
                  ["window", "container"].includes(r.breakpointsBase) ||
                  !r.breakpointsBase
                    ? e.el
                    : l.querySelector(r.breakpointsBase),
                d = e.getBreakpoint(n, a, o);
              if (!d || e.currentBreakpoint === d) return;
              let u = (d in n ? n[d] : void 0) || e.originalParams,
                p = j(e, r),
                h = j(e, u),
                f = e.params.grabCursor,
                m = u.grabCursor,
                g = r.enabled;
              p && !h
                ? (s.classList.remove(
                    `${r.containerModifierClass}grid`,
                    `${r.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !p &&
                  h &&
                  (s.classList.add(`${r.containerModifierClass}grid`),
                  ((u.grid.fill && "column" === u.grid.fill) ||
                    (!u.grid.fill && "column" === r.grid.fill)) &&
                    s.classList.add(`${r.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                f && !m ? e.unsetGrabCursor() : !f && m && e.setGrabCursor(),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if (void 0 === u[t]) return;
                  let i = r[t] && r[t].enabled,
                    s = u[t] && u[t].enabled;
                  i && !s && e[t].disable(), !i && s && e[t].enable();
                });
              let w = u.direction && u.direction !== r.direction,
                S = r.loop && (u.slidesPerView !== r.slidesPerView || w),
                b = r.loop;
              w && i && e.changeDirection(), v(e.params, u);
              let y = e.params.enabled,
                E = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                g && !y ? e.disable() : !g && y && e.enable(),
                (e.currentBreakpoint = d),
                e.emit("_beforeBreakpoint", u),
                i &&
                  (S
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !b && E
                    ? (e.loopCreate(t), e.updateSlides())
                    : b && !E && e.loopDestroy()),
                e.emit("breakpoint", u);
            },
            getBreakpoint: function (e, t, i) {
              if (
                (void 0 === t && (t = "window"),
                !e || ("container" === t && !i))
              )
                return;
              let r = !1,
                s = p(),
                n = "window" === t ? s.innerHeight : i.clientHeight,
                l = Object.keys(e).map((e) =>
                  "string" == typeof e && 0 === e.indexOf("@")
                    ? { value: n * parseFloat(e.substr(1)), point: e }
                    : { value: e, point: e }
                );
              l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < l.length; e += 1) {
                let { point: n, value: a } = l[e];
                "window" === t
                  ? s.matchMedia(`(min-width: ${a}px)`).matches && (r = n)
                  : a <= i.clientWidth && (r = n);
              }
              return r || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let { isLocked: e, params: t } = this,
                { slidesOffsetBefore: i } = t;
              if (i) {
                let e = this.slides.length - 1,
                  t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                this.isLocked = this.size > t;
              } else this.isLocked = 1 === this.snapGrid.length;
              !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                !0 === t.allowSlidePrev &&
                  (this.allowSlidePrev = !this.isLocked),
                e && e !== this.isLocked && (this.isEnd = !1),
                e !== this.isLocked &&
                  this.emit(this.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              let { classNames: e, params: t, rtl: i, el: r, device: s } = this,
                n = (function (e, t) {
                  let i = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((r) => {
                            e[r] && i.push(t + r);
                          })
                        : "string" == typeof e && i.push(t + e);
                    }),
                    i
                  );
                })(
                  [
                    "initialized",
                    t.direction,
                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: i },
                    { grid: t.grid && t.grid.rows > 1 },
                    {
                      "grid-column":
                        t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                    },
                    { android: s.android },
                    { ios: s.ios },
                    { "css-mode": t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { "watch-progress": t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...n), r.classList.add(...e), this.emitContainerClasses();
            },
            removeClasses: function () {
              let { el: e, classNames: t } = this;
              e &&
                "string" != typeof e &&
                (e.classList.remove(...t), this.emitContainerClasses());
            },
          },
        },
        Y = {};
      class q {
        constructor() {
          let e, t;
          for (var i = arguments.length, r = Array(i), s = 0; s < i; s++)
            r[s] = arguments[s];
          1 === r.length &&
          r[0].constructor &&
          "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
            ? (t = r[0])
            : ([e, t] = r),
            t || (t = {}),
            (t = v({}, t)),
            e && !t.el && (t.el = e);
          let n = c();
          if (
            t.el &&
            "string" == typeof t.el &&
            n.querySelectorAll(t.el).length > 1
          ) {
            let e = [];
            return (
              n.querySelectorAll(t.el).forEach((i) => {
                let r = v({}, t, { el: i });
                e.push(new q(r));
              }),
              e
            );
          }
          let l = this;
          (l.__swiper__ = !0),
            (l.support = M()),
            (l.device = C({ userAgent: t.userAgent })),
            (l.browser = P()),
            (l.eventsListeners = {}),
            (l.eventsAnyListeners = []),
            (l.modules = [...l.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              l.modules.push(...t.modules);
          let a = {};
          l.modules.forEach((e) => {
            var i;
            e({
              params: t,
              swiper: l,
              extendParams:
                ((i = t),
                function (e) {
                  void 0 === e && (e = {});
                  let t = Object.keys(e)[0],
                    r = e[t];
                  if (
                    "object" != typeof r ||
                    null === r ||
                    (!0 === i[t] && (i[t] = { enabled: !0 }),
                    "navigation" === t &&
                      i[t] &&
                      i[t].enabled &&
                      !i[t].prevEl &&
                      !i[t].nextEl &&
                      (i[t].auto = !0),
                    ["pagination", "scrollbar"].indexOf(t) >= 0 &&
                      i[t] &&
                      i[t].enabled &&
                      !i[t].el &&
                      (i[t].auto = !0),
                    !(t in i && "enabled" in r))
                  ) {
                    v(a, e);
                    return;
                  }
                  "object" != typeof i[t] ||
                    "enabled" in i[t] ||
                    (i[t].enabled = !0),
                    i[t] || (i[t] = { enabled: !1 }),
                    v(a, e);
                }),
              on: l.on.bind(l),
              once: l.once.bind(l),
              off: l.off.bind(l),
              emit: l.emit.bind(l),
            });
          });
          let o = v({}, W, a);
          return (
            (l.params = v({}, o, Y, t)),
            (l.originalParams = v({}, l.params)),
            (l.passedParams = v({}, t)),
            l.params &&
              l.params.on &&
              Object.keys(l.params.on).forEach((e) => {
                l.on(e, l.params.on[e]);
              }),
            l.params && l.params.onAny && l.onAny(l.params.onAny),
            Object.assign(l, {
              enabled: l.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === l.params.direction,
              isVertical: () => "vertical" === l.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return 8388608 * Math.trunc(this.translate / 8388608);
              },
              allowSlideNext: l.params.allowSlideNext,
              allowSlidePrev: l.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: l.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: l.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            l.emit("_swiper"),
            l.params.init && l.init(),
            l
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          let { slidesEl: t, params: i } = this,
            r = T(S(t, `.${i.slideClass}, swiper-slide`)[0]);
          return T(e) - r;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.find(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )
          );
        }
        recalcSlides() {
          let { slidesEl: e, params: t } = this;
          this.slides = S(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          this.enabled ||
            ((this.enabled = !0),
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"));
        }
        disable() {
          this.enabled &&
            ((this.enabled = !1),
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          let i = this.minTranslate(),
            r = (this.maxTranslate() - i) * e + i;
          this.translateTo(r, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        }
        emitContainerClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          let t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = [];
          e.slides.forEach((i) => {
            let r = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          let {
              params: i,
              slides: r,
              slidesGrid: s,
              slidesSizesGrid: n,
              size: l,
              activeIndex: a,
            } = this,
            o = 1;
          if ("number" == typeof i.slidesPerView) return i.slidesPerView;
          if (i.centeredSlides) {
            let e,
              t = r[a] ? Math.ceil(r[a].swiperSlideSize) : 0;
            for (let i = a + 1; i < r.length; i += 1)
              r[i] &&
                !e &&
                ((t += Math.ceil(r[i].swiperSlideSize)),
                (o += 1),
                t > l && (e = !0));
            for (let i = a - 1; i >= 0; i -= 1)
              r[i] &&
                !e &&
                ((t += r[i].swiperSlideSize), (o += 1), t > l && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < r.length; e += 1)
              (t ? s[e] + n[e] - s[a] < l : s[e] - s[a] < l) && (o += 1);
          else for (let e = a - 1; e >= 0; e -= 1) s[a] - s[e] < l && (o += 1);
          return o;
        }
        update() {
          let e;
          let t = this;
          if (!t || t.destroyed) return;
          let { snapGrid: i, params: r } = t;
          function s() {
            let e = Math.min(
              Math.max(
                t.rtlTranslate ? -1 * t.translate : t.translate,
                t.maxTranslate()
              ),
              t.minTranslate()
            );
            t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          if (
            (r.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete && O(t, e);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            r.freeMode && r.freeMode.enabled && !r.cssMode)
          )
            s(), r.autoHeight && t.updateAutoHeight();
          else {
            if (
              ("auto" === r.slidesPerView || r.slidesPerView > 1) &&
              t.isEnd &&
              !r.centeredSlides
            ) {
              let i =
                t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
              e = t.slideTo(i.length - 1, 0, !1, !0);
            } else e = t.slideTo(t.activeIndex, 0, !1, !0);
            e || s();
          }
          r.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
            t.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          let i = this.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.el.classList.remove(
                `${this.params.containerModifierClass}${i}`
              ),
              this.el.classList.add(
                `${this.params.containerModifierClass}${e}`
              ),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }
        changeLanguageDirection(e) {
          (!this.rtl || "rtl" !== e) &&
            (this.rtl || "ltr" !== e) &&
            ((this.rtl = "rtl" === e),
            (this.rtlTranslate =
              "horizontal" === this.params.direction && this.rtl),
            this.rtl
              ? (this.el.classList.add(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "rtl"))
              : (this.el.classList.remove(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "ltr")),
            this.update());
        }
        mount(e) {
          let t = this;
          if (t.mounted) return !0;
          let i = e || t.params.el;
          if (("string" == typeof i && (i = document.querySelector(i)), !i))
            return !1;
          (i.swiper = t),
            i.parentNode &&
              i.parentNode.host &&
              i.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          let r = () =>
              `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
            s =
              i && i.shadowRoot && i.shadowRoot.querySelector
                ? i.shadowRoot.querySelector(r())
                : S(i, r())[0];
          return (
            !s &&
              t.params.createElements &&
              ((s = y("div", t.params.wrapperClass)),
              i.append(s),
              S(i, `.${t.params.slideClass}`).forEach((e) => {
                s.append(e);
              })),
            Object.assign(t, {
              el: i,
              wrapperEl: s,
              slidesEl:
                t.isElement && !i.parentNode.host.slideSlots
                  ? i.parentNode.host
                  : s,
              hostEl: t.isElement ? i.parentNode.host : i,
              mounted: !0,
              rtl: "rtl" === i.dir.toLowerCase() || "rtl" === E(i, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === i.dir.toLowerCase() || "rtl" === E(i, "direction")),
              wrongRTL: "-webkit-box" === E(s, "display"),
            }),
            !0
          );
        }
        init(e) {
          let t = this;
          if (t.initialized || !1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(void 0, !0),
            t.attachEvents();
          let i = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach((e) => {
              e.complete
                ? O(t, e)
                : e.addEventListener("load", (e) => {
                    O(t, e.target);
                  });
            }),
            I(t),
            (t.initialized = !0),
            I(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          let i = this,
            { params: r, el: s, wrapperEl: n, slides: l } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              r.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                s && "string" != typeof s && s.removeAttribute("style"),
                n && n.removeAttribute("style"),
                l &&
                  l.length &&
                  l.forEach((e) => {
                    e.classList.remove(
                      r.slideVisibleClass,
                      r.slideFullyVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                (i.el && "string" != typeof i.el && (i.el.swiper = null),
                (function (e) {
                  Object.keys(e).forEach((t) => {
                    try {
                      e[t] = null;
                    } catch (e) {}
                    try {
                      delete e[t];
                    } catch (e) {}
                  });
                })(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          v(Y, e);
        }
        static get extendedDefaults() {
          return Y;
        }
        static get defaults() {
          return W;
        }
        static installModule(e) {
          q.prototype.__modules__ || (q.prototype.__modules__ = []);
          let t = q.prototype.__modules__;
          "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
          return (
            Array.isArray(e)
              ? e.forEach((e) => q.installModule(e))
              : q.installModule(e),
            q
          );
        }
      }
      Object.keys(X).forEach((e) => {
        Object.keys(X[e]).forEach((t) => {
          q.prototype[t] = X[e][t];
        });
      }),
        q.use([
          function (e) {
            let { swiper: t, on: i, emit: r } = e,
              s = p(),
              n = null,
              l = null,
              a = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (n = new ResizeObserver((e) => {
                    l = s.requestAnimationFrame(() => {
                      let { width: i, height: r } = t,
                        s = i,
                        n = r;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: i,
                          contentRect: r,
                          target: l,
                        } = e;
                        (l && l !== t.el) ||
                          ((s = r ? r.width : (i[0] || i).inlineSize),
                          (n = r ? r.height : (i[0] || i).blockSize));
                      }),
                        (s !== i || n !== r) && a();
                    });
                  })).observe(t.el);
              },
              d = () => {
                l && s.cancelAnimationFrame(l),
                  n && n.unobserve && t.el && (n.unobserve(t.el), (n = null));
              },
              c = () => {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            i("init", () => {
              if (t.params.resizeObserver && void 0 !== s.ResizeObserver) {
                o();
                return;
              }
              s.addEventListener("resize", a),
                s.addEventListener("orientationchange", c);
            }),
              i("destroy", () => {
                d(),
                  s.removeEventListener("resize", a),
                  s.removeEventListener("orientationchange", c);
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: r, emit: s } = e,
              n = [],
              l = p(),
              a = function (e, i) {
                void 0 === i && (i = {});
                let r = new (l.MutationObserver || l.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) {
                      s("observerUpdate", e[0]);
                      return;
                    }
                    let i = function () {
                      s("observerUpdate", e[0]);
                    };
                    l.requestAnimationFrame
                      ? l.requestAnimationFrame(i)
                      : l.setTimeout(i, 0);
                  }
                );
                r.observe(e, {
                  attributes: void 0 === i.attributes || i.attributes,
                  childList:
                    t.isElement || (void 0 === i.childList || i).childList,
                  characterData: void 0 === i.characterData || i.characterData,
                }),
                  n.push(r);
              };
            i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    let e = (function (e, t) {
                      let i = [],
                        r = e.parentElement;
                      for (; r; )
                        t ? r.matches(t) && i.push(r) : i.push(r),
                          (r = r.parentElement);
                      return i;
                    })(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) a(e[t]);
                  }
                  a(t.hostEl, { childList: t.params.observeSlideChildren }),
                    a(t.wrapperEl, { attributes: !1 });
                }
              }),
              r("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      let U = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function K(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function J(e, t) {
        let i = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > i.indexOf(e))
          .forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : K(t[i]) && K(e[i]) && Object.keys(t[i]).length > 0
              ? t[i].__swiper__
                ? (e[i] = t[i])
                : J(e[i], t[i])
              : (e[i] = t[i]);
          });
      }
      function Z(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            void 0 === e.navigation.nextEl &&
            void 0 === e.navigation.prevEl
        );
      }
      function Q(e) {
        return (
          void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
        );
      }
      function ee(e) {
        return (
          void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
        );
      }
      function et(e) {
        void 0 === e && (e = "");
        let t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          i = [];
        return (
          t.forEach((e) => {
            0 > i.indexOf(e) && i.push(e);
          }),
          i.join(" ")
        );
      }
      let ei = (e) => {
        e &&
          !e.destroyed &&
          e.params.virtual &&
          (!e.params.virtual || e.params.virtual.enabled) &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate());
      };
      function er() {
        return (er = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function es(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function en(e, t) {
        return "undefined" == typeof window
          ? (0, l.useEffect)(e, t)
          : (0, l.useLayoutEffect)(e, t);
      }
      let el = (0, l.createContext)(null),
        ea = (0, l.createContext)(null),
        eo = (0, l.forwardRef)(function (e, t) {
          var i;
          let {
              className: r,
              tag: s = "div",
              wrapperTag: n = "div",
              children: a,
              onSwiper: o,
              ...d
            } = void 0 === e ? {} : e,
            c = !1,
            [u, p] = (0, l.useState)("swiper"),
            [h, f] = (0, l.useState)(null),
            [m, v] = (0, l.useState)(!1),
            g = (0, l.useRef)(!1),
            w = (0, l.useRef)(null),
            S = (0, l.useRef)(null),
            b = (0, l.useRef)(null),
            y = (0, l.useRef)(null),
            E = (0, l.useRef)(null),
            T = (0, l.useRef)(null),
            x = (0, l.useRef)(null),
            M = (0, l.useRef)(null),
            {
              params: C,
              passedParams: P,
              rest: k,
              events: L,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              let i = { on: {} },
                r = {},
                s = {};
              J(i, W), (i._emitClasses = !0), (i.init = !1);
              let n = {},
                l = U.map((e) => e.replace(/_/, ""));
              return (
                Object.keys(Object.assign({}, e)).forEach((a) => {
                  void 0 !== e[a] &&
                    (l.indexOf(a) >= 0
                      ? K(e[a])
                        ? ((i[a] = {}),
                          (s[a] = {}),
                          J(i[a], e[a]),
                          J(s[a], e[a]))
                        : ((i[a] = e[a]), (s[a] = e[a]))
                      : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a]
                      ? t
                        ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                        : (i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                      : (n[a] = e[a]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e];
                }),
                { params: i, passedParams: s, rest: n, events: r }
              );
            })(d),
            { slides: O, slots: _ } = (function (e) {
              let t = [],
                i = {
                  "container-start": [],
                  "container-end": [],
                  "wrapper-start": [],
                  "wrapper-end": [],
                };
              return (
                l.Children.toArray(e).forEach((e) => {
                  if (es(e)) t.push(e);
                  else if (e.props && e.props.slot && i[e.props.slot])
                    i[e.props.slot].push(e);
                  else if (e.props && e.props.children) {
                    let r = (function e(t) {
                      let i = [];
                      return (
                        l.Children.toArray(t).forEach((t) => {
                          es(t)
                            ? i.push(t)
                            : t.props &&
                              t.props.children &&
                              e(t.props.children).forEach((e) => i.push(e));
                        }),
                        i
                      );
                    })(e.props.children);
                    r.length > 0
                      ? r.forEach((e) => t.push(e))
                      : i["container-end"].push(e);
                  } else i["container-end"].push(e);
                }),
                { slides: t, slots: i }
              );
            })(a),
            I = () => {
              v(!m);
            };
          Object.assign(C.on, {
            _containerClasses(e, t) {
              p(t);
            },
          });
          let z = () => {
            Object.assign(C.on, L), (c = !0);
            let e = { ...C };
            if (
              (delete e.wrapperClass,
              (S.current = new q(e)),
              S.current.virtual && S.current.params.virtual.enabled)
            ) {
              S.current.virtual.slides = O;
              let e = {
                cache: !1,
                slides: O,
                renderExternal: f,
                renderExternalUpdate: !1,
              };
              J(S.current.params.virtual, e),
                J(S.current.originalParams.virtual, e);
            }
          };
          w.current || z(), S.current && S.current.on("_beforeBreakpoint", I);
          let A = () => {
              !c &&
                L &&
                S.current &&
                Object.keys(L).forEach((e) => {
                  S.current.on(e, L[e]);
                });
            },
            D = () => {
              L &&
                S.current &&
                Object.keys(L).forEach((e) => {
                  S.current.off(e, L[e]);
                });
            };
          return (
            (0, l.useEffect)(() => () => {
              S.current && S.current.off("_beforeBreakpoint", I);
            }),
            (0, l.useEffect)(() => {
              !g.current &&
                S.current &&
                (S.current.emitSlidesClasses(), (g.current = !0));
            }),
            en(() => {
              if ((t && (t.current = w.current), w.current))
                return (
                  S.current.destroyed && z(),
                  (function (e, t) {
                    let {
                      el: i,
                      nextEl: r,
                      prevEl: s,
                      paginationEl: n,
                      scrollbarEl: l,
                      swiper: a,
                    } = e;
                    Z(t) &&
                      r &&
                      s &&
                      ((a.params.navigation.nextEl = r),
                      (a.originalParams.navigation.nextEl = r),
                      (a.params.navigation.prevEl = s),
                      (a.originalParams.navigation.prevEl = s)),
                      Q(t) &&
                        n &&
                        ((a.params.pagination.el = n),
                        (a.originalParams.pagination.el = n)),
                      ee(t) &&
                        l &&
                        ((a.params.scrollbar.el = l),
                        (a.originalParams.scrollbar.el = l)),
                      a.init(i);
                  })(
                    {
                      el: w.current,
                      nextEl: E.current,
                      prevEl: T.current,
                      paginationEl: x.current,
                      scrollbarEl: M.current,
                      swiper: S.current,
                    },
                    C
                  ),
                  o && !S.current.destroyed && o(S.current),
                  () => {
                    S.current &&
                      !S.current.destroyed &&
                      S.current.destroy(!0, !1);
                  }
                );
            }, []),
            en(() => {
              A();
              let e = (function (e, t, i, r, s) {
                let n = [];
                if (!t) return n;
                let l = (e) => {
                  0 > n.indexOf(e) && n.push(e);
                };
                if (i && r) {
                  let e = r.map(s),
                    t = i.map(s);
                  e.join("") !== t.join("") && l("children"),
                    r.length !== i.length && l("children");
                }
                return (
                  U.filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((i) => {
                      if (i in e && i in t) {
                        if (K(e[i]) && K(t[i])) {
                          let r = Object.keys(e[i]),
                            s = Object.keys(t[i]);
                          r.length !== s.length
                            ? l(i)
                            : (r.forEach((r) => {
                                e[i][r] !== t[i][r] && l(i);
                              }),
                              s.forEach((r) => {
                                e[i][r] !== t[i][r] && l(i);
                              }));
                        } else e[i] !== t[i] && l(i);
                      }
                    }),
                  n
                );
              })(P, b.current, O, y.current, (e) => e.key);
              return (
                (b.current = P),
                (y.current = O),
                e.length &&
                  S.current &&
                  !S.current.destroyed &&
                  (function (e) {
                    let t,
                      i,
                      r,
                      s,
                      n,
                      l,
                      a,
                      o,
                      {
                        swiper: d,
                        slides: c,
                        passedParams: u,
                        changedParams: p,
                        nextEl: h,
                        prevEl: f,
                        scrollbarEl: m,
                        paginationEl: v,
                      } = e,
                      g = p.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: w,
                        pagination: S,
                        navigation: b,
                        scrollbar: y,
                        virtual: E,
                        thumbs: T,
                      } = d;
                    p.includes("thumbs") &&
                      u.thumbs &&
                      u.thumbs.swiper &&
                      !u.thumbs.swiper.destroyed &&
                      w.thumbs &&
                      (!w.thumbs.swiper || w.thumbs.swiper.destroyed) &&
                      (t = !0),
                      p.includes("controller") &&
                        u.controller &&
                        u.controller.control &&
                        w.controller &&
                        !w.controller.control &&
                        (i = !0),
                      p.includes("pagination") &&
                        u.pagination &&
                        (u.pagination.el || v) &&
                        (w.pagination || !1 === w.pagination) &&
                        S &&
                        !S.el &&
                        (r = !0),
                      p.includes("scrollbar") &&
                        u.scrollbar &&
                        (u.scrollbar.el || m) &&
                        (w.scrollbar || !1 === w.scrollbar) &&
                        y &&
                        !y.el &&
                        (s = !0),
                      p.includes("navigation") &&
                        u.navigation &&
                        (u.navigation.prevEl || f) &&
                        (u.navigation.nextEl || h) &&
                        (w.navigation || !1 === w.navigation) &&
                        b &&
                        !b.prevEl &&
                        !b.nextEl &&
                        (n = !0);
                    let x = (e) => {
                      d[e] &&
                        (d[e].destroy(),
                        "navigation" === e
                          ? (d.isElement &&
                              (d[e].prevEl.remove(), d[e].nextEl.remove()),
                            (w[e].prevEl = void 0),
                            (w[e].nextEl = void 0),
                            (d[e].prevEl = void 0),
                            (d[e].nextEl = void 0))
                          : (d.isElement && d[e].el.remove(),
                            (w[e].el = void 0),
                            (d[e].el = void 0)));
                    };
                    p.includes("loop") &&
                      d.isElement &&
                      (w.loop && !u.loop
                        ? (l = !0)
                        : !w.loop && u.loop
                        ? (a = !0)
                        : (o = !0)),
                      g.forEach((e) => {
                        if (K(w[e]) && K(u[e]))
                          Object.assign(w[e], u[e]),
                            ("navigation" === e ||
                              "pagination" === e ||
                              "scrollbar" === e) &&
                              "enabled" in u[e] &&
                              !u[e].enabled &&
                              x(e);
                        else {
                          let t = u[e];
                          (!0 === t || !1 === t) &&
                          ("navigation" === e ||
                            "pagination" === e ||
                            "scrollbar" === e)
                            ? !1 === t && x(e)
                            : (w[e] = u[e]);
                        }
                      }),
                      g.includes("controller") &&
                        !i &&
                        d.controller &&
                        d.controller.control &&
                        w.controller &&
                        w.controller.control &&
                        (d.controller.control = w.controller.control),
                      p.includes("children") && c && E && w.virtual.enabled
                        ? ((E.slides = c), E.update(!0))
                        : p.includes("virtual") &&
                          E &&
                          w.virtual.enabled &&
                          (c && (E.slides = c), E.update(!0)),
                      p.includes("children") && c && w.loop && (o = !0),
                      t && T.init() && T.update(!0),
                      i && (d.controller.control = w.controller.control),
                      r &&
                        (d.isElement &&
                          (!v || "string" == typeof v) &&
                          ((v = document.createElement("div")).classList.add(
                            "swiper-pagination"
                          ),
                          v.part.add("pagination"),
                          d.el.appendChild(v)),
                        v && (w.pagination.el = v),
                        S.init(),
                        S.render(),
                        S.update()),
                      s &&
                        (d.isElement &&
                          (!m || "string" == typeof m) &&
                          ((m = document.createElement("div")).classList.add(
                            "swiper-scrollbar"
                          ),
                          m.part.add("scrollbar"),
                          d.el.appendChild(m)),
                        m && (w.scrollbar.el = m),
                        y.init(),
                        y.updateSize(),
                        y.setTranslate()),
                      n &&
                        (d.isElement &&
                          ((h && "string" != typeof h) ||
                            ((h = document.createElement("div")).classList.add(
                              "swiper-button-next"
                            ),
                            (h.innerHTML = d.hostEl.constructor.nextButtonSvg),
                            h.part.add("button-next"),
                            d.el.appendChild(h)),
                          (f && "string" != typeof f) ||
                            ((f = document.createElement("div")).classList.add(
                              "swiper-button-prev"
                            ),
                            (f.innerHTML = d.hostEl.constructor.prevButtonSvg),
                            f.part.add("button-prev"),
                            d.el.appendChild(f))),
                        h && (w.navigation.nextEl = h),
                        f && (w.navigation.prevEl = f),
                        b.init(),
                        b.update()),
                      p.includes("allowSlideNext") &&
                        (d.allowSlideNext = u.allowSlideNext),
                      p.includes("allowSlidePrev") &&
                        (d.allowSlidePrev = u.allowSlidePrev),
                      p.includes("direction") &&
                        d.changeDirection(u.direction, !1),
                      (l || o) && d.loopDestroy(),
                      (a || o) && d.loopCreate(),
                      d.update();
                  })({
                    swiper: S.current,
                    slides: O,
                    passedParams: P,
                    changedParams: e,
                    nextEl: E.current,
                    prevEl: T.current,
                    scrollbarEl: M.current,
                    paginationEl: x.current,
                  }),
                () => {
                  D();
                }
              );
            }),
            en(() => {
              ei(S.current);
            }, [h]),
            l.createElement(
              s,
              er({ ref: w, className: et(`${u}${r ? ` ${r}` : ""}`) }, k),
              l.createElement(
                ea.Provider,
                { value: S.current },
                _["container-start"],
                l.createElement(
                  n,
                  {
                    className: (void 0 === (i = C.wrapperClass) && (i = ""), i)
                      ? i.includes("swiper-wrapper")
                        ? i
                        : `swiper-wrapper ${i}`
                      : "swiper-wrapper",
                  },
                  _["wrapper-start"],
                  C.virtual
                    ? (function (e, t, i) {
                        if (!i) return null;
                        let r = (e) => {
                            let i = e;
                            return (
                              e < 0
                                ? (i = t.length + e)
                                : i >= t.length && (i -= t.length),
                              i
                            );
                          },
                          s = e.isHorizontal()
                            ? {
                                [e.rtlTranslate
                                  ? "right"
                                  : "left"]: `${i.offset}px`,
                              }
                            : { top: `${i.offset}px` },
                          { from: n, to: a } = i,
                          o = e.params.loop ? -t.length : 0,
                          d = e.params.loop ? 2 * t.length : t.length,
                          c = [];
                        for (let e = o; e < d; e += 1)
                          e >= n && e <= a && c.push(t[r(e)]);
                        return c.map((t, i) =>
                          l.cloneElement(t, {
                            swiper: e,
                            style: s,
                            key: t.props.virtualIndex || t.key || `slide-${i}`,
                          })
                        );
                      })(S.current, O, h)
                    : O.map((e, t) =>
                        l.cloneElement(e, {
                          swiper: S.current,
                          swiperSlideIndex: t,
                        })
                      ),
                  _["wrapper-end"]
                ),
                Z(C) &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement("div", {
                      ref: T,
                      className: "swiper-button-prev",
                    }),
                    l.createElement("div", {
                      ref: E,
                      className: "swiper-button-next",
                    })
                  ),
                ee(C) &&
                  l.createElement("div", {
                    ref: M,
                    className: "swiper-scrollbar",
                  }),
                Q(C) &&
                  l.createElement("div", {
                    ref: x,
                    className: "swiper-pagination",
                  }),
                _["container-end"]
              )
            )
          );
        });
      eo.displayName = "Swiper";
      let ed = (0, l.forwardRef)(function (e, t) {
        let {
            tag: i = "div",
            children: r,
            className: s = "",
            swiper: n,
            zoom: a,
            lazy: o,
            virtualIndex: d,
            swiperSlideIndex: c,
            ...u
          } = void 0 === e ? {} : e,
          p = (0, l.useRef)(null),
          [h, f] = (0, l.useState)("swiper-slide"),
          [m, v] = (0, l.useState)(!1);
        function g(e, t, i) {
          t === p.current && f(i);
        }
        en(() => {
          if (
            (void 0 !== c && (p.current.swiperSlideIndex = c),
            t && (t.current = p.current),
            p.current && n)
          ) {
            if (n.destroyed) {
              "swiper-slide" !== h && f("swiper-slide");
              return;
            }
            return (
              n.on("_slideClass", g),
              () => {
                n && n.off("_slideClass", g);
              }
            );
          }
        }),
          en(() => {
            n && p.current && !n.destroyed && f(n.getSlideClasses(p.current));
          }, [n]);
        let w = {
            isActive: h.indexOf("swiper-slide-active") >= 0,
            isVisible: h.indexOf("swiper-slide-visible") >= 0,
            isPrev: h.indexOf("swiper-slide-prev") >= 0,
            isNext: h.indexOf("swiper-slide-next") >= 0,
          },
          S = () => ("function" == typeof r ? r(w) : r);
        return l.createElement(
          i,
          er(
            {
              ref: p,
              className: et(`${h}${s ? ` ${s}` : ""}`),
              "data-swiper-slide-index": d,
              onLoad: () => {
                v(!0);
              },
            },
            u
          ),
          a &&
            l.createElement(
              el.Provider,
              { value: w },
              l.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" == typeof a ? a : void 0,
                },
                S(),
                o &&
                  !m &&
                  l.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !a &&
            l.createElement(
              el.Provider,
              { value: w },
              S(),
              o &&
                !m &&
                l.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      ed.displayName = "SwiperSlide";
    },
    25675: function (e, t, i) {
      "use strict";
      i.d(t, {
        _: function () {
          return d;
        },
      });
      var r = i(45487),
        s = i(14330),
        n = i(76432);
      function l() {
        let e = !1,
          t = new Set(),
          i = {
            subscribe: (e) => (t.add(e), () => void t.delete(e)),
            start(i, s) {
              (0, r.k)(
                e,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
              );
              let l = [];
              return (
                t.forEach((e) => {
                  l.push((0, n.d)(e, i, { transitionOverride: s }));
                }),
                Promise.all(l)
              );
            },
            set: (i) => (
              (0, r.k)(
                e,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
              ),
              t.forEach((e) => {
                (0, s.gg)(e, i);
              })
            ),
            stop() {
              t.forEach((e) => {
                !(function (e) {
                  e.values.forEach((e) => e.stop());
                })(e);
              });
            },
            mount: () => (
              (e = !0),
              () => {
                (e = !1), i.stop();
              }
            ),
          };
        return i;
      }
      var a = i(96681),
        o = i(58868);
      let d = function () {
        let e = (0, a.h)(l);
        return (0, o.L)(e.mount, []), e;
      };
    },
    51526: function (e, t, i) {
      "use strict";
      i.d(t, {
        M: function () {
          return v;
        },
      });
      var r = i(2784),
        s = i(58868);
      function n() {
        let e = (0, r.useRef)(!1);
        return (
          (0, s.L)(
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
      var l = i(2074),
        a = i(240),
        o = i(96681);
      class d extends r.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c({ children: e, isPresent: t }) {
        let i = (0, r.useId)(),
          s = (0, r.useRef)(null),
          n = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: e, height: r, top: l, left: a } = n.current;
            if (t || !s.current || !e || !r) return;
            s.current.dataset.motionPopId = i;
            let o = document.createElement("style");
            return (
              document.head.appendChild(o),
              o.sheet &&
                o.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${l}px !important;
            left: ${a}px !important;
          }
        `),
              () => {
                document.head.removeChild(o);
              }
            );
          }, [t]),
          r.createElement(
            d,
            { isPresent: t, childRef: s, sizeRef: n },
            r.cloneElement(e, { ref: s })
          )
        );
      }
      let u = ({
        children: e,
        initial: t,
        isPresent: i,
        onExitComplete: s,
        custom: n,
        presenceAffectsLayout: l,
        mode: d,
      }) => {
        let u = (0, o.h)(p),
          h = (0, r.useId)(),
          f = (0, r.useMemo)(
            () => ({
              id: h,
              initial: t,
              isPresent: i,
              custom: n,
              onExitComplete: (e) => {
                for (let t of (u.set(e, !0), u.values())) if (!t) return;
                s && s();
              },
              register: (e) => (u.set(e, !1), () => u.delete(e)),
            }),
            l ? void 0 : [i]
          );
        return (
          (0, r.useMemo)(() => {
            u.forEach((e, t) => u.set(t, !1));
          }, [i]),
          r.useEffect(() => {
            i || u.size || !s || s();
          }, [i]),
          "popLayout" === d && (e = r.createElement(c, { isPresent: i }, e)),
          r.createElement(a.O.Provider, { value: f }, e)
        );
      };
      function p() {
        return new Map();
      }
      var h = i(25364),
        f = i(45487);
      let m = (e) => e.key || "",
        v = ({
          children: e,
          custom: t,
          initial: i = !0,
          onExitComplete: a,
          exitBeforeEnter: o,
          presenceAffectsLayout: d = !0,
          mode: c = "sync",
        }) => {
          var p;
          (0, f.k)(!o, "Replace exitBeforeEnter with mode='wait'");
          let v =
              (0, r.useContext)(h.p).forceRender ||
              (function () {
                let e = n(),
                  [t, i] = (0, r.useState)(0),
                  s = (0, r.useCallback)(() => {
                    e.current && i(t + 1);
                  }, [t]);
                return [(0, r.useCallback)(() => l.Wi.postRender(s), [s]), t];
              })()[0],
            g = n(),
            w = (function (e) {
              let t = [];
              return (
                r.Children.forEach(e, (e) => {
                  (0, r.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            S = w,
            b = (0, r.useRef)(new Map()).current,
            y = (0, r.useRef)(S),
            E = (0, r.useRef)(new Map()).current,
            T = (0, r.useRef)(!0);
          if (
            ((0, s.L)(() => {
              (T.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let i = m(e);
                    t.set(i, e);
                  });
                })(w, E),
                (y.current = S);
            }),
            (p = () => {
              (T.current = !0), E.clear(), b.clear();
            }),
            (0, r.useEffect)(() => () => p(), []),
            T.current)
          )
            return r.createElement(
              r.Fragment,
              null,
              S.map((e) =>
                r.createElement(
                  u,
                  {
                    key: m(e),
                    isPresent: !0,
                    initial: !!i && void 0,
                    presenceAffectsLayout: d,
                    mode: c,
                  },
                  e
                )
              )
            );
          S = [...S];
          let x = y.current.map(m),
            M = w.map(m),
            C = x.length;
          for (let e = 0; e < C; e++) {
            let t = x[e];
            -1 !== M.indexOf(t) || b.has(t) || b.set(t, void 0);
          }
          return (
            "wait" === c && b.size && (S = []),
            b.forEach((e, i) => {
              if (-1 !== M.indexOf(i)) return;
              let s = E.get(i);
              if (!s) return;
              let n = x.indexOf(i),
                l = e;
              l ||
                ((l = r.createElement(
                  u,
                  {
                    key: m(s),
                    isPresent: !1,
                    onExitComplete: () => {
                      b.delete(i);
                      let e = Array.from(E.keys()).filter(
                        (e) => !M.includes(e)
                      );
                      if (
                        (e.forEach((e) => E.delete(e)),
                        (y.current = w.filter((t) => {
                          let r = m(t);
                          return r === i || e.includes(r);
                        })),
                        !b.size)
                      ) {
                        if (!1 === g.current) return;
                        v(), a && a();
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: d,
                    mode: c,
                  },
                  s
                )),
                b.set(i, l)),
                S.splice(n, 0, l);
            }),
            (S = S.map((e) => {
              let t = e.key;
              return b.has(t)
                ? e
                : r.createElement(
                    u,
                    {
                      key: m(e),
                      isPresent: !0,
                      presenceAffectsLayout: d,
                      mode: c,
                    },
                    e
                  );
            })),
            r.createElement(
              r.Fragment,
              null,
              b.size ? S : S.map((e) => (0, r.cloneElement)(e))
            )
          );
        };
    },
    37301: function (e, t, i) {
      "use strict";
      i.d(t, {
        I: function () {
          return s;
        },
      });
      var r = i(45487);
      function s(e, t, i) {
        var s;
        if ("string" == typeof e) {
          let n = document;
          t &&
            ((0, r.k)(!!t.current, "Scope provided, but no element detected."),
            (n = t.current)),
            i
              ? ((null !== (s = i[e]) && void 0 !== s) ||
                  (i[e] = n.querySelectorAll(e)),
                (e = i[e]))
              : (e = n.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
    },
    16893: function (e, t, i) {
      "use strict";
      i.d(t, {
        Y: function () {
          return l;
        },
      });
      var r = i(2784),
        s = i(37301);
      let n = { some: 0, all: 1 };
      function l(e, { root: t, margin: i, amount: l, once: a = !1 } = {}) {
        let [o, d] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (!e.current || (a && o)) return;
            let r = { root: (t && t.current) || void 0, margin: i, amount: l };
            return (function (
              e,
              t,
              { root: i, margin: r, amount: l = "some" } = {}
            ) {
              let a = (0, s.I)(e),
                o = new WeakMap(),
                d = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let i = o.get(e.target);
                      if (!!i !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let i = t(e);
                          "function" == typeof i
                            ? o.set(e.target, i)
                            : d.unobserve(e.target);
                        } else i && (i(e), o.delete(e.target));
                      }
                    });
                  },
                  {
                    root: i,
                    rootMargin: r,
                    threshold: "number" == typeof l ? l : n[l],
                  }
                );
              return a.forEach((e) => d.observe(e)), () => d.disconnect();
            })(e.current, () => (d(!0), a ? void 0 : () => d(!1)), r);
          }, [t, e, i, a, l]),
          o
        );
      }
    },
    14025: function (e, t, i) {
      "use strict";
      i.d(t, {
        W: function () {
          return s;
        },
      });
      var r = i(2784);
      function s(e, t, i) {
        (0, r.useInsertionEffect)(() => e.on(t, i), [e, t, i]);
      }
    },
    4960: function (e, t, i) {
      "use strict";
      i.d(t, {
        c: function () {
          return a;
        },
      });
      var r = i(2784),
        s = i(33234),
        n = i(16014),
        l = i(96681);
      function a(e) {
        let t = (0, l.h)(() => (0, s.BX)(e)),
          { isStatic: i } = (0, r.useContext)(n._);
        if (i) {
          let [, i] = (0, r.useState)(e);
          (0, r.useEffect)(() => t.on("change", i), []);
        }
        return t;
      }
    },
    79645: function (e, t, i) {
      "use strict";
      let r, s;
      i.d(t, {
        v: function () {
          return D;
        },
      });
      var n = i(33234),
        l = i(96681),
        a = i(2784),
        o = i(45487),
        d = i(37301);
      let c = new WeakMap();
      function u({ target: e, contentRect: t, borderBoxSize: i }) {
        var r;
        null === (r = c.get(e)) ||
          void 0 === r ||
          r.forEach((r) => {
            r({
              target: e,
              contentSize: t,
              get size() {
                return (function (e, t) {
                  if (t) {
                    let { inlineSize: e, blockSize: i } = t[0];
                    return { width: e, height: i };
                  }
                  return e instanceof SVGElement && "getBBox" in e
                    ? e.getBBox()
                    : { width: e.offsetWidth, height: e.offsetHeight };
                })(e, i);
              },
            });
          });
      }
      function p(e) {
        e.forEach(u);
      }
      let h = new Set();
      var f = i(23967),
        m = i(3038);
      let v = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        g = () => ({ time: 0, x: v(), y: v() }),
        w = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function S(e, t, i, r) {
        let s = i[t],
          { length: n, position: l } = w[t],
          a = s.current,
          o = i.time;
        (s.current = e["scroll" + l]),
          (s.scrollLength = e["scroll" + n] - e["client" + n]),
          (s.offset.length = 0),
          (s.offset[0] = 0),
          (s.offset[1] = s.scrollLength),
          (s.progress = (0, f.Y)(0, s.scrollLength, s.current));
        let d = r - o;
        s.velocity = d > 50 ? 0 : (0, m.R)(s.current - a, d);
      }
      let b = {
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        y = { start: 0, center: 0.5, end: 1 };
      function E(e, t, i = 0) {
        let r = 0;
        if ((void 0 !== y[e] && (e = y[e]), "string" == typeof e)) {
          let t = parseFloat(e);
          e.endsWith("px")
            ? (r = t)
            : e.endsWith("%")
            ? (e = t / 100)
            : e.endsWith("vw")
            ? (r = (t / 100) * document.documentElement.clientWidth)
            : e.endsWith("vh")
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
        }
        return "number" == typeof e && (r = t * e), i + r;
      }
      let T = [0, 0];
      var x = i(64606),
        M = i(30533);
      let C = { x: 0, y: 0 };
      var P = i(2074);
      let k = new WeakMap(),
        L = new WeakMap(),
        O = new WeakMap(),
        _ = (e) => (e === document.documentElement ? window : e);
      var I = i(58868);
      function z(e, t) {
        (0, o.K)(
          !!(!t || t.current),
          `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let A = () => ({
        scrollX: (0, n.BX)(0),
        scrollY: (0, n.BX)(0),
        scrollXProgress: (0, n.BX)(0),
        scrollYProgress: (0, n.BX)(0),
      });
      function D({ container: e, target: t, layoutEffect: i = !0, ...n } = {}) {
        let o = (0, l.h)(A);
        return (
          (i ? I.L : a.useEffect)(
            () => (
              z("target", t),
              z("container", e),
              (function (
                e,
                { container: t = document.documentElement, ...i } = {}
              ) {
                let n = O.get(t);
                n || ((n = new Set()), O.set(t, n));
                let l = (function (e, t, i, r = {}) {
                  return {
                    measure: () =>
                      (function (e, t = e, i) {
                        if (
                          ((i.x.targetOffset = 0),
                          (i.y.targetOffset = 0),
                          t !== e)
                        ) {
                          let r = t;
                          for (; r && r !== e; )
                            (i.x.targetOffset += r.offsetLeft),
                              (i.y.targetOffset += r.offsetTop),
                              (r = r.offsetParent);
                        }
                        (i.x.targetLength =
                          t === e ? t.scrollWidth : t.clientWidth),
                          (i.y.targetLength =
                            t === e ? t.scrollHeight : t.clientHeight),
                          (i.x.containerLength = e.clientWidth),
                          (i.y.containerLength = e.clientHeight);
                      })(e, r.target, i),
                    update: (t) => {
                      S(e, "x", i, t),
                        S(e, "y", i, t),
                        (i.time = t),
                        (r.offset || r.target) &&
                          (function (e, t, i) {
                            let { offset: r = b.All } = i,
                              { target: s = e, axis: n = "y" } = i,
                              l = "y" === n ? "height" : "width",
                              a =
                                s !== e
                                  ? (function (e, t) {
                                      let i = { x: 0, y: 0 },
                                        r = e;
                                      for (; r && r !== t; )
                                        if (r instanceof HTMLElement)
                                          (i.x += r.offsetLeft),
                                            (i.y += r.offsetTop),
                                            (r = r.offsetParent);
                                        else if ("svg" === r.tagName) {
                                          let e = r.getBoundingClientRect(),
                                            t = (r =
                                              r.parentElement).getBoundingClientRect();
                                          (i.x += e.left - t.left),
                                            (i.y += e.top - t.top);
                                        } else if (
                                          r instanceof SVGGraphicsElement
                                        ) {
                                          let { x: e, y: t } = r.getBBox();
                                          (i.x += e), (i.y += t);
                                          let s = null,
                                            n = r.parentNode;
                                          for (; !s; )
                                            "svg" === n.tagName && (s = n),
                                              (n = r.parentNode);
                                          r = s;
                                        } else break;
                                      return i;
                                    })(s, e)
                                  : C,
                              o =
                                s === e
                                  ? {
                                      width: e.scrollWidth,
                                      height: e.scrollHeight,
                                    }
                                  : "getBBox" in s && "svg" !== s.tagName
                                  ? s.getBBox()
                                  : {
                                      width: s.clientWidth,
                                      height: s.clientHeight,
                                    },
                              d = {
                                width: e.clientWidth,
                                height: e.clientHeight,
                              };
                            t[n].offset.length = 0;
                            let c = !t[n].interpolate,
                              u = r.length;
                            for (let e = 0; e < u; e++) {
                              let i = (function (e, t, i, r) {
                                let s = Array.isArray(e) ? e : T,
                                  n = 0;
                                return (
                                  "number" == typeof e
                                    ? (s = [e, e])
                                    : "string" == typeof e &&
                                      (s = (e = e.trim()).includes(" ")
                                        ? e.split(" ")
                                        : [e, y[e] ? e : "0"]),
                                  E(s[0], i, r) - E(s[1], t)
                                );
                              })(r[e], d[l], o[l], a[n]);
                              c ||
                                i === t[n].interpolatorOffsets[e] ||
                                (c = !0),
                                (t[n].offset[e] = i);
                            }
                            c &&
                              ((t[n].interpolate = (0, x.s)(
                                t[n].offset,
                                (0, M.Y)(r)
                              )),
                              (t[n].interpolatorOffsets = [...t[n].offset])),
                              (t[n].progress = t[n].interpolate(t[n].current));
                          })(e, i, r);
                    },
                    notify: () => t(i),
                  };
                })(t, e, g(), i);
                if ((n.add(l), !k.has(t))) {
                  let e = () => {
                      for (let e of n) e.measure();
                    },
                    i = () => {
                      for (let e of n) e.update(P.frameData.timestamp);
                    },
                    l = () => {
                      for (let e of n) e.notify();
                    },
                    a = () => {
                      P.Wi.read(e, !1, !0),
                        P.Wi.read(i, !1, !0),
                        P.Wi.update(l, !1, !0);
                    };
                  k.set(t, a);
                  let o = _(t);
                  window.addEventListener("resize", a, { passive: !0 }),
                    t !== document.documentElement &&
                      L.set(
                        t,
                        "function" == typeof t
                          ? (h.add(t),
                            s ||
                              ((s = () => {
                                let e = {
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                  },
                                  t = {
                                    target: window,
                                    size: e,
                                    contentSize: e,
                                  };
                                h.forEach((e) => e(t));
                              }),
                              window.addEventListener("resize", s)),
                            () => {
                              h.delete(t), !h.size && s && (s = void 0);
                            })
                          : (function (e, t) {
                              r ||
                                "undefined" == typeof ResizeObserver ||
                                (r = new ResizeObserver(p));
                              let i = (0, d.I)(e);
                              return (
                                i.forEach((e) => {
                                  let i = c.get(e);
                                  i || ((i = new Set()), c.set(e, i)),
                                    i.add(t),
                                    null == r || r.observe(e);
                                }),
                                () => {
                                  i.forEach((e) => {
                                    let i = c.get(e);
                                    null == i || i.delete(t),
                                      (null == i ? void 0 : i.size) ||
                                        null == r ||
                                        r.unobserve(e);
                                  });
                                }
                              );
                            })(t, a)
                      ),
                    o.addEventListener("scroll", a, { passive: !0 });
                }
                let a = k.get(t);
                return (
                  P.Wi.read(a, !1, !0),
                  () => {
                    var e;
                    (0, P.Pn)(a);
                    let i = O.get(t);
                    if (!i || (i.delete(l), i.size)) return;
                    let r = k.get(t);
                    k.delete(t),
                      r &&
                        (_(t).removeEventListener("scroll", r),
                        null === (e = L.get(t)) || void 0 === e || e(),
                        window.removeEventListener("resize", r));
                  }
                );
              })(
                ({ x: e, y: t }) => {
                  o.scrollX.set(e.current),
                    o.scrollXProgress.set(e.progress),
                    o.scrollY.set(t.current),
                    o.scrollYProgress.set(t.progress);
                },
                {
                  ...n,
                  container: (null == e ? void 0 : e.current) || void 0,
                  target: (null == t ? void 0 : t.current) || void 0,
                }
              )
            ),
            [e, t, JSON.stringify(n.offset)]
          ),
          o
        );
      }
    },
    4002: function (e, t, i) {
      "use strict";
      i.d(t, {
        q: function () {
          return u;
        },
      });
      var r = i(2784),
        s = i(40406),
        n = i(4960),
        l = i(16014),
        a = i(58868),
        o = i(40072),
        d = i(86917),
        c = i(2074);
      function u(e, t = {}) {
        let { isStatic: i } = (0, r.useContext)(l._),
          u = (0, r.useRef)(null),
          p = (0, n.c)((0, s.i)(e) ? e.get() : e),
          h = () => {
            u.current && u.current.stop();
          };
        return (
          (0, r.useInsertionEffect)(
            () =>
              p.attach((e, r) => {
                if (i) return r(e);
                if (
                  (h(),
                  (u.current = (0, o.y)({
                    keyframes: [p.get(), e],
                    velocity: p.getVelocity(),
                    type: "spring",
                    restDelta: 0.001,
                    restSpeed: 0.01,
                    ...t,
                    onUpdate: r,
                  })),
                  !c.frameData.isProcessing)
                ) {
                  let e = performance.now() - c.frameData.timestamp;
                  e < 30 && (u.current.time = (0, d.X)(e));
                }
                return p.get();
              }, h),
            [JSON.stringify(t)]
          ),
          (0, a.L)(() => {
            if ((0, s.i)(e)) return e.on("change", (e) => p.set(parseFloat(e)));
          }, [p]),
          p
        );
      }
    },
    48828: function (e, t, i) {
      "use strict";
      i.d(t, {
        H: function () {
          return p;
        },
      });
      var r = i(64606);
      let s = (e) => e && "object" == typeof e && e.mix,
        n = (e) => (s(e) ? e.mix : void 0);
      var l = i(4960),
        a = i(58868),
        o = i(2074);
      function d(e, t) {
        let i = (0, l.c)(t()),
          r = () => i.set(t());
        return (
          r(),
          (0, a.L)(() => {
            let t = () => o.Wi.update(r, !1, !0),
              i = e.map((e) => e.on("change", t));
            return () => {
              i.forEach((e) => e()), (0, o.Pn)(r);
            };
          }),
          i
        );
      }
      var c = i(96681),
        u = i(33234);
      function p(e, t, i, s) {
        if ("function" == typeof e)
          return (function (e) {
            (u.S1.current = []), e();
            let t = d(u.S1.current, e);
            return (u.S1.current = void 0), t;
          })(e);
        let l =
          "function" == typeof t
            ? t
            : (function (...e) {
                let t = !Array.isArray(e[0]),
                  i = t ? 0 : -1,
                  s = e[0 + i],
                  l = e[1 + i],
                  a = e[2 + i],
                  o = e[3 + i],
                  d = (0, r.s)(l, a, { mixer: n(a[0]), ...o });
                return t ? d(s) : d;
              })(t, i, s);
        return Array.isArray(e) ? h(e, l) : h([e], ([e]) => l(e));
      }
      function h(e, t) {
        let i = (0, c.h)(() => []);
        return d(e, () => {
          i.length = 0;
          let r = e.length;
          for (let t = 0; t < r; t++) i[t] = e[t].get();
          return t(i);
        });
      }
    },
  },
]);
