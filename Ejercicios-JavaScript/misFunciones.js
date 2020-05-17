/**
 * Función que trata con conversiones de unidades: metros, pulgadas, pies y yardas.
 * @method Cambiaunidades
 * @param {string} id = el identificador del input ingresado.
 * @param {number} v = El valor de dicho ingresado por el usuario.
 * @return 
 */

function Cambiaunidades (id, v){
	if (v.includes(",")){
		v=v.replace(",",".");
	}
	if (isNaN(v)){
		alert("Valor inválido ingresado.");
		document.unidades.unid_metro.value = "";
		document.unidades.unid_pulgada.value = "";
		document.unidades.unid_pie.value = "";
		document.unidades.unid_yarda.value = "";
	}else if(id=="metro"){
		document.unidades.unid_pulgada.value =Math.round((39.3701*v)*100)/100;
		document.unidades.unid_pie.value =Math.round((3.28084*v)*100)/100;
		document.unidades.unid_yarda.value =Math.round((1.09361*v)*100)/100;
	}else if(id=="pulgada"){
		document.unidades.unid_metro.value=Math.round((0.0254*v)*100)/100;
		document.unidades.unid_pie.value=Math.round((0.0833333*v)*100)/100;
		document.unidades.unid_yarda.value=Math.round((0.0277778*v)*100)/100;
	}else if(id=="pie"){
		document.unidades.unid_metro.value=Math.round((0.3048*v)*100)/100;
		document.unidades.unid_pulgada.value=Math.round((12*v)*100)/100;
		document.unidades.unid_yarda.value=Math.round((0.33333*v)*100)/100;
	}else if(id=="yarda"){
		document.unidades.unid_metro.value=Math.round((0.9144*v)*100)/100;
		document.unidades.unid_pulgada.value=Math.round((36*v)*100)/100;
		document.unidades.unid_pie.value=Math.round((3*v)*100)/100;
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

/**
 * Función que oculta o muestra el div cuando el input requerido es ingresado.
 * @method MuestraDIVs
 * @param {string} nombre = el valor del formulario.
 * @return 
 */
function MuestraDIVs(nombre) {
   if (nombre == "val_mostrar") {
        document.getElementById('elDiv').style.display = 'block';
   } else {
        document.getElementById('elDiv').style.display = 'none';

}}
/**
 * Función que realiza una suma entre dos números.
 * @method suma
 * @param
 * @return 
 */
function suma() {
	var n1, n2;
	n1=Number(document.getElementsByName("sum_num1")[0].value);
	n2=document.getElementsByName("sum_num2")[0].value;
	n2=document.getElementsByName("sum_total")[0].innerHTML= n1 + Number(n2);
	
}
/**
 * Función que realiza una resta entre dos números.
 * @method resta
 * @param
 * @return 
 */
function resta() {
	var n1, n2;
	n1=Number(document.getElementsByName("res_num1")[0].value);
	n2=document.getElementsByName("res_num2")[0].value;
	n2=document.getElementsByName("res_total")[0].innerHTML= n1 - Number(n2);
	
}
/**
 * Función que realiza una multiplicación entre dos números.
 * @method multip
 * @param
 * @return 
 */
function multip() {
	var n1, n2;
	n1=Number(document.getElementsByName("mul_num1")[0].value);
	n2=document.getElementsByName("mul_num2")[0].value;
	n2=document.getElementsByName("mul_total")[0].innerHTML= n1 * Number(n2);
	
}
/**
 * Función que realiza una división entre dos números.
 * @method divis
 * @param
 * @return 
 */
function divis() {
	var n1, n2;
	n1=Number(document.getElementsByName("div_num1")[0].value);
	n2=document.getElementsByName("div_num2")[0].value;
	n2=document.getElementsByName("div_total")[0].innerHTML= n1 / Number(n2);
	
}

function webload(){
	var cant, unidad, urlcomp;
	cant=document.getElementById("distancia").value;
	unidad=document.getElementsByName("unidades")[0].value;
	
	urlcomp="segundaWeb.html#" + cant + "#" + unidad;
	window.open(urlcomp);
	
}

function resultload(){
	var urlcomp, canti, unidade;
	urlcomp=window.location.href.split("/")[10];
	canti=urlcomp.split("#")[1];
	unidade=urlcomp.split("#")[2]
	
	document.getElementById("dist").value= canti + " " + unidade;
	
}