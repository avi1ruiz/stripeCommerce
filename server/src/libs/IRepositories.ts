export interface CrudRepository<T = unknown> {
  list(): Promise<T[]>;
  show(id: string): Promise<T>;
  store(data: Partial<T>): Promise<void>;
  destroy(id: string): Promise<void>;
  update(data: Partial<T>, id: string): Promise<T>;
}
