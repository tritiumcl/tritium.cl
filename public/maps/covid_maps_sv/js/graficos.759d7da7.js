(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["graficos"],{"0a07":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"grid-graficos"},[e("GraficoCasosDiarios",{staticStyle:{"grid-area":"a"},attrs:{tipoCasos:"0"}}),e("GraficoCasosDiarios",{staticStyle:{"grid-area":"b"},attrs:{tipoCasos:"2",mostrarPromedioChk:"true"}}),e("GraficoCasosDiarios",{staticStyle:{"grid-area":"c"},attrs:{tipoCasos:"1",mostrarPromedioVar:"true",mostrarPromedioChk:"true"}}),e("GraficoMuertes",{staticStyle:{"grid-area":"d"}}),e("GraficoPruebas",{staticStyle:{"grid-area":"e"}}),e("GraficoResumenDiario",{staticStyle:{"grid-area":"f"}})],1),e("Footer")],1)},r=[],s=(e("ddb0"),e("9ab4")),i=e("2b0e"),c=e("2fe1"),l=e("fd2d"),n=e("6341"),d=e("f7e4"),m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("chart",{attrs:{type:t.tipoGrafico,labels:t.labels,datasets:t.dataset,options:t.options,height:"400px"}}),t.mostrarPromedioChk?e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mostrarPromedioVar,expression:"mostrarPromedioVar"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.mostrarPromedioVar)?t._i(t.mostrarPromedioVar,null)>-1:t.mostrarPromedioVar},on:{change:function(a){var e=t.mostrarPromedioVar,o=a.target,r=!!o.checked;if(Array.isArray(e)){var s=null,i=t._i(e,s);o.checked?i<0&&(t.mostrarPromedioVar=e.concat([s])):i>-1&&(t.mostrarPromedioVar=e.slice(0,i).concat(e.slice(i+1)))}else t.mostrarPromedioVar=r}}}),t._v(" Promedio móvil 7 días ")]):t._e()],1)},p=[],h=e("60a3"),b=e("e9ea"),u=e("975c"),f=e("151c");let g=class extends i["a"]{constructor(){super(...arguments),this.fechasCasos=[],this.store=f["a"],this.labels=["Cargando..."],this.dataset=[{label:"Cargando casos...",backgroundColor:"#f87979",data:[0]}],this.options={responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{min:0}}]},title:{text:"Cargando casos...",position:"top",display:!0,fontSize:20},legend:{position:"bottom",labels:{fontColor:"#2c3e50"}}}}async watchStore(){console.log("Store changed"),await this.init()}async watchMostrarPromedioVar(){console.log("mostrarPromedioVar changed"),await this.init()}async init(){const t=await f["a"].getMuertes();this.options.title&&(this.options.title.text="Muertes totales El Salvador"),this.labels=t.map(t=>t.date);let a=new u["a"]("Muertes totales acumuladas",t.map(t=>t.total_deaths),"red");a.borderWidth=1.5;let e=new u["a"]("Muertes diarias",t.map(t=>t.new_deaths),"darkblue");e.type="bar",this.dataset=[a,e]}mounted(){this.init().catch(t=>console.error(t))}};Object(s["a"])([Object(h["b"])({default:"line"})],g.prototype,"tipoGrafico",void 0),Object(s["a"])([Object(h["b"])()],g.prototype,"tipoCasos",void 0),Object(s["a"])([Object(h["b"])({default:!1})],g.prototype,"mostrarPromedioChk",void 0),Object(s["a"])([Object(h["b"])({default:!1})],g.prototype,"mostrarPromedioVar",void 0),Object(s["a"])([Object(h["d"])("store")],g.prototype,"watchStore",null),Object(s["a"])([Object(h["d"])("mostrarPromedioVar")],g.prototype,"watchMostrarPromedioVar",null),g=Object(s["a"])([Object(h["a"])({components:{Chart:b["a"]}})],g);var y=g,P=y,v=e("2877"),C=Object(v["a"])(P,m,p,!1,null,null,null),O=C.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("chart",{attrs:{type:t.tipoGrafico,labels:t.labels,datasets:t.dataset,options:t.options,height:"400px"}}),t.mostrarPromedioChk?e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mostrarPromedioVar,expression:"mostrarPromedioVar"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.mostrarPromedioVar)?t._i(t.mostrarPromedioVar,null)>-1:t.mostrarPromedioVar},on:{change:function(a){var e=t.mostrarPromedioVar,o=a.target,r=!!o.checked;if(Array.isArray(e)){var s=null,i=t._i(e,s);o.checked?i<0&&(t.mostrarPromedioVar=e.concat([s])):i>-1&&(t.mostrarPromedioVar=e.slice(0,i).concat(e.slice(i+1)))}else t.mostrarPromedioVar=r}}}),t._v(" Promedio móvil 7 días ")]):t._e()],1)},j=[];let V=class extends i["a"]{constructor(){super(...arguments),this.fechasCasos=[],this.store=f["a"],this.labels=["Cargando..."],this.dataset=[{label:"Cargando pruebas...",backgroundColor:"#f87979",data:[0]}],this.options={responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{min:0}}]},title:{text:"Cargando casos...",position:"top",display:!0,fontSize:20},legend:{position:"bottom",labels:{fontColor:"#2c3e50"}}}}async watchStore(){console.log("Store changed"),await this.init()}async watchMostrarPromedioVar(){console.log("mostrarPromedioVar changed"),await this.init()}async init(){const t=await f["a"].getPruebas();this.options.title&&(this.options.title.text="Pruebas totales El Salvador"),this.labels=t.map(t=>t.date);let a=new u["a"]("Pruebas totales acumuladas",t.map(t=>t.total_tests),"red");a.borderWidth=1.5;let e=new u["a"]("Pruebas diarias",t.map(t=>t.new_tests),"darkblue");e.type="bar",this.dataset=[a,e]}mounted(){this.init().catch(t=>console.error(t))}};Object(s["a"])([Object(h["b"])({default:"line"})],V.prototype,"tipoGrafico",void 0),Object(s["a"])([Object(h["b"])()],V.prototype,"tipoCasos",void 0),Object(s["a"])([Object(h["b"])({default:!1})],V.prototype,"mostrarPromedioChk",void 0),Object(s["a"])([Object(h["b"])({default:!1})],V.prototype,"mostrarPromedioVar",void 0),Object(s["a"])([Object(h["d"])("store")],V.prototype,"watchStore",null),Object(s["a"])([Object(h["d"])("mostrarPromedioVar")],V.prototype,"watchMostrarPromedioVar",null),V=Object(s["a"])([Object(h["a"])({components:{Chart:b["a"]}})],V);var k=V,x=k,S=Object(v["a"])(x,w,j,!1,null,null,null),_=S.exports;let A=class extends i["a"]{constructor(){super(...arguments),this.store=f["a"],this.deathLabels=["Cargando..."],this.deathDS=[{label:"Cargando casos...",backgroundColor:"#f87979",data:[0]}],this.deathOptions={responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{min:0}}],xAxes:[{scaleLabel:{labelString:"Fuente: https://ourworldindata.org/",display:!0,fontSize:10}}]},title:{text:"Cargando casos...",position:"top",display:!0,fontSize:20},legend:{position:"bottom",labels:{fontColor:"#2c3e50"}}}}async init(){const t=await f["a"].getFechasCasos(),a=await f["a"].obtenerCasosDiarios(t[t.length-1],"reload"),e=[];for(let s=0;s<8;s++)e.push(f["a"].getHistCasosDiariosMunicipio(a[s].id_municipio));await Promise.all(e),console.log("prefetch completed...");const o=await f["a"].getMuertes();this.deathOptions.title&&(this.deathOptions.title.text="Muertes totales El Salvador"),this.deathLabels=o.map(t=>t.date);let r=new u["a"]("Muertes totales acumuladas",o.map(t=>t.total_deaths),"red");r.borderWidth=1.5,this.deathDS=[r]}created(){this.init().catch(t=>console.log(t))}};A=Object(s["a"])([Object(c["b"])({name:"Gráficos",components:{Footer:l["a"],GraficoResumenDiario:n["a"],GraficoCasosDiarios:d["a"],GraficoMuertes:O,GraficoPruebas:_,Chart:b["a"]}})],A);var G=A,M=G,D=(e("8512"),Object(v["a"])(M,o,r,!1,null,"672a1120",null));a["default"]=D.exports},"65b9":function(t,a,e){},8512:function(t,a,e){"use strict";var o=e("65b9"),r=e.n(o);r.a}}]);
//# sourceMappingURL=graficos.759d7da7.js.map