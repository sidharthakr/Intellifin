// api/dashboard/stats.js
export default function handler(req, res) {
  // Enable CORS for worldwide access
  res.setHeader(Access-Control-Allow-Origin, *);
  res.setHeader(Access-Control-Allow-Methods, GET, POST, OPTIONS);
  res.setHeader(Access-Control-Allow-Headers, Content-Type);
  
  if (req.method === OPTIONS) {
    res.status(200).end();
    return;
  }
  
  res.status(200).json({
    revenue: { value: Rs 6.7L, change: 12.5 },
    receivables: { value: Rs 2.6L, change: -8.2 },
    customers: { value: 1,247, change: 15.3 },
    inventory: { value: Rs 4.2L, change: 5.7 }
  });
}
