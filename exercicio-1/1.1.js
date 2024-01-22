
const dimensoesTerreno = (comprimento, largura) => {
    const area = comprimento * largura;
    return area;
}

console.log(`Área do terreno: ${dimensoesTerreno(10,10)}`);