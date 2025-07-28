export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  const { message } = req.body || {};
  let response = 'AI Assistant: I can analyze your business metrics and provide insights!';
  
  if (message && message.toLowerCase().includes('revenue')) {
    response = 'Revenue Analysis: Rs 6.7L monthly shows strong 12.5% growth from excellent customer acquisition!';
  } else if (message && message.toLowerCase().includes('overdue')) {
    response = 'Receivables: Rs 2.6L outstanding, improving by 8.2%. Key accounts need priority follow-up.';
  }
  
  res.status(200).json({
    response: response,
    timestamp: new Date().toISOString()
  });
}
