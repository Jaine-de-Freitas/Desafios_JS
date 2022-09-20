function valorCada(){
    var valor=document.getElementById('valor')
    var pessoas=document.getElementById('pessoas')
    var valorn=Number(valor.value)
    var pessoasn=Number(pessoas.value)
    var valorcada=(valorn/pessoasn).toFixed(2)
    var mostre=document.getElementById('mostrar')
    mostre.innerHTML=`O valor que cada um deve pagar é de ${valorcada}`
}
