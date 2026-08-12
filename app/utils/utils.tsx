
function irParaSecao(id: string) {
    const secao = document.getElementById(id);
    if (secao) {
        secao.scrollIntoView({ behavior: 'smooth' });
    }
}

export { irParaSecao };