let companies = []; // 临时存储，Vercel 每次函数调用会重置，适合演示

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, url, industry } = req.body;

    if (!name || !url) {
      return res.status(400).json({ message: "缺少必要字段" });
    }
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return res.status(400).json({ message: "网址必须以 http:// 或 https:// 开头" });
    }

    companies.push({ name, url, industry });
    return res.status(200).json({ message: "提交成功！", total: companies.length });
  }

  if (req.method === "GET") {
    if (companies.length === 0) {
      return res.status(200).json({ message: "还没有公司提交哦！" });
    }
    const randomIndex = Math.floor(Math.random() * companies.length);
    return res.status(200).json(companies[randomIndex]);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
