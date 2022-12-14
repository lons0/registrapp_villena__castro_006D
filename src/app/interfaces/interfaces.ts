export interface RespuestaFeriados{
    status: string;
    data: Feriado[];
}
export  interface Feriado{
    date: string;
    title: string;
    type: string;
    inalineable: boolean;
    extra: string;
}


