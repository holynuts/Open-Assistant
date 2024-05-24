"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[9223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=r,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||a;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={},o="Plugins Technical Details",l={unversionedId:"plugins/details",id:"plugins/details",title:"Plugins Technical Details",description:"OpenAssistant incorporates a basic implementation of support for external",source:"@site/docs/plugins/details.md",sourceDirName:"plugins",slug:"/plugins/details",permalink:"/Open-Assistant/docs/plugins/details",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Architecture",id:"architecture",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Notes on reliability, performance, and limitations of the system",id:"notes-on-reliability-performance-and-limitations-of-the-system",level:3},{value:"Relevant files for the inference side of the plugin system",id:"relevant-files-for-the-inference-side-of-the-plugin-system",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plugins-technical-details"},"Plugins Technical Details"),(0,r.kt)("p",null,"OpenAssistant incorporates a basic implementation of support for external\naugmentation using AI plugins of the OpenAI spec. In the current state, this is\nmore of a proof-of-concept and should be considered experimental."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"There is now middleware between ",(0,r.kt)("inlineCode",{parentName:"p"},"work.py")," (in the worker) and the final prompt\nthat is passed to the inference model server for generation. That middleware is\nresponsible for checking if there is an enabled plugin in the UI. If so, it will\nadd curated pre-prompts for plugin usage and generate subsequent calls to the\nLLM (inner monologues) to generate the final externally ",(0,r.kt)("strong",{parentName:"p"},"augmented")," prompt,\nthat will be passed back to the inference model server, for final LLM generation\nand streaming of tokens to the frontend."),(0,r.kt)("h2",{id:"plugins"},"Plugins"),(0,r.kt)("p",null,"Plugins are in essence just wrappers around APIs to help LLM utilize an API more\nprecisely and reliably. They can be quite useful and powerful augmentation tools\nfor OpenAssistant. The two main parts of a plugin are the ",(0,r.kt)("inlineCode",{parentName:"p"},"ai-plugin.json")," file,\nwhich is just the main descriptor of a plugin, and the OpenAPI specification of\nthe plugin APIs."),(0,r.kt)("p",null,"Here is the OpenAI plugin\n",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/plugins/getting-started"},"specification")," that\nis currently ",(0,r.kt)("em",{parentName:"p"},"partially")," supported by OpenAssistant. Instructions for creating\nand hosting a plugin as well as a template for basic plugins can be found\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/someone13574/oasst-plugin-template"},"here"),"."),(0,r.kt)("p",null,"For now, only non-authentication-based and only (",(0,r.kt)("strong",{parentName:"p"},"GET")," request) plugins are\nsupported. Some of them are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.klarna.com/.well-known/ai-plugin.json"},"https://www.klarna.com/.well-known/ai-plugin.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.joinmilo.com/.well-known/ai-plugin.json"},"https://www.joinmilo.com/.well-known/ai-plugin.json"))),(0,r.kt)("p",null,"And quite a few of them can be found on the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.wellknown.ai/"},'plugin "store" at wellknown.ai')),(0,r.kt)("p",null,"Adding support for all other request types is tricky with the current approach.\nIt would be best to drop current prompts explaining in-depth the API to the LLM\nand instead just show it complete JSON/YAML content. But for that to work as\nwell as the current approach we would need larger context size and more capable\nmodels, which are still in development."),(0,r.kt)("p",null,"We provide a few official OA plugins, and any community member can develop a\nplugin."),(0,r.kt)("h3",{id:"notes-on-reliability-performance-and-limitations-of-the-system"},"Notes on reliability, performance, and limitations of the system"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Performance can vary a lot depending on the models and plugins used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Performance and consistency should improve as we get better and better models.\nOne of the biggest limitations at the moment is context size and instruction\nfollowing capabilities.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We combat model limitations with prompt tricks, truncations of plugin OpenAPI\ndescriptions and dynamically including/excluding parts of prompts in internal\nprocessing of subsequent generations of intermediate texts (inner monologues).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The current approach is somewhat hybrid and relies on the zero-shot\ncapabilities of a model."))),(0,r.kt)("h2",{id:"relevant-files-for-the-inference-side-of-the-plugin-system"},"Relevant files for the inference side of the plugin system"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"chat_chain.py"),(0,r.kt)("li",{parentName:"ul"},"chat",(0,r.kt)("em",{parentName:"li"},"chain_utils.py "),"(tweaking tools/plugin description string generation can\nhelp for some models)","_"),(0,r.kt)("li",{parentName:"ul"},"chat",(0,r.kt)("em",{parentName:"li"},"chain_prompts.py "),"(tweaking prompts can help also)","_")))}m.isMDXComponent=!0}}]);