(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/components/Badge/index.js":function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t("../wttj-front/node_modules/react/index.js"),a=t.n(r),o=t("./src/components/Tag/index.js"),i=function(e){return a.a.createElement(o.a,Object.assign({size:"sm"},e))};i.__docgenInfo={description:"",methods:[],displayName:"Badge"}},"./src/components/Label/doc.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var r=t("../wttj-front/node_modules/react/index.js"),a=t.n(r),o=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),l=t("./docz.styled.js"),c=t("./src/components/Label/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=p(this,m(n).call(this,e))).layout=null,t}var t,r,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(n,a.a.Component),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components,t=d(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:n},a.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"label"}},"Label"),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"default"}},"Default"),a.a.createElement(o.MDXTag,{name:"p",components:n},"label DOM, use on Field."),a.a.createElement(l.b,{__codesandbox:"undefined",__position:0,__code:"<Label>Default label</Label>",__scope:{props:this?this.props:t,Playground:l.b,Label:c.a}},a.a.createElement(c.a,null,"Default label")),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"required"}},"Required"),a.a.createElement(o.MDXTag,{name:"p",components:n},"With ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"required")," property."),a.a.createElement(l.b,{__codesandbox:"undefined",__position:1,__code:"<Label required>Required label</Label>",__scope:{props:this?this.props:t,Playground:l.b,Label:c.a}},a.a.createElement(c.a,{required:!0},"Required label")),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"variants"}},"Variants"),a.a.createElement(o.MDXTag,{name:"p",components:n},a.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"error")," or ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"warning")," variant add specific badge."),a.a.createElement(l.b,{__codesandbox:"undefined",__position:2,__code:'<>\n  <Label variant="warning">Warning variant</Label>\n  <Label variant="error">Error variant</Label>\n</>',__scope:{props:this?this.props:t,Playground:l.b,Label:c.a}},a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{variant:"warning"},"Warning variant"),a.a.createElement(c.a,{variant:"error"},"Error variant"))),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"disabled"}},"Disabled"),a.a.createElement(o.MDXTag,{name:"p",components:n},"Customize label for disabled elements."),a.a.createElement(l.b,{__codesandbox:"undefined",__position:3,__code:'<>\n  <Label disabled>Disabled label</Label>\n  <Label disabled disabledIcon="\ud83d\udd12">\n    Custom icon disabled label\n  </Label>\n  <Label disabled disabledIcon="\ud83d\udd12" variant="warning">\n    Disabled custom icon warning label\n  </Label>\n</>',__scope:{props:this?this.props:t,Playground:l.b,Label:c.a}},a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{disabled:!0},"Disabled label"),a.a.createElement(c.a,{disabled:!0,disabledIcon:"\ud83d\udd12"},"Custom icon disabled label"),a.a.createElement(c.a,{disabled:!0,disabledIcon:"\ud83d\udd12",variant:"warning"},"Disabled custom icon warning label"))),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),a.a.createElement(i.f,{of:c.a}))}}])&&u(t.prototype,r),s&&u(t,s),n}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/components/Label/index.js":function(e,n,t){"use strict";t.d(n,"a",function(){return c});var r=t("../wttj-front/node_modules/react/index.js"),a=t.n(r),o=t("./src/components/Badge/index.js"),i=t("./src/components/Icon/index.js"),l=t("./src/components/Label/styles.js"),c=function(e){var n=e.children,t=e.disabled,r=void 0!==t&&t,c=e.disabledIcon,s=e.errorWarningIcon,d=e.htmlFor,u=e.required,p=void 0!==u&&u,m=e.variant;return a.a.createElement(l.c,{disabled:r,disabledIcon:c,errorWarningIcon:s,htmlFor:d,required:p,variant:m},m&&a.a.createElement(l.d,{variant:m},function(e){return"error"===e||"warning"===e?s||a.a.createElement(o.a,{rounded:!0,variant:e},"!"):null}(m)),r&&a.a.createElement(l.a,null,c||a.a.createElement(i.a,{name:"special_pipeline",size:"sm"})),n,p&&a.a.createElement(l.b,null,"*"))};c.__docgenInfo={description:"",methods:[],displayName:"Label",props:{disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},required:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"union",value:[{name:"node"},{name:"string"}]},required:!1,description:""},disabledIcon:{type:{name:"node"},required:!1,description:""},errorWarningIcon:{type:{name:"node"},required:!1,description:""},htmlFor:{type:{name:"string"},required:!1,description:"Name of the linked form element"},variant:{type:{name:"enum",value:[{value:"'error'",computed:!1},{value:"'warning'",computed:!1}]},required:!1,description:""}}}},"./src/components/Label/styles.js":function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return l}),t.d(n,"d",function(){return c}),t.d(n,"c",function(){return s});var r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=t("./src/utils/variants.js"),o=t("./src/theme/helpers.js"),i=r.d.div.withConfig({componentId:"sc-112u1vj-0"})(["display:inline-flex;margin-right:",";"],Object(o.a)("space.xxs")),l=r.d.abbr.withConfig({componentId:"sc-112u1vj-1"})(["margin-left:",";color:",";"],Object(o.a)("space.xxs"),Object(o.a)("colors.primary.500")),c=r.d.div.withConfig({componentId:"sc-112u1vj-2"})(function(e){return Object(r.c)(["display:inline-flex;margin-right:",";color:",";fill:",";"],Object(o.a)("space.xxs"),Object(a.c)(e.variant),Object(a.c)(e.variant))}),s=r.d.label.withConfig({componentId:"sc-112u1vj-3"})(["display:flex;flex-shrink:0;align-items:center;",";"],Object(o.b)("fields.label"))},"./src/components/Tag/index.js":function(e,n,t){"use strict";var r=t("../wttj-front/node_modules/react/index.js"),a=t.n(r),o=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=t("./src/utils/utils.js"),l=t("./src/utils/variants.js"),c=t("./src/theme/helpers.js"),s=o.d.div.withConfig({componentId:"sc-12bthzp-0"})(function(e){return Object(o.c)(["",";"," ",";display:inline-flex;align-items:center;justify-content:center;background-color:",";border-radius:",";",";",";"],Object(c.b)("tags.default"),Object(c.b)("tags.sizes.".concat(e.size)),"default"!==e.variant&&Object(c.b)("tags.variants"),Object(l.b)(e.variant),e.rounded?"1em":Object(c.a)("radii.md"),i.a,1===e.length&&(n=e.size,Object(o.c)([""," padding:0;"],Object(c.b)("tags.oneCharacter.".concat(n)))));var n});function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,"a",function(){return u});var u=function(e){var n=e.children,t=e.rounded,r=e.size,o=void 0===r?"md":r,i=e.variant,l=void 0===i?"default":i,c=d(e,["children","rounded","size","variant"]);return a.a.createElement(s,Object.assign({length:n.length,rounded:t,size:o,variant:l},c),n)};u.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{size:{defaultValue:{value:"'md'",computed:!1},type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'blue'",computed:!1},{value:"'default'",computed:!1},{value:"'error'",computed:!1},{value:"'green'",computed:!1},{value:"'info'",computed:!1},{value:"'orange'",computed:!1},{value:"'pink'",computed:!1},{value:"'primary'",computed:!1},{value:"'purple'",computed:!1},{value:"'red'",computed:!1},{value:"'secondary'",computed:!1},{value:"'turquoize'",computed:!1},{value:"'warning'",computed:!1},{value:"'yellow'",computed:!1}]},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},rounded:{type:{name:"bool"},required:!1,description:"set a border-radius to 1em"}}}},"./src/utils/variants.js":function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"c",function(){return l}),t.d(n,"b",function(){return s});var r=t("./src/theme/helpers.js");function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=function(e,n){return n?"error":e?"warning":void 0},i={error:"colors.danger.500",warning:"colors.warning.500",info:"colors.info.500"},l=function(e){var n=i[e];return n?Object(r.a)(n):null},c=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){a(e,n,t[n])})}return e}({blue:"colors.sub.blue",default:"colors.nude.300",green:"colors.sub.green",orange:"colors.sub.orange",pink:"colors.sub.pink",primary:"colors.primary.500",purple:"colors.sub.purple",red:"colors.sub.red",secondary:"colors.secondary.500",turquoize:"colors.sub.turquoize",yellow:"colors.sub.yellow"},i),s=function(e){var n=c[e];return n?Object(r.a)(n):null}}}]);
//# sourceMappingURL=src-components-label-doc.cc185a27bdd95a6c12e5.js.map