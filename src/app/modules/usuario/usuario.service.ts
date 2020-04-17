import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioI } from '../../shared/models/usuario.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private afs: AngularFirestore) { }

  public getAllUsers(): Observable<UsuarioI[]> {
    return this.afs.collection('usuarios')
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as UsuarioI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  public getOneUser(id: UsuarioI): Observable<UsuarioI> {
    // saber si un usuario existe
    const username = 'jcastro';
    const p = this.afs.collection<UsuarioI>('usuarios', ref => ref.where('username', '==', username)).valueChanges();
    p.subscribe(
      (res) => { console.log(res.length); },
      (err) => { console.log(err); }
    );
    return this.afs.doc<UsuarioI>(`usuarios/${id}`).valueChanges();
  }

}
