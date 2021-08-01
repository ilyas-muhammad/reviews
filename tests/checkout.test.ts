import checkout from '../src/graphql/resolver/checkout';

test('should calculate promotion macbook pro', () => {
  const args = {
    sku: '_43N23P',
    quantity: 1,
  };

  const { total, items } = checkout(args);

  expect(total).toBe(5399.99);
  expect(items).toStrictEqual([
    {
      sku: '_43N23P',
      name: 'MacBook Pro',
      quantity: 1,
    },
    {
      sku: '_234234',
      name: 'Raspberry Pi B',
      quantity: 1,
    },
  ]);
});

test('should calculate promotion google home', () => {
  const args = {
    sku: '_120P90',
    quantity: 3,
  };

  const { total, items } = checkout(args);

  expect(total).toBe(99.98);
  expect(items).toStrictEqual([
    {
      sku: '_120P90',
      name: 'Google Home',
      quantity: 3,
    },
  ]);
});

test('should calculate promotion alexa speaker', () => {
  const args = {
    sku: '_A304SD',
    quantity: 3,
  };

  const { total, items } = checkout(args);

  expect(total).toBe(295.65);
  expect(items).toStrictEqual([
    {
      sku: '_A304SD',
      name: 'Alexa Speaker',
      quantity: 3,
    },
  ]);
});

test('should calculate raspberry pi b', () => {
  const args = {
    sku: '_234234',
    quantity: 1,
  };

  const { total, items } = checkout(args);

  expect(total).toBe(30);
  expect(items).toStrictEqual([
    {
      sku: '_234234',
      name: 'Raspberry Pi B',
      quantity: 1,
    },
  ]);
});

test('should throw error product not found', () => {
  const args = {
    sku: 'NOT_VALID_SKU',
    quantity: 1,
  };

  const result = checkout(args);

  expect(result).toStrictEqual({
    total: 0,
    items: [],
  });
});
