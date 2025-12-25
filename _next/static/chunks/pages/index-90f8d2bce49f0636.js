(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    87314: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return l(98557);
        },
      ]);
    },
    98557: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          __N_SSP: function () {
            return eZ;
          },
          default: function () {
            return e$;
          },
        });
      var a = l(52322),
        s = l(51763),
        i = l(96577),
        n = l.n(i),
        o = l(38082),
        r = l(2784),
        c = l(90512);
      let x = (e, t) => {
        let l = [],
          a = 3;
        for (; 0 != a && a--; ) l.push(...e);
        return l;
      };
      function m(e) {
        let {
            Item: t,
            speed: l = 5,
            data: s,
            hoverStop: i = !1,
            direction: n = "left",
            className: m,
            itemWidth: d = 288,
            itemHeight: p = 288,
            height: h = 620,
          } = e,
          g = (0, o.dD)(),
          u = (0, o.Lm)(),
          w = "top" === n || "bottom" === n,
          b = w ? h / p : u / d,
          f = x(s, b),
          v = f.length;
        return (
          (0, r.useEffect)(() => {
            let e = document.createElement("style"),
              t = "0",
              l = w
                ? "-".concat(p * s.length - 5, "px")
                : "-".concat(d * s.length, "px");
            return (
              ("right" === n || "bottom" === n) && ((t = l), (l = "0")),
              w
                ? (e.innerText =
                    "\n        @keyframes templates-partner-moving-"
                      .concat(
                        n,
                        " {\n          0% {\n            transform: translateY("
                      )
                      .concat(
                        t,
                        ");\n          }\n          100% {\n            transform: translateY("
                      )
                      .concat(l, ");\n          }\n        }\n      "))
                : (e.innerText =
                    "\n        @keyframes templates-partner-moving-"
                      .concat(
                        n,
                        " {\n          0% {\n            transform: translateX("
                      )
                      .concat(
                        t,
                        ");\n          }\n          100% {\n            transform: translateX("
                      )
                      .concat(l, ");\n          }\n        }\n      ")),
              i &&
                (e.innerText +=
                  ".list:hover {\n      animation-play-state: paused !important;\n    }"),
              document.head.appendChild(e),
              () => document.head.removeChild(e)
            );
          }, [g]),
          (0, a.jsxs)("div", {
            className: (0, c.Z)(
              "overflow-hidden",
              w && "h-[".concat(h, "px]"),
              m
            ),
            children: [
              g
                ? (0, a.jsx)("span", { className: "hidden", children: "1" })
                : (0, a.jsx)("span", { className: "hidden", children: "2" }),
              (0, a.jsx)("div", {
                className: (0, c.Z)(
                  "list flex items-center",
                  w ? "flex-col" : ""
                ),
                style: {
                  animation: "templates-partner-moving-"
                    .concat(n, " ")
                    .concat((v / b / 2) * l, "s infinite linear"),
                },
                children: f.map((e, l) =>
                  (0, a.jsx)(
                    "div",
                    {
                      style:
                        "left" === n || "right" === n
                          ? { width: "".concat(d, "px") }
                          : { height: "auto" },
                      className: "tracking-widest w-full flex-shrink-0",
                      children: (0, a.jsx)(t, { ...e }),
                    },
                    l
                  )
                ),
              }),
            ],
          })
        );
      }
      function d(e) {
        let { src: t, link: l, alt: s, width: i, height: o } = e;
        return (0, a.jsx)("div", {
          className: "h-[60px] lg:h-[80px]",
          children: (0, a.jsx)("a", {
            href: l,
            target: "_blank",
            className: "flex items-center justify-center h-full ",
            children: (0, a.jsx)(n(), {
              src: t,
              alt: s,
              width: i,
              height: o,
              className: "",
              unoptimized: !0,
              loading: "lazy",
            }),
          }),
        });
      }
      let p = [
        {
          src: "/images/home/media/ambcrypto.svg",
          alt: "be in crypto",
          width: 92,
          height: 24,
          link: "https://es.ambcrypto.com/bitcoin-pepe-esta-preparado-para-los-listados-de-cex-la-presale-alcanza-42-millones-de-dolares/",
        },
        {
          src: "/images/home/media/coin-gape.svg",
          alt: "be in crypto",
          width: 104,
          height: 29,
          link: "https://coingape.com/sponsored/meme-coin-mania-hits-bitcoin-investors-snap-up-BEPE-as-demand-soars/",
        },
        {
          src: "/images/home/media/coin-telegraph.svg",
          alt: "coin telegraph",
          width: 108,
          height: 25,
          link: "https://cointelegraph.com/press-releases/bitcoins-unofficial-meme-chain-hits-63-traders-bet-on-meme-infra",
        },
        {
          src: "/images/home/media/btc-echo.svg",
          alt: "coin telegraph",
          width: 107,
          height: 22,
          link: "https://www.btc-echo.de/news/bitcoin-pepe-wird-das-der-am-schnellsten-verkaufte-ico-sponsored-203036/",
        },
        {
          src: "/images/home/media/crypto-politan.svg",
          alt: "coin telegraph",
          width: 113,
          height: 25,
          link: "https://www.cryptopolitan.com/3-6m-raised-how-bitcoin-pepe-became-btcs-darling/",
        },
        {
          src: "/images/home/media/nft-evening.svg",
          alt: "nft evening",
          width: 105,
          height: 34,
          link: "https://nftevening.com/bitcoin-pepes-solana-on-bitcoin-tech-sparks-3-7m-investor-stampede/",
        },
        {
          src: "/images/home/media/crypto-news.svg",
          alt: "crypto.news",
          width: 134,
          height: 26,
          link: "https://news.bitcoin.com/pep-20s-memes-on-bitcoin-raise-hits-2-8m-in-10-days/",
        },
        {
          src: "/images/home/media/bitcoin.svg",
          alt: "be in crypto",
          width: 139,
          height: 19,
          link: "https://news.bitcoin.com/pep-20s-memes-on-bitcoin-raise-hits-2-8m-in-10-days/",
        },
        {
          src: "/images/home/media/wallstreet.svg",
          alt: "wallstreet online",
          width: 143,
          height: 19,
          link: "https://www.wallstreet-online.de/nachricht/19239099-pep-20-erreicht-6-3-millionen-us-dollar-xyzverse-vs-bitcoin-pepe-eskaliert",
        },
        {
          src: "/images/home/media/coin-ness.svg",
          alt: "coin ness",
          width: 115,
          height: 28,
          link: "https://coinness.com/community/opinion/7843",
        },
        {
          src: "/images/home/media/block-media.svg",
          alt: "block media",
          width: 148,
          height: 37,
          link: "https://www.blockmedia.co.kr/archives/870613",
        },
        {
          src: "/images/home/media/bit-times.svg",
          alt: "bittimes",
          width: 107,
          height: 24,
          link: "https://bittimes.net/press-release/199394.html",
        },
        {
          src: "/images/home/media/blockchain-magazine.svg",
          alt: "blockchain-magazine",
          width: 132,
          height: 66,
          link: "https://blockchainmagazine.com/sponsored/bitcoin-pepe-hype-surges-while-solaxy-presale-fades/",
        },
        {
          src: "/images/home/media/coin-codex.svg",
          alt: "coin codex",
          width: 131,
          height: 24,
          link: "https://cryptosiam.com/news/world-first-bitcoin-ico-hits-new-record",
        },
        {
          src: "/images/home/media/cryptosiam.svg",
          alt: "cryptosiam",
          width: 124,
          height: 38,
          link: "https://cryptosiam.com/news/world-first-bitcoin-ico-hits-new-record",
        },
        {
          src: "/images/home/media/coin-kurier.svg",
          alt: "coinkurier",
          width: 122,
          height: 28,
          link: "https://www.coinkurier.de/neue-kryptowaehrung-bringt-6-3-millionen-dollar-ein-analysten-prognostizieren-solana-2-0/",
        },
        {
          src: "/images/home/media/bitcoinnews.svg",
          alt: "bitcoinnews.ch",
          width: 50,
          height: 50,
          link: "https://bitcoinnews.ch/47057/solana-on-bitcoin-bricht-mit-39-millionen-us-dollar-im-bitcoin-pepe-presale-rekorde/",
        },
        {
          src: "/images/home/media/coinaute.svg",
          alt: "coinaute",
          width: 98,
          height: 31,
          link: "https://coinaute.com/bitcoin-a-enfin-son-solana-39-millions-de-dollars-deja-leves/",
        },
        {
          src: "/images/home/media/block-beats.svg",
          alt: "the block beats",
          width: 107,
          height: 24,
          link: "https://www.theblockbeats.info/news/57224",
        },
        {
          src: "/images/media/CoinCentral.png",
          alt: "Coin Central",
          width: 127,
          height: 44,
          link: "https://coincentral.com/best-crypto-presales-for-the-next-crypto-bull-run/",
        },
        {
          src: "/images/media/CoinPedia.png",
          alt: "Coin Pedia",
          width: 128,
          height: 44,
          link: "https://coinpedia.org/information/best-crypto-to-buy-now-offering-simple-eth-alternatives/",
        },
        {
          src: "/images/media/Cryptodaily.png",
          alt: "Crypto Daily",
          width: 128,
          height: 44,
          link: "https://cryptodaily.co.uk/2025/05/best-crypto-to-buy-now-what-is-mays-biggest-play",
        },
        {
          src: "/images/media/FinanceFeeds.png",
          alt: "Finance Feeds",
          width: 128,
          height: 44,
          link: "https://financefeeds.com/best-crypto-to-buy-now-as-crypto-adoption-reaches-all-time-highs/",
        },
        {
          src: "/images/media/Layer.png",
          alt: "Layer",
          width: 107,
          height: 24,
          link: "",
        },
        {
          src: "/images/media/Moneycheck.png",
          alt: "Money Check",
          width: 128,
          height: 44,
          link: "https://moneycheck.com/q3-bull-run-best-crypto-to-buy-now-ahead-of-summer-jump/",
        },
        {
          src: "/images/media/TechBullion.png",
          alt: "Tech Bullion",
          width: 107,
          height: 24,
          link: "https://techbullion.com/the-best-crypto-to-buy-to-keep-up-with-record-breaking-bitcoin-week/",
        },
        {
          src: "/images/media/The-Coin-Republic.png",
          alt: "The Coin Republic",
          width: 107,
          height: 24,
          link: "https://www.thecoinrepublic.com/2025/05/10/the-best-crypto-to-buy-now-with-eth-pectra-upgrade-launches/",
        },
        {
          src: "/images/media/The-Crypto.png",
          alt: "The Crypto Updates",
          width: 60,
          height: 24,
          link: "https://www.thecryptoupdates.com/best-crypto-presale-with-altseason-index-still-below-25/",
        },
        {
          src: "/images/media/TronWeekly.png",
          alt: "Tron Weekly",
          width: 50,
          height: 24,
          link: "https://www.tronweekly.com/best-crypto-to-buy-crypto-is-up-today-heres-why/",
        },
      ];
      function h(e) {
        let { className: t } = e,
          l = (0, o.Dh)();
        return (0, a.jsx)("div", {
          className: (0, s.cn)("h-[70px] flex items-center bg-black", t),
          children: l
            ? (0, a.jsx)(m, {
                Item: d,
                data: [...p],
                direction: "left",
                itemWidth: 180,
              })
            : (0, a.jsx)(m, {
                Item: d,
                data: [...p, ...p],
                direction: "left",
                itemWidth: 240,
                hoverStop: !0,
                speed: 10,
              }),
        });
      }
      var g = l(20516),
        u = l(76265),
        w = l(20034),
        b = l(77441),
        f = l(53936);
      function v(e) {
        let { isOpen: t, setIsOpen: l } = e,
          { t: s } = (0, w.$G)(),
          i = (0, o.Dh)();
        return (0, a.jsx)(f.Z, {
          show: t,
          onClose: function () {
            l(!1);
          },
          width: i ? "90vw" : "60vw",
          closeClassName: "!top-3",
          panelClassName: "pt-3",
          children: (0, a.jsx)("div", {
            className: "p-4 lg:p-6",
            children: (0, a.jsx)(g.Z, {
              delay: 100,
              children: (0, a.jsx)("iframe", {
                className: "w-full h-[40vw]  max-lg:h-[60vh] rounded-xl",
                src: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                title: "YouTube video player",
                allow:
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                allowFullScreen: !0,
              }),
            }),
          }),
        });
      }
      function j(e) {
        let { src: t, className: l, width: i, height: o, alt: c = "gif" } = e,
          [x, m] = (0, r.useState)(!1),
          [d] = t.split(".");
        return (0, a.jsxs)("div", {
          className: (0, s.cn)("relative", l),
          children: [
            (0, a.jsx)(n(), {
              src: t,
              width: i,
              height: o,
              alt: c,
              className: " w-full h-auto top-0 left-0",
              style: { opacity: x ? "1" : "0" },
              onLoad: () => {
                m(!0);
              },
              unoptimized: !0,
              loading: "lazy",
            }),
            !x &&
              (0, a.jsx)(n(), {
                src: "".concat(d, ".png"),
                width: i,
                height: o,
                alt: c,
                className: "absolute w-full h-auto top-0 left-0",
                unoptimized: !0,
              }),
          ],
        });
      }
      let N = (e) => {
          let { className: t } = e,
            [l, i] = (0, r.useState)(!1),
            { t: n, i18n: o } = (0, w.$G)(),
            c = "zh" === o.language || "vn" === o.language;
          return (0, a.jsxs)("div", {
            className: (0, s.cn)(
              "max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center",
              t
            ),
            children: [
              (0, a.jsxs)("div", {
                className: "relative z-[6] max-w-[610px] mt-0 lg:mt-2 3xl:mt-4",
                children: [
                  (0, a.jsx)("div", {
                    className: (0, s.cn)(
                      "text-[1.5vw] 3xl:text-[26px] max-lg:text-base !leading-[1.28] font-black mb-3 2xl:mb-4",
                      c ? "shadow-text" : "stroke-text"
                    ),
                    children: n("hero.title"),
                  }),
                  [1, 2, 3, 4].map((e) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className: (0, s.cn)(
                          "text-[1.38vw] 3xl:text-2xl max-lg:text-base !leading-none xl:leading-[1.28] font-black mb-2 2xl:mt-1",
                          c ? "shadow-text" : "stroke-text"
                        ),
                        children: [
                          (0, a.jsx)("span", {
                            className: "mx-2",
                            children: "•",
                          }),
                          " ",
                          n("hero.desc" + e),
                        ],
                      },
                      e
                    )
                  ),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "relative z-[6] max-w-[610px] mt-2 3xl:mt-4 max-lg:pb-6",
                children: (0, a.jsx)("button", {
                  className:
                    "cursor-pointer px-[0.92vw] 3xl:px-4 max-lg:px-4 h-[2.66vw] 3xl:h-[46px] max-lg:h-[44px] bg-[#F6FF00] text-black capitalize font-bold flex items-center justify-center border-[3px] border-black rounded-[0.58vw] 3xl:rounded-[10px] max-lg:rounded-[7px] text-[1vw] 3xl:text-[17px] max-lg:text-base",
                  onClick: () => {
                    i(!0);
                  },
                  children: n("watchBitcoin"),
                }),
              }),
              (0, a.jsx)("div", {
                className: "mt-[1vw] 3xl:mt-4 z-[100] relative max-lg:hidden",
                children: (0, a.jsxs)("div", {
                  className:
                    "max-w-[70%] p-[0.92vw] 3xl:p-4 bg-[#D6D6D6] uppercase font-freude border-[3px] border-black rounded-xl text-black leading-[1] text-[0.92vw] 3xl:text-[16px] z-[100] relative",
                  children: [
                    n("hero.msg1"),
                    (0, a.jsx)("p", {
                      className: "mt-2",
                      children: n("hero.msg2"),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(v, { isOpen: l, setIsOpen: i }),
            ],
          });
        },
        y = () => {
          let [e, t] = (0, r.useState)(0),
            l = (0, r.useRef)(),
            [i, o] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              let e = [
                  "https://cdn.host-video.com/azkamqnwe%3Ahome%3Asmoke.gif",
                  "https://cdn.host-video.com/azkamqnwe_home_machine-gas.webp",
                  "/images/home/hero/machine-open1.webp?v=2",
                  "/images/home/hero/machine-open2.webp",
                  "/images/home/hero/machine-close.webp",
                  "/images/home/hero/trump-back.webp",
                  "/images/home/hero/trump-side.webp",
                  "/images/home/hero/gold-pepe.png",
                  "/images/home/hero/trump-standing.png",
                  "/images/home/hero/trump-laughing.webp",
                ],
                t = 0;
              e.forEach((l) => {
                let a = new Image();
                (a.src = l),
                  (a.onerror = () => {
                    console.log("img error", a.src);
                  }),
                  (a.onload = () => {
                    ++t === e.length &&
                      (o(!0),
                      [
                        "https://cdn.host-video.com/azkamqnwe_home_roadmap.webp",
                        "https://cdn.host-video.com/azkamqnwe_home_how-to-buy.webp",
                        "https://cdn.host-video.com/azkamqnwe_home_giveaway.webp",
                        "https://cdn.host-video.com/azkamqnwe_home_team.webp",
                      ].forEach((e, t) => {
                        setTimeout(() => {
                          let t = new Image();
                          (t.src = e),
                            (t.onload = () => {
                              console.log("img loaded", t.src);
                            });
                        }, 1e3 * t);
                      }));
                  });
              });
            }, []),
            (0, r.useEffect)(() => {
              if (!i) return;
              let e = Date.now(),
                a = () => {
                  let s = Math.min((Date.now() - e) / 13e3, 1);
                  t(s), s < 1 && (l.current = requestAnimationFrame(a));
                };
              return (
                (l.current = requestAnimationFrame(a)),
                () => {
                  l.current && cancelAnimationFrame(l.current);
                }
              );
            }, [i]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(u.E.div, {
                  className:
                    "absolute bottom-[-5%] right-[62%] z-[7] translate-x-1/2 w-[18%] origin-bottom",
                  style: {
                    scale: e <= 0.12 ? 1 : e <= 0.14 ? 1 - (e - 0.12) * 50 : 0,
                    x: "50%",
                  },
                  children: (0, a.jsx)(n(), {
                    src: "/images/home/hero/trump-standing.png",
                    width: 307,
                    height: 725,
                    alt: "Bitcoin Pepe",
                    className: "w-full h-auto -scale-x-100",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "absolute bottom-0 h-[400px] z-[5] right-[50%] translate-x-1/2 w-[29%]",
                  children: [
                    (0, a.jsx)(u.E.div, {
                      className:
                        "absolute bottom-[3vh] left-[25%] w-[55.4%] max-w-[319px]",
                      style: {
                        opacity:
                          e <= 0.1 ? 1 : e <= 0.12 ? 1 - (e - 0.1) * 50 : 0,
                        x: e <= 0.1 ? 0 : e <= 0.12 ? (e - 0.1) * 2500 : 0,
                      },
                      children: (0, a.jsx)(n(), {
                        src: "/images/home/hero/skinny-pepe.png",
                        width: 307,
                        height: 725,
                        alt: "Bitcoin Pepe",
                        className: "w-full h-auto",
                      }),
                    }),
                    (0, a.jsxs)(u.E.div, {
                      className: (0, s.cn)(
                        "absolute z-[0] ",
                        e >= 0.34 && e <= 0.55
                          ? "anim-shake max-w-[601px] w-[120%] left-[-15%] bottom-[10vh]"
                          : "bottom-[7vh] left-[-5%] w-[100%] max-w-[501px] "
                      ),
                      style: {
                        opacity:
                          e <= 0.12
                            ? 0
                            : e <= 0.14
                            ? (e - 0.12) * 50
                            : e > 0.76
                            ? 0
                            : e > 0.74
                            ? 1 - (e - 0.74) * 50
                            : 1,
                        x:
                          e <= 0.12
                            ? -50
                            : e <= 0.14
                            ? -(50 * (1 - (e - 0.12) * 50))
                            : e > 0.74
                            ? (e - 0.74) * 2500
                            : 0,
                      },
                      children: [
                        e <= 0.34 &&
                          (0, a.jsx)(n(), {
                            src: "/images/home/hero/machine-open1.webp?v=2",
                            width: 324,
                            height: 588,
                            alt: "Bitcoin Pepe",
                            className: "w-full h-auto relative z-[2]",
                          }),
                        e > 0.34 &&
                          e <= 0.55 &&
                          (0, a.jsx)(n(), {
                            src: "/images/home/hero/machine-close.webp?v=2",
                            width: 324,
                            height: 588,
                            alt: "Bitcoin Pepe",
                            className: "w-full h-auto relative z-[2]",
                          }),
                        e > 0.55 &&
                          (0, a.jsx)(n(), {
                            src: "/images/home/hero/machine-open2.webp?v=2",
                            width: 324,
                            height: 588,
                            alt: "Bitcoin Pepe",
                            className: "w-full h-auto relative z-[2]",
                          }),
                        e > 0.55 &&
                          e <= 0.7 &&
                          (0, a.jsx)(j, {
                            src: "https://cdn.host-video.com/azkamqnwe_home_machine-gas.webp",
                            width: 324,
                            height: 588,
                            alt: "Bitcoin Pepe",
                            className:
                              "absolute z-[1] bottom-[85%] left-1/2 -translate-x-1/2 w-[70%] h-auto",
                          }),
                      ],
                    }),
                    (0, a.jsx)(u.E.div, {
                      className:
                        "absolute bottom-[0%] left-[17%] w-[76.2%] max-w-[382px]",
                      style: {
                        opacity: e < 0.74 ? 0 : (e - 0.74) * 10,
                        x:
                          e < 0.74
                            ? -50
                            : e < 0.76
                            ? -(50 * (1 - (e - 0.74) * 50))
                            : 0,
                      },
                      children: (0, a.jsx)(n(), {
                        src: "/images/home/hero/gold-pepe.png",
                        width: 307,
                        height: 725,
                        alt: "Bitcoin Pepe",
                        className: "w-full h-auto",
                      }),
                    }),
                    (0, a.jsx)(u.E.div, {
                      className:
                        "absolute bottom-[5vh] left-[-15%] w-[80%] origin-bottom",
                      style: {
                        opacity:
                          e <= 0.14
                            ? 0
                            : e <= 0.16
                            ? (e - 0.14) * 50
                            : e > 0.25
                            ? 0
                            : 1,
                        x:
                          e <= 0.14
                            ? 0
                            : e <= 0.16
                            ? -(50 * (1 - (e - 0.14) * 50))
                            : 0,
                      },
                      children: (0, a.jsx)(n(), {
                        src: "/images/home/hero/trump-back.webp",
                        width: 142,
                        height: 439,
                        alt: "Bitcoin Pepe",
                        className: "w-full h-auto",
                      }),
                    }),
                    (0, a.jsx)(u.E.div, {
                      className:
                        "absolute bottom-[15vh] left-[-7%] w-[58.2%] origin-bottom",
                      style: {
                        display: e <= 0.23 || e > 0.27 ? "none" : "block",
                      },
                      children: (0, a.jsx)(j, {
                        src: "https://cdn.host-video.com/azkamqnwe%3Ahome%3Asmoke.gif",
                        width: 142,
                        height: 439,
                        alt: "Bitcoin Pepe",
                        className: "w-full h-auto",
                      }),
                    }),
                    (0, a.jsx)(u.E.div, {
                      className:
                        "absolute bottom-[5vh] left-[25%] w-[80%] origin-bottom",
                      style: {
                        opacity:
                          e <= 0.25 || e > 0.36
                            ? 0
                            : e > 0.34
                            ? 1 - (e - 0.34) * 50
                            : 1,
                      },
                      children: (0, a.jsx)(n(), {
                        src: "/images/home/hero/trump-back.webp",
                        width: 142,
                        height: 439,
                        alt: "Bitcoin Pepe",
                        className: "w-full h-auto",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(u.E.div, {
                  className:
                    "absolute bottom-[-50px] right-[62%] z-[6]  w-[20%] max-w-[390px] origin-bottom",
                  style: {
                    opacity: e < 0.35 || e > 0.55 ? 0 : 1,
                    scale:
                      e <= 0.35
                        ? 1
                        : e <= 0.37
                        ? (e - 0.35) * 50
                        : e > 0.53
                        ? 1 - (e - 0.53) * 50
                        : 1,
                    x: "50%",
                  },
                  children: (0, a.jsx)(n(), {
                    src: "/images/home/hero/trump-side.webp",
                    width: 160,
                    height: 429,
                    alt: "Bitcoin Pepe",
                    className: "w-full h-auto",
                  }),
                }),
                (0, a.jsx)(u.E.div, {
                  className:
                    "absolute bottom-[-4.55%] right-[62%] z-[7] translate-x-1/2 w-[77%] max-w-[338px] origin-bottom",
                  style: {
                    opacity: e < 0.55 || e > 0.76 ? 0 : 1,
                    scale:
                      e < 0.55
                        ? 0
                        : e <= 0.57
                        ? (e - 0.55) * 50
                        : e > 0.76
                        ? 0
                        : 1,
                    x: "50%",
                  },
                  children: (0, a.jsx)(n(), {
                    src: "/images/home/hero/trump-laughing.webp",
                    width: 160,
                    height: 429,
                    alt: "Bitcoin Pepe",
                    className: "w-full h-auto",
                  }),
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute bottom-[-5.5%] right-[62.1%] z-[7] translate-x-1/2 w-[28%] origin-bottom max-w-[328px]",
                  style: { opacity: e <= 0.76 ? 0 : 1 },
                  children: (0, a.jsx)(n(), {
                    src: "/images/home/hero/trump-standing.webp",
                    width: 160,
                    height: 429,
                    alt: "Bitcoin Pepe",
                    className: "w-full h-auto",
                  }),
                }),
              ],
            })
          );
        };
      function k(e) {
        let { className: t } = e,
          { t: l, i18n: i } = (0, w.$G)(),
          c = ["de", "fr", "pl", "ro", "sk", "pt", "tr"].includes(i.language),
          x = ["es", "vn"].includes(i.language),
          m = "zh" === i.language || "vn" === i.language,
          d = (0, o.Dh)();
        return (0, a.jsxs)("div", {
          id: "home",
          className:
            "w-full overflow-hidden flex flex-col max-lg:items-center  max-lg:h-auto",
          children: [
            (0, a.jsxs)("div", {
              className: (0, s.cn)(
                'relative w-full lg:flex-1 pt-[110px] lg:pt-[128px] 3xl:pt-[160px]  bg-center bg-cover overflow-hidden bg-[url("/images/home/hero/bg2.webp")] max-lg:bg-[url("/images/home/hero/bg2-mobile.png")]',
                t
              ),
              id: "home",
              children: [
                !d &&
                  (0, a.jsx)("div", {
                    className:
                      'absolute left-0 top-[38px] w-full h-[6.65vw] 3xl:h-[115px] bg-[url("/images/home/hero/bg2-top.webp")] bg-cover bg-no-repeat bg-bottom max-lg:hidden',
                  }),
                (0, a.jsxs)("div", {
                  className:
                    "layout h-full flex justify-between max-lg:flex-col max-lg:gap-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "relative z-[10] flex h-full lg:pt-[30px] flex-col max-w-[753px] max-lg:text-center",
                      children: [
                        (0, a.jsxs)("h1", {
                          className: (0, s.cn)(
                            "mt-1 lg:mt-4 3xl:mt-6 text-[3.8vw] 3xl:text-[66px] max-lg:text-[32px] text-primary font-black relative chromeText lg:uppercase",
                            c && "text-[3.125vw] 3xl:text-[54px]",
                            x && "text-[2.89vw] 3xl:text-[50px]"
                          ),
                          children: [
                            (0, a.jsx)("span", {
                              className: (0, s.cn)(
                                "text-[3.125vw] 3xl:text-[54px] max-lg:text-[31px] text-white font-black uppercase leading-none mt-[2.32vw] 3xl:mt-10",
                                m
                                  ? "shadow-text"
                                  : d
                                  ? "stroke-text-2"
                                  : "stroke-text-3"
                              ),
                              children: "Bitcoin Pepe ",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "leading-[4vw] 3xl:leading-[70px] max-lg:leading-none ".concat(
                                  m
                                    ? "shadow-text"
                                    : d
                                    ? "stroke-text-2"
                                    : "stroke-text-3"
                                ),
                              children: "".concat(l("trade.title"), " "),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "text-secondary leading-[4vw] 3xl:leading-[70px] max-lg:leading-none ".concat(
                                  m
                                    ? "shadow-text"
                                    : d
                                    ? "stroke-text-2"
                                    : "stroke-text-3"
                                ),
                              children: l("trade.title2"),
                            }),
                          ],
                        }),
                        (0, a.jsx)(N, { className: "max-lg:hidden" }),
                      ],
                    }),
                    (0, a.jsx)(N, { className: "lg:hidden" }),
                    d
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(n(), {
                              src: "/images/mobile/trump.webp",
                              width: 108,
                              height: 241,
                              alt: "Bitcoin Pepe",
                              className: "absolute right-[0] bottom-0 w-[25%] ",
                            }),
                            (0, a.jsx)(n(), {
                              src: "/images/mobile/pepe.webp",
                              width: 125,
                              height: 242,
                              alt: "Bitcoin Pepe",
                              className: "absolute left-[0] bottom-0 w-[29%]",
                            }),
                          ],
                        })
                      : (0, a.jsx)(y, {}),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(g.Z, {
              children: (0, a.jsx)(h, {
                className:
                  "h-[50px] 2xl:h-[70px] max-lg:h-[70px] !z-[9] relative",
              }),
            }),
          ],
        });
      }
      var C = l(60455);
      function z() {
        let [e, t] = (0, r.useState)(!1);
        function l() {
          t(!1);
        }
        return (
          (0, r.useEffect)(() => {
            setTimeout(() => {
              fetch("https://bitcoinpepe.co/api/ip-info").then(async (e) => {
                "GB" === (await e.json()).country_code && t(!0);
              });
            }, 500);
          }, []),
          (0, a.jsx)(f.Z, {
            show: e,
            onClose: l,
            width: 460,
            closeClassName: "top-4",
            children: (0, a.jsx)("div", {
              className: "bg-[#D1852A] pr-[5px] pb-[5px]",
              children: (0, a.jsxs)("div", {
                className:
                  "relative overflow-hidden bg-[url('/images/block-ip-bg.png')] bg-cover bg-no-repeat bg-center border-r-[3px] border-b-[3px] border-black rounded-[10px] px-6 pt-12 pb-[204px] ",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "text-center px-6 pb-10 bg-white border-[3px] border-black rounded-lg",
                    children: [
                      (0, a.jsx)(n(), {
                        src: "/images/logo-pepe.png",
                        width: 60,
                        height: 60,
                        alt: "Bitcoin Pepe",
                        className: "mx-auto mb-4 -mt-9",
                      }),
                      (0, a.jsx)("h2", {
                        className:
                          "font-bold text-[24px] leading-none uppercase max-lg:text-xl max-lg:leading-6",
                        children:
                          "Purchases are not available for customers with UK IPS",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-sm leading-[18px] mt-3",
                        children:
                          "Back in October 2023 the Financial Conduct Authority restricted\n            crypto presales in the ".concat(
                            "UK",
                            "."
                          ),
                      }),
                    ],
                  }),
                  (0, a.jsx)(n(), {
                    src: "/images/home/bitcoin-pepe.webp",
                    width: 224,
                    height: 400,
                    alt: "Bitcoin Pepe",
                    className:
                      "absolute bottom-[-160px] left-1/2 -translate-x-1/2",
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "absolute left-0 bottom-0 w-full px-6 pb-8 flex lg:items-center gap-6 max-lg:gap-3 max-lg:flex-col",
                    children: [
                      (0, a.jsxs)(C.Z, {
                        onClick: () => l(),
                        className:
                          "lg:flex-1 bg-primary h-[40px] text-lg max-lg:h-[48px]",
                        children: ["I’m not from ".concat("UK"), " "],
                      }),
                      (0, a.jsx)(C.Z, {
                        onClick: () =>
                          void (window.location.href = "https://google.com"),
                        className:
                          "lg:flex-1 bg-[#E3E3E3] text-lg h-[40px] max-lg:h-[48px]",
                        children: "Leave the site",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      var B = l(10596);
      function P(e) {
        let { children: t, className: l, delay: s = 0, id: i, style: n } = e;
        return (0, a.jsx)(u.E.div, {
          id: i,
          initial: { opacity: 0, y: -100 },
          whileInView: { opacity: 1, y: 0 },
          animate: { opacity: 1, y: 0 },
          viewport: { once: !0, amount: 0.5 },
          transition: { duration: 1, delay: s },
          className: l,
          style: n,
          children: t,
        });
      }
      var E = l(40320),
        L = l(39097),
        T = l.n(L),
        F = l(5632);
      l(2321);
      var S = l(93158);
      function _(e) {
        let { title: t, className: l } = e,
          { i18n: i } = (0, w.$G)(),
          n = (0, o.Dh)();
        return (0, a.jsx)("h2", {
          className: (0, s.cn)(
            "text-[2.78vw] 3xl:text-[48px] max-lg:text-[28px] text-primary uppercase font-black ",
            "zh" === i.language
              ? "shadow-text"
              : n
              ? "stroke-text-2"
              : "stroke-text-3",
            l
          ),
          style: { textShadow: "2px 2px 0px #000" },
          children: t,
        });
      }
      var M = l(16893);
      function G(e) {
        var t;
        let { className: l, defaultBlogList: i } = e,
          { t: c, i18n: x } = (0, w.$G)(),
          m = ["vn", "th"].includes(x.language),
          d = ["de", "fr", "pl", "ro"].includes(x.language),
          p = (0, r.useRef)(null),
          { data: h } = E.SX.blog.getBlogList.useQuery({}),
          g = [
            {
              url: "https://youtu.be/DLWHlbnTVvo",
              image: "/images/blog/video5.jpg",
              title:
                "Bitcoin Pepe ($BEPE): Countdown zur Ank\xfcndigung! Mein letztes Update vor dem Listing!",
            },
            {
              url: "https://youtu.be/buBR4jJyO-0",
              image: "/images/blog/video6.jpg",
              title:
                "100불 사둔지 몇 달째.. 진짜 이제 곧 상장해주나 비트코인페페 형들?",
            },
            {
              url: "https://youtu.be/yGqUWUgSmdE",
              image: "/images/blog/video7.jpg",
              title:
                "Bitcoin Pepe - コインをベストプライスで購入するチャンスはまだあります！",
            },
            {
              url: "https://crypto.news/countdown-bitcoin-pepe-raise-hits-15-3m-7-days-before-listing-announcement/",
              image: "/images/blog/article4.webp",
              title:
                "Bitcoin Pepe - コインをベストプライスで購入するチャンスはまだあります！",
            },
            {
              url: "https://youtu.be/L8F5yDejGUo?si=y8Uca6a0t8YdwzFN",
              image: "/images/blog/video3.jpg",
              title:
                "\uD83C\uDFC6 My Meme Crypto Pick of 2025? - Bitcoin Pepe and their unique approach to Memes! CEX | Team!",
            },
            {
              url: "https://www.youtube.com/watch?v=Z40wlmpqTd4",
              image: "/images/blog/video4.jpg",
              title:
                "Bitcoin Pepe: FINAL PRESALE HOURS! (98x Return Like PEPE? My Analysis!)",
            },
            {
              url: "https://www.youtube.com/watch?v=DJsblU1iOBQ",
              image: "/images/blog/video1.jpg",
              title:
                "Missed $BTC? LAST CHANCE to Buy $BEPE Before It EXPLODES!",
            },
            {
              url: "https://cointelegraph.com/press-releases/bitcoin-pepe-team-announces-cex-listings",
              image: "/images/blog/article1.avif",
              title: "Bitcoin Pepe team announces CEX listings",
            },
            {
              url: "https://www.youtube.com/watch?v=_Zoy6bqVsho",
              image: "/images/blog/video2.jpg",
              title: "Bitcoin Pepe New Meme Coin Crypto Presale! ",
            },
            {
              url: "https://www.cryptopolitan.com/bitcoin-pepe-price-prediction-could-it-hit-1-50-after-t1-launches/",
              image: "/images/blog/article2.webp",
              title:
                "Bitcoin Pepe Price Prediction: Could It Hit $1.50 After T1 Launches?",
            },
            {
              url: "https://coinpedia.org/sponsored/bitcoin-pepe-raises-250k-in-24-hours-after-t1-listings-announced/",
              image: "/images/blog/article2.webp",
              title:
                "Bitcoin Pepe Raises $250k in 24 Hours After T1 Listings Announced",
            },
          ].concat(
            null !== (t = null == h ? void 0 : h.blogs) && void 0 !== t
              ? t
              : i.blogs
          ),
          u = (0, o.Lm)(),
          b = (0, r.useRef)(null),
          f = (0, M.Y)(b, { once: !0 }),
          v = (0, o.Dh)();
        return (0, a.jsxs)("div", {
          ref: b,
          className: (0, s.cn)(
            "relative w-full overflow-hidden pt-[4.6vw] 3xl:pt-[80px] max-lg:py-[30px] bg-[#000]  bg-center bg-cover",
            f &&
              'bg-[url("/images/home/about-bg2.webp")] max-lg:bg-[url("/images/home/about-bg-mobile1.webp")]',
            l
          ),
          id: "about",
          children: [
            (0, a.jsx)("div", {
              className:
                "relative pb-[4.6vw] 3xl:pb-[80px] layout flex items-center justify-center max-lg:flex-col",
              children: (0, a.jsxs)("div", {
                className:
                  "w-[48.2vw] max-lg:w-full 3xl:w-[833px] relative z-[2] flex flex-col items-center",
                children: [
                  (0, a.jsx)(_, {
                    title: c("about"),
                    className: (0, s.cn)(
                      "uppercase text-white text-center max-lg:mb-4",
                      m && "text-[2.01vw] 3xl:text-4xl max-lg:text-3xl",
                      d && "text-[1.74vw] 3xl:text-3xl max-lg:text-2xl"
                    ),
                  }),
                  (0, a.jsx)(D, {}),
                  "en" === x.language && null,
                ],
              }),
            }),
            v &&
              (0, a.jsx)(n(), {
                src: "/images/mobile/about.webp?v=2",
                alt: "about",
                width: 193,
                height: 233,
                className: "w-[45%] h-auto absolute z-[0] left-0 bottom-0 ",
              }),
          ],
        });
      }
      let A = (e) => {
          var t;
          let { t: l, i18n: i } = (0, w.$G)(),
            o = (0, F.useRouter)(),
            r = e.image;
          return (0, a.jsxs)("div", {
            className:
              "flex flex-col w-full font-semibold max-lg:items-center max-lg:text-center cursor-pointer",
            onClick: () => {
              e.slug
                ? o.push("/blog/".concat(e.slug))
                : window.open(e.url, "_blank");
            },
            children: [
              (0, a.jsxs)("div", {
                className:
                  "relative h-[6.92vw] 3xl:h-[118px] max-lg:h-[40vw] max-md:w-full border-[3px] border-white rounded-lg overflow-hidden bg-black mb-[0.69vw] 3xl:mb-3 max-lg:mb-5",
                children: [
                  (0, a.jsx)(n(), {
                    src: r,
                    width: 258,
                    height: 112,
                    alt: "about",
                    className: "object-cover w-full h-full",
                    unoptimized: !0,
                  }),
                  e.date &&
                    (0, a.jsxs)("div", {
                      className: (0, s.cn)(
                        "absolute left-0 top-0 w-full h-full  flex flex-col items-center justify-center",
                        "zh" === i.language
                          ? "font-bold shadow-text"
                          : "font-black stroke-text-2"
                      ),
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "text-[1.27vw] 3xl:text-[22px] max-lg:text-[26px] leading-none",
                          children: "UPDATE",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "text-[3.2vw] 3xl:text-[64px] max-lg:text-[80px] leading-none",
                          children: e.date,
                        }),
                      ],
                    }),
                ],
              }),
              (0, a.jsxs)(T(), {
                href: e.slug
                  ? "/blog/".concat(e.slug)
                  : null !== (t = e.url) && void 0 !== t
                  ? t
                  : "",
                target: "_blank",
                children: [
                  (0, a.jsx)("div", {
                    className: (0, s.cn)(
                      "text-[0.81vw] 3xl:text-sm leading-[1.28] max-lg:text-base",
                      "zh" === i.language
                        ? "font-bold shadow-text"
                        : "font-black stroke-text-1"
                    ),
                    children: e.dateString,
                  }),
                  (0, a.jsx)("div", {
                    className: (0, s.cn)(
                      "font-bold text-[1.04vw] 3xl:text-lg max-lg:text-lg leading-none max-lg:w-[70%] max-lg:mx-auto",
                      "zh" === i.language
                        ? "font-bold shadow-text"
                        : "font-black stroke-text-1"
                    ),
                    children: e.title,
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "mt-2 text-primary underline capitalize text-[0.81vw] 3xl:text-sm max-lg:text-lg leading-[1.28]",
                    children: l("about.readMore"),
                  }),
                ],
              }),
            ],
          });
        },
        D = () => {
          let [e, t] = (0, r.useState)(!1),
            l = (0, o.dD)();
          return (0, a.jsx)(P, {
            className:
              "relative w-full h-[22.57vw] 3xl:h-[390px] max-lg:h-[50vw] border-[3px] border-white rounded-lg overflow-hidden bg-black mt-[0.93vw] 3xl:mt-4 max-lg:mt-0",
            delay: 0.3,
            children: e
              ? (0, a.jsx)("div", {
                  className: "absolute left-0 top-0 w-full h-full",
                  children: (0, a.jsx)("iframe", {
                    width: "100%",
                    height: "100%",
                    src: "https://www.youtube.com/embed/wWVQ7LurGxY?si=eFAi6Yb4UDeCMZo0",
                    title: "YouTube video player",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    allowFullScreen: !0,
                    referrerPolicy: "strict-origin-when-cross-origin"
                  }),
                })
              : (0, a.jsxs)("div", {
                  className: "size-full absolute left-0 top-0",
                  children: [
                    (0, a.jsx)(n(), {
                      src: l
                        ? "/images/mobile/about-video.webp"
                        : "/images/home/about-video.webp",
                      alt: "about",
                      width: 833,
                      height: 390,
                      className: "size-full object-cover",
                    }),
                    (0, a.jsx)(n(), {
                      src: "/images/home/icon-play.png",
                      alt: "about",
                      width: 90,
                      height: 90,
                      className:
                        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-full cursor-pointer size-[5.2vw] 3xl:size-[90px] max-lg:size-[60px]",
                      onClick: () => t(!0),
                    }),
                  ],
                }),
          });
        },
        Z = (e) => {
          let { className: t, onClick: l } = e;
          return (0, a.jsxs)("svg", {
            width: "39",
            height: "39",
            viewBox: "0 0 39 39",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            onClick: l,
            children: [
              (0, a.jsx)("rect", {
                x: "1.5",
                y: "1.5",
                width: "36",
                height: "36",
                rx: "9.5",
                fill: "black",
                stroke: "white",
                "stroke-width": "3",
              }),
              (0, a.jsx)("path", {
                d: "M28.4375 20.5C28.9898 20.5 29.4375 20.0523 29.4375 19.5C29.4375 18.9477 28.9898 18.5 28.4375 18.5V20.5ZM9.85539 18.7929C9.46487 19.1834 9.46487 19.8166 9.85539 20.2071L16.2194 26.5711C16.6099 26.9616 17.243 26.9616 17.6336 26.5711C18.0241 26.1805 18.0241 25.5474 17.6336 25.1569L11.9767 19.5L17.6336 13.8431C18.0241 13.4526 18.0241 12.8195 17.6336 12.4289C17.243 12.0384 16.6099 12.0384 16.2194 12.4289L9.85539 18.7929ZM28.4375 18.5L10.5625 18.5V20.5L28.4375 20.5V18.5Z",
                fill: "white",
              }),
            ],
          });
        },
        $ = (e) => {
          let { className: t, onClick: l } = e;
          return (0, a.jsxs)("svg", {
            width: "39",
            height: "39",
            viewBox: "0 0 39 39",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            onClick: l,
            children: [
              (0, a.jsx)("rect", {
                x: "37.5",
                y: "37.5",
                width: "36",
                height: "36",
                rx: "9.5",
                transform: "rotate(-180 37.5 37.5)",
                fill: "black",
                stroke: "white",
                "stroke-width": "3",
              }),
              (0, a.jsx)("path", {
                d: "M10.5625 18.5C10.0102 18.5 9.5625 18.9477 9.5625 19.5C9.5625 20.0523 10.0102 20.5 10.5625 20.5L10.5625 18.5ZM29.1446 20.2071C29.5351 19.8166 29.5351 19.1834 29.1446 18.7929L22.7806 12.4289C22.3901 12.0384 21.757 12.0384 21.3664 12.4289C20.9759 12.8195 20.9759 13.4526 21.3664 13.8431L27.0233 19.5L21.3664 25.1569C20.9759 25.5474 20.9759 26.1805 21.3664 26.5711C21.757 26.9616 22.3901 26.9616 22.7806 26.5711L29.1446 20.2071ZM10.5625 20.5L28.4375 20.5L28.4375 18.5L10.5625 18.5L10.5625 20.5Z",
                fill: "white",
              }),
            ],
          });
        };
      function R(e) {
        let { className: t } = e,
          { t: l, i18n: i } = (0, w.$G)(),
          c = ["vn", "th"].includes(i.language),
          x = ["de", "fr", "pl", "ro"].includes(i.language),
          m = (0, r.useRef)(null),
          d = (0, M.Y)(m, { once: !0 }),
          p = (0, o.dD)();
        return (0, a.jsx)("div", {
          ref: m,
          className: (0, s.cn)(
            "relative w-full overflow-hidden  bg-[#000] bg-center bg-cover",
            d &&
              'bg-[url("/images/home/giveaway-bg-mobile.webp")] lg:bg-[url("/images/home/giveaway-bg.webp")]',
            t
          ),
          id: "giveaway",
          children: (0, a.jsx)("div", {
            style: {
              background: p
                ? ""
                : "linear-gradient(to bottom,#A803A5 0%,#A803A500 50%)",
            },
            children: (0, a.jsxs)("div", {
              className:
                "relative layout flex items-end justify-between pt-[4.63vw] 3xl:pt-[80px] max-lg:py-[30px]",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "relative z-[2] flex flex-col items-start max-lg:items-center lg:max-w-[45%] pb-[4.63vw] 3xl:pb-[80px] max-lg:pb-0 max-lg:w-full",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, a.jsx)(_, {
                          title: "1,000,000 $BEPE",
                          className: (0, s.cn)(
                            "relative z-[2] uppercase max-lg:text-center",
                            c && "text-[2.01vw] 3xl:text-4xl max-lg:text-3xl",
                            x && "text-[1.74vw] 3xl:text-3xl max-lg:text-2xl"
                          ),
                        }),
                        (0, a.jsx)(_, {
                          title: (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsxs)("span", {
                                children: [l("giveaway.title"), " "],
                              }),
                              " ",
                              (0, a.jsx)("span", {
                                className: (0, s.cn)(
                                  "max-lg:text-2xl",
                                  x && "max-lg:text-lg"
                                ),
                                children: "\uD83D\uDEA8",
                              }),
                            ],
                          }),
                          className: (0, s.cn)(
                            "relative z-[2] uppercase lg:text-white -mt-5 ",
                            c &&
                              "text-[2.01vw] 3xl:text-4xl max-lg:text-3xl mt-0",
                            x &&
                              "text-[1.74vw] 3xl:text-3xl max-lg:text-2xl mt-0"
                          ),
                        }),
                        p &&
                          (0, a.jsx)(n(), {
                            src: "/images/home/giveaway-mobile.png",
                            alt: "Bitcoin Pepe",
                            width: 91,
                            height: 97,
                            className:
                              "absolute left-[-55px] top-1/2 -translate-y-1/2",
                          }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-7 w-full",
                      style: { display: "none" },
                      children: [
                        (0, a.jsx)(V, {
                          title: l("giveaway.yourEntries"),
                          number: "0",
                        }),
                        (0, a.jsx)(V, {
                          title: l("giveaway.totalEntries"),
                          number: "0",
                          numberColor: "#FFD000",
                        }),
                        (0, a.jsx)(V, {
                          title: l("giveaway.daysLeft"),
                          number: "0",
                          numberColor: "#FF7700",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col gap-4 font-semibold mt-6 text-[0.93vw] 3xl:text-base max-lg:text-base",
                      children: [
                        (0, a.jsx)("p", {
                          className:
                            "font-bold text-[1.28vw] 3xl:text-[22px] max-lg:text-lg",
                          style: { textShadow: "0px 0px 15.4px #930E90" },
                          children: l("giveaway.subtitle"),
                        }),
                        (0, a.jsx)("p", {
                          style: { textShadow: "0px 0px 15.4px #930E90" },
                          children: l("giveaway.desc1"),
                        }),
                        (0, a.jsx)("p", {
                          style: { textShadow: "0px 0px 15.4px #930E90" },
                          children: l("giveaway.desc2"),
                        }),
                      ],
                    }),
                    (0, a.jsx)("a", {
                      href: "https://dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                      target: "_blank",
                      className: "max-lg:block max-lg:w-full",
                      children: (0, a.jsx)(C.Z, {
                        theme: "cyan",
                        className:
                          "w-[172px] mt-8 max-lg:w-full max-lg:h-[46px] max-lg:!text-[20px]",
                        children: "View Chart",
                      }),
                    }),
                  ],
                }),
                !p &&
                  (0, a.jsx)("div", {
                    className: "absolute bottom-0 left-[50%]  w-[35%] ",
                    children: (0, a.jsx)(n(), {
                      src: "/images/home/strong-pepe.png",
                      width: 588,
                      height: 553,
                      alt: "Bitcoin Pepe",
                      className: "w-full h-auto",
                    }),
                  }),
              ],
            }),
          }),
        });
      }
      let V = (e) => {
        let {
          number: t,
          numberColor: l = "#00FBFF",
          title: i,
          className: n,
        } = e;
        return (0, a.jsxs)("div", {
          className: (0, s.cn)(
            "flex flex-col items-center justify-center text-[4.4vw] 3xl:h-[76px] max-lg:h-[68px] border border-white  rounded-[10px] flex-1",
            n
          ),
          children: [
            (0, a.jsx)("p", {
              className:
                "font-black text-[1.74vw] 3xl:text-[30px] stroke-text-2 leading-[1.33vw] 3xl:leading-[23px]",
              style: { color: l },
              children: t,
            }),
            (0, a.jsx)("p", {
              className:
                "text-[1.05vw] 3xl:text-lg max-lg:text-base font-bold max-lg:font-medium capitalize text-white leading-[1.33vw] 3xl:leading-[23px]",
              children: i,
            }),
          ],
        });
      };
      var q = l(26691);
      let H = () => {
        let e = (0, r.useRef)(null),
          t = (0, M.Y)(e, { once: !0 });
        return (0, a.jsx)("div", {
          className:
            "hidden relative w-[28.6vw] 3xl:w-[495px] max-lg:w-[90%] h-[15.35vw] 3xl:h-[248px] max-lg:h-[50vw] border-[3px] border-black rounded-lg z-[50] overflow-hidden bg-black mt-[0.68vw] 3xl:mt-3 max-lg:mt-0",
        });
      };
      function I(e) {
        let { className: t } = e,
          { t: l } = (0, w.$G)(),
          [i, c] = (0, r.useState)(0),
          x = (e) => {
            c(e);
          },
          m = (0, r.useRef)(null),
          d = (0, M.Y)(m, { once: !0 });
        return (
          (0, o.Dh)(),
          (0, a.jsxs)("div", {
            ref: m,
            className: (0, s.cn)(
              "relative w-full lg:h-screen pt-[4.63vw] 3xl:pt-[80px] bg-[#3e3e40] bg-center bg-cover ",
              d &&
                'bg-[url("/images/home/how-to-buy-bg.webp")] max-lg:bg-[url("/images/home/how-to-buy-bg-mobile.webp")]',
              t
            ),
            id: "howToBuy",
            children: [
              (0, a.jsx)("div", {
                className: "flex justify-center max-lg:mb-6",
                children: (0, a.jsx)(_, {
                  title: l("howToBuy"),
                  className: "uppercase text-white",
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "relative layout h-full pb-[3vw] 3xl:pb-[50px] flex items-center justify-center max-lg:flex-col-reverse lg:gap-[6vw]",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col w-[670px] max-lg:w-full pt-[2.32vw] 3xl:pt-[40px] lg:pr-4 h-full max-lg:overflow-hidden",
                    children: [
                      (0, a.jsxs)("div", {
                        className: (0, s.cn)(
                          "w-full bg-white px-[1.85vw] 3xl:px-8 py-1 pb-5 border-[3px] border-black rounded-[7px] mt-[-3.3px] 2xl:mt-[-3px] overflow-y-auto overflow-x-hidden",
                          "max-lg:px-4 max-lg:mt-[-3px] max-lg:max-h-[450px]",
                          0 === i ? "rounded-tl-none" : "rounded-tr-none"
                        ),
                        children: [
                          0 === i ? (0, a.jsx)(K, {}) : (0, a.jsx)(X, {}),
                          (0, a.jsx)("div", {
                            className:
                              "flex gap-6 mt-4 max-lg:flex-col max-lg:gap-5",
                            children: [
                              {
                                title: l("howToBuy.token.title"),
                                content: l("howToBuy.token.content"),
                                show: !0,
                              },
                              {
                                title: l("howToBuy.claim.title"),
                                content: l("howToBuy.claim.content"),
                                show: !0,
                              },
                            ].map(
                              (e, t) =>
                                e.show &&
                                (0, a.jsxs)(
                                  "div",
                                  {
                                    className: "lg:flex-1 text-black ",
                                    style: { textShadow: "" },
                                    children: [
                                      (0, a.jsx)("h3", {
                                        className:
                                          "text-[0.93vw] 3xl:text-base max-lg:text-lg font-freude",
                                        children: e.title,
                                      }),
                                      (0, a.jsx)("p", {
                                        className:
                                          "text-[0.75vw] 3xl:text-[13px] max-lg:text-[15px]",
                                        children: e.content,
                                      }),
                                    ],
                                  },
                                  e.title
                                )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(H, {}),
                  (0, a.jsx)("div", {
                    className:
                      "absolute bottom-[2%] right-[3%]  w-[30%] max-w-[510px] h-auto max-lg:right-[0px] max-lg:bottom-auto max-lg:top-[-50px] max-lg:w-[150px] max-lg:h-[140px] max-lg:overflow-hidden",
                    children: (0, a.jsx)(n(), {
                      src: "/images/home/how-to-buy.png",
                      width: 1562,
                      height: 1226,
                      alt: "Bitcoin Pepe",
                      className: "w-full max-lg:relative max-lg:right-[-10%]",
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      let Y = (e) => {
          let { children: t, className: l, active: i = !1, onClick: n } = e,
            { i18n: o } = (0, w.$G)();
          return (0, a.jsx)("div", {
            className: (0, s.cn)(
              "flex-1 h-[3.47vw] 3xl:h-[60px] rounded-t-[7px] flex items-center justify-center text-[1.28vw] 3xl:text-[22px] cursor-pointer hover:text-secondary uppercase font-black  border-[3px]",
              "max-lg:h-[60px] max-lg:text-xl",
              "zh" === o.language ? "shadow-text" : "stroke-text-2",
              i
                ? "text-secondary bg-white border-black border-b-0"
                : "text-white border-transparent border-b-0",
              l
            ),
            onClick: () => {
              n && n();
            },
            children: t,
          });
        },
        K = (e) => {
          let { isShow: t = !0 } = e,
            { t: l } = (0, w.$G)();
          return (0, a.jsxs)(a.Fragment, {
            children: [
              [
                {
                  title: l("howToBuy.site.title1"),
                  content: (0, a.jsx)(w.cC, {
                    i18nKey: "howToBuy.site.content1",
                    components: {
                      line: (0, a.jsx)("span", {
                        className: "underline inline",
                      }),
                    },
                  }),
                  num: "1",
                },
                {
                  title: l("howToBuy.site.title2"),
                  content: l("howToBuy.site.content2"),
                  num: "2",
                },
                {
                  title: l("howToBuy.site.title3"),
                  content: l("howToBuy.site.content3"),
                  num: "3",
                  className: "pr-10",
                },
              ].map((e, l) =>
                (0, a.jsx)(
                  U,
                  {
                    title: e.title,
                    content: e.content,
                    num: e.num,
                    className: e.className,
                    delay: 0.5 * l + 0.5,
                    showLine: t,
                  },
                  e.title
                )
              ),
              (0, a.jsx)(U, {
                showLine: !1,
                num: (0, a.jsxs)("svg", {
                  width: "18",
                  height: "15",
                  viewBox: "0 0 18 15",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, a.jsx)("title", { children: "Check" }),
                    (0, a.jsx)("path", {
                      d: "M2 8.1875L7.6 13L16 2",
                      stroke: "black",
                      "stroke-width": "4",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    }),
                  ],
                }),
                title: (0, a.jsxs)(C.Z, {
                  theme: "secondary",
                  className: "overflow-hidden relative",
                  onClick: () => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  },
                  children: [
                    l("buyBITPEPENow"),
                    (0, a.jsx)("div", {
                      className:
                        "absolute w-[calc(100%+6px)] h-[calc(100%+6px)] top-[-3px] left-[-3px] pointer-events-none overflow-hidden shineButton2 rounded-[11px]",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        X = () => {
          let { t: e } = (0, w.$G)();
          return (0, a.jsxs)(a.Fragment, {
            children: [
              [
                {
                  title: e("howToBuy.wallet.title1"),
                  content: (0, a.jsx)(w.cC, {
                    i18nKey: "howToBuy.wallet.content1",
                    components: {
                      line: (0, a.jsx)("span", { className: "underline " }),
                    },
                    values: {
                      address: "0xcomingsoon",
                    },
                  }),
                  num: "1",
                },
                {
                  title: e("howToBuy.wallet.title2"),
                  content: e("howToBuy.wallet.content2"),
                  num: "2",
                },
                {
                  title: e("howToBuy.wallet.title3"),
                  content: e("howToBuy.wallet.content3"),
                  num: "3",
                  className: "pr-10",
                },
              ].map((e, t) =>
                (0, a.jsx)(
                  U,
                  {
                    title: e.title,
                    content: e.content,
                    num: e.num,
                    className: e.className,
                    delay: 0.5 * t + 0.5,
                    showLine: !0,
                  },
                  e.title
                )
              ),
              (0, a.jsx)(U, {
                showLine: !1,
                num: (0, a.jsxs)("svg", {
                  width: "18",
                  height: "15",
                  viewBox: "0 0 18 15",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, a.jsx)("title", { children: "Check" }),
                    (0, a.jsx)("path", {
                      d: "M2 8.1875L7.6 13L16 2",
                      stroke: "black",
                      "stroke-width": "4",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    }),
                  ],
                }),
                title: (0, a.jsxs)(C.Z, {
                  theme: "secondary",
                  className: "overflow-hidden relative",
                  onClick: () => {
                    navigator.clipboard.writeText(
                      "0xcomingsoon"
                    ),
                      q.g.success("Address Copied to clipboard");
                  },
                  children: [
                    e("copyAddress"),
                    (0, a.jsx)("div", {
                      className:
                        "absolute w-[calc(100%+6px)] h-[calc(100%+6px)] top-[-3px] left-[-3px] pointer-events-none overflow-hidden shineButton2 rounded-[11px]",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        U = (e) => {
          let {
            title: t,
            content: l,
            num: i,
            showLine: n = !0,
            className: o,
            delay: r = 0,
          } = e;
          return (0, a.jsxs)("div", {
            className: (0, s.cn)(
              "relative pl-[2.78vw] 3xl:pl-12 py-1 text-[0.93vw] 3xl:text-base text-black",
              "max-lg:pl-12 max-lg:text-base",
              o
            ),
            children: [
              (0, a.jsx)("span", {
                className:
                  "absolute left-0 top-3 size-[2.08vw] 3xl:size-[36px] max-lg:size-[33px] rounded-full bg-secondary border-[3px] border-black flex items-center justify-center text-[1.16vw] 3xl:text-xl max-lg:text-[20px] font-bold",
                children: i,
              }),
              (0, a.jsx)("h3", {
                className:
                  "font-bold text-[1.27vw] 3xl:text-[22px] max-lg:text-[20px] capitalize leading-[1.5] pt-[0.6vw] 3xl:pt-3 max-lg:pt-3 pb-1",
                children: t,
              }),
              (0, a.jsx)("div", { className: "", children: l }),
              n &&
                (0, a.jsx)("i", {
                  className:
                    "absolute left-[15px] top-[55px] bottom-[-5px] w-[3px] bg-black",
                }),
            ],
          });
        };
      var O = l(79645),
        W = l(14025),
        Q = l(25675),
        J = l(51526);
      let ee = (0, r.forwardRef)(function (e, t) {
          return (0, a.jsx)(n(), { ...e, ref: t });
        }),
        et = (0, u.E)(ee);
      function el(e) {
        let { className: t } = e,
          { t: l } = (0, w.$G)(),
          { scrollYProgress: i } = (0, O.v)(),
          [o, c] = (0, r.useState)(0);
        (0, W.W)(i, "change", (e) => {
          c(e >= 2 / 7 && e <= 3 / 7 ? (e - 2 / 7) * 7 : 0);
        });
        let [x, m] = (0, r.useState)(!1),
          [d, p] = (0, r.useState)(1);
        (0, r.useEffect)(() => {
          p((e) => (o >= 0.9 ? 0 : Math.random() > 0.5 ? -0.01 : 0.01));
        }, [o]);
        let h = (0, Q._)();
        (0, r.useEffect)(() => {
          (async function () {
            o >= 0.8 && !x
              ? (m(!0),
                await (null == h
                  ? void 0
                  : h.start({ color: "#FFF", transition: { duration: 0 } })),
                await (null == h
                  ? void 0
                  : h.start({
                      color: "#fedc45",
                      transition: { duration: 0, delay: 0.5 },
                    })),
                await (null == h
                  ? void 0
                  : h.start({
                      color: "#FFF",
                      transition: { duration: 0, delay: 0.5 },
                    })),
                await (null == h
                  ? void 0
                  : h.start({
                      color: "#fedc45",
                      transition: { duration: 0, delay: 0.5 },
                    })))
              : o < 0.9 && x && m(!1);
          })().catch((e) => {
            console.error(e);
          });
        }, [o, x, h]);
        let { i18n: g } = (0, w.$G)();
        return (0, a.jsx)("div", {
          className: (0, s.cn)(
            'relative w-full h-screen overflow-hidden pt-[4.63vw] 3xl:pt-[80px] bg-[#000] bg-[url("/images/home/roadmap-bg.webp")] bg-center bg-no-repeat',
            t
          ),
          style: { backgroundSize: "auto 100%" },
          id: "roadmap",
          children: (0, a.jsxs)("div", {
            className: "relative layout h-full flex flex-col items-center",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute bottom-[6%] left-[-7%] w-[30%] max-w-[649px] origin-bottom",
                children: (0, a.jsx)(n(), {
                  src: "/images/home/roadmap.png",
                  width: 649,
                  height: 641,
                  alt: "Bitcoin Pepe",
                  className: "w-full",
                }),
              }),
              (0, a.jsxs)("div", {
                className: "h-[65%] w-full flex flex-col items-center",
                children: [
                  (0, a.jsx)(_, {
                    title: l("roadmap"),
                    className: "mt-[2.32vw] 3xl:mt-[40px]",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "relative flex-1 flex items-center justify-start px-[3.2vw] 3xl:px-[56px]",
                    children: (0, a.jsxs)("div", {
                      className:
                        "relative z-[2] flex items-start h-[6px] w-[100%]",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute left-[50%] -translate-x-1/2 top-0 w-5/6 h-full bg-secondary",
                        }),
                        (0, a.jsx)(ea, {
                          className: "flex-1 ",
                          title: l("roadmap.phase1"),
                          index: 1,
                          img: (0, a.jsx)(n(), {
                            src: "/images/home/roadmap1.png",
                            alt: "Bitcoin Pepe",
                            width: 120,
                            height: 120,
                            className: "w-auto h-[3.7vw] 3xl:h-[64px]",
                          }),
                        }),
                        (0, a.jsx)(ea, {
                          className: "flex-1 ",
                          title: l("roadmap.phase2"),
                          index: 2,
                          reverse: !0,
                          img: (0, a.jsx)(n(), {
                            src: "/images/home/roadmap2.png",
                            alt: "Bitcoin Pepe",
                            width: 120,
                            height: 120,
                            className: "w-auto h-[4.22vw] 3xl:h-[73px]",
                          }),
                        }),
                        (0, a.jsx)(ea, {
                          className: "flex-1 ",
                          title: l("roadmap.phase3"),
                          index: 3,
                          img: (0, a.jsx)(n(), {
                            src: "/images/home/roadmap3.png",
                            alt: "Bitcoin Pepe",
                            width: 150,
                            height: 120,
                            className: "w-auto h-[5.6vw] 3xl:h-[97px]",
                          }),
                        }),
                        (0, a.jsx)(ea, {
                          className: "flex-1 ",
                          title: l("roadmap.phase4"),
                          index: 4,
                          reverse: !0,
                          img: (0, a.jsx)(n(), {
                            src: "/images/home/roadmap4.png",
                            alt: "Bitcoin Pepe",
                            width: 120,
                            height: 120,
                            className: "w-auto h-[4.22vw] 3xl:h-[73px]",
                          }),
                        }),
                        (0, a.jsx)(ea, {
                          className: "flex-1 ",
                          title: l("roadmap.phase5"),
                          index: 5,
                          img: (0, a.jsx)(n(), {
                            src: "/images/home/roadmap5.png",
                            alt: "Bitcoin Pepe",
                            width: 120,
                            height: 80,
                            className: "w-auto h-[4.22vw] 3xl:h-[73px]",
                          }),
                        }),
                        (0, a.jsx)(ea, {
                          className: "flex-1 ",
                          title: l("roadmap.phase6"),
                          index: 6,
                          reverse: !0,
                          img: (0, a.jsx)(n(), {
                            src: "/images/home/roadmap6.png",
                            alt: "Bitcoin Pepe",
                            width: 140,
                            height: 73,
                            className: "w-auto h-[3.6vw] 3xl:h-[62px]",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "absolute z-[3] left-[50%] -translate-x-1/2 bottom-0 h-[38%] max-w-[550px]",
                children: [
                  (0, a.jsx)(n(), {
                    src: "/images/home/roadmap-bowl.png",
                    width: 532,
                    height: 324,
                    alt: "Bitcoin Pepe",
                    className: "h-full w-auto",
                  }),
                  (0, a.jsxs)("div", {
                    className: "absolute size-full left-0 top-0 ",
                    children: [
                      (0, a.jsx)("p", {
                        className: (0, s.cn)(
                          "absolute left-[50%] -translate-x-1/2 top-[25%] -translate-y-1/2 text-white text-xl font-black uppercase",
                          "zh" === g.language ? "shadow-text" : "stroke-text-2"
                        ),
                        children: l("roadmap.chartTitle"),
                      }),
                      (0, a.jsx)(u.E.p, {
                        className:
                          "absolute left-[82%] -translate-x-1/2 top-[34%] -translate-y-1/2 stroke-text-2 text-secondary text-[24px] font-black uppercase",
                        animate: h,
                        children: "1000X",
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "absolute left-[13%] -translate-x-1/2 -translate-y-1/2 bottom-[43%] -rotate-90 font-bold text-xs uppercase text-black",
                        children: l("roadmap.chartY"),
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "absolute left-[50%] -translate-x-1/2 bottom-[16%] -translate-y-1/2 font-bold text-xs uppercase text-black",
                        children: l("roadmap.chartX"),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute top-[46.5%] left-[15%] w-[55.5%] h-[25.6%]",
                        children: (0, a.jsx)(J.M, {
                          children:
                            o <= 0.9 &&
                            (0, a.jsx)(et, {
                              src: "/images/home/roadmap-tadpole.png",
                              width: 166,
                              height: 66,
                              alt: "Bitcoin Pepe",
                              className:
                                "absolute bottom-0 left-0 w-[20%] mix-blend-darken",
                              initial: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 1, type: "spring" },
                              style: {
                                left:
                                  o >= 0.9
                                    ? "100%"
                                    : "".concat((100 * o) / 0.9, "%"),
                                bottom:
                                  o >= 0.9
                                    ? "100%"
                                    : "".concat(100 * (o / 0.9 + d), "%"),
                              },
                            }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      let ea = (e) => {
        let {
            className: t,
            img: l,
            title: i,
            index: n,
            reverse: o,
            isShow: r = !0,
          } = e,
          { t: c, i18n: x } = (0, w.$G)();
        return (0, a.jsx)("div", {
          className: (0, s.cn)(
            "relative flex flex-col items-center text-center ",
            o ? "flex-col-reverse pt-[16px]" : " -translate-y-full pb-[16px]",
            t
          ),
          children: (0, a.jsxs)(J.M, {
            children: [
              r &&
                (0, a.jsxs)(
                  u.E.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    exit: { scale: 0 },
                    transition: { duration: 1 },
                    className: (0, s.cn)(
                      "relative flex flex-col items-center text-center ",
                      o ? "flex-col-reverse" : " -translate-y-full",
                      t
                    ),
                    children: [
                      l,
                      (0, a.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                          (0, a.jsxs)("h4", {
                            className: (0, s.cn)(
                              "text-[1.16vw] 3xl:text-xl text-secondary  font-black uppercase",
                              "zh" === x.language
                                ? "shadow-text"
                                : "stroke-text"
                            ),
                            children: [c("roadmap.phase"), " ", n],
                          }),
                          (0, a.jsx)("p", {
                            className: (0, s.cn)(
                              "text-[1.5vw] 2xl:text-[26px] max-lg:text-[16px] text-white  font-black capitalize leading-none",
                              "zh" === x.language
                                ? "shadow-text"
                                : "stroke-text-2"
                            ),
                            children: i,
                          }),
                        ],
                      }),
                    ],
                  },
                  n
                ),
              (0, a.jsx)("p", {
                className: (0, s.cn)(
                  "absolute left-1/2 -translate-x-1/2 size-[22px] rounded-full bg-secondary",
                  o ? "top-[-9px]" : "bottom-[-13px]"
                ),
              }),
            ],
          }),
        });
      };
      var es = l(39128);
      function ei(e) {
        let { className: t } = e,
          { t: l, i18n: i } = (0, w.$G)(),
          c = ["de", "es", "pl", "ro", "fr", "vn", "pt"].includes(i.language),
          x = [
            {
              img: "/images/home/team-member4.png",
              name: "Michael Bonett",
              job: l("team.member3.job"),
              desc: [l("team.member3.desc1")],
            },
            {
              img: "/images/home/team-member3.png",
              name: "Jeff Johnson",
              job: l("team.member4.job"),
              desc: [l("team.member4.desc1")],
            },
          ],
          m = [
            {
              img: "/images/home/team-flux.png",
              name: "Theo",
              job: l("team.member3.job"),
              desc: [l("team.member3.desc1"), l("team.member3.desc2")],
            },
            {
              img: "/images/home/team-theo.png",
              name: "Lion",
              job: l("team.member4.job"),
              desc: [l("team.member4.desc1"), l("team.member4.desc2")],
            },
            {
              img: "/images/home/team-lion.png",
              name: "Flux",
              job: l("team.member5.job"),
              desc: [l("team.member5.desc1"), l("team.member5.desc2")],
            },
          ],
          d = (0, r.useRef)(null),
          p = (0, M.Y)(d, { once: !0 }),
          h = (0, o.Dh)();
        return (0, a.jsxs)("div", {
          ref: d,
          className: (0, s.cn)(
            "relative w-full overflow-hidden pt-[4.63vw] 3xl:pt-[80px] max-lg:pt-[30px] bg-[#000] bg-center bg-cover",
            p &&
              'bg-[url("/images/home/team-bg-mobile.webp")] lg:bg-[url("/images/home/team-bg.webp")]',
            t
          ),
          id: "team",
          children: [
            h
              ? (0, a.jsx)(n(), {
                  src: "/images/home/cloud2.png",
                  alt: "Bitcoin Pepe",
                  width: 156,
                  height: 150,
                  className:
                    " w-[40%] h-auto absolute right-[0%] top-[8%] ani-shake mix-blend-hard-light",
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(n(), {
                      src: "/images/home/cloud1.png",
                      alt: "Bitcoin Pepe",
                      width: 194,
                      height: 151,
                      className:
                        " absolute right-[6%] top-[12%] ani-shake2 mix-blend-hard-light",
                    }),
                    (0, a.jsx)(n(), {
                      src: "/images/home/cloud.png",
                      alt: "Bitcoin Pepe",
                      width: 194,
                      height: 151,
                      className:
                        " absolute left-[-5%] top-[40%] ani-shake2 mix-blend-hard-light",
                    }),
                  ],
                }),
            (0, a.jsxs)("div", {
              className:
                "relative pb-[3vw] 3xl:pb-[50px] max-lg:pb-[30px] layout flex items-center justify-center",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "relative z-[3] lg:h-full w-[56vw] 3xl:w-[940px] max-lg:w-full",
                  children: [
                    (0, a.jsx)(_, {
                      title: l("meetTheTeam"),
                      className: (0, s.cn)(
                        "uppercase mb-[0.05vw] 3xl:mb-2 max-lg:mb-10 text-center",
                        c && "text-[2.1vw] 3xl:text-[36px] max-lg:text-2xl"
                      ),
                    }),
                    h
                      ? (0, a.jsx)(eo, {
                          memberList: x,
                          memberList2: m,
                          isSmall: c,
                        })
                      : (0, a.jsx)(er, {
                          memberList: x,
                          memberList2: m,
                          isSmall: c,
                        }),
                    (0, a.jsxs)("div", {
                      className:
                        "mt-[0.69vw] 3xl:mt-3 max-lg:mt-10 flex flex-col items-center text-center",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsx)("h3", {
                              className: (0, s.cn)(
                                "mr-4 text-[1.27vw] 3xl:text-[22px] leading-[1.3]  uppercase font-black",
                                "max-lg:text-[22px] ",
                                "zh" === i.language ? "" : "stroke-text-1"
                              ),
                              style: {
                                textShadow:
                                  "zh" === i.language
                                    ? "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black, 0 0 15px #0E4893"
                                    : "0 0 15px #0E4893",
                              },
                              children: l("team.latestAMA"),
                            }),
                            !h && (0, a.jsx)(en, {}),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: (0, s.cn)(
                            "text-black text-[0.86vw] 3xl:text-[15px] leading-[1.4] max-w-[502px] mt-[0.46vw] 3xl:mt-2",
                            "max-lg:text-[14px] max-lg:font-semibold max-lg:my-7",
                            c && "text-[0.75vw] 3xl:text-[13px] max-lg:text-xs"
                          ),
                          children: l("team.latestAMADesc"),
                        }),
                        (0, a.jsx)(ec, {}),
                        h &&
                          (0, a.jsx)("div", {
                            className:
                              "flex items-center justify-center gap-20 my-7",
                            children: (0, a.jsx)(en, {}),
                          }),
                      ],
                    }),
                  ],
                }),
                !h &&
                  (0, a.jsx)("div", {
                    className:
                      "absolute bottom-[-15%] left-[0%] w-[26%] max-w-[432px] h-auto ",
                    children: (0, a.jsx)(n(), {
                      src: "/images/home/team.png",
                      width: 432,
                      height: 558,
                      alt: "Bitcoin Pepe",
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      let en = () =>
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(ex, {
                href: "https://x.com/BitcoinpepeethX",
                children: (0, a.jsx)(es.kL, {
                  className: "fill-[#2AE3FE] size-[50%] lg:size-[60%]",
                }),
              }),
            ],
          }),
        eo = (e) => {
          let { memberList: t, memberList2: l, isSmall: s } = e,
            [i, o] = (0, r.useState)(0),
            c = (0, r.useRef)(null),
            { t: x } = (0, w.$G)();
          return (0, a.jsxs)("div", {
            className: "w-full overflow-hidden",
            children: [
              (0, a.jsx)(S.tq, {
                ref: c,
                spaceBetween: 50,
                slidesPerView: 1,
                loop: !0,
                className: "h-full",
                children: [...t, ...l].filter((x, i) => i<2).map((e, t) =>
                  (0, a.jsx)(
                    S.o5,
                    {
                      children: (0, a.jsxs)(
                        "div",
                        {
                          className:
                            "flex-1 flex flex-col items-center text-black text-center  text-[22px] leading-[26px]",
                          children: [
                            (0, a.jsx)(n(), {
                              src: e.img,
                              width: 174,
                              height: 174,
                              alt: e.name,
                              className: "mb-5 ".concat(
                                t < 2
                                  ? "border-[3px] border-black rounded-md"
                                  : ""
                              ),
                            }),
                            (0, a.jsx)("h3", {
                              className: "flex items-center gap-2 font-bold ",
                              children: e.name,
                            }),
                            (0, a.jsx)("h4", {
                              className: "font-semibold",
                              children: e.job,
                            }),
                            (0, a.jsxs)("div", {
                              className: "mt-3",
                              children: [
                                t >= 2 &&
                                  (0, a.jsx)("h4", {
                                    className:
                                      "font-bold text-base leading-[22px]",
                                    children: x("team.cryptoBg"),
                                  }),
                                (0, a.jsx)("div", {
                                  className:
                                    "flex flex-col gap-2 text-base leading-[22px] mt-2 font-semibold",
                                  children: e.desc.map((e) =>
                                    (0, a.jsx)("p", { children: e }, e)
                                  ),
                                }),
                              ],
                            }),
                          ],
                        },
                        e.name
                      ),
                    },
                    t
                  )
                ),
              }),
              (0, a.jsxs)("div", {
                className: "flex items-center justify-center gap-10 mt-5",
                children: [
                  (0, a.jsx)(eB, {
                    className: "max-lg:size-[50px] hover:opacity-80",
                    onClick: () => {
                      var e;
                      null === (e = c.current) ||
                        void 0 === e ||
                        e.swiper.slidePrev();
                    },
                  }),
                  (0, a.jsx)(eP, {
                    className: "max-lg:size-[50px] hover:opacity-80",
                    onClick: () => {
                      var e;
                      null === (e = c.current) ||
                        void 0 === e ||
                        e.swiper.slideNext();
                    },
                  }),
                ],
              }),
            ],
          });
        },
        er = (e) => {
          let { memberList: t, memberList2: l, isSmall: i } = e,
            { t: o } = (0, w.$G)(),
            c = (0, r.useRef)(null),
            [x, m] = (0, r.useState)(0);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: "w-full mb-[30px]",
                children: (0, a.jsxs)(S.tq, {
                  ref: c,
                  spaceBetween: 50,
                  slidesPerView: 1,
                  loop: !0,
                  className: "w-full",
                  onSlideChange: (e) => {
                    m(e.realIndex);
                  },
                  children: [
                    (0, a.jsx)(S.o5, {
                      className: "",
                      children: (0, a.jsx)("div", {
                        className:
                          "grid grid-cols-2 gap-x-[2.32vw] gap-y-[2.32vw] 3xl:gap-x-10 3xl:gap-y-10 text-black",
                        children: t.map((e, t) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              className:
                                "flex items-start gap-[1.5vw] 3xl:gap-7",
                              children: [
                                (0, a.jsx)(n(), {
                                  src: e.img,
                                  width: 162,
                                  height: 220,
                                  alt: e.name,
                                  className:
                                    "h-auto w-[9.38vw] 3xl:w-[162px] ".concat(
                                      t < 2
                                        ? " border-black border-[3px] rounded-md"
                                        : ""
                                    ),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex-1",
                                  children: [
                                    (0, a.jsx)("h3", {
                                      className:
                                        "flex items-center gap-1 font-bold text-[0.81vw] 3xl:text-[14px] leading-[1.28]",
                                      children: e.name,
                                    }),
                                    (0, a.jsx)("h4", {
                                      className:
                                        "font-semibold text-[0.81vw] 3xl:text-[14px] leading-[1.28]",
                                      children: e.job,
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "flex flex-col gap-1 text-[0.67vw] 3xl:text-xs leading-[1.6] mt-1  font-medium",
                                      children: e.desc.map((e) =>
                                        (0, a.jsx)("p", { children: e }, e)
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.name
                          )
                        ),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        ec = () => {
          let e = (0, r.useRef)(null),
            t = (0, M.Y)(e, { once: !0 });
          return (0, a.jsx)("div", {
            className:
              "relative w-[28.6vw] 3xl:w-[495px] max-lg:w-full h-[14.35vw] 3xl:h-[248px] max-lg:h-[60vw] border-[3px] border-black rounded-lg overflow-hidden bg-black mt-[0.68vw] 3xl:mt-3 max-lg:mt-0",
            children: (0, a.jsx)("div", {
              ref: e,
              className: "absolute left-0 top-0 w-full h-full",
              children:
                t &&
                (0, a.jsx)("iframe", {
                  width: "100%",
                  height: "100%",
                  src: "https://www.youtube.com/embed/Kj-PC0EMWpQ?si=_sCjNQZ9lJ0ZhsVe",
                  title: "YouTube video player",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowFullScreen: !0,
                }),
            }),
          });
        },
        ex = (e) => {
          let { children: t, href: l, className: i } = e;
          return (0, a.jsx)("a", {
            href: l,
            target: "_blank",
            className: (0, s.cn)(
              "size-[1.5vw] 3xl:size-[26px] max-lg:w-[54px] max-lg:h-[54px] rounded max-lg:rounded-md bg-black flex items-center justify-center",
              i
            ),
            children: t,
          });
        },
        em = [
          {
            stage: 1,
            price: "0.0210",
            increase: "-",
            gain: "-",
            allocation: "20,000,000",
          },
          { stage: 2, price: "0.0221", increase: "5.2%", gain: "5.2%" },
          { stage: 3, price: "0.0232", increase: "5.0%", gain: "10.5%" },
          { stage: 4, price: "0.0243", increase: "4.7%", gain: "15.7%" },
          { stage: 5, price: "0.0255", increase: "4.9%", gain: "21.4%" },
          { stage: 6, price: "0.0268", increase: "5.1%", gain: "27.6%" },
          { stage: 7, price: "0.0281", increase: "4.9%", gain: "33.8%" },
          { stage: 8, price: "0.0295", increase: "5.0%", gain: "40.5%" },
          { stage: 9, price: "0.0310", increase: "5.1%", gain: "47.6%" },
          { stage: 10, price: "0.0326", increase: "5.2%", gain: "55.2%" },
          { stage: 11, price: "0.0342", increase: "4.9%", gain: "62.9%" },
          { stage: 12, price: "0.0359", increase: "5.0%", gain: "71.0%" },
          { stage: 13, price: "0.0377", increase: "5.0%", gain: "79.5%" },
          { stage: 14, price: "0.0396", increase: "5.0%", gain: "88.6%" },
          { stage: 15, price: "0.0416", increase: "5.1%", gain: "98.1%" },
          { stage: 16, price: "0.0437", increase: "5.0%", gain: "108.1%" },
          { stage: 17, price: "0.0458", increase: "4.8%", gain: "118.1%" },
          { stage: 18, price: "0.0481", increase: "5.0%", gain: "129.0%" },
          { stage: 19, price: "0.0505", increase: "5.0%", gain: "140.5%" },
          { stage: 20, price: "0.0531", increase: "5.1%", gain: "152.9%" },
          { stage: 21, price: "0.0557", increase: "4.9%", gain: "165.2%" },
          { stage: 22, price: "0.0585", increase: "5.0%", gain: "178.6%" },
          { stage: 23, price: "0.0614", increase: "5.0%", gain: "192.4%" },
          { stage: 24, price: "0.0645", increase: "5.0%", gain: "207.1%" },
          { stage: 25, price: "0.0677", increase: "5.0%", gain: "222.4%" },
          { stage: 26, price: "0.0711", increase: "5.0%", gain: "238.6%" },
          { stage: 27, price: "0.0747", increase: "5.1%", gain: "255.7%" },
          { stage: 28, price: "0.0784", increase: "5.0%", gain: "273.3%" },
          { stage: 29, price: "0.0823", increase: "5.0%", gain: "291.9%" },
          {
            stage: 30,
            price: "0.0864",
            increase: "5.0%",
            gain: "311.4%",
            allocation: "50,000,000",
          },
        ];
      function ed(e) {
        let { className: t } = e,
          { t: l } = (0, w.$G)(),
          { currentStage: i } = (0, E.ZN)(),
          c = (0, o.Lm)(),
          x = (0, o.Dh)(),
          m = (0, r.useRef)(null),
          d = (0, M.Y)(m, { once: !0 });
        return (0, a.jsxs)("div", {
          ref: m,
          className: (0, s.cn)(
            "relative w-full  overflow-hidden pt-[4.63vw] 3xl:pt-[80px] bg-[#000]  bg-center bg-cover",
            d &&
              ' bg-[url("/images/home/token-bg-mobile1.webp")] lg:bg-[url("/images/home/token-bg.webp")]',
            t
          ),
          id: "tokenomics",
          children: [
            (0, a.jsx)("div", {
              className:
                "relative pb-[3vw] 3xl:pb-[50px] pt-[2.32vw] 3xl:pt-[40px] layout h-full flex items-center justify-center max-lg:flex-col",
              children: (0, a.jsxs)("div", {
                className:
                  "relative z-[2] flex flex-col items-center gap-3 w-[36.28vw] 3xl:w-[627px] max-lg:w-full h-full",
                children: [
                  (0, a.jsx)(_, {
                    title: l("tokenomics"),
                    className: "uppercase",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "lg:absolute lg:left-[110%] lg:top-[25%] max-lg:pt-[50px] max-lg:pb-20",
                    children: x
                      ? (0, a.jsx)(eh, {
                          className: "max-xxxs:scale-90 max-xxxs:-my-5",
                        })
                      : (0, a.jsx)(eh, {
                          className: " origin-top-left ",
                          style: {
                            transform: "scale(".concat(
                              c < 1700 ? (0.17 * c) / 256 : 1,
                              ")"
                            ),
                          },
                        }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "w-full text-center",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center font-bold text-white ",
                        style: { fontSize: 30},
                        children: [
                          (0, a.jsx)("pre", {
                            className: "flex-1",
                            children: "Total Supply: 1 Billion\nOwnership: Renounced\nBuy/sell tax: 0%\nLiquidity: 100% Burned",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col items-center font-museo font-bold mt-7 lg:mt-12 mb-4",
                    children: [
                      (0, a.jsx)("h4", {
                        className:
                          "text-[26px] leading-[29px] max-lg:text-xl max-lg:leading-[29px] text-[#F6FF00]",
                        children: l("tokenAddress"),
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "text-lg leading-none max-lg:text-xs max-lg:leading-[18px]",
                        children:
                          "0xcomingsoon",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            x
              ? (0, a.jsx)(n(), {
                  src: "/images/home/token-mobile.png",
                  width: 139,
                  height: 132,
                  alt: "Bitcoin Pepe",
                  className: "block mx-auto",
                })
              : (0, a.jsx)("div", {
                  className:
                    "absolute top-[0%] left-0 w-[35%] max-w-[556px] h-auto max-lg:hidden",
                  children: (0, a.jsx)(n(), {
                    src: "/images/home/rocket-pepe.png",
                    width: 556,
                    height: 483,
                    alt: "Bitcoin Pepe",
                  }),
                }),
          ],
        });
      }
      let ep = (e) => {
          let {
              percentage: t,
              title: l,
              className: i,
              percentageColor: n = "#FFF600",
              lineClassName: o,
            } = e,
            { i18n: r } = (0, w.$G)();
          return (0, a.jsxs)(u.E.div, {
            className: (0, s.cn)("absolute top-0 left-0 text-center ", i),
            initial: { scale: 0 },
            animate: { scale: 1 },
            exit: { scale: 0 },
            transition: { duration: 1 },
            children: [
              (0, a.jsxs)("p", {
                className: (0, s.cn)(
                  "font-black text-[29px] leading-6",
                  "zh" === r.language ? "shadow-text" : "stroke-text-2"
                ),
                style: { color: n },
                children: [l==="Liquidity" ? 100:0, "%"],
              }),
              (0, a.jsx)("p", {
                className:
                  "text-xs font-bold capitalize text-white max-w-[70px]",
                children: l,
                // style: { display: l!=="Liquidity" && "none"}
              }),
            ],
          });
        },
        eh = (e) => {
          let { className: t, style: l } = e,
            { t: i } = (0, w.$G)();
          return (0, a.jsxs)("div", {
            className: (0, s.cn)("relative size-[256px] mx-auto", t),
            style: l,
            children: [
              (0, a.jsx)(n(), {
                src: "/images/home/tokenomics-pie.webp",
                width: 260,
                height: 260,
                alt: "Bitcoin Pepe",
                className: "size-full",
              }),
              (0, a.jsx)(ep, {
                percentage: "50",
                title: i("tokenomics.community"),
                className: "top-[-15%] left-[-5%]",
                lineClassName: "left-1/2 top-[100%] -scale-x-100",
              }),
              (0, a.jsx)(ep, {
                percentage: "15",
                percentageColor: "#FFD000",
                title: i("tokenomics.staking"),
                className: "top-[102%] left-[-8%]",
                lineClassName:
                  "left-[90%] top-1/2 -translate-y-full w-[60px] h-[30px] ",
              }),
              (0, a.jsx)(ep, {
                percentage: "10",
                percentageColor: "#ffffff",
                title: i("tokenomics.liquidity"),
                className: "top-[93%] left-[85%]",
                lineClassName:
                  "right-[100%] top-1/2 -translate-y-full w-[21px] h-[19px] -scale-x-100",
              }),
              (0, a.jsx)(ep, {
                percentage: "10",
                percentageColor: "#008FFF",
                title: i("tokenomics.development"),
                className: "top-[75%] left-[93%]",
                lineClassName:
                  "right-[20%] top-[-5px] -translate-y-full w-[60%] h-[17px] -scale-y-100",
              }),
              (0, a.jsx)(ep, {
                percentage: "10",
                percentageColor: "#26FF00",
                title: i("tokenomics.marketing"),
                className: "top-[18%] left-[103%]",
                lineClassName: "right-[50%] w-[36px] h-[18px] ",
              }),
              (0, a.jsx)(ep, {
                percentage: "5",
                percentageColor: "#FF5565",
                title: i("tokenomics.treasury"),
                className: "top-[-8%] left-[86%]",
                lineClassName: "right-[50%] w-[20px] h-[18px] ",
              }),
            ],
          });
        },
        eg = (e) => {
          let { productList: t, onChange: l } = e,
            i = (0, r.useRef)(null),
            { i18n: n, t: o } = (0, w.$G)();
          return (0, a.jsxs)("div", {
            className: "relative w-full",
            children: [
              (0, a.jsx)(S.tq, {
                ref: i,
                spaceBetween: 25,
                slidesPerView: 1,
                centeredSlides: !0,
                loop: !0,
                onSlideChange: (e) => {
                  console.log("swiper.realIndex", e.realIndex),
                    l(t[e.realIndex]);
                },
                children: t.map((e, t) =>
                  (0, a.jsx)(
                    S.o5,
                    {
                      children: (0, a.jsxs)("div", {
                        className: "flex flex-col items-center text-center",
                        children: [
                          (0, a.jsx)("h3", {
                            className: (0, s.cn)(
                              "uppercase text-2xl leading-[1.45] text-primary ",
                              "zh" === n.language
                                ? "font-bold shadow-text"
                                : "font-black stroke-text-1"
                            ),
                            children: e.title,
                          }),
                          (0, a.jsx)("p", {
                            className: "text-base leading-[1.43] font-bold ",
                            children: e.description,
                          }),
                        ],
                      }),
                    },
                    t
                  )
                ),
              }),
              (0, a.jsxs)("div", {
                className:
                  "relative z-[2] w-full flex items-center justify-center gap-20 mt-7",
                children: [
                  (0, a.jsx)(eB, {
                    className: "max-lg:size-[72px]",
                    onClick: () => {
                      i.current.swiper.slidePrev();
                    },
                  }),
                  (0, a.jsx)(eP, {
                    className: "max-lg:size-[72px]",
                    onClick: () => {
                      i.current.swiper.slideNext();
                    },
                  }),
                ],
              }),
            ],
          });
        };
      function eu(e) {
        let { className: t } = e,
          l = (0, o.Dh)(),
          { i18n: i, t: n } = (0, w.$G)(),
          c = [
            {
              key: "dex",
              title: n("ourProduct.title1"),
              description: n("ourProduct.content1"),
              image: "/images/our-product/anim1.gif",
            },
            {
              key: "bridge",
              title: n("ourProduct.title2"),
              description: n("ourProduct.content2"),
              image: "/images/our-product/anim2.gif",
            },
            {
              key: "explorer",
              title: n("ourProduct.title3"),
              description: n("ourProduct.content3"),
              image: "/images/our-product/anim3.gif",
            },
          ],
          [x, m] = (0, r.useState)(c[0]);
        return (0, a.jsxs)("div", {
          className: (0, s.cn)(
            'relative w-full  overflow-hidden pt-[30px] lg:pt-[4.63vw] 3xl:pt-[80px] bg-[#000] bg-[url("/images/our-product/bg.webp")] bg-center bg-no-repeat',
            t
          ),
          children: [
            (0, a.jsx)(_, {
              title: n("ourProduct"),
              className: " text-center",
            }),
            (0, a.jsxs)("div", {
              className:
                "relative layout h-full pb-10 lg:pb-[3vw] 3xl:pb-[50px] flex items-center justify-center max-lg:flex-col lg:gap-[6vw]",
              children: [
                l
                  ? (0, a.jsx)(eg, { productList: c, onChange: m })
                  : (0, a.jsx)("div", {
                      className:
                        "w-[28.7vw] 3xl:w-[496px] max-lg:w-full flex flex-col max-lg:flex-row max-lg:mt-4",
                      children: c.map((e) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            onClick: () => m(e),
                            className:
                              "cursor-pointer py-[2.19vw] px-[2.31vw] 3xl:py-[38px] 3xl:px-[40px] border rounded-[1.15vw] 3xl:rounded-[20px] transition-colors duration-200 font-museo\n              ".concat(
                                x.key === e.key
                                  ? "border-[#F6FF0080] bg-[#212121]"
                                  : "border-transparent bg-transparent",
                                "\n            "
                              ),
                            children: [
                              (0, a.jsx)("h3", {
                                className: (0, s.cn)(
                                  "uppercase text-sm lg:text-[1.5vw] 3xl:text-[26px] leading-[1.1] text-primary mb-2",
                                  "zh" === i.language
                                    ? "font-bold shadow-text"
                                    : "font-black stroke-text-1"
                                ),
                                children: e.title,
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-[8px] lg:text-[1.27vw] 3xl:text-[22px] leading-[1.3] font-bold ",
                                children: e.description,
                              }),
                            ],
                          },
                          e.key
                        )
                      ),
                    }),
              ],
            }),
          ],
        });
      }
      var ew = l(89316);
      function eb() {
        let { t: e, i18n: t } = (0, w.$G)();
        return (0, a.jsx)("div", {
          className: "bg-black py-[2.89vw] 3xl:py-[50px] max-lg:py-9",
          children: (0, a.jsxs)("div", {
            className: "layout ",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "flex justify-between max-lg:items-center max-lg:flex-col max-lg:gap-7",
                children: [
                  (0, a.jsx)(ew.Z, { className: "w-[162px] shrink-0" }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-6",
                    children: [
                      (0, a.jsx)("a", {
                        href: "https://x.com/BitcoinpepeethX",
                        children: (0, a.jsx)(es.kL, {
                          className:
                            "fill-white hover:fill-primary w-[24px] h-auto cursor-pointer",
                        }),
                      }),
                      (0, a.jsx)("a", {
                        href: "https://t.me/bitcoinpepe_group",
                        children: (0, a.jsx)(es.Yi, {
                          className:
                            "fill-white hover:fill-primary w-[24px] h-auto cursor-pointer",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex max-lg:flex-col max-lg:items-center justify-between font-semibold mt-[1.15vw] 3xl:mt-5 max-lg:mt-9 max-lg:gap-9",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "text-[0.69vw] 3xl:text-xs max-lg:text-[10px] max-lg:order-2",
                    children: (0, a.jsx)(w.cC, {
                      i18nKey: "copyright",
                      components: {
                        a: (0, a.jsx)("a", {
                          href: "https://bitcoinpepe.co".concat(
                            "en" === t.language ? "" : "/" + t.language
                          ),
                        }),
                      },
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex max-lg:flex-col items-center gap-7 max-lg:gap-7 text-[0.92vw] 3xl:text-base max-lg:text-base",
                    children: [
                      (0, a.jsx)(T(), {
                        href: "/#about",
                        className:
                          "cursor-pointer underline hover:text-primary",
                        children: "About",
                      }),
                      (0, a.jsx)("a", {
                        href: "mailto:team@bitpepe.ink",
                        className:
                          "cursor-pointer underline hover:text-primary",
                        children: e("footer.contact"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var ef = l(4002),
        ev = l(48828);
      function ej(e) {
        let { className: t } = e,
          { t: l, i18n: i } = (0, w.$G)(),
          c = ["es"].includes(i.language),
          x = (0, r.useRef)(null),
          { scrollYProgress: m } = (0, O.v)({ target: x }),
          d = (0, o.Lm)(),
          p = (0, ef.q)((0, ev.H)(m, [0.1, 0.9], [0, 1 * d]), {
            stiffness: 400,
            damping: 90,
          }),
          h = (0, ef.q)((0, ev.H)(m, [0.1, 0.92], [0, 0.28 * d]), {
            stiffness: 400,
            damping: 90,
          });
        return (0, a.jsxs)("div", {
          className: (0, s.cn)(
            ' w-full overflow-hidden pt-[26px] bg-[url("/images/home/roadmap-bg-mobile1.webp")] bg-center bg-no-repeat',
            t
          ),
          style: { backgroundSize: "100% 100%" },
          id: "roadmap",
          children: [
            (0, a.jsx)(_, {
              title: l("roadmap"),
              className: (0, s.cn)(
                "text-center",
                "zh" === i.language ? "shadow-text" : "stroke-text-2"
              ),
            }),
            (0, a.jsxs)("div", {
              className: "w-full relative flex flex-col items-center mt-6",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "absolute left-1/2 -translate-x-1/2 top-[80px] w-1 h-5/6 bg-secondary",
                }),
                (0, a.jsxs)("div", {
                  className: "relative flex flex-col items-center w-0",
                  children: [
                    (0, a.jsx)(eN, {
                      className: " ",
                      title: l("roadmap.phase1"),
                      index: 1,
                      img: (0, a.jsx)(n(), {
                        src: "/images/home/roadmap1.png",
                        alt: "Bitcoin Pepe",
                        width: 100,
                        height: 60,
                      }),
                    }),
                    (0, a.jsx)(eN, {
                      className: " ",
                      title: l("roadmap.phase2"),
                      index: 2,
                      reverse: !0,
                      img: (0, a.jsx)(n(), {
                        src: "/images/home/roadmap2.png",
                        alt: "Bitcoin Pepe",
                        width: 63,
                        height: 54,
                      }),
                    }),
                    (0, a.jsx)(eN, {
                      className: " ",
                      title: l("roadmap.phase3"),
                      index: 3,
                      img: (0, a.jsx)(n(), {
                        src: "/images/home/roadmap3.png",
                        alt: "Bitcoin Pepe",
                        width: 100,
                        height: 90,
                      }),
                    }),
                    (0, a.jsx)(eN, {
                      className: " ",
                      title: l("roadmap.phase4"),
                      index: 4,
                      reverse: !0,
                      img: (0, a.jsx)(n(), {
                        src: "/images/home/roadmap4.png",
                        alt: "Bitcoin Pepe",
                        width: 63,
                        height: 54,
                      }),
                    }),
                    (0, a.jsx)(eN, {
                      className: " ",
                      title: l("roadmap.phase5"),
                      index: 5,
                      img: (0, a.jsx)(n(), {
                        src: "/images/home/roadmap5.png",
                        alt: "Bitcoin Pepe",
                        width: 100,
                        height: 67,
                      }),
                    }),
                    (0, a.jsx)(eN, {
                      className: " ",
                      title: l("roadmap.phase6"),
                      index: 6,
                      reverse: !0,
                      img: (0, a.jsx)(n(), {
                        src: "/images/home/roadmap6.png",
                        alt: "Bitcoin Pepe",
                        width: 100,
                        height: 90,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "px-3",
              children: (0, a.jsxs)("div", {
                className: "relative w-full",
                children: [
                  (0, a.jsx)(n(), {
                    src: "/images/home/roadmap-bowl.png",
                    width: 532,
                    height: 324,
                    alt: "Bitcoin Pepe",
                    className: "h-auto w-full",
                  }),
                  (0, a.jsxs)("div", {
                    className: "absolute size-full left-0 top-0 ",
                    children: [
                      (0, a.jsx)("p", {
                        className: (0, s.cn)(
                          "absolute left-[50%] -translate-x-1/2 top-[25%] -translate-y-1/2 text-white text-[15px] font-bold uppercase",
                          "zh" === i.language ? "shadow-text" : "stroke-text",
                          c && "text-sm"
                        ),
                        children: l("roadmap.chartTitle"),
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "absolute left-[82%] -translate-x-1/2 top-[34%] -translate-y-1/2 stroke-text text-secondary text-base font-bold uppercase",
                        children: "1000X",
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "absolute left-[13%] -translate-x-1/2 -translate-y-1/2 bottom-[43%] -rotate-90 font-bold text-xs uppercase text-black",
                        children: l("roadmap.chartY"),
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "absolute left-[50%] -translate-x-1/2 bottom-[16%] -translate-y-1/2 font-bold text-xs uppercase text-black",
                        children: l("roadmap.chartX"),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute bottom-[27.5%] left-[15%] w-[61.5%] h-[25.6%]",
                        children: (0, a.jsx)(u.E.div, {
                          className: "absolute bottom-0 left-0 w-[20%]",
                          style: { left: p, bottom: h },
                          children: (0, a.jsx)(n(), {
                            src: "/images/home/roadmap-tadpole.png",
                            width: 166,
                            height: 66,
                            alt: "Bitcoin Pepe",
                            className: "w-full h-auto mix-blend-darken",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      let eN = (e) => {
          let {
              className: t,
              img: l,
              title: i,
              index: n,
              reverse: o,
              isShow: r = !0,
            } = e,
            { i18n: c } = (0, w.$G)();
          return (0, a.jsxs)("div", {
            className: (0, s.cn)(
              "relative flex flex-col items-center text-center",
              o ? "translate-x-1/2 pl-10" : " -translate-x-1/2 pr-10",
              t
            ),
            children: [
              l,
              (0, a.jsxs)("div", {
                className: "relative flex flex-col items-center w-full",
                children: [
                  (0, a.jsxs)("h4", {
                    className: (0, s.cn)(
                      "text-sm text-secondary font-bold uppercase",
                      "zh" === c.language ? "shadow-text" : "stroke-text"
                    ),
                    children: ["PHASE", n],
                  }),
                  (0, a.jsx)("p", {
                    className: (0, s.cn)(
                      "text-base text-white  font-black capitalize leading-none w-[100px]",
                      "zh" === c.language ? "shadow-text" : "stroke-text"
                    ),
                    children: i,
                  }),
                  (0, a.jsx)("span", {
                    className: (0, s.cn)(
                      "absolute top-1/2 -translate-y-1/2 size-[16px] rounded-full bg-secondary",
                      o
                        ? "-left-10 -translate-x-[8px]"
                        : "-right-10  translate-x-[8px]"
                    ),
                  }),
                ],
              }),
            ],
          });
        },
        ey = (e) => {
          let { item: t } = e,
            { t: l } = (0, w.$G)();
          return (0, a.jsxs)("div", {
            className:
              "flex flex-col items-center justify-center gap-2 p-4  font-bold font-museo  text-[30px] leading-[1.1] text-black cursor-pointer group",
            onClick: () => {
              window.open(t.url);
            },
            children: [
              (0, a.jsx)(n(), {
                src: t.img,
                width: 166,
                height: 166,
                alt: t.name,
                className:
                  "w-[166px] h-[166px] rounded-full object-cover group-hover:scale-105 transition-all duration-300",
              }),
              (0, a.jsx)("h3", {
                className: "font-black whitespace-nowrap my-2",
                children: t.name,
              }),
              (0, a.jsx)("p", { children: t.amount }),
              (0, a.jsxs)("p", {
                className: "flex items-center gap-2 text-xl",
                children: [
                  (0, a.jsx)(es.kL, {
                    className: "fill-black hover:fill-black size-[22px]",
                  }),
                  " ",
                  l("partner.reach"),
                ],
              }),
            ],
          });
        };
      function ek(e) {
        let { className: t } = e,
          { i18n: l, t: i } = (0, w.$G)(),
          n = [""].includes(l.language);
        ["de", "fr", "ro"].includes(l.language), (0, r.useRef)(null);
        let c = (0, r.useRef)(null),
          x = (0, M.Y)(c, { once: !0 }),
          d = (0, o.dD)();
        (0, o.Lm)();
        let p = [
          {
            name: "Catamoto",
            img: "/images/home/partner/Catamoto.jpg",
            amount: "68.8K",
            url: "https://x.com/4catamoto",
          },
          {
            name: "Plena Finance",
            img: "/images/home/partner/PlenaFinance.jpg",
            amount: "259.7K",
            url: "https://x.com/PlenaFinance",
          },
          {
            name: "Crypto Hunters Game",
            img: "/images/home/partner/CryptoHuntersGame.png",
            amount: "107.7K",
            url: "https://crypto-hunters.io/",
          },
          {
            name: "BE__TV",
            img: "/images/home/partner/BETV.png",
            amount: "7,22K",
            url: "https://x.com/BE__TV",
          },
          {
            name: "GETE",
            img: "/images/home/partner/GETE.png",
            amount: "7,25K",
            url: "https://gete.network",
          },
          {
            name: "IDO Alert",
            img: "/images/home/partner/IDOAlert.png",
            amount: "103.3K",
            url: "https://x.com/ido_alert",
          },
          {
            name: "Gemu Play",
            img: "/images/home/partner/gemuplay.png",
            amount: "13.5K",
            url: "https://x.com/GemuPlayStudio",
          },
          {
            name: "Heroes Battle Arena",
            img: "/images/home/partner/hba.png",
            amount: "14.8K",
            url: "https://x.com/heroesbattlearn",
          },
          {
            name: "Arrland",
            img: "/images/home/partner/Arrland.png",
            amount: "52.1K",
            url: "https://x.com/ArrlandGame",
          },
          {
            name: "Satoshi Sync",
            img: "/images/home/partner/SatoshiSync.png",
            amount: "52.3K",
            url: "https://x.com/SatoshiSync",
          },
          {
            name: "Me3",
            img: "/images/home/partner/me3.png",
            amount: "99.6k",
            url: "https://x.com/Me3Labs",
          },
        ];
        return (0, a.jsxs)("div", {
          ref: c,
          className: (0, s.cn)(
            "relative w-full py-[30px] lg:py-[60px] overflow-hidden bg-center bg-cover",
            x && 'bg-[url("/images/home/partner/bg.webp")]',
            t
          ),
          id: "partner",
          children: [
            (0, a.jsx)(_, {
              title: i("partner.title"),
              className: (0, s.cn)(
                "uppercase text-center text-white mb-4",
                n && "text-[40px] max-lg:text-2xl",
                "zh" === l.language ? "shadow-text" : "stroke-text-2"
              ),
            }),
            (0, a.jsx)("p", {
              className:
                "mt-3 mb-12 font-museo text-base lg:text-[22px] text-center text-black font-bold max-lg:px-4",
              children: i("partner.desc"),
            }),
            d
              ? (0, a.jsx)(eC, { partnerList: p })
              : (0, a.jsx)("div", {
                  className: "",
                  children: (0, a.jsx)(m, {
                    Item: ey,
                    data: [...p, ...p].map((e) => ({ item: e })),
                    className: "w-full",
                    direction: "left",
                    itemWidth: 400,
                    hoverStop: !0,
                    speed: 30,
                  }),
                }),
          ],
        });
      }
      let eC = (e) => {
        let { partnerList: t } = e,
          l = (0, r.useRef)(null);
        return (0, a.jsxs)("div", {
          className: "relative w-full",
          children: [
            (0, a.jsx)(S.tq, {
              ref: l,
              spaceBetween: 25,
              slidesPerView: 1,
              centeredSlides: !0,
              loop: !0,
              children: t.map((e, t) =>
                (0, a.jsx)(S.o5, { children: (0, a.jsx)(ey, { item: e }) }, t)
              ),
            }),
            (0, a.jsxs)("div", {
              className:
                "relative z-[2] w-full flex items-center justify-center gap-20 mt-7",
              children: [
                (0, a.jsx)(eB, {
                  className: "size-[72px]",
                  onClick: () => {
                    l.current.swiper.slidePrev();
                  },
                }),
                (0, a.jsx)(eP, {
                  className: "size-[72px]",
                  onClick: () => {
                    l.current.swiper.slideNext();
                  },
                }),
              ],
            }),
          ],
        });
      };
      function ez(e) {
        let t = (0, o.Dh)();
        return (0, a.jsxs)("div", {
          className: "min-h-screen w-full ",
          children: [
            (0, a.jsx)(B.Z, {}),
            (0, a.jsx)(k, {}),
            (0, a.jsx)(G, { defaultBlogList: e.defaultBlogList }),
            (0, a.jsx)(ek, {}),
            (0, a.jsx)(ei, {}),
            (0, a.jsx)(I, {}),
            t ? (0, a.jsx)(ej, {}) : (0, a.jsx)(el, {}),
            (0, a.jsx)(eu, {}),
            (0, a.jsx)(ed, {}),
            (0, a.jsx)(R, {}),
            (0, a.jsx)(eb, {}),
            (0, a.jsx)(z, {}),
          ],
        });
      }
      let eB = (e) => {
          let { className: t, onClick: l } = e;
          return (0, a.jsxs)("svg", {
            width: "54",
            height: "54",
            viewBox: "0 0 54 54",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0, s.cn)("max-xl:size-[40px]", t),
            onClick: l,
            children: [
              (0, a.jsx)("rect", {
                x: "1.5",
                y: "1.5",
                width: "51",
                height: "51",
                rx: "12.5",
                fill: "white",
                stroke: "black",
                "stroke-width": "3",
              }),
              (0, a.jsx)("path", {
                d: "M40 28.5C40.8284 28.5 41.5 27.8284 41.5 27C41.5 26.1716 40.8284 25.5 40 25.5V28.5ZM12.9393 25.9393C12.3536 26.5251 12.3536 27.4749 12.9393 28.0607L22.4853 37.6066C23.0711 38.1924 24.0208 38.1924 24.6066 37.6066C25.1924 37.0208 25.1924 36.0711 24.6066 35.4853L16.1213 27L24.6066 18.5147C25.1924 17.9289 25.1924 16.9792 24.6066 16.3934C24.0208 15.8076 23.0711 15.8076 22.4853 16.3934L12.9393 25.9393ZM40 25.5L14 25.5V28.5L40 28.5V25.5Z",
                fill: "black",
              }),
            ],
          });
        },
        eP = (e) => {
          let { className: t, onClick: l } = e;
          return (0, a.jsxs)("svg", {
            width: "54",
            height: "54",
            viewBox: "0 0 54 54",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0, s.cn)("max-xl:size-[40px]", t),
            onClick: l,
            children: [
              (0, a.jsx)("rect", {
                x: "52.5",
                y: "52.5",
                width: "51",
                height: "51",
                rx: "12.5",
                transform: "rotate(-180 52.5 52.5)",
                fill: "white",
                stroke: "black",
                "stroke-width": "3",
              }),
              (0, a.jsx)("path", {
                d: "M14 25.5C13.1716 25.5 12.5 26.1716 12.5 27C12.5 27.8284 13.1716 28.5 14 28.5L14 25.5ZM41.0607 28.0607C41.6464 27.4749 41.6464 26.5251 41.0607 25.9393L31.5147 16.3934C30.9289 15.8076 29.9792 15.8076 29.3934 16.3934C28.8076 16.9792 28.8076 17.9289 29.3934 18.5147L37.8787 27L29.3934 35.4853C28.8076 36.0711 28.8076 37.0208 29.3934 37.6066C29.9792 38.1924 30.9289 38.1924 31.5147 37.6066L41.0607 28.0607ZM14 28.5L40 28.5L40 25.5L14 25.5L14 28.5Z",
                fill: "black",
              }),
            ],
          });
        };
      var eE = l(28879),
        eL = l.n(eE),
        eT = l(64989),
        eF = l.n(eT),
        eS = l(10264),
        e_ = l.n(eS),
        eM = l(84012),
        eG = l(97729),
        eA = l.n(eG);
      function eD() {
        let [e, t] = (0, r.useState)(!1),
          { t: l } = (0, w.$G)(),
          s = () => {
            let e = document.createElement("script");
            (e.type = "text/javascript"),
              (e.text =
                "\n      adroll_adv_id = \"TYKUS66JIBATFBDDYWEEFR\";\n      adroll_pix_id = \"BEOMH3TK25GJ7HIENDLLNO\";\n      adroll_version = \"2.0\";\n      (function(w, d, e, o, a) {\n        w.__adroll_loaded = true;\n        w.adroll = w.adroll || [];\n        w.adroll.f = ['setProperties', 'identify', 'track', 'identify_email', 'get_cookie'];\n        var roundtripUrl = \"https://s.adroll.com/j/\" + adroll_adv_id + \"/roundtrip.js\";\n        for (a = 0; a < w.adroll.f.length; a++) {\n          w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {\n            return function() { w.adroll.push([n, arguments]) }\n          })(w.adroll.f[a])\n        }\n        e = d.createElement('script');\n        o = d.getElementsByTagName('script')[0];\n        e.async = 1;\n        e.src = roundtripUrl;\n        o.parentNode.insertBefore(e, o);\n      })(window, document);\n      adroll.track(\"pageView\");\n    "),
              document.head.appendChild(e);
          },
          i = (e) => {
            t(!1),
              localStorage.setItem("hasSeenCookieModal", e ? "true" : "false"),
              e && s();
          };
        return (
          (0, r.useEffect)(() => {
            s();
          }, []),
          (0, a.jsx)(f.Z, {
            show: e,
            onClose: () => {
              t(!1);
            },
            width: 384,
            closeClassName: "top-4",
            children: (0, a.jsxs)("div", {
              className: "p-6",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center justify-center gap-3",
                  children: [
                    (0, a.jsx)(n(), {
                      src: "/images/logo-pepe.png",
                      alt: "Bitcoin Pepe",
                      width: 528,
                      height: 528,
                      className: "size-[52px] max-lg:size-12",
                    }),
                    (0, a.jsx)("span", {
                      className: "text-xl md:text-[22px] font-bold",
                      children: l("cookie.title"),
                    }),
                  ],
                }),
                (0, a.jsx)("p", {
                  className: "mt-3 text-base text-black md:mt-4 md:text-lg ",
                  children: l("cookie.desc"),
                }),
                (0, a.jsxs)("div", {
                  className: "mt-4 flex w-full gap-3 md:mt-6 md:gap-4",
                  children: [
                    (0, a.jsx)(C.Z, {
                      onClick: () => {
                        i(!0);
                      },
                      className: "flex-1 uppercase",
                      theme: "black",
                      children: l("cookie.accept"),
                    }),
                    (0, a.jsx)(C.Z, {
                      theme: "white",
                      onClick: () => {
                        i(!1);
                      },
                      className: "flex-1 uppercase",
                      children: l("cookie.reject"),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      eL().extend(e_()), eL().extend(eF());
      var eZ = !0;
      function e$(e) {
        let { defaultBlogList: t, baseUrl: l } = e;
        (0, o.V1)();
        let { t: s, i18n: i } = (0, w.$G)();
        return (
          (0, r.useEffect)(() => {
            document.referrer &&
              E.PY.initData.mutate({
                referrer: btoa(document.referrer),
                url: btoa(window.location.href),
              });
          }, []),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(eA(), {
                children: [
                  (0, a.jsx)("link", {
                    rel: "canonical",
                    href: "https://bitcoinpepe.co/".concat(
                      "en" === i.language ? "" : i.language
                    ),
                  }),
                  (0, a.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                      __html:
                        '\n{\n  "@context" : "https://schema.org",\n  "@type" : "WebSite",\n  "name" : "Bitcoin Pepe",\n  "alternateName" : ["Bitcoin Pepe", "BEPE", "PEP-20"],\n  "url" : "'
                          .concat(l, "/")
                          .concat(
                            "en" === i.language ? "" : i.language,
                            '"\n}'
                          ),
                    },
                  }),
                  (0, a.jsx)("link", {
                    rel: "alternate",
                    hrefLang: "x-default",
                    href: "".concat(l, "/"),
                  }),
                  eM.M.map((e) =>
                    (0, a.jsx)(
                      "link",
                      {
                        rel: "alternate",
                        hrefLang: "vn" === e ? "vi" : e,
                        href: "".concat(l, "/").concat("en" === e ? "" : e),
                      },
                      e
                    )
                  ),
                  (0, a.jsx)("title", { children: s("home.pageTitle") }),
                  (0, a.jsx)("meta", {
                    property: "og:title",
                    content: s("app.title"),
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:description",
                    content: s("app.description"),
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:url",
                    content: ""
                      .concat(l, "/")
                      .concat("en" === i.language ? "" : i.language),
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:type",
                    content: "website",
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:site_name",
                    content: "Bitcoin Pepe",
                  }),
                  (0, a.jsx)("meta", {
                    name: "twitter:title",
                    content: "".concat(s("app.title")),
                  }),
                  (0, a.jsx)("meta", {
                    name: "twitter:description",
                    content: s("app.description"),
                  }),
                ],
              }),
              (0, a.jsxs)(E.k8, {
                children: [
                  (0, a.jsx)(ez, { defaultBlogList: t }),
                  (0, a.jsx)(eD, {}),
                ],
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(
      0,
      [934, 999, 23, 710, 375, 224, 292, 265, 826, 288, 596, 774, 888, 179],
      function () {
        return e((e.s = 87314));
      }
    ),
      (_N_E = e.O());
  },
]);
