import { Injectable } from '@angular/core';
import { DataService } from 'app/core-module/http/data.service';
import { Faculty } from 'app/model-module/model/user/faculty';
import { Observable } from 'rxjs';

export enum Api {
  FACULTIES_RESOURCE = '/api/faculty'
}

/**
 * Provides resources for working with faculties
 */
@Injectable({ providedIn: "root" })
export class FacultyRepository {

  constructor(private dataService: DataService) { }

  /**
   * Returns faculties
   */
  public getFaculties(): Observable<Faculty[]> { 
    const uri = `${Api.FACULTIES_RESOURCE}`;
    return this.dataService.get<Faculty[]>(uri);
  }
}