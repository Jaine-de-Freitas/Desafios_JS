function media(){
    var nota1=document.getElementById('nota1')
    var nota2=document.getElementById('nota2')
    var nota3=document.getElementById('nota3')
    var nota4=document.getElementById('nota4')
    var nota1n=Number(nota1.value)
    var nota2n=Number(nota2.value)
    var nota3n=Number(nota3.value)
    var nota4n=Number(nota4.value)
    var media=((nota1n+nota2n+nota3n+nota4n)/4).toFixed(1)
    var mostre=document.getElementById('mostrar')
    if(media>=7){
        mostre.innerHTML=`Parabéns,você foi aprovado! Média ${media}`
    }else{
        mostre.innerHTML=`Você foi reprovado! Média ${media}`
    }
}