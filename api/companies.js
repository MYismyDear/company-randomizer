import { createClient } from "@supabase/supabase-js";

// 从 Vercel 环境变量读取
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, url, industry } = req.body;
    if (!name || !url) {
      return res.status(400).json({ message: "缺少必要字段" });
    }
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return res.status(400).json({ message: "网址必须以 http:// 或 https:// 开头" });
    }

    const { error } = await supabase.from("companies").insert([{ name, url, industry }]);
    if (error) return res.status(500).json({ message: error.message });

    return res.status(200).json({ message: "提交成功！" });
  }

  if (req.method === "GET") {
    const { data, error } = await supabase.from("companies").select("*");
    if (error) return res.status(500).json({ message: error.message });

    if (!data || data.length === 0) {
      return res.status(200).json({ message: "还没有公司提交哦！" });
    }

    const randomIndex = Math.floor(Math.random() * data.length);
    return res.status(200).json(data[randomIndex]);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
