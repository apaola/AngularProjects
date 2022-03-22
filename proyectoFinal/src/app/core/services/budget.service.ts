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
  angularFirestore: any;
  //dbList: AngularFirestoreCollection<any>;

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

    /*this.dbList = this.db.collection<any>('/categorias/', ref => {
      return ref.where('id','==','TkhBD9Wb9H3yAyp3OUVC');
    });*/

    this.form = this.formBuilder.group({
      cantidad: ['', [Validators.required, Validators.min(10)]],
      fecha: ['', [Validators.required]],
      cuenta: ['', [Validators.required]]
    });
  }

  /*getAllDocs() {
    this.db.collection("transacciones").snapshotChanges().pipe(map(
      changes => {
        return changes.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id }
        });
      }
      )).subscribe(items => {
        const promises: any[] = [];

        items.forEach(item => {
          promises.push(this.angularFirestore.collection('categorias').doc(item.id));
        });
        return Promise.all(promises);
        console.log(items);
      })

  }*/

  /*public async getCollectionRef(entity: string): Promise<AngularFirestoreCollection<unknown>> {
    const ref = this.
          collection(entity);
    return ref;
  }*/

  /*getCollection(): AngularFirestoreCollection<any> {
    return this.dbList;
  }

  getObservable(): Observable<any[]> {
    return this.dbList.valueChanges();
    // or return this.dblist.snapshotChanges();
  }*/

  getAll() {
    return this.transaction;
  }

  getTransaction(id: string) {
    return this.transactionCollection.doc<any>(id).valueChanges();
  }

  create(transaction: Transaction) {
    return this.transactionCollection.add(transaction);
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

  get cantidad() {
    return this.form.get("cantidad");
  }

  get fecha() {
    return this.form.get("fecha");
  }

  get cuenta() {
    return this.form.get("cuenta");
  }
}
