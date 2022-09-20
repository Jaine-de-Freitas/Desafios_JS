function vizinhos(){
    var num1=document.getElementById('num1')
    var num1n=Number(num1.value)
    var anterior=num1n-1
    var posterior=num1n+1
    var mostre=document.getElementById('mostrar')
    mostre.innerHTML=`Os números vizinhos de ${num1n} são ${anterior} e ${posterior}`
}