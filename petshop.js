let listaDepets = ["Bilu", "Cachorro", "Tina"];

function addPet(nome){
    listaDepets.push(nome);
    return "O pet " + nome + " foi adicionado ao sistema."
};

function listarPets(){
    let conteudo = "";
    listaDepets.forEach(function(petNome){
        // conteudo += "---------------------------\n nome do pet: "+petNome;

        conteudo += `
        ----------------------
        Nome do pet: ${petNome}
        `
    })
    return conteudo;
    // for(let pet of listaDepets){
    //     
    //     return `-------------------\n Nome do pet: ${pet}\n`
    // }
}

module.exports = {listarPets, addPet}