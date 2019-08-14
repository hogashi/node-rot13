import Rot13, { rotate } from './index';

describe('new', () => {
  it('isa', () => {
    const rot13 = new Rot13();
    expect(rot13).toBeInstanceOf(Rot13);
  });

  it('set offset', () => {
    const rot13 = new Rot13(1);
    expect(rot13).toBeInstanceOf(Rot13);
  });

  it('error if offset is not number', () => {
    expect(() => new Rot13('a')).toThrow();
  });
});

describe('rotate', () => {
  it('default', () => {
    const rot13 = new Rot13();
    expect(rot13.rotate('Rotate13')).toStrictEqual('Ebgngr13');
    expect(rotate('Rotate13')).toStrictEqual('Ebgngr13');
  });

  it('set offset', () => {
    const rot13 = new Rot13();
    expect(rot13.rotate('Rotate10', 10)).toStrictEqual('Bydkdo10');
    expect(rotate('Rotate10', 10)).toStrictEqual('Bydkdo10');
  });

  it('set minus offset', () => {
    const rot13 = new Rot13();
    expect(rot13.rotate('Rotate-1', -1)).toStrictEqual('Qnszsd-1');
    expect(rotate('Rotate-1', -1)).toStrictEqual('Qnszsd-1');
  });

  it('set big enough offset', () => {
    const rot13 = new Rot13();
    expect(rot13.rotate('Rotate42', 42)).toStrictEqual('Hejqju42');
    expect(rotate('Rotate42', 42)).toStrictEqual('Hejqju42');
  });

  it('set big enough minus offset', () => {
    const rot13 = new Rot13();
    expect(rot13.rotate('Rotate-76', -76)).toStrictEqual('Tqvcvg-76');
    expect(rotate('Rotate-76', -76)).toStrictEqual('Tqvcvg-76');
  });
});

describe('encrypt', () => {
  it('default', () => {
    const rot13 = new Rot13();
    expect(rot13.encrypt('Rotate13')).toStrictEqual('Ebgngr13');
  });

  it('set offset', () => {
    const rot13 = new Rot13(10);
    expect(rot13.encrypt('Rotate10')).toStrictEqual('Bydkdo10');
  });

  it('set minus offset', () => {
    const rot13 = new Rot13(-1);
    expect(rot13.encrypt('Rotate-1')).toStrictEqual('Qnszsd-1');
  });

  it('set big enough offset', () => {
    const rot13 = new Rot13(42);
    expect(rot13.encrypt('Rotate42')).toStrictEqual('Hejqju42');
  });

  it('set big enough minus offset', () => {
    const rot13 = new Rot13(-76);
    expect(rot13.encrypt('Rotate-76')).toStrictEqual('Tqvcvg-76');
  });
});

describe('decrypt', () => {
  it('default', () => {
    const rot13 = new Rot13();
    expect(rot13.decrypt('Ebgngr13')).toStrictEqual('Rotate13');
  });

  it('set offset', () => {
    const rot13 = new Rot13(10);
    expect(rot13.decrypt('Bydkdo10')).toStrictEqual('Rotate10');
  });

  it('set minus offset', () => {
    const rot13 = new Rot13(-1);
    expect(rot13.decrypt('Qnszsd-1')).toStrictEqual('Rotate-1');
  });

  it('set big enough offset', () => {
    const rot13 = new Rot13(42);
    expect(rot13.decrypt('Hejqju42')).toStrictEqual('Rotate42');
  });

  it('set big enough minus offset', () => {
    const rot13 = new Rot13(-76);
    expect(rot13.decrypt('Tqvcvg-76')).toStrictEqual('Rotate-76');
  });
});
