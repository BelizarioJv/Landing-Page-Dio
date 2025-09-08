while(true){
    let nameHero = prompt("Digite o nome do heroi: ");
    let expHero = parseInt(prompt("Digite a quantidade de Exp do Heroi: "));

    const hero = {
        name: nameHero,
        exp: expHero ,
        rank : undefined
    };

    if (hero.exp >= 7000) {
        hero.rank = "Diamante";
    } else if (hero.exp >= 5000) {
        hero.rank = "Ouro";
    } else if (hero.exp >= 3000) {
        hero.rank = "Prata";
    } else if (hero.exp >= 1000) {
        hero.rank = "Bronze";
    } else {
        hero.rank = "Sem rank";
    }

    console.log(`O rank do heroi ${hero.name} é ${hero.rank}`);

    continuar = prompt("Deseja cadastrar outro heroi ? S(sim) N(nao)");
    if(continuar.toLowerCase() !== 's'){
        break
    }
}
