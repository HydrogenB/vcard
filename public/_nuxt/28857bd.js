(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{411:function(e,t,n){"use strict";n.r(t);var o={props:["name","item","index","type","buttonBg","removeAction"],mounted:function(){this.$refs.input.focus()}},s=n(48),a=Object(s.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"stepC flex mt-6"},[o("button",{staticClass:"p-1 flex-shrink-0 focus:outline-none drag cursor-move",attrs:{tabindex:"-1"}},[o("div",{staticClass:"w-6 h-6",domProps:{innerHTML:e._s(n(199))}})]),e._v(" "),o("div",{staticClass:"p-3 flex-shrink-0 mr-3 rounded-full",style:{background:""+("secondaryActions"==e.name?e.item.color:e.buttonBg)}},[o("div",{staticClass:"w-6 h-6",class:"secondaryActions"==e.name?null:"action",domProps:{innerHTML:e._s(n(203)("./"+e.item.name+".svg"))}})]),e._v(" "),o("div",{staticClass:"w-full"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.type[e.index].value,expression:"type[index].value"}],ref:"input",staticClass:"px-4 w-full h-12 bg-black placeholder-gray-600 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600",attrs:{type:"text","aria-label":"Enter "+e.item.label,title:"Enter "+e.item.label,placeholder:e.item.placeholder},domProps:{value:e.type[e.index].value},on:{input:function(t){t.target.composing||e.$set(e.type[e.index],"value",t.target.value)}}})]),e._v(" "),o("button",{staticClass:"p-1 m-2 flex-shrink-0 focus:outline-none rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200",attrs:{"aria-label":"Remove "+e.item.label,title:"Remove field"},on:{click:function(t){return e.removeAction(e.name,e.index)}}},[o("div",{staticClass:"w-6 h-6",domProps:{innerHTML:e._s(n(196))}})])])}),[],!1,null,null,null);t.default=a.exports}}]);