"use strict";(self.webpackChunkraastin_api=self.webpackChunkraastin_api||[]).push([[540],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(b,u(u({ref:t},c),{},{components:a})):n.createElement(b,u({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,u=new Array(l);u[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:r,u[1]=o;for(var s=2;s<l;s++)u[s]=a[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:a,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,u),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),r=a(7294),l=a(6010),u=a(2466),o=a(6550),i=a(1980),s=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[u,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,s]=b({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=i??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var k=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==o&&(p(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:u}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},u,{className:(0,l.Z)("tabs__item",g.tabItem,u?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function h(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},5210:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),u=a(5162);const o={sidebar_position:2},i="\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06cc\u06a9 \u0628\u0627\u0632\u0627\u0631 \u062e\u0627\u0635",s={unversionedId:"markets_info/specific_market_information",id:"markets_info/specific_market_information",title:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06cc\u06a9 \u0628\u0627\u0632\u0627\u0631 \u062e\u0627\u0635",description:"HTTP Request https://api.raastin.com",source:"@site/docs/markets_info/specific_market_information.mdx",sourceDirName:"markets_info",slug:"/markets_info/specific_market_information",permalink:"/docs/markets_info/specific_market_information",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/markets_info/specific_market_information.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u0627\u0632\u0627\u0631\u0647\u0627\u06cc \u0631\u0627\u0633\u062a\u06cc\u0646",permalink:"/docs/markets_info/market_information"},next:{title:"\u0644\u06cc\u0633\u062a \u0633\u0641\u0627\u0631\u0634\u200c\u0647\u0627:\u0627\u0631\u062f\u0631 \u0628\u0648\u06a9",permalink:"/docs/markets_info/order_book_information"}},c={},p=[],m={toc:p},d="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a-\u06cc\u06a9-\u0628\u0627\u0632\u0627\u0631-\u062e\u0627\u0635"},"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06cc\u06a9 \u0628\u0627\u0632\u0627\u0631 \u062e\u0627\u0635"),(0,r.kt)("div",{style:{direction:"ltr"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP Request https://api.raastin.com\n"))),(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v1/market/symbols/symbols/<str:name>/\n"))),(0,r.kt)("admonition",{title:"\u062a\u0648\u062c\u0647",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u0646\u0627\u0645 \u0627\u0631\u0632\u062f\u06cc\u062c\u06cc\u062a\u0627\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a url param \u0628\u0641\u0631\u0633\u062a\u06cc\u062f.")),(0,r.kt)(l.Z,{defaultValue:"json",values:[{label:"Table",value:"table"},{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"table",mdxType:"TabItem"},(0,r.kt)(l.Z,{defaultValue:"request",values:[{label:"Request",value:"request"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"request",mdxType:"TabItem"}),(0,r.kt)(u.Z,{value:"response",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0646\u0627\u0645 \u067e\u0627\u0631\u0627\u0645\u062a\u0631"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0646\u0648\u0639"),(0,r.kt)("th",{parentName:"tr",align:null},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0646\u0645\u0648\u0646\u0647"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0646\u0627\u0645 \u0628\u0627\u0632\u0627\u0631"),(0,r.kt)("td",{parentName:"tr",align:null},'"USDTIRT"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asset"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0627\u0631\u0632 \u0645\u0639\u0627\u0645\u0644\u0647 \u0634\u062f\u0647"),(0,r.kt)("td",{parentName:"tr",align:null},'"USDT"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"base_asset"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0627\u0631\u0632 \u067e\u0627\u06cc\u0647"),(0,r.kt)("td",{parentName:"tr",align:null},'"IRT"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0641\u0639\u0627\u0644"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"price"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0642\u06cc\u0645\u062a"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0642\u06cc\u0645\u062a \u062f\u0631 \u06f2\u06f4 \u0633\u0627\u0639\u062a"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change_percent"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u062f\u0631\u0635\u062f \u0642\u06cc\u0645\u062a \u062f\u0631 \u06f2\u06f4 \u0633\u0627\u0639\u062a"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0628\u06cc\u0634\u06cc\u0646\u0647 \u0642\u06cc\u0645\u062a \u062f\u0631 \u06f2\u06f4 \u0633\u0627\u0639\u062a"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u06a9\u0645\u06cc\u0646\u0647 \u0642\u06cc\u0645\u062a \u062f\u0631 \u06f2\u06f4 \u0633\u0627\u0639\u062a"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"volume"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u062d\u062c\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062a \u062f\u0631 \u06f2\u06f4 \u0633\u0627\u0639\u062a"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"base_volume"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u062d\u062c\u0645"),(0,r.kt)("td",{parentName:"tr",align:null},"null"))))))),(0,r.kt)(u.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)(l.Z,{defaultValue:"request",values:[{label:"Request",value:"request"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"request",mdxType:"TabItem"}),(0,r.kt)(u.Z,{value:"response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "USDTIRT",\n    "asset": "USDT",\n    "base_asset": "IRT",\n    "enable": true,\n    "price": null,\n    "change": null,\n    "change_percent": null,\n    "high": null,\n    "low": null,\n    "volume": null,\n    "base_volume": null\n}\n\n')))))))}b.isMDXComponent=!0}}]);