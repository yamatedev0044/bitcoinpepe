(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [890],
  {
    71917: function (e, n, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/terms",
        function () {
          return i(58652);
        },
      ]);
    },
    55798: function (e, n, i) {
      "use strict";
      i.d(n, {
        Z: function () {
          return y;
        },
      });
      var t = i(52322),
        s = i(60455),
        r = i(51763),
        a = i(7319),
        o = i(76265),
        l = i(81395),
        c = i(20034),
        d = i(39097),
        h = i.n(d),
        p = i(5632),
        x = i(2784),
        m = i(70423),
        u = i(75024),
        f = i(39206),
        g = i(39128),
        j = i(89316),
        w = i(20516);
      function y(e) {
        let n,
          { className: i } = e,
          { t: d, i18n: y } = (0, c.$G)(),
          v = y.language,
          b = [
            { name: d("about"), href: "about" },
            { name: d("roadmap"), href: "roadmap" },
            { name: d("howToBuy"), href: "howToBuy" },
            { name: d("tokenomics"), href: "tokenomics" },
            { name: d("giveaway"), href: "giveaway" },
            { name: d("meetTheTeam"), href: "team" },
            { name: d("staking"), to: "/staking" },
          ],
          [k, P] = (0, x.useState)(!1),
          [N, B] = (0, x.useState)(!1),
          E = () => {
            P(!k);
          };
        (0, x.useEffect)(
          () => (
            k
              ? ((document.documentElement.style.overflow = "hidden"),
                (document.body.style.overflow = "hidden"))
              : ((document.documentElement.style.overflow = ""),
                (document.body.style.overflow = "")),
            () => {
              (document.documentElement.style.overflow = ""),
                (document.body.style.overflow = "");
            }
          ),
          [k]
        );
        let C = "/" === (0, p.useRouter)().pathname,
          T = (0, a.Z)();
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)("div", {
            className: (0, r.cn)(
              "fixed top-0 left-0 z-50 w-full h-[60px] ",
              T.y > 0 && "backdrop-blur-lg"
            ),
            children: [
              (0, t.jsxs)("div", {
                className: (0, r.cn)(
                  "px-3 flex items-center justify-between h-full",
                  i
                ),
                children: [
                  C
                    ? (0, t.jsx)(h(), {
                        href: "",
                        children: (0, t.jsx)(j.Z, {
                          className: "w-[145px] shrink-0",
                        }),
                      })
                    : (0, t.jsx)(h(), {
                        href: "/",
                        children: (0, t.jsx)(j.Z, {
                          className: "w-[145px] shrink-0",
                        }),
                      }),
                  (0, t.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, t.jsx)(w.Z, { children: (0, t.jsx)(u.Z, {}) }),
                      (0, t.jsx)("button", {
                        id: "mobile-menu-button",
                        className:
                          "focus:outline-none hidden max-lg:block mr-4",
                        onClick: E,
                        children: (0, t.jsxs)("svg", {
                          width: "16",
                          height: "10",
                          viewBox: "0 0 16 10",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, t.jsx)("rect", {
                              width: "16",
                              height: "2",
                              rx: "1",
                              fill: "white",
                            }),
                            (0, t.jsx)("rect", {
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
              k &&
                (0, t.jsxs)(o.E.div, {
                  initial: { height: 0 },
                  whileInView: {
                    minHeight: window.innerHeight,
                    height: window.innerHeight,
                  },
                  className:
                    "fixed left-0 top-0 bg-black overflow-x-hidden overflow-y-scroll w-full flex flex-col",
                  transition: { duration: 0.4, type: "spring" },
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "flex items-center justify-between px-3 h-[80px]",
                      children: [
                        C
                          ? (0, t.jsx)(m.rU, {
                              to: "trade",
                              spy: !0,
                              smooth: !0,
                              offset: -70,
                              duration: 500,
                              onClick: E,
                              children: (0, t.jsx)(j.Z, {
                                className: "w-[145px] shrink-0",
                              }),
                            })
                          : (0, t.jsx)(h(), {
                              href: "/",
                              children: (0, t.jsx)(j.Z, {
                                className: "w-[145px] shrink-0",
                              }),
                            }),
                        (0, t.jsx)("button", {
                          className: "focus:outline-none",
                          onClick: E,
                          children: (0, t.jsx)("svg", {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 32 32",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, t.jsx)("path", {
                              fillRule: "evenodd",
                              "clip-rule": "evenodd",
                              d: "M11.1212 9.70696C10.7306 9.31643 10.0975 9.31643 9.70696 9.70696C9.31643 10.0975 9.31643 10.7306 9.70696 11.1212L14.6568 16.071L9.70711 21.0208C9.31658 21.4113 9.31658 22.0445 9.70711 22.435C10.0976 22.8255 10.7308 22.8255 11.1213 22.435L16.071 17.4853L21.0207 22.4349C21.4112 22.8254 22.0444 22.8254 22.4349 22.4349C22.8254 22.0444 22.8254 21.4112 22.4349 21.0207L17.4853 16.071L22.435 11.1213C22.8256 10.7308 22.8256 10.0976 22.435 9.70706C22.0445 9.31654 21.4113 9.31654 21.0208 9.70706L16.071 14.6568L11.1212 9.70696Z",
                              fill: "white",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "px-6 flex-1 overflow-y-auto",
                      children: [
                        (0, t.jsx)(u.Z, { className: "h-[48px]" }),
                        (0, t.jsxs)("div", {
                          className:
                            "flex flex-col text-primary capitalize gap-4 text-[28px] font-bold leading-[46px] mt-5",
                          children: [
                            b.map((e) =>
                              e.to
                                ? (0, t.jsx)(h(), {
                                    href: "/".concat(e.to),
                                    children: e.name,
                                  })
                                : C
                                ? (0, t.jsx)(
                                    m.rU,
                                    {
                                      activeClass: "active",
                                      to: e.href,
                                      spy: !0,
                                      smooth: !0,
                                      offset: -70,
                                      duration: 500,
                                      onClick: E,
                                      className: "cursor-pointer",
                                      children: e.name,
                                    },
                                    e.name
                                  )
                                : (0, t.jsx)(h(), {
                                    href: "/#".concat(e.href),
                                    children: e.name,
                                  })
                            ),
                            (0, t.jsx)("a", {
                              href: "https://docs.bitpepe.ink",
                              target: "_blank",
                              children: d("documentation"),
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: "w-full h-px bg-white my-5",
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "flex items-center justify-center gap-8 mt-8 pb-4",
                          children: [
                            (0, t.jsx)(s.Z, {
                              theme: "white",
                              className: "!size-[48px] px-0 bg-[#E3E3E3]",
                              onClick: () => {
                                window.open(
                                  "https://x.com/BitcoinpepeethX",
                                  "_blank"
                                );
                              },
                              children: (0, t.jsx)(g.kL, {
                                className:
                                  "fill-black hover:fill-black w-[21px]",
                              }),
                            }),
                            (0, t.jsx)(s.Z, {
                              theme: "white",
                              className: "!size-[48px] px-0 bg-[#E3E3E3]",
                              onClick: () => {
                                window.open(
                                  "https://t.me/bitcoinpepe_group",
                                  "_blank"
                                );
                              },
                              children: (0, t.jsx)(g.Yi, {
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
          }),
        });
      }
    },
    32187: function (e, n, i) {
      "use strict";
      i.d(n, {
        Z: function () {
          return l;
        },
      });
      var t = i(52322),
        s = i(51763),
        r = i(20034),
        a = i(39097),
        o = i.n(a);
      function l(e) {
        let { className: n, noHomePage: i } = e,
          { t: a, i18n: l } = (0, r.$G)();
        return (0, t.jsxs)("div", {
          className: (0, s.cn)(
            "layout flex max-lg:flex-col items-center text-[10px] leading-none gap-7 max-lg:gap-3 font-medium",
            n
          ),
          children: [
            (0, t.jsx)("div", {
              className: "max-lg:order-2",
              children: a("copyright"),
            }),
            (0, t.jsxs)("div", {
              className: "flex items-center gap-7",
              children: [
                (0, t.jsx)(o(), {
                  href: "/#about",
                  className: "cursor-pointer underline",
                  children: a("blog"),
                }),
                (0, t.jsx)("a", {
                  href: "mailto:team@bitpepe.ink",
                  className: "cursor-pointer underline",
                  target: "_blank",
                  children: a("footer.contact"),
                }),
                (0, t.jsx)(o(), {
                  className: "cursor-pointer underline",
                  href:
                    "en" === l.language
                      ? "/terms"
                      : "/".concat(l.language, "/terms"),
                  target: "_blank",
                  children: a("footer.conditions"),
                }),
                (0, t.jsx)(o(), {
                  className: "cursor-pointer underline",
                  href:
                    "en" === l.language
                      ? "/privacy"
                      : "/".concat(l.language, "/privacy"),
                  target: "_blank",
                  children: a("footer.privacy"),
                }),
              ],
            }),
          ],
        });
      }
    },
    58652: function (e, n, i) {
      "use strict";
      i.r(n),
        i.d(n, {
          __N_SSP: function () {
            return p;
          },
          default: function () {
            return x;
          },
        });
      var t = i(52322),
        s = i(10596),
        r = i(40320),
        a = i(38082),
        o = i(55798),
        l = i(32187),
        c = i(97729),
        d = i.n(c),
        h = i(20034),
        p = !0;
      function x(e) {
        var n;
        let { baseUrl: i } = e,
          c = (0, a.Dh)(),
          { i18n: p } = (0, h.$G)();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(d(), {
              children: [
                (0, t.jsx)("title", {
                  children: "Terms & Conditions - Bitcoin Pepe",
                }),
                (0, t.jsx)("link", {
                  rel: "canonical",
                  href: "https://bitcoinpepe.co".concat(
                    "en" === p.language
                      ? "/terms"
                      : "/".concat(p.language, "/terms")
                  ),
                }),
                (0, t.jsx)("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: {
                    __html:
                      '\n{\n  "@context" : "https://schema.org",\n  "@type" : "WebSite",\n  "name" : Privacy Policy - Bitcoin Pepe,\n  "alternateName" : ["Bitcoin Pepe", "BITPEPE", "PEP-20"],\n  "url" : "'
                        .concat(i)
                        .concat(
                          "en" === p.language
                            ? "/"
                            : "/".concat(p.language, "/"),
                          'terms"\n}'
                        ),
                  },
                }),
                (0, t.jsx)("meta", {
                  property: "og:title",
                  content: "Terms & Conditions - Bitcoin Pepe",
                }),
                (0, t.jsx)("meta", {
                  property: "og:url",
                  content: ""
                    .concat(i, "/")
                    .concat(
                      null !== (n = p.language) && void 0 !== n ? n : "en",
                      "/terms"
                    ),
                }),
                (0, t.jsx)("meta", { property: "og:type", content: "website" }),
                (0, t.jsx)("meta", {
                  property: "og:site_name",
                  content: "Bitcoin Pepe",
                }),
                (0, t.jsx)("meta", {
                  name: "twitter:title",
                  content: "Terms & Conditions - Bitcoin Pepe",
                }),
                (0, t.jsx)("meta", {
                  name: "twitter:description",
                  content: "Terms & Conditions",
                }),
              ],
            }),
            (0, t.jsxs)(r.k8, {
              children: [
                (0, t.jsxs)("div", {
                  className: "min-h-screen bg-black text-white",
                  children: [
                    c
                      ? (0, t.jsx)(o.Z, {})
                      : (0, t.jsx)(s.Z, {
                          activeNavIndex: -1,
                          className: "backdrop-blur-lg",
                        }),
                    (0, t.jsx)("div", {
                      className: "relative pt-[74px] max-md:pt-[53px]",
                      children: (0, t.jsx)("div", {
                        className:
                          "layout py-[70px] max-lg:py-[36px] flex flex-col items-start min-h-[100vh]",
                        children: (0, t.jsxs)("div", {
                          className: "terms-container leading-[2]",
                          children: [
                            (0, t.jsx)("h1", {
                              children: "Terms & Conditions",
                            }),
                            (0, t.jsxs)("p", {
                              children: [
                                (0, t.jsx)("strong", {
                                  children: "Last Updated:",
                                }),
                                " [01/02/2025]",
                              ],
                            }),
                            (0, t.jsx)("h2", { children: "1. Introduction" }),
                            (0, t.jsx)("p", {
                              children:
                                "Welcome to Bitcoin Pepe. By accessing or using our services, you agree to these Terms & Conditions. These terms govern the use of our Layer 2 protocol, PEP-20 token standard, Bitcoin Pepe bridge, and Bitcoin Pepe DEX.",
                            }),
                            (0, t.jsx)("h2", {
                              children: "2. Use of the Platform",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "Users must comply with all applicable laws and regulations.",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "Bitcoin Pepe reserves the right to modify or discontinue services, including but not limited to the Bitcoin Pepe Layer 2, PEP-20 token standard, Bitcoin Pepe bridge, and Bitcoin Pepe DEX.",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "The platform is designed for decentralized and permissionless use; however, users are responsible for their own security and interactions within the ecosystem.",
                            }),
                            (0, t.jsx)("h2", {
                              children: "3. Token Utility & Economics",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "Bitcoin Pepe (BITPEPE) tokens are utility tokens designed for participation in the ecosystem, including staking, trading, governance, and access to Bitcoin Pepe Layer 2 applications.",
                            }),
                            (0, t.jsx)("strong", { children: "Tokenomics:" }),
                            (0, t.jsxs)("ul", {
                              children: [
                                (0, t.jsxs)("li", {
                                  children: [
                                    (0, t.jsx)("strong", {
                                      children: "Total Supply:",
                                    }),
                                    " 2,100,000,000 BITPEPE (fixed)",
                                  ],
                                }),
                                (0, t.jsx)("li", {
                                  children: (0, t.jsx)("strong", {
                                    children: "Allocation:",
                                  }),
                                }),
                                (0, t.jsxs)("ul", {
                                  children: [
                                    (0, t.jsx)("li", {
                                      children: "Presale: 50% (1.05B)",
                                    }),
                                    (0, t.jsx)("li", {
                                      children: "Staking & Rewards: 15% (315M)",
                                    }),
                                    (0, t.jsx)("li", {
                                      children: "Liquidity: 10% (210M)",
                                    }),
                                    (0, t.jsx)("li", {
                                      children: "Development: 10% (210M)",
                                    }),
                                    (0, t.jsx)("li", {
                                      children: "Marketing: 10% (210M)",
                                    }),
                                    (0, t.jsx)("li", {
                                      children: "Treasury: 5% (105M)",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "The presale will run for 90 days in 30 stages, with incremental price increases per stage.",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "Bitcoin Pepe tokens do not represent equity, ownership, or rights to profits.",
                            }),
                            (0, t.jsx)("h2", {
                              children: "4. PEP-20 Token Standard & Layer 2",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "Bitcoin Pepe introduces PEP-20, a token standard allowing for seamless and permissionless token deployment on Bitcoin's Layer 2.",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "The Layer 2 ecosystem enhances scalability, reduces fees, and introduces smart contract capabilities to Bitcoin, providing a decentralized infrastructure for trading and DeFi applications.",
                            }),
                            (0, t.jsx)("h2", {
                              children: "5. Bitcoin Pepe Bridge",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "Bitcoin Pepe provides a bridge that enables users to port Bitcoin to the Layer 2 network, unlocking new functionalities without requiring BTC liquidation.",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "Users acknowledge the inherent risks associated with cross-chain transactions, including potential smart contract vulnerabilities, network congestion, or unforeseen exploits.",
                            }),
                            (0, t.jsx)("h2", {
                              children: "6. Bitcoin Pepe DEX",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "Bitcoin Pepe will launch a decentralized exchange (DEX) enabling permissionless trading of Bitcoin-based memecoins and other Layer 2 assets.",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "Features include low fees, deep liquidity, and fast execution speeds.",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "Bitcoin Pepe does not assume responsibility for third-party projects listed on the DEX or potential market volatility.",
                            }),
                            (0, t.jsx)("h2", { children: "7. Disclaimers" }),
                            (0, t.jsx)("p", {
                              children:
                                'Bitcoin Pepe is provided "as is" without warranties of any kind.',
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "We are not responsible for financial losses due to market volatility, smart contract vulnerabilities, or third-party actions.",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "The development of Bitcoin Pepe Layer 2 and associated products is ongoing, and no specific launch date or feature set is guaranteed.",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "Bitcoin Pepe does not guarantee any affiliation with external parties, including industry insiders or the original creator of Pepe.",
                            }),
                            (0, t.jsx)("h2", {
                              children: "8. Limitation of Liability",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "Bitcoin Pepe is not liable for any direct or indirect damages resulting from the use of our platform, including financial losses, technical malfunctions, or regulatory changes impacting the crypto industry. Users assume full responsibility for their own transactions and participation within the Bitcoin Pepe ecosystem.",
                            }),
                            (0, t.jsx)("h2", { children: "9. Governing Law" }),
                            (0, t.jsx)("p", {
                              children:
                                "These terms shall be governed by and construed in accordance with the laws of Saint Vincent and the Grenadines.",
                            }),
                            (0, t.jsx)("h2", {
                              children: "10. Changes to Terms",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "We may update these Terms & Conditions at any time. Continued use of our services constitutes acceptance of these changes.",
                            }),
                            (0, t.jsx)("h2", {
                              children: "11. Contact Information",
                            }),
                            (0, t.jsx)("p", {
                              children:
                                "For any questions regarding these terms, please contact us through our official communication channels listed on Bitcoin Pepe.",
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)(l.Z, { className: "pb-[30px]" }),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [934, 999, 23, 710, 375, 224, 292, 265, 423, 288, 596, 774, 888, 179],
      function () {
        return e((e.s = 71917));
      }
    ),
      (_N_E = e.O());
  },
]);
