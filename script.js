document.querySelector(".plus").onclick=function(){
	let n1=document.querySelector(".number1").value;
	let n2=document.querySelector(".number2").value;
	alert(parseInt(n1)+parseInt(n2))
}
document.querySelector(".minus").onclick=function(){
	let n1=document.querySelector(".number1").value;
	let n2=document.querySelector(".number2").value;
	alert(parseInt(n1)-parseInt(n2))
}
document.querySelector(".umn").onclick=function(){
	let n1=document.querySelector(".number1").value;
	let n2=document.querySelector(".number2").value;
	alert(parseInt(n1)*parseInt(n2))
}
document.querySelector(".del").onclick=function(){
	let n1=document.querySelector(".number1").value;
	let n2=document.querySelector(".number2").value;
	alert(parseInt(n1)/parseInt(n2))
}