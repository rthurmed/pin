export function range(from: number, to: number) {
  const arr = [];
  for (let i = from; i < to; i++) {
    arr.push(i);
  }
  return arr;
}

export function debounce<T>(func: (...args: T[]) => void, wait: number) {
  let timeout: NodeJS.Timeout | undefined;
  return function wrapper(...args: T[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
