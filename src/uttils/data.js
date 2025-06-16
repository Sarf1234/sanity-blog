const companies = [
    {
      "company_name": "Accenture India",
      "career_site": "https://www.accenture.com/in-en/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Cognizant Technology Solutions",
      "career_site": "https://www.cognizant.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Capgemini India",
      "career_site": "https://www.capgemini.com/careers/",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Tech Mahindra",
      "career_site": "https://www.techmahindra.com/careers/",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Oracle India",
      "career_site": "https://www.oracle.com/corporate/careers/",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "SAP India",
      "career_site": "https://www.sap.com/about/careers.html",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Dell Technologies India",
      "career_site": "https://www.dell.com/en-us/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Microsoft India",
      "career_site": "https://careers.microsoft.com/us/en",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Google India",
      "career_site": "https://careers.google.com/",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Amazon India",
      "career_site": "https://www.amazon.jobs/en/locations/india",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Flipkart",
      "career_site": "https://www.flipkartcareers.com/",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Zomato",
      "career_site": "https://www.zomato.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Swiggy",
      "career_site": "https://www.swiggy.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "BYJU'S",
      "career_site": "https://www.byjus.com/careers/",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Ola Cabs",
      "career_site": "https://www.olacabs.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Paytm",
      "career_site": "https://paytm.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Bharti Airtel",
      "career_site": "https://www.airtel.in/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Vodafone India",
      "career_site": "https://www.ideacellular.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Tata Communications",
      "career_site": "https://www.tatacommunications.com/careers/",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Aditya Birla Group",
      "career_site": "https://www.adityabirla.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Hindalco Industries",
      "career_site": "https://www.hindalco.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "UltraTech Cement",
      "career_site": "https://www.ultratechcement.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Godrej Group",
      "career_site": "https://www.godrej.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Reliance Capital",
      "career_site": "https://www.reliancecapital.co.in/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Tata Power",
      "career_site": "https://www.tatapower.com/career",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Shree Cements",
      "career_site": "https://www.shreecement.com/career",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "JSW Energy",
      "career_site": "https://www.jsw.in/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Bajaj Finserv",
      "career_site": "https://www.bajajfinserv.in/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Muthoot Finance",
      "career_site": "https://www.muthootfinance.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "ICICI Prudential Life Insurance",
      "career_site": "https://www.iciciprulife.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "SBI Life Insurance",
      "career_site": "https://www.sbilife.co.in/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Max Life Insurance",
      "career_site": "https://www.maxlifeinsurance.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Bajaj Allianz General Insurance",
      "career_site": "https://www.bajajallianz.com/career",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "HDFC Life Insurance",
      "career_site": "https://www.hdfclife.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Star Health and Allied Insurance",
      "career_site": "https://www.starhealth.in/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Magma Fincorp",
      "career_site": "https://www.magmafincorp.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Shriram Transport Finance",
      "career_site": "https://www.stfc.in/career",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "L&T Finance",
      "career_site": "https://www.ltfs.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    },
    {
      "company_name": "Edelweiss Financial Services",
      "career_site": "https://www.edelweissfin.com/careers",
      "logo_url": "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
    }
  ]

  export { companies };