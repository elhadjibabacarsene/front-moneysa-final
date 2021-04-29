import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'filter'
})
export class PipeFilterService implements PipeTransform {
  transform(items: any, filter: any, isAnd: boolean): any {
    // On vérifie si les données existes
    if (filter && Array.isArray(items)) {
      // On extrait les keys de l'objet à filtrer
      const filterKeys = Object.keys(filter);
      if (isAnd) {// True strict filter, false unstrict filter
        return items.filter(item =>
          filterKeys.reduce((memo, keyName) =>
            // On contrôle pour clé
            (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === '', true));
      } else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {// Vérifie si un élément du tableau passe le test
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === '';
          });
        });
      }
    }else{
      return items;
    }
  }
}
