import { RolI } from '../../../shared/models/rol/rol.interface';

export interface ReadeUsuarioI {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    username: string;
    status: string;
    role: RolI;
}
