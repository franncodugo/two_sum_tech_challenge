import { test } from 'node:test';
import assert from 'node:assert';
import { findVenuePair } from './findVenuePair.js'; // Importación de la lógica

test('Venue Pair Discovery Tests', async (t) => {
    
    await t.test('should find the basic pair from the example', () => {
        const result = findVenuePair([120, 80, 40, 60], 100);
        assert.deepStrictEqual(result, [2, 3]);
    });

    await t.test('should return null when no pair exists', () => {
        const result = findVenuePair([10, 20, 30], 100);
        assert.strictEqual(result, null);
    });

    await t.test('should handle duplicate values using different indices', () => {
        const result = findVenuePair([50, 50, 30], 100);
        assert.deepStrictEqual(result, [0, 1]);
    });

    await t.test('should handle a million records efficiently (Stress Test)', () => {
        const largeArray = new Array(1_000_000).fill(10);
        largeArray[999_998] = 40;
        largeArray[999_999] = 60;
        
        const start = performance.now();
        const result = findVenuePair(largeArray, 100);
        const end = performance.now();
        
        assert.deepStrictEqual(result, [999_998, 999_999]);
        assert.ok((end - start) < 50, 'Execution took too long'); // Debe ser < 50ms
    });
});