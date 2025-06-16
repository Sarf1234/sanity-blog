

const JobDescription = () => {

  // Mock job data (to simulate both Gov and Private job details)
  const jobDetails = {
    title: "Software Engineer",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    jobType: "Full-Time",
    salaryRange: "$80,000 - $120,000 per year", // Example salary range
    ageLimit: "25 - 40 years", // Age limit for government job
    experienceRequired: "2+ years of experience in software development",
    postedDate: "January 15, 2025", // Date the job was posted
    description: `
      As a Software Engineer at Tech Innovators Inc., you will work on cutting-edge projects
      using modern technologies to build scalable solutions. You will collaborate with other
      talented engineers and contribute to a variety of tasks, including coding, debugging, and
      performance optimization.
    `,
    responsibilities: [
      "Develop and maintain web applications",
      "Collaborate with cross-functional teams",
      "Write clean and efficient code",
      "Ensure application performance and scalability",
      "Participate in code reviews and provide feedback"
    ],
    requirements: [
      "Bachelor’s degree in Computer Science or related field",
      "2+ years of experience in software development",
      "Proficient in JavaScript, Node.js, and React",
      "Experience with databases like PostgreSQL or MongoDB",
      "Strong problem-solving skills"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) matching",
      "Flexible working hours",
      "Paid time off"
    ],
    applyLink: "https://tech-innovators-inc.apply-now.com",
    jobCategory: "Private" // Can be 'Gov' or 'Private'
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8 bg-white shadow-lg rounded-lg p-6">
        {/* Job Title and Company Info */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">{jobDetails.title}</h1>
          <p className="text-xl text-gray-700 mb-2">{jobDetails.company}</p>
          <p className="text-lg text-gray-600">{jobDetails.location} • {jobDetails.jobType}</p>
        </div>

        {/* Job Description */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mt-6">Job Description</h2>
          <p className="text-lg text-gray-700 mt-2">{jobDetails.description}</p>
        </div>

        {/* Additional Information */}
        <div className="mt-6">
          <div className="flex justify-between space-x-4">
            {jobDetails.jobCategory === "Gov" && (
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Age Limit</h3>
                <p className="text-lg text-gray-600">{jobDetails.ageLimit}</p>
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Salary Range</h3>
              <p className="text-lg text-gray-600">{jobDetails.salaryRange}</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">Experience Required</h3>
            <p className="text-lg text-gray-600">{jobDetails.experienceRequired}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">Job Posted On</h3>
            <p className="text-lg text-gray-600">{jobDetails.postedDate}</p>
          </div>
        </div>

        {/* Responsibilities */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mt-6">Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mt-2">
            {jobDetails.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mt-6">Requirements</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mt-2">
            {jobDetails.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mt-6">Benefits</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mt-2">
            {jobDetails.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <div className="mt-8 text-center">
          <a href={jobDetails.applyLink} target="_blank" rel="noopener noreferrer">
            <button className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300">
              Apply Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
