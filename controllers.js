import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const [rows] = await db.query("select * from admin where username = ?", [
      username,
    ]);
    if (!rows.length) {
      return res.status(404).json({ message: "User not found" });
    }
    const admin = rows[0];
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      "your_jwt_secret",
      { expiresIn: "1h" },
    );
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getStats = async (req, res)=>{
    try{
        const [[totalUsers]]=await db.query("select count(*) as total from tbl_users"),
        const [[todayRegisterd]]=await db.query
    }
}
