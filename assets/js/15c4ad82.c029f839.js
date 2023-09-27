"use strict";(self.webpackChunkraastin_api=self.webpackChunkraastin_api||[]).push([[994],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,u(u({ref:e},s),{},{components:n})):a.createElement(k,u({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,u=new Array(l);u[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:r,u[1]=i;for(var p=2;p<l;p++)u[p]=n[p];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(t,e,n)=>{n.d(e,{Z:()=>u});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function u(t){let{children:e,hidden:n,className:u}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,u),hidden:n},e)}},4866:(t,e,n)=>{n.d(e,{Z:()=>h});var a=n(7462),r=n(7294),l=n(6010),u=n(2466),i=n(6550),o=n(1980),p=n(7392),s=n(12);function d(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:a,default:r}}=t;return{value:e,label:n,attributes:a,default:r}}))}function m(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??d(n);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function c(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function k(t){let{queryString:e=!1,groupId:n}=t;const a=(0,i.k6)(),l=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(a.location.search);e.set(l,t),a.replace({...a.location,search:e.toString()})}),[l,a])]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,l=m(t),[u,i]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((t=>t.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[o,p]=k({queryString:n,groupId:a}),[d,g]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((t=>{n&&l.set(t)}),[n,l])]}({groupId:a}),b=(()=>{const t=o??d;return c({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:u,selectValue:(0,r.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),p(t),g(t)}),[p,g,l]),tabValues:l}}var b=n(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(t){let{className:e,block:n,selectedValue:i,selectValue:o,tabValues:p}=t;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),m=t=>{const e=t.currentTarget,n=s.indexOf(e),a=p[n].value;a!==i&&(d(e),o(a))},c=t=>{let e=null;switch(t.key){case"Enter":m(t);break;case"ArrowRight":{const n=s.indexOf(t.currentTarget)+1;e=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(t.currentTarget)-1;e=s[n]??s[s.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},e)},p.map((t=>{let{value:e,label:n,attributes:u}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:t=>s.push(t),onKeyDown:c,onClick:m},u,{className:(0,l.Z)("tabs__item",N.tabItem,u?.className,{"tabs__item--active":i===e})}),n??e)})))}function y(t){let{lazy:e,children:n,selectedValue:a}=t;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=l.find((t=>t.props.value===a));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function v(t){const e=g(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(f,(0,a.Z)({},t,e)),r.createElement(y,(0,a.Z)({},t,e)))}function h(t){const e=(0,b.Z)();return r.createElement(v,(0,a.Z)({key:String(e)},t))}},3825:(t,e,n)=>{n(7294)},4178:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),u=n(5162);n(3825);const i={sidebar_position:3},o="\u0644\u06cc\u0633\u062a \u0633\u0641\u0627\u0631\u0634 \u0647\u0627",p={unversionedId:"trading/orders_list",id:"trading/orders_list",title:"\u0644\u06cc\u0633\u062a \u0633\u0641\u0627\u0631\u0634 \u0647\u0627",description:"HTTP Request https://api.raastin.com",source:"@site/docs/trading/orders_list.mdx",sourceDirName:"trading",slug:"/trading/orders_list",permalink:"/docs/trading/orders_list",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/trading/orders_list.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u062b\u0628\u062a \u0633\u0641\u0627\u0631\u0634 \u062c\u062f\u06cc\u062f",permalink:"/docs/trading/place_order"},next:{title:"\u0644\u063a\u0648 \u0633\u0641\u0627\u0631\u0634",permalink:"/docs/trading/cancel_order"}},s={},d=[],m={toc:d},c="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0644\u06cc\u0633\u062a-\u0633\u0641\u0627\u0631\u0634-\u0647\u0627"},"\u0644\u06cc\u0633\u062a \u0633\u0641\u0627\u0631\u0634 \u0647\u0627"),(0,r.kt)("div",{style:{direction:"ltr"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP Request https://api.raastin.com\n"))),(0,r.kt)("admonition",{title:"\u062a\u0648\u062c\u0647",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u0628\u0631\u0627\u06cc \u062b\u0628\u062a \u0633\u0641\u0627\u0631\u0634 \u0645\u0639\u0627\u0645\u0644\u0647 \u062f\u0631 \u0628\u0627\u0632\u0627\u0631 \u0631\u0627\u0633\u062a\u06cc\u0646 \u0627\u0632 \u0627\u06cc\u0646 api \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f. \u062a\u0648\u062c\u0647 \u0628\u0647 \u0627\u06cc\u0646 \u0646\u06a9\u062a\u0647 \u0636\u0631\u0648\u0631\u06cc \u0627\u0633\u062a \u06a9\u0647 \u062b\u0628\u062a \u0633\u0641\u0627\u0631\u0634 \u0627\u0644\u0632\u0627\u0645\u0627 \u0628\u0647 \u0645\u0639\u0646\u06cc \u0627\u0646\u062c\u0627\u0645 \u0645\u0639\u0627\u0645\u0644\u0647 \u0646\u06cc\u0633\u062a. \u0628\u0627 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0645\u0634\u0627\u0647\u062f\u0647 \u0648\u0636\u0639\u06cc\u062a \u0633\u0641\u0627\u0631\u0634 \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0648\u0636\u0639\u06cc\u062a \u0633\u0641\u0627\u0631\u0634 \u062e\u0648\u062f \u0645\u0637\u0644\u0639 \u0634\u0648\u06cc\u062f. \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 api \u0644\u0627\u0632\u0645 \u0627\u0633\u062a \u062a\u0627 \u062f\u0631 \u0642\u0633\u0645\u062a header \u062a\u0648\u06a9\u0646 \u062e\u0648\u062f \u0631\u0627 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u06cc\u062f.")),(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v1/market/orders\n"))),(0,r.kt)("admonition",{title:"\u062a\u0648\u0636\u06cc\u062d",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0644\u06cc\u0633\u062a \u0647\u0645\u0647 \u0633\u0641\u0627\u0631\u0634 \u0647\u0627 \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0627\u06cc\u0646 api \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.")),(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v1/market/orders/<id:str>\n"))),(0,r.kt)("admonition",{title:"\u062a\u0648\u0636\u06cc\u062d",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06cc\u06a9 \u0633\u0641\u0627\u0631\u0634 \u06a9\u0627\u0641\u06cc\u0633\u062a \u062f\u0631 \u0627\u0646\u062a\u0647\u0627\u06cc \u0627\u062f\u0631\u0633 api \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0644\u06cc\u0633\u062a \u0633\u0641\u0627\u0631\u0634\u0627\u062a id \u0633\u0641\u0627\u0631\u0634 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u062f."),(0,r.kt)("p",{parentName:"admonition"},"id \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a url param \u0628\u0641\u0631\u0633\u062a\u06cc\u062f.")),(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v1/market/orders/?symbol=&status=\n"))),(0,r.kt)("admonition",{title:"\u062a\u0648\u0636\u06cc\u062d",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u062f\u0631 \u0627\u06cc\u0646 api \u0627\u0645\u06a9\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631 \u06a9\u0631\u062f\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0648\u0636\u0639\u06cc\u062a \u0633\u0641\u0627\u0631\u0634 \u0648 \u0628\u0627\u0632\u0627\u0631 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f."),(0,r.kt)("p",{parentName:"admonition"},"\u0627\u0637\u0644\u0627\u0639\u0627\u062a  \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a query param \u0628\u0641\u0631\u0633\u062a\u06cc\u062f.")),(0,r.kt)(l.Z,{defaultValue:"json",values:[{label:"Table",value:"table"},{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"table",mdxType:"TabItem"},(0,r.kt)(l.Z,{defaultValue:"request",values:[{label:"Request",value:"request"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"request",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0646\u0627\u0645 \u067e\u0627\u0631\u0627\u0645\u062a\u0631"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0646\u0648\u0639"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0627\u062c\u0628\u0627\u0631\u06cc"),(0,r.kt)("th",{parentName:"tr",align:null},"\u062a\u0648\u0636\u06cc\u062d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0646\u0645\u0648\u0646\u0647"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0627\u0631\u0632\u062f\u06cc\u062c\u06cc\u062a\u0627\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0648\u0636\u0639\u06cc\u062a \u0633\u0641\u0627\u0631\u0634"),(0,r.kt)("td",{parentName:"tr",align:null},"null"))))),(0,r.kt)(u.Z,{value:"response",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0646\u0627\u0645 \u067e\u0627\u0631\u0627\u0645\u062a\u0631"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0646\u0648\u0639"),(0,r.kt)("th",{parentName:"tr",align:null},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0646\u0645\u0648\u0646\u0647"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"next"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"previous"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"results"),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null")))),(0,r.kt)("p",null,"results:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0646\u0627\u0645 \u067e\u0627\u0631\u0627\u0645\u062a\u0631"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0646\u0648\u0639"),(0,r.kt)("th",{parentName:"tr",align:null},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0646\u0645\u0648\u0646\u0647"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"620881")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},'"2022-04-27T17:03:57.002570+04:30"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},'"BTCIRT"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},'"100.00000"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filled_amount"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},'"0.00000"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"price"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},'"100000"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filled_price"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"side"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"buy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fill_type"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},'"limit"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},'"new"'))))))),(0,r.kt)(u.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)(l.Z,{defaultValue:"request",values:[{label:"Request",value:"request"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "symbol": "",\n    "status": "",\n}\n'))),(0,r.kt)(u.Z,{value:"response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "count": 1,\n        "next": null,\n        "previous": null,\n        "results": [\n            {\n                "id": 620597,\n                "created": "2022-04-27T16:06:29.953660+04:30",\n                "symbol": "BTCIRT",\n                "amount": "100.00000",\n                "filled_amount": "0.00000",\n                "price": "100000",\n                "filled_price": null,\n                "side": "buy",\n                "fill_type": "limit",\n                "status": "new"\n            }\n        ]\n    },\n]\n')))))))}k.isMDXComponent=!0}}]);