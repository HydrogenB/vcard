(window.webpackJsonp=window.webpackJsonp||[]).push([[44,19,20],{185:function(t,e,r){"use strict";r.r(e);var n={},a=(r(191),r(47)),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"h-30 mt-32 mx-4 flex flex-col"},[n("div",{staticClass:"flex flex-col justify-center items-center"},[t._m(0),t._v(" "),n("a",{attrs:{href:"/"}},[n("div",{staticClass:"ftr logo w-12",staticStyle:{height:"140px"},domProps:{innerHTML:t._s(r(190))}})]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"mt-1 mb-8 text-center text-xs text-gray-400",staticStyle:{"font-size":"16px","font-weight":"800"}},[r("a",{staticClass:"\n          underline\n          text-green-500\n          font-extrabold\n          hover:text-green-600\n          focus:text-green-600\n          transition-colors\n          duration-200\n          nuxt-link-exact-active nuxt-link-active\n        ",staticStyle:{"font-size":"16px","font-weight":"800"},attrs:{href:"/","aria-current":"page",rel:"noopener noreferrer"}},[t._v("\n        Home\n      ")]),t._v("\n      |\n      "),r("a",{staticClass:"\n          underline\n          text-green-500\n          font-extrabold\n          hover:text-green-600\n          focus:text-green-600\n          transition-colors\n          duration-200\n        ",staticStyle:{"font-size":"16px","font-weight":"800"},attrs:{href:"/hosting-guide",rel:"noopener noreferrer"}},[t._v("\n        Self-Hosting Guide\n      ")]),t._v("\n      |\n      "),t._v(" "),r("a",{staticClass:"\n          underline\n          text-green-500\n          font-extrabold\n          hover:text-green-600\n          focus:text-green-600\n          transition-colors\n          duration-200\n        ",staticStyle:{"font-size":"16px","font-weight":"800"},attrs:{href:"/training",rel:"noopener noreferrer"}},[t._v("\n        Training\n      ")]),t._v("\n      |\n      "),r("a",{staticClass:"\n          underline\n          text-green-500\n          font-extrabold\n          hover:text-green-600\n          focus:text-green-600\n          transition-colors\n          duration-200\n        ",staticStyle:{"font-size":"16px","font-weight":"800"},attrs:{href:"/customer-support",rel:"noopener noreferrer"}},[t._v("Support")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticStyle:{color:"rgb(255, 255, 255)"}},[t._v("\n      Copyright © 2024\n      "),r("a",{staticStyle:{color:"rgb(255, 255, 255)"},attrs:{href:"https://getbizviz.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Smart vCard")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"mt-1 mb-8 text-center text-xs text-gray-400",staticStyle:{color:"rgb(211, 211, 211)"}},[r("a",{staticClass:"\n          underline\n          text-green-500\n          font-extrabold\n          hover:text-green-600\n          focus:text-green-600\n          transition-colors\n          duration-200\n        ",staticStyle:{color:"rgb(255, 255, 255)"},attrs:{href:"/privacy-policy",rel:"noopener noreferrer"}},[t._v("Privacy Policy\n      ")]),t._v("\n      |\n      "),r("a",{staticClass:"\n          underline\n          text-green-500\n          font-extrabold\n          hover:text-green-600\n          focus:text-green-600\n          transition-colors\n          duration-200\n        ",staticStyle:{color:"white"},attrs:{href:"/terms-of-service",rel:"noopener noreferrer"}},[t._v("Terms of Service")]),t._v("\n      |\n      "),r("a",{staticClass:"\n          underline\n          text-green-500\n          font-extrabold\n          hover:text-green-600\n          focus:text-green-600\n          transition-colors\n          duration-200\n          nuxt-link-exact-active nuxt-link-active\n        ",staticStyle:{color:"white"},attrs:{href:"/cookie-policy",rel:"noopener noreferrer"}},[t._v("Cookie Policy")]),t._v("\n      |\n      "),r("a",{staticClass:"\n          underline\n          text-green-500\n          font-extrabold\n          hover:text-green-600\n          focus:text-green-600\n          transition-colors\n          duration-200\n        ",staticStyle:{color:"white"},attrs:{href:"/acceptable-use-policy",rel:"noopener noreferrer"}},[t._v("Acceptable Use Policy")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"mt-1 mb-8 text-center text-xs text-gray-400"},[r("a",{staticClass:"underline text-emerald-600 font-extrabold hover:text-emerald-500 focus:text-emerald-500 transition-colors duration-200",attrs:{href:"https://github.com/ziageek/smartvcard",target:"_blank",rel:"noopener noreferrer"}},[t._v("View Source")]),t._v("\n      | AGPLv3 License\n    ")])}],!1,null,null,null);e.default=i.exports;installComponents(i,{Footer:r(185).default})},186:function(t,e,r){var n=r(192);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(49).default)("700a9420",n,!0,{sourceMap:!1})},187:function(t,e,r){"use strict";r.r(e);r(29);var n=r(3),a=r(188),i=r(196),s=r.n(i);window.Swal=s.a;var o={data:function(){return{isLoading:!0,isLoggedIn:!1,licenseKey:""}},methods:{loginOrBuy:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===localStorage.getItem("license_key")){e.next=8;break}return r=localStorage.getItem("license_key"),e.next=4,Object(a.logOut)(r);case 4:200===e.sent.status&&(localStorage.removeItem("license_key"),t.isLoggedIn=!1,window.location.reload()),e.next=34;break;case 8:if(""!==t.licenseKey&&null!==t.licenseKey){e.next=13;break}t.$refs.myPurchaseBtn.click(),e.next=34;break;case 13:return e.next=15,Object(a.checkLicense)(t.licenseKey,"login");case 15:if(200===(n=e.sent).status){e.next=25;break}if(t.licenseKey="",Swal.fire({title:"Error!",html:"".concat(null==n?void 0:n.data.message)||"Something bad happened, try again later",icon:"error",confirmButtonText:"Ok"}),404===n.status&&setTimeout((function(){t.$refs.myPurchaseBtn.click()}),2e3),400!==n.status){e.next=23;break}return Swal.fire({title:"Error!",text:"".concat(null==n?void 0:n.data.message)||"Something bad happened, try again later",icon:"error",confirmButtonText:"Ok"}),e.abrupt("return");case 23:e.next=31;break;case 25:if(200!==n.status){e.next=31;break}return localStorage.setItem("license_key",n.data.license_key),t.licenseKey="",t.isLoggedIn=!0,Swal.fire({title:"Congratulations!",text:"You have successfully activated your Agency License!",icon:"success",confirmButtonText:"Ok"}),e.abrupt("return");case 31:return e.abrupt("return");case 34:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===localStorage.getItem("license_key")){e.next=21;break}return r=localStorage.getItem("license_key"),e.next=5,Object(a.checkLicense)(r,"ignore");case 5:if(200===(n=e.sent).status){e.next=14;break}t.isLoading=!1,localStorage.removeItem("license_key"),Swal.fire({title:"Error!",html:"".concat(null==n?void 0:n.data.message)||"Something bad happened, try again later",icon:"error",confirmButtonText:"Ok"}),404===n.status&&t.$refs.myPurchaseBtn.click(),400===n.status&&localStorage.removeItem("license_key"),e.next=18;break;case 14:if(200!==n.status){e.next=18;break}return t.isLoading=!1,t.isLoggedIn=!0,e.abrupt("return");case 18:t.isLoading=!1,e.next=22;break;case 21:t.isLoading=!1;case 22:case"end":return e.stop()}}),e)})))()}},c=r(47),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return!1===t.isLoading?r("div",{staticClass:"stepC mt-1"},[!1===t.isLoggedIn?r("input",{directives:[{name:"model",rawName:"v-model",value:t.licenseKey,expression:"licenseKey"}],staticClass:"mt-2 px-2 h-12 bg-black rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600",attrs:{placeholder:"Enter agency license",id:"fullname",spellcheck:"false",type:"text"},domProps:{value:t.licenseKey},on:{input:function(e){e.target.composing||(t.licenseKey=e.target.value)}}}):t._e(),t._v(" "),r("script",{attrs:{src:"https://cdn.jsdelivr.net/npm/sweetalert2@9"}}),t._v(" "),r("button",{staticClass:"font-extrabold tracking-wide leading-none flex-shrink-0 p-3 border-2 text-white border-gray-700 rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200",attrs:{href:"/customer-support"},on:{click:t.loginOrBuy}},[t._v("\n    "+t._s(!1===t.isLoggedIn?""!==t.licenseKey?"Activate":"Buy agency":"Logout")+"\n  ")]),t._v(" "),r("script",{attrs:{async:"",src:"//tinder.thrivecart.com/embed/v1/thrivecart.js"}}),t._v(" "),r("button",{ref:"myPurchaseBtn",staticClass:"thrivecart-button thrivecart-button-styled thrivecart-button_style-rounded thrivecart-button-custom ",staticStyle:{"background-color":"#46cea3",display:"none"},attrs:{"data-thrivecart-account":"dfy","data-thrivecart-tpl":"v2","data-thrivecart-product":"82"}},[t._v("\n    Buy Agency\n  ")])]):t._e()}),[],!1,null,null,null);e.default=l.exports},188:function(t,e){},190:function(t,e){var r='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 792 612" xml:space="preserve"><style>#st0{fill:#1ab680}</style><path id="st0" d="M318.5 247.9c-11.2-21.4-39.2-29.5-60.2-15.1-15.1 10.4-20.4 25.5-17.5 43.1 1 6.1-.7 10.9-3.7 15.6-9.8 15.4-22.7 28.2-37.2 39.4-3.1 2.4-7 4.9-10.4 4.8-8.5-.3-16.3-2.7-21-11.2-6.3-11.4-13.4-22.4-19.5-33.9-8.7-16.3-15.6-33.3-20.5-51.1-1.4-5.1-1.5-10.9-1.2-16.3.5-6.6 3.4-14.4 3.2-22.6-.2-8.1-1.7-12.7-4.6-20-8.1-20.9-23.4-34.1-44.8-39.4-18.8-4.8-36.8-1-52.8 10.7-14.4 10.5-23 25.1-25.6 42.6-2.4 16.5 1.2 32.1 10.9 45.7 8.3 11.7 19.2 19.9 33.1 24.3 5.3 1.7 10.4 4.4 14.8 7.6 11.9 8.5 21.7 19.5 31.1 30.7 11.7 14.3 22.7 29.2 29.9 46.3 2.2 5.4 4.8 11 2.4 17.3-5.3 13.9-4.9 27.8 1.5 41.2 11.4 23.4 37.3 35.1 62.5 27 25.8-8.1 40.9-35.1 34.8-60.6-.7-2.9-.3-6.8 1.2-9.3 4.9-9 10.2-17.8 16-26.1 7.1-10.2 14.6-20 24.8-27.5 3.1-2.2 6.3-3.2 10-2.4 9 1.9 17.6 0 25.8-4.2 19.9-10.6 28.1-35.7 17-56.6z"/><path id="st0" d="M221.1 169c9.2 0 16.8 7.6 16.8 16.8v58c2.4-4.2 5.3-8.1 9-11.7V170c0-10.5-8.7-19.2-19.2-19.2H115.6c5.4 5.1 10.2 11.2 13.9 18.3h91.6v-.1zm-68.5-11h28.7c1 0 1.7.8 1.7 1.7 0 1-.8 1.7-1.7 1.7h-28.7c-1 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7zm85.3 270.3c0 9.2-7.6 16.8-16.8 16.8H112.7c-9.2 0-16.8-7.6-16.8-16.8V319.6c-3.1-4.1-6.1-7.8-9-11.5v145.6c0 10.5 8.7 19.2 19.2 19.2h121.5c10.5 0 19.2-8.7 19.2-19.2V343.5c-2.9 4.2-5.9 8.8-9 14.3v70.6h.1zM175 464.7h-16.1c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6H175c3.1 0 5.6 2.5 5.6 5.6s-2.6 5.6-5.6 5.6z"/><path d="M360.8 287c-1.9-1.4-3.2-3.6-3.2-6.3 0-4.2 3.4-7.5 7.6-7.5 2.2 0 3.7.7 4.8 1.5 7.6 6.1 16 9.5 26 9.5s16.5-4.8 16.5-11.7v-.3c0-6.6-3.7-10.2-20.9-14.1-19.7-4.8-30.9-10.5-30.9-27.7v-.3c0-16 13.2-26.8 31.6-26.8 11.7 0 21 3.1 29.4 8.7 1.9 1 3.6 3.4 3.6 6.4 0 4.2-3.4 7.5-7.6 7.5-1.5 0-2.9-.3-4.2-1.2-7.1-4.6-14.1-7-21.4-7-9.5 0-15.1 4.9-15.1 11v.3c0 7.1 4.2 10.4 22.1 14.6 19.5 4.8 29.7 11.7 29.7 27.2v.3c0 17.3-13.6 27.7-33.1 27.7-12.7-.1-24.5-4.2-34.9-11.8zm76.5-74.7c0-4.6 3.6-8.1 8.1-8.1h1.7c3.6 0 5.9 1.9 7.5 4.4l28 44 28.2-44.1c1.7-2.7 4.1-4.2 7.5-4.2h1.7c4.6 0 8.1 3.7 8.1 8.1V290c0 4.6-3.6 8.1-8.1 8.1-4.4 0-8.1-3.7-8.1-8.1v-55.7l-22.6 33.9c-1.7 2.7-3.9 4.2-7 4.2-2.9 0-5.1-1.5-6.8-4.2L453 234.4v55.5c0 4.6-3.6 8-8.1 8-4.6 0-8-3.4-8-8v-77.6h.4zm99 74.5l34.5-76.7c1.9-4.1 5.1-6.6 9.8-6.6h.8c4.6 0 7.8 2.5 9.7 6.6l34.5 76.7c.7 1.2.8 2.4.8 3.4 0 4.4-3.4 7.8-7.6 7.8-3.9 0-6.4-2.2-8-5.8l-7.5-17.3h-45.1l-7.8 17.8c-1.4 3.4-4.1 5.1-7.5 5.1-4.2 0-7.5-3.4-7.5-7.5-.1-1.1.2-2.3.9-3.5zm60.6-26.3L580.6 223l-16.3 37.5h32.6zm36.5-47.7c0-4.6 3.6-8.1 8.1-8.1h33.1c11.7 0 20.7 3.4 26.8 9.3 4.9 5.1 7.6 11.9 7.6 20v.3c0 14.8-8.7 23.8-21 27.7l17.8 22.4c1.5 2 2.7 3.7 2.7 6.3 0 4.6-3.9 7.5-7.8 7.5-3.7 0-6.1-1.7-8-4.2l-22.6-28.9h-20.5V290c0 4.6-3.6 8.1-8.1 8.1-4.6 0-8.1-3.6-8.1-8.1v-77.2zm40 37.9c11.7 0 19-6.1 19-15.4v-.3c0-10-7.1-15.3-19.2-15.3h-23.8v31.1l24-.1zm70.1-30.9h-22.6c-4.2 0-7.5-3.4-7.5-7.5s3.2-7.5 7.5-7.5h61.6c4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5H760v70.1c0 4.6-3.7 8.1-8.1 8.1-4.6 0-8.1-3.6-8.1-8.1v-70.1h-.3zm-353 188.9h-.8c-4.4 0-7.3-2.7-9.2-7l-23.3-53.3c-.3-1.2-.8-2.5-.8-3.9 0-3.9 3.6-7.6 8-7.6s6.6 2.5 8 5.8l18 46.3 18.3-46.7c1.2-2.7 3.4-5.6 7.5-5.6 4.4 0 7.8 3.4 7.8 7.6 0 1.5-.5 3.1-.8 3.9l-23.3 53.5c-2.3 4.1-5.2 7-9.4 7zm38.2-47.4v-.3c0-26.3 19.7-47.9 47.9-47.9 14.3 0 23.8 4.2 31.7 10.5 1.7 1.4 3.2 3.6 3.2 6.4 0 4.6-3.6 8-8.1 8-2.2 0-3.9-.8-4.9-1.5-6.3-5.1-13.2-8.3-22.1-8.3-17.6 0-30.5 14.6-30.5 32.8v.3c0 18.2 12.9 32.8 30.5 32.8 9.8 0 16.5-3.2 23.3-8.8 1.2-1 2.9-1.9 4.9-1.9 4.1 0 7.6 3.4 7.6 7.5 0 2.5-1.2 4.6-2.7 5.8-8.7 7.6-18.7 12.4-33.6 12.4-27-.3-47.2-21.3-47.2-47.8zm83.3 35.5l34.5-76.7c1.9-4.1 5.1-6.6 9.8-6.6h.8c4.6 0 7.8 2.5 9.7 6.6l34.5 76.7c.7 1.2.8 2.4.8 3.4 0 4.4-3.4 7.8-7.6 7.8-3.9 0-6.4-2.2-8-5.8l-7.5-17.3h-45l-7.8 17.8c-1.4 3.4-4.1 5.1-7.5 5.1-4.2 0-7.5-3.2-7.5-7.5-.4-1.1.1-2.3.8-3.5zm60.6-26.3L556.3 333 540 370.5h32.6zm33.8-47.7c0-4.6 3.6-8.1 8.1-8.1h33.1c11.7 0 20.7 3.4 26.8 9.3 4.9 5.1 7.6 11.9 7.6 20v.3c0 14.8-8.7 23.8-21 27.7l17.8 22.4c1.5 2 2.7 3.7 2.7 6.3 0 4.6-3.9 7.5-7.8 7.5-3.7 0-6.1-1.7-8-4.2l-22.6-28.9h-20.5V400c0 4.6-3.6 8.1-8.1 8.1-4.6 0-8.1-3.6-8.1-8.1v-77.2zm40 37.8c11.7 0 19-6.1 19-15.4v-.3c0-9.8-7.1-15.3-19.2-15.3h-23.8v31.1l24-.1zm42.5-37.8c0-4.6 3.6-8.1 8.1-8.1h26.3c29.2 0 49.2 20 49.2 46v.3c0 26.1-20.2 46.3-49.2 46.3H697c-4.6 0-8.1-3.6-8.1-8.1v-76.4zm34.4 69.7c19.5 0 32.2-13.1 32.2-31.2v-.3c0-18.2-12.7-31.6-32.2-31.6H705v63h18.3v.1z" fill="#fff"/></svg>';t.exports=r,e.default=r},191:function(t,e,r){"use strict";r(186)},192:function(t,e,r){var n=r(48)(!1);n.push([t.i,".ftr{width:200px;height:110px}",""]),t.exports=n},193:function(t,e){var r='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 792 612" xml:space="preserve"><style>#st0{fill:#1ab680!important}</style><path id="st0" d="M648.3 211.9c-18.3-34.6-63.4-47.9-97.6-24.4-24.6 16.8-33 41.1-28.4 69.7 1.6 9.8-1.1 17.6-5.9 25.2-15.9 25.1-36.8 45.6-60.2 63.7-4.8 3.8-11.3 8.1-16.8 7.8-13.6-.6-26.5-4.5-34-18.1-10.3-18.5-21.7-36.4-31.7-55.1-14.1-26.3-25.4-53.8-33.3-82.6-2.3-8.3-2.5-17.6-1.8-26.3.9-10.7 5.4-23.4 5.1-36.5s-2.7-20.5-7.3-32.4C323.2 69 298.5 47.6 263.9 39c-30.6-7.6-59.7-1.6-85.5 17.2-23.5 17.1-37.5 40.5-41.5 69-3.8 26.6 1.9 51.8 17.7 74 13.4 18.9 31.1 32.2 53.5 39.4 8.5 2.7 16.7 7.1 24 12.3 19.4 13.8 35.2 31.5 50.2 49.8 19.1 23.1 36.8 47.2 48.5 75 3.7 8.8 7.6 18 3.8 28.1-8.6 22.5-8.1 45.1 2.4 66.7 18.5 37.8 60.4 56.8 101.1 43.8 41.7-13.3 66.2-56.9 56.3-98-1.1-4.7-.5-10.9 1.8-15 8-14.5 16.4-28.8 25.9-42.4 11.5-16.4 23.6-32.5 40-44.6 5-3.7 10.1-5.1 16.3-3.8 14.7 3 28.7 0 41.6-6.8 32.8-17.4 46.1-58.2 28.3-91.8z"/><path id="st0" d="M490.5 84c14.9 0 27.2 12.2 27.2 27.2v94.1c3.7-6.9 8.7-13.3 14.7-19.1V85.7c0-17.1-14-31.2-31.2-31.2H319.7c8.9 8.4 16.4 18.2 22.5 29.6h148.3zM379.6 66.2h46.3c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8h-46.3c-1.6 0-2.8-1.3-2.8-2.8-.1-1.6 1.2-2.8 2.8-2.8zM517.7 504c0 14.9-12.2 27.2-27.2 27.2H315c-14.9 0-27.2-12.2-27.2-27.2V327.9c-4.9-6.5-9.9-12.8-14.7-18.6v235.8c0 17.1 14 31.2 31.2 31.2h196.9c17.1 0 31.2-14 31.2-31.2V366.8c-4.8 6.9-9.6 14.3-14.7 23V504zm-102 58.6h-26c-5 0-9-4.1-9-9s4.1-9 9-9h26c5 0 9 4.1 9 9s-4 9-9 9z"/></svg>';t.exports=r,e.default=r},502:function(t,e,r){"use strict";r.r(e);var n=r(185),a={components:{Header:r(187).default,Footer:n.default},head:{titleTemplate:"Training - %s",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"View video tutorials on how to get the most from our review link generator."}]}},i=r(47),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"h-30 bg-gray-900 mx-auto text-gray-100",staticStyle:{"max-width":"960px"}},[n("script",{attrs:{async:"",crossorigin:"",type:"module",id:"engagementWidget",src:"https://cdn.chatwidgets.net/widget/livechat/bundle.js","data-env":"portal-api","data-instance":"Y-MQIeB8OVhrEg-V","data-container":"#engagement-widget-container"}}),t._v(" "),n("div",{staticClass:"px-4"},[n("div",{staticClass:"flex items-start justify-between pt-8"},[n("NuxtLink",{attrs:{to:"/"}},[n("div",{staticClass:"logo w-24",staticStyle:{width:"8rem !important","margin-top":"-25px"},attrs:{title:"Reviews Zip - Another Software Solution By BizViz"},domProps:{innerHTML:t._s(r(193))}})]),t._v(" "),n("Header")],1),t._v(" "),t._m(0)])]),t._v(" "),n("div",[n("Footer")],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-screen-sm"},[r("h1",{staticClass:"text-3xl md:text-5xl font-extrabold mt-24 md:leading-tight"},[t._v("\n            Training Videos\n          ")]),t._v(" "),r("div",{staticClass:"mt-16",staticStyle:{padding:"0"}},[r("h2",{staticClass:"font-extrabold text-2xl",staticStyle:{padding:"10px 5px"}},[t._v("\n              How to Create Your Smart vCard\n            ")]),t._v(" "),r("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[r("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://player.vimeo.com/video/604008968?h=3c15377f03&title=0&byline=0&portrait=0",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""}})]),t._v(" "),r("script",{attrs:{src:"https://player.vimeo.com/api/player.js"}})]),t._v(" "),r("div",{staticClass:"mt-16",staticStyle:{padding:"0"}},[r("h2",{staticClass:"font-extrabold text-2xl",staticStyle:{padding:"10px 5px"}},[t._v("\n              How to Host Your Smart vCard\n            ")]),t._v(" "),r("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[r("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://player.vimeo.com/video/604010617?h=e02a56cc49&title=0&byline=0&portrait=0",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""}})]),t._v(" "),r("script",{attrs:{src:"https://player.vimeo.com/api/player.js"}})]),t._v(" "),r("div",{staticClass:"mt-16",staticStyle:{padding:"0"}},[r("h2",{staticClass:"font-extrabold text-2xl",staticStyle:{padding:"10px 5px"}},[t._v("\n              How to Activate Your Agency License\n            ")]),t._v(" "),r("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[r("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://player.vimeo.com/video/730017080?h=b738b38cf3&badge=0&autopause=0&player_id=0&app_id=58479",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:"",title:"How to Activate Your Smart vCard Agency License"}})]),t._v(" "),r("script",{attrs:{src:"https://player.vimeo.com/api/player.js"}})])])}],!1,null,null,null);e.default=s.exports;installComponents(s,{Header:r(187).default,Footer:r(185).default})}}]);