import { pool } from "..";

class User {
  static async find() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
  }

  static async findById(id: number) {
    const row = await pool.query(`SELECT * FROM users Where id = $1`, [id]);
    return row;
  }
}

export default User;
