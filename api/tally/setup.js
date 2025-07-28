export default function handler(req, res) {
  const setupGuide = {
    title: 'IntelliFinance - Tally ERP Integration Setup',
    steps: [
      {
        step: 1,
        title: 'Enable Tally HTTP Server',
        instructions: 'In Tally, go to Gateway of Tally → F11 (Company Features) → Enable "Tally.NET Server" → Set Port to 9000'
      },
      {
        step: 2, 
        title: 'Configure Data Access',
        instructions: 'Allow HTTP requests and XML data export in Tally security settings'
      },
      {
        step: 3,
        title: 'Test Connection',
        instructions: 'Visit /api/tally/test to verify Tally connectivity'
      }
    ],
    supportedData: [
      'Sales and Purchase Vouchers',
      'Ledger Balances', 
      'Inventory Items and Stock',
      'Customer and Supplier Details',
      'Outstanding Receivables/Payables'
    ],
    businessBenefits: [
      'Real-time business metrics instead of demo data',
      'AI-powered insights on actual company performance', 
      'Automated alerts and recommendations',
      'Multi-company dashboard support'
    ]
  };
  
  res.status(200).json(setupGuide);
}
