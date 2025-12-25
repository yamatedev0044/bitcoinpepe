(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [915],
  {
    51942: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/privacy",
        function () {
          return n(21699);
        },
      ]);
    },
    55798: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var i = n(52322),
        s = n(60455),
        a = n(51763),
        r = n(7319),
        o = n(76265),
        l = n(81395),
        c = n(20034),
        d = n(39097),
        h = n.n(d),
        p = n(5632),
        u = n(2784),
        x = n(70423),
        m = n(75024),
        f = n(39206),
        g = n(39128),
        y = n(89316),
        j = n(20516);
      function v(e) {
        let t,
          { className: n } = e,
          { t: d, i18n: v } = (0, c.$G)(),
          w = v.language,
          b = [
            { name: d("about"), href: "about" },
            { name: d("roadmap"), href: "roadmap" },
            { name: d("howToBuy"), href: "howToBuy" },
            { name: d("tokenomics"), href: "tokenomics" },
            { name: d("giveaway"), href: "giveaway" },
            { name: d("meetTheTeam"), href: "team" },
            { name: d("staking"), to: "/staking" },
          ],
          [N, k] = (0, u.useState)(!1),
          [P, _] = (0, u.useState)(!1),
          E = () => {
            k(!N);
          };
        (0, u.useEffect)(
          () => (
            N
              ? ((document.documentElement.style.overflow = "hidden"),
                (document.body.style.overflow = "hidden"))
              : ((document.documentElement.style.overflow = ""),
                (document.body.style.overflow = "")),
            () => {
              (document.documentElement.style.overflow = ""),
                (document.body.style.overflow = "");
            }
          ),
          [N]
        );
        let C = "/" === (0, p.useRouter)().pathname,
          T = (0, r.Z)();
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: (0, a.cn)(
              "fixed top-0 left-0 z-50 w-full h-[60px] ",
              T.y > 0 && "backdrop-blur-lg"
            ),
            children: [
              (0, i.jsxs)("div", {
                className: (0, a.cn)(
                  "px-3 flex items-center justify-between h-full",
                  n
                ),
                children: [
                  C
                    ? (0, i.jsx)(h(), {
                        href: "",
                        children: (0, i.jsx)(y.Z, {
                          className: "w-[145px] shrink-0",
                        }),
                      })
                    : (0, i.jsx)(h(), {
                        href: "/",
                        children: (0, i.jsx)(y.Z, {
                          className: "w-[145px] shrink-0",
                        }),
                      }),
                  (0, i.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, i.jsx)(j.Z, { children: (0, i.jsx)(m.Z, {}) }),
                      (0, i.jsx)("button", {
                        id: "mobile-menu-button",
                        className:
                          "focus:outline-none hidden max-lg:block mr-4",
                        onClick: E,
                        children: (0, i.jsxs)("svg", {
                          width: "16",
                          height: "10",
                          viewBox: "0 0 16 10",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, i.jsx)("rect", {
                              width: "16",
                              height: "2",
                              rx: "1",
                              fill: "white",
                            }),
                            (0, i.jsx)("rect", {
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
              N &&
                (0, i.jsxs)(o.E.div, {
                  initial: { height: 0 },
                  whileInView: {
                    minHeight: window.innerHeight,
                    height: window.innerHeight,
                  },
                  className:
                    "fixed left-0 top-0 bg-black overflow-x-hidden overflow-y-scroll w-full flex flex-col",
                  transition: { duration: 0.4, type: "spring" },
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "flex items-center justify-between px-3 h-[80px]",
                      children: [
                        C
                          ? (0, i.jsx)(x.rU, {
                              to: "trade",
                              spy: !0,
                              smooth: !0,
                              offset: -70,
                              duration: 500,
                              onClick: E,
                              children: (0, i.jsx)(y.Z, {
                                className: "w-[145px] shrink-0",
                              }),
                            })
                          : (0, i.jsx)(h(), {
                              href: "/",
                              children: (0, i.jsx)(y.Z, {
                                className: "w-[145px] shrink-0",
                              }),
                            }),
                        (0, i.jsx)("button", {
                          className: "focus:outline-none",
                          onClick: E,
                          children: (0, i.jsx)("svg", {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 32 32",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                              fillRule: "evenodd",
                              "clip-rule": "evenodd",
                              d: "M11.1212 9.70696C10.7306 9.31643 10.0975 9.31643 9.70696 9.70696C9.31643 10.0975 9.31643 10.7306 9.70696 11.1212L14.6568 16.071L9.70711 21.0208C9.31658 21.4113 9.31658 22.0445 9.70711 22.435C10.0976 22.8255 10.7308 22.8255 11.1213 22.435L16.071 17.4853L21.0207 22.4349C21.4112 22.8254 22.0444 22.8254 22.4349 22.4349C22.8254 22.0444 22.8254 21.4112 22.4349 21.0207L17.4853 16.071L22.435 11.1213C22.8256 10.7308 22.8256 10.0976 22.435 9.70706C22.0445 9.31654 21.4113 9.31654 21.0208 9.70706L16.071 14.6568L11.1212 9.70696Z",
                              fill: "white",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "px-6 flex-1 overflow-y-auto",
                      children: [
                        (0, i.jsx)(m.Z, { className: "h-[48px]" }),
                        (0, i.jsxs)("div", {
                          className:
                            "flex flex-col text-primary capitalize gap-4 text-[28px] font-bold leading-[46px] mt-5",
                          children: [
                            b.map((e) =>
                              e.to
                                ? (0, i.jsx)(h(), {
                                    href: "/".concat(e.to),
                                    children: e.name,
                                  })
                                : C
                                ? (0, i.jsx)(
                                    x.rU,
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
                                : (0, i.jsx)(h(), {
                                    href: "/#".concat(e.href),
                                    children: e.name,
                                  })
                            ),
                            (0, i.jsx)("a", {
                              href: "https://docs.bitpepe.ink",
                              target: "_blank",
                              children: d("documentation"),
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "w-full h-px bg-white my-5",
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "flex items-center justify-center gap-8 mt-8 pb-4",
                          children: [
                            (0, i.jsx)(s.Z, {
                              theme: "white",
                              className: "!size-[48px] px-0 bg-[#E3E3E3]",
                              onClick: () => {
                                window.open(
                                  "https://x.com/BitcoinpepeethX",
                                  "_blank"
                                );
                              },
                              children: (0, i.jsx)(g.kL, {
                                className:
                                  "fill-black hover:fill-black w-[21px]",
                              }),
                            }),
                            (0, i.jsx)(s.Z, {
                              theme: "white",
                              className: "!size-[48px] px-0 bg-[#E3E3E3]",
                              onClick: () => {
                                window.open(
                                  "https://t.me/bitcoinpepe_group",
                                  "_blank"
                                );
                              },
                              children: (0, i.jsx)(g.Yi, {
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
    32187: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(52322),
        s = n(51763),
        a = n(20034),
        r = n(39097),
        o = n.n(r);
      function l(e) {
        let { className: t, noHomePage: n } = e,
          { t: r, i18n: l } = (0, a.$G)();
        return (0, i.jsxs)("div", {
          className: (0, s.cn)(
            "layout flex max-lg:flex-col items-center text-[10px] leading-none gap-7 max-lg:gap-3 font-medium",
            t
          ),
          children: [
            (0, i.jsx)("div", {
              className: "max-lg:order-2",
              children: r("copyright"),
            }),
            (0, i.jsxs)("div", {
              className: "flex items-center gap-7",
              children: [
                (0, i.jsx)(o(), {
                  href: "/#about",
                  className: "cursor-pointer underline",
                  children: r("blog"),
                }),
                (0, i.jsx)("a", {
                  href: "mailto:team@bitpepe.ink",
                  className: "cursor-pointer underline",
                  target: "_blank",
                  children: r("footer.contact"),
                }),
                (0, i.jsx)(o(), {
                  className: "cursor-pointer underline",
                  href:
                    "en" === l.language
                      ? "/terms"
                      : "/".concat(l.language, "/terms"),
                  target: "_blank",
                  children: r("footer.conditions"),
                }),
                (0, i.jsx)(o(), {
                  className: "cursor-pointer underline",
                  href:
                    "en" === l.language
                      ? "/privacy"
                      : "/".concat(l.language, "/privacy"),
                  target: "_blank",
                  children: r("footer.privacy"),
                }),
              ],
            }),
          ],
        });
      }
    },
    21699: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return p;
          },
          default: function () {
            return u;
          },
        });
      var i = n(52322),
        s = n(10596),
        a = n(40320),
        r = n(55798),
        o = n(38082),
        l = n(32187),
        c = n(97729),
        d = n.n(c),
        h = n(20034),
        p = !0;
      function u(e) {
        let { baseUrl: t } = e,
          n = (0, o.Dh)(),
          { i18n: c } = (0, h.$G)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(d(), {
              children: [
                (0, i.jsx)("title", {
                  children: "Privacy Policy - Bitcoin Pepe",
                }),
                (0, i.jsx)("link", {
                  rel: "canonical",
                  href: "https://bitcoinpepe.co".concat(
                    "en" === c.language
                      ? "/privacy"
                      : "/".concat(c.language, "/privacy")
                  ),
                }),
                (0, i.jsx)("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: {
                    __html:
                      '\n{\n  "@context" : "https://schema.org",\n  "@type" : "WebSite",\n  "name" : Privacy Policy - Bitcoin Pepe,\n  "alternateName" : ["Bitcoin Pepe", "BITPEPE", "PEP-20"],\n  "url" : "'
                        .concat(t)
                        .concat(
                          "en" === c.language
                            ? "/"
                            : "/".concat(c.language, "/"),
                          'privacy"\n}'
                        ),
                  },
                }),
                (0, i.jsx)("meta", {
                  property: "og:title",
                  content: "Privacy Policy - Bitcoin Pepe",
                }),
                (0, i.jsx)("meta", {
                  property: "og:url",
                  content: "".concat(t, "/").concat(c.language, "/privacy"),
                }),
                (0, i.jsx)("meta", { property: "og:type", content: "website" }),
                (0, i.jsx)("meta", {
                  property: "og:site_name",
                  content: "Bitcoin Pepe",
                }),
                (0, i.jsx)("meta", {
                  name: "twitter:title",
                  content: "Privacy Policy - Bitcoin Pepe",
                }),
                (0, i.jsx)("meta", {
                  name: "twitter:description",
                  content: "Privacy Policy",
                }),
              ],
            }),
            (0, i.jsxs)(a.k8, {
              children: [
                (0, i.jsxs)("div", {
                  className: "min-h-screen bg-black text-white",
                  children: [
                    n
                      ? (0, i.jsx)(r.Z, {})
                      : (0, i.jsx)(s.Z, {
                          activeNavIndex: -1,
                          className: "backdrop-blur-lg",
                        }),
                    (0, i.jsx)("div", {
                      className: "relative pt-[74px] max-md:pt-[53px]",
                      children: (0, i.jsx)("div", {
                        className:
                          "layout py-[70px] max-lg:py-[36px] flex flex-col items-start min-h-[100vh]",
                        children: (0, i.jsxs)("div", {
                          className: "terms-container leading-[2]",
                          children: [
                            (0, i.jsx)("h1", { children: "Privacy Policy" }),
                            (0, i.jsxs)("p", {
                              children: [
                                (0, i.jsx)("strong", {
                                  children: "Last Updated:",
                                }),
                                " [01/02/2025]",
                              ],
                            }),
                            (0, i.jsx)("h2", { children: "1. Introduction" }),
                            (0, i.jsx)("p", {
                              children:
                                "Welcome to Bitcoin Pepe. Your privacy is important to us. This Privacy Policy explains how we collect, use, and share information about users of our platform.",
                            }),
                            (0, i.jsx)("h2", {
                              children: "2. Information We Collect",
                            }),
                            (0, i.jsxs)("ul", {
                              children: [
                                (0, i.jsxs)("li", {
                                  children: [
                                    (0, i.jsx)("strong", {
                                      children: "Personal Information:",
                                    }),
                                    " We do not collect personally identifiable information unless explicitly provided.",
                                  ],
                                }),
                                (0, i.jsxs)("li", {
                                  children: [
                                    (0, i.jsx)("strong", {
                                      children: "Usage Data:",
                                    }),
                                    " Our site uses technologies of third-party partners [such as NextRoll] to help us recognize your device and understand how you use our site(s). This allows us to improve our services to reflect your interests and serve you relevant advertisements.",
                                  ],
                                }),
                                (0, i.jsxs)("li", {
                                  children: [
                                    (0, i.jsx)("strong", {
                                      children: "Data Collection & Analysis:",
                                    }),
                                    " Our partners [such as NextRoll] collect and analyze information about your activity on our site(s) to:",
                                    (0, i.jsxs)("ul", {
                                      className: "ml-6",
                                      children: [
                                        (0, i.jsx)("li", {
                                          children:
                                            "Measure and analyze traffic and browsing activity",
                                        }),
                                        (0, i.jsx)("li", {
                                          children:
                                            "Show advertisements for our products/services on third-party sites",
                                        }),
                                        (0, i.jsx)("li", {
                                          children:
                                            "Measure and analyze advertising campaign performance",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("li", {
                                  children: [
                                    (0, i.jsx)("strong", {
                                      children: "Opting Out:",
                                    }),
                                    " Our partners may use non-cookie technologies that may not be impacted by browser settings that block cookies. Your browser may not permit you to block such technologies. You can use these third-party tools to opt-out of interest-based advertising:",
                                    (0, i.jsxs)("ul", {
                                      className: "ml-6",
                                      children: [
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "http://www.networkadvertising.org/choices/",
                                            children:
                                              "The NAI's opt-out platform",
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "http://www.youronlinechoices.com/",
                                            children:
                                              "The EDAA's opt-out platform",
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://optout.aboutads.info/?c=2&lang=EN",
                                            children:
                                              "The DAA's opt-out platform",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsx)("h2", {
                              children: "3. How We Use Your Information",
                            }),
                            (0, i.jsxs)("ul", {
                              children: [
                                (0, i.jsx)("li", {
                                  children:
                                    "To provide and improve our services, including our PEP-20 token standard, Bitcoin Pepe Layer 2, Bitcoin Pepe bridge, and Bitcoin Pepe DEX.",
                                }),
                                (0, i.jsx)("li", {
                                  children:
                                    "To ensure security, detect fraudulent activity, and enhance protocol integrity.",
                                }),
                                (0, i.jsx)("li", {
                                  children:
                                    "To comply with legal and regulatory requirements.",
                                }),
                                (0, i.jsx)("li", {
                                  children:
                                    "To analyze network activity and improve scalability.",
                                }),
                                (0, i.jsx)("li", {
                                  children:
                                    "To provide customer support and communicate important updates.",
                                }),
                                (0, i.jsx)("li", {
                                  children:
                                    "To measure traffic, and show relevant advertisements",
                                }),
                              ],
                            }),
                            (0, i.jsx)("h2", {
                              children: "4. Third-Party Services",
                            }),
                            (0, i.jsx)("p", {
                              children:
                                "Bitcoin Pepe may integrate with third-party services, including wallet providers, blockchain explorers, and trading platforms. These third parties operate independently, and we encourage users to review their respective policies. We do not control or assume responsibility for the privacy practices of third-party services.",
                            }),
                            (0, i.jsx)("h2", {
                              children: "5. Security Measures",
                            }),
                            (0, i.jsx)("p", {
                              children:
                                "We take reasonable measures to protect user data and maintain the integrity of our ecosystem. However, blockchain transactions inherently carry risks, including smart contract vulnerabilities, protocol exploits, and network disruptions. Users should exercise caution and conduct their own research before interacting with any digital assets.",
                            }),
                            (0, i.jsx)("h2", { children: "6. Data Retention" }),
                            (0, i.jsx)("p", {
                              children:
                                "We do not retain personally identifiable data beyond what is necessary for operational and compliance purposes. Blockchain data is immutable and permanently recorded on the Bitcoin Pepe Layer 2.",
                            }),
                            (0, i.jsx)("h2", {
                              children: "7. Changes to This Policy",
                            }),
                            (0, i.jsx)("p", {
                              children:
                                "We may update this policy periodically to reflect changes in our technology, compliance obligations, or operational practices. Continued use of our services constitutes acceptance of these changes.",
                            }),
                            (0, i.jsx)("h2", { children: "8. Jurisdiction" }),
                            (0, i.jsx)("p", {
                              children:
                                "This Privacy Policy shall be governed by and construed in accordance with the laws of Saint Vincent and the Grenadines.",
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)(l.Z, { className: "pb-[30px]" }),
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
        return e((e.s = 51942));
      }
    ),
      (_N_E = e.O());
  },
]);
