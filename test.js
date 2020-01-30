const heapq = require('./main')
const assert = require('assert')

const heap = []
for (const value of [3,-10,22,0]) {
  heapq.heappush(heap, {value})
}
assert.deepStrictEqual(heapq.heappop(heap), {value: -10})
for (const value of [3,-5,10,0]) {
  heapq.heappush(heap, {value})
}
assert.deepStrictEqual(heapq.heappop(heap), {value: -5})
assert.deepStrictEqual(heapq.heappop(heap), {value: 0})
assert.deepStrictEqual(heapq.heappop(heap), {value: 0})
assert.deepStrictEqual(heapq.heappop(heap), {value: 3})
assert.deepStrictEqual(heapq.heappop(heap), {value: 3})
assert.deepStrictEqual(heapq.heappop(heap), {value: 10})
assert.deepStrictEqual(heapq.heappop(heap), {value: 22})
