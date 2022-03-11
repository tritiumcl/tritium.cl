import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import {tooltip} from './tooltip.js';
import {agregarTodos} from './casos.js';

var app = new Vue({
	el: '#app',
	data: {
		maxVal: 0,
		total: 0,
		ultimo: null,
		tablaMunicipios: []
	},
	methods: {
		resaltarMunicipio: function(muni,resaltar){
			if(resaltar == undefined) resaltar = true;

			if(resaltar){
				muni.originalFill = muni.element.style.fill;
				for(let e of muni.elements)
					e.style.fill = 'gray';
				
			}else{
				for(let e of muni.elements)
					e.style.fill = muni.originalFill;
			}
			
			
		},
		cleanUpSpecialChars: function(str){
			return str.toLowerCase()
				.replace(/[àáâãäå]/gi,"a")
				.replace(/[èéê]/gi,"e")
				.replace(/[ìíî]/gi,"i")
				.replace(/[òóô]/gi,"o")
				.replace(/[ùúû]/gi,"u")
				.replace(/[ñ]/gi,"n")
				.replace(/[^a-z0-9 ]/gi,''); // final clean up
		},
		agregar: function(depa,muni,pnum){
			depa = this.cleanUpSpecialChars(depa);
			muni = this.cleanUpSpecialChars(muni);
			let num  = parseInt(pnum);
			
			if(num > this.maxVal) this.maxVal = num;
			this.total += num;
			
			if(depa == "") depa = this.ultimo;
			else this.ultimo = depa;
			const d = departamentos[depa];
			if(d) {
				const m = d.municipios[muni];
				if(m){
					m.num = num;
				}else
					console.error(muni,"m not found",m);
			} else console.error(depa,"d not found",d);
		},
		mostrar: function(){

			this.tablaMunicipios = [];
		
			for(let x in departamentos){
				for(let m in departamentos[x].municipios){
					let muni = departamentos[x].municipios[m];
					
					let num = (muni.num?muni.num:0) * 100 / this.maxVal;
					
					if(muni.num > 0)
						this.tablaMunicipios.push({departamento:x,municipio:muni,casos:muni.num});
					
					if(muni.elements){
						for(let e of muni.elements){
							if(num > 0)
								e.style.fill = "hsl(0, 100%, "+ (100 - num - ((100 - num) * 0.05)) +"%)";
							
							e.onmouseover=() => this.resaltarMunicipio(muni)
							e.onmousemove=function(evt){tooltip.showTooltip(evt, muni.nombre + ": "+ (muni.num?muni.num:0));};
							e.onmouseout=() => {tooltip.hideTooltip();this.resaltarMunicipio(muni,false);};
						}
					} else console.warn(m,"element not found");
				}
			}

			this.tablaMunicipios.sort((a,b) => b.casos - a.casos)
		}
	},
	mounted: function () {
		let _self = this;
		window.addEventListener("load", function () {
			var svgObject = document.getElementById('mapa').contentDocument;

			for (let x in departamentos) {
				let deps = svgObject.getElementById(x);
				deps.firstElementChild.style.fill = "black";
				for (let m in departamentos[x].municipios) {
					let muni = departamentos[x].municipios[m];

					let elem = deps.getElementsByTagName('g')[m];
					if (elem) {
						//console.log(x,m);
						muni.element = elem.firstElementChild;
						muni.elements = elem.getElementsByTagName('path');
						for(let p of muni.elements)
							p.style.fill = "lightgreen"; //"hsl(0, 100%, 70%)";
					} else
						console.warn(x, m, 'not found');
				}
			}

			agregarTodos(_self.agregar);
			_self.mostrar();
		})
	}
});
