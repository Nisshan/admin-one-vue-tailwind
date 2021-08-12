"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[162],{5916:function(e,t,l){l.d(t,{Z:function(){return v}});var n=l(6252),o=l(3577);const a={class:"flex items-center justify-center flex-col md:flex-row text-2xl text-gray-500 mb-12"},r=(0,n._)("span",{class:"md:mr-3"},"Please star this project on",-1),i={href:"https://github.com/justboil/admin-one-vue-tailwind",class:"inline-flex items-center justify-center text-blue-500",target:"_blank"},u=(0,n._)("span",null,"GitHub",-1),s={class:"text-2xl text-gray-500"},c=(0,n.Uk)(" Check out other components and layouts at"),p=(0,n._)("br",null,null,-1),d=(0,n.Uk)(", "),m=(0,n._)("br",null,null,-1),f=(0,n.Uk)(" screen samples ");function g(e,t,l,g,h,y){const w=(0,n.up)("icon"),b=(0,n.up)("router-link"),x=(0,n.up)("titled-section");return(0,n.wg)(),(0,n.j4)(x,{last:""},{default:(0,n.w5)((()=>[(0,n._)("h1",a,[r,(0,n._)("a",i,[(0,n.Wm)(w,{path:g.mdiGithub,size:"36",class:"mr-1"},null,8,["path"]),u])]),(0,n._)("h1",s,[c,p,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(g.screens,((e,t)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:e.path},[(0,n.Wm)(b,{to:e.path,class:"text-blue-500"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.title),1)])),_:2},1032,["to"]),t+1<g.screens.length?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[d],64)):(0,n.kq)("",!0)],64)))),128)),m,f])])),_:1})}var h=l(2119),y=l(5317),w=l(9602),b=l(1754),x={name:"BottomOtherPagesSection",components:{TitledSection:w.Z,Icon:b.Z},setup(){const e=(0,h.tv)(),t=e.getRoutes(),l=[];for(const n in t){const e=t[n].path,o=t[n].meta&&t[n].meta.title?t[n].meta.title:null;o&&l.push({path:e,title:o})}return{screens:l,mdiGithub:y.LcO}}};x.render=g;var v=x},9164:function(e,t,l){l.d(t,{Z:function(){return w}});var n=l(6252),o=l(3577),a=l(9963);const r={class:"relative"},i=["name","id"],u=["value"],s=["name","id","placeholder","required"],c=["name","autocomplete","required","id","placeholder","type"];function p(e,t,l,p,d,m){const f=(0,n.up)("control-icon");return(0,n.wg)(),(0,n.iD)("div",r,["select"===p.computedType?(0,n.wy)(((0,n.wg)(),(0,n.iD)("select",{key:0,"onUpdate:modelValue":t[0]||(t[0]=e=>p.computedValue=e),name:l.name,id:l.id,class:(0,o.C_)(p.inputElClass)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.options,(e=>((0,n.wg)(),(0,n.iD)("option",{key:e.id??e,value:e},(0,o.zw)(e.label??e),9,u)))),128))],10,i)),[[a.bM,p.computedValue]]):"textarea"===p.computedType?(0,n.wy)(((0,n.wg)(),(0,n.iD)("textarea",{key:1,"onUpdate:modelValue":t[1]||(t[1]=e=>p.computedValue=e),class:(0,o.C_)(p.inputElClass),name:l.name,id:l.id,placeholder:l.placeholder,required:l.required},null,10,s)),[[a.nr,p.computedValue]]):(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:2,"onUpdate:modelValue":t[2]||(t[2]=e=>p.computedValue=e),name:l.name,autocomplete:l.autocomplete,required:l.required,id:l.id,placeholder:l.placeholder,type:p.computedType,class:(0,o.C_)(p.inputElClass)},null,10,c)),[[a.YZ,p.computedValue]]),l.icon?((0,n.wg)(),(0,n.j4)(f,{key:3,icon:l.icon,h:p.controlIconH},null,8,["icon","h"])):(0,n.kq)("",!0)])}var d=l(2262);function m(e,t,l,o,a,r){const i=(0,n.up)("icon");return(0,n.wg)(),(0,n.j4)(i,{path:l.icon,w:"w-10",h:l.h,class:"absolute top-0 left-0 z-10 pointer-events-none text-gray-500"},null,8,["path","h"])}var f=l(1754),g={name:"ControlIcon",components:{Icon:f.Z},props:{icon:String,h:String}};g.render=m;var h=g,y={name:"Control",components:{ControlIcon:h},props:{name:String,id:String,required:Boolean,autocomplete:String,placeholder:String,icon:String,options:Array,type:{type:String,default:"text"},modelValue:{type:[String,Number,Boolean,Array,Object],default:""}},emits:["update:modelValue","right-icon-click"],setup(e,{emit:t}){const l=(0,d.Fl)({get:()=>e.modelValue,set:e=>{t("update:modelValue",e)}}),n=(0,d.Fl)((()=>{const t=["px-3 py-2 max-w-full focus:ring focus:outline-none border border-gray-700 rounded w-full","textarea"===o.value?"h-24":"h-12"];return e.icon&&t.push("pl-10"),t})),o=(0,d.Fl)((()=>e.options?"select":e.type)),a=(0,d.Fl)((()=>"textarea"===e.type?"h-full":"h-12"));return{computedValue:l,inputElClass:n,computedType:o,controlIconH:a}}};y.render=p;var w=y},8630:function(e,t,l){l.d(t,{Z:function(){return p}});var n=l(6252),o=l(3577);const a={class:"mb-6 last:mb-0"},r={key:0,class:"block font-bold mb-2"},i={key:1,class:"text-xs text-gray-500 mt-1"};function u(e,t,l,u,s,c){return(0,n.wg)(),(0,n.iD)("div",a,[l.label?((0,n.wg)(),(0,n.iD)("label",r,(0,o.zw)(l.label),1)):(0,n.kq)("",!0),(0,n._)("div",{class:(0,o.C_)(u.wrapperClass)},[(0,n.WI)(e.$slots,"default")],2),l.help?((0,n.wg)(),(0,n.iD)("div",i,(0,o.zw)(l.help),1)):(0,n.kq)("",!0)])}var s=l(2262),c={name:"Field",props:{label:String,help:String},setup(e,{slots:t}){const l=(0,s.Fl)((()=>{const e=[],l=t.default().length;return l>1&&e.push("grid grid-cols-1 gap-3"),2===l&&e.push("md:grid-cols-2"),e}));return{wrapperClass:l}}};c.render=u;var p=c},688:function(e,t,l){l.d(t,{Z:function(){return g}});var n=l(6252),o=l(3577);const a={class:"flex items-stretch justify-start relative"},r={class:"inline-flex"},i=["accept"],u={key:0},s={class:"inline-flex px-4 py-2 justify-center bg-gray-100 border-gray-200 border rounded-r"};function c(e,t,l,c,p,d){const m=(0,n.up)("jb-button");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("label",r,[(0,n.Wm)(m,{as:"a",label:"Upload",icon:c.mdiUpload,color:"info",class:(0,o.C_)({"rounded-r-none":c.file})},null,8,["icon","class"]),(0,n._)("input",{type:"file",ref:"input",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:l.accept,onInput:t[0]||(t[0]=(...e)=>d.upload&&d.upload(...e))},null,40,i)]),c.file?((0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("span",s,(0,o.zw)(c.file.name),1)])):(0,n.kq)("",!0)])}var p=l(2262),d=l(5317),m=l(1801),f={name:"FilePicker",components:{JbButton:m.Z},props:{modelValue:[Object,File,Array],label:String,icon:String,accept:{type:String,default:null}},emits:["update:modelValue"],setup(e){const t=(0,p.iH)(e.modelValue);return{file:t,mdiUpload:d.xyB}},methods:{upload(e){const t=e.target.files||e.dataTransfer.files;this.file=t[0],this.$emit("update:modelValue",this.file)}},watch:{modelValue(e){this.file=e,e||(this.$refs.input.value=null)}}};f.render=c;var g=f},9602:function(e,t,l){l.d(t,{Z:function(){return u}});var n=l(6252),o=l(3577);const a={key:1,class:"text-2xl text-gray-500"};function r(e,t,l,r,i,u){return(0,n.wg)(),(0,n.iD)("section",{class:(0,o.C_)(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",[l.last?"-mt-6":"-mb-6"]])},[l.custom?(0,n.WI)(e.$slots,"default",{key:0}):((0,n.wg)(),(0,n.iD)("h1",a,[(0,n.WI)(e.$slots,"default")]))],2)}var i={name:"TitledSection",props:{custom:Boolean,last:Boolean}};i.render=r;var u=i}}]);
//# sourceMappingURL=162.ed353f1c.js.map