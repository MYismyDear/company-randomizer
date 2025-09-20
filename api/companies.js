import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, url, industry } = req.body;
    if (!name || !url) return res.status(400).json({ message: "Missing required fields" });

    const { data, error } = await supabase.from("companies").insert([{ name, url, industry }]);
    if (error) return res.status(500).json({ message: error.message });

    return res.status(200).json({ message: "Submitted successfully!", total: data.length });
  }

  if (req.method === "GET") {
    const { data, error } = await supabase.from("companies").select("*");
    if (error) return res.status(500).json({ message: error.message });

    if (data.length === 0) return res.status(200).json({ message: "No companies submitted yet!" });

    const randomIndex = Math.floor(Math.random() * data.length);
    return res.status(200).json(data[randomIndex]);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
