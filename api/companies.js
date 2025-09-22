import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, url, industry } = req.body;
    if (!name || !url) return res.status(400).json({ message: 'Missing required fields!' });

    try {
      
      const { data, error } = await supabase
        .from('companies')
        .upsert(
          { name, url, industry },
          { onConflict: 'name', ignoreDuplicates: true } 
        );

      if (error) return res.status(500).json({ message: error.message });

      
      if (!data || data.length === 0) {
        return res.status(409).json({ message: 'Company already exists!' });
      }

      return res.status(200).json({ message: 'Submitted successfully!', data });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Unexpected error' });
    }
  }

  if (req.method === 'GET') {
    const { data, error } = await supabase.from('companies').select('*');
    if (error) return res.status(500).json({ message: error.message });
    if (!data || data.length === 0) return res.status(200).json({ message: 'No companies submitted yet!' });

    const random = data[Math.floor(Math.random() * data.length)];
    return res.status(200).json(random);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
