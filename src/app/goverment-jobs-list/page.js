// components/CompanyList.js
import React from 'react';
import Link from 'next/link';
import { companies } from '../../uttils/data'
  

const Page = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <div className="container mx-auto text-center">
      <h2 className="text-lg md:text-4xl font-bold text-white mb-6">
        300 Companies List
      </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {companies.map((company) => (
        <div key={company.company_name} className="bg-white shadow-md rounded-lg overflow-hidden">
          <Link href={`/goverment-jobs-list/${1234}`} target="_blank" rel="noopener noreferrer">
            <img src={company.logo_url} alt={company.company_name} className="w-full h-32 object-contain" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{company.company_name}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
    </div>
    </section>
  );
};

export default Page;