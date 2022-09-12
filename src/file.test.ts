import { downloadBlob } from './file';

describe('download', () => {
  const documentIntial = new Blob(['foo']);
  global.URL.createObjectURL = jest.fn();
  it('createObjectURL should be called with content once', () => {
    downloadBlob(documentIntial, 'test.csv');
    expect(global.URL.createObjectURL).toHaveBeenCalledTimes(1);
    expect(global.URL.createObjectURL).toHaveBeenCalledWith(documentIntial);
  });
});
