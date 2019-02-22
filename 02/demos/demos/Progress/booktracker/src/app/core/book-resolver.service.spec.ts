import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BookResolverService } from './book-resolver.service';
import { DataService } from './data.service';

describe('BookResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ DataService, BookResolverService ]
  }));

  it('should be created', () => {
    const service: BookResolverService = TestBed.get(BookResolverService);
    expect(service).toBeTruthy();
  });
});
