let companies = []; // Temporary storage, resets on every Vercel function call. Use Supabase for persistence.

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, url, industry } = req.body;

    if (!name || !url) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return res.status(400).json({ message: "URL must start with http:// or https://" });
    }

    companies.push({ name, url, industry });
    return res.status(200).json({ message: "Company submitted successfully!", total: companies.length });
  }

  if (req.method === "GET") {
    if (companies.length === 0) {
      return res.status(200).json({ message: "No companies submitted yet!" });
    }
    const randomIndex = Math.floor(Math.random() * companies.length);
    return res.status(200).json(companies[randomIndex]);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
