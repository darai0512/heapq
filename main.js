const heapq = {
  heappop(heap) {
    if (heap.length <= 1) return heap.pop()
    const root = heap[0]
    heap[0] = heap.pop()
    heapq._build(heap, 0)
    return root
  },
  heappush(heap, item) {
    heapq._heapify(heap, heap.push(item))
  },
  heappushpop(heap, item) {
    const root = heap[0]
    if (!root || root.value > item.value) return item
    heap[0] = item
    heapq._build(heap, 0)
    return root
  },
  _build(arr, parent) {
    const left = 2 * parent + 1
    const right = 2 * parent + 2
    const len = arr.length
    let smallest = parent
    if (left < len && arr[left].value < arr[smallest].value) smallest = left
    if (right < len && arr[right].value < arr[smallest].value) smallest = right
    if (smallest !== parent) {
      const parentNode = arr[parent]
      const node = arr[smallest]
      arr[smallest] = arr[parent]
      arr[parent] = node
      heapq._build(arr, smallest)
    }
  },
  heapify(array) {
    heapq._heapify(array, array.length)
  },
  _heapify(arr, l) {
    for (let n = (l - (l % 2))/2 - 1;n >= 0;n--) {
      heapq._build(arr, n)
    }
  },
}
module.exports = heapq
