import{h as d,k as i,r as n,o as A,c as h,a as t,w as e,b as l,d as s,e as y}from"./app.abf7aabe.js";const g=y('<h1 id="image-preview-\u56FE\u7247\u9884\u89C8" tabindex="-1">Image Preview \u56FE\u7247\u9884\u89C8 <a class="header-anchor" href="#image-preview-\u56FE\u7247\u9884\u89C8" aria-hidden="true">#</a></h1><p>\u70B9\u51FB\u5F00\u542F\u5927\u56FE\u9884\u89C8</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/image-preview" target="_blank" rel="noreferrer">\u6E90\u4EE3\u7801</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/image-preview.md" target="_blank" rel="noreferrer">\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p><code>v-model:visible</code> \u7ED1\u5B9A\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u63A7\u5236\u9884\u89C8\u6846\u7684\u5C55\u793A\u72B6\u6001</p><p><code>img-list</code> \u9700\u8981\u4F20\u5165\u4E00\u4E2A\u56FE\u7247\u7684\u6570\u7EC4\u96C6\u5408</p>',6),m=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"primary"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"show1 = true"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"\u6253\u5F00"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image-preview"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model:visible"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"show1"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":img-list"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"listImg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," show1 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#FF9CAC"}},"false"),s("span",{style:{color:"#A6ACCD"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," listImg "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/1.jpg"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/2.jpg"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/3.jpg"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/4.jpg"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),E=s("h2",{id:"\u9690\u85CF\u64CD\u4F5C\u680F",tabindex:"-1"},[l("\u9690\u85CF\u64CD\u4F5C\u680F "),s("a",{class:"header-anchor",href:"#\u9690\u85CF\u64CD\u4F5C\u680F","aria-hidden":"true"},"#")],-1),v=s("p",null,[l("\u901A\u8FC7 "),s("code",null,"is-option"),l(" \u5C5E\u6027\u5C06\u64CD\u4F5C\u680F\u9690\u85CF")],-1),b=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"primary"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"show2 = true"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"\u6253\u5F00"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image-preview")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"v-model:visible"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"show2"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":is-option"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"false"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":img-list"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"listImg"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," show2 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#FF9CAC"}},"false"),s("span",{style:{color:"#A6ACCD"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," listImg "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/1.jpg"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/2.jpg"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/3.jpg"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/4.jpg"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),f=y(`<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:visible</code></td><td>\u662F\u5426\u5C55\u793A\u9884\u89C8\u6846</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>img-list</code></td><td>\u56FE\u7247\u96C6\u5408</td><td>string[]</td><td>\u2014\u2014</td><td>[]</td></tr><tr><td><code>modal-close</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u9884\u89C8\u7A97</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td><code>is-close-btn</code></td><td>\u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td><code>show-index</code></td><td>\u56FE\u7247\u9884\u89C8\u5C55\u793A\u7684\u9996\u5F20\u56FE\u7684\u7D22\u5F15\uFF0C\u4ECE 0 \u5F00\u59CB</td><td>number</td><td>\u2014\u2014</td><td>0</td></tr><tr><td><code>z-index</code></td><td>\u56FE\u7247\u9884\u89C8\u5C55\u793A\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index" target="_blank" rel="noreferrer">z-index</a></td><td>number</td><td>\u2014\u2014</td><td>999</td></tr><tr><td><code>is-option</code></td><td>\u662F\u5426\u5C55\u793A\u56FE\u7247\u9884\u89C8\u4E0B\u9762\u7684\u64CD\u4F5C\u680F</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td><code>round</code></td><td>\u9884\u89C8\u56FE\u7684\u5706\u89D2\uFF0C\u4F20\u5165\u4E00\u4E2A\u5355\u4F4D</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>close</code></td><td>\u5173\u95ED\u4E4B\u540E\u7684\u56DE\u8C03</td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ImagePreviewInstance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ImagePreviewPropsType</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ImagePreviewSwitchImageInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ImagePreviewOptionClickInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ImagePreviewSwitchImageOptionMapInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ImagePreviewOptionClickOptionMapInterface</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,8),_={href:"https://github.com/Tyh2001",target:"_blank"},x=JSON.parse('{"title":"Image Preview \u56FE\u7247\u9884\u89C8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u9690\u85CF\u64CD\u4F5C\u680F","slug":"\u9690\u85CF\u64CD\u4F5C\u680F","link":"#\u9690\u85CF\u64CD\u4F5C\u680F","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/image-preview.md","lastUpdated":1668778876000}'),w={name:"components/image-preview.md"},j=d({...w,setup(k){const p=i(!1),r=i(!1),c=["https://tianyuhao.cn/images/auto/1.jpg","https://tianyuhao.cn/images/auto/2.jpg","https://tianyuhao.cn/images/auto/3.jpg","https://tianyuhao.cn/images/auto/4.jpg"];return(B,o)=>{const u=n("f-button"),F=n("f-image-preview"),D=n("vp-demo"),C=n("f-avatar");return A(),h("div",null,[g,t(D,{open:!1},{source:e(()=>[t(u,{type:"primary",onClick:o[0]||(o[0]=a=>p.value=!0)},{default:e(()=>[l("\u6253\u5F00")]),_:1}),t(F,{visible:p.value,"onUpdate:visible":o[1]||(o[1]=a=>p.value=a),"img-list":c},null,8,["visible"])]),default:e(()=>[m]),_:1}),E,v,t(D,{open:!1},{source:e(()=>[t(u,{type:"primary",onClick:o[2]||(o[2]=a=>r.value=!0)},{default:e(()=>[l("\u6253\u5F00")]),_:1}),t(F,{visible:r.value,"onUpdate:visible":o[3]||(o[3]=a=>r.value=a),"is-option":!1,"img-list":c},null,8,["visible"])]),default:e(()=>[b]),_:1}),f,s("a",_,[t(C,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}});export{x as __pageData,j as default};
