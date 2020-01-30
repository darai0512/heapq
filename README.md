# heapq.js

Min heap. This is the same interface as Python's heapq.

```
const heapq = require('./heapq.js')

const arr = [
  {value: 1},
  {value: -1, name: 'foo'},
  {value: 0, memo: 'bar'},
]

heapq.heapify(arr)
console.log(arr) // [{value: -1, name: 'foo'}, {value: 0, memo: 'bar'}, {value: 1}]

heapq.heappush(arr, {value: -0.5})
console.log(heapq.heappop(arr)) // {value: -1, name: 'foo'}
console.log(heapq.heappushpop(arr, {value: 0})) // {value: -0.5}
```

- heap is not linked list but only array.
- heap's node is object including '{value: number}' interface.
- need max heap?
  - s/`arr[left].value < arr[smallest].value`/`arr[left].value > arr[smallest].value`/ in _build()
  - s/`arr[right].value < arr[smallest].value`/`arr[right].value > arr[smallest].value`/ in _build()
  - s/`root.value > item.value`/`root.value < item.value`/ in heappushpop()

## API

The same as https://docs.python.org/3/library/heapq.html
