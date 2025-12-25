(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [288],
  {
    43892: function (f, e, t) {
      "use strict";
      t.d(e, {
        NB: function () {
          return v;
        },
        SX: function () {
          return y;
        },
        PY: function () {
          return m;
        },
      });
      var n,
        a,
        r,
        b = t(58943),
        o = t(58586);
      let { request: i } =
        ((n = () => null),
        (a = () => ""),
        (r = (f) => f.success),
        {
          request: (f, e, t) => {
            let i = { mockGetter: void 0 },
              c = async (r, b) => {
                var o;
                if (i.mockGetter)
                  return {
                    code: "SUCCESS",
                    success: !0,
                    data: await i.mockGetter(r, b),
                  };
                let c = n();
                if (!c) return { code: "SUCCESS", success: !0 };
                let u = await c(
                  (null !== (o = null == t ? void 0 : t.domain) && void 0 !== o
                    ? o
                    : a()) + f,
                  null != r ? r : void 0,
                  null != b ? b : void 0,
                  e
                );
                return (
                  (null == t ? void 0 : t.trans) &&
                    u.data &&
                    (u.data = t.trans(u.data)),
                  (null == t ? void 0 : t.onOk) &&
                    t.onOk(u, { params: r, body: b }, {}),
                  u
                );
              };
            return (
              (c.mock = (f) => {
                i.mockGetter = f;
              }),
              (c.useQuery = (e, t) => {
                var n;
                return (0, b.a)({
                  ...t,
                  queryKey: [
                    f,
                    e.params,
                    e.body,
                    ...(null !== (n = t.customKeys) && void 0 !== n ? n : []),
                  ],
                  queryFn: async () => {
                    let f = await c(e.params, e.body);
                    if (r(f)) return f.data;
                    throw Error(f.msg);
                  },
                });
              }),
              (c.usePages = (e, t) => {
                var n;
                return (0, o.N)({
                  ...t,
                  queryKey: [
                    f,
                    ...(null !== (n = t.customKeys) && void 0 !== n ? n : []),
                  ],
                  queryFn: (f) => {
                    let { pageParam: t = 1 } = f,
                      { body: n, params: a } = e({ pageIndex: t });
                    return c(a, n);
                  },
                });
              }),
              c
            );
          },
        });
      ({ hello: i("/api/v1/hello", "post") }.hello.mock(async (f) => {
        let { hello: e } = f;
        return { world: e };
      }));
      var c = t(52322),
        u = t(43052),
        s = t(55830),
        l = t(68),
        d = t(2784);
      let p = "/api/trpc",
        y = (0, l.ec)(),
        m = (0, l.K5)({ links: [(0, l.ch)({ url: p })] }),
        v = (f) => {
          let { children: e } = f,
            [t] = (0, d.useState)(() => new u.S()),
            [n] = (0, d.useState)(() =>
              y.createClient({ links: [(0, l.ch)({ url: p })] })
            );
          return (0, c.jsx)(y.Provider, {
            client: n,
            queryClient: t,
            children: (0, c.jsx)(s.aH, { client: t, children: e }),
          });
        };
    },
    17714: function (f, e, t) {
      "use strict";
      var n,
        a = Object.create
          ? function (f, e, t, n) {
              void 0 === n && (n = t);
              var a = Object.getOwnPropertyDescriptor(e, t);
              (!a ||
                ("get" in a ? !e.__esModule : a.writable || a.configurable)) &&
                (a = {
                  enumerable: !0,
                  get: function () {
                    return e[t];
                  },
                }),
                Object.defineProperty(f, n, a);
            }
          : function (f, e, t, n) {
              void 0 === n && (n = t), (f[n] = e[t]);
            },
        r = Object.create
          ? function (f, e) {
              Object.defineProperty(f, "default", { enumerable: !0, value: e });
            }
          : function (f, e) {
              f.default = e;
            },
        b =
          ((n = function (f) {
            return (n =
              Object.getOwnPropertyNames ||
              function (f) {
                var e = [];
                for (var t in f)
                  Object.prototype.hasOwnProperty.call(f, t) &&
                    (e[e.length] = t);
                return e;
              })(f);
          }),
          function (f) {
            if (f && f.__esModule) return f;
            var e = {};
            if (null != f)
              for (var t = n(f), b = 0; b < t.length; b++)
                "default" !== t[b] && a(e, f, t[b]);
            return r(e, f), e;
          });
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.token = void 0),
        (e.token = b(t(49543)));
    },
    94450: function (f, e, t) {
      "use strict";
      var n,
        a =
          ((n = function (f, e) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (f, e) {
                  f.__proto__ = e;
                }) ||
              function (f, e) {
                for (var t in e)
                  Object.prototype.hasOwnProperty.call(e, t) && (f[t] = e[t]);
              })(f, e);
          }),
          function (f, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null"
              );
            function t() {
              this.constructor = f;
            }
            n(f, e),
              (f.prototype =
                null === e
                  ? Object.create(e)
                  : ((t.prototype = e.prototype), new t()));
          });
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ERC20__factory = void 0);
      var r = t(66779),
        b = [
          {
            inputs: [
              { internalType: "string", name: "name_", type: "string" },
              { internalType: "string", name: "symbol_", type: "string" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        o =
          "0x60806040523480156200001157600080fd5b50604051620017ec380380620017ec8339818101604052810190620000379190620001f6565b8160039081620000489190620004c6565b5080600490816200005a9190620004c6565b505050620005ad565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000cc8262000081565b810181811067ffffffffffffffff82111715620000ee57620000ed62000092565b5b80604052505050565b60006200010362000063565b9050620001118282620000c1565b919050565b600067ffffffffffffffff82111562000134576200013362000092565b5b6200013f8262000081565b9050602081019050919050565b60005b838110156200016c5780820151818401526020810190506200014f565b60008484015250505050565b60006200018f620001898462000116565b620000f7565b905082815260208101848484011115620001ae57620001ad6200007c565b5b620001bb8482856200014c565b509392505050565b600082601f830112620001db57620001da62000077565b5b8151620001ed84826020860162000178565b91505092915050565b6000806040838503121562000210576200020f6200006d565b5b600083015167ffffffffffffffff81111562000231576200023062000072565b5b6200023f85828601620001c3565b925050602083015167ffffffffffffffff81111562000263576200026262000072565b5b6200027185828601620001c3565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002ce57607f821691505b602082108103620002e457620002e362000286565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200034e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200030f565b6200035a86836200030f565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003a7620003a16200039b8462000372565b6200037c565b62000372565b9050919050565b6000819050919050565b620003c38362000386565b620003db620003d282620003ae565b8484546200031c565b825550505050565b600090565b620003f2620003e3565b620003ff818484620003b8565b505050565b5b8181101562000427576200041b600082620003e8565b60018101905062000405565b5050565b601f82111562000476576200044081620002ea565b6200044b84620002ff565b810160208510156200045b578190505b620004736200046a85620002ff565b83018262000404565b50505b505050565b600082821c905092915050565b60006200049b600019846008026200047b565b1980831691505092915050565b6000620004b6838362000488565b9150826002028217905092915050565b620004d1826200027b565b67ffffffffffffffff811115620004ed57620004ec62000092565b5b620004f98254620002b5565b620005068282856200042b565b600060209050601f8311600181146200053e576000841562000529578287015190505b620005358582620004a8565b865550620005a5565b601f1984166200054e86620002ea565b60005b82811015620005785784890151825560018201915060208501945060208101905062000551565b8683101562000598578489015162000594601f89168262000488565b8355505b6001600288020188555050505b505050505050565b61122f80620005bd6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610b0c565b60405180910390f35b6100e660048036038101906100e19190610bc7565b610308565b6040516100f39190610c22565b60405180910390f35b61010461032b565b6040516101119190610c4c565b60405180910390f35b610134600480360381019061012f9190610c67565b610335565b6040516101419190610c22565b60405180910390f35b610152610364565b60405161015f9190610cd6565b60405180910390f35b610182600480360381019061017d9190610bc7565b61036d565b60405161018f9190610c22565b60405180910390f35b6101b260048036038101906101ad9190610cf1565b6103a4565b6040516101bf9190610c4c565b60405180910390f35b6101d06103ec565b6040516101dd9190610b0c565b60405180910390f35b61020060048036038101906101fb9190610bc7565b61047e565b60405161020d9190610c22565b60405180910390f35b610230600480360381019061022b9190610bc7565b6104f5565b60405161023d9190610c22565b60405180910390f35b610260600480360381019061025b9190610d1e565b610518565b60405161026d9190610c4c565b60405180910390f35b60606003805461028590610d8d565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610d8d565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b60008061031361059f565b90506103208185856105a7565b600191505092915050565b6000600254905090565b60008061034061059f565b905061034d858285610770565b6103588585856107fc565b60019150509392505050565b60006012905090565b60008061037861059f565b905061039981858561038a8589610518565b6103949190610ded565b6105a7565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103fb90610d8d565b80601f016020809104026020016040519081016040528092919081815260200182805461042790610d8d565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b60008061048961059f565b905060006104978286610518565b9050838110156104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d390610e93565b60405180910390fd5b6104e982868684036105a7565b60019250505092915050565b60008061050061059f565b905061050d8185856107fc565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060d90610f25565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610685576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067c90610fb7565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107639190610c4c565b60405180910390a3505050565b600061077c8484610518565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f657818110156107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df90611023565b60405180910390fd5b6107f584848484036105a7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361086b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610862906110b5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d190611147565b60405180910390fd5b6108e5838383610a72565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610962906111d9565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a599190610c4c565b60405180910390a3610a6c848484610a77565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ab6578082015181840152602081019050610a9b565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ade82610a7c565b610ae88185610a87565b9350610af8818560208601610a98565b610b0181610ac2565b840191505092915050565b60006020820190508181036000830152610b268184610ad3565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b5e82610b33565b9050919050565b610b6e81610b53565b8114610b7957600080fd5b50565b600081359050610b8b81610b65565b92915050565b6000819050919050565b610ba481610b91565b8114610baf57600080fd5b50565b600081359050610bc181610b9b565b92915050565b60008060408385031215610bde57610bdd610b2e565b5b6000610bec85828601610b7c565b9250506020610bfd85828601610bb2565b9150509250929050565b60008115159050919050565b610c1c81610c07565b82525050565b6000602082019050610c376000830184610c13565b92915050565b610c4681610b91565b82525050565b6000602082019050610c616000830184610c3d565b92915050565b600080600060608486031215610c8057610c7f610b2e565b5b6000610c8e86828701610b7c565b9350506020610c9f86828701610b7c565b9250506040610cb086828701610bb2565b9150509250925092565b600060ff82169050919050565b610cd081610cba565b82525050565b6000602082019050610ceb6000830184610cc7565b92915050565b600060208284031215610d0757610d06610b2e565b5b6000610d1584828501610b7c565b91505092915050565b60008060408385031215610d3557610d34610b2e565b5b6000610d4385828601610b7c565b9250506020610d5485828601610b7c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610da557607f821691505b602082108103610db857610db7610d5e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610df882610b91565b9150610e0383610b91565b9250828201905080821115610e1b57610e1a610dbe565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610e7d602583610a87565b9150610e8882610e21565b604082019050919050565b60006020820190508181036000830152610eac81610e70565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f0f602483610a87565b9150610f1a82610eb3565b604082019050919050565b60006020820190508181036000830152610f3e81610f02565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fa1602283610a87565b9150610fac82610f45565b604082019050919050565b60006020820190508181036000830152610fd081610f94565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061100d601d83610a87565b915061101882610fd7565b602082019050919050565b6000602082019050818103600083015261103c81611000565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061109f602583610a87565b91506110aa82611043565b604082019050919050565b600060208201905081810360008301526110ce81611092565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611131602383610a87565b915061113c826110d5565b604082019050919050565b6000602082019050818103600083015261116081611124565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006111c3602683610a87565b91506111ce82611167565b604082019050919050565b600060208201905081810360008301526111f2816111b6565b905091905056fea2646970667358221220296afebdc7f86d1cfba981c4feb973e2299f1426a01a1555759d5c2e5788cf4a64736f6c63430008110033",
        i = (function (f) {
          function e() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = this;
            return e.length > 1
              ? f.apply(this, e) || this
              : f.call(this, b, o, e[0]) || this;
          }
          return (
            a(e, f),
            (e.prototype.deploy = function (e, t, n) {
              return f.prototype.deploy.call(this, e, t, n || {});
            }),
            (e.prototype.getDeployTransaction = function (e, t, n) {
              return f.prototype.getDeployTransaction.call(this, e, t, n || {});
            }),
            (e.prototype.attach = function (e) {
              return f.prototype.attach.call(this, e);
            }),
            (e.prototype.connect = function (e) {
              return f.prototype.connect.call(this, e);
            }),
            (e.createInterface = function () {
              return new r.utils.Interface(b);
            }),
            (e.connect = function (f, e) {
              return new r.Contract(f, b, e);
            }),
            (e.bytecode = o),
            (e.abi = b),
            e
          );
        })(r.ContractFactory);
      e.ERC20__factory = i;
    },
    4213: function (f, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.IERC20__factory = void 0);
      var n = t(66779),
        a = [
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        r = (function () {
          function f() {}
          return (
            (f.createInterface = function () {
              return new n.utils.Interface(a);
            }),
            (f.connect = function (f, e) {
              return new n.Contract(f, a, e);
            }),
            (f.abi = a),
            f
          );
        })();
      e.IERC20__factory = r;
    },
    83711: function (f, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.IERC20Metadata__factory = void 0);
      var n = t(66779),
        a = [
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        r = (function () {
          function f() {}
          return (
            (f.createInterface = function () {
              return new n.utils.Interface(a);
            }),
            (f.connect = function (f, e) {
              return new n.Contract(f, a, e);
            }),
            (f.abi = a),
            f
          );
        })();
      e.IERC20Metadata__factory = r;
    },
    75869: function (f, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.IERC20Permit__factory = void 0);
      var n = t(66779),
        a = [
          {
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "nonces",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "permit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        r = (function () {
          function f() {}
          return (
            (f.createInterface = function () {
              return new n.utils.Interface(a);
            }),
            (f.connect = function (f, e) {
              return new n.Contract(f, a, e);
            }),
            (f.abi = a),
            f
          );
        })();
      e.IERC20Permit__factory = r;
    },
    1647: function (f, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.IERC20Permit__factory = e.IERC20Metadata__factory = void 0);
      var n = t(83711);
      Object.defineProperty(e, "IERC20Metadata__factory", {
        enumerable: !0,
        get: function () {
          return n.IERC20Metadata__factory;
        },
      });
      var a = t(75869);
      Object.defineProperty(e, "IERC20Permit__factory", {
        enumerable: !0,
        get: function () {
          return a.IERC20Permit__factory;
        },
      });
    },
    86123: function (f, e, t) {
      "use strict";
      var n,
        a = Object.create
          ? function (f, e, t, n) {
              void 0 === n && (n = t);
              var a = Object.getOwnPropertyDescriptor(e, t);
              (!a ||
                ("get" in a ? !e.__esModule : a.writable || a.configurable)) &&
                (a = {
                  enumerable: !0,
                  get: function () {
                    return e[t];
                  },
                }),
                Object.defineProperty(f, n, a);
            }
          : function (f, e, t, n) {
              void 0 === n && (n = t), (f[n] = e[t]);
            },
        r = Object.create
          ? function (f, e) {
              Object.defineProperty(f, "default", { enumerable: !0, value: e });
            }
          : function (f, e) {
              f.default = e;
            },
        b =
          ((n = function (f) {
            return (n =
              Object.getOwnPropertyNames ||
              function (f) {
                var e = [];
                for (var t in f)
                  Object.prototype.hasOwnProperty.call(f, t) &&
                    (e[e.length] = t);
                return e;
              })(f);
          }),
          function (f) {
            if (f && f.__esModule) return f;
            var e = {};
            if (null != f)
              for (var t = n(f), b = 0; b < t.length; b++)
                "default" !== t[b] && a(e, f, t[b]);
            return r(e, f), e;
          });
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.IERC20__factory = e.ERC20__factory = e.extensions = void 0),
        (e.extensions = b(t(1647)));
      var o = t(94450);
      Object.defineProperty(e, "ERC20__factory", {
        enumerable: !0,
        get: function () {
          return o.ERC20__factory;
        },
      });
      var i = t(4213);
      Object.defineProperty(e, "IERC20__factory", {
        enumerable: !0,
        get: function () {
          return i.IERC20__factory;
        },
      });
    },
    49543: function (f, e, t) {
      "use strict";
      var n,
        a = Object.create
          ? function (f, e, t, n) {
              void 0 === n && (n = t);
              var a = Object.getOwnPropertyDescriptor(e, t);
              (!a ||
                ("get" in a ? !e.__esModule : a.writable || a.configurable)) &&
                (a = {
                  enumerable: !0,
                  get: function () {
                    return e[t];
                  },
                }),
                Object.defineProperty(f, n, a);
            }
          : function (f, e, t, n) {
              void 0 === n && (n = t), (f[n] = e[t]);
            },
        r = Object.create
          ? function (f, e) {
              Object.defineProperty(f, "default", { enumerable: !0, value: e });
            }
          : function (f, e) {
              f.default = e;
            },
        b =
          ((n = function (f) {
            return (n =
              Object.getOwnPropertyNames ||
              function (f) {
                var e = [];
                for (var t in f)
                  Object.prototype.hasOwnProperty.call(f, t) &&
                    (e[e.length] = t);
                return e;
              })(f);
          }),
          function (f) {
            if (f && f.__esModule) return f;
            var e = {};
            if (null != f)
              for (var t = n(f), b = 0; b < t.length; b++)
                "default" !== t[b] && a(e, f, t[b]);
            return r(e, f), e;
          });
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.erc20 = void 0),
        (e.erc20 = b(t(86123)));
    },
    2756: function (f, e, t) {
      "use strict";
      var n,
        a = Object.create
          ? function (f, e, t, n) {
              void 0 === n && (n = t);
              var a = Object.getOwnPropertyDescriptor(e, t);
              (!a ||
                ("get" in a ? !e.__esModule : a.writable || a.configurable)) &&
                (a = {
                  enumerable: !0,
                  get: function () {
                    return e[t];
                  },
                }),
                Object.defineProperty(f, n, a);
            }
          : function (f, e, t, n) {
              void 0 === n && (n = t), (f[n] = e[t]);
            },
        r = Object.create
          ? function (f, e) {
              Object.defineProperty(f, "default", { enumerable: !0, value: e });
            }
          : function (f, e) {
              f.default = e;
            },
        b =
          ((n = function (f) {
            return (n =
              Object.getOwnPropertyNames ||
              function (f) {
                var e = [];
                for (var t in f)
                  Object.prototype.hasOwnProperty.call(f, t) &&
                    (e[e.length] = t);
                return e;
              })(f);
          }),
          function (f) {
            if (f && f.__esModule) return f;
            var e = {};
            if (null != f)
              for (var t = n(f), b = 0; b < t.length; b++)
                "default" !== t[b] && a(e, f, t[b]);
            return r(e, f), e;
          });
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.contracts = void 0),
        (e.contracts = b(t(17714)));
    },
    52855: function (f, e, t) {
      "use strict";
      var n,
        a =
          ((n = function (f, e) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (f, e) {
                  f.__proto__ = e;
                }) ||
              function (f, e) {
                for (var t in e)
                  Object.prototype.hasOwnProperty.call(e, t) && (f[t] = e[t]);
              })(f, e);
          }),
          function (f, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null"
              );
            function t() {
              this.constructor = f;
            }
            n(f, e),
              (f.prototype =
                null === e
                  ? Object.create(e)
                  : ((t.prototype = e.prototype), new t()));
          });
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BITPEPE__factory = void 0);
      var r = t(66779),
        b = [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        o =
          "0x60806040523480156200001157600080fd5b506040518060400160405280600c81526020017f426974636f696e205065706500000000000000000000000000000000000000008152506040518060400160405280600481526020017f425045500000000000000000000000000000000000000000000000000000000081525081600390816200008f9190620004fe565b508060049081620000a19190620004fe565b505050600073cff6833adcff41457e788149dca7e9dc956b83ab9050620000fd81620000d26200010460201b60201c565b600a620000e0919062000775565b637d2b7500620000f19190620007c6565b6200010d60201b60201c565b50620008fd565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200017f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001769062000872565b60405180910390fd5b62000193600083836200027a60201b60201c565b8060026000828254620001a7919062000894565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200025a9190620008e0565b60405180910390a362000276600083836200027f60201b60201c565b5050565b505050565b505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200030657607f821691505b6020821081036200031c576200031b620002be565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000347565b62000392868362000347565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003df620003d9620003d384620003aa565b620003b4565b620003aa565b9050919050565b6000819050919050565b620003fb83620003be565b620004136200040a82620003e6565b84845462000354565b825550505050565b600090565b6200042a6200041b565b62000437818484620003f0565b505050565b5b818110156200045f576200045360008262000420565b6001810190506200043d565b5050565b601f821115620004ae57620004788162000322565b620004838462000337565b8101602085101562000493578190505b620004ab620004a28562000337565b8301826200043c565b50505b505050565b600082821c905092915050565b6000620004d360001984600802620004b3565b1980831691505092915050565b6000620004ee8383620004c0565b9150826002028217905092915050565b620005098262000284565b67ffffffffffffffff8111156200052557620005246200028f565b5b620005318254620002ed565b6200053e82828562000463565b600060209050601f83116001811462000576576000841562000561578287015190505b6200056d8582620004e0565b865550620005dd565b601f198416620005868662000322565b60005b82811015620005b05784890151825560018201915060208501945060208101905062000589565b86831015620005d05784890151620005cc601f891682620004c0565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111562000673578086048111156200064b576200064a620005e5565b5b60018516156200065b5780820291505b80810290506200066b8562000614565b94506200062b565b94509492505050565b6000826200068e576001905062000761565b816200069e576000905062000761565b8160018114620006b75760028114620006c257620006f8565b600191505062000761565b60ff841115620006d757620006d6620005e5565b5b8360020a915084821115620006f157620006f0620005e5565b5b5062000761565b5060208310610133831016604e8410600b8410161715620007325782820a9050838111156200072c576200072b620005e5565b5b62000761565b62000741848484600162000621565b925090508184048111156200075b576200075a620005e5565b5b81810290505b9392505050565b600060ff82169050919050565b60006200078282620003aa565b91506200078f8362000768565b9250620007be7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846200067c565b905092915050565b6000620007d382620003aa565b9150620007e083620003aa565b9250828202620007f081620003aa565b915082820484148315176200080a5762000809620005e5565b5b5092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006200085a601f8362000811565b9150620008678262000822565b602082019050919050565b600060208201905081810360008301526200088d816200084b565b9050919050565b6000620008a182620003aa565b9150620008ae83620003aa565b9250828201905080821115620008c957620008c8620005e5565b5b92915050565b620008da81620003aa565b82525050565b6000602082019050620008f76000830184620008cf565b92915050565b61122f806200090d6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610b0c565b60405180910390f35b6100e660048036038101906100e19190610bc7565b610308565b6040516100f39190610c22565b60405180910390f35b61010461032b565b6040516101119190610c4c565b60405180910390f35b610134600480360381019061012f9190610c67565b610335565b6040516101419190610c22565b60405180910390f35b610152610364565b60405161015f9190610cd6565b60405180910390f35b610182600480360381019061017d9190610bc7565b61036d565b60405161018f9190610c22565b60405180910390f35b6101b260048036038101906101ad9190610cf1565b6103a4565b6040516101bf9190610c4c565b60405180910390f35b6101d06103ec565b6040516101dd9190610b0c565b60405180910390f35b61020060048036038101906101fb9190610bc7565b61047e565b60405161020d9190610c22565b60405180910390f35b610230600480360381019061022b9190610bc7565b6104f5565b60405161023d9190610c22565b60405180910390f35b610260600480360381019061025b9190610d1e565b610518565b60405161026d9190610c4c565b60405180910390f35b60606003805461028590610d8d565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610d8d565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b60008061031361059f565b90506103208185856105a7565b600191505092915050565b6000600254905090565b60008061034061059f565b905061034d858285610770565b6103588585856107fc565b60019150509392505050565b60006012905090565b60008061037861059f565b905061039981858561038a8589610518565b6103949190610ded565b6105a7565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103fb90610d8d565b80601f016020809104026020016040519081016040528092919081815260200182805461042790610d8d565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b60008061048961059f565b905060006104978286610518565b9050838110156104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d390610e93565b60405180910390fd5b6104e982868684036105a7565b60019250505092915050565b60008061050061059f565b905061050d8185856107fc565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060d90610f25565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610685576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067c90610fb7565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107639190610c4c565b60405180910390a3505050565b600061077c8484610518565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f657818110156107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df90611023565b60405180910390fd5b6107f584848484036105a7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361086b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610862906110b5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d190611147565b60405180910390fd5b6108e5838383610a72565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610962906111d9565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a599190610c4c565b60405180910390a3610a6c848484610a77565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ab6578082015181840152602081019050610a9b565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ade82610a7c565b610ae88185610a87565b9350610af8818560208601610a98565b610b0181610ac2565b840191505092915050565b60006020820190508181036000830152610b268184610ad3565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b5e82610b33565b9050919050565b610b6e81610b53565b8114610b7957600080fd5b50565b600081359050610b8b81610b65565b92915050565b6000819050919050565b610ba481610b91565b8114610baf57600080fd5b50565b600081359050610bc181610b9b565b92915050565b60008060408385031215610bde57610bdd610b2e565b5b6000610bec85828601610b7c565b9250506020610bfd85828601610bb2565b9150509250929050565b60008115159050919050565b610c1c81610c07565b82525050565b6000602082019050610c376000830184610c13565b92915050565b610c4681610b91565b82525050565b6000602082019050610c616000830184610c3d565b92915050565b600080600060608486031215610c8057610c7f610b2e565b5b6000610c8e86828701610b7c565b9350506020610c9f86828701610b7c565b9250506040610cb086828701610bb2565b9150509250925092565b600060ff82169050919050565b610cd081610cba565b82525050565b6000602082019050610ceb6000830184610cc7565b92915050565b600060208284031215610d0757610d06610b2e565b5b6000610d1584828501610b7c565b91505092915050565b60008060408385031215610d3557610d34610b2e565b5b6000610d4385828601610b7c565b9250506020610d5485828601610b7c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610da557607f821691505b602082108103610db857610db7610d5e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610df882610b91565b9150610e0383610b91565b9250828201905080821115610e1b57610e1a610dbe565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610e7d602583610a87565b9150610e8882610e21565b604082019050919050565b60006020820190508181036000830152610eac81610e70565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f0f602483610a87565b9150610f1a82610eb3565b604082019050919050565b60006020820190508181036000830152610f3e81610f02565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fa1602283610a87565b9150610fac82610f45565b604082019050919050565b60006020820190508181036000830152610fd081610f94565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061100d601d83610a87565b915061101882610fd7565b602082019050919050565b6000602082019050818103600083015261103c81611000565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061109f602583610a87565b91506110aa82611043565b604082019050919050565b600060208201905081810360008301526110ce81611092565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611131602383610a87565b915061113c826110d5565b604082019050919050565b6000602082019050818103600083015261116081611124565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006111c3602683610a87565b91506111ce82611167565b604082019050919050565b600060208201905081810360008301526111f2816111b6565b905091905056fea264697066735822122067eb8b41fb2eefe792577f21de2627835c8e6fdf5354d857a9b39f80f14977e164736f6c63430008110033",
        i = (function (f) {
          function e() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = this;
            return e.length > 1
              ? f.apply(this, e) || this
              : f.call(this, b, o, e[0]) || this;
          }
          return (
            a(e, f),
            (e.prototype.deploy = function (e) {
              return f.prototype.deploy.call(this, e || {});
            }),
            (e.prototype.getDeployTransaction = function (e) {
              return f.prototype.getDeployTransaction.call(this, e || {});
            }),
            (e.prototype.attach = function (e) {
              return f.prototype.attach.call(this, e);
            }),
            (e.prototype.connect = function (e) {
              return f.prototype.connect.call(this, e);
            }),
            (e.createInterface = function () {
              return new r.utils.Interface(b);
            }),
            (e.connect = function (f, e) {
              return new r.Contract(f, b, e);
            }),
            (e.bytecode = o),
            (e.abi = b),
            e
          );
        })(r.ContractFactory);
      e.BITPEPE__factory = i;
    },
    44381: function (f, e, t) {
      "use strict";
      var n,
        a =
          ((n = function (f, e) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (f, e) {
                  f.__proto__ = e;
                }) ||
              function (f, e) {
                for (var t in e)
                  Object.prototype.hasOwnProperty.call(e, t) && (f[t] = e[t]);
              })(f, e);
          }),
          function (f, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null"
              );
            function t() {
              this.constructor = f;
            }
            n(f, e),
              (f.prototype =
                null === e
                  ? Object.create(e)
                  : ((t.prototype = e.prototype), new t()));
          });
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BuyBITPEPEWithFiat__factory = void 0);
      var r = t(66779),
        b = [
          {
            inputs: [
              {
                internalType: "address",
                name: "_feeReceiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "_adminAddress",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "wallet",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ethAmount",
                type: "uint256",
              },
            ],
            name: "Buy",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "wallet", type: "address" },
            ],
            name: "buyWithFait",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "wallet", type: "address" },
            ],
            name: "getBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { internalType: "address", name: "user", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                ],
                internalType: "struct BuyBITPEPEWithFiat.ClaimRecord[]",
                name: "records",
                type: "tuple[]",
              },
            ],
            name: "recoverRecords",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        o =
          "0x60c060405234801561001057600080fd5b50604051610aae380380610aae83398181016040528101906100329190610104565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250505050610144565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100d1826100a6565b9050919050565b6100e1816100c6565b81146100ec57600080fd5b50565b6000815190506100fe816100d8565b92915050565b6000806040838503121561011b5761011a6100a1565b5b6000610129858286016100ef565b925050602061013a858286016100ef565b9150509250929050565b60805160a05161094661016860003960006102630152600060ca01526109466000f3fe6080604052600436106100385760003560e01c806369b8f16f1461004457806380bef7a014610060578063f8b2cb4f146100895761003f565b3661003f57005b600080fd5b61005e6004803603810190610059919061044b565b6100c6565b005b34801561006c57600080fd5b506100876004803603810190610082919061065c565b610261565b005b34801561009557600080fd5b506100b060048036038101906100ab919061044b565b610391565b6040516100bd91906106b4565b60405180910390f35b60007f0000000000000000000000000000000000000000000000000000000000000000905060008173ffffffffffffffffffffffffffffffffffffffff163460405161011190610700565b60006040518083038185875af1925050503d806000811461014e576040519150601f19603f3d011682016040523d82523d6000602084013e610153565b606091505b5050905080610197576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018e90610772565b60405180910390fd5b346000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101e191906107c1565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fe3d4187f6ca4248660cc0ac8b8056515bac4a8132be2eca31d6d0cc170722a7e8334604051610254929190610804565b60405180910390a1505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e690610879565b60405180910390fd5b60005b815181101561038d5781818151811061030e5761030d610899565b5b6020026020010151602001516000808484815181106103305761032f610899565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508080610385906108c8565b9150506102f2565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610418826103ed565b9050919050565b6104288161040d565b811461043357600080fd5b50565b6000813590506104458161041f565b92915050565b600060208284031215610461576104606103e3565b5b600061046f84828501610436565b91505092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104c68261047d565b810181811067ffffffffffffffff821117156104e5576104e461048e565b5b80604052505050565b60006104f86103d9565b905061050482826104bd565b919050565b600067ffffffffffffffff8211156105245761052361048e565b5b602082029050602081019050919050565b600080fd5b600080fd5b6000819050919050565b6105528161053f565b811461055d57600080fd5b50565b60008135905061056f81610549565b92915050565b60006040828403121561058b5761058a61053a565b5b61059560406104ee565b905060006105a584828501610436565b60008301525060206105b984828501610560565b60208301525092915050565b60006105d86105d384610509565b6104ee565b905080838252602082019050604084028301858111156105fb576105fa610535565b5b835b8181101561062457806106108882610575565b8452602084019350506040810190506105fd565b5050509392505050565b600082601f83011261064357610642610478565b5b81356106538482602086016105c5565b91505092915050565b600060208284031215610672576106716103e3565b5b600082013567ffffffffffffffff8111156106905761068f6103e8565b5b61069c8482850161062e565b91505092915050565b6106ae8161053f565b82525050565b60006020820190506106c960008301846106a5565b92915050565b600081905092915050565b50565b60006106ea6000836106cf565b91506106f5826106da565b600082019050919050565b600061070b826106dd565b9150819050919050565b600082825260208201905092915050565b7f455448207472616e73666572206661696c656400000000000000000000000000600082015250565b600061075c601383610715565b915061076782610726565b602082019050919050565b6000602082019050818103600083015261078b8161074f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006107cc8261053f565b91506107d78361053f565b92508282019050808211156107ef576107ee610792565b5b92915050565b6107fe8161040d565b82525050565b600060408201905061081960008301856107f5565b61082660208301846106a5565b9392505050565b7f4f6e6c792061646d696e2063616e207265636f76657200000000000000000000600082015250565b6000610863601683610715565b915061086e8261082d565b602082019050919050565b6000602082019050818103600083015261089281610856565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006108d38261053f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361090557610904610792565b5b60018201905091905056fea2646970667358221220d243716184d984f994f4993f66fa16c3ae3ece19393cfe46363c9194c827afa964736f6c63430008110033",
        i = (function (f) {
          function e() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = this;
            return e.length > 1
              ? f.apply(this, e) || this
              : f.call(this, b, o, e[0]) || this;
          }
          return (
            a(e, f),
            (e.prototype.deploy = function (e, t, n) {
              return f.prototype.deploy.call(this, e, t, n || {});
            }),
            (e.prototype.getDeployTransaction = function (e, t, n) {
              return f.prototype.getDeployTransaction.call(this, e, t, n || {});
            }),
            (e.prototype.attach = function (e) {
              return f.prototype.attach.call(this, e);
            }),
            (e.prototype.connect = function (e) {
              return f.prototype.connect.call(this, e);
            }),
            (e.createInterface = function () {
              return new r.utils.Interface(b);
            }),
            (e.connect = function (f, e) {
              return new r.Contract(f, b, e);
            }),
            (e.bytecode = o),
            (e.abi = b),
            e
          );
        })(r.ContractFactory);
      e.BuyBITPEPEWithFiat__factory = i;
    },
    59494: function (f, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BuyBITPEPEWithFiat__factory = void 0);
      var n = t(44381);
      Object.defineProperty(e, "BuyBITPEPEWithFiat__factory", {
        enumerable: !0,
        get: function () {
          return n.BuyBITPEPEWithFiat__factory;
        },
      });
    },
    15027: function (f, e, t) {
      "use strict";
      var n,
        a =
          ((n = function (f, e) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (f, e) {
                  f.__proto__ = e;
                }) ||
              function (f, e) {
                for (var t in e)
                  Object.prototype.hasOwnProperty.call(e, t) && (f[t] = e[t]);
              })(f, e);
          }),
          function (f, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null"
              );
            function t() {
              this.constructor = f;
            }
            n(f, e),
              (f.prototype =
                null === e
                  ? Object.create(e)
                  : ((t.prototype = e.prototype), new t()));
          });
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BuyBITPEPEToken__factory = void 0);
      var r = t(66779),
        b = [
          {
            inputs: [
              { internalType: "address", name: "wallet", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "payAmount",
                type: "uint256",
              },
            ],
            name: "Buy",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "buyBITPEPEwithERC20",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "buyBITPEPEwithETH",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "address", name: "", type: "address" },
            ],
            name: "erc20Record",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "ethRecord",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "receiver",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address[]", name: "tokens", type: "address[]" },
              { internalType: "uint256", name: "ethAmount", type: "uint256" },
            ],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        o =
          "0x60a06040523480156200001157600080fd5b5060405162001456380380620014568339818101604052810190620000379190620000e4565b60016000819055508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505062000116565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000ac826200007f565b9050919050565b620000be816200009f565b8114620000ca57600080fd5b50565b600081519050620000de81620000b3565b92915050565b600060208284031215620000fd57620000fc6200007a565b5b60006200010d84828501620000cd565b91505092915050565b60805161131662000140600039600081816103f30152818161050201526105e001526113166000f3fe6080604052600436106100595760003560e01c80632179f3571461006d5780632daef12f146100aa57806361b0e11c146100d3578063a2c970db146100dd578063e3511faf1461011a578063f7260d3e1461014357610068565b366100685761006661016e565b005b600080fd5b34801561007957600080fd5b50610094600480360381019061008f9190610a71565b610238565b6040516100a19190610ab7565b60405180910390f35b3480156100b657600080fd5b506100d160048036038101906100cc9190610afe565b610250565b005b6100db61016e565b005b3480156100e957600080fd5b5061010460048036038101906100ff9190610b3e565b6103c2565b6040516101119190610ab7565b60405180910390f35b34801561012657600080fd5b50610141600480360381019061013c9190610cd7565b6103e7565b005b34801561014f57600080fd5b506101586105de565b6040516101659190610d42565b60405180910390f35b34600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101b99190610d8c565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fe3d4187f6ca4248660cc0ac8b8056515bac4a8132be2eca31d6d0cc170722a7e60003460405161022e929190610dc0565b60405180910390a1565b60016020528060005260406000206000915090505481565b61027d3330838573ffffffffffffffffffffffffffffffffffffffff16610602909392919063ffffffff16565b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103059190610d8c565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fe3d4187f6ca4248660cc0ac8b8056515bac4a8132be2eca31d6d0cc170722a7e82826040516103b6929190610dc0565b60405180910390a15050565b6002602052816000526040600020602052806000526040600020600091509150505481565b6103ef61068b565b60007f0000000000000000000000000000000000000000000000000000000000000000905060005b83518110156104fd57600084828151811061043557610434610de9565b5b6020026020010151905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161047a9190610d42565b602060405180830381865afa158015610497573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bb9190610e2d565b90506104e884828473ffffffffffffffffffffffffffffffffffffffff166106da9092919063ffffffff16565b505080806104f590610e5a565b915050610417565b5060007f0000000000000000000000000000000000000000000000000000000000000000905060008173ffffffffffffffffffffffffffffffffffffffff168460405161054990610ed3565b60006040518083038185875af1925050503d8060008114610586576040519150601f19603f3d011682016040523d82523d6000602084013e61058b565b606091505b50509050806105cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c690610f45565b60405180910390fd5b5050506105da610760565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610685846323b872dd60e01b85858560405160240161062393929190610f65565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061076a565b50505050565b6002600054036106d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c790610fe8565b60405180910390fd5b6002600081905550565b61075b8363a9059cbb60e01b84846040516024016106f9929190610dc0565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061076a565b505050565b6001600081905550565b60006107cc826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166108329092919063ffffffff16565b90506000815114806107ee5750808060200190518101906107ed9190611040565b5b61082d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610824906110df565b60405180910390fd5b505050565b6060610841848460008561084a565b90509392505050565b60608247101561088f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088690611171565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516108b891906111f7565b60006040518083038185875af1925050503d80600081146108f5576040519150601f19603f3d011682016040523d82523d6000602084013e6108fa565b606091505b509150915061090b87838387610917565b92505050949350505050565b60608315610979576000835103610971576109318561098c565b610970576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109679061125a565b60405180910390fd5b5b829050610984565b61098383836109af565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000825111156109c25781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f691906112be565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a3e82610a13565b9050919050565b610a4e81610a33565b8114610a5957600080fd5b50565b600081359050610a6b81610a45565b92915050565b600060208284031215610a8757610a86610a09565b5b6000610a9584828501610a5c565b91505092915050565b6000819050919050565b610ab181610a9e565b82525050565b6000602082019050610acc6000830184610aa8565b92915050565b610adb81610a9e565b8114610ae657600080fd5b50565b600081359050610af881610ad2565b92915050565b60008060408385031215610b1557610b14610a09565b5b6000610b2385828601610a5c565b9250506020610b3485828601610ae9565b9150509250929050565b60008060408385031215610b5557610b54610a09565b5b6000610b6385828601610a5c565b9250506020610b7485828601610a5c565b9150509250929050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610bcc82610b83565b810181811067ffffffffffffffff82111715610beb57610bea610b94565b5b80604052505050565b6000610bfe6109ff565b9050610c0a8282610bc3565b919050565b600067ffffffffffffffff821115610c2a57610c29610b94565b5b602082029050602081019050919050565b600080fd5b6000610c53610c4e84610c0f565b610bf4565b90508083825260208201905060208402830185811115610c7657610c75610c3b565b5b835b81811015610c9f5780610c8b8882610a5c565b845260208401935050602081019050610c78565b5050509392505050565b600082601f830112610cbe57610cbd610b7e565b5b8135610cce848260208601610c40565b91505092915050565b60008060408385031215610cee57610ced610a09565b5b600083013567ffffffffffffffff811115610d0c57610d0b610a0e565b5b610d1885828601610ca9565b9250506020610d2985828601610ae9565b9150509250929050565b610d3c81610a33565b82525050565b6000602082019050610d576000830184610d33565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d9782610a9e565b9150610da283610a9e565b9250828201905080821115610dba57610db9610d5d565b5b92915050565b6000604082019050610dd56000830185610d33565b610de26020830184610aa8565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050610e2781610ad2565b92915050565b600060208284031215610e4357610e42610a09565b5b6000610e5184828501610e18565b91505092915050565b6000610e6582610a9e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610e9757610e96610d5d565b5b600182019050919050565b600081905092915050565b50565b6000610ebd600083610ea2565b9150610ec882610ead565b600082019050919050565b6000610ede82610eb0565b9150819050919050565b600082825260208201905092915050565b7f4661696c65640000000000000000000000000000000000000000000000000000600082015250565b6000610f2f600683610ee8565b9150610f3a82610ef9565b602082019050919050565b60006020820190508181036000830152610f5e81610f22565b9050919050565b6000606082019050610f7a6000830186610d33565b610f876020830185610d33565b610f946040830184610aa8565b949350505050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000610fd2601f83610ee8565b9150610fdd82610f9c565b602082019050919050565b6000602082019050818103600083015261100181610fc5565b9050919050565b60008115159050919050565b61101d81611008565b811461102857600080fd5b50565b60008151905061103a81611014565b92915050565b60006020828403121561105657611055610a09565b5b60006110648482850161102b565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b60006110c9602a83610ee8565b91506110d48261106d565b604082019050919050565b600060208201905081810360008301526110f8816110bc565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b600061115b602683610ee8565b9150611166826110ff565b604082019050919050565b6000602082019050818103600083015261118a8161114e565b9050919050565b600081519050919050565b60005b838110156111ba57808201518184015260208101905061119f565b60008484015250505050565b60006111d182611191565b6111db8185610ea2565b93506111eb81856020860161119c565b80840191505092915050565b600061120382846111c6565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611244601d83610ee8565b915061124f8261120e565b602082019050919050565b6000602082019050818103600083015261127381611237565b9050919050565b600081519050919050565b60006112908261127a565b61129a8185610ee8565b93506112aa81856020860161119c565b6112b381610b83565b840191505092915050565b600060208201905081810360008301526112d88184611285565b90509291505056fea26469706673582212209e31a82e611ab1f9e339b52b8b36c36306aa5f7da4409d9976932b8289e0f34664736f6c63430008110033",
        i = (function (f) {
          function e() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = this;
            return e.length > 1
              ? f.apply(this, e) || this
              : f.call(this, b, o, e[0]) || this;
          }
          return (
            a(e, f),
            (e.prototype.deploy = function (e, t) {
              return f.prototype.deploy.call(this, e, t || {});
            }),
            (e.prototype.getDeployTransaction = function (e, t) {
              return f.prototype.getDeployTransaction.call(this, e, t || {});
            }),
            (e.prototype.attach = function (e) {
              return f.prototype.attach.call(this, e);
            }),
            (e.prototype.connect = function (e) {
              return f.prototype.connect.call(this, e);
            }),
            (e.createInterface = function () {
              return new r.utils.Interface(b);
            }),
            (e.connect = function (f, e) {
              return new r.Contract(f, b, e);
            }),
            (e.bytecode = o),
            (e.abi = b),
            e
          );
        })(r.ContractFactory);
      e.BuyBITPEPEToken__factory = i;
    },
    4519: function (f, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BuyBITPEPEToken__factory = void 0);
      var n = t(15027);
      Object.defineProperty(e, "BuyBITPEPEToken__factory", {
        enumerable: !0,
        get: function () {
          return n.BuyBITPEPEToken__factory;
        },
      });
    },
    53028: function (f, e, t) {
      "use strict";
      var n,
        a = Object.create
          ? function (f, e, t, n) {
              void 0 === n && (n = t);
              var a = Object.getOwnPropertyDescriptor(e, t);
              (!a ||
                ("get" in a ? !e.__esModule : a.writable || a.configurable)) &&
                (a = {
                  enumerable: !0,
                  get: function () {
                    return e[t];
                  },
                }),
                Object.defineProperty(f, n, a);
            }
          : function (f, e, t, n) {
              void 0 === n && (n = t), (f[n] = e[t]);
            },
        r = Object.create
          ? function (f, e) {
              Object.defineProperty(f, "default", { enumerable: !0, value: e });
            }
          : function (f, e) {
              f.default = e;
            },
        b =
          ((n = function (f) {
            return (n =
              Object.getOwnPropertyNames ||
              function (f) {
                var e = [];
                for (var t in f)
                  Object.prototype.hasOwnProperty.call(f, t) &&
                    (e[e.length] = t);
                return e;
              })(f);
          }),
          function (f) {
            if (f && f.__esModule) return f;
            var e = {};
            if (null != f)
              for (var t = n(f), b = 0; b < t.length; b++)
                "default" !== t[b] && a(e, f, t[b]);
            return r(e, f), e;
          });
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BITPEPE__factory = e.buyWithTokenSol = e.buyWithFiatSol = void 0),
        (e.buyWithFiatSol = b(t(59494))),
        (e.buyWithTokenSol = b(t(4519)));
      var o = t(52855);
      Object.defineProperty(e, "BITPEPE__factory", {
        enumerable: !0,
        get: function () {
          return o.BITPEPE__factory;
        },
      });
    },
    94916: function (f, e, t) {
      "use strict";
      var n,
        a = Object.create
          ? function (f, e, t, n) {
              void 0 === n && (n = t);
              var a = Object.getOwnPropertyDescriptor(e, t);
              (!a ||
                ("get" in a ? !e.__esModule : a.writable || a.configurable)) &&
                (a = {
                  enumerable: !0,
                  get: function () {
                    return e[t];
                  },
                }),
                Object.defineProperty(f, n, a);
            }
          : function (f, e, t, n) {
              void 0 === n && (n = t), (f[n] = e[t]);
            },
        r = Object.create
          ? function (f, e) {
              Object.defineProperty(f, "default", { enumerable: !0, value: e });
            }
          : function (f, e) {
              f.default = e;
            },
        b =
          ((n = function (f) {
            return (n =
              Object.getOwnPropertyNames ||
              function (f) {
                var e = [];
                for (var t in f)
                  Object.prototype.hasOwnProperty.call(f, t) &&
                    (e[e.length] = t);
                return e;
              })(f);
          }),
          function (f) {
            if (f && f.__esModule) return f;
            var e = {};
            if (null != f)
              for (var t = n(f), b = 0; b < t.length; b++)
                "default" !== t[b] && a(e, f, t[b]);
            return r(e, f), e;
          });
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.contracts = e.openzeppelin = void 0),
        (e.openzeppelin = b(t(2756))),
        (e.contracts = b(t(53028)));
    },
    55841: function (f, e, t) {
      "use strict";
      var n,
        a = Object.create
          ? function (f, e, t, n) {
              void 0 === n && (n = t);
              var a = Object.getOwnPropertyDescriptor(e, t);
              (!a ||
                ("get" in a ? !e.__esModule : a.writable || a.configurable)) &&
                (a = {
                  enumerable: !0,
                  get: function () {
                    return e[t];
                  },
                }),
                Object.defineProperty(f, n, a);
            }
          : function (f, e, t, n) {
              void 0 === n && (n = t), (f[n] = e[t]);
            },
        r = Object.create
          ? function (f, e) {
              Object.defineProperty(f, "default", { enumerable: !0, value: e });
            }
          : function (f, e) {
              f.default = e;
            },
        b =
          ((n = function (f) {
            return (n =
              Object.getOwnPropertyNames ||
              function (f) {
                var e = [];
                for (var t in f)
                  Object.prototype.hasOwnProperty.call(f, t) &&
                    (e[e.length] = t);
                return e;
              })(f);
          }),
          function (f) {
            if (f && f.__esModule) return f;
            var e = {};
            if (null != f)
              for (var t = n(f), b = 0; b < t.length; b++)
                "default" !== t[b] && a(e, f, t[b]);
            return r(e, f), e;
          });
      (e.R5 = e.w6 = void 0), b(t(94916));
      var o = t(94450);
      Object.defineProperty(e, "w6", {
        enumerable: !0,
        get: function () {
          return o.ERC20__factory;
        },
      }),
        t(83711),
        t(75869),
        t(4213),
        t(52855),
        t(44381);
      var i = t(15027);
      Object.defineProperty(e, "R5", {
        enumerable: !0,
        get: function () {
          return i.BuyBITPEPEToken__factory;
        },
      });
    },
    40320: function (f, e, t) {
      "use strict";
      t.d(e, {
        mo: function () {
          return fd;
        },
        k8: function () {
          return i;
        },
        gp: function () {
          return fl;
        },
        oA: function () {
          return fp;
        },
        YS: function () {
          return fm;
        },
        xZ: function () {
          return fu;
        },
        mU: function () {
          return fy;
        },
        Vz: function () {
          return fs;
        },
        Ls: function () {
          return T.L;
        },
        SX: function () {
          return a.SX;
        },
        PY: function () {
          return a.PY;
        },
        r0: function () {
          return fe;
        },
        hm: function () {
          return _.h;
        },
        ZN: function () {
          return q;
        },
        HR: function () {
          return fn;
        },
        p$: function () {
          return ff;
        },
        e2: function () {
          return fT;
        },
      });
      var n = t(52322),
        a = t(43892),
        r = t(5406),
        b = t(84787),
        o = t(32806);
      let i = (f) => {
        let { children: e } = f;
        return (0, n.jsx)(a.NB, {
          children: (0, n.jsx)(b.nS, {
            children: (0, n.jsx)(r.L, {
              children: (0, n.jsx)(o.eV, { children: e }),
            }),
          }),
        });
      };
      var c = t(22408),
        u = t(28423),
        s = t(32126),
        l = t(27158);
      let d = "0xcomingsoon",
        p = async (f, e, t) => {
          let n = await f.getLatestBlockhash(),
            a = new l.$Z({
              payerKey: e,
              recentBlockhash: n.blockhash,
              instructions: [
                l.yc.transfer({
                  fromPubkey: e,
                  toPubkey: new l.nh(d),
                  lamports: t * l.j5,
                }),
              ],
            }).compileToV0Message();
          return new l.GS(a);
        },
        y = async function (f, e, t, n) {
          let a =
              !(arguments.length > 4) ||
              void 0 === arguments[4] ||
              arguments[4],
            r = new l.nh(d),
            b = new l.nh(t),
            o = n * 10 ** (await (0, c.ih)(f, b)).decimals,
            i = await (0, c.Am)(b, e),
            p = await (0, c.Am)(b, r, a),
            y = [(0, u.ji)(e, p, r, b), (0, s.$B)(i, p, e, o)],
            m = await f.getLatestBlockhash(),
            v = new l.$Z({
              payerKey: e,
              recentBlockhash: m.blockhash,
              instructions: y,
            }).compileToV0Message();
          return new l.GS(v);
        };
      var m = t(26691),
        v = t(42470),
        h = t(12169),
        w = t.n(h),
        g = t(2784),
        T = t(35667),
        P = t(34244),
        S = t.n(P),
        _ = t(4492),
        O = t(34519),
        k = t.n(O);
      let [j] = (0, o.jk)(() => {
        var f, e, t;
        let { currentWalletChainId: n, walletAddress: r } = (0, b.Os)(),
          { data: o, refetch: i } = a.SX.balance.getEtherBalance.useQuery(
            { wallet: r },
            { enabled: !!r && void 0 !== n }
          );
        return {
          balanceMap: k()(
            null !==
              (f =
                1 === n
                  ? null == o
                    ? void 0
                    : o.eth
                  : null == o
                  ? void 0
                  : o.bsc) && void 0 !== f
              ? f
              : {},
            (f) => ({ lamports: new (S())(f) })
          ),
          bscBalanceMap: k()(
            null !== (e = null == o ? void 0 : o.bsc) && void 0 !== e ? e : {},
            (f) => ({ lamports: new (S())(f) })
          ),
          ethBalanceMap: k()(
            null !== (t = null == o ? void 0 : o.eth) && void 0 !== t ? t : {},
            (f) => ({ lamports: new (S())(f) })
          ),
          refresh: i,
        };
      });
      var E = t(44720);
      let x = (f) =>
          new Proxy(f, {
            get: (f, e) => {
              var t;
              return null !== (t = f[e]) && void 0 !== t
                ? t
                : { lamports: S()(0) };
            },
          }),
        [M, C] = (0, o.jk)(() => {
          let { publicKey: f } = (0, E.O)(),
            { data: e, refetch: t } =
              a.SX.balance.getSolanaWalletBalance.useQuery(
                { wallet: null == f ? void 0 : f.toBase58() },
                { enabled: !!f }
              );
          return {
            balanceMap: x(k()(e, (f) => ({ lamports: S()(f) }))),
            refresh: t,
          };
        }),
        N = (f, e) => {
          var t;
          let {
              walletAddress: n,
              ethWalletAddress: a,
              solWalletAddr: r,
            } = (0, _.h)(),
            {
              balanceMap: b,
              refresh: o,
              bscBalanceMap: i,
              ethBalanceMap: c,
            } = j(),
            { balanceMap: u } = M(),
            s =
              (null == f ? void 0 : f.chain) === "CARD"
                ? void 0
                : (null == f ? void 0 : f.chain) === "SOL"
                ? u[f.token]
                : b[
                    null !== (t = null == f ? void 0 : f.token) && void 0 !== t
                      ? t
                      : ""
                  ],
            l = (() => {
              var e;
              let t =
                f && s && n
                  ? null == s
                    ? void 0
                    : null === (e = s.lamports) || void 0 === e
                    ? void 0
                    : e.div(S()(10).pow((0, T.L)(null == f ? void 0 : f.token)))
                  : void 0;
              return t
                ? t.gt(0)
                  ? Number(t.toString()).toFixed(4)
                  : "0"
                : void 0;
            })(),
            d = l && "" !== e && S()(e).gt(l);
          return {
            maxBalance: l,
            refreshBalance: o,
            insufficientBalance: d,
            bscBalanceMap: a ? i : {},
            ethBalanceMap: a ? c : {},
            solBalanceMap: r ? u : {},
          };
        };
      var B = t(55841),
        I = t(66779),
        A = t(10528),
        D = t(58105);
      let R = () => {
        let {
            walletAddress: f,
            currentWalletChainId: e,
            web3Provider: t,
          } = (0, b.Os)(),
          n = (0, g.useRef)(t);
        n.current = t;
        let r = async (f, e, n) => {
          try {
            let a = B.w6.connect(f, t);
            if ((await a.allowance(t.getAddress(), e)).gte(n)) return;
            let r = await a.approve(e, A.O$.from(n), {});
            await r.wait(), await new Promise((f) => setTimeout(f, 1500));
          } catch (t) {
            throw Error(
              "[APPROVE ERC20 FAILED] "
                .concat(t.message.toString(), " ")
                .concat(f, " ")
                .concat(e, " ")
                .concat(n)
            );
          }
        };
        return {
          createBuy: (0, v.q)(async (b, o, i, c) => {
            try {
              var u;
              let a = null !== (u = n.current) && void 0 !== u ? u : t;
              if (!a || !f)
                throw Error("Please connect your wallet to continue.");
              if ("ETH" === i) {
                if ((await a.getBalance()).lt((0, D.parseUnits)("0.005")))
                  throw Error(
                    "Insufficient balance: You need at least 0.005 ETH to execute this transaction."
                  );
              } else if (
                "BSC" === i &&
                (await a.getBalance()).lt((0, D.parseUnits)("0.0005"))
              )
                throw Error(
                  "Insufficient balance: You need at least 0.0005 BNB to execute this transaction."
                );
              let s = B.R5.connect(
                  1 === e
                    ? "0xD0A9C7E1e504240552EB1d23B0239d42fdb5EC3A"
                    : "0x8075D16bB9Ffb9a3562572ABbA84F9Eb0A18B66e",
                  a
                ),
                l = (0, D.parseUnits)(o, (0, T.L)(b)),
                d = I.constants.AddressZero;
              if (b === d) {
                let f = await s.estimateGas.buyBITPEPEwithETH({ value: l }),
                  e = Math.ceil(1.5 * f.toNumber()),
                  t = await s.buyBITPEPEwithETH({ value: l, gasLimit: e });
                c.onConfirmed(t.hash);
                let n = await t.wait();
                return { success: 1 === n.status, txId: t.hash };
              }
              c.onApproveStart(),
                await r(b, s.address, l),
                c.onApproveSuccess();
              let p = A.O$.from(0);
              for (let f = 0; f < 3; f++)
                try {
                  p = await s.estimateGas.buyBITPEPEwithERC20(b, l);
                  break;
                } catch (e) {
                  if (2 === f) throw e;
                  await new Promise((f) => setTimeout(f, 1e3));
                }
              if (p.eq(0)) throw Error("Please try again later");
              let y = Math.ceil(2 * p.toNumber()),
                m = await s.buyBITPEPEwithERC20(b, l, { gasLimit: y });
              c.onConfirmed(m.hash);
              let v = await m.wait();
              return { success: 1 === v.status, txId: m.hash };
            } catch (e) {
              let f = e.message.toString();
              throw (
                ([
                  "insufficient funds for intrinsic transaction cost",
                  "rejected",
                  "Insufficient balance:",
                  "Pop up window failed to open",
                ].some((e) => f.includes(e)) ||
                  a.PY.sendError.mutate({
                    error: "["
                      .concat(i, " TX FAILED] ")
                      .concat(e.message.toString()),
                  }),
                Error("".concat(e.message.toString().slice(0, 100))))
              );
            }
          }, void 0),
        };
      };
      var F = t(41181),
        U = t(54073),
        L = t.n(U),
        H = t(15107),
        V = t(15514);
      let W = () => {
          let [f, e] = (0, g.useState)(""),
            [t, n] = (0, g.useState)(""),
            [r, b] = (0, g.useState)(""),
            { setIsWrongNetWork: o } = (0, V.k)(),
            [i, c] = (0, g.useState)(),
            u = H.kH.find((f) => f.id === i),
            {
              refreshBalance: s,
              maxBalance: l,
              insufficientBalance: d,
            } = N(u, f),
            {
              currentWalletChainId: p,
              switchChain: y,
              solWalletAddr: v,
              ethWalletAddress: h,
            } = (0, _.h)(),
            w = (0, g.useRef)(0),
            T =
              (null == u ? void 0 : u.chain) === "ETH"
                ? 1
                : (null == u ? void 0 : u.chain) === "BSC"
                ? 56
                : (null == u ? void 0 : u.chain) === "SOL"
                ? 0
                : 1,
            P = (0, g.useMemo)(
              () =>
                L()(async (f, t) => {
                  if (Number.isNaN(t) || 0 === Number(t)) return;
                  let r = w.current,
                    {
                      expectReceive: o,
                      actualCost: i,
                      usdVal: c,
                    } = await a.PY.getTokenAmountWithMeme.query({
                      erc20: f,
                      amount: t,
                      chainId: T,
                    });
                  r === w.current &&
                    (e(o), b((f) => (Number(f) === Number(i) ? f : i)), n(c));
                }, 300),
              [T]
            ),
            S = (0, g.useMemo)(
              () =>
                L()(async (f, t) => {
                  if (Number.isNaN(t) || 0 === Number(t)) return;
                  let r = w.current,
                    {
                      expectReceive: o,
                      actualCost: i,
                      usdVal: c,
                    } = await a.PY.getMemeAmountWithToken.query({
                      erc20: f,
                      amount: t,
                      chainId: T,
                    });
                  r === w.current &&
                    (b(o), e((f) => (Number(f) === Number(i) ? f : i)), n(c));
                }, 300),
              [T]
            ),
            O = (f) => {
              if ((w.current++, "" === f)) {
                b("0"), e("");
                return;
              }
              e(f), u && S(u.token, f);
            },
            k = async (f) => {
              try {
                if (!f) return c(f), !0;
                let e = H.kH.find((e) => e.id === f);
                return (
                  (((null == e ? void 0 : e.chain) === "SOL" && v) ||
                    ((null == e ? void 0 : e.chain) === "ETH" && h) ||
                    ((null == e ? void 0 : e.chain) === "BSC" && h)) &&
                    o(!1),
                  (null == e ? void 0 : e.chain) === "SOL" && h && o(!0),
                  (null == e ? void 0 : e.chain) !== "SOL" && v && o(!0),
                  c(f),
                  (null == e ? void 0 : e.chain) == "BSC" && 56 !== p
                    ? await y(56)
                    : (null == e ? void 0 : e.chain) === "ETH" &&
                      1 !== p &&
                      (await y(1)),
                  !0
                );
              } catch (e) {
                return m.g.error("Please switch chain first."), c(f), !0;
              }
            };
          return (
            (0, g.useEffect)(() => {
              u && (S(u.token, f), s());
            }, [T, null == u ? void 0 : u.id]),
            {
              inputAmount: f,
              setInputAmount: O,
              receiveAmount: r,
              setReceiveAmount: (f) => {
                if ("" === f) {
                  w.current++, b(""), e("0");
                  return;
                }
                w.current++, b(f), u && P(u.token, f);
              },
              currentTokenInfo: u ? { ...u, chainInfo: H.Cz[u.chain] } : void 0,
              setSelectedTokenId: k,
              payMethodConfig: H.kH,
              payMethodBalance: l,
              setMax: () => {
                l && O(l);
              },
              insufficientBalance: d,
              inputUSDVal: t,
              clearState: () => {
                e("0"), b("0"), n("");
              },
              selectedTokenId: i,
            }
          );
        },
        [q] = (0, o.jk)(() => {
          var f, e, t, n, r, b, o, i, c;
          let { data: u, refetch: s } = a.SX.getState.useQuery(void 0, {
              refetchOnWindowFocus: !0,
              refetchInterval: 5e3,
            }),
            l = Y(
              null !== (f = null == u ? void 0 : u.totalSoldUSD) && void 0 !== f
                ? f
                : 0
            ),
            { createBuy: d } = R(),
            {
              walletAddress: h,
              currentWalletChainId: T,
              resetNetwork: P,
              isValidNetwork: S,
              signAndSendTx: O,
              solWalletPubkey: k,
              solWallet: j,
              solConnection: E,
              ethWalletAddress: x,
              solWalletAddr: M,
              switchChain: C,
            } = (0, _.h)(),
            { data: B = 0, refetch: I } = a.SX.getPurchased.useQuery(
              { wallet: h },
              { enabled: !!h, refetchInterval: 5e3 }
            ),
            {
              inputAmount: A,
              inputUSDVal: D,
              receiveAmount: U,
              selectedTokenId: L,
              setInputAmount: V,
              setReceiveAmount: q,
              setMax: Q,
              setSelectedTokenId: K,
              clearState: G,
            } = W(),
            [Z, z] = (0, g.useState)(!1),
            $ = H.kH.find((f) => f.id === L),
            {
              maxBalance: J,
              insufficientBalance: ff,
              refreshBalance: fe,
              solBalanceMap: ft,
              ethBalanceMap: fn,
              bscBalanceMap: fa,
            } = N($, A),
            fr = async (f) => {
              if (
                (!T && (null == $ ? void 0 : $.chain) !== "SOL") ||
                !(null == $ ? void 0 : $.token) ||
                !u ||
                ("SOL" !== $.chain && T && 1 !== T && 56 !== T)
              ) {
                m.g.error(
                  "Please switch to ".concat(
                    (null == $ ? void 0 : $.chain) === "CARD"
                      ? "ETH"
                      : null == $
                      ? void 0
                      : $.chain,
                    " network."
                  )
                );
                return;
              }
              if (!h) {
                m.g.error("Please connect wallet");
                return;
              }
              if (0 === Number(A) || Number.isNaN(Number(A))) {
                m.g.error("Please input purchase amount");
                return;
              }
              if ("SOL" === $.chain && !j) {
                m.g.error("Please connect Solana wallet.");
                return;
              }
              if ("ETH" === $.chain && !x) {
                m.g.error("Please connect Ethereum wallet.");
                return;
              }
              if ("CARD" === $.chain && !x) {
                m.g.error("Please connect Ethereum wallet to buy with card.");
                return;
              }
              let e = Number(U) * u.currentPriceNumber,
                t = Number(U),
                n = $.symbol,
                r = u.currentPriceNumber;
              if (
                ((0, F.B2)("swapAmount", {
                  walletAddress: h,
                  swapFromCurrency: n,
                  swapFromValue: A,
                  swapToValue: t,
                  currentStagePrice: r,
                  swapUSDValue: e,
                }),
                z(!0),
                "CARD" === $.chain)
              ) {
                let b = await (0, v.P)(
                  a.PY.getFaitObject.query({ usdAmount: Number(A), wallet: h }),
                  { sendSuccessTitle: "Prepare Order Success" }
                );
                z(!1),
                  new (w())({
                    ...b,
                    listeners: {
                      close: () => {
                        I(), s();
                      },
                      "payment-status": async (b) => {
                        if ("success" === b.status) {
                          let o = b.tx_id;
                          (0, F.B2)("confirmTransaction", {
                            walletAddress: h,
                            swapFromCurrency: n,
                            swapFromValue: A,
                            swapToValue: t,
                            currentStagePrice: r,
                            swapUSDValue: e,
                            txId: b.tx_id,
                          }),
                            await a.PY.confirmOrder.mutate({
                              txId: o,
                              chainId: 1,
                            }),
                            await (0, v.P)(
                              (async () => {
                                let e = await X(o, 1);
                                (null == e ? void 0 : e.memeAmount) &&
                                  (null == e ? void 0 : e.usdVal) &&
                                  (G(),
                                  null == f ||
                                    f(Number(null == e ? void 0 : e.usdVal)),
                                  (0, F.B2)("swapSuccessful", {
                                    walletAddress: h,
                                    swapFromCurrency: n,
                                    swapFromValue: A,
                                    swapToValue: Number(e.memeAmount),
                                    currentStagePrice: r,
                                    swapUSDValue: Number(e.usdVal),
                                    txId: b.tx_id,
                                  }),
                                  await Promise.all([s(), I()]));
                              })()
                            );
                        } else
                          "failed" === b.status &&
                            a.PY.sendError.mutate({
                              error: "[FIAT PAYMENT] Payment failed: ".concat(
                                JSON.stringify(b)
                              ),
                            });
                      },
                    },
                  }).mount();
                return;
              }
              let b = async (e, t) => {
                fe(),
                  G(),
                  await m.g.promise(
                    (async () => {
                      await a.PY.confirmOrder.mutate({ txId: e, chainId: t });
                      let b = await X(e, t);
                      b &&
                        ((0, F.B2)("swapSuccessful", {
                          walletAddress: h,
                          swapFromCurrency: n,
                          swapFromValue: A,
                          swapToValue: Number(b.memeAmount),
                          currentStagePrice: r,
                          swapUSDValue: Number(b.usdVal),
                          txId: e,
                        }),
                        null == f || f(Number(null == b ? void 0 : b.usdVal)),
                        await Promise.all([s(), I()]));
                    })(),
                    {
                      success: "Transaction Success",
                      error:
                        "Transaction Failed, Please contact us if you didn't receive the token.",
                      pending: "Validating",
                    }
                  ),
                  z(!1);
              };
              if ("SOL" === $.chain) {
                let f;
                if (!k || !j) {
                  m.g.error("Please connect Solana wallet");
                  return;
                }
                z(!0);
                try {
                  if ("SOL" === $.symbol) {
                    let e = await p(E, k, Number(A)),
                      t = await O(e);
                    f = null == t ? void 0 : t.txId;
                  } else {
                    let e = await y(E, k, $.token, Number(A)),
                      t = await O(e);
                    f = null == t ? void 0 : t.txId;
                  }
                } catch (f) {
                  throw (
                    (a.PY.sendError.mutate({
                      error: "[SOL TX FAILED] ".concat(f.message.toString()),
                    }),
                    f)
                  );
                }
                f ? await b(f, 0) : z(!1);
                return;
              }
              z(!0);
              let o = await d($.token, A, $.chain, {
                onApproveStart: () => {
                  (0, F.dE)({ sourceToken: $.name, walletAddress: h });
                },
                onApproveSuccess: () => {
                  (0, F.Ue)({ sourceToken: $.name, walletAddress: h });
                },
                onConfirmed: (f) => {
                  (0, F.B2)("confirmTransaction", {
                    walletAddress: h,
                    swapFromCurrency: n,
                    swapFromValue: A,
                    swapToValue: t,
                    currentStagePrice: r,
                    swapUSDValue: e,
                    txId: f,
                  });
                },
              });
              o ? await b(o.txId, T) : z(!1);
            },
            fb = Math.round(
              (((null !== (e = null == u ? void 0 : u.currentPriceNumber) &&
              void 0 !== e
                ? e
                : 0) -
                11e-5) /
                11e-5) *
                100
            );
          return {
            inputAmount: A,
            setInputAmount: V,
            receiveAmount: U,
            setReceiveAmount: q,
            currentTokenInfo: $ ? { ...$, chainInfo: H.Cz[$.chain] } : void 0,
            setSelectedTokenId: K,
            totalSoldUSD: l,
            totalSoldToken:
              null !== (t = null == u ? void 0 : u.totalSoldMeme) &&
              void 0 !== t
                ? t
                : 0,
            currentPrice:
              null !== (n = null == u ? void 0 : u.currentPrice) && void 0 !== n
                ? n
                : "0",
            currentPriceNumber:
              null !== (r = null == u ? void 0 : u.currentPriceNumber) &&
              void 0 !== r
                ? r
                : 0,
            nextTargetUSD:
              null !== (b = null == u ? void 0 : u.nextTargetUSD) &&
              void 0 !== b
                ? b
                : 0,
            progress:
              null !== (o = null == u ? void 0 : u.progress) && void 0 !== o
                ? o
                : 0,
            nextPrice: null == u ? void 0 : u.nextPrice,
            currentStage:
              null !== (i = null == u ? void 0 : u.stageIndex) && void 0 !== i
                ? i
                : 1,
            stageTotalTargetUSD:
              null !== (c = null == u ? void 0 : u.nextTargetUSD) &&
              void 0 !== c
                ? c
                : 0,
            payMethodConfig: H.kH,
            payMethodBalance: J,
            setMax: Q,
            purchase: fr,
            purchasedToken: B,
            isValidNetwork: S,
            resetNetwork: P,
            buttonPending: Z,
            refreshBalance: fe,
            insufficientBalance: ff,
            inputUSDVal: D,
            refreshPurchased: I,
            selectedTokenId: L,
            refetchState: s,
            currentWalletChainId: T,
            holders: 0,
            returns: fb,
            priceChangeLast7Days: 0,
            solBalanceMap: ft,
            ethBalanceMap: fn,
            bscBalanceMap: fa,
            solWalletAddr: M,
            ethWalletAddress: x,
          };
        }),
        Y = (f) => {
          let e = "totalSoldUSD1-BITPEPEproduction",
            [t, n] = (0, g.useState)(() => {
              if (f) return f;
              try {
                var t;
                return Number(
                  null !== (t = window.localStorage.getItem(e)) && void 0 !== t
                    ? t
                    : "0"
                );
              } catch (f) {
                return 0;
              }
            });
          return (
            (0, g.useEffect)(() => {
              let t = (() => {
                try {
                  var t;
                  let n = Number(
                    null !== (t = window.localStorage.getItem(e)) &&
                      void 0 !== t
                      ? t
                      : "0"
                  );
                  return 0 !== f && f ? f : null != n ? n : 0;
                } catch (f) {
                  return 0;
                }
              })();
              localStorage.setItem(e, t.toString()),
                setTimeout(() => {
                  n(t);
                }, 2e3);
            }, [f]),
            t
          );
        },
        X = async (f, e) => {
          let t = await a.PY.getOrder.query({ txId: f, chainId: e }),
            n = 0;
          for (; n < 8 && !(null == t ? void 0 : t.memeAmount); )
            await new Promise((f) => setTimeout(f, 1e3)),
              (t = await a.PY.getOrder.query({ txId: f, chainId: e })),
              n++;
          return t;
        };
      var Q = t(28879),
        K = t.n(Q),
        G = t(64989),
        Z = t.n(G),
        z = t(10264),
        $ = t.n(z);
      K().extend($()), K().extend(Z());
      let [J] = (0, o.jk)(() => ({ isStarted: !0, duration: Z() })),
        [ff] = (0, o.jk)(() => {
          let { walletAddress: f } = (0, _.h)(),
            { data: e, refetch: t } = a.SX.referral.getReferralState.useQuery(
              { wallet: f },
              { enabled: !!f }
            ),
            n = a.SX.referral.bindReferral.useMutation();
          return {
            referralState: e,
            maybeBind: async (e) => {
              try {
                if (!f) return;
                await t(), await n.mutateAsync({ wallet: f, srcKey: e });
              } catch (f) {}
            },
            refreshState: t,
          };
        }),
        fe = (f) => {
          let { maybeBind: e } = ff(),
            { walletAddress: t } = (0, _.h)();
          (0, g.useEffect)(() => {
            window && f && localStorage.setItem("referralKey", f),
              !f &&
                localStorage.getItem("referralKey") &&
                (f = localStorage.getItem("referralKey")),
              t && f && "string" == typeof f && e(f);
          }, [f, t]);
        };
      var ft = t(88932);
      function fn() {
        let [f, e] = (0, g.useState)(""),
          [t, n] = (0, g.useState)(""),
          { data: r } = a.SX.getPurchased.useQuery({ wallet: f }),
          [b, o] = (0, g.useState)(1),
          i = async () => {
            try {
              let f = await ft.Am.promise(
                a.PY.confirmOrder.mutate({ chainId: b, txId: t }),
                {
                  pending: "Loading",
                  success: "Success",
                  error: {
                    render: (f) => {
                      let { data: e } = f;
                      return e.message;
                    },
                  },
                }
              );
              ft.Am.success(
                ""
                  .concat(f.memeAmount, " token recovered. Wallet: ")
                  .concat(f.wallet)
              );
            } catch (f) {}
          };
        return {
          wallet: f,
          setWallet: e,
          txId: t,
          setTxId: n,
          purchased: r,
          setChainId: o,
          chainId: b,
          confirmRecover: i,
        };
      }
      var fa = t(40334),
        fr = t.n(fa);
      let fb = (f) => {
        let {
            initialValue: e = 0,
            fontStyle: t,
            duration: a = 700,
            stepPrecision: r = 2,
            value: b,
            formatValue: o,
            className: i,
          } = f,
          [c, u] = (0, g.useState)(e);
        return (
          (0, g.useEffect)(() => {
            requestAnimationFrame(() => {
              u(b);
            });
          }, [b]),
          (0, n.jsx)(fr(), {
            component: "span",
            value: c,
            className: i,
            style: { ...t },
            duration: null != a ? a : 500,
            stepPrecision: r,
            formatValue: (f) => {
              var e;
              return null !== (e = null == o ? void 0 : o(f)) && void 0 !== e
                ? e
                : f;
            },
          })
        );
      };
      var fo = (f) => {
          let {
              value: e,
              onChange: t,
              className: a,
              placeholder: r,
              disabled: b = !1,
              style: o = {},
            } = f,
            i = (0, g.useRef)(null),
            c = (0, g.useRef)(0);
          return (
            (0, g.useEffect)(() => {
              i.current &&
                requestAnimationFrame(() => {
                  var f,
                    t = (e || "").length - c.current;
                  null === (f = i.current) ||
                    void 0 === f ||
                    f.setSelectionRange(t, t);
                });
            }, [e]),
            (0, n.jsx)("input", {
              ref: i,
              className: "outline-none ".concat(a),
              placeholder: r,
              value: e,
              disabled: b,
              style: o,
              onChange: (f) => {
                let e = f.target.selectionStart || 0,
                  n = f.target.value.trim();
                (c.current = n.length - e), null == t || t(f.target.value);
              },
              inputMode: "decimal",
            })
          );
        },
        fi = t(80537),
        fc = t.n(fi);
      let fu = () => {
          let { totalSoldUSD: f } = q((f) => [f.totalSoldUSD]);
          return (0, n.jsx)(fb, {
            value: Number(f.toFixed(0)),
            stepPrecision: 1,
            formatValue: (f) => "$".concat(fv(f)),
          });
        },
        fs = () => {
          let { stageTotalTargetUSD: f } = q((f) => [f.stageTotalTargetUSD]);
          return (0, n.jsx)(fb, {
            value: Number(f),
            stepPrecision: 1,
            formatValue: (f) => "$".concat(fv(f)),
          });
        },
        fl = (f) => {
          let { className: e, disabled: t = !1, style: a } = f,
            { inputAmount: r, setInputAmount: b } = q(),
            [o, i] = (0, g.useState)(fh(r));
          return (
            (0, g.useEffect)(() => {
              i(fh(r));
            }, [r]),
            (0, n.jsx)(fo, {
              value: o,
              className: e,
              placeholder: "0",
              disabled: t,
              style: a,
              onChange: (f) => {
                let e = f
                  .replace(/[^0-9\.\,]/g, "")
                  .replace(/(\..*?)\..*/g, "$1");
                i(e),
                  !e.endsWith(".") &&
                    fc()(Number(e)) &&
                    b(e.replaceAll(",", ""));
              },
            })
          );
        },
        fd = () => {
          let { inputUSDVal: f, inputAmount: e } = q((f) => [f.inputUSDVal]);
          return e && Number(e) > 0 ? f : "";
        },
        fp = (f) => {
          let { buttonCls: e, textCls: t, label: a } = f,
            { setMax: r, payMethodBalance: b } = q((f) => [f.payMethodBalance]);
          return b
            ? (0, n.jsxs)("div", {
                className:
                  "text-base leading-[12px] max-md:text-[12px] tracking-widertext-left capitalize z-[200] ".concat(
                    e
                  ),
                children: [
                  a || "Balance",
                  ": ",
                  b,
                  " ",
                  (0, n.jsx)("span", {
                    className: "font-bold cursor-pointer ml-[3px] ".concat(t),
                    onClick: () => r(),
                    style: { color: "#FEB92D" },
                    children: "Max",
                  }),
                ],
              })
            : null;
        },
        fy = (f) => {
          let { className: e, disabled: t = !1, style: a } = f,
            { receiveAmount: r, setReceiveAmount: b } = q(),
            [o, i] = (0, g.useState)(fh(r));
          return (
            (0, g.useEffect)(() => {
              i(fh(r));
            }, [r]),
            (0, n.jsx)(fo, {
              value: o,
              className: e,
              placeholder: "0",
              disabled: t,
              style: a,
              onChange: (f) => {
                b(
                  f ? Math.floor(Number(f.replaceAll(",", ""))).toString() : ""
                );
              },
            })
          );
        },
        fm = () => {
          let { purchasedToken: f } = q();
          return (0, n.jsx)(fb, {
            value: Number(f),
            stepPrecision: 0,
            formatValue: (f) => "".concat(fv(f)),
          });
        },
        fv = (f) =>
          new Intl.NumberFormat("en-US", {
            notation: "standard",
            maximumSignificantDigits: 20,
          }).format(f),
        fh = (f) => {
          if (!f || 0 === f.length) return "";
          let [e, t] = f.split("."),
            n = e.replace(/[^\d]/g, ""),
            a = (n = n.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
          return t && (a += "." + t), a;
        };
      var fw = t(71941),
        fg = t(48834).Buffer;
      let [fT] = (0, o.jk)(() => {
        let { walletAddress: f } = (0, _.h)(),
          { data: e, refetch: t } = a.SX.staking.getWalletStatus.useQuery(
            { wallet: f },
            { enabled: !!f }
          ),
          { data: n, refetch: r } = a.SX.staking.getMarketStatus.useQuery(),
          [b, o] = (0, g.useState)(!1),
          [i, c] = (0, g.useState)(0),
          u = a.SX.staking.stakeAmountInPool.useMutation(),
          s = async (e, n) => {
            try {
              if (!f) return;
              o(!0);
              let a = (function (f) {
                let e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 300;
                return (function (f) {
                  try {
                    let e = JSON.stringify(f),
                      t = fg.from(e).toString("base64"),
                      n = fw
                        .createHmac("sha256", "btcpepe-staking-api")
                        .update(t)
                        .digest("hex");
                    return "".concat(t, ".").concat(n);
                  } catch (f) {
                    throw (
                      (console.error("Encryption error:", f),
                      Error("Failed to encrypt data"))
                    );
                  }
                })({ ...f, exp: Math.floor(Date.now() / 1e3) + e });
              })({ wallet: f, amount: e, poolName: n });
              await u.mutateAsync({ token: a }),
                m.g.success("Staked successfully"),
                await t(),
                await r(),
                o(!1),
                c((f) => f + 1);
            } catch (f) {
              m.g.error(f.message), o(!1);
            }
          };
        return {
          stakingState: e,
          refreshStaking: t,
          staking: b,
          doStake: s,
          stakingUpdater: i,
          stakingMarketData: n,
        };
      });
    },
    15107: function (f, e, t) {
      "use strict";
      t.d(e, {
        Cz: function () {
          return b;
        },
        kH: function () {
          return r;
        },
      });
      var n,
        a = t(49489);
      let r = [
        {
          icon: "/chain-icon/eth.svg",
          name: "Ethereum",
          symbol: "ETH",
          chain: "ETH",
          token: a.NQ,
          chainId: 1,
        },
        {
          icon: "/chain-icon/usdt.svg",
          name: "Tether USD",
          symbol: "USDT",
          chain: "ETH",
          token: a.g8,
          chainId: 1,
        },
        {
          icon: "/chain-icon/usdc.svg",
          name: "USDCoin",
          symbol: "USDC",
          chain: "ETH",
          token: a.Ck,
          chainId: 1,
        },
        {
          icon: "/chain-icon/bnb.svg",
          name: "BNB",
          symbol: "BNB",
          chain: "BSC",
          token: a.jm,
          chainId: 56,
        },
        {
          icon: "/chain-icon/usdt.svg",
          name: "Tether USD",
          symbol: "USDT",
          chain: "BSC",
          token: a.jq,
          chainId: 56,
        },
        {
          icon: "/chain-icon/usdc.svg",
          name: "USD Coin",
          symbol: "USDC",
          chain: "BSC",
          token: a.QZ,
          chainId: 56,
        },
        {
          icon: "/chains/sol.svg",
          name: "Solana",
          symbol: "SOL",
          chain: "SOL",
          token: a.kE,
          chainId: 0,
        },
        {
          icon: "/chain-icon/usdc.svg",
          name: "USD Coin",
          symbol: "USDC",
          chain: "SOL",
          token: a.yb,
          chainId: 0,
        },
        {
          icon: "/chain-icon/usdt.svg",
          name: "Tether USD",
          symbol: "USDT",
          chain: "SOL",
          token: a.hH,
          chainId: 0,
        },
        {
          icon: "/chain-icon/usd.svg",
          name: "US Dollar",
          symbol: "USD",
          chain: "CARD",
          token: a.g8,
          chainId: 0,
        },
      ].map((f) => ({ ...f, id: f.chain + f.symbol }));
      null === (n = r.find((f) => "CARD" === f.chain)) || void 0 === n || n.id;
      let b = {
        ETH: {
          name: "Ethereum Mainnet",
          icon: "/chain-icon/eth-blue.svg",
          activeIcon: "/chain-icon/eth-white.svg",
          symbol: "ETH",
          desc: "Ethereum",
          iconW: "/chain-icon/eth.svg",
        },
        BSC: {
          name: "BNB Smart Chain",
          icon: "/chain-icon/bsc-org.svg",
          activeIcon: "/chain-icon/bnb-white.svg",
          symbol: "BNB",
          desc: "Binance",
          iconW: "/chain-icon/bnb.svg",
        },
        SOL: {
          name: "Solana",
          icon: "/chain-icon/sol-color.svg",
          activeIcon: "/chain-icon/sol-white.svg",
          symbol: "SOL",
          desc: "Solana",
          iconW: "/chain-icon/sol.svg",
        },
        CARD: {
          name: "Card",
          icon: "/chain-icon/card-green.svg",
          activeIcon: "/chain-icon/card-white.svg",
          symbol: "CARD",
          desc: "Card",
          iconW: "/chain-icon/card.svg",
        },
      };
    },
    41181: function (f, e, t) {
      "use strict";
      t.d(e, {
        B2: function () {
          return c;
        },
        Qy: function () {
          return b;
        },
        R4: function () {
          return r;
        },
        Ue: function () {
          return i;
        },
        dE: function () {
          return o;
        },
        mZ: function () {
          return a;
        },
      });
      let n = (f, e) => {
          try {
            console.log("[\uD83D\uDE80 report]", e, f);
            let t = window.dataLayer;
            if (!t) return;
            t.push({ event: null != e ? e : "workflowStep", ...f });
          } catch (f) {
            console.error(f);
          }
        },
        a = (f) => {
          n({
            workflowName: "connectWallet",
            workflowStepNumber: 1,
            workflowCompleteFlag: 0,
            workflowStepName: "start",
            chainType: f,
          });
        },
        r = (f, e) => {
          n({
            workflowName: "connectWallet",
            workflowStepNumber: 2,
            workflowCompleteFlag: 1,
            walletAddress: f,
            walletName: e,
            workflowStepName: "successful",
          });
        },
        b = (f, e) => {
          n({
            workflowStepName: "isReconnected",
            workflowStepNumber: 2,
            workflowName: "connectWallet",
            workflowCompleteFlag: 1,
            walletAddress: f,
            walletName: e,
          });
        },
        o = (f) => {
          n({
            workflowName: "approve".concat(f.sourceToken),
            workflowStepNumber: 1,
            workflowStepName: "start",
            workflowCompleteFlag: 0,
            walletAddress: f.walletAddress,
          });
        },
        i = (f) => {
          n({
            workflowName: "approve".concat(f.sourceToken),
            workflowStepNumber: 2,
            workflowStepName: "complete",
            workflowCompleteFlag: 1,
            walletAddress: f.walletAddress,
          });
        },
        c = (f, e) => {
          n({
            workflowName: "swap",
            workflowStepNumber:
              "swapAmount" === f
                ? 1
                : "confirmTransaction" === f
                ? 2
                : "swapSuccessful" === f
                ? 3
                : 0,
            workflowStepName: f,
            workflowCompleteFlag: "swapSuccessful" === f ? 1 : 0,
            walletAddress: e.walletAddress,
            swapFromCurrency: e.swapFromCurrency,
            swapFromValue: e.swapFromValue,
            swapToCurrency: "BEPE",
            swapToValue: e.swapToValue,
            tokenPrice: e.currentStagePrice.toString(),
            ...("swapSuccessful" === f ? { transactionId: e.txId } : {}),
          }),
            "swapSuccessful" === f &&
              (n(
                {
                  ecommerce: {
                    currency: "USD",
                    value: e.swapUSDValue,
                    transaction_id: e.txId,
                    items: [
                      {
                        item_name: "BEPE",
                        item_id: "BITPEPE_id",
                        price: e.currentStagePrice,
                        item_brand: e.swapFromCurrency,
                        quantity: e.swapToValue,
                      },
                    ],
                  },
                },
                "purchase"
              ),
              (function (f, e, t) {
                try {
                  window.p161.track("3165559", {
                    customer_extra: e,
                    customer_amount: t,
                    customer_id: e,
                  });
                } catch (f) {
                  console.error(f);
                }
              })(0, e.txId, e.swapUSDValue.toString()));
        };
    },
    4492: function (f, e, t) {
      "use strict";
      t.d(e, {
        h: function () {
          return u;
        },
      });
      var n = t(26691),
        a = t(5406),
        r = t(84787),
        b = t(2784),
        o = t(15107),
        i = t(41181),
        c = t(28947);
      let u = () => {
        let {
            walletAddress: f,
            connect: e,
            disconnect: t,
            currentWalletChainId: u,
            walletIcon: s,
            switchChain: l,
            walletName: d,
            manuallyTriggerConnect: p,
          } = (0, r.Os)(),
          {
            connect: y,
            walletAddr: m,
            disconnect: v,
            solWallet: h,
            signAndSendTx: w,
            solWalletPubkey: g,
            connection: T,
          } = (0, a.K)(),
          P = o.kH.some((f) => f.chainId === u) || !1,
          S = !!m,
          _ = null != f ? f : m,
          O = async function () {
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : o.kH[0].chainId;
            try {
              await l(o.kH[0].chainId), n.g.success("Reset network success");
            } catch (f) {
              n.g.error("Reset network failed");
            }
          },
          k = async () => {
            f ? await t() : m && v();
          };
        return (
          (0, b.useEffect)(() => {
            _ && d && (p.current ? (0, i.R4)(_, d) : (0, i.Qy)(_, d));
          }, [_, d]),
          {
            walletAddress: _,
            walletAddressShort: _
              ? "".concat(_.slice(0, 6), "...").concat(_.slice(-4))
              : void 0,
            walletName: null != d ? d : null == h ? void 0 : h.adapter.name,
            walletIcon: s || (null == h ? void 0 : h.adapter.icon),
            connect: (f) => {
              if ("sol" === f) {
                if (
                  ((0, i.mZ)("sol"),
                  -1 !== navigator.userAgent.toLowerCase().indexOf("phantom"))
                ) {
                  y();
                  return;
                }
                if ((0, c.t)()) {
                  let f = encodeURIComponent(window.location.href),
                    e = encodeURIComponent(window.location.origin);
                  console.log(
                    "https://phantom.app/ul/browse/"
                      .concat(f, "?ref=")
                      .concat(e)
                  ),
                    (window.location.href = "https://phantom.app/ul/browse/"
                      .concat(f, "?ref=")
                      .concat(e));
                } else y();
              } else (0, i.mZ)("eth"), e();
            },
            disconnect: k,
            isValidNetwork: !f || P,
            resetNetwork: O,
            currentWalletChainId: u,
            solWalletAddr: m,
            switchChain: l,
            chainIcon: S
              ? "/chains/sol.svg"
              : 1 === u
              ? "/chains/ethereum.svg"
              : "/chains/bnb-36x36.svg",
            signAndSendTx: w,
            solWalletPubkey: g,
            solWallet: h,
            solConnection: T,
            ethWalletAddress: f,
            disconnectETH: () => {
              t();
            },
            disconnectSOL: v,
            clearEvmCache: () => {},
          }
        );
      };
    },
    15514: function (f, e, t) {
      "use strict";
      t.d(e, {
        k: function () {
          return b;
        },
      });
      var n = t(32806),
        a = t(2784),
        r = t(4492);
      let [b] = (0, n.jk)(() => {
        let [f, e] = (0, a.useState)(!1),
          { walletAddressShort: t } = (0, r.h)();
        return (
          (0, a.useEffect)(() => {
            t && e(!1);
          }, [t]),
          { isWrongNetWork: f, setIsWrongNetWork: e }
        );
      });
    },
    49489: function (f, e, t) {
      "use strict";
      t.d(e, {
        Ck: function () {
          return b;
        },
        NQ: function () {
          return r;
        },
        QZ: function () {
          return u;
        },
        g8: function () {
          return o;
        },
        hH: function () {
          return d;
        },
        jm: function () {
          return i;
        },
        jq: function () {
          return c;
        },
        kE: function () {
          return s;
        },
        yb: function () {
          return l;
        },
      });
      var n = t(30020),
        a = t(51906);
      let r = a.d,
        b = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        o = "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        i = a.d,
        c = "0x55d398326f99059ff775485246999027b3197955",
        u = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        s = n.Gd.toBase58(),
        l = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        d = "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB";
    },
    35667: function (f, e, t) {
      "use strict";
      t.d(e, {
        L: function () {
          return o;
        },
      });
      var n = t(30020),
        a = t(49489);
      let r = [a.g8, a.Ck],
        b = [a.yb, a.hH],
        o = (f) =>
          f === n.Gd.toBase58()
            ? 9
            : b.includes(f)
            ? 6
            : r.includes(f)
            ? 6
            : 18;
    },
    5406: function (f, e, t) {
      "use strict";
      t.d(e, {
        L: function () {
          return M;
        },
        K: function () {
          return C;
        },
      });
      var n = t(52322),
        a = t(66094),
        r = t(58536),
        b = t(68158),
        o = t(44720),
        i = t(17831),
        c = t(26593),
        u = t(51120),
        s = t(24713),
        l = t(5426),
        d = t(199),
        p = t(26253),
        y = t(91830),
        m = t(75612),
        v = t(54629),
        h = t(99079),
        w = t(78718),
        g = t(27158),
        T = t(2784),
        P = t(35667),
        S = t(28947),
        _ = t(42470),
        O = t(22408),
        k = t(32126),
        j = t(30020);
      async function E(f, e, t, n) {
        let a = new g.nh(t),
          r = new g.nh(e),
          b = await (0, O.Am)(r, f),
          o = await (0, O.Am)(r, a),
          i = (0, k.$B)(b, o, f, n, [], j.H_);
        return new g.YW().add(i);
      }
      var x = t(43892);
      t(15479);
      let M = (f) => {
          let { children: e } = f,
            t = a.Q.Mainnet,
            o = (0, T.useMemo)(
              () =>
                "https://young-old-pine.solana-mainnet.quiknode.pro/1ccd534d28557b90637cf4b64134609054ccb494/",
              []
            ),
            [i, u] = (0, T.useState)([]);
          return (
            (0, T.useEffect)(() => {
              (0, S.t)()
                ? u([new s.O(), new l.e()])
                : u([
                    new s.O(),
                    new d.H(),
                    new p.A(),
                    new y.T(),
                    new m.B(),
                    new v.y(),
                    new l.e(),
                    new h.P(),
                    new w.V(),
                  ]);
            }, [t]),
            (0, n.jsx)(r.U, {
              endpoint: o,
              config: { commitment: "confirmed" },
              children: (0, n.jsx)(b.n, {
                wallets: i,
                autoConnect: !0,
                children: (0, n.jsx)(c.s, { children: e }),
              }),
            })
          );
        },
        C = () => {
          let {
              publicKey: f,
              connect: e,
              connected: t,
              sendTransaction: n,
              disconnect: a,
              wallet: r,
            } = (0, o.O)(),
            b = null == f ? void 0 : f.toBase58(),
            { setVisible: c } = (0, u.h)(),
            { connection: s } = (0, i.R)(),
            l = (0, _.q)(
              async (f) => {
                try {
                  if (!t) {
                    e();
                    return;
                  }
                  let a = await n(f, s);
                  return {
                    success: !(await s.confirmTransaction(a)).value.err,
                    txId: a,
                  };
                } catch (f) {
                  throw Error(f.message);
                }
              },
              {
                onError: (f) => {
                  x.PY.sendError.mutate({
                    error: "[SOL SEND TX FAILED] Transaction Failed: ".concat(
                      f
                    ),
                  });
                },
              }
            ),
            d = async (t, n, a) => {
              if (!f) {
                e();
                return;
              }
              let r = 10 ** (0, P.L)(t) * a,
                b = new g.nh(n),
                o = await E(f, new g.nh(t), b, r),
                i = await l(o);
              return { success: !!i, txId: i };
            };
          return {
            connect: () => c(!0),
            walletAddr: b,
            connected: t,
            disconnect: a,
            signAndSendTx: l,
            sendSPLToken: d,
            solWallet: r,
            solWalletPubkey: null == r ? void 0 : r.adapter.publicKey,
            connection: s,
          };
        };
    },
    28947: function (f, e, t) {
      "use strict";
      function n() {
        try {
          return (
            ("undefined" != typeof navigator &&
              /android/i.test(navigator.userAgent)) ||
            ("undefined" != typeof navigator &&
              /iPhone|iPod|iPad/.test(navigator.userAgent)) ||
            ("undefined" != typeof navigator &&
              /iPad/.test(navigator.userAgent))
          );
        } catch (f) {
          return !1;
        }
      }
      t.d(e, {
        t: function () {
          return n;
        },
      });
    },
    42470: function (f, e, t) {
      "use strict";
      t.d(e, {
        P: function () {
          return b;
        },
        q: function () {
          return r;
        },
      });
      var n = t(52322),
        a = t(26691);
      function r(f, e) {
        return async function () {
          for (var t, r, b = arguments.length, o = Array(b), i = 0; i < b; i++)
            o[i] = arguments[i];
          try {
            let r = f(...o);
            return await a.g.promise(r, {
              pending:
                null !== (t = null == e ? void 0 : e.sendingTitle) &&
                void 0 !== t
                  ? t
                  : "Sending Transaction...",
              error: {
                render: (f) => {
                  var e, t;
                  let { data: a } = f,
                    r =
                      null !==
                        (t =
                          null == a
                            ? void 0
                            : null === (e = a.message) || void 0 === e
                            ? void 0
                            : e.slice(0, 100)) && void 0 !== t
                        ? t
                        : "Unknown Error";
                  return (console.log("\uD83D\uDE80 ~ return ~ msg:", r),
                  r.includes("Pop up window failed to open"))
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: "mb-2",
                            children:
                              "Your wallet popup isn’t opening. Please try relaunching your browser and try again.",
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              "Need help? Reach out via LiveChat or",
                              " ",
                              (0, n.jsx)("a", {
                                href: "https://t.me/bitcoinpepe_group",
                                target: "_blank",
                                className: "underline text-blue-500",
                                children: "Telegram",
                              }),
                              ".",
                            ],
                          }),
                        ],
                      })
                    : r.includes(
                        "insufficient funds for intrinsic transaction cost"
                      )
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: "mb-2",
                            children:
                              "Not enough gas. Your wallet doesn’t have enough ETH or BNB to cover the transaction fees. Please top up and try again.",
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              "Need help? Reach out via LiveChat or",
                              " ",
                              (0, n.jsx)("a", {
                                href: "https://t.me/bitcoinpepe_group",
                                target: "_blank",
                                className: "underline text-blue-500",
                                children: "Telegram",
                              }),
                              ".",
                            ],
                          }),
                        ],
                      })
                    : r.includes("rejected")
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: "mb-2",
                            children:
                              "Transaction cancelled. You rejected the request in your wallet. If that was a mistake, please try again.",
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              "Need help? Reach out via LiveChat or",
                              " ",
                              (0, n.jsx)("a", {
                                href: "https://t.me/bitcoinpepe_group",
                                target: "_blank",
                                className: "underline text-blue-500",
                                children: "Telegram",
                              }),
                              ".",
                            ],
                          }),
                        ],
                      })
                    : r.includes("Insufficient balance:")
                    ? (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)("div", {
                          className: "mb-2",
                          children: r,
                        }),
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: "mb-2",
                            children:
                              "Something went wrong. We couldn’t send your transaction this time—please try again shortly.",
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              "Need help? Reach out via LiveChat or",
                              " ",
                              (0, n.jsx)("a", {
                                href: "https://t.me/bitcoinpepe_group",
                                target: "_blank",
                                className: "underline text-blue-500",
                                children: "Telegram",
                              }),
                              ".",
                            ],
                          }),
                        ],
                      });
                },
              },
              success: {
                render: (f) => {
                  var t;
                  let { data: n } = f;
                  return null !==
                    (t = null == e ? void 0 : e.sendSuccessTitle) &&
                    void 0 !== t
                    ? t
                    : "Transaction Confirmed";
                },
              },
            });
          } catch (f) {
            return (
              console.error("[Send Tx Failed]", f),
              null == e ||
                null === (r = e.onError) ||
                void 0 === r ||
                r.call(e, f),
              null
            );
          }
        };
      }
      async function b(f, e) {
        return (
          a.g.promise(f, {
            pending: null == e ? void 0 : e.sendingTitle,
            error: {
              render: (f) => {
                var e;
                let { data: t } = f;
                return null !== (e = null == t ? void 0 : t.message) &&
                  void 0 !== e
                  ? e
                  : "Unknown Error";
              },
            },
            success: {
              render: () => {
                var f;
                return null !== (f = null == e ? void 0 : e.sendSuccessTitle) &&
                  void 0 !== f
                  ? f
                  : "Success";
              },
            },
          }),
          f
        );
      }
    },
    84787: function (f, e, t) {
      "use strict";
      t.d(e, {
        Os: function () {
          return E;
        },
        nS: function () {
          return O;
        },
      });
      var n = t(52322),
        a = t(14140),
        r = t(1005),
        b = t(8550),
        o = t(1842),
        i = t.n(o),
        c = t(34291),
        u = t.n(c),
        s = t(2784),
        l = t(47133),
        d = t(45627),
        p = t(27013),
        y = t(85971),
        m = t(47941),
        v = t(32380),
        h = t(88748),
        w = t(86316);
      let g = "2e5738140f384004bcafe281e1877ac3",
        T =
          "https://aged-frequent-ensemble.quiknode.pro/4c35a5670737558dd634e6e18bb66064bb81387d",
        P = {
          isNetworkSupported: !1,
          walletIcon: "",
          readonlyProvider: new r.r(T),
          switchChain: async () => {},
          connect: () => {},
          disconnect: async () => {},
          signMessageWithString: async () => "",
          manuallyTriggerConnect: { current: !1 },
          openConnectModalRef: { current: () => {} },
        },
        S = (0, s.createContext)(P),
        _ = {
          name: "BEPE",
          description: "BEPE",
          url: "https://bitcoinpepe.co/",
          icons: ["https://bitcoinpepe.co/logo.png"],
        },
        O = (f) => {
          let { children: e } = f,
            [t] = (0, s.useState)(() =>
              (0, a.o)({
                chains: [v.R, h.e],
                projectId: g,
                metadata: _,
                auth: { socials: [], showWallets: !0, email: !1 },
                ssr: !0,
              })
            );
          return (
            (0, s.useEffect)(() => {
              (0, w.OY)({
                metadata: _,
                wagmiConfig: t,
                projectId: g,
                enableAnalytics: !0,
                enableOnramp: !0,
                excludeWalletIds: [
                  "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
                ],
              });
            }, []),
            (0, n.jsx)(l.F, {
              config: t,
              children: (0, n.jsx)(k, { children: e }),
            })
          );
        },
        k = (f) => {
          var e;
          let { children: t } = f,
            a = (function (f) {
              let e = (0, s.useRef)(f);
              return (e.current = f), e;
            })(u()),
            {
              address: o,
              connector: c,
              chainId: l,
            } = null !== (e = (0, d.m)()) && void 0 !== e ? e : {},
            { disconnectAsync: v } = (0, p.q)(),
            { switchChainAsync: h } = (0, y.o)(),
            [w, g] = (0, s.useState)(""),
            P = (function () {
              let { chainId: f } =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                { data: e } = (0, m.L)({ chainId: f });
              return (0, s.useMemo)(
                () =>
                  e
                    ? (function (f) {
                        var e, t;
                        let { account: n, chain: a, transport: r } = f,
                          o = {
                            chainId: a.id,
                            name: a.name,
                            ensAddress:
                              null === (t = a.contracts) || void 0 === t
                                ? void 0
                                : null === (e = t.ensRegistry) || void 0 === e
                                ? void 0
                                : e.address,
                          };
                        return new b.Q(r, o).getSigner(n.address);
                      })(e)
                    : void 0,
                [e]
              );
            })({ chainId: l });
          (0, s.useEffect)(() => {}, [null == c ? void 0 : c.name]);
          let _ = (0, s.useMemo)(
              () =>
                new r.r(
                  1 === l
                    ? T
                    : "https://blissful-frequent-ensemble.bsc.quiknode.pro/2b4eced97a7152e81436e4b3b7f899ba4c9afc31"
                ),
              [l]
            ),
            O = (0, s.useRef)(!1),
            k = async (f) =>
              P
                ? await P.signMessage(f)
                : (console.log("web3Provider is not available"), ""),
            E = {
              currentWalletChainId: l,
              openConnectModalRef: a,
              isNetworkSupported: 1 === l || 56 === l,
              switchChain: async (f) => {
                i()(h) || (await h({ chainId: f }));
              },
              walletAddress: i()(o) ? void 0 : "".concat(o),
              walletIcon: w,
              walletName: null == c ? void 0 : c.name,
              readonlyProvider: _,
              connect: () => {
                setTimeout(() => {
                  var f;
                  (O.current = !0),
                    null === (f = a.current) || void 0 === f || f.call(a);
                });
              },
              disconnect: async () => {
                await v({ connector: c });
              },
              signMessageWithString: k,
              manuallyTriggerConnect: O,
              web3Provider: P,
            };
          return (0, n.jsxs)(S.Provider, {
            value: E,
            children: [t, (0, n.jsx)(x, { children: (0, n.jsx)(j, {}) })],
          });
        },
        j = () => {
          let { open: f } = (0, w.k_)(),
            { openConnectModalRef: e } = E();
          return (e.current = f), null;
        },
        E = () => {
          let f = (0, s.useContext)(S);
          if (void 0 === f)
            throw Error("useWallet must be used within a WalletProvider");
          return f;
        };
      function x(f) {
        let { children: e } = f,
          [t, n] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            n(!0);
          }, []),
          t ? e : null
        );
      }
    },
    75477: function () {},
    33196: function () {},
    38087: function () {},
    30488: function () {},
  },
]);
