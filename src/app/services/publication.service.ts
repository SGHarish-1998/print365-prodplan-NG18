import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PublicationService {
  private apiUrl = 'http://localhost:51899/api/Publications?date=2025-05-07';

  private jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiJiMjc1MjUyNGI0NDU0NzlkYmRiZTI2NzBmMTMxYjQ3ZSIsImVtYWlsIjoic3VwcG9ydEBtd20uc2UiLCJnaXZlbl9uYW1lIjoiTVdNIiwidW5pcXVlX25hbWUiOiJtd20iLCJyb2xlIjpbIkFkbWluaXN0cmF0b3IiLCJQcm9kUGxhbi1HdWVzdCIsInRlc3QzYiIsInRlc3QtcG9ydGFsLXJvbGwiLCJQcm9kUGxhbiJdLCJwcml2IjpbIkNvbXBhbnk6NTFjOCIsIlBvcnRhbC5BdHRhY2htZW50cy5Xcml0ZSIsIlBvcnRhbC5Cb29raW5nLklzc3VlTnVtYmVyLldyaXRlIiwiUG9ydGFsLkJvb2tpbmcuT3JkZXJDb21tZW50LldyaXRlIiwiUG9ydGFsLkVkaXRpb25zLkFkZFJlbW92ZSIsIlBvcnRhbC5FZGl0aW9ucy5Db21tZW50LldyaXRlIiwiUG9ydGFsLkVkaXRpb25zLkVkaXRpb24uV3JpdGUiLCJQb3J0YWwuRWRpdGlvbnMuRm9ybWF0LldyaXRlIiwiUG9ydGFsLkVkaXRpb25zLk51bWJlck9mQ29waWVzLldyaXRlIiwiUG9ydGFsLkVkaXRpb25zLlN0YWNrU2l6ZSIsIlBvcnRhbC5TZWN0aW9ucy5BZGRSZW1vdmUiLCJQb3J0YWwuU2VjdGlvbnMuQWRkUmVtb3ZlRm9ybWF0IiwiUG9ydGFsLlNlY3Rpb25zLk5hbWUuV3JpdGUiLCJQb3J0YWwuU2VjdGlvbnMuTnVtYmVyT2ZQYWdlcy5Xcml0ZSIsIlBvcnRhbC5TZWN0aW9ucy5PbmxpbmUuV3JpdGUiLCJQb3J0YWwuU2VjdGlvbnMuUGFub3JhbWEuUmVhbCIsIlBvcnRhbC5TZWN0aW9ucy5QYW5vcmFtYUZhbHNlLldyaXRlIiwiUG9ydGFsLlNlY3Rpb25zLlBhbm9yYW1hUmVhbC5Xcml0ZSIsIlBvcnRhbC5TZWN0aW9ucy5TdGl0Y2hpbmciLCJQb3J0YWwuU2VydmljZXMuV3JpdGUiLCJQb3J0YWwuU3RhdHVzLkJvb2tpbmcuV3JpdGUiLCJQb3J0YWwuU3RhdHVzLkZvcm1hdC5Xcml0ZSIsIlBvcnRhbC5TdGF0dXMuTnVtYmVyT2ZDb3BpZXMuV3JpdGUiLCJQb3J0YWwuU3RhdHVzLk9yZGVyLldyaXRlIiwiUG9ydGFsLlRyaW1taW5nLldyaXRlIl0sImlzcyI6Imh0dHBzOi8vbXdtLWF1dGguYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiIxYmU0YmY5ZDkyZjg0MjNmYTZjOTJhOTRhYzMwMTJkNSIsImV4cCI6MTc0NzI5MTQwOCwibmJmIjoxNzQ0Njk5MzQ4fQ.uj6Y_jB2cuxwzfG11Ow9oeq8q_lGLrEaRDycXO-0K5s'; 
  // 🔒 Replace with actual token

  constructor(private http: HttpClient) {}

  getPublications(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`
    });
  
    return this.http.get(this.apiUrl, { headers, responseType: 'text' }).pipe(
      map(responseText => {
        const cleaned = responseText.replace(/^\uFEFF/, ''); // 🔧 Remove BOM
        return JSON.parse(cleaned);
      })
    );
  }
  
}
