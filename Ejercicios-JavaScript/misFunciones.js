/**
 * Función que trata con conversiones de unidades: metros, pulgadas, pies y yardas.
 * @method Cambiaunidades
 * @param {string} id = el identificador del input ingresado.
 * @param {number} v = El valor de dicho ingresado por el usuario.
 * @return 
 */

function Cambiaunidades (id, v){
	if (isNaN(v)){
		alert("Valor inválido ingresado.");
		document.unidades.unid_metro.value = "";
		document.unidades.unid_pulgada.value = "";
		document.unidades.unid_pie.value = "";
		document.unidades.unid_yarda.value = "";
	}else if(id=="metro"){
		document.unidades.unid_pulgada.value = 39.3701*v;
		document.unidades.unid_pie.value = 3.28084*v;
		document.unidades.unid_yarda.value = 1.09361*v;
	}else if(id=="pulgada"){
		document.unidades.unid_metro.value=0.0254*v;
		document.unidades.unid_pie.value=0.0833333*v;
		document.unidades.unid_yarda.value=0.0277778*v;
	}else if(id=="pie"){
		document.unidades.unid_metro.value=0.3048*v;
		document.unidades.unid_pulgada.value=12*v;
		document.unidades.unid_yarda.value=0.33333*v;
	}else if(id=="yarda"){
		document.unidades.unid_metro.value=0.9144*v;
		document.unidades.unid_pulgada.value=36*v;
		document.unidades.unid_pie.value=3*v;
	}
	
}
/**
 * Función que trata con conversiones de unidades: grados y radianes.
 * @method CambiaGR
 * @param {string} id = el identificador del input ingresado.
 * @return 
 */
function CambiaGR (id){
	var grad,rad;
	if (id=="grados"){
		grad=document.getElementById("grados").value;
		rad=(grad*Math.PI)/180;
	}else if(id=="radianes"){
		rad=document.getElementById("radianes").value;
		grad=(rad*180)/Math.PI;

	}
	document.getElementById("grados").value = grad;
	document.getElementById("radianes").value = rad;
}