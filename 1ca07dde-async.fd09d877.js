(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["1ca07dde"],{"1ca07dde":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return b;}});var n=a("f19d2b93");a("7bed81e4");var l=a("5b220c3d"),r=a("a9d1a279");let d=[{key:"tab1",tab:"tab1"},{key:"tab2",tab:"tab2"}],i={tab1:(0,n.jsx)("p",{children:"content1"}),tab2:(0,n.jsx)("p",{children:"content2"})},c=[{key:"article",label:"article"},{key:"app",label:"app"},{key:"project",label:"project"}],s={article:(0,n.jsx)("p",{children:"article content"}),app:(0,n.jsx)("p",{children:"app content"}),project:(0,n.jsx)("p",{children:"project content"})};var b=()=>{let[e,t]=(0,l.useState)("tab1"),[a,b]=(0,l.useState)("app");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Card,{style:{width:"100%"},title:"Card title",extra:(0,n.jsx)("a",{href:"#",children:"More"}),tabList:d,activeTabKey:e,onTabChange:e=>{t(e);},children:i[e]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(r.Card,{style:{width:"100%"},tabList:c,activeTabKey:a,tabBarExtraContent:(0,n.jsx)("a",{href:"#",children:"More"}),onTabChange:e=>{b(e);},tabProps:{size:"middle"},children:s[a]})]});};}}]);