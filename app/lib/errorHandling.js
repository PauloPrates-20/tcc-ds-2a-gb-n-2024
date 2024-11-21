'use server';

export async function errorHandling(mapErros) {
    let erros = []

    for (const erro in mapErros) {
        erros.push(mapErros[erro]);
    }

    return erros;
}