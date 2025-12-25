"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [596],
  {
    75024: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return N;
        },
      });
      var s = l(52322),
        a = l(84012),
        n = l(38082),
        i = l(1425),
        x = l(49442),
        c = l(40320),
        r = l(15514),
        o = l(96577),
        d = l.n(o),
        m = l(2784),
        p = l(26691),
        h = l(5632),
        g = l(60455);
      function f() {
        let { t: e } = (0, a.$)(),
          {
            disconnect: t,
            walletIcon: l,
            walletAddressShort: n,
            chainIcon: i,
          } = (0, c.hm)(),
          { purchasedToken: x } = (0, c.ZN)();
        return (0, s.jsxs)("div", {
          className: "flex flex-col",
          children: [
            (0, s.jsx)("div", {
              className:
                "flex flex-row justify-between items-center py-4 px-6 max-lg:px-4 bg-[#FFF593] border-b-[3px] border-b-black",
              children: (0, s.jsxs)("div", {
                className: "flex flex-row items-center gap-3",
                children: [
                  (0, s.jsx)("div", {
                    className: "relative",
                    children: (0, s.jsx)(d(), {
                      src: i,
                      width: 32,
                      height: 32,
                      alt: "Bitcoin Pepe",
                    }),
                  }),
                  (0, s.jsx)("span", {
                    className: "underline  text-lg",
                    children: n,
                  }),
                ],
              }),
            }),
            (0, s.jsxs)("div", {
              className: "flex flex-col py-4 px-6 max-lg:px-4",
              children: [
                (0, s.jsx)("span", {
                  className: "text-lg font-semibold capitalize",
                  children: e("dex.total"),
                }),
                (0, s.jsxs)("div", {
                  className: " text-[70px] font-bold leading-none",
                  children: [
                    (0, s.jsx)("b", { children: x }),
                    (0, s.jsx)("span", {
                      className: "text-base font-semibold ml-2",
                      children: "BITPEPE",
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "p-6 max-lg:px-4 bg-black text-white",
              children: [
                (0, s.jsx)(v, {}),
                (0, s.jsx)(g.Z, {
                  theme: "cyan",
                  className:
                    "w-full h-[66px] text-[26px] text-black font-bold uppercase rounded-md",
                  onClick: () => {
                    t();
                  },
                  children: e("connectBtn.disconnect"),
                }),
              ],
            }),
          ],
        });
      }
      let u = () => {
          let e = (0, h.useRouter)().query.r;
          return (0, c.r0)(e), null;
        },
        v = () => {
          let { referralState: e, refreshState: t } = (0, c.p$)(),
            { purchasedToken: l } = (0, c.ZN)(),
            { t: n } = (0, a.$)();
          return (
            (0, m.useEffect)(() => {
              t();
            }, []),
            (0, s.jsxs)("div", {
              className: "w-full",
              children: [
                (0, s.jsx)("p", {
                  className:
                    "mb-3 text-lg leading-none font-semibold capitalize",
                  children: n("referral.text"),
                }),
                (0, s.jsxs)("div", {
                  suppressHydrationWarning: !0,
                  className:
                    "w-full h-[70px] px-4 flex flex-row items-center relative border border-white rounded-md",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex flex-col flex-1 ",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "font-semibold text-lg capitalize text-primary",
                          children: n("referral.link"),
                        }),
                        (0, s.jsxs)("div", {
                          className: "text-sm font-semibold",
                          children: [
                            window.location.origin,
                            "/?r=",
                            null == e ? void 0 : e.referralKey,
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "w-[32px] h-[32px] flex justify-center items-center rounded-full  cursor-pointer",
                      onClick: () => {
                        p.g.success("Copied to clipboard"),
                          navigator.clipboard.writeText(
                            ""
                              .concat(window.location.origin, "/?r=")
                              .concat(null == e ? void 0 : e.referralKey)
                          );
                      },
                      children: (0, s.jsx)("svg", {
                        width: "14",
                        height: "15",
                        viewBox: "0 0 14 15",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "fill-primary",
                        children: (0, s.jsx)("path", {
                          d: "M11.4611 3.29995H10.2665V1.43332C10.2665 1.31075 10.2423 1.18939 10.1954 1.07615C10.1485 0.962917 10.0798 0.860029 9.99313 0.773362C9.90646 0.686696 9.80357 0.617948 9.69034 0.571045C9.5771 0.524141 9.45574 0.5 9.33317 0.5H0.933317C0.685786 0.5 0.448393 0.598331 0.273362 0.773362C0.0983312 0.948393 0 1.18579 0 1.43332V9.83317C0 10.0807 0.0983312 10.3181 0.273362 10.4931C0.448393 10.6682 0.685786 10.7665 0.933317 10.7665H1.86663V12.8665C1.8666 13.0833 1.90976 13.298 1.99359 13.498C2.07741 13.698 2.20023 13.8794 2.35487 14.0314C2.50952 14.1834 2.69289 14.3031 2.8943 14.3836C3.0957 14.464 3.31111 14.5035 3.52794 14.4998H11.4611C11.8894 14.4924 12.2977 14.3171 12.598 14.0116C12.8983 13.7061 13.0665 13.2948 13.0664 12.8665V4.93326C13.0641 4.50561 12.8951 4.09573 12.5953 3.79073C12.2956 3.48573 11.8887 3.30966 11.4611 3.29995ZM11.6945 12.8665C11.6945 12.9283 11.6699 12.9877 11.6261 13.0314C11.5824 13.0752 11.523 13.0998 11.4611 13.0998H3.52794C3.46606 13.0998 3.40671 13.0752 3.36295 13.0314C3.31919 12.9877 3.29461 12.9283 3.29461 12.8665V10.7665H9.33317C9.5807 10.7665 9.8181 10.6682 9.99313 10.4931C10.1682 10.3181 10.2665 10.0807 10.2665 9.83317V4.69993H11.4331C11.4943 4.70224 11.5523 4.72756 11.5956 4.77083C11.6388 4.8141 11.6642 4.87211 11.6665 4.93326L11.6945 12.8665Z",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-row items-center justify-between mb-3 mt-3",
                  children: [
                    (0, s.jsx)("div", {
                      className: "text-lg capitalize font-semibold",
                      children: n("referral.reward"),
                    }),
                    (0, s.jsxs)("div", {
                      className: "text-lg  font-semibold",
                      children: [
                        (0, s.jsx)("span", {
                          className: "text-primary",
                          children: (null == e ? void 0 : e.earnedToken) || "0",
                        }),
                        " ",
                        "BITPEPE",
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      var w = l(53936),
        b = l(32899),
        j = l(51763);
      function N(e) {
        let { className: t } = e,
          {
            resetNetwork: l,
            walletAddressShort: o,
            isValidNetwork: p,
            chainIcon: h,
            connect: v,
            disconnectETH: N,
            disconnectSOL: y,
          } = (0, c.hm)(),
          { purchasedToken: k, currentTokenInfo: C } = (0, c.ZN)(),
          { isWrongNetWork: E } = (0, r.k)();
        (0, n.dD)();
        let { t: B, i18n: F } = (0, a.$)(),
          L = ["fr", "ro", "sk", "pt", "th"].includes(F.language),
          [z, Z] = (0, m.useState)(!1);
        return ((0, m.useEffect)(() => {
          let e = () => Z(!0);
          return (
            n.TB.addListener("OpenMenu", e),
            () => {
              n.TB.removeListener("OpenMenu", e);
            }
          );
        }, []),
        E || !p)
          ? (0, s.jsxs)("button", {
              className: (0, j.cn)(
                "max-lg:w-full bg-cyan flex-center overflow-hidden px-2 md:px-4 hover:opacity/80 cursor-pointer rounded-full ".concat(
                  L
                    ? "text-[10px] max-md:text-[12px]"
                    : "text-[13px] font-semibold max-md:text-[12px]",
                  " uppercase text-white transition-all duration-200 h-[36px]"
                ),
                "flex items-center",
                t
              ),
              suppressHydrationWarning: !0,
              onClick: () => {
                if (!p) {
                  l();
                  return;
                }
                (null == C ? void 0 : C.chain) === "SOL"
                  ? (N(), v("sol"))
                  : (null == C ? void 0 : C.chain) === "ETH" ||
                    (null == C ? void 0 : C.chain) === "BSC"
                  ? (y(), v("eth"))
                  : (null == C ? void 0 : C.chain) === "CARD" &&
                    (y(), v("eth"));
              },
              children: [
                (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  className: "mr-[8px]",
                  children: (0, s.jsx)("path", {
                    d: "M16 7.77153C16 7.987 15.9128 8.19364 15.7576 8.34599C15.6024 8.49835 15.3919 8.58394 15.1724 8.58394H13.4772L10.9469 13.5511C10.8781 13.686 10.7725 13.7994 10.6418 13.8787C10.5111 13.958 10.3605 14 10.2069 14H10.1655C10.005 13.992 9.85038 13.9384 9.72044 13.8455C9.5905 13.7527 9.4909 13.6248 9.43379 13.4774L5.72414 3.92275L3.78759 8.11004C3.72151 8.25156 3.6154 8.37147 3.48188 8.45548C3.34837 8.5395 3.19307 8.58409 3.03448 8.58394H0.827586C0.608097 8.58394 0.397597 8.49835 0.242394 8.34599C0.0871919 8.19364 0 7.987 0 7.77153C0 7.55607 0.0871919 7.34943 0.242394 7.19708C0.397597 7.04472 0.608097 6.95913 0.827586 6.95913H2.50138L5.04 1.47537C5.1077 1.32961 5.21779 1.20675 5.35643 1.12224C5.49507 1.03773 5.65606 0.995342 5.81917 1.00041C5.98228 1.00547 6.14022 1.05776 6.27314 1.1507C6.40606 1.24364 6.50802 1.37309 6.56621 1.52276L10.3097 11.1674L12.2255 7.40595C12.2946 7.27146 12.4003 7.15845 12.531 7.07955C12.6617 7.00065 12.8121 6.95896 12.9655 6.95913H15.1724C15.3919 6.95913 15.6024 7.04472 15.7576 7.19708C15.9128 7.34943 16 7.55607 16 7.77153Z",
                    fill: "white",
                  }),
                }),
                B("connectBtn.wrongNetwork"),
              ],
            })
          : (0, s.jsxs)(s.Fragment, {
              children: [
                o
                  ? (0, s.jsx)(s.Fragment, {
                      children: (0, s.jsxs)("div", {
                        className: "relative",
                        children: [
                          (0, s.jsxs)(g.Z, {
                            className: (0, j.cn)(
                              "rounded-full max-lg:w-full flex-nowrap",
                              t
                            ),
                            onClick: () => Z(!z),
                            children: [
                              (0, s.jsx)(d(), {
                                src: h,
                                alt: "Bitcoin Pepe",
                                width: 24,
                                height: 24,
                                className:
                                  "h-[24px] w-[24px] max-lg:h-[18px] max-lg:w-[18px] mr-1",
                                suppressHydrationWarning: !0,
                              }),
                              o,
                            ],
                          }),
                          z
                            ? (0, s.jsx)(w.Z, {
                                show: z,
                                onClose: () => Z(!1),
                                closeClassName: "top-6",
                                children: (0, s.jsx)(f, {}),
                              })
                            : null,
                        ],
                      }),
                    })
                  : (0, s.jsx)(i.v, {
                      children: (e) => {
                        let { open: l, close: a } = e;
                        return (0, s.jsxs)("div", {
                          className: "relative  max-lg:w-full",
                          children: [
                            (0, s.jsx)(i.v.Button, {
                              className: "w-full",
                              children: (0, s.jsx)(g.Z, {
                                theme: "cyan",
                                className: (0, j.cn)(
                                  "max-lg:w-full uppercase whitespace-nowrap",
                                  L && "!text-[11px]",
                                  t
                                ),
                                children: B("connectBtn.connect"),
                              }),
                            }),
                            (0, s.jsx)(x.u, {
                              as: m.Fragment,
                              enter: "transition ease-out duration-100",
                              enterFrom: "transform opacity-0 scale-95",
                              enterTo: "transform opacity-100 scale-100",
                              leave: "transition ease-in duration-75",
                              leaveFrom: "transform opacity-100 scale-100",
                              leaveTo: "transform opacity-0 scale-95",
                              children: (0, s.jsx)(i.v.Items, {
                                className:
                                  "absolute right-0 top-[33px] lg:min-w-[375px]  max-lg:fixed max-lg:w-full max-lg:flex max-lg:justify-center outline-none",
                                children: (0, s.jsx)(b.m, {
                                  onClose: () => a(),
                                }),
                              }),
                            }),
                          ],
                        });
                      },
                    }),
                (0, s.jsx)(u, {}),
              ],
            });
      }
    },
    10596: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return k;
        },
      });
      var s = l(52322),
        a = l(60455),
        n = l(20516),
        i = l(51763),
        x = l(7319),
        c = l(20034),
        r = l(39097),
        o = l.n(r),
        d = l(5632),
        m = l(2784),
        p = l(39128),
        h = l(89316),
        g = l(75024),
        f = l(84012),
        u = l(39206);
      function v(e) {
        let t = { svg: "/flag/us.png", name: "English", code: "EN" };
        return (
          u.M.forEach((l) => {
            l.code == e &&
              ((t.svg = l.roundFlag), (t.name = l.name), (t.code = l.code));
          }),
          t
        );
      }
      function w(e) {
        let { isLight: t, className: l } = e,
          { i18n: n } = (0, f.$)(),
          x = n.language,
          [c, r] = (0, m.useState)(!1);
        return (
          (0, m.useEffect)(() => {
            let e = (e) => {
              let t = document.querySelector(".J_LangList"),
                l = e.target;
              !c ||
                (null == t ? void 0 : t.contains(e.target)) ||
                (null == l ? void 0 : l.closest(".J_LangBtn")) ||
                r(!1);
            };
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [c]),
          (0, s.jsxs)("div", {
            className: "relative",
            children: [
              (0, s.jsx)(a.Z, {
                theme: "white",
                className: "J_LangBtn ".concat(l),
                onClick: () => {
                  r(!c);
                },
                children: v(x).name,
              }),
              (0, s.jsx)("div", {
                className: (0, i.cn)(
                  "absolute max-md:fixed right-0 max-md:w-[100vw] outline-none  mt-2 w-[170px] divide-gray-100 border-[3px] border-black rounded-[10px] bg-white text-black shadow-lg",
                  c ? "block" : "hidden"
                ),
                children: (0, s.jsx)(u.q, {}),
              }),
            ],
          })
        );
      }
      var b = l(81395),
        j = l(40320),
        N = l(77441),
        y = l(37457),
        k = (e) => {
          let { className: t } = e,
            { t: l, i18n: r } = (0, c.$G)(),
            f = ["ja", "es", "vn", "tr"].includes(r.language),
            k = ["de", "fr", "ro", "nl", "es", "sk"].includes(r.language),
            C = (0, x.Z)(),
            E = [
              { name: l("about"), id: "about" },
              { name: l("roadmap"), id: "roadmap" },
              { name: l("howToBuy"), id: "howToBuy" },
              { name: l("tokenomics"), id: "tokenomics" },
              { name: l("giveaway"), id: "giveaway" },
              { name: l("meetTheTeam"), id: "team" },
            ];
          (0, d.useRouter)().pathname;
          let [B, F] = (0, m.useState)(!1),
            [L, z] = (0, m.useState)(!1),
            Z = () => {
              F(!B);
            };
          (0, m.useEffect)(
            () => (
              B
                ? ((document.documentElement.style.overflow = "hidden"),
                  (document.body.style.overflow = "hidden"))
                : ((document.documentElement.style.overflow = ""),
                  (document.body.style.overflow = "")),
              () => {
                (document.documentElement.style.overflow = ""),
                  (document.body.style.overflow = "");
              }
            ),
            [B]
          );
          let H = r.language,
            { currentPriceNumber: P } = (0, j.ZN)(),
            S = (0, N.m)(),
            { listingAnnounced: T, endTime: D } = (0, y.G)((e) => [
              e.listingAnnounced,
              e.endTime,
            ]);
          return (
            D.diff(S, "ms"),
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("header", {
                  className: (0, i.cn)(
                    "fixed top-0 left-0 z-[100] w-full",
                    C.y > 0 ? "backdrop-blur-lg" : ""
                  ),
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "flex items-center justify-center max-lg:flex-col text-[20px] max-lg:text-[3.2vw] max-lg:leading-5 font-bold lg:gap-2 h-[48px] max-lg:h-[50px] border-b-[3px] text-black border-black bg-gradient-to-b from-[#FBFECE] to-[#F6FF00]",
                      style: {padding: "0 10px"},
                      children: (0, s.jsx)("span", {
                        className: "flex items-center gap-2 justify-center",
                        children: (0, s.jsxs)("span", {
                          className: "flex items-center gap-2 justify-center",
                          children: [
                            T
                              ? l("banner.title2")
                                  .replace("0.0326", P.toString())
                                  .replace(
                                    "0,0326",
                                    P.toString().replace(".", ",")
                                  )
                              : l("banner.text1"),
                            null,
                          ],
                        }),
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: (0, i.cn)(
                        "px-[2.31vw] 3xl:px-[40px] max-lg:px-3 flex items-center justify-between h-[4.63vw] 3xl:h-[80px] max-lg:h-[60px] w-full ",
                        t
                      ),
                      children: [
                        (0, s.jsx)(o(), {
                          href: "/",
                          className:
                            " cursor-pointer flex w-[8vw] 3xl:w-[145px] max-lg:w-[145px] shrink-0",
                          children: (0, s.jsx)(h.Z, {
                            className: "w-full shrink-0",
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: (0, i.cn)(
                            "flex-1 flex items-center justify-center gap-3 lg:gap-[2.31vw] 3xl:gap-10 h-full capitalize font-bold max-lg:hidden",
                            f && "gap-[1.62vw] 3xl:gap-7",
                            k && "gap-[0.92vw] 3xl:gap-4"
                          ),
                          children: E.map((e) =>
                            (0, s.jsx)(
                              o(),
                              {
                                className: (0, i.cn)(
                                  "relative text-[0.984vw] 3xl:text-[17px] cursor-pointer hover:text-primary",
                                  f && "text-[0.92vw] 3xl:text-base",
                                  k && "text-[0.81vw] 3xl:text-sm"
                                ),
                                href: "/#".concat(e.id),
                                onClick: () => {},
                                children: l(e.name),
                              },
                              e.id
                            )
                          ),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex justify-end items-center gap-[0.92vw] 3xl:gap-4 h-[2.66vw] 3xl:h-[46px]",
                          children: [
                            (0, s.jsx)("a", {
                              href: "https://x.com/BitcoinpepeethX",
                              target: "_blank",
                              className: "h-full max-lg:hidden",
                              children: (0, s.jsx)(a.Z, {
                                theme: "white",
                                className:
                                  "w-[2.66vw] 3xl:w-[46px] h-full px-0",
                                children: (0, s.jsx)(p.kL, {
                                  className:
                                    "fill-black hover:fill-black w-[50%] h-auto",
                                }),
                              }),
                            }),
                            (0, s.jsx)("a", {
                              href: "https://t.me/bitcoinpepe_group",
                              target: "_blank",
                              className: "h-full max-lg:hidden",
                              children: (0, s.jsx)(a.Z, {
                                theme: "white",
                                className:
                                  "w-[2.66vw] 3xl:w-[46px] px-0 h-full max-lg:hidden",
                                children: (0, s.jsx)(p.Yi, {
                                  className:
                                    "fill-black hover:fill-black w-[50%] h-auto",
                                }),
                              }),
                            }),
                            (0, s.jsx)(o(), {
                              href: "/staking",
                              className: "h-full",
                              children: (0, s.jsx)(a.Z, {
                                theme: "white",
                                className: (0, i.cn)(
                                  "text-[1.04vw] 3xl:text-lg px-2 xl:px-3 2xl:px-4 h-full max-lg:hidden",
                                  f && "text-[0.92vw] 3xl:text-base",
                                  k && "text-[0.81vw] 3xl:text-sm"
                                ),
                                children: l("staking"),
                              }),
                            }),
                            (0, s.jsx)(o(), {
                              href: "https://docs.bitpepe.ink",
                              target: "_blank",
                              className: "h-full max-lg:hidden",
                              children: (0, s.jsx)(a.Z, {
                                theme: "white",
                                className: (0, i.cn)(
                                  "text-[1.04vw] 3xl:text-lg px-2 xl:px-3 2xl:px-4 h-full",
                                  f && "text-[0.92vw] 3xl:text-base",
                                  k && "text-[0.81vw] 3xl:text-sm"
                                ),
                                children: l("documentation"),
                              }),
                            }),
                            (0, s.jsxs)(n.Z, {
                              delay: 0,
                              children: [
                                (0, s.jsx)(g.Z, {
                                  className: (0, i.cn)(
                                    "text-[1.04vw] 3xl:text-lg px-2 xl:px-3 2xl:px-4 h-[2.66vw] 3xl:h-[46px]",
                                    f &&
                                      "text-[0.81vw] 3xl:text-sm max-w-[180px]",
                                    k &&
                                      "text-[0.69vw] 3xl:text-xs max-w-[180px]"
                                  ),
                                }),
                              ],
                            }),
                            (0, s.jsx)("button", {
                              id: "mobile-menu-button",
                              className:
                                "focus:outline-none hidden max-lg:block ml-2",
                              onClick: Z,
                              children: (0, s.jsxs)("svg", {
                                width: "16",
                                height: "10",
                                viewBox: "0 0 16 10",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  (0, s.jsx)("rect", {
                                    width: "16",
                                    height: "2",
                                    rx: "1",
                                    fill: "white",
                                  }),
                                  (0, s.jsx)("rect", {
                                    y: "8",
                                    width: "16",
                                    height: "2",
                                    rx: "1",
                                    fill: "white",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                B &&
                  (0, s.jsxs)("div", {
                    className:
                      "fixed left-0 top-0 bottom-0 overflow-auto z-[10001] bg-black overflow-x-hidden overflow-y-scroll w-full flex flex-col",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "flex items-center justify-between px-3 h-[80px]",
                        children: [
                          (0, s.jsx)(o(), {
                            href: "/",
                            children: (0, s.jsx)(h.Z, {
                              className: "w-[145px] shrink-0",
                            }),
                          }),
                          (0, s.jsx)("button", {
                            className: "focus:outline-none",
                            onClick: Z,
                            children: (0, s.jsx)("svg", {
                              width: "32",
                              height: "32",
                              viewBox: "0 0 32 32",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, s.jsx)("path", {
                                fillRule: "evenodd",
                                "clip-rule": "evenodd",
                                d: "M11.1212 9.70696C10.7306 9.31643 10.0975 9.31643 9.70696 9.70696C9.31643 10.0975 9.31643 10.7306 9.70696 11.1212L14.6568 16.071L9.70711 21.0208C9.31658 21.4113 9.31658 22.0445 9.70711 22.435C10.0976 22.8255 10.7308 22.8255 11.1213 22.435L16.071 17.4853L21.0207 22.4349C21.4112 22.8254 22.0444 22.8254 22.4349 22.4349C22.8254 22.0444 22.8254 21.4112 22.4349 21.0207L17.4853 16.071L22.435 11.1213C22.8256 10.7308 22.8256 10.0976 22.435 9.70706C22.0445 9.31654 21.4113 9.31654 21.0208 9.70706L16.071 14.6568L11.1212 9.70696Z",
                                fill: "white",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "px-6 flex-1 overflow-y-auto",
                        children: [
                          (0, s.jsx)(g.Z, { className: "h-[48px]" }),
                          (0, s.jsxs)("div", {
                            className:
                              "flex flex-col text-primary capitalize gap-4 text-[28px] max-xxxs:text-2xl font-bold leading-[1.5] mt-5",
                            children: [
                              E.map((e) =>
                                (0, s.jsx)(
                                  o(),
                                  { href: "/#".concat(e.id), children: e.name },
                                  e.id
                                )
                              ),
                              (0, s.jsx)(o(), {
                                href: "/staking",
                                children: l("staking"),
                              }),
                              (0, s.jsx)("a", {
                                href: "https://docs.bitpepe.ink",
                                target: "_blank",
                                children: l("documentation"),
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: "w-full h-px bg-white my-5",
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "flex items-center justify-center gap-8 mt-8 pb-4",
                            children: [
                              (0, s.jsx)(a.Z, {
                                theme: "white",
                                className: "!size-[48px] px-0 bg-[#E3E3E3]",
                                onClick: () => {
                                  window.open(
                                    "https://x.com/BitcoinpepeethX",
                                    "_blank"
                                  );
                                },
                                children: (0, s.jsx)(p.kL, {
                                  className:
                                    "fill-black hover:fill-black w-[21px]",
                                }),
                              }),
                              (0, s.jsx)(a.Z, {
                                theme: "white",
                                className: "!size-[48px] px-0 bg-[#E3E3E3]",
                                onClick: () => {
                                  window.open(
                                    "https://t.me/bitcoinpepe_group",
                                    "_blank"
                                  );
                                },
                                children: (0, s.jsx)(p.Yi, {
                                  className:
                                    "fill-black hover:fill-black w-[23px]",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            })
          );
        };
    },
    39206: function (e, t, l) {
      l.d(t, {
        M: function () {
          return c;
        },
        q: function () {
          return r;
        },
      });
      var s = l(52322),
        a = l(96577),
        n = l.n(a),
        i = l(84012),
        x = l(5632);
      let c = [
        {
          name: "English",
          code: "en",
          flag: "/flag/us.png",
          roundFlag: "/flag/us.png",
        },
        {
          name: "中文(简体)",
          code: "zh",
          flag: "/flag/chinese.svg",
          roundFlag: "/flag/chinese.svg",
        },
        {
          name: "Deutsch",
          code: "de",
          flag: "/flag/deutsch.svg",
          roundFlag: "/flag/deutsch.svg",
        },
        {
          name: "Nederlands",
          code: "nl",
          flag: "/flag/nederlands.svg",
          roundFlag: "/flag/nederlands.svg",
        },
        {
          name: "日本語",
          code: "ja",
          flag: "/flag/japanese.svg",
          roundFlag: "/flag/japanese.svg",
        },
        {
          name: "한국어",
          code: "ko",
          flag: "/flag/korean.svg",
          roundFlag: "/flag/korean.svg",
        },
        {
          name: "Fran\xe7ais",
          code: "fr",
          flag: "/flag/fran\xe7ais.svg",
          roundFlag: "/flag/fran\xe7ais.svg",
        },
        {
          name: "Espa\xf1ol",
          code: "es",
          flag: "/flag/espa\xf1ol.svg",
          roundFlag: "/flag/espa\xf1ol.svg",
        },
        {
          name: "Polski",
          code: "pl",
          flag: "/flag/polish.svg",
          roundFlag: "/flag/polish.svg",
        },
        {
          code: "ro",
          flag: "/flag/romanian.png",
          roundFlag: "/flag/romanian.png",
          name: "Rom\xe2nă",
        },
        {
          name: "Tiếng Việt",
          code: "vn",
          flag: "/flag/vt.png",
          roundFlag: "/flag/vt.png",
        },
        {
          name: "Slovaški",
          code: "sk",
          flag: "/flag/sk.png",
          roundFlag: "/flag/sk.png",
        },
        {
          name: "Portugu\xeas",
          code: "pt",
          flag: "/flag/pt.png",
          roundFlag: "/flag/pt.png",
        },
        {
          name: "T\xfcrkiye",
          code: "tr",
          flag: "/flag/turk.svg",
          roundFlag: "/flag/turk.svg",
        },
        {
          name: "แบบไทย",
          flag: "/flag/thai.svg",
          code: "th",
          roundFlag: "/flag/thai.svg",
        },
      ];
      function r(e) {
        let { className: t, inNavbar: l = !1 } = e,
          { i18n: a } = (0, i.$)(),
          r = a.language,
          o = (0, x.useRouter)()
            .asPath.split("/")
            .filter((e) => "" !== e),
          d = c.some((e) => o.includes(e.code))
            ? o.slice(1).join("/")
            : o.slice(0).join("/");
        return (0, s.jsx)("div", {
          className: "J_LangList py-[5px] flex flex-col font-apple "
            .concat("gap-0", " ")
            .concat(t),
          children: c.map((e, t) =>
            (0, s.jsxs)(
              "a",
              {
                href: ""
                  .concat("en" === e.code ? "/en" : "/".concat(e.code))
                  .concat(d ? "/".concat(d) : ""),
                className:
                  "flex justify-between items-center text-sm leading-[2.55vw] 3xl:leading-[44px] max-lg:leading-[40px]  ".concat(
                    r == e.code
                      ? "bg-[#E2E2E2] text-black font-bold"
                      : " hover:bg-[#E2E2E2]",
                    "  hover:cursor-pointer px-[14px]"
                  ),
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex items-center ".concat(
                      l ? "gap-3" : "gap-2"
                    ),
                    children: [
                      (0, s.jsx)(n(), {
                        src: e.flag,
                        width: 24,
                        height: 24,
                        alt: e.code,
                        className: "h-[12px] w-[16px] ",
                      }),
                      (0, s.jsx)("span", {
                        className: "font-semibold",
                        children: e.name,
                      }),
                    ],
                  }),
                  r === e.code &&
                    (0, s.jsx)("svg", {
                      width: "20",
                      height: "15",
                      viewBox: "0 0 20 15",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, s.jsx)("path", {
                        d: "M1 7.2069L6.86046 13L19 1",
                        stroke: "#38E819",
                        "stroke-width": "2",
                      }),
                    }),
                ],
              },
              t
            )
          ),
        });
      }
    },
    32899: function (e, t, l) {
      l.d(t, {
        m: function () {
          return c;
        },
      });
      var s = l(52322),
        a = l(40320),
        n = l(96577),
        i = l.n(n),
        x = l(84012);
      function c(e) {
        let { onClose: t } = e,
          { t: l } = (0, x.$)(),
          { connect: n } = (0, a.hm)();
        return (0, s.jsxs)("div", {
          className:
            "w-full bg-white rounded-[10px] border-[3px] border-black my-3 p-[1.39vw] 3xl:p-6 max-lg:p-4",
          style: { boxShadow: "0 0 10px rgba(0,0,0,0.5)" },
          children: [
            (0, s.jsx)("h5", {
              className:
                "font-bold text-[1.28vw] 3xl:text-[22px] max-lg:text-xl uppercase text-center text-black ",
              children: l("connectBtn.connect"),
            }),
            (0, s.jsxs)("div", {
              className: "flex items-center gap-4 mt-4",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-row justify-between items-center cursor-pointer flex-1 p-[0.93vw] 3xl:p-4 max-lg:p-3 bg-black border-[2px] border-black rounded-md  text-white hover:opacity-80",
                  onClick: (e) => {
                    n("eth"), t();
                  },
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "font-bold text-[1.39vw] 3xl:text-2xl max-lg:text-xl",
                          children: "Ethereum",
                        }),
                        (0, s.jsx)("span", {
                          className:
                            "text-[0.93vw] 3xl:text-base max-lg:text-sm leading-none font-semibold",
                          children: "ETH",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex  items-center",
                      children: [
                        (0, s.jsx)(i(), {
                          src: "/chain-icon/eth.svg",
                          width: 50,
                          height: 50,
                          alt: "Bitcoin Pepe",
                          className:
                            "mr-[-10px]",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    77441: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return _;
        },
        m: function () {
          return O;
        },
      });
      var s = l(52322),
        a = l(51763),
        n = l(28879),
        i = l.n(n),
        x = l(64989),
        c = l.n(x),
        r = l(10264),
        o = l.n(r),
        d = l(20034),
        m = l(96577),
        p = l.n(m),
        h = l(2784),
        g = l(53936),
        f = l(84012);
      l(34244);
      var u = l(30686);
      l(72579), l(86152), l(1842), l(12436), l(48537), new u.Z();
      var v = l(26691);
      function w(e) {
        let { isOpen: t, setIsOpen: l } = e,
          a = "0x8075D16bB9Ffb9a3562572ABbA84F9Eb0A18B66e",
          { t: n } = (0, f.$)();
        return (0, s.jsx)(g.Z, {
          show: t,
          onClose: function () {
            l(!1);
          },
          width: 375,
          children: (0, s.jsxs)("div", {
            className: "p-6 bg-[#fff]",
            children: [
              (0, s.jsx)("div", {
                className: "flex justify-between ",
                children: (0, s.jsxs)("div", {
                  className: "flex items-center gap-[12px]",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "w-[40px] h-[40px] relative mr-3",
                      children: [
                        (0, s.jsx)(p(), {
                          src: "/images/logo-pepe.png",
                          width: 40,
                          height: 40,
                          alt: "Bitcoin Pepe",
                          className: "",
                        }),
                        (0, s.jsx)(p(), {
                          src: "/chains/ethereum.svg",
                          width: 20,
                          height: 20,
                          alt: "Bitcoin Pepe",
                          className:
                            "absolute bottom-[-3px] right-[-3px]  border-[1px] border-solid border-white rounded-full",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex flex-col items-start",
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-2xl font-semibold uppercase",
                          children: "BITPEPE",
                        }),
                        (0, s.jsxs)("p", {
                          className:
                            "flex items-center text-lg cursor-pointer gap-2 font-semibold",
                          onClick: () => {
                            navigator.clipboard.writeText(a),
                              v.g.success(n("copied"));
                          },
                          children: [
                            (function (e) {
                              let t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 4;
                              return ""
                                .concat(e.slice(0, t + 2), "...")
                                .concat(e.slice(-t));
                            })(a),
                            (0, s.jsxs)("svg", {
                              width: "14",
                              height: "13",
                              viewBox: "0 0 14 13",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: [
                                (0, s.jsx)("rect", {
                                  x: "0.5",
                                  y: "3.90002",
                                  width: "8.6",
                                  height: "8.6",
                                  stroke: "black",
                                }),
                                (0, s.jsx)("path", {
                                  d: "M4.79999 3.5V1H13.2V9.4H9.50018",
                                  stroke: "black",
                                  "stroke-linecap": "square",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                className: "mt-4 flex flex-col gap-4",
                children: (0, s.jsxs)("a", {
                  className:
                    "flex h-[64px] items-center justify-between w-full hover:opacity-90  px-4 bg-black rounded-md text-white",
                  href: "https://etherscan.io/token/0x8075D16bB9Ffb9a3562572ABbA84F9Eb0A18B66e",
                  target: "_blank",
                  children: [
                    (0, s.jsx)("p", {
                      className: "uppercase text-xl",
                      children: "Etherscan",
                    }),
                    (0, s.jsx)("button", {
                      className:
                        "size-8 rounded-full bg-white/10 flex items-center justify-center",
                      children: (0, s.jsx)("svg", {
                        width: "11",
                        height: "11",
                        viewBox: "0 0 11 11",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                          d: "M1 10L9 2M4 1H7.1C8.6 1 10 2.4 10 4V7",
                          stroke: "white",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                className: "text-[#525252] font-semibold text-sm mt-3",
                children: n("dex.coinDialog.tip"),
              }),
              (0, s.jsx)("div", {
                className: "text-[#FF5E00] font-semibold text-sm mt-1",
                children: n("dex.coinDialog.warn"),
              }),
            ],
          }),
        });
      }
      var b = l(1425),
        j = l(49442),
        N = l(40320),
        y = l(15514),
        k = l(32899),
        C = l(23981),
        E = l(88724),
        B = l(60455);
      function F(e) {
        var t;
        let { isOpen: l, setIsOpen: a } = e,
          { t: n } = (0, f.$)(),
          {
            currentTokenInfo: i,
            inputAmount: x,
            receiveAmount: c,
          } = (0, N.ZN)();
        function r() {
          a(!1);
        }
        let o = "0xcomingsoon";
        return (0, s.jsx)(j.u, {
          show: l,
          as: h.Fragment,
          children: (0, s.jsxs)(C.V, {
            as: "div",
            className: "absolute z-[1000]",
            onClose: r,
            children: [
              (0, s.jsx)(j.u.Child, {
                as: h.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, s.jsx)("div", {
                  className: "fixed inset-0 bg-black/70",
                }),
              }),
              (0, s.jsx)("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: (0, s.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: (0, s.jsx)(j.u.Child, {
                    as: h.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: (0, s.jsxs)(C.V.Panel, {
                      className:
                        "w-[500px] max-md:w-[95vw] transform overflow-hidden border-[3px] rounded-[12px] border-[#000] bg-[#FEDC45] align-middle shadow-xl transition-all z-20 relative before:absolute before:top-0 before:left-0 before:size-full before:bg-repeat before:bg-center before:opacity-30",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "relative z-[2]  flex items-center justify-between w-full h-[54px] max-xl:h-[54px] px-6 max-md:px-4",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-[#000] text-[28px] max-xl:text-[25px] font-freude",
                              children: n("dex.sendToBuy"),
                            }),
                            (0, s.jsx)(E.Z, {
                              className: "text-block cursor-pointer",
                              onClick: r,
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "relative z-[2] p-6 max-md:p-4 pt-2 max-md:pt-0 text-text",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-[20px] font-freude max-md:text-[16px] ",
                              children: n("dex.sendDesc"),
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "mt-4 px-4 py-4 flex flex-col gap-4 bg-black rounded-[15px]",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    " text-md break-all text-white font-freude text-center ",
                                  children: o,
                                }),
                                (0, s.jsx)(B.Z, {
                                  theme: "cyan",
                                  onClick: () => {
                                    v.g.success("Copied"),
                                      navigator.clipboard.writeText(o);
                                  },
                                  className:
                                    "bg-[#02FBFF] rounded-[12px] text-xl h-12 flex items-center justify-center text-black font-black",
                                  children: n("dex.copyAddress"),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "bg-black px-6 max-lg:px-4 pt-4 pb-6",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "rounded-lg py-4 px-6 max-lg:px-4 bg-white mt-4 text-black",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "text-sm font-semibold capitalize text-left",
                                  children: n("dex.youPay"),
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "flex justify-between items-center mt-4",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        "font-freude text-[40px] max-xl:text-[40px] leading-none",
                                      children: x || "0",
                                    }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "flex items-center gap-2 bg-[#E7E7E7] py-2 px-3 rounded-lg",
                                      children: [
                                        (0, s.jsx)(p(), {
                                          src:
                                            null !==
                                              (t =
                                                null == i ? void 0 : i.icon) &&
                                            void 0 !== t
                                              ? t
                                              : "",
                                          width: 35,
                                          height: 35,
                                          alt: "Bitcoin Pepe",
                                          priority: !0,
                                          className: "size-7",
                                        }),
                                        (0, s.jsx)("span", {
                                          className:
                                            "text-2xl font-freude uppercase",
                                          children:
                                            null == i ? void 0 : i.symbol,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "bg-white border-[3px] border-black rounded-[15px]  py-3 px-6 mt-4",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "text-[18px] max-xl:text-[10px] font-freude   capitalize",
                                  children: n("dex.youReceive"),
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "flex justify-between items-center mt-4",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        "font-freude text-[40px] max-xl:text-[40px] leading-none",
                                      children: c,
                                    }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "flex items-center gap-2 bg-[#E7E7E7] py-2 px-3 rounded-lg",
                                      children: [
                                        (0, s.jsx)(p(), {
                                          src: "/images/logo-pepe.png",
                                          alt: "Bitcoin Pepe",
                                          width: 35,
                                          height: 35,
                                          className: "size-7",
                                        }),
                                        (0, s.jsx)("span", {
                                          className:
                                            "text-2xl font-freude uppercase",
                                          children: "$BPEP",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var L = l(15107),
        z = l(81395),
        Z = l(83030);
      let H = [
        {
          icon: "/chain-icon/eth-blue.svg",
          circleIcon: "/chain-icon/eth.svg",
          whiteIcon: "/chain-icon/eth-white.svg",
          blackIcon: "/chain-icon/eth-black.svg",
          name: "ETH",
          fullName: "Ethereum Mainnet",
        },
        {
          icon: "/chain-icon/bsc-org.svg",
          circleIcon: "/chain-icon/bsc.svg",
          whiteIcon: "/chain-icon/bsc-white.svg",
          blackIcon: "/chain-icon/bsc-black.svg",
          name: "BSC",
          fullName: "BNB Smart Chain",
        },
        {
          icon: "/chain-icon/sol-color.svg",
          circleIcon: "/chain-icon/sol.svg",
          whiteIcon: "/chain-icon/sol-white.svg",
          blackIcon: "/chain-icon/sol-black.svg",
          name: "SOL",
          fullName: "Solana",
        },
        {
          icon: "/chain-icon/card-green.svg",
          circleIcon: "/chain-icon/card.svg",
          whiteIcon: "/chain-icon/card-white.svg",
          blackIcon: "/chain-icon/card-black.svg",
          name: "CARD",
          fullName: "Bank card",
        },
      ];
      function P(e) {
        let { disabled: t = !1, position: l = "pay" } = e,
          [a, n] = (0, h.useState)("all"),
          { t: i, i18n: x } = (0, f.$)(),
          c = ["fr", "ro", "pt", "de", "pl", "vn"].includes(x.language),
          [r, o] = (0, h.useState)(!1),
          {
            setSelectedTokenId: d,
            selectedTokenId: m,
            payMethodConfig: u,
          } = (0, N.ZN)(),
          w = u.find((e) => e.id === m),
          {
            solBalanceMap: b,
            ethBalanceMap: j,
            bscBalanceMap: y,
            solWalletAddr: k,
            ethWalletAddress: C,
          } = (0, N.ZN)();
        function E() {
          o(!1);
        }
        function F() {
          t || o(!0);
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            "pay" === l
              ? (0, s.jsx)("button", {
                  className:
                    "h-[2.43vw] 3xl:h-[42px] max-xl:h-[34px] flex items-center justify-center gap-1 px-3 max-lg:px-2 bg-black text-white rounded-md text-[0.868vw] 3xl:text-[15px] font-bold max-lg:text-xs transition-all duration-200 ".concat(
                      t
                        ? "opacity-100 cursor-not-allowed"
                        : " hover:opacity-80",
                      "   shadow-lg"
                    ),
                  onClick: F,
                  children: w
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, s.jsx)(p(), {
                                src: w.icon,
                                width: 20,
                                height: 20,
                                alt: w.name,
                                className:
                                  "size-[1.62vw] max-md:size-[25px] 3xl:size-7",
                              }),
                              "CARD" != w.chain &&
                                (0, s.jsx)(p(), {
                                  src: L.Cz[w.chain].iconW,
                                  width: 16,
                                  height: 16,
                                  alt: "Bitcoin Pepe",
                                  className:
                                    "absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover",
                                  priority: !0,
                                }),
                            ],
                          }),
                          (0, s.jsx)("span", {
                            className:
                              "text-[20px] max-md:text-[14px] ml-2 max-md:ml-1 font-black",
                            children: w.symbol,
                          }),
                          (0, s.jsx)(z.Z, {
                            className:
                              "ml-1 mr-[-3px] min-w-[14px] max-md:w-[10px]",
                          }),
                        ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)("span", {
                            className: "".concat(
                              c
                                ? "text-[1.04vw] 3xl:text-lg max-lg:text-xs"
                                : "text-[1.16vw] 3xl:text-xl max-lg:text-[14px]",
                              "  leading-none capitalize whitespace-nowrap"
                            ),
                            suppressHydrationWarning: !0,
                            children: i("dex.selectPayment"),
                          }),
                          (0, s.jsx)(z.Z, {
                            className:
                              "ml-1 mr-[-5px] min-w-[14px] max-md:w-[10px]",
                          }),
                        ],
                      }),
                })
              : (0, s.jsx)(B.Z, {
                  theme: "cyan",
                  size: "big",
                  className: "w-full max-lg:h-[56px] max-lg:text-xl",
                  disabled: t,
                  onClick: F,
                  children: i("connectBtn.disabledPayment"),
                }),
            (0, s.jsxs)(g.Z, {
              show: r,
              onClose: E,
              closeClassName: "fill-white top-8 max-lg:top-7",
              children: [
                (0, s.jsxs)("div", {
                  className: "bg-black py-5 px-6 max-lg:px-4",
                  children: [
                    (0, s.jsx)("h4", {
                      className:
                        "text-white text-center font-bold text-[22px] max-lg:text-[20px] uppercase",
                      children: i("dex.selectPayment.title"),
                    }),
                    (0, s.jsxs)("ul", {
                      className: "flex items-center gap-[5px] mt-5",
                      children: [
                        (0, s.jsx)(
                          "li",
                          {
                            className:
                              "flex items-center font-jersey20 justify-center h-[44px] gap-1 flex-1 cursor-pointer text-xl max-lg:text-base border rounded hover:opacity-80 ".concat(
                                "all" === a
                                  ? "bg-white text-black border-white"
                                  : "bg-black border-white text-white"
                              ),
                            onClick: () => {
                              n("all");
                            },
                            children: (0, s.jsx)("span", { children: "ALL" }),
                          },
                          "all"
                        ),
                        H.map((e) =>
                          (0, s.jsxs)(
                            "li",
                            {
                              className:
                                "flex items-center font-jersey20 justify-center h-[44px] gap-1 flex-1 cursor-pointer text-md max-lg:text-base border rounded hover:opacity-80 ".concat(
                                  "all" !== a && a.name === e.name
                                    ? "bg-white text-black border-white"
                                    : "bg-black border-white text-white"
                                ),
                              onClick: () => {
                                n(e);
                              },
                              children: [
                                (0, s.jsx)(p(), {
                                  src:
                                    "all" !== a && a.name === e.name
                                      ? e.blackIcon
                                      : e.icon,
                                  width: 20,
                                  height: 20,
                                  alt: e.name,
                                  className: "size-5",
                                }),
                                (0, s.jsx)("span", { children: e.name }),
                              ],
                            },
                            e.name
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "px-6 py-4 text-black max-lg:px-4 ".concat(
                    "all" === a ? "h-[399px] overflow-auto" : ""
                  ),
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "flex items-center justify-center font-bold capitalize text-xl",
                      children: "all" === a ? "" : a.fullName,
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex flex-col ".concat(
                        "all" === a ? "gap-0" : "gap-3"
                      ),
                      children: [
                        Object.keys(L.Cz).map((e, t) => {
                          if ("all" !== a && e !== a.name) return;
                          let l = "all" === a,
                            n = u.filter((t) => t.chain == e);
                          return (0, s.jsx)(
                            "div",
                            {
                              className: "",
                              children: n.map((t, a) => {
                                var n, i, x;
                                let c =
                                    "ETH" === e
                                      ? null === (n = j[t.token]) ||
                                        void 0 === n
                                        ? void 0
                                        : n.lamports
                                      : "BSC" === e
                                      ? null === (i = y[t.token]) ||
                                        void 0 === i
                                        ? void 0
                                        : i.lamports
                                      : null === (x = b[t.token]) ||
                                        void 0 === x
                                      ? void 0
                                      : x.lamports,
                                  r = c && c.gt(0),
                                  o = "SOL" === t.chain,
                                  h = "ETH" === t.chain || "BSC" === t.chain,
                                  g = (h && C && !r) || (o && k && !r);
                                return (0, s.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "flex flex-row gap-[16px] items-center "
                                        .concat(
                                          l
                                            ? "py-[7px] mb-2"
                                            : " py-[14px]  my-3 ",
                                          " px-[16px] rounded-[2px] cursor-pointer  "
                                        )
                                        .concat(
                                          g
                                            ? "opacity-50 !cursor-not-allowed"
                                            : m === t.id
                                            ? "bg-[#E2E2E2]"
                                            : "hover:bg-[#E2E2E2]"
                                        ),
                                    onClick: async () => {
                                      g || (d(t.id), E());
                                    },
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className: "w-[36px] h-[36px] relative",
                                        children: [
                                          (0, s.jsx)(p(), {
                                            src: t.icon,
                                            width: 36,
                                            height: 36,
                                            alt: "Bitcoin Pepe",
                                            priority: !0,
                                          }),
                                          "CARD" != e &&
                                            (0, s.jsx)(p(), {
                                              src: L.Cz[e].iconW,
                                              width: 16,
                                              height: 16,
                                              alt: "Bitcoin Pepe",
                                              className:
                                                "absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover",
                                              priority: !0,
                                            }),
                                        ],
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between flex-1",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className: "flex flex-col",
                                            children: (0, s.jsxs)("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                (0, s.jsx)("div", {
                                                  className:
                                                    "font-bold text-xl",
                                                  children: t.symbol,
                                                }),
                                                (0, s.jsx)("div", {
                                                  className:
                                                    "text-base font-semibold text-black/40",
                                                  children: t.name,
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, s.jsxs)("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              (0, s.jsx)("div", {
                                                className:
                                                  "text-base font-semibold text-black/40",
                                                children:
                                                  "USD" === t.symbol
                                                    ? ""
                                                    : (o && !k) || (h && !C)
                                                    ? ""
                                                    : c
                                                    ? c
                                                        .div(
                                                          10 **
                                                            (0, N.Ls)(t.token)
                                                        )
                                                        .toPrecision(3)
                                                        .toString()
                                                    : "0",
                                              }),
                                              m === t.id &&
                                                (0, s.jsx)(Z.Z, {
                                                  className: "size-5",
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  a
                                );
                              }),
                            },
                            e
                          );
                        }),
                        "all" !== a &&
                          "SOL" === a.name &&
                          (0, s.jsxs)("div", {
                            className:
                              "flex flex-row gap-[16px] items-center mb-3 px-[16px] rounded-[2px] cursor-pointer  hover:bg-[#E2E2E2]",
                            onClick: async () => {
                              E(),
                                v.g.info("CA copied!"),
                                navigator.clipboard.writeText(
                                  "0xcomingsoon"
                                );
                            },
                            children: [
                              (0, s.jsxs)("div", {
                                className: "w-[36px] h-[36px] relative",
                                children: [
                                  (0, s.jsx)(p(), {
                                    src: "/chains/sol.svg",
                                    width: 36,
                                    height: 36,
                                    alt: "Bitcoin Pepe",
                                    priority: !0,
                                  }),
                                  (0, s.jsx)(p(), {
                                    src: L.Cz.SOL.iconW,
                                    width: 16,
                                    height: 16,
                                    alt: "Bitcoin Pepe",
                                    className:
                                      "absolute bottom-[-2px] right-[-2px] border border-white rounded-full object-cover",
                                    priority: !0,
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "flex items-center justify-between flex-1",
                                children: (0, s.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className: "font-bold text-xl",
                                          children: "SOL",
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "text-base font-semibold text-black/40",
                                          children: "Contract Address",
                                        }),
                                        (0, s.jsx)(S, {}),
                                      ],
                                    }),
                                    (0, s.jsx)("div", {
                                      className:
                                        "text-xs font-semibold font-museo",
                                      children:
                                        "0xcomingsoon",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let S = () => {
        let { t: e } = (0, f.$)();
        return (0, s.jsxs)("div", {
          className: "relative group",
          children: [
            (0, s.jsxs)("svg", {
              width: "17",
              height: "17",
              viewBox: "0 0 17 17",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "cursor-pointer",
              onClick: (e) => {
                e.stopPropagation();
              },
              children: [
                (0, s.jsx)("circle", {
                  cx: "8.02777",
                  cy: "8.02777",
                  r: "8.02777",
                  fill: "black",
                }),
                (0, s.jsx)("path", {
                  d: "M8.71524 3.0509V4.4259H7.34024V3.0509H8.71524ZM10.0902 11.3009V12.6759H5.96524V11.3009H7.34024V7.1759H5.96524V5.8009H8.71524V11.3009H10.0902Z",
                  fill: "white",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className:
                "group-hover:block hidden absolute left-1/2 -translate-x-1/2 bottom-[30px] pt-[32px] z-[100]",
              children: [
                (0, s.jsx)("i", {
                  className:
                    "absolute rotate-45 size-[18px] border border-white border-l-0 border-t-0 bg-black bottom-[-9.5px]  left-1/2 -translate-x-1/2",
                }),
                (0, s.jsx)("div", {
                  className:
                    "relative flex flex-col w-[270px] max-md:w-[60vw] bg-black border border-white rounded-[10px] text-white p-4 text-[0.81vw] 3xl:text-sm max-lg:text-xs",
                  children: (0, s.jsx)("p", {
                    className: "leading-[1.3]",
                    children: e("contractAddressIntro"),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var T = l(39128);
      function D(e) {
        let { show: t, onClose: l } = e,
          { t: a } = (0, d.$G)();
        return (0, s.jsx)(g.Z, {
          show: t,
          onClose: l,
          width: 460,
          closeClassName: "top-4 !fill-white",
          panelClassName: "!border-none rounded-[13px]",
          children: (0, s.jsxs)("div", {
            className:
              "relative overflow-hidden bg-[url('/images/success-banner.png')] bg-cover bg-no-repeat rounded-[10px] px-6 pt-[100px] pb-[204px] ",
            children: [
              (0, s.jsxs)("div", {
                className: "text-white flex flex-col items-center",
                children: [
                  (0, s.jsxs)("h2", {
                    className:
                      "font-bold text-[24px]  leading-none uppercase max-lg:text-xl max-lg:leading-6",
                    children: [a("success.title"), "\uD83D\uDE80"],
                  }),
                  (0, s.jsx)("p", {
                    className: "text-sm leading-[18px] mt-3 text-center px-4",
                    children: a("success.content"),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "absolute left-0 bottom-0 w-full px-6 pb-8 flex lg:items-center gap-6 max-lg:gap-3 max-lg:flex-col",
                children: [
                  (0, s.jsxs)(B.Z, {
                    onClick: () => {
                      window.open("https://t.me/bitcoinpepe_group", "_blank");
                    },
                    className:
                      "lg:flex-1 bg-primary h-[40px] text-lg max-lg:h-[48px]",
                    children: [
                      (0, s.jsx)(T.Yi, {
                        className: "!fill-[#000] !hover:fill-[#000] mr-2",
                      }),
                      " ",
                      "Telegram",
                    ],
                  }),
                  (0, s.jsxs)(B.Z, {
                    onClick: () => {
                      window.open("https://x.com/BitcoinpepeethX", "_blank");
                    },
                    className:
                      "lg:flex-1 bg-primary h-[40px] text-lg max-lg:h-[48px]",
                    children: [
                      (0, s.jsx)(T.kL, {
                        className:
                          "!fill-[#000] !hover:fill-[#000] mr-2 size-[20px]",
                      }),
                      " ",
                      "Twitter",
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function M(e) {
        let { beforeConnect: t } = e,
          { t: l } = (0, f.$)(),
          {
            inputAmount: a,
            receiveAmount: n,
            currentTokenInfo: i,
            purchase: x,
            insufficientBalance: c,
          } = (0, N.ZN)(),
          [r, o] = (0, h.useState)(!1),
          {
            walletAddress: d,
            connect: m,
            disconnectETH: p,
            disconnectSOL: g,
          } = (0, N.hm)(),
          [u, v] = (0, h.useState)(!1),
          [w, C] = (0, h.useState)(!1),
          { isWrongNetWork: E } = (0, y.k)(),
          L =
            (null == i ? void 0 : i.chain) === "SOL"
              ? a && n
                ? "primary"
                : "disabled-amount"
              : (null == i ? void 0 : i.token)
              ? d
                ? E
                  ? "wrong-network"
                  : a && n
                  ? c
                    ? "insufficient-balance"
                    : "primary"
                  : "disabled-amount"
                : "connect-wallet"
              : "disabled-payment",
          z =
            "disabled-amount" === L ||
            "disabled-payment" === L ||
            "invalid-amount" === L ||
            "wrong-network" === L ||
            "insufficient-balance" === L;
        function Z() {
          switch (L) {
            case "connect-wallet":
              return l("connectBtn.connect");
            case "wrong-network":
              return l("connectBtn.wrongNetwork");
            case "disabled-payment":
              return l("connectBtn.disabledPayment");
            case "disabled-amount":
              return l("connectBtn.disabledAmount");
            case "invalid-amount":
              return l("connectBtn.invalidAmount");
            case "insufficient-balance":
              return l("connectBtn.insufficientBalance");
            case "primary":
              return l("connectBtn.main");
          }
        }
        return "wrong-network" === L
          ? (0, s.jsx)(B.Z, {
              theme: "cyan",
              size: "big",
              className: "w-full max-lg:h-[56px] max-lg:text-xl",
              onClick: () => {
                (null == i ? void 0 : i.chain) === "SOL"
                  ? (p(), m("sol"))
                  : ((null == i ? void 0 : i.chain) === "ETH" ||
                      (null == i ? void 0 : i.chain) === "BSC") &&
                    (g(), m("eth"));
              },
              children: Z(),
            })
          : "connect-wallet" !== L
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                "disabled-payment" === L
                  ? (0, s.jsx)(P, { position: "submit" })
                  : (0, s.jsx)(B.Z, {
                      theme: "cyan",
                      size: "big",
                      className: "w-full max-lg:h-[56px] max-lg:text-xl",
                      disabled: z || u,
                      onClick: () => {
                        if ((null == i ? void 0 : i.chain) === "SOL") {
                          o(!0);
                          return;
                        }
                        z ||
                          u ||
                          (v(!0),
                          x(() => {
                            C(!0);
                          }).finally(() => {
                            v(!1);
                          }),
                          setTimeout(() => {
                            v(!1);
                          }, 3e3));
                      },
                      loading: u,
                      children: Z(),
                    }),
                (0, s.jsx)(F, { isOpen: r, setIsOpen: o }),
                (0, s.jsx)(D, {
                  show: w,
                  onClose: () => {
                    C(!1);
                  },
                }),
              ],
            })
          : "connect-wallet" === L && i
          ? (0, s.jsx)(B.Z, {
              theme: "cyan",
              size: "big",
              className: "w-full max-lg:h-[56px] max-lg:text-xl",
              onClick: () => {
                (null == i ? void 0 : i.chain) === "SOL" ? m("sol") : m("eth");
              },
              children: Z(),
            })
          : (0, s.jsx)(b.v, {
              children: (e) => {
                let { open: t, close: l } = e;
                return (0, s.jsx)(s.Fragment, {
                  children: (0, s.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, s.jsx)(b.v.Button, {
                        suppressHydrationWarning: !0,
                        className: "w-full",
                        children: (0, s.jsxs)(B.Z, {
                          theme: "cyan",
                          size: "big",
                          className:
                            "w-full relative max-lg:h-[56px] max-lg:text-xl uppercase",
                          disabled: z,
                          children: [
                            Z(),
                            (0, s.jsxs)("div", {
                              className:
                                "absolute w-[calc(100%+6px)] h-[calc(100%+6px)] top-[-3px] left-[-3px] pointer-events-none overflow-hidden shineButton rounded-[11px]",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "shineButtonTop",
                                }),
                                (0, s.jsx)("div", {
                                  className: "shineButtonDown",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)(j.u, {
                        as: h.Fragment,
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95",
                        children: (0, s.jsx)(b.v.Items, {
                          className:
                            "absolute w-full left-[50%] translate-x-[-50%] bottom-[48px]",
                          children: (0, s.jsx)(k.m, {
                            onClose: () => {
                              l();
                            },
                          }),
                        }),
                      }),
                    ],
                  }),
                });
              },
            });
      }
      i().extend(o()), i().extend(c());
      var A = l(20516),
        V = l(37457),
        I = l(38082);
      i().extend(o()), i().extend(c());
      let O = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1e3,
            [t, l] = (0, h.useState)(Date.now());
          return (
            (0, h.useEffect)(() => {
              let t = setInterval(() => {
                l(Date.now);
              }, e);
              return () => clearInterval(t);
            }, []),
            t
          );
        },
        Y = () => {
          let e = O(),
            {
              endTime: t,
              listingAnnouncedTime: l,
              listingAnnounced: a,
            } = (0, V.G)(),
            n = i().duration((a ? l : t).diff(e)),
            x = l.isBefore(e),
            { t: c } = (0, d.$G)();
          return (0, s.jsxs)("div", {
            className:
              "w-full flex justify-between items-center text-center uppercase leading-none",
            children: [
              (0, s.jsxs)("div", {
                className: "flex-1",
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "font-bold text-[2.4vw]  max-lg:text-[30px] leading-[36px] max-lg:leading-none",
                    suppressHydrationWarning: !0,
                    children: x ? "00" : n.format("D").padStart(2, "0"),
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "text-[#000] text-[1.2vw] 3xl:text-sm max-lg:text-[15px] leading-[1.5vw] max-lg:leading-[20px] font-bold uppercase !font-museo",
                    children: c("days"),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "w-[1px] h-[55px] max-lg:h-[40px] bg-black",
              }),
              (0, s.jsxs)("div", {
                className: "flex-1",
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "font-bold text-[2.4vw] max-lg:text-[30px] leading-[36px] max-lg:leading-none",
                    suppressHydrationWarning: !0,
                    children: x ? "00" : n.format("H").padStart(2, "0"),
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "text-[#000] text-[1.2vw] 3xl:text-sm max-lg:text-[15px] leading-[1.5vw] max-lg:leading-[20px] font-bold uppercase !font-museo  ",
                    children: c("hours"),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "w-[1px] h-[55px] max-lg:h-[40px]  bg-black",
              }),
              (0, s.jsxs)("div", {
                className: "flex-1",
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "font-bold text-[2.4vw] max-lg:text-[30px] leading-[36px] max-lg:leading-none",
                    suppressHydrationWarning: !0,
                    children: x ? "00" : n.format("m").padStart(2, "0"),
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "text-[#000] text-[1.2vw] 3xl:text-sm max-lg:text-[15px] leading-[1.5vw] max-lg:leading-[20px] font-bold uppercase !font-museo  ",
                    children: c("mins"),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "w-[1px] h-[55px] max-lg:h-[40px]  bg-black",
              }),
              (0, s.jsxs)("div", {
                className: "flex-1",
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "font-bold text-[2.4vw] max-lg:text-[30px] leading-[36px] max-lg:leading-none",
                    suppressHydrationWarning: !0,
                    children: x ? "00" : n.format("s").padStart(2, "0"),
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "text-[#000] text-[1.2vw] 3xl:text-sm max-lg:text-[15px] leading-[1.5vw] max-lg:leading-[20px] font-bold uppercase !font-museo  ",
                    children: c("secs"),
                  }),
                ],
              }),
            ],
          });
        };
      function _() {
        let { t: e, i18n: t } = (0, d.$G)(),
          l = ["vn", "sk", "tr", "th"].includes(t.language),
          n = ["de", "nl", "fr", "es", "pl", "ro", "pt"].includes(t.language),
          [i, x] = (0, h.useState)(!1),
          { listingAnnounced: c, showLogo: r } = (0, V.G)(),
          o = (0, I.Dh)() ? 34 : 44,
          {
            currentStage: m,
            progress: g,
            currentPrice: f,
            currentPriceNumber: u,
            nextPrice: v,
            purchasedToken: b,
            inputAmount: j,
            receiveAmount: y,
            setSelectedTokenId: k,
            insufficientBalance: C,
          } = (0, N.ZN)((e) => [
            e.totalSoldUSD,
            e.nextTargetUSD,
            e.currentPriceNumber,
            e.setMax,
            e.purchasedToken,
            e.progress,
            e.setSelectedTokenId,
          ]),
          E = b > 0 && c;
        return (0, s.jsxs)("div", {
          className: "flex flex-col items-center",
          children: [
            // (0, s.jsx)("div", {
            //   className:
            //     " bg-[#D1852A] border-[3px] border-black rounded-xl w-full max-w-[504px] lg:w-[28.9vw] 3xl:w-[504px] pr-[5px] pb-[5px] shrink-0",
            //   children: (0, s.jsxs)("iframe", {
            //     style: {width: '100%', height: '100%'},
            //     src: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
            //     onLoad: () => document.body.scrollTo()
            //   }),
            // }),
            (0, s.jsxs)("div", {
              className: "flex items-center mt-[0.5vw] 3xl:mt-[10px]",
              children: [
                (0, s.jsx)("div", {
                  className: "text-[16px] mr-[15px] font-museo",
                  children: e("audit"),
                }),
                (0, s.jsx)("a", {
                  href: "https://app.solidproof.io/projects/bitcoin-pepe",
                  target: "_blank",
                  children: (0, s.jsx)(p(), {
                    src: "/images/solid.png",
                    width: 132,
                    height: 32,
                    alt: "solidproof",
                    className: "w-auto h-[1.85vw] 3xl:h-8 max-lg:h-8",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      let $ = (e) => {
          let { className: t, children: l, label: n } = e;
          return (0, s.jsxs)("div", {
            className: (0, a.cn)(
              "bg-white py-[13px] max-lg:py-2 px-5 max-lg:px-4 rounded-md flex flex-col gap-1 text-black border-[3px] border-black",
              t
            ),
            children: [
              (0, s.jsx)("h4", {
                className:
                  "capitalize text-[0.81vw] 3xl:text-sm max-lg:text-xs font-semibold",
                children: n,
              }),
              l,
            ],
          });
        },
        W = () => {
          let { t: e } = (0, d.$G)();
          return (0, s.jsxs)("div", {
            className: "relative group",
            children: [
              (0, s.jsxs)("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "cursor-pointer",
                children: [
                  (0, s.jsx)("circle", {
                    cx: "9",
                    cy: "9",
                    r: "8.5",
                    stroke: "#E4ECE6",
                  }),
                  (0, s.jsx)("path", {
                    d: "M9.75 3.5V5H8.25V3.5H9.75ZM11.25 12.5V14H6.75V12.5H8.25V8H6.75V6.5H9.75V12.5H11.25Z",
                    fill: "#E4ECE6",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className:
                  "group-hover:block hidden absolute right-[-40px] max-lg:right-[-22px] bottom-[30px] pt-[32px] z-[100]",
                children: (0, s.jsxs)("div", {
                  className:
                    "relative flex flex-col gap-[0.7vw] 3xl:gap-3 max-lg:gap-2 w-[24.5vw] 3xl:w-[390px] max-md:w-[90vw] bg-black border border-white rounded-[10px] text-white p-[1.2vw] 3xl:p-6 max-lg:p-4 text-[0.81vw] 3xl:text-sm max-lg:text-xs",
                  children: [
                    (0, s.jsx)("i", {
                      className:
                        "absolute rotate-45 size-[18px] border border-white border-l-0 border-t-0 bg-black bottom-[-9.5px] right-[40px] max-lg:right-[21px]",
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, s.jsx)(p(), {
                          src: "/images/logo-pepe.png",
                          alt: "BITPEPE",
                          width: 27,
                          height: 27,
                          className: "rounded-full shadow-xl",
                        }),
                        (0, s.jsx)("h3", {
                          className:
                            "text-[1.05vw] 3xl:text-xl max-lg:text-base font-semibold",
                          children: e("dex.troubleTitle"),
                        }),
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "leading-[1.3]",
                      children: (0, s.jsx)(d.cC, {
                        i18nKey: "dex.troubleText1",
                        components: {
                          link: (0, s.jsx)("a", {
                            className: "underline",
                            href: "#",
                            target: "_blank",
                          }),
                        },
                      }),
                    }),
                    (0, s.jsx)("p", {
                      className: "leading-[1.3]",
                      children: e("dex.troubleText2"),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    39128: function (e, t, l) {
      l.d(t, {
        Oi: function () {
          return x;
        },
        Yi: function () {
          return i;
        },
        kL: function () {
          return n;
        },
      });
      var s = l(52322),
        a = l(51763);
      let n = (e) => {
          let { className: t, onClick: l } = e;
          return (0, s.jsx)("svg", {
            width: "41",
            height: "35",
            viewBox: "0 0 41 35",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0, a.cn)("fill-[#fff] hover:fill-primary", t),
            onClick: l,
            children: (0, s.jsx)("path", {
              d: "M32.2896 0H38.5769L24.8419 14.8264L41 35H28.3474L18.4398 22.7636L7.1012 35H0.8077L15.5001 19.1431L0 0H12.9724L21.9309 11.1844L32.2896 0ZM30.0837 31.4456H33.5687L11.0782 3.36778H7.339L30.0837 31.4456Z",
            }),
          });
        },
        i = (e) => {
          let { className: t, onClick: l } = e;
          return (0, s.jsx)("svg", {
            width: "18",
            height: "15",
            viewBox: "0 0 18 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0, a.cn)("fill-[#fff] hover:fill-primary", t),
            onClick: l,
            children: (0, s.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M1.77748 6.46938C6.33994 4.35919 9.37724 2.95703 10.9024 2.27678C15.2433 0.34707 16.1558 0.0138828 16.7424 0C16.8727 0 17.1595 0.0277658 17.355 0.194359C17.5115 0.333187 17.5506 0.513664 17.5766 0.652491C17.6027 0.791319 17.6288 1.08286 17.6027 1.30498C17.3681 3.94271 16.3513 10.3427 15.8299 13.2858C15.6083 14.5353 15.1781 14.9518 14.7609 14.9934C13.8485 15.0767 13.1576 14.3548 12.2842 13.744C10.9024 12.786 10.1333 12.1891 8.79064 11.2451C7.2394 10.1622 8.24314 9.56524 9.12956 8.59344C9.3642 8.34355 13.3661 4.45637 13.4444 4.1093C13.4574 4.06766 13.4574 3.90106 13.3661 3.81776C13.2749 3.73447 13.1445 3.76223 13.0402 3.79C12.8969 3.81777 10.7069 5.37264 6.44423 8.44073C5.81852 8.89886 5.25799 9.12099 4.7496 9.10711C4.18907 9.09322 3.12015 8.77392 2.31194 8.49626C1.33427 8.16308 0.55213 7.9826 0.617308 7.39952C0.656415 7.0941 1.04748 6.78868 1.77748 6.46938Z",
            }),
          });
        },
        x = (e) => {
          let { className: t, onClick: l } = e;
          return (0, s.jsx)("svg", {
            width: "20",
            height: "15",
            viewBox: "0 0 20 15",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            onClick: l,
            children: (0, s.jsx)("path", {
              d: "M18.2061 1.40186C19.1128 2.34859 19.1137 4.58029 19.1679 5.87188C19.2347 7.48471 19.2194 9.1618 19.0352 10.7671C18.8229 12.6142 18.3931 13.6715 16.4884 13.9531C15.6793 14.0721 14.8575 14.0967 14.0411 14.1364C11.0292 14.2838 7.99304 14.2856 4.98213 14.1146C3.07118 14.006 1.05909 14.1543 0.556969 11.7601C0.155092 9.85153 0.190313 7.37228 0.289653 5.4193C0.388994 3.45215 0.346548 1.1203 2.62957 0.679062C3.66542 0.479701 4.81776 0.464584 5.87167 0.420177C8.81034 0.297348 11.8456 0.279396 14.7789 0.464584C15.896 0.535447 17.3762 0.535447 18.207 1.40186H18.2061ZM7.83229 4.31951V10.2606L12.7307 7.30141L7.83229 4.31951Z",
            }),
          });
        };
    },
    89316: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return x;
        },
      });
      var s = l(52322),
        a = l(51763),
        n = l(96577),
        i = l.n(n);
      function x(e) {
        let { className: t, onClick: l } = e;
        return (0, s.jsxs)("div", {
          className: "relative",
          children: [
            (0, s.jsx)(i(), {
              src: "/images/logo.webp",
              alt: "Bitcoin Pepe",
              width: 306,
              height: 110,
              className: (0, a.cn)("h-auto", t),
              onClick: l,
            }),
            (0, s.jsx)("div", {
              className: "seo-heading absolute top-0 left-0 opacity-0",
              children: "Bitcoin Pepe",
            }),
          ],
        });
      }
    },
    84012: function (e, t, l) {
      l.d(t, {
        $: function () {
          return s.$G;
        },
        M: function () {
          return a;
        },
      });
      var s = l(20034);
      let a = [
        "en",
        "zh",
        "de",
        "nl",
        "ja",
        "ko",
        "fr",
        "es",
        "pl",
        "ro",
        "vn",
        "sk",
        "pt",
        "tr",
        "th",
      ];
    },
    37457: function (e, t, l) {
      l.d(t, {
        G: function () {
          return d;
        },
      });
      var s = l(28879),
        a = l.n(s),
        n = l(10264),
        i = l.n(n),
        x = l(32806),
        c = l(2784);
      a().extend(i());
      let r = a().utc("2025-05-31 14:00:00", "YYYY-MM-DD HH:mm:ss"),
        o = a().utc("2025-06-17 16:00:00", "YYYY-MM-DD HH:mm:ss"),
        [d] = (0, x.jk)(() => {
          let [e, t] = (0, c.useState)(() => a()().isAfter(r)),
            [l, s] = (0, c.useState)(() =>
              a().utc().isAfter(o)
                ? a().utc("2025-06-30 16:00:00", "YYYY-MM-DD HH:mm:ss")
                : o
            ),
            [n, i] = (0, c.useState)(() => a().utc().isAfter(o));
          return (
            (0, c.useEffect)(() => {
              if (a()().utc().isAfter(o)) return;
              let e = setInterval(() => {
                a()().utc().isAfter(o) &&
                  (s(a().utc("2025-06-30 16:00:00", "YYYY-MM-DD HH:mm:ss")),
                  i(!0));
              }, 1e3);
              return () => {
                clearInterval(e);
              };
            }, []),
            {
              presaleStarted: e,
              endTime: r,
              listingAnnounced: !0,
              listingAnnouncedTime: l,
              showLogo: n,
            }
          );
        });
    },
    60455: function (e, t, l) {
      var s = l(52322),
        a = l(51763),
        n = l(89019);
      l(2784),
        (t.Z = (e) => {
          let {
              children: t,
              className: l = "",
              type: i = "button",
              size: x = "default",
              theme: c = "primary",
              disabled: r = !1,
              loading: o,
              onClick: d,
              ...m
            } = e,
            p = r || o;
          return (0, s.jsxs)("button", {
            type: i,
            disabled: p,
            className: (0, a.cn)(
              "flex flex-wrap flex-shrink-0 justify-center items-center cursor-pointer px-4 max-md:px-2 leading-[1.1] rounded-[11px] border-[3px] border-black capitalize font-bold transition-all duration-200",
              {
                default: "h-[46px] max-lg:h-[36px]",
                big: "h-[4.17vw] 3xl:h-[72px] max-lg:h-[56px]",
              }[x],
              {
                primary: "bg-primary",
                secondary: "bg-secondary",
                cyan: "bg-cyan",
                white: "bg-white",
                black: "bg-black",
              }[c],
              p
                ? o
                  ? "cursor-not-allowed opacity-80"
                  : "cursor-not-allowed bg-gray-400"
                : "hover:opacity-80",
              {
                primary: "text-black",
                secondary: "text-black",
                cyan: "text-black",
                white: "text-black",
                black: "text-white",
              }[c],
              {
                default: "text-[17px] max-md:text-[15px]",
                big: "text-[1.5vw] 3xl:text-[26px]",
              }[x],
              l
            ),
            onClick: d,
            ...m,
            children: [
              o
                ? (0, s.jsx)(n.Z, { className: "size-6 animate-spin mr-[5px]" })
                : null,
              t,
            ],
          });
        });
    },
    20516: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = l(2784);
      function a(e) {
        let { delay: t, fallback: l, children: a } = e,
          [n, i] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            t
              ? setTimeout(() => {
                  i(!0);
                }, t)
              : requestAnimationFrame(() => {
                  i(!0);
                });
          }, []),
          n ? a : null != l ? l : null
        );
      }
    },
    53936: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return c;
        },
      });
      var s = l(52322),
        a = l(51763),
        n = l(49442),
        i = l(23981),
        x = l(2784);
      function c(e) {
        let {
          show: t,
          onClose: l,
          title: c,
          children: r,
          width: o = 480,
          closeClassName: d,
          panelClassName: m,
          maskClick: p = !0,
          className: h,
        } = e;
        return (0, s.jsx)(n.u, {
          show: t,
          as: x.Fragment,
          children: (0, s.jsx)(i.V, {
            as: "div",
            className: (0, a.cn)(
              "fixed z-[900] top-0 left-0 w-full h-full bg-black/50 overflow-auto flex items-center justify-center",
              h
            ),
            onClose: () => {
              p && l && l();
            },
            children: (0, s.jsx)(n.u.Child, {
              as: x.Fragment,
              enter: "ease-out duration-300",
              enterFrom: "opacity-0 scale-95",
              enterTo: "opacity-100 scale-100",
              leave: "ease-in duration-200",
              leaveFrom: "opacity-100 scale-100",
              leaveTo: "opacity-0 scale-95",
              children: (0, s.jsxs)(i.V.Panel, {
                className: (0, a.cn)(
                  "max-md:!w-[94vw] text-black transform overflow-hidden border-[3px] border-black rounded-[20px] bg-white bg-[url('/images/white-bg.png')] bg-repeat  shadow-xl transition-all z-20",
                  m
                ),
                style: { width: o },
                children: [
                  !!c &&
                    (0, s.jsx)(i.V.Title, {
                      as: "h3",
                      className:
                        "flex flex-row justify-start items-center w-full text-[1.7vw] 3xl:text-[30px] max-lg:text-xl leading-none font-bold uppercase pt-8 px-6",
                      children: c,
                    }),
                  (0, s.jsx)("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: (0, a.cn)(
                      "size-4 absolute top-8 right-6 z-[10] hover:opacity-60 hover:cursor-pointer fill-black",
                      d
                    ),
                    onClick: () => {
                      l && l();
                    },
                    children: (0, s.jsx)("path", {
                      d: "M6.99974 5.58574L11.9497 0.635742L13.3637 2.04974L8.41374 6.99974L13.3637 11.9497L11.9497 13.3637L6.99974 8.41374L2.04974 13.3637L0.635742 11.9497L5.58574 6.99974L0.635742 2.04974L2.04974 0.635742L6.99974 5.58574Z",
                    }),
                  }),
                  r,
                ],
              }),
            }),
          }),
        });
      }
    },
    51763: function (e, t, l) {
      l.d(t, {
        cn: function () {
          return n;
        },
      });
      var s = l(90512),
        a = l(20324);
      function n() {
        for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
          t[l] = arguments[l];
        return (0, a.m6)((0, s.W)(t));
      }
    },
    38082: function (e, t, l) {
      l.d(t, {
        Dh: function () {
          return c;
        },
        Lm: function () {
          return i;
        },
        TB: function () {
          return n;
        },
        V1: function () {
          return r;
        },
        dD: function () {
          return x;
        },
        uf: function () {
          return o;
        },
      });
      var s = l(30686),
        a = l(2784);
      let n = new s.Z(),
        i = () => {
          let [e, t] = (0, a.useState)(() => {
              try {
                return window ? window.document.body.clientWidth : 1920;
              } catch (e) {
                return 1920;
              }
            }),
            l = () => {
              t(window.document.body.clientWidth);
            };
          return (
            (0, a.useEffect)(() => {
              if (window)
                return (
                  t(window.document.body.clientWidth),
                  window.addEventListener("resize", l),
                  () => {
                    window.removeEventListener("resize", l);
                  }
                );
            }, []),
            e
          );
        },
        x = () => 768 > i(),
        c = () => 1024 > i(),
        r = () => {
          let e = i();
          (0, a.useEffect)(() => {
            try {
              e <= 630
                ? (document.documentElement.style.fontSize =
                    (e / 430) * 16 + "px")
                : (document.documentElement.style.fontSize = "16px");
            } catch (e) {}
          }, [e]);
        },
        o = (e) => {
          if (!e) return "";
          let [t, l] = (e + "").split("."),
            s = t.replace(/[^\d]/g, ""),
            a = (s = s.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
          return l && (a += "." + l), a;
        };
    },
    7319: function (e, t, l) {
      var s = l(2784);
      t.Z = () => {
        let [e, t] = (0, s.useState)({ x: 0, y: 0 });
        return (
          (0, s.useEffect)(() => {
            let e = () => {
              t({ x: window.scrollX, y: window.scrollY });
            };
            return (
              window.addEventListener("scroll", e),
              () => {
                window.removeEventListener("scroll", e);
              }
            );
          }, []),
          e
        );
      };
    },
    48537: function (e, t, l) {
      l.d(t, {
        IJ: function () {
          return s;
        },
      }),
        l(34244),
        l(80537);
      let s = (e) =>
        new Intl.NumberFormat("en-US", {
          notation: "standard",
          maximumSignificantDigits: 20,
        }).format(e);
    },
  },
]);
