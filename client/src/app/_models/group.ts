export interface Group {
    name: string;
    connections: Connecion[];
}

interface Connecion {
    connectionId: string;
    username: string;
}