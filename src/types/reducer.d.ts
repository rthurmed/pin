interface GenericAction<A, T> {
  type: A;
  payload?: T;
}