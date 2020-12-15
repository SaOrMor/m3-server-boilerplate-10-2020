(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{38:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(1),c=n.n(i),s=n(31),r=n.n(s),o=n(8),u=n(3),l=n(4),h=n(6),p=n(5),j=(n(38),n(2)),d=n(15),g=n(13),b=n.n(g),m=new(function(){function t(){Object(u.a)(this,t),this.auth=b.a.create({baseURL:"https://financialadv.herokuapp.com",withCredentials:!0})}return Object(l.a)(t,[{key:"signup",value:function(t,e){return this.auth.post("/auth/signup",{email:t,password:e}).then((function(t){return t.data}))}},{key:"login",value:function(t,e){return this.auth.post("/auth/login",{email:t,password:e}).then((function(t){return t.data}))}},{key:"logout",value:function(){return this.auth.get("/auth/logout").then((function(t){return t.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(t){return t.data}))}}]),t}()),O=c.a.createContext(),f=O.Consumer,v=O.Provider,x=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={isLoggedIn:!1,isLoading:!0,user:null},t.signup=function(e,n){m.signup(e,n).then((function(e){return t.setState({isLoggedIn:!0,user:e})})).catch((function(e){t.setState({isLoggedIn:!1,user:null})}))},t.login=function(e,n){m.login(e,n).then((function(e){return t.setState({isLoggedIn:!0,user:e})})).catch((function(e){t.setState({isLoggedIn:!1,user:null})}))},t.logout=function(){m.logout().then((function(){return t.setState({isLoggedIn:!1,user:null})})).catch((function(t){return console.log(t)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;m.me().then((function(e){return t.setState({isLoggedIn:!0,user:e,isLoading:!1})})).catch((function(e){return t.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var t=this.state,e=t.isLoggedIn,n=t.isLoading,i=t.user,c=this.signup,s=this.login,r=this.logout;return n?Object(a.jsx)("p",{children:"Loading"}):Object(a.jsx)(v,{value:{isLoggedIn:e,isLoading:n,user:i,signup:c,login:s,logout:r},children:this.props.children})}}]),n}(c.a.Component),y=function(t){return function(e){Object(h.a)(i,e);var n=Object(p.a)(i);function i(){return Object(u.a)(this,i),n.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this;return Object(a.jsx)(f,{children:function(n){var i=n.isLoggedIn,c=n.isLoading,s=n.user,r=n.signup,o=n.login,u=n.logout;return Object(a.jsx)(t,Object(d.a)(Object(d.a)({},e.props),{},{isLoggedIn:i,isLoading:c,user:s,signup:r,login:o,logout:u}))}})}}]),i}(c.a.Component)},C=y(function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)(o.b,{to:"/",id:"home-btn",children:Object(a.jsx)("h4",{children:"Home"})}),this.props.isLoggedIn?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["username: ",this.props.user&&this.props.user.email]}),Object(a.jsx)("button",{onClick:this.props.logout,children:"Logout"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(o.b,{to:"/login",children:[Object(a.jsx)("button",{className:"navbar-button",children:"Login"})," "]}),Object(a.jsx)("br",{}),Object(a.jsxs)(o.b,{to:"/signup",children:[Object(a.jsx)("button",{className:"navbar-button",children:"Sign Up"})," "]})]})]})}}]),n}(i.Component)),L=n(14),k=y(function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={firstname:"",lastname:"",companyname:"",campaignname:"",startingdate:"",endingdate:"",budget:"",image:"",age:"",gender:"",country:"",interests:"",operatingsystem:"",education:"",jobfunction:""},t.handleChange=function(e){var n=e.target,a=n.name,i=n.value;t.setState(Object(L.a)({},a,i))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.firstname,i=n.lastname,c=n.companyname,s=n.campaignname,r=n.startingdate,o=n.endingdate,u=n.budget,l=n.image,h=n.age,p=n.gender,j=n.country,d=n.interests,g=n.operatingsystem,m=n.education,O=n.jobfunction;b.a.post("".concat("https://financialadv.herokuapp.com","/api/campaign/").concat(t.props.user._id),{firstname:a,lastname:i,companyname:c,campaignname:s,startingdate:r,endingdate:o,budget:u,image:l,age:h,gender:p,country:j,interests:d,operatingsystem:g,education:m,jobfunction:O}).then((function(){t.setState({firstname:"",lastname:"",companyname:"",campaignname:"",startingdate:"",endingdate:"",budget:"",image:"",age:"",gender:"",country:"",interests:"",operatingsystem:"",education:"",jobfunction:""})})).catch((function(t){return console.log(t)}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:" First name:"}),Object(a.jsx)("input",{type:"text",name:"firstname",onChange:this.handleChange,value:this.state.firstname}),Object(a.jsx)("label",{children:" Last name:"}),Object(a.jsx)("input",{type:"text",name:"lastname",onChange:this.handleChange,value:this.state.lastname}),Object(a.jsx)("label",{children:" Company name:"}),Object(a.jsx)("input",{type:"text",name:"companyname",onChange:this.handleChange,value:this.state.companyname}),Object(a.jsx)("label",{children:" Campaign name:"}),Object(a.jsx)("input",{type:"text",name:"campaignname",onChange:this.handleChange,value:this.state.campaignname}),Object(a.jsx)("button",{type:"submit",children:"Create Campaign"})]})})}}]),n}(i.Component)),S=y(function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={user:{}},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log("object",this.props.user._id),b.a.get("".concat("https://financialadv.herokuapp.com","/api/users/").concat(this.props.user._id)).then((function(e){console.log("ciao",e.data),t.setState({user:e.data})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return console.log("our campaigns",this.state.user),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:" Your campaigns: "}),this.state.user.campaigns&&this.state.user.campaigns.map((function(t){return Object(a.jsx)("div",{children:Object(a.jsx)(o.b,{to:"/campaign/statistics/"+t._id,children:Object(a.jsx)("h2",{children:t.campaignname})})},t._id)}))]})}}]),n}(i.Component)),w=y(function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={campaigns:[]},t.deleteCampaign=function(){var e=t.props.match.params.id;b.a.delete("http://localhost:5000/api/campaign/deletecampaign/".concat(e)).then((function(){return t.props.history.push("/campaign/advertiser")})).catch((function(t){return console.log(t)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log("user id from props",this.props.user._id);var e=this.props.match.params.id;console.log(e),b.a.get("".concat("https://financialadv.herokuapp.com","/api/campaign/statistics/").concat(e)).then((function(e){console.log("response data from axios request",e.data),t.setState({campaigns:e.data})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:" Campaign Statistic"}),Object(a.jsxs)("h2",{children:[" ",this.state.campaigns.campaignname]}),Object(a.jsx)("p",{children:" Total clicks: 0"}),Object(a.jsx)("p",{children:" CTR: No data yet"}),Object(a.jsx)("p",{children:" Times on page: 0"}),Object(a.jsx)("p",{children:" Pages visited after: "}),Object(a.jsx)("p",{children:" Banner views: 0"}),Object(a.jsx)("p",{children:" video views: 0"}),Object(a.jsx)("button",{on:!0,click:this.props.logout,children:" Logout"}),Object(a.jsx)(o.b,{to:"/campaign/advertiser",children:Object(a.jsx)("button",{children:" Your campaigns"})}),Object(a.jsx)(o.b,{to:"/editCampaigns",children:Object(a.jsx)("button",{children:" Edit your campaign"})}),Object(a.jsx)("button",{onClick:this.deleteCampaign,children:"Delete Campaign"})]})}}]),n}(i.Component)),I=y(function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={email:"",password:""},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.email,i=n.password;console.log(a),t.props.signup(a,i)},t.handleChange=function(e){var n=e.target,a=n.name,i=n.value;t.setState(Object(L.a)({},a,i))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.email,n=t.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"email:"}),Object(a.jsx)("input",{type:"text",name:"email",value:e,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Signup"})]}),Object(a.jsx)("p",{children:"Already have account?"}),Object(a.jsx)(o.b,{to:"/login",children:" Login"})]})}}]),n}(i.Component)),F=y(function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={email:"",password:""},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.email,i=n.password;t.props.login(a,i)},t.handleChange=function(e){var n=e.target,a=n.name,i=n.value;t.setState(Object(L.a)({},a,i))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.email,n=t.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"email"}),Object(a.jsx)("input",{type:"text",name:"email",value:e,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Login"})]})]})}}]),n}(i.Component)),A=y(function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Private Route"}),Object(a.jsxs)("h2",{children:["Welcome ",this.props.user&&this.props.user.email]})]})}}]),n}(i.Component));var D=y((function(t){var e=t.isLoggedIn,n=t.isLoading,i=t.component,c=t.exact,s=t.path;return n?"Loading":Object(a.jsx)(j.b,{exact:c,path:s,render:function(t){return e?Object(a.jsx)(j.a,{to:"/private"}):e?void 0:Object(a.jsx)(i,Object(d.a)({},t))}})}));var _=y((function(t){var e=t.isLoggedIn,n=t.isLoading,i=t.component,c=t.exact,s=t.path;return n?"Loading":Object(a.jsx)(j.b,{exact:c,path:s,render:function(t){return e?e?Object(a.jsx)(i,Object(d.a)({},t)):void 0:Object(a.jsx)(j.a,{to:"/login"})}})})),N=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(C,{}),Object(a.jsxs)(j.d,{children:[Object(a.jsx)(_,{exact:!0,path:"/campaignSetup",component:k}),Object(a.jsx)(_,{exact:!0,path:"/campaign/advertiser",component:S}),Object(a.jsx)(_,{exact:!0,path:"/campaign/statistics/:id",component:w}),Object(a.jsx)(D,{exact:!0,path:"/signup",component:I}),Object(a.jsx)(D,{exact:!0,path:"/login",component:F}),Object(a.jsx)(_,{exact:!0,path:"/private",component:A})]})]})}}]),n}(i.Component);r.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(x,{children:Object(a.jsx)(N,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.71a41bef.chunk.js.map