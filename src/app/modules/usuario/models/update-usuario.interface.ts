export interface UpdateUsuarioI {
    id?: number;
    nombre: string;
    apellido: string;
    username?: string;
    password: string;
    correo?: string;
    role: number;
}
