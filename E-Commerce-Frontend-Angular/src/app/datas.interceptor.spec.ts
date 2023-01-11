import { TestBed } from '@angular/core/testing';

import { DatasInterceptor } from './datas.interceptor';

describe('DatasInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DatasInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DatasInterceptor = TestBed.inject(DatasInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
