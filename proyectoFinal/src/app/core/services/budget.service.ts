import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Category } from '../models/category';
import { Transaction } from '../models/transaction';
import { Type } from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  
  public form: FormGroup;

  types?: Category[];

  private transactionCollection: AngularFirestoreCollection<Transaction>;
  private transaction: Observable<Transaction[]>;

  constructor(private db: AngularFirestore, private formBuilder: FormBuilder) { 
    this.transactionCollection = db.collection<Transaction>('/transacciones');
    this.transaction = this.transactionCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }
    ));

    this.form = this.formBuilder.group({
      cantidad: ['', [Validators.required, Validators.min(10)]],
      fecha: ['',[Validators.required]],
      idCategoria: ['']
    });
  }

  getAll() {
    return this.transaction;
  }

  getTransaction(id: string) {
    return this.transactionCollection.doc<any>(id).valueChanges();
  }

  create(category: Transaction) {
    return this.transactionCollection.add(category);
  }

  update(id: string, data: any) {
    return this.transactionCollection.doc(id).update(data);
  }

  delete(id: string) {
    return this.transactionCollection.doc(id).delete();
  }

  size() {
    this.db.collection("transacciones").get().subscribe(res => { 
      console.log(res.size)
    });
  }

  getTypes(tipo: Type) {
    return this.types?.filter( t => t.tipo === tipo);
  }

  get cantidad() {
    return this.form.get("cantidad");
  }

  get fecha() {
    return this.form.get("fecha");
  }
}
