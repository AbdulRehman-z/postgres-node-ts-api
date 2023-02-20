// import { Pool } from "pg";
import pg from "pg";

class CustomPool {
  private pool: pg.Pool;
  constructor(private options: pg.PoolConfig) {
    this.pool = new pg.Pool(options);
  }

  public connect() {
    return this.pool.query("SELECT 1+1");
  }
}

export default CustomPool;
