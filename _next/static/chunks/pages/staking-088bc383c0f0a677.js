(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [879],
  {
    57522: function (e, l, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/staking",
        function () {
          return t(84920);
        },
      ]);
    },
    84920: function (e, l, t) {
      "use strict";
      t.r(l),
        t.d(l, {
          __N_SSP: function () {
            return A;
          },
          default: function () {
            return E;
          },
        });
      var a = t(52322),
        s = t(38082),
        n = t(51763),
        i = t(40320),
        x = t(20034),
        c = t(2784),
        r = t(10596),
        o = t(60455);
      let d = (e) => {
          let { className: l, children: t } = e;
          return (0, a.jsx)("div", {
            className: (0, n.cn)(
              "flex-1 flex flex-col justify-between gap-[0.81vw] 3xl:gap-[14px] py-[0.69vw] 3xl:py-3 px-[0.69vw] 3xl:px-3 border border-[#00FBFF] rounded-[0.58vw] 3xl:rounded-[10px]",
              "max-lg:py-3 max-lg:rounded-[10px] max-lg:px-3 max-lg:items-center max-lg:text-center max-lg:min-h-[140px]",
              l
            ),
            children: t,
          });
        },
        m = (e) => {
          let { className: l, children: t } = e;
          return (0, a.jsx)("div", {
            className: (0, n.cn)(
              "text-[0.92vw] 3xl:text-base text-[#00FBFF] capitalize leading-[1.3] font-semibold",
              "max-lg:text-base",
              l
            ),
            children: t,
          });
        },
        g = (e) => {
          let { className: l, children: t = "0" } = e;
          return (0, a.jsxs)("div", {
            className: (0, n.cn)(
              "flex items-baseline text-[0.92vw] 3xl:text-base text-white capitalize leading-[1.3] font-semibold",
              "max-lg:text-base max-lg:justify-center",
              l
            ),
            children: [
              (0, a.jsx)("span", {
                className:
                  "text-[1.16vw] 3xl:text-xl font-bold mr-1 max-lg:text-xl",
                children: 0,
              }),
              " ",
              "$BEPE",
            ],
          });
        },
        h = (e) => {
          let { className: l, children: t, onClick: s, disabled: i } = e;
          return (0, a.jsx)(o.Z, {
            className: (0, n.cn)(
              "h-[2.31vw] 3xl:h-[40px] text-[0.81vw] 3xl:text-sm px-0 whitespace-nowrap",
              "max-lg:w-full max-lg:text-sm max-lg:h-[40px]",
              l
            ),
            onClick: s,
            disabled: i,
            children: t,
          });
        };
      var p = t(53936),
        u = (e) => {
          let {
              value: l,
              onChange: t,
              className: s,
              placeholder: i,
              disabled: x = !1,
              style: r = {},
              suffix: o,
            } = e,
            d = (0, c.useRef)(null),
            m = (0, c.useRef)(0),
            g = () => {
              let e = window.getSelection();
              if (e && e.rangeCount > 0 && d.current) {
                let l = e.getRangeAt(0);
                return d.current.firstChild.length - l.startOffset;
              }
              return 0;
            },
            h = (e) => {
              let l = window.getSelection();
              if (l && d.current) {
                let t = document.createRange(),
                  a = d.current.firstChild;
                if (a) {
                  let s = Math.min(a.length - e, a.length);
                  t.setStart(a, s),
                    t.setEnd(a, s),
                    l.removeAllRanges(),
                    l.addRange(t);
                }
              }
            };
          return (
            (0, c.useEffect)(() => {
              d.current && (d.current.textContent = l || "");
            }, [l]),
            (0, a.jsxs)("div", {
              className: (0, n.cn)(
                "relative overflow-hidden whitespace-nowrap flex items-center h-[56px] lg:h-[66px] border-[3px] border-black rounded-lg w-full px-4 text-[36px] max-lg:text-[32px]",
                x && "border-black/50 text-black/50",
                s
              ),
              children: [
                (0, a.jsx)("span", {
                  ref: d,
                  contentEditable: x ? "false" : "true",
                  suppressContentEditableWarning: !0,
                  onInput: (e) => {
                    let l = e.target.textContent || "",
                      a = g();
                    (m.current = a),
                      (l = l.replace(/[^0-9\.\,]/g, "")),
                      d.current && (d.current.textContent = l),
                      t && t(l),
                      setTimeout(() => {
                        h(m.current);
                      }, 50);
                  },
                  className:
                    "relative z-[2] overflow-hidden whitespace-nowrap flex items-center w-full h-full",
                  style: r,
                }),
                !l &&
                  (0, a.jsx)("span", {
                    className:
                      "absolute left-0 top-0 leading-none h-full flex items-center px-4",
                    style: { opacity: 0.3 },
                    children: i,
                  }),
                o && (0, a.jsx)("div", { className: "text-xl", children: o }),
              ],
            })
          );
        },
        f = t(26691);
      function v(e) {
        var l;
        let { isOpen: t, setIsOpen: n, onStake: r } = e,
          { t: d } = (0, x.$G)(),
          m = [
            {
              title: "Mammoth BALLS",
              type: "mammoth",
              apyTime: (0, a.jsx)(x.cC, {
                i18nKey: "staking.months",
                values: { number: 6 },
              }),
              apy: 15e3,
              increase: (180 / 365) * 15e3,
              increaseTime: (0, a.jsx)(x.cC, {
                i18nKey: "staking.overMonths",
                values: { number: 6 },
              }),
            },
          ],
          { stakingState: g, doStake: h } = (0, i.e2)(),
          [v, b] = (0, c.useState)(0),
          j =
            null !== (l = null == g ? void 0 : g.stakable) && void 0 !== l
              ? l
              : 0,
          [k, N] = (0, c.useState)(0),
          [y, S] = (0, c.useState)((0, s.uf)(k)),
          [C, z] = (0, c.useState)(!1),
          M = () => {
            if (k <= 0) {
              f.g.error("Please enter a valid amount");
              return;
            }
            if (k > j) {
              f.g.error("Insufficient balance");
              return;
            }
            n(!1), z(!0);
          },
          F = async () => {
            n(!1), z(!1);
            let e = f.g.loading("Staking...");
            await h(k, m[v].type), f.g.dismiss(e), r(m[v].type);
          };
        return (
          (0, c.useEffect)(() => {
            S((0, s.uf)(k));
          }, [k]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(p.Z, {
                show: t,
                onClose: () => {
                  n(!1);
                },
                maskClick: !1,
                width: 644,
                closeClassName: "top-5 right-4",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "flex items-center justify-center bg-[#FFF593] rounded-t-[9px] text-center h-[54px] max-lg:h-[48px] font-bold text-[22px] max-lg:text-base uppercase",
                    children: d("stakeModal.title"),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "flex max-lg:flex-col items-stretch gap-0 lg:gap-5 p-4 lg:p-6 bg-black",
                    children: m.map((e, l) =>
                      (0, a.jsx)(
                        w,
                        {
                          active: v === l,
                          ...e,
                          onClick: () => {
                            b(l);
                          },
                        },
                        e.title
                      )
                    ),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      " px-4 lg:px-6 py-3 font-semibold max-lg:text-sm",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                          (0, a.jsx)("div", {
                            className: "uppercase max-lg:leading-[22px]",
                            children: d("stakeModal.balance"),
                          }),
                          (0, a.jsxs)("div", {
                            className: "font-bold max-lg:leading-[30px]",
                            children: [
                              (0, a.jsx)("b", {
                                className: "text-[30px]",
                                children: (0, s.uf)(j),
                              }),
                              " $BEPE",
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex justify-between items-center",
                        children: [
                          (0, a.jsx)("div", {
                            children: d("stakeModal.amount"),
                          }),
                          (0, a.jsx)("div", {
                            onClick: () => {
                              N(j);
                            },
                            className: " cursor-pointer",
                            children: d("stakeModal.max"),
                          }),
                        ],
                      }),
                      (0, a.jsx)(u, {
                        value: y,
                        className: "",
                        placeholder: "0",
                        suffix: "$BEPE",
                        onChange: (e) => {
                          console.log("onChange", e),
                            N(
                              e ? Math.floor(Number(e.replaceAll(",", ""))) : 0
                            );
                        },
                      }),
                      (0, a.jsx)("div", { children: d("stakeModal.inputTip") }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "py-5 px-4 border-t-[3px] border-t-black flex max-lg:flex-col items-center justify-center gap-16 max-lg:gap-4 ",
                    children: [
                      (0, a.jsx)(o.Z, {
                        theme: "white",
                        className:
                          "w-full lg:w-[194px] max-lg:h-[40px] max-lg:order-2",
                        onClick: () => {
                          n(!1);
                        },
                        children: d("cancel"),
                      }),
                      (0, a.jsx)(o.Z, {
                        className: "w-full lg:w-[194px] max-lg:h-[40px]",
                        onClick: () => {
                          M();
                        },
                        children: d("stakeModal.stakeNow"),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(p.Z, {
                show: C,
                onClose: () => {
                  z(!1);
                },
                width: 540,
                maskClick: !1,
                closeClassName: "top-5 right-4 fill-white",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "flex items-center justify-center bg-black text-white rounded-t-[9px] text-center h-[54px] font-bold text-[22px] max-lg:text-lg uppercase",
                    children: d("stakeModal.confirmStake"),
                  }),
                  (0, a.jsx)("div", {
                    className: "py-6 px-8 text-center font-semibold",
                    children: d("stakeModal.confirmStakeTip"),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "py-5 px-4 border-t-[3px] border-t-black flex max-lg:flex-col items-center justify-center gap-16 max-lg:gap-4",
                    children: [
                      (0, a.jsx)(o.Z, {
                        theme: "white",
                        className:
                          "w-[194px] max-lg:w-full max-lg:h-[40px] max-lg:order-2",
                        onClick: () => {
                          z(!1), n(!0);
                        },
                        children: d("stakeModal.goBack"),
                      }),
                      (0, a.jsx)(o.Z, {
                        className: "w-[194px] max-lg:w-full max-lg:h-[40px]",
                        onClick: () => {
                          F();
                        },
                        children: d("stakeModal.yesSkateNow"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      let w = (e) => {
        let { active: l = !1, onClick: t, ...i } = e,
          { t: c, i18n: r } = (0, x.$G)();
        return (0, a.jsxs)("div", {
          className: (0, n.cn)(
            "flex-1 flex lg:flex-col items-center rounded-md py-3 px-4 lg:px-2 cursor-pointer",
            l ? "bg-white text-black" : "bg-black text-white"
          ),
          onClick: t,
          children: [
            (0, a.jsx)("div", {
              className: (0, n.cn)(
                "size-[26px] border-[3px] rounded-full p-[3px] max-lg:mr-4",
                l ? "border-black" : "border-white"
              ),
              children: (0, a.jsx)("div", {
                className: (0, n.cn)("size-full rounded-full bg-black"),
              }),
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col lg:items-center",
              children: [
                (0, a.jsx)("div", {
                  className: (0, n.cn)(
                    "text-xl leading-[1.5] font-black text-primary uppercase",
                    "zh" === r.language ? "shadow-text" : "stroke-text-1"
                  ),
                  children: i.title,
                }),
                (0, a.jsxs)("div", {
                  className:
                    "text-sm flex items-center lg:justify-center lg:mt-1 gap-1",
                  children: [
                    (0, a.jsx)("div", {
                      className: "font-semibold",
                      children: i.apyTime,
                    }),
                    (0, a.jsxs)("div", {
                      className: "font-bold",
                      children: [(0, s.uf)(i.apy), "% APY"],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "text-sm flex lg:flex-col items-center lg:justify-center lg:mt-2",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "font-bold",
                      children: [
                        i.increase.toFixed(0),
                        "% ",
                        c("staking.increase"),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "font-semibold",
                      children: i.increaseTime,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var b = t(96577),
        j = t.n(b);
      function k(e) {
        var l;
        let { isOpen: t, setIsOpen: n } = e,
          { t: c } = (0, x.$G)(),
          { stakingState: r } = (0, i.e2)(),
          d = () => {
            f.g.success("Withdraw success"), n(!1);
          };
        return (0, a.jsxs)(p.Z, {
          show: t,
          onClose: () => {
            n(!1);
          },
          width: 540,
          maskClick: !1,
          closeClassName: "top-5 right-4 fill-white",
          children: [
            (0, a.jsx)("div", {
              className:
                "flex items-center justify-center bg-black text-white rounded-t-[9px] text-center h-[54px] font-bold text-[22px] max-lg:text-lg uppercase",
              children: c("withdrawModal.title"),
            }),
            (0, a.jsxs)("div", {
              className:
                "relative overflow-hidden flex flex-col pt-7 max-lg:pt-4 pb-20 max-lg:pb-10 bg-[url('/images/staking/withdraw-bg.png')] bg-cover bg-center px-8 text-center font-semibold",
              children: [
                (0, a.jsx)("div", {
                  className: "uppercase",
                  children: c("staking.stakedBalance"),
                }),
                (0, a.jsxs)("div", {
                  className: "font-bold",
                  children: [
                    (0, a.jsx)("b", {
                      className: "text-[30px]",
                      children: (0, s.uf)(
                        null !== (l = null == r ? void 0 : r.staked) &&
                          void 0 !== l
                          ? l
                          : 0
                      ),
                    }),
                    " ",
                    "$BEPE",
                  ],
                }),
                (0, a.jsx)(j(), {
                  src: "/images/home/team.gif",
                  width: 166,
                  height: 200,
                  alt: "gold-pepe",
                  className:
                    "absolute left-0 bottom-0 translate-y-[42%] max-lg:translate-x-[-24%] max-lg:w-[32%]",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "py-5 px-4 border-t-[3px] border-t-black flex max-lg:flex-col items-center justify-center gap-16 max-lg:gap-4",
              children: [
                (0, a.jsx)(o.Z, {
                  theme: "white",
                  className:
                    "w-full lg:w-[194px] max-lg:h-[40px] max-lg:order-2",
                  onClick: () => {
                    n(!1);
                  },
                  children: c("cancel"),
                }),
                (0, a.jsx)(o.Z, {
                  className: "w-full lg:w-[194px] max-lg:h-[40px]",
                  onClick: () => {
                    d();
                  },
                  disabled: !0,
                  children: c("withdraw"),
                }),
              ],
            }),
          ],
        });
      }
      var N = t(48537);
      function y(e) {
        var l, t, s, r;
        let { onStake: o, totalStaked: p, totalRewards: u, className: f } = e,
          { t: w } = (0, x.$G)(),
          [b, j] = (0, c.useState)(!1),
          [y, S] = (0, c.useState)(!1),
          [C, z] = (0, c.useState)(!1),
          { stakingState: M } = (0, i.e2)();
        return (0, a.jsxs)("div", {
          className: (0, n.cn)(
            "flex items-stretch gap-[1.27vw] 3xl:gap-[22px] w-[42vw] 3xl:w-[727px]",
            "max-lg:flex-col max-lg:w-full max-lg:gap-6",
            f
          ),
          children: [
            (0, a.jsxs)(d, {
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(m, { children: w("staking.stakedBalance") }),
                    (0, a.jsx)(g, {
                      children: (0, N.IJ)(
                        null !== (l = null == M ? void 0 : M.staked) &&
                          void 0 !== l
                          ? l
                          : 0
                      ),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(m, { children: w("staking.yourStakable") }),
                    (0, a.jsx)(g, {
                      children: (0, N.IJ)(
                        null !== (t = null == M ? void 0 : M.stakable) &&
                          void 0 !== t
                          ? t
                          : 0
                      ),
                    }),
                  ],
                }),
                (0, a.jsx)(h, {
                  onClick: () => {
                    j(!0);
                  },
                  children: w("staking.stakeNow"),
                }),
                (0, a.jsx)(v, {
                  isOpen: b,
                  setIsOpen: j,
                  onStake: (e) => {
                    o(e);
                  },
                }),
              ],
            }),
            (0, a.jsxs)(d, {
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(m, { children: w("staking.ofPool") }),
                    (0, a.jsx)(g, {
                      children: "".concat(
                        0 === p
                          ? 0
                          : (
                              ((null !== (s = null == M ? void 0 : M.staked) &&
                              void 0 !== s
                                ? s
                                : 0) /
                                p) *
                              100
                            ).toFixed(3),
                        "%"
                      ),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(m, { children: w("staking.totalStaked") }),
                    (0, a.jsx)(g, { children: (0, N.IJ)(null != p ? p : 0) }),
                  ],
                }),
                (0, a.jsx)(h, {
                  onClick: () => {
                    S(!0);
                  },
                  disabled: !0,
                  children: w("staking.withdrawStaked"),
                }),
                (0, a.jsx)(k, { isOpen: y, setIsOpen: S }),
              ],
            }),
            (0, a.jsxs)(d, {
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(m, { children: w("staking.totalRewards") }),
                    (0, a.jsx)(g, { children: (0, N.IJ)(null != u ? u : 0) }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(m, { children: w("staking.yourRewards") }),
                    (0, a.jsx)(g, {
                      children: (0, N.IJ)(
                        null !== (r = null == M ? void 0 : M.reward) &&
                          void 0 !== r
                          ? r
                          : 0
                      ),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {}),
              ],
            }),
          ],
        });
      }
      let S = [
        "/images/staking/machine-gold1.webp",
        "/images/staking/machine-gold2.webp",
      ];
      function C(e) {
        let {
            isActive: l = !1,
            showAnimation: t = !1,
            className: s,
            onAnimEnd: i,
          } = e,
          [x, r] = (0, c.useState)(
            l
              ? "/images/staking/machine-active-gold.png"
              : "/images/staking/machine.png?v=3"
          ),
          [o, d] = (0, c.useState)(
            l
              ? "/images/staking/machine-gold.webp"
              : "/images/staking/machine-off.webp"
          ),
          [m, g] = (0, c.useState)(!1);
        return (
          (0, c.useEffect)(() => {
            if (t) {
              r("/images/staking/machine-animation-gold.gif");
              let e = 0,
                t = setInterval(() => {
                  d(S[e % S.length]), e++;
                }, 500);
              return (
                setTimeout(() => {
                  g(!0);
                }, 9e3),
                setTimeout(() => {
                  g(!1);
                }, 11500),
                setTimeout(() => {
                  r(
                    l
                      ? "/images/staking/machine-active.png"
                      : "/images/staking/machine.png?v=3"
                  ),
                    d(
                      l
                        ? "/images/staking/machine-gold.webp"
                        : "/images/staking/machine-off.webp"
                    ),
                    clearInterval(t),
                    i && i();
                }, 19e3),
                () => clearInterval(t)
              );
            }
            r(
              l
                ? "/images/staking/machine-active-gold.png"
                : "/images/staking/machine.png?v=3"
            ),
              d(
                l
                  ? "/images/staking/machine-gold.webp"
                  : "/images/staking/machine-off.webp"
              );
          }, [t]),
          (0, a.jsxs)("div", {
            className: (0, n.cn)(
              "relative w-[11.86vw] 3xl:w-[205px] max-lg:w-[120px] h-[62.38vw] 3xl:h-[1078px] max-lg:h-[631px]",
              l && "scale-[1.05] ",
              s
            ),
            style: { transformOrigin: "50% 65%" },
            children: [
              (0, a.jsx)(j(), {
                src: o,
                alt: "machine",
                width: 205,
                height: 1078,
                className:
                  "absolute left-0 bottom-0 z-[1] w-full h-auto max-h-none max-w-none",
              }),
              (0, a.jsx)(j(), {
                src: x,
                alt: "machine",
                width: 681,
                height: 900,
                unoptimized: !0,
                className: (0, n.cn)(
                  "absolute left-[-2%] bottom-[7.6%] z-[1]  w-[104%] h-auto max-w-none max-h-none ",
                  m ? "anim-shake" : ""
                ),
              }),
            ],
          })
        );
      }
      t(39128);
      let z = (e) => {
          let { t: l, i18n: t } = (0, x.$G)();
          return (0, a.jsxs)("div", {
            className: "flex flex-col items-center text-center",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "font-black text-[0.81vw] 3xl:text-sm leading-[1.8] stroke-text",
                children: [
                  (0, a.jsxs)("span", {
                    className: "text-primary",
                    children: [(e.usedSize / 1e6).toFixed(1), "M"],
                  }),
                  "(",
                  l("staking.poolSize"),
                  ": ",
                  e.totalSize,
                  "M)",
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "w-[8.68vw] 3xl:w-[150px] h-[0.92vw] 3xl:h-4 bg-black rounded-full p-[0.17vw] 3xl:p-[3px]",
                children: (0, a.jsx)("div", {
                  className: "h-full rounded-full",
                  style: {
                    background: "linear-gradient(to left,#F2C348,#fff)",
                    width: "".concat(
                      (e.usedSize / (1e6 * e.totalSize)) * 100,
                      "%"
                    ),
                  },
                }),
              }),
              (0, a.jsx)("div", {
                className: (0, n.cn)(
                  "text-[1.16vw] 3xl:text-xl leading-[1.2] font-bold text-primary mt-1",
                  "zh" === t.language ? "shadow-text" : "stroke-text-1"
                ),
                children: e.subTitle,
              }),
              (0, a.jsx)("div", {
                className:
                  "mt-[0.46vw] 3xl:mt-2 border border-[#00FBFF] text-[#00FBFF] text-[0.92vw] 3xl:text-base leading-[1.4] w-[7.52vw] 3xl:w-[130px] h-[1.9vw] 3xl:h-[33px] flex flex-col items-center justify-center rounded-[0.58vw] 3xl:rounded-[10px]",
                children: (0, a.jsxs)("div", {
                  className: "font-bold",
                  children: [(0, s.uf)(e.apy), "% APY"],
                }),
              }),
            ],
          });
        },
        M = (e) => {
          let { list: l } = e,
            { t, i18n: s } = (0, x.$G)();
          return (0, a.jsx)("div", {
            className:
              "border border-cyan rounded-[10px] flex flex-col w-full lg:w-[25.6vw] 3xl:w-[442px] font-museo",
            children: l.map((e, i) =>
              (0, a.jsxs)(
                "div",
                {
                  className: (0, n.cn)(
                    "flex items-stretch h-[62px] lg:h-[3.53vw] 3xl:h-[61px] ",
                    i < l.length - 1 && "border-b border-b-cyan"
                  ),
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "w-[35.3%] flex flex-col justify-center shrink-0 px-[14px] lg:px-[1.15vw] 3xl:px-5 border-r border-r-cyan",
                      children: [
                        (0, a.jsx)("div", {
                          className: (0, n.cn)(
                            "text-lg lg:text-[1.04vw] 3xl:text-lg  font-black text-white leading-[1.5] 3xl:leading-none whitespace-nowrap",
                            "zh" === s.language
                              ? "shadow-text"
                              : "stroke-text-1"
                          ),
                          children: e.title,
                        }),
                        (0, a.jsx)("div", {
                          className: (0, n.cn)(
                            "text-sm lg:text-[0.92vw] 3xl:text-base leading-none font-bold text-primary",
                            "zh" === s.language
                              ? "shadow-text"
                              : "stroke-text-1"
                          ),
                          children: e.subTitle,
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex-1 flex items-center gap-1 shrink-0 pl-3 lg:pl-[1vw] 3xl:pl-4 border-r border-r-cyan",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "font-black text-base lg:text-[0.92vw] 3xl:text-base leading-[1.8] stroke-text",
                          children: [e.totalSize, "M"],
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "inline-flex items-center h-6 lg:h-[1.4vw] 3xl:h-6 bg-primary border border-black rounded-full text-black font-bold px-2 text-xs uppercase",
                          children: "Full",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "w-[35%] flex flex-col justify-center shrink-0 pl-3 lg:pl-[1vw] 3xl:pl-4 text-sm lg:text-[0.81vw] 3xl:text-base whitespace-nowrap leading-[1.5] 3xl:leading-none",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "font-bold ",
                          children: [
                            e.increase.toFixed(0),
                            "% ",
                            t("staking.increase"),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "font-semibold",
                          children: e.increaseTime,
                        }),
                      ],
                    }),
                  ],
                },
                i
              )
            ),
          });
        };
      function F() {
        var e, l, t, o, d, m, g, h, p, u, f, v, w, b;
        (0, c.useEffect)(() => {
          [
            "https://cdn.host-video.com/azkamqnwe_change-pepe.webp",
            "/images/staking/machine-blue.webp",
            "/images/staking/machine-green.webp",
            "/images/staking/machine-orange.webp",
            "/images/staking/machine-yellow.webp",
          ].forEach((e) => {
            let l = new Image();
            (l.src = e),
              (l.onload = () => {
                console.log("img loaded", l.src);
              });
          });
        }, []);
        let { t: k, i18n: N } = (0, x.$G)(),
          { stakingMarketData: S } = (0, i.e2)(),
          F = [
            {
              title: k("staking.longPool"),
              subTitle: "'Uge Balls",
              totalSize: 1,
              usedSize:
                null !==
                  (g =
                    null == S
                      ? void 0
                      : null === (e = S.pools.find((e) => "long" === e.name)) ||
                        void 0 === e
                      ? void 0
                      : e.totalStaked) && void 0 !== g
                  ? g
                  : 0,
              apyTime: (0, a.jsx)(x.cC, {
                i18nKey: "staking.months",
                values: { number: 6 },
              }),
              apy: 1e4,
              increase: (180 / 365) * 1e4,
              increaseTime: (0, a.jsx)(x.cC, {
                i18nKey: "staking.overMonths",
                values: { number: 6 },
              }),
            },
            {
              title: k("staking.mediumPool"),
              subTitle: "OK Balls",
              totalSize: 100,
              usedSize:
                null !==
                  (h =
                    null == S
                      ? void 0
                      : null ===
                          (l = S.pools.find((e) => "medium" === e.name)) ||
                        void 0 === l
                      ? void 0
                      : l.totalStaked) && void 0 !== h
                  ? h
                  : 0,
              apyTime: (0, a.jsx)(x.cC, {
                i18nKey: "staking.months",
                values: { number: 4 },
              }),
              apy: 250,
              increase: (120 / 365) * 250,
              increaseTime: (0, a.jsx)(x.cC, {
                i18nKey: "staking.overMonths",
                values: { number: 4 },
              }),
            },
            {
              title: k("staking.smallPool"),
              subTitle: "Lil Balls",
              totalSize: 100,
              usedSize:
                null !==
                  (p =
                    null == S
                      ? void 0
                      : null ===
                          (t = S.pools.find((e) => "small" === e.name)) ||
                        void 0 === t
                      ? void 0
                      : t.totalStaked) && void 0 !== p
                  ? p
                  : 0,
              apyTime: (0, a.jsx)(x.cC, {
                i18nKey: "staking.months",
                values: { number: 3 },
              }),
              apy: 75,
              increase: (90 / 365) * 75,
              increaseTime: (0, a.jsx)(x.cC, {
                i18nKey: "staking.overMonths",
                values: { number: 3 },
              }),
            },
            {
              title: "Mammoth BALLS",
              subTitle: "Mammoth BALLS",
              totalSize: 1.5,
              usedSize:
                null !==
                  (u =
                    null == S
                      ? void 0
                      : null ===
                          (o = S.pools.find((e) => "mammoth" === e.name)) ||
                        void 0 === o
                      ? void 0
                      : o.totalStaked) && void 0 !== u
                  ? u
                  : 0,
              apyTime: (0, a.jsx)(x.cC, {
                i18nKey: "staking.months",
                values: { number: 6 },
              }),
              apy: 15e3,
              increase: (180 / 365) * 15e3,
              increaseTime: (0, a.jsx)(x.cC, {
                i18nKey: "staking.overMonths",
                values: { number: 6 },
              }),
            },
          ],
          [P, T] = (0, c.useState)(!1),
          [B, A] = (0, c.useState)(!1),
          [E, _] = (0, c.useState)(!1),
          [L, I] = (0, c.useState)([]),
          O = (0, s.Dh)();
        return (0, a.jsxs)("div", {
          className:
            "relative w-screen lg:h-[calc(100vh-48px)] overflow-hidden bg-[#2892a9] lg:bg-[url('/images/staking/bg.webp')] bg-center bg-cover flex flex-col mt-[48px]",
          children: [
            (0, a.jsx)("div", {
              className:
                'absolute left-0 top-0 max-lg:z-[3] w-full h-[4.63vw] 3xl:h-[80px] max-lg:h-[60px] bg-[url("/images/staking/top.png")] max-lg:bg-[url("/images/home/hero/bg2-top-mobile.webp")] bg-cover bg-no-repeat bg-bottom border-b border-b-black',
            }),
            !O &&
              (0, a.jsx)(j(), {
                src: "/images/staking/window.png",
                alt: "",
                width: 203,
                height: 212,
                className:
                  "absolute right-0 top-[15%] z-[3] h-auto w-[8.8vw] 3xl:w-[153px]",
              }),
            (0, a.jsx)(r.Z, { activeNavIndex: -1 }),
            (0, a.jsx)("div", {
              className:
                "flex-1 relative max-lg:z-[2] pt-[4.63vw] 3xl:pt-[80px] max-lg:pt-[60px] lg:h-[55%]",
              children: (0, a.jsxs)("div", {
                className:
                  "layout lg:!px-[8vw] 3xl:!px-[100px] max-lg:bg-[url('/images/staking/mobile-bg.webp')] bg-cover bg-center flex max-lg:flex-col items-start justify-between h-full",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "relative z-[200] w-[33.2vw] 3xl:w-[575px] max-lg:w-full py-6 h-full flex flex-col max-lg:items-center justify-center max-lg:text-center",
                    style: {
                      background: O
                        ? "linear-gradient(to bottom,#2892A9 80%,#2892A900)"
                        : "",
                    },
                    children: [
                      (0, a.jsx)("h1", {
                        className: (0, n.cn)(
                          "font-black text-[2.78vw] 3xl:text-[48px] leading-[1.2] uppercase",
                          "max-lg:text-[2rem] ",
                          "zh" === N.language
                            ? "shadow-text"
                            : O
                            ? "stroke-text-2"
                            : "stroke-text-3"
                        ),
                        style: { textShadow: "2px 2px 0 #000" },
                        children: (0, a.jsx)(x.cC, {
                          i18nKey: "staking.title",
                          components: {
                            primary: (0, a.jsx)("span", {
                              className: "text-primary",
                            }),
                          },
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: (0, n.cn)(
                          "font-bold text-[1.27vw] 3xl:text-[22px] max-lg:text-base max-lg:leading-[1.25] leading-[1.3] mt-[1.15vw] 3xl:mt-5 max-lg:mt-2",
                          O && "stroke-text"
                        ),
                        children: k("staking.subtitle"),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "font-semibold text-[0.92vw] 3xl:text-base leading-[1.5] mt-[1.15vw] 3xl:mt-5 max-lg:hidden",
                        children: k("staking.content1"),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "font-semibold text-[0.92vw] 3xl:text-base leading-[1.5] mt-[0.46vw] 3xl:mt-2 max-lg:hidden",
                        children: k("staking.content2"),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "relative lg:w-[40vw] 3xl:w-[691px] max-lg:w-full lg:h-full flex flex-col items-center",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "relative z-[2]  max-3xl:max-h-[38vh] h-[38vh] max-lg:h-[80vw] max-lg:max-h-[400px] w-full flex items-end justify-between pb-[2%] max-lg:mt-[-20%] ",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "lg:flex-1 max-lg:w-[25%] flex flex-col items-center relative",
                            children: (0, a.jsx)(C, {
                              isActive: L.indexOf("long") >= 0,
                              showAnimation: P,
                              className: " shrink-0",
                              onAnimEnd: () => {
                                T(!1);
                              },
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "lg:flex-1 max-lg:w-[40%] flex flex-col items-center relative",
                            children: (0, a.jsx)(C, {
                              className: " shrink-0",
                              isActive: !0,
                              showAnimation: B,
                              onAnimEnd: () => {
                                A(!1);
                              },
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "lg:flex-1 max-lg:w-[25%] flex flex-col items-center relative",
                            children: (0, a.jsx)(C, {
                              className: "  shrink-0",
                              isActive: L.indexOf("small") >= 0,
                              showAnimation: E,
                              onAnimEnd: () => {
                                _(!1);
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-col items-center text-center mb-3",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "font-black text-[1vw] max-lg:text-[15px] leading-[1.8] stroke-text",
                            children: [
                              (0, a.jsxs)("span", {
                                className: "text-primary",
                                children: [
                                  (
                                    (null !==
                                      (f =
                                        null ===
                                          (d = F.find(
                                            (e) => "Mammoth BALLS" === e.title
                                          )) || void 0 === d
                                          ? void 0
                                          : d.usedSize) && void 0 !== f
                                      ? f
                                      : 0) / 1e6
                                  ).toPrecision(2),
                                  "M",
                                ],
                              }),
                              "(",
                              k("staking.poolSize"),
                              ": ",
                              1.5,
                              "M)",
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "w-[8.68vw] max-lg:w-[150px] h-[0.92vw] max-lg:h-4 bg-black rounded-full p-[0.17vw] max-lg:p-[3px] mt-1",
                            children: (0, a.jsx)("div", {
                              className: "h-full rounded-full",
                              style: {
                                background:
                                  "linear-gradient(to left,#F2C348,#fff)",
                                width: "".concat(
                                  ((null !==
                                    (v =
                                      null ===
                                        (m = F.find(
                                          (e) => "Mammoth BALLS" === e.title
                                        )) || void 0 === m
                                        ? void 0
                                        : m.usedSize) && void 0 !== v
                                    ? v
                                    : 0) /
                                    15e5) *
                                    100,
                                  "%"
                                ),
                              },
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: (0, n.cn)(
                              "text-[1.39vw] max-lg:text-2xl leading-[1.5] font-black text-primary my-2",
                              "zh" === N.language
                                ? "shadow-text"
                                : "stroke-text-2"
                            ),
                            children: "MAMMOTH BALLS",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "border border-[#00FBFF] text-[#00FBFF] text-[0.92vw] p-2 py-1 max-lg:text-base leading-[1.4] flex flex-col items-center justify-center rounded-[0.58vw] max-lg:rounded-[10px]",
                            children: (0, a.jsxs)("div", {
                              className: "font-bold",
                              children: ["12,000", "% APY"],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className:
                "relative w-full lg:h-[35%] shrink-0 border-t border-t-black bg-[url('/images/staking/bottom.webp')] max-lg:bg-[url('/images/staking/mobile-bottom.webp')] bg-cover bg-no-repeat bg-top",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "layout lg:!px-[8vw] 3xl:!px-[100px] flex max-lg:flex-col items-start gap-5 justify-between py-4 lg:py-[1.73vw] 3xl:py-[30px]",
                  children: [
                    (0, a.jsx)(y, {
                      className: " max-lg:order-2",
                      onStake: (e) => {
                        "long" === e
                          ? T(!0)
                          : "medium" === e
                          ? A(!0)
                          : "small" === e && _(!0),
                          "mammoth" === e && A(!0),
                          I([...L, e]);
                      },
                      totalStaked:
                        null !== (w = null == S ? void 0 : S.totalStaked) &&
                        void 0 !== w
                          ? w
                          : 0,
                      totalRewards:
                        null !== (b = null == S ? void 0 : S.totalEarned) &&
                        void 0 !== b
                          ? b
                          : 0,
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "lg:w-[40vw] 3xl:w-[691px] max-lg:w-full flex flex-col gap-5 items-center",
                      children: [
                        L.indexOf("long") >= 0 &&
                          (0, a.jsx)("div", {
                            className: "",
                            children: (0, a.jsx)(z, { ...F[0] }),
                          }),
                        L.indexOf("medium") >= 0 &&
                          (0, a.jsx)("div", {
                            className: "",
                            children: (0, a.jsx)(z, { ...F[1] }),
                          }),
                        L.indexOf("small") >= 0 &&
                          (0, a.jsx)("div", {
                            className: "",
                            children: (0, a.jsx)(z, { ...F[2] }),
                          }),
                        (0, a.jsx)(M, { list: F.slice(0, 3) }),
                      ],
                    }),
                  ],
                }),
                !O &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(j(), {
                        src: "/images/staking/computer.png",
                        alt: "",
                        width: 291,
                        height: 186,
                        className:
                          "absolute right-0 top-[0%] z-[3] h-auto w-[6.36vw] 3xl:w-[110px] -translate-y-[90%]",
                      }),
                      (0, a.jsx)(j(), {
                        src: "/images/home/hero/gold-pepe.png",
                        width: 307,
                        height: 557,
                        alt: "pepe",
                        className:
                          "absolute top-0 left-[-4%] w-[13vw] h-auto 3xl:w-[220px]",
                      }),
                      (0, a.jsx)(j(), {
                        src: "/images/home/hero/trump-standing.png",
                        width: 310,
                        height: 430,
                        alt: "pepe",
                        className:
                          "absolute right-[-3%] bottom-[-8%] -scale-x-100 w-[12vw] 3xl:w-[220px]",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      var P = t(97729),
        T = t.n(P),
        B = t(84012),
        A = !0;
      function E(e) {
        var l;
        let { baseUrl: t } = e;
        (0, s.V1)(), (0, s.Dh)();
        let { t: n, i18n: c } = (0, x.$G)();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(T(), {
              children: [
                (0, a.jsx)("title", {
                  children: "".concat(n("staking.pageTitle")),
                }),
                (0, a.jsx)("link", {
                  rel: "canonical",
                  href: "https://bitcoinpepe.co".concat(
                    "en" === c.language
                      ? "/staking"
                      : "/".concat(c.language, "/staking")
                  ),
                }),
                (0, a.jsx)("link", {
                  rel: "alternate",
                  hrefLang: "x-default",
                  href: "".concat(t, "/staking"),
                }),
                B.M.map((e) =>
                  (0, a.jsx)(
                    "link",
                    {
                      rel: "alternate",
                      hrefLang: e,
                      href: ""
                        .concat(t)
                        .concat(
                          "en" === e ? "/" : "/".concat(e, "/"),
                          "staking"
                        ),
                    },
                    e
                  )
                ),
                (0, a.jsx)("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: {
                    __html:
                      '\n{\n  "@context" : "https://schema.org",\n  "@type" : "WebSite",\n  "name" : '
                        .concat(
                          "".concat(n("staking"), " - Bitcoin Pepe"),
                          ',\n  "alternateName" : ["Bitcoin Pepe", "BEPE", "PEP-20"],\n  "url" : "'
                        )
                        .concat(t)
                        .concat(
                          "en" === c.language
                            ? "/"
                            : "/".concat(c.language, "/"),
                          'staking"\n}'
                        ),
                  },
                }),
                (0, a.jsx)("meta", {
                  property: "og:title",
                  content: "".concat(n("staking"), " - Bitcoin Pepe"),
                }),
                (0, a.jsx)("meta", {
                  property: "og:url",
                  content: ""
                    .concat(t, "/")
                    .concat(
                      null !== (l = c.language) && void 0 !== l ? l : "en",
                      "/staking"
                    ),
                }),
                (0, a.jsx)("meta", { property: "og:type", content: "website" }),
                (0, a.jsx)("meta", {
                  property: "og:site_name",
                  content: "Bitcoin Pepe",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:title",
                  content: "".concat(n("staking"), " - Bitcoin Pepe"),
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:description",
                  content: n("staking"),
                }),
              ],
            }),
            (0, a.jsx)(i.k8, { children: (0, a.jsx)(F, {}) }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [934, 999, 23, 710, 375, 224, 292, 288, 596, 774, 888, 179],
      function () {
        return e((e.s = 57522));
      }
    ),
      (_N_E = e.O());
  },
]);
