let n1,n2,n3,resultado
n1 = prompt("ingrese una nota")
n2 = prompt("ingrese segunda nota")
n3 = prompt("ingrese tercera nota")

//parseFloat() convirte a decimal un string o cadena
resultado = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3

alert(resultado)