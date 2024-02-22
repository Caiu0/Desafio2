let vitorias = 200
let derrotas = 35
let rank = "indefinido"
let ranks = ["Ferro", "Bronze","Prata","Ouro","Diamante","Lendário","Imortal"]
    if (vitorias <= 10){
         rank = ranks[0]
    }else if ((vitorias >= 11) && (vitorias<=20)){
         rank = ranks[1]
    }else if ((vitorias >= 21) && (vitorias<=50)){
         rank = ranks[2]
    }else if ((vitorias >= 51) && (vitorias<=80)){
         rank = ranks[3]
    }else if ((vitorias >= 81) && (vitorias<=90)){
         rank = ranks[4]
    }else if ((vitorias >= 91) && (vitorias<=100)){
         rank = ranks[5]
    }else if (vitorias >= 101){
        rank = ranks[6]
    }
function saldo (vitorias, derrotas) {
    
    return vitorias - derrotas
}

    
    let saldovit = saldo(vitorias,derrotas)
console.log("O Herói tem de saldo de : " + saldovit + " está no nível de: " + rank
)