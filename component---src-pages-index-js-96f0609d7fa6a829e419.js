(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{141:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(145),i=n(146),l=n(144),s=l.a.div.withConfig({displayName:"styled__StyledWrapper",componentId:"sc-18yxjmn-0"})(["box-shadow:rgba(136,136,136,0.14) 10px 10px 20px;width:300px;background-color:#ff5b5b;padding:1rem;border-radius:20px;"]),u=l.a.h2.withConfig({displayName:"styled__StyledTitle",componentId:"sc-18yxjmn-1"})(["text-align:center;font-weight:300;a{text-decoration:none;color:white;}"]),c=l.a.p.withConfig({displayName:"styled__StyledDescription",componentId:"sc-18yxjmn-2"})(["padding:1.1rem;"]),d=l.a.div.withConfig({displayName:"styled__StyledFooter",componentId:"sc-18yxjmn-3"})(["text-align:right;a{text-decoration:none;color:white;}"]),p=function(e){var t=e.slug,n=(e.date,e.title),a=e.excerpt;return r.a.createElement(s,null,r.a.createElement(u,null,r.a.createElement(o.Link,{to:t},n)),r.a.createElement(c,null,a),r.a.createElement(d,null,r.a.createElement(o.Link,{to:t},"Leer")))};n.d(t,"query",function(){return f});t.default=function(e){var t=e.data;return r.a.createElement(i.a,{title:"Psicología under construction"},t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement(p,{slug:t.fields.slug,date:t.frontmatter.date,title:t.frontmatter.title,excerpt:t.excerpt.replace(t.frontmatter.title,"")})}))};var f="737050963"},143:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(155)),o=a(n(156)),i=a(n(7)),l=a(n(51)),s=a(n(52)),u=a(n(4)),c=a(n(0)),d=n(22),p=n(145);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/psicologia/"+e)}var h={activeClassName:u.default.string,activeStyle:u.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,l=t.onClick,s=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=f(n);return c.default.createElement(d.Link,(0,o.default)({to:g,state:u,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(n,{state:u,replace:h})),!0}},m))},t}(c.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var g=m;t.default=g;var v=function(e,t){window.___navigate(f(e),t)};t.navigate=v;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(143),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(147),c=n.n(u);n.d(t,"PageRenderer",function(){return c.a});var d=n(49);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(144),i=o.a.div.withConfig({displayName:"styled__StyledWrapper",componentId:"sc-1dte1o0-0"})([""]),l=o.a.h1.withConfig({displayName:"styled__StyledTitle",componentId:"sc-1dte1o0-1"})(['font-weight:100;text-align:center;padding:1rem;font-family:"Pacifico";font-size:3rem;']),s=o.a.div.withConfig({displayName:"styled__StyledContent",componentId:"sc-1dte1o0-2"})(["display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:1rem;grid-row-gap:1rem;background-color:white;text-align:center;justify-items:center;"]);t.a=function(e){var t=e.title,n=e.children;return r.a.createElement(i,null,r.a.createElement(l,null," ",t," "),r.a.createElement(s,null," ",n," "))}},147:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},155:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},156:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},157:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(68),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u}}]);
//# sourceMappingURL=component---src-pages-index-js-96f0609d7fa6a829e419.js.map