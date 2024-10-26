'use server';

export async function errorHandling(mapErros) {
    let erros = 'Erros: \n'

    for (const erro in mapErros) {
        erros += `${mapErros[erro]}\n`;
    }

    return erros;
}