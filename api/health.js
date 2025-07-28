// api/health.js - Vercel Serverless Function
export default function handler(req, res) {
  res.status(200).json({
    status: healthy,
    message: IntelliFinance Backend Running Worldwide!,
    timestamp: new Date().toISOString(),
    platform: Vercel Serverless
  });
}
