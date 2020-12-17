(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{38:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),s=n.n(i),c=n(31),o=n.n(c),r=n(8),l=n(2),u=n(3),h=n(6),d=n(5),g=(n(38),n(4)),p=n(15),j=n(9),m=n.n(j),b=new(function(){function e(){Object(l.a)(this,e),this.auth=m.a.create({baseURL:"https://financialadv.herokuapp.com",withCredentials:!0})}return Object(u.a)(e,[{key:"signup",value:function(e,t){return this.auth.post("/auth/signup",{email:e,password:t}).then((function(e){return e.data}))}},{key:"login",value:function(e,t){return this.auth.post("/auth/login",{email:e,password:t}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.get("/auth/logout").then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),O=s.a.createContext(),x=O.Consumer,f=O.Provider,v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={isLoggedIn:!1,isLoading:!0,user:null},e.signup=function(t,n){b.signup(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.login=function(t,n){b.login(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.logout=function(){b.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,n=e.isLoading,i=e.user,s=this.signup,c=this.login,o=this.logout;return n?Object(a.jsx)("p",{children:"Loading"}):Object(a.jsx)(f,{value:{isLoggedIn:t,isLoading:n,user:i,signup:s,login:c,logout:o},children:this.props.children})}}]),n}(s.a.Component),y=function(e){return function(t){Object(h.a)(i,t);var n=Object(d.a)(i);function i(){return Object(l.a)(this,i),n.apply(this,arguments)}return Object(u.a)(i,[{key:"render",value:function(){var t=this;return Object(a.jsx)(x,{children:function(n){var i=n.isLoggedIn,s=n.isLoading,c=n.user,o=n.signup,r=n.login,l=n.logout;return Object(a.jsx)(e,Object(p.a)(Object(p.a)({},t.props),{},{isLoggedIn:i,isLoading:s,user:c,signup:o,login:r,logout:l}))}})}}]),i}(s.a.Component)},C=y(function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("nav",{className:"navbar",children:this.props.isLoggedIn?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.b,{to:"/",id:"home-btn",children:Object(a.jsx)("h4",{className:"navText",children:"Campaigns"})}),Object(a.jsx)("button",{className:"logout-button",onClick:this.props.logout,children:"Logout"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(r.b,{to:"/login",children:[Object(a.jsx)("button",{className:"navbar-button",children:"Login"})," "]}),Object(a.jsx)("br",{}),Object(a.jsxs)(r.b,{to:"/signup",children:[Object(a.jsx)("button",{className:"navbar-button",children:"Sign Up"})," "]})]})})}}]),n}(i.Component)),k=n(14),S=y(function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={firstname:"",lastname:"",companyname:"",campaignname:"",startingdate:"",endingdate:"",budget:"",image:"",age:"",gender:"",country:"",interests:"",operatingsystem:"",education:"",jobfunction:""},e.handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(k.a)({},a,i))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.firstname,i=n.lastname,s=n.companyname,c=n.campaignname,o=n.startingdate,r=n.endingdate,l=n.budget,u=n.image,h=n.age,d=n.gender,g=n.country,p=n.interests,j=n.operatingsystem,b=n.education,O=n.jobfunction;m.a.post("".concat("https://financialadv.herokuapp.com","/api/campaign/").concat(e.props.user._id),{firstname:a,lastname:i,companyname:s,campaignname:c,startingdate:o,endingdate:r,budget:l,image:u,age:h,gender:d,country:g,interests:p,operatingsystem:j,education:b,jobfunction:O},{withCredentials:!0}).then((function(){e.setState({firstname:"",lastname:"",companyname:"",campaignname:"",startingdate:"",endingdate:"",budget:"",image:"",age:"",gender:"",country:"",interests:"",operatingsystem:"",education:"",jobfunction:""})})).catch((function(e){return console.log(e)})).then((function(){e.props.history.push("/campaign/advertiser")}))},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files);var n=t.target.files[0],a=new FormData;a.append("image",n),m.a.post("".concat("https://financialadv.herokuapp.com","/api/upload"),a,{withCredentials:!0}).then((function(t){console.log("response is: ",t),e.setState({image:t.data.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"backImage",children:Object(a.jsxs)("form",{className:"form",onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:" First name:"}),Object(a.jsx)("input",{type:"text",name:"firstname",onChange:this.handleChange,value:this.state.firstname}),Object(a.jsx)("label",{children:" Last name:"}),Object(a.jsx)("input",{type:"text",name:"lastname",onChange:this.handleChange,value:this.state.lastname}),Object(a.jsx)("label",{children:" Company name:"}),Object(a.jsx)("input",{type:"text",name:"companyname",onChange:this.handleChange,value:this.state.companyname}),Object(a.jsx)("label",{children:" Campaign name:"}),Object(a.jsx)("input",{type:"text",name:"campaignname",onChange:this.handleChange,value:this.state.campaignname}),Object(a.jsx)("label",{children:" Startingdate:"}),Object(a.jsx)("input",{type:"text",name:"startingdate",onChange:this.handleChange,value:this.state.startingdate}),Object(a.jsx)("label",{children:" Endingdate:"}),Object(a.jsx)("input",{type:"text",name:"endingdate",onChange:this.handleChange,value:this.state.endingdate}),Object(a.jsx)("label",{children:" Budget:"}),Object(a.jsx)("input",{type:"text",name:"budget",onChange:this.handleChange,value:this.state.budget}),Object(a.jsx)("label",{children:" Image:"}),Object(a.jsx)("input",{type:"file",name:"image",onChange:this.handleFileUpload}),Object(a.jsx)("img",{src:this.state.image}),Object(a.jsx)("label",{children:" Age:"}),Object(a.jsx)("input",{type:"text",name:"age",onChange:this.handleChange,value:this.state.age}),Object(a.jsx)("label",{children:" Gender:"}),Object(a.jsx)("input",{type:"text",name:"gender",onChange:this.handleChange,value:this.state.gender}),Object(a.jsx)("label",{children:" Country:"}),Object(a.jsx)("input",{type:"text",name:"country",onChange:this.handleChange,value:this.state.country}),Object(a.jsx)("label",{children:" Interests:"}),Object(a.jsx)("input",{type:"text",name:"interests",onChange:this.handleChange,value:this.state.interests}),Object(a.jsx)("label",{children:" Operatingsystem:"}),Object(a.jsx)("input",{type:"text",name:"operatingsystem",onChange:this.handleChange,value:this.state.operatingsystem}),Object(a.jsx)("label",{children:" Education:"}),Object(a.jsx)("input",{type:"text",name:"education",onChange:this.handleChange,value:this.state.education}),Object(a.jsx)("label",{children:" Jobfunction:"}),Object(a.jsx)("input",{type:"text",name:"jobfunction",onChange:this.handleChange,value:this.state.jobfunction}),Object(a.jsx)("button",{type:"submit",children:"Create Campaign"})]})})}}]),n}(i.Component)),w=y(function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={user:{}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("this.props.user._id",this.props.user._id),m.a.get("".concat("https://financialadv.herokuapp.com","/api/users/").concat(this.props.user._id)).then((function(t){console.log("response data axios get advertiser",t.data),e.setState({user:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return console.log("our campaigns",this.state.user),Object(a.jsxs)("div",{className:"backImage",children:[Object(a.jsx)("h2",{children:" Campaigns: "}),this.state.user.campaigns&&this.state.user.campaigns.map((function(e){return Object(a.jsxs)("div",{className:"form campaignConteiner",children:[Object(a.jsxs)(r.b,{to:"/campaign/statistics/"+e._id,children:[Object(a.jsxs)("h2",{children:[" Campaign: ",e.campaignname]}),Object(a.jsxs)("h2",{children:["Creator:",e.firstname," ",e.lastname]}),Object(a.jsxs)("h2",{children:["Company: ",e.companyname]}),Object(a.jsxs)("h2",{children:[" Date:",e.startingdate," ",e.endingdate]}),Object(a.jsx)("h2",{children:"Creativity:"}),Object(a.jsx)("img",{style:{width:"150px",height:"100px"},src:e.image,alt:"creativity for advertising"}),Object(a.jsxs)("h2",{children:["Target age:  ",e.age]}),Object(a.jsxs)("h2",{children:[" Gender: ",e.gender]}),Object(a.jsxs)("h2",{children:["Country: ",e.country]}),Object(a.jsxs)("h2",{children:["Target interest: ",e.interests]}),Object(a.jsxs)("h2",{children:["Operating system: ",e.operatingsystem]}),Object(a.jsxs)("h2",{children:["Education:",e.education]}),Object(a.jsxs)("h2",{children:["Job function: ",e.jobfunction]})]}),Object(a.jsx)(r.b,{className:"buttons",to:"/campaign/edit/"+e._id,children:" Edit campaign"}),Object(a.jsx)(r.b,{className:"buttons",to:"/campaignSetup",children:"Create new Campaign"})]},e._id)}))]})}}]),n}(i.Component)),L=y(function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={campaigns:[]},e.deleteCampaign=function(){var t=e.props.match.params.id;m.a.delete("".concat("https://financialadv.herokuapp.com","/api/campaign/deletecampaign/").concat(t)).then((function(){return e.props.history.push("/campaign/advertiser")})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("user id from props",this.props.user._id);var t=this.props.match.params.id;console.log(t),m.a.get("".concat("https://financialadv.herokuapp.com","/api/campaign/statistics/").concat(t)).then((function(t){console.log("response data from axios request",t.data),e.setState({campaigns:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"backImage",children:Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("h1",{children:" Campaign Statistic"}),Object(a.jsxs)("h2",{children:["Campaign name: ",this.state.campaigns.campaignname]}),Object(a.jsx)("p",{children:" Total clicks: 0"}),Object(a.jsx)("p",{children:" CTR: No data yet"}),Object(a.jsx)("p",{children:" Times on page: 0"}),Object(a.jsx)("p",{children:" Pages visited after: "}),Object(a.jsx)("p",{children:" Banner views: 0"}),Object(a.jsx)("p",{children:" video views: 0"}),Object(a.jsx)(r.b,{className:"buttons colors",to:"/campaign/advertiser",children:"Your campaigns"}),Object(a.jsx)(r.b,{className:"buttons colors",to:"/campaign/edit/".concat(this.state.campaigns._id),children:"Edit your campaign"}),Object(a.jsx)("button",{className:"buttons",onClick:this.deleteCampaign,children:"Delete Campaign"})]})})}}]),n}(i.Component)),N=y(function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.email,i=n.password;console.log(a),e.props.signup(a,i)},e.handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(k.a)({},a,i))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)("form",{className:"form",onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"email:"}),Object(a.jsx)("input",{type:"text",name:"email",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Signup"})]}),Object(a.jsx)("p",{children:"Already have account?"}),Object(a.jsx)(r.b,{className:"buttons",to:"/login",children:" Login"})]})}}]),n}(i.Component)),I=y(function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.email,i=n.password;e.props.login(a,i)},e.handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(k.a)({},a,i))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)("form",{className:"form",onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"email"}),Object(a.jsx)("input",{type:"text",name:"email",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("input",{className:"buttons",type:"submit",value:"Login"})]})]})}}]),n}(i.Component)),F=y(function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Private Route"}),Object(a.jsxs)("h2",{children:["Welcome ",this.props.user&&this.props.user.email]})]})}}]),n}(i.Component));var D=y((function(e){var t=e.isLoggedIn,n=e.isLoading,i=e.component,s=e.exact,c=e.path;return n?"Loading":Object(a.jsx)(g.b,{exact:s,path:c,render:function(e){return t?Object(a.jsx)(g.a,{to:"/campaignSetup"}):t?void 0:Object(a.jsx)(i,Object(p.a)({},e))}})}));var _=y((function(e){var t=e.isLoggedIn,n=e.isLoading,i=e.component,s=e.exact,c=e.path;return n?"Loading":Object(a.jsx)(g.b,{exact:s,path:c,render:function(e){return t?t?Object(a.jsx)(i,Object(p.a)({},e)):void 0:Object(a.jsx)(g.a,{to:"/login"})}})})),A=y(function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={campaignname:"",endingdate:"",budget:"",image:"",age:"",gender:"",country:"",interests:"",operatingsystem:"",education:"",jobfunction:"",campaign:{}},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.campaignname,i=n.endingdate,s=n.budget,c=n.image,o=n.age,r=n.gender,l=n.country,u=n.interests,h=n.operatingsystem,d=n.education,g=n.jobfunction,p=e.props.match.params.id;console.log(p,a,i,s,c,o,r,l,u,h,d,g),m.a.post("".concat("https://financialadv.herokuapp.com","/api/campaign/edit/").concat(p),{campaignname:a,endingdate:i,budget:s,image:c,age:o,gender:r,country:l,interests:u,operatingsystem:h,education:d,jobfunction:g}).then((function(t){console.log(t),e.props.history.push("/campaign/advertiser")})).catch((function(e){return console.log(e)}))},e.deleteCampaign=function(){var t=e.props.match.params.id;m.a.delete("".concat("https://financialadv.herokuapp.com","/api/campaign/deletecampaign/").concat(t)).then((function(){return e.props.history.push("/campaign/advertiser")})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(k.a)({},a,i))},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files);var n=t.target.files[0],a=new FormData;a.append("image",n),m.a.post("".concat("https://financialadv.herokuapp.com","/api/upload"),a,{withCredentials:!0}).then((function(t){console.log("response is: ",t),e.setState({image:t.data.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},e.getOneCampaign=function(){var t=e.props.match.params.id;console.log("id",t),m.a.get("".concat("https://financialadv.herokuapp.com","/api/onecampaign/").concat(t)).then((function(t){console.log("apirespons",t);var n=t.data,a=n.campaignname,i=n.endingdate,s=n.budget,c=n.image,o=n.age,r=n.gender,l=n.country,u=n.interests,h=n.operatingsystem,d=n.education,g=n.jobfunction;e.setState({campaignname:a,endingdate:i,budget:s,image:c,age:o,gender:r,country:l,interests:u,operatingsystem:h,education:d,jobfunction:g})})).catch((function(e){console.log(e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getOneCampaign()}},{key:"render",value:function(){return console.log("anything",this.state.campaign.country),Object(a.jsx)("div",{className:"backImage edit",children:Object(a.jsxs)("form",{className:"form",onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"campaignname:"}),Object(a.jsx)("input",{type:"text",name:"campaignname",value:this.state.campaignname,onChange:this.handleChange}),Object(a.jsx)("label",{children:"endingdate:"}),Object(a.jsx)("input",{type:"text",name:"endingdate",value:this.state.endingdate,onChange:this.handleChange}),Object(a.jsx)("label",{children:"budget:"}),Object(a.jsx)("input",{type:"text",name:"budget",value:this.state.budget,onChange:this.handleChange}),Object(a.jsx)("label",{children:"image:"}),Object(a.jsx)("input",{type:"file",name:"image",onChange:this.handleFileUpload}),Object(a.jsx)("img",{src:this.state.image}),Object(a.jsx)("label",{children:"age:"}),Object(a.jsx)("input",{type:"text",name:"age",value:this.state.age,onChange:this.handleChange}),Object(a.jsx)("label",{children:"gender:"}),Object(a.jsx)("input",{type:"text",name:"gender",value:this.state.gender,onChange:this.handleChange}),Object(a.jsx)("label",{children:"country:"}),Object(a.jsx)("input",{type:"text",name:"country",value:this.state.country,onChange:this.handleChange,defaultValue:this.state.campaign.country},"".concat(Math.floor(1e3*Math.random()),"-min")),Object(a.jsx)("label",{children:"interests:"}),Object(a.jsx)("input",{type:"text",name:"interests",value:this.state.interests,onChange:this.handleChange}),Object(a.jsx)("label",{children:"operatingsystem:"}),Object(a.jsx)("input",{type:"text",name:"operatingsystem",value:this.state.operatingsystem,onChange:this.handleChange}),Object(a.jsx)("label",{children:"education:"}),Object(a.jsx)("input",{type:"text",name:"education",value:this.state.education,onChange:this.handleChange}),Object(a.jsx)("label",{children:"jobfunction:"}),Object(a.jsx)("input",{type:"text",name:"jobfunction",value:this.state.jobfunction,onChange:this.handleChange}),Object(a.jsx)("button",{className:"buttons",type:"submit",children:"Edit Campaign"}),Object(a.jsx)("button",{className:"buttons",onClick:this.deleteCampaign,children:"Delete Campaign"})]})})}}]),n}(i.Component)),E=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(C,{}),Object(a.jsxs)(g.d,{children:[Object(a.jsx)(_,{exact:!0,path:"/",component:w}),Object(a.jsx)(_,{exact:!0,path:"/campaignSetup",component:S}),Object(a.jsx)(_,{exact:!0,path:"/campaign/advertiser",component:w}),Object(a.jsx)(_,{exact:!0,path:"/campaign/edit/:id",component:A}),Object(a.jsx)(_,{exact:!0,path:"/campaign/statistics/:id",component:L}),Object(a.jsx)(D,{exact:!0,path:"/signup",component:N}),Object(a.jsx)(D,{exact:!0,path:"/login",component:I}),Object(a.jsx)(_,{exact:!0,path:"/private",component:F})]})]})}}]),n}(i.Component);o.a.render(Object(a.jsx)(r.a,{children:Object(a.jsx)(v,{children:Object(a.jsx)(E,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.1d49cae3.chunk.js.map