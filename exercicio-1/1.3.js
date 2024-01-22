const caixaHotPao = (broas, paes) => {
    const pao = 0.12;
    const broa = 1.50;

    const totalVendas = pao*paes + broa*broas;

    const guardar = totalVendas / 100 * 10;
    
    console.log(`Total de vendas: ${totalVendas} Valor a guardar: ${guardar}`);

    return 
}
caixaHotPao(10, 10);