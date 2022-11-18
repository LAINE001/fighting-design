import{h as p,k as c,r as o,o as i,g as y,c as C,a,w as u,d as t,e as F,b as s}from"./app.abf7aabe.js";const A=p({__name:"demo1",setup(d){const l=c(1),n=c(100);return(r,e)=>{const D=o("f-pagination");return i(),y(D,{current:l.value,"onUpdate:current":e[0]||(e[0]=h=>l.value=h),total:n.value},null,8,["current","total"])}}}),g=F('<h1 id="pagination-\u5206\u9875\u5668" tabindex="-1">Pagination \u5206\u9875\u5668 <a class="header-anchor" href="#pagination-\u5206\u9875\u5668" aria-hidden="true">#</a></h1><p>\u7528\u5B83\u5904\u7406\u8FC7\u591A\u7684\u6570\u636E\u5427</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/pagination" target="_blank" rel="noreferrer">\u6E90\u4EE3\u7801</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/pagination.md" target="_blank" rel="noreferrer">\u6587\u6863\u7F16\u8F91</a></li></ul><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>\u7EC4\u4EF6\u4ECD\u5728\u6D4B\u8BD5\u9636\u6BB5\uFF0C\u9AD8\u9891\u66F4\u65B0\u4E2D\uFF0C\u90E8\u5206\u53C2\u6570\u6682\u4E0D\u7A33\u5B9A\uFF01</p></div><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p><code>v-model:current</code> \u5C5E\u6027\u6765\u7ED1\u5B9A\u5F53\u524D\u9875\u7801</p><p><code>total</code> \u5C5E\u6027\u914D\u7F6E\u603B\u9875\u6570</p>',7),b=t("div",{class:"language-html"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"html"),t("pre",{class:"shiki"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"template"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-pagination"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"v-model:current"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"current"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},":total"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"total"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"template"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"}),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"script"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"lang"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"ts"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"setup"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"import"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#A6ACCD"}},"ref"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#89DDFF"}},"}"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"from"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"vue"),t("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),t("span",{class:"line"}),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#A6ACCD"}}," current "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#82AAFF"}},"ref"),t("span",{style:{color:"#A6ACCD"}},"("),t("span",{style:{color:"#F78C6C"}},"1"),t("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#A6ACCD"}}," total "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#82AAFF"}},"ref"),t("span",{style:{color:"#A6ACCD"}},"("),t("span",{style:{color:"#F78C6C"}},"100"),t("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"script"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"})])])],-1),_=F('<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>``</td><td></td><td></td><td></td><td></td></tr></tbody></table></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>``</td><td></td></tr></tbody></table></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td>``</td><td></td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>',10),f={href:"https://github.com/Tyh2001",target:"_blank"},v={href:"https://github.com/OnlyShadows",target:"_blank"},B=JSON.parse('{"title":"Pagination \u5206\u9875\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/pagination.md","lastUpdated":1668778876000}'),m={name:"components/pagination.md"},k=p({...m,setup(d){return(l,n)=>{const r=o("vp-demo"),e=o("f-avatar");return i(),C("div",null,[g,a(r,{open:!1},{source:u(()=>[a(A)]),default:u(()=>[b]),_:1}),_,t("a",f,[a(e,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),t("a",v,[a(e,{round:"",src:"https://avatars.githubusercontent.com/u/54928569?v=4"})])])}}});export{B as __pageData,k as default};
