import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  //let service: DataService = TestBed.get(DataService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [DataService]
    });
  });

  it('should be created', () => {
    let service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
