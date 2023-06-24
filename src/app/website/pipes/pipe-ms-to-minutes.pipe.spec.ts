import { PipeMsToMinutesPipe } from './pipe-ms-to-minutes.pipe';

describe('PipeMsToMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeMsToMinutesPipe();
    expect(pipe).toBeTruthy();
  });
});
