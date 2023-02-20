import { app } from "./app";
import CustomPool from "./pool";

const pool = new CustomPool({
  database: "node-api",
  host: "localhost",
  password: "password",
  port: 5432,
  user: "postgres",
});

const connectPool = async () => {
  try {
    await pool.connect();
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};

app.listen(3000, async () => {
  await connectPool();
  console.log("Server listening on port 3000");
});
