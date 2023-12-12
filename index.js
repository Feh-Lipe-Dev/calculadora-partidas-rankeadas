let knight = rank('Guerreriro', 10, 20);
let archer = rank('Arqueiro', 20, 3);
let mage = rank('Mago', 30, 25);
let thief = rank('Ladrão', 100, 50);
let king = rank('Rei', 150, 1);

console.log(knight);
console.log(archer);
console.log(mage);
console.log(thief);
console.log(king);

function rank(hero, victories, defeats){
    let level = '';
    
    if(victories < 11){
        level = 'Ferro'
    }
    else if(victories < 21){
        level = 'Bronze'
    }
    else if(victories < 51){
        level = 'Prata'
    }
    else if(victories < 81){
        level = 'Ouro'
    }
    else if(victories < 91){
        level = 'Diamante'
    }
    else if(victories < 101){
        level = 'Lendário'
    }
    else{
        level = 'Imortal'
    }
    return `Herói: ${hero} | Vitórias: ${victories} | Derrotas: ${defeats} | Nível: ${level}.`
}