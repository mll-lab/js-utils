import { downloadBlob } from './file';

describe('downloadBlob', () => {
  const blob = new Blob(['foo']);
  const createObjectURL = jest.fn();
  global.URL.createObjectURL = createObjectURL;

  it('createObjectURL should be called with content once', () => {
    downloadBlob(blob, 'test.csv');
    expect(createObjectURL).toHaveBeenCalledTimes(1);
    expect(createObjectURL).toHaveBeenCalledWith(blob);
  });
});
