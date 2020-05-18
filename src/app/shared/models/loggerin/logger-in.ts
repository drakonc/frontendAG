import { ReadeUsuarioI } from '../../../modules/usuario/models';

export interface Loggerin {
    token: string;
    user: ReadeUsuarioI;
}
