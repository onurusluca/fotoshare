(function(e){function t(t){for(var o,a,u=t[0],i=t[1],l=t[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02b0":function(e,t,n){"use strict";n("5bb2")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},2:function(e,t){},2525:function(e,t,n){},3:function(e,t){},4:function(e,t){},"4e9e":function(e,t,n){"use strict";n("2525")},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,c,a){var u=Object(o["h"])("Home");return Object(o["g"])(),Object(o["c"])(u)}var c={id:"home"},a=Object(o["f"])("h1",null,[Object(o["f"])("a",{class:"logo",href:"/"},"FotoShare")],-1),u=Object(o["f"])("h3",null,"Upload a Photo",-1),i=Object(o["f"])("p",{style:{color:"red"}}," This is a test app. Please do not share private photos. ",-1),l={key:0},s={key:0},f=Object(o["f"])("div",{class:"b-text"},[Object(o["f"])("p",null,[Object(o["e"])(" Handcrafted with love and care by "),Object(o["f"])("a",{target:"_blank",href:"https://onurusluca.me/"},"Onur Usluca")])],-1);function p(e,t,n,r,p,b){var d=Object(o["h"])("Progress"),h=Object(o["h"])("Image");return Object(o["g"])(),Object(o["c"])("div",c,[a,Object(o["l"])(Object(o["f"])("div",null,[u,Object(o["f"])("input",{class:"btn",type:"button",id:"get-file",value:"Choose a file",onClick:t[1]||(t[1]=function(){return b.chooseFile.apply(b,arguments)})}),Object(o["f"])("input",{type:"file",id:"my-file",onChange:t[2]||(t[2]=function(){return b.prevImg.apply(b,arguments)}),accept:"image/*",hidden:""},null,32),i],512),[[o["j"],!p.start&!p.img]]),Object(o["f"])(o["a"],{name:"fade-in"},{default:Object(o["k"])((function(){return[p.start?(Object(o["g"])(),Object(o["c"])("div",l,[Object(o["f"])(d,{value:p.uploadValue},null,8,["value"])])):Object(o["d"])("",!0)]})),_:1}),Object(o["f"])(o["a"],{name:"fade-in"},{default:Object(o["k"])((function(){return[p.img?(Object(o["g"])(),Object(o["c"])("div",s,[Object(o["f"])(h,{src:p.picture},null,8,["src"])])):Object(o["d"])("",!0)]})),_:1}),f])}n("b0c0"),n("96cf");var b=n("1da1"),d=n("2591"),h={id:"image"},j=Object(o["f"])("h2",null,"Upload Successful",-1),O=Object(o["f"])("a",{href:""},null,-1),g=Object(o["f"])("br",null,null,-1),v=Object(o["e"])("Copy The Code "),m={class:"copied"};function y(e,t,n,r,c,a){return Object(o["g"])(),Object(o["c"])("div",h,[j,Object(o["f"])("a",{class:"link",target:"_blank",href:n.src},"Image Link",8,["href"]),O,Object(o["f"])("button",{onClick:t[1]||(t[1]=function(){return a.shorter.apply(a,arguments)})},"Get Short URL"),g,Object(o["l"])(Object(o["f"])("input",{class:"copy",type:"text",value:c.urlShare,id:"copyCode"},null,8,["value"]),[[o["j"],c.showShort]]),Object(o["l"])(Object(o["f"])("span",{onClick:t[2]||(t[2]=Object(o["m"])((function(){return a.copyURL.apply(a,arguments)}),["prevent"]))},[v,Object(o["l"])(Object(o["f"])("p",m,"Code copied!",512),[[o["j"],c.copied]])],512),[[o["j"],c.showShort]]),Object(o["f"])("a",{target:"_blank",href:c.urlShare},[Object(o["f"])("img",{src:n.src,alt:"Uploaded Picture"},null,8,["src"])],8,["href"])])}var w=n("5c6b"),S={name:"Image",props:["src"],data:function(){return{urlShare:null,showShort:!1,copied:!1}},methods:{shorter:function(){var e=this;w.short(this.src,(function(t,n){e.urlShare=n,console.log(e.urlShare)})),this.showShort=!0},copyURL:function(){var e=this,t=document.querySelector("#copyCode");t.setAttribute("type","text"),t.select();try{this.copied=!0,setTimeout((function(){e.copied=!1}),3e3)}catch(n){alert("Oops, unable to copy")}}}};n("9937");S.render=y;var k=S,x={id:"progress"},P=Object(o["f"])("p",null,"Uploading... Please wait.",-1);function U(e,t,n,r,c,a){return Object(o["g"])(),Object(o["c"])("div",x,[P,Object(o["f"])("progress",{max:"100",value:n.value},null,8,["value"]),Object(o["f"])("p",null,Object(o["i"])(Math.floor(n.value))+"%",1)])}var _={name:"Progress",props:["value"],components:{},data:function(){return{}}};n("02b0");_.render=U;var C=_,F=n("11c1"),R={name:"Home",components:{Progress:C,Image:k},data:function(){return{selectedFile:null,start:!1,img:!1,picture:null,images:[],uploadValue:0}},methods:{chooseFile:function(){document.querySelector("#my-file").click()},onFileSelect:function(e){this.selectedFile=e.target.files[0]},prevImg:function(){this.uploadValue=0,this.picture=null,this.selectedFile=event.target.files[0],this.onUpload(this.selectedFile)},onUpload:function(e){var t=this;console.log(e),this.start=!0;var n=d["a"].storage().ref(" ".concat(this.selectedFile.name," ")).put(this.selectedFile);n.on("state_changed",(function(e){t.uploadValue=e.bytesTransferred/e.totalBytes*100,console.log(t.uploadValue)}),(function(e){console.log(e.message+"ERROR!")}),(function(){t.start=!1,t.img=!0,n.snapshot.ref.getDownloadURL().then((function(e){t.picture=e}))}))},afterComplete:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var o,r,c,a,u,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=F.v1(),t.isLoading=!0,n.prev=2,r=e,c={contentType:"image/png"},a=d["a"].storage().ref(),u=a.child("images/".concat(o,".png")),n.next=9,u.put(r,c);case 9:return n.next=11,u.getDownloadURL();case 11:i=n.sent,t.images.push({src:i}),t.uploadValue=100,n.next=19;break;case 16:n.prev=16,n.t0=n["catch"](2),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[2,16]])})))()}}};n("4e9e");R.render=p;var I=R,L={name:"App",components:{Home:I}};n("64be");L.render=r;var T=L,V={apiKey:"AIzaSyABmL3Ko7YZKogXTFEJz42iD31KTp4yj5s",authDomain:"foto-share-b7456.firebaseapp.com",databaseURL:"https://foto-share-b7456.firebaseio.com",projectId:"foto-share-b7456",storageBucket:"foto-share-b7456.appspot.com",messagingSenderId:"752423214389",appId:"1:752423214389:web:47d5f5cadedfb41109007c"};d["a"].initializeApp(V),Object(o["b"])(T).mount("#app")},"5bb2":function(e,t,n){},6:function(e,t){},"64be":function(e,t,n){"use strict";n("c894")},7:function(e,t){},8:function(e,t){},"89e0":function(e,t,n){},9:function(e,t){},9937:function(e,t,n){"use strict";n("89e0")},c894:function(e,t,n){}});
//# sourceMappingURL=app.2e387cdc.js.map