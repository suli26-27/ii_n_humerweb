import { Service } from '@angular/core';

@Service()
export class EmpApiService {

empList = [
    { id: 1, name: 'Erős István', city: 'Szeged', salary: 395},
    { id: 2, name: 'Lapi Gergő', city: 'Szeged', salary: 395},
    { id: 3, name: 'Fontos Ferenc', city: 'Pécs', salary: 398},
    { id: 4, name: 'Látó Mihály', city: 'Szeged', salary: 395},
    { id: 5, name: 'Trón Árpád', city: 'Szeged', salary: 392},
  ]

    getEmployees() {
        //backend lesz
        return this.empList
    }
}
