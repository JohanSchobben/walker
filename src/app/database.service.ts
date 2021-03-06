import { Injectable, OnDestroy, Inject } from '@angular/core';
import { DB_VERSION, DB_NAME } from './database.const';
import { Observable, from } from 'rxjs';
import {openDB, IDBPDatabase, IDBPTransaction} from 'idb';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements OnDestroy{
  private database: Promise<IDBPDatabase>;

  constructor(
    @Inject(DB_VERSION) private readonly dbVersion: number,
    @Inject(DB_NAME) private readonly dbName: string
  ) {
    this.database = openDB(this.dbName, this.dbVersion, {
      upgrade(db: IDBPDatabase<any>, oldVersion: number, newVersion: number, transaction): void {
        if (!db.objectStoreNames.contains('sprints')) {
          const sprintOS = db.createObjectStore('sprints', {keyPath: 'id'});
          sprintOS.createIndex('startDate', 'stardate', {unique: true});
        }
        if (!db.objectStoreNames.contains('profile')) {
          db.createObjectStore('profile', {autoIncrement: true});
        }
      },
    });
   }

  public getDatabase(): Observable<any> {
    return from(this.database);
  }

  public read(objectStore: string): Observable<any> {
    const transaction = this.database
    .then(idb => {
      const tx = idb.transaction(objectStore, 'readonly');
      const store = tx.objectStore(objectStore);
      return store.getAll();
    });
    return from(transaction);
  }


  public readById(objectStore: string, id: string | number): Observable<any> {
    const transaction = this.database
    .then(idb => {
      const tx = idb.transaction(objectStore, 'readonly');
      const store = tx.objectStore(objectStore);
      return store.get(id);
    });
    return from(transaction);
  }

  public create(objectStore: string, data: any): Observable<any> {
    const transaction = this.database
      .then(idb => {
        const tx = idb.transaction(objectStore, 'readwrite');
        const store = tx.objectStore(objectStore)
        return store.add(data);
      });
    return from(transaction);
  }

  public update(objectStore: string, data: any): Observable<any> {
    const transaction = this.database
    .then(idb => {
      const tx = idb.transaction(objectStore, 'readwrite');
      const store = tx.objectStore(objectStore)
      return store.put(data);
    });
  return from(transaction);
  }

  public deleteAll(objectStore: string): Observable<void> {
    const transaction = this.database
      .then(idb => {
        const tx = idb.transaction(objectStore, 'readwrite');
        const store = tx.objectStore(objectStore)
        return store.clear();
      });
    return from(transaction);
  }

  ngOnDestroy(): void {
    this.database.then(db => db.close());
  }
}
