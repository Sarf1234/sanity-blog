// components/CompanyList.js
import React from 'react';
import Link from 'next/link';

const companies = [
  {
    company_name: "Accenture India",
    career_site: "https://www.accenture.com/in-en/careers",
    logo_url: "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
  },
  {
    company_name: "Cognizant Technology Solutions",
    career_site: "https://www.cognizant.com/careers",
    logo_url: "https://cdn.pixabay.com/photo/2019/01/23/21/16/pixabay-3951079_1280.png"
  },
  // Add the rest of the companies here...
];

const CompanyList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {companies.map((company) => (
        <div key={company.company_name} className="bg-white shadow-md rounded-lg overflow-hidden">
          <Link href={company.career_site} target="_blank" rel="noopener noreferrer">
            <img src={company.logo_url} alt={company.company_name} className="w-full h-32 object-contain" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{company.company_name}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;