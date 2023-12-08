import { isMobileDevice } from './device';

describe('isMobileDevice', () => {
  it('detects a mobile device', () => {
    jest.spyOn(global, 'navigator', 'get').mockImplementation(
      () =>
        ({
          userAgent: 'Android',
        }) as Navigator & typeof global,
    );
    expect(isMobileDevice()).toBeTruthy();
  });

  it('detects no mobile device', () => {
    jest.spyOn(global, 'navigator', 'get').mockImplementation(
      () =>
        ({
          userAgent: 'Firefox',
        }) as Navigator & typeof global,
    );
    expect(isMobileDevice()).toBeFalsy();
  });
});
