(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){},27:function(e,t,a){e.exports=a(40)},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),s=a.n(l),u=a(5),c=a(6),o=a(7),i=a.n(o),m=a(10),p=a(11),g=a(12),d=a(14),h=a(13),f=a(15),E=function(e){return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("p",{className:"title"},"Login"),r.a.createElement("form",{onSubmit:e.login},r.a.createElement("input",{className:"form-field",type:"text",name:"username",placeholder:"Username",maxLength:"20"}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-field",type:"password",name:"password",placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("button",{className:"button"},"Masuk")),r.a.createElement("br",null),r.a.createElement("p",null,"Baru pertama kali? Lakukan pendaftaran di ",r.a.createElement(u.b,{to:"/",onClick:e.showRegister},"sini")))},v=function(e){return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("p",{className:"title"},"Pendaftaran"),r.a.createElement("form",{onSubmit:e.register},r.a.createElement("input",{className:"form-field",type:"text",name:"username",placeholder:"Username (maks. 20 karakter)",maxLength:"20"}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-field",type:"password",name:"password",placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("button",{className:"button"},"Daftar")),r.a.createElement("br",null),r.a.createElement("p",null,"Sudah punya akun? Lakukan login di ",r.a.createElement(u.b,{to:"/",onClick:e.showLogin},"sini")))},b=(a(37),function(e){return r.a.createElement("div",{className:"main-header"},r.a.createElement("span",{className:"title-header"},"Oekla NIM Finder"),e.logout&&r.a.createElement(u.b,{to:"/",className:"logout-header",onClick:function(){localStorage.clear()}}," Keluar "))}),y=(a(22),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={message:null,register:!0,login:!1},a.login=function(){var e=Object(m.a)(i.a.mark(function e(t){var n,r,l,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.username.value,r=t.target.elements.password.value,e.next=5,fetch("https://api.stya.net/nim/login",{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"username=".concat(n,"&password=").concat(r)});case 5:return l=e.sent,e.next=8,l.json();case 8:s=e.sent,console.log(s),"OK"===s.status?(localStorage.setItem("token",s.token),a.props.history.push("/app")):a.setState({message:"Username atau password salah!"});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.register=function(){var e=Object(m.a)(i.a.mark(function e(t){var n,r,l,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.username.value,r=t.target.elements.password.value,e.next=5,fetch("https://api.stya.net/nim/register",{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"username=".concat(n,"&password=").concat(r)});case 5:return l=e.sent,e.next=8,l.json();case 8:s=e.sent,console.log(s),"OK"===s.status?(a.showLogin(),a.setState({message:"Akun berhasil dibuat, silahkan login menggunakan username dan password tadi"})):a.setState({message:"Username sudah digunakan, coba yang lain!"});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.showLogin=function(){a.setState({login:!0,register:!1,message:null})},a.showRegister=function(){a.setState({login:!1,register:!0,message:null})},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),this.state.message&&r.a.createElement("div",{className:"message"},this.state.message),this.state.login&&r.a.createElement(E,{login:this.login,showRegister:this.showRegister}),this.state.register&&r.a.createElement(v,{register:this.register,showLogin:this.showLogin}))}}]),t}(r.a.Component)),w=a(26),k=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.search},r.a.createElement("input",{className:"form-field",type:"text",name:"query",placeholder:"Ketikkan pencarian..."}),r.a.createElement("input",{className:"form-field",id:"count",type:"number",min:"1",name:"count",placeholder:"Jumlah per Halaman (10)"}),r.a.createElement("select",{className:"select-field",name:"type"},r.a.createElement("option",{value:"-1"},"Tipe Pencarian"),r.a.createElement("option",{value:"0"},"NIM"),r.a.createElement("option",{value:"1"},"Nama")),r.a.createElement("div",{className:"button-wrapper"},r.a.createElement("button",{className:"button"},"Cari"))))},R=(a(38),function(e){return r.a.createElement("div",{className:"main-result"},Array.isArray(e.curResult)&&0!==e.curResult.length&&r.a.createElement("table",{className:"table-result"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nama"),r.a.createElement("th",null,"NIM Jurusan"),r.a.createElement("th",null,"NIM TPB"),r.a.createElement("th",null,"Prodi")),e.curResult.map(function(e){return r.a.createElement("tr",{key:e.nim_tpb},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.nim_jur),r.a.createElement("td",null,e.nim_tpb),r.a.createElement("td",null,e.prodi))}))),r.a.createElement("p",null,e.message),Array.isArray(e.prevResult)&&0!==e.prevResult.length&&r.a.createElement("button",{id:"prev",className:"button",onClick:e.prev},"Sebelumnya"),Array.isArray(e.nextResult)&&0!==e.nextResult.length&&r.a.createElement("button",{id:"next",className:"button",onClick:e.next},"Selanjutnya"))}),x=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={prevResult:null,curResult:null,nextResult:null,page:null,message:null},a.requestAPI=function(){var e=Object(m.a)(i.a.mark(function e(t,n){var r,l,s,u,c,o,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),l=localStorage.getItem("query"),s=localStorage.getItem("count"),u=localStorage.getItem("type"),c="0"===u?"https://api.stya.net/nim/byid?query=".concat(l,"&count=").concat(s,"&page=").concat(t):"https://api.stya.net/nim/byname?name=".concat(l,"&count=").concat(s,"&page=").concat(t),e.next=7,fetch(c,{method:"GET",headers:new Headers({"Auth-Token":r})});case 7:return o=e.sent,e.next=10,o.json();case 10:"OK"===(m=e.sent).status?a.setState(Object(w.a)({},n,m.payload)):(alert("Token invalid. Silahkan lakukan login kembali."),localStorage.clear(),a.props.history.push("/"));case 12:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.search=function(e){e.preventDefault();var t=e.target.elements;localStorage.setItem("query",t.query.value),localStorage.setItem("count",t.count.value),localStorage.setItem("type",t.type.value),a.setState({prevResult:null,page:0,message:null},function(){"-1"===t.type.value?a.setState({curResult:null,nextResult:null,message:"Pilih tipe pencarian terlebih dahulu"}):(a.requestAPI(a.state.page,"curResult"),a.requestAPI(a.state.page+1,"nextResult"))})},a.next=function(){var e=a.state.nextResult,t=a.state.curResult,n=a.state.page+1;a.setState({prevResult:t,curResult:e,nextResult:[],page:n},function(){a.requestAPI(a.state.page+1,"nextResult")})},a.prev=function(){var e=a.state.prevResult,t=a.state.curResult,n=a.state.page-1;a.setState({prevResult:[],curResult:e,nextResult:t,page:n},function(){a.state.page-1<0?a.setState({prevResult:[]}):a.requestAPI(a.state.page-1,"prevResult")})},a.componentDidUpdate=function(e,t){a.state.curResult!==t.curResult&&Array.isArray(a.state.curResult)&&0===a.state.curResult.length&&a.setState({message:"Hasil tidak ditemukan"})},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{logout:!0}),r.a.createElement(k,{search:this.search}),r.a.createElement(R,{prevResult:this.state.prevResult,curResult:this.state.curResult,nextResult:this.state.nextResult,next:this.next,prev:this.prev,message:this.state.message}))}}]),t}(r.a.Component),S=function(){return r.a.createElement(u.a,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",component:y}),r.a.createElement(c.b,{path:"/app",render:function(e){return null!==localStorage.getItem("token")?r.a.createElement(x,e):r.a.createElement(c.a,{to:"/"})}})))};a(39);s.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.a299eeba.chunk.js.map