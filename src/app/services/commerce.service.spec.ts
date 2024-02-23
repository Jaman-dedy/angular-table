import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommerceService } from './commerce.service';
import { environment } from '../../environment';
import { ICommerce } from '../types';
import { mockData } from '../mock';

describe('CommerceService', () => {
  let service: CommerceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommerceService]
    });
    service = TestBed.inject(CommerceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch commerce data', () => {
    const size = 100;
    const testData: ICommerce[] = mockData
    service.getCommerce(size).subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/beers?size=${size}`);
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });
});
