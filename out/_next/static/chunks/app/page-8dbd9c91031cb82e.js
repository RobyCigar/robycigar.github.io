(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4549:function(e,t,r){var n={"./en/translation.json":[3829,829],"./id/translation.json":[3180,180],"./jp/translation.json":[3268,268]};function i(e){if(!r.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],i=t[0];return r.e(t[1]).then(function(){return r.t(i,19)})}i.keys=function(){return Object.keys(n)},i.id=4549,e.exports=i},3356:function(e,t,r){Promise.resolve().then(r.bind(r,9962))},2890:function(e,t,r){"use strict";r.d(t,{$:function(){return i}});var n=r(6006);let i=function(){var e;let{reload:t,setReload:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=null!==(e=window.localStorage.getItem("lang"))&&void 0!==e?e:"en",[d,o]=(0,n.useState)(a),[l,s]=(0,n.useState)({});(0,n.useEffect)(()=>{u()},[]);let u=async()=>{let e=await r(4549)("./".concat(d,"/translation.json"));s(e),t&&i(e)};return{t:l,loadTranslation:u,setLanguage:o,language:d}}},1849:function(e,t,r){"use strict";var n=r(9268);r(6006);var i=r(4646);let a={md:"text-xs font-medium",lg:"text-sm font-medium"},d={default:"border border-blue-400",dark:"border border-gray-500",red:"border border-red-400",green:"border border-green-400",yellow:"border border-yellow-300",indigo:"border border-indigo-400",purple:"border border-purple-400",pink:"border border-pink-400"},o={default:"bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400",dark:"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400",red:"bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400",green:"bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400",yellow:"bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300",indigo:"bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400",purple:"bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400",pink:"bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400"};t.Z=function(e){let{children:t,variant:r,style:l,color:s="default",border:u=!1,rounded:g=!0,size:c="md",...x}=e,p=["border border-blue-200 inline-flex justify-between items-center py-1 px-1 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 font-medium px-2.5 py-0.5",l,o[s],u?d[s]:void 0,a[c],g?"rounded":void 0];return(0,n.jsx)(i.E.div,{variants:r,initial:"hidden",animate:"visible",className:p.join(" "),role:"alert",...x,children:t})}},1638:function(e,t,r){"use strict";var n=r(9268);r(6006);var i=r(4646);t.Z=function(e){let{variants:t,children:r}=e;return(0,n.jsx)(i.E.div,{variants:t,initial:"hidden",animate:"visible",className:"mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400",children:r})}},9962:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(9268),i=r(6006),a=r(4646),d=function(e){let{variants:t,children:r,...i}=e;return(0,n.jsx)(a.E.h1,{initial:"hidden",animate:"visible",variants:null!=t?t:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{delay:.1,duration:1,type:"spring",stiffness:120,damping:14}}},className:"mb-1 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ".concat("bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient"," ").concat(i.className," "),children:r})},o=r(1638),l=r(1849),s=r(2890),u=r(6008);let g={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{delay:0,duration:1,type:"spring",stiffness:120,damping:14}}},c={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{delay:.25,duration:1,type:"spring",stiffness:120,damping:16}}};var x=function(){let[e,t]=(0,i.useState)(""),r=(0,u.useRouter)(),{t:a}=(0,s.$)({reload:e,setReload:t});return(0,n.jsx)("section",{className:"bg-white absolute w-screen h-screen flex items-center dark:bg-gray-900",children:(0,n.jsxs)("div",{className:"py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12",children:[(0,n.jsxs)(l.Z,{style:"cursor-pointer mb-7",onClick:()=>{r.push("/portfolio")},variant:g,children:[(0,n.jsx)("span",{className:"text-sm font-medium bg-primary-600 rounded-full dark:text-white text-gray-800 px-4 py-1.5 mr-3",children:a.see_projects})," ",(0,n.jsx)("svg",{className:"ml-2 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]}),(0,n.jsx)(d,{children:a.author}),(0,n.jsx)("div",{className:"sm:px-16 lg:px-48",children:(0,n.jsx)(o.Z,{variants:c,children:a.description})})]})})}},6008:function(e,t,r){e.exports=r(794)}},function(e){e.O(0,[63,253,769,744],function(){return e(e.s=3356)}),_N_E=e.O()}]);