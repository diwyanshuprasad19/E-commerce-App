const indianBanks = [
    { name: "State Bank of India" },
    { name: "HDFC Bank" },
    { name: "ICICI Bank" },
    { name: "Axis Bank" },
    { name: "Punjab National Bank" },
    { name: "Bank of Baroda" },
    { name: "Canara Bank" },
    { name: "Union Bank of India" },
    { name: "Bank of India" },
    { name: "IndusInd Bank" },
    { name: "Kotak Mahindra Bank" },
    { name: "IDBI Bank" },
    { name: "Central Bank of India" },
    { name: "Bank of Maharashtra" },
    { name: "Indian Bank" },
    { name: "Yes Bank" },
    { name: "Federal Bank" },
    { name: "South Indian Bank" },
    { name: "Karnataka Bank" },
    { name: "Karur Vysya Bank" },
    { name: "Canara Bank" },
    { name: "City Union Bank" },
    { name: "Indian Overseas Bank" },
    { name: "Dena Bank" },
    { name: "Vijaya Bank" },
    { name: "IDFC FIRST Bank" },
    { name: "RBL Bank" },
    { name: "Jammu and Kashmir Bank" },
    { name: "Syndicate Bank" },
    { name: "Andhra Bank" },
    { name: "Uco Bank" },
    { name: "Allahabad Bank" },
    { name: "Bank of Rajasthan" },
    { name: "Punjab and Sind Bank" },
    { name: "Dhanlaxmi Bank" },
    { name: "UCO Bank" },
    { name: "Standard Chartered Bank" },
    { name: "HSBC Bank" },
    { name: "Citi Bank" },
    { name: "DBS Bank" },
    { name: "Deutsche Bank" },
    { name: "Barclays Bank" },
    { name: "American Express Bank" },
    { name: "BNP Paribas Bank" },
    { name: "Bank of Tokyo Mitsubishi" },
    { name: "The Royal Bank of Scotland" },
    { name: "The Bank of Nova Scotia" },
    { name: "Mashreq Bank" },
    { name: "Abu Dhabi Commercial Bank" },
    { name: "Emirates NBD Bank" },
    { name: "Doha Bank" },
    { name: "First Gulf Bank" },
    { name: "National Bank of Abu Dhabi" },
    { name: "National Bank of Fujairah" },
    { name: "Calyon Bank" },
    { name: "Arab Bank" },
    { name: "Kuwait International Bank" },
    { name: "Bank of Bahrain & Kuwait" },
    { name: "Burgan Bank" },
    { name: "United Bank of India" },
    { name: "UCO Bank" },
    { name: "Andhra Bank" },
    { name: "Vijaya Bank" },
    { name: "IDFC FIRST Bank" },
    { name: "RBL Bank" },
    { name: "Jammu and Kashmir Bank" },
    { name: "Syndicate Bank" },
    { name: "Andhra Bank" },
    { name: "Uco Bank" },
    { name: "Allahabad Bank" },
    { name: "Bank of Rajasthan" },
    { name: "Punjab and Sind Bank" },
    { name: "Dhanlaxmi Bank" },
    { name: "UCO Bank" },
    { name: "Standard Chartered Bank" },
    { name: "HSBC Bank" },
    { name: "Citi Bank" },
    { name: "DBS Bank" },
    { name: "Deutsche Bank" },
    { name: "Barclays Bank" },
    { name: "American Express Bank" },
    { name: "BNP Paribas Bank" },
    { name: "Bank of Tokyo Mitsubishi" },
    { name: "The Royal Bank of Scotland" },
    { name: "The Bank of Nova Scotia" },
    { name: "Mashreq Bank" },
    { name: "Abu Dhabi Commercial Bank" },
    { name: "Emirates NBD Bank" },
    { name: "Doha Bank" },
    { name: "First Gulf Bank" },
    { name: "National Bank of Abu Dhabi" },
    { name: "National Bank of Fujairah" },
    { name: "Calyon Bank" },
    { name: "Arab Bank" },
    { name: "Kuwait International Bank" },
    { name: "Bank of Bahrain & Kuwait" },
    { name: "Burgan Bank" },
    { name: "United Bank of India" },
    { name: "UCO Bank" },
    { name: "Andhra Bank" },
    { name: "Vijaya Bank" },
    { name: "IDFC FIRST Bank" },
    { name: "RBL Bank" },
    { name: "Jammu and Kashmir Bank" },
    { name: "Syndicate Bank" },
    { name: "Andhra Bank" },
    { name: "Uco Bank" },
    { name: "Allahabad Bank" },
    { name: "Bank of Rajasthan" },
    { name: "Punjab and Sind Bank" },
    { name: "Dhanlaxmi Bank" },
    { name: "UCO Bank" },
    { name: "Standard Chartered Bank" },
    { name: "HSBC Bank" },
    { name: "Citi Bank" },
    { name: "DBS Bank" },
    { name: "Deutsche Bank" },
    { name: "Barclays Bank" },
    { name: "American Express Bank" },
    { name: "BNP Paribas Bank" },
    { name: "Bank of Tokyo Mitsubishi" },
    { name: "The Royal Bank of Scotland" },
    { name: "The Bank of Nova Scotia" },
    { name: "Mashreq Bank" },
    { name: "Abu Dhabi Commercial Bank" },
    { name: "Emirates NBD Bank" },
    { name: "Doha Bank" },
    { name: "First Gulf Bank" },
    { name: "National Bank of Abu Dhabi" },
    { name: "National Bank of Fujairah" },
    { name: "Calyon Bank" },
    { name: "Arab Bank" },
    { name: "Kuwait International Bank" },
    { name: "Bank of Bahrain & Kuwait" },
    { name: "Burgan Bank" },
    { name: "United Bank of India" },
    { name: "UCO Bank" },
    { name: "Andhra Bank" },
    { name: "Vijaya Bank" },
    { name: "IDFC FIRST Bank" },
    { name: "RBL Bank" },
    { name: "Jammu and Kashmir Bank" },
    { name: "Syndicate Bank" },
    { name: "Andhra Bank" },
    { name: "Uco Bank" },
    { name: "Allahabad Bank" },
    { name: "Bank of Rajasthan" },
    { name: "Punjab and Sind Bank" },
    { name: "Dhanlaxmi Bank" },
    { name: "UCO Bank" },
    { name: "Standard Chartered Bank" },
    { name: "HSBC Bank" },
    { name: "Citi Bank" },
    { name: "DBS Bank" },
    { name: "Deutsche Bank" },
    { name: "Barclays Bank" },
    { name: "American Express Bank" },
    { name: "BNP Paribas Bank" },
    { name: "Bank of Tokyo Mitsubishi" },
    { name: "The Royal Bank of Scotland" },
    { name: "The Bank of Nova Scotia" },
    { name: "Mashreq Bank" },
    { name: "Abu Dhabi Commercial Bank" },
    { name: "Emirates NBD Bank" },
    { name: "Doha Bank" },
    { name: "First Gulf Bank" },
    { name: "National Bank of Abu Dhabi" },
    { name: "National Bank of Fujairah" },
    { name: "Calyon Bank" },
    { name: "Arab Bank" },
    { name: "Kuwait International Bank" },
    { name: "Bank of Bahrain & Kuwait" },
    { name: "Burgan Bank" },
  ];
  
  console.log(indianBanks);
  