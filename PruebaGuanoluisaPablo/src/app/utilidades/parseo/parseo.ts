export function parsearErroresAPI(response: any): string[]
{
    const resultado: string[] = [];

    if(response.error)
    {
        if(typeof response.error === 'string')
        {
            resultado.push(response.error);
        }else if (Array.isArray(response.error))
        {
            response.error.forEach(valor => resultado.push(valor.description));
            
        }else{
            const mapaErrores = response.errors;
            const entradas = Object.entries(mapaErrores);
            entradas.forEach((arreglo: any[])=>{
                const campo = arreglo[0];
                arreglo[1].forEach(mensajeError => {
                    resultado.push(`${campo}:${mensajeError}`);
                });
            })
        }
    }
    return resultado;
}