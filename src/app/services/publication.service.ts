// src/app/services/publication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PublicationService {
  private apiBaseUrl = 'https://p365-dev-yusuf0.azurewebsites.net/api-ppc/api/Publications?date=2025-05-07';
  private jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiJiMjc1MjUyNGI0NDU0NzlkYmRiZTI2NzBmMTMxYjQ3ZSIsImVtYWlsIjoic3VwcG9ydEBtd20uc2UiLCJnaXZlbl9uYW1lIjoiTVdNIiwidW5pcXVlX25hbWUiOiJtd20iLCJyb2xlIjpbIkFkbWluaXN0cmF0b3IiLCJQcm9kUGxhbi1HdWVzdCIsInRlc3QzYiIsInRlc3QtcG9ydGFsLXJvbGwiLCJQcm9kUGxhbiJdLCJwcml2IjpbIkNvbXBhbnk6NTFjOCIsIlBvcnRhbC5BdHRhY2htZW50cy5Xcml0ZSIsIlBvcnRhbC5Cb29raW5nLklzc3VlTnVtYmVyLldyaXRlIiwiUG9ydGFsLkJvb2tpbmcuT3JkZXJDb21tZW50LldyaXRlIiwiUG9ydGFsLkVkaXRpb25zLkFkZFJlbW92ZSIsIlBvcnRhbC5FZGl0aW9ucy5Db21tZW50LldyaXRlIiwiUG9ydGFsLkVkaXRpb25zLkVkaXRpb24uV3JpdGUiLCJQb3J0YWwuRWRpdGlvbnMuRm9ybWF0LldyaXRlIiwiUG9ydGFsLkVkaXRpb25zLk51bWJlck9mQ29waWVzLldyaXRlIiwiUG9ydGFsLkVkaXRpb25zLlN0YWNrU2l6ZSIsIlBvcnRhbC5TZWN0aW9ucy5BZGRSZW1vdmUiLCJQb3J0YWwuU2VjdGlvbnMuQWRkUmVtb3ZlRm9ybWF0IiwiUG9ydGFsLlNlY3Rpb25zLk5hbWUuV3JpdGUiLCJQb3J0YWwuU2VjdGlvbnMuTnVtYmVyT2ZQYWdlcy5Xcml0ZSIsIlBvcnRhbC5TZWN0aW9ucy5PbmxpbmUuV3JpdGUiLCJQb3J0YWwuU2VjdGlvbnMuUGFub3JhbWEuUmVhbCIsIlBvcnRhbC5TZWN0aW9ucy5QYW5vcmFtYUZhbHNlLldyaXRlIiwiUG9ydGFsLlNlY3Rpb25zLlBhbm9yYW1hUmVhbC5Xcml0ZSIsIlBvcnRhbC5TZWN0aW9ucy5TdGl0Y2hpbmciLCJQb3J0YWwuU2VydmljZXMuV3JpdGUiLCJQb3J0YWwuU3RhdHVzLkJvb2tpbmcuV3JpdGUiLCJQb3J0YWwuU3RhdHVzLkZvcm1hdC5Xcml0ZSIsIlBvcnRhbC5TdGF0dXMuTnVtYmVyT2ZDb3BpZXMuV3JpdGUiLCJQb3J0YWwuU3RhdHVzLk9yZGVyLldyaXRlIiwiUG9ydGFsLlRyaW1taW5nLldyaXRlIl0sImlzcyI6Imh0dHBzOi8vbXdtLWF1dGguYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiIxYmU0YmY5ZDkyZjg0MjNmYTZjOTJhOTRhYzMwMTJkNSIsImV4cCI6MTc0OTM1OTI0MCwibmJmIjoxNzQ2NzY3MTgwfQ.H8e8XkQz_prxJ4LkFfAa8XJhNWMlFh5GUIx6umWLLc0'; // 🔐 your full token

  constructor(private http: HttpClient) {}

  // ✅ Call like: this.publicationService.getPublications('2025-05-09').subscribe(...)
  getPublications(): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json, text/plain, */*',
      'authorization': `Bearer ${this.jwtToken}`,
      'cookie': `JWT=${this.jwtToken}`,
      'referer': 'https://p365-dev-yusuf0.azurewebsites.net/ppc/prodplan',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36'
    });
    
    return this.http.get(`${this.apiBaseUrl}`, { headers, responseType: 'text' }).pipe(
      map(responseText => {
        const cleaned = responseText.replace(/^\uFEFF/, ''); // remove BOM if present
        return JSON.parse(cleaned);
      })
    );
  }
}
