import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const Verification = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [activeStep, setActiveStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    nationality: "",
    address: "",
    city: "",
    postalCode: "",
    country: ""
  });

  const [documents, setDocuments] = useState({
    idType: "",
    frontImage: null,
    backImage: null,
    selfieImage: null
  });

  const [verificationStatus, setVerificationStatus] = useState({
    identity: "pending", // pending, verified, rejected
    address: "pending",
    selfie: "pending"
  });

  const steps = [
    { id: 1, title: "Personal Information", status: "completed" },
    { id: 2, title: "Document Upload", status: "current" },
    { id: 3, title: "Verification", status: "pending" }
  ];

  const countries = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany", 
    "France", "Japan", "Singapore", "India", "Brazil"
  ];

  const idTypes = [
    { value: "passport", label: "Passport", description: "Valid passport from any country" },
    { value: "drivers_license", label: "Driver's License", description: "Government issued driver's license" },
    { value: "national_id", label: "National ID Card", description: "Government issued national identity card" }
  ];

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (type, file) => {
    setDocuments(prev => ({ ...prev, [type]: file }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "verified": return "text-green-400";
      case "rejected": return "text-red-400";
      case "pending": return "text-yellow-400";
      default: return isDark ? "text-gray-400" : "text-gray-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "verified":
        return (
          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      case "rejected":
        return (
          <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        );
      case "pending":
        return (
          <svg className="w-5 h-5 text-yellow-400 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  const renderPersonalInformation = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
            First Name *
          </label>
          <input
            type="text"
            value={personalInfo.firstName}
            onChange={(e) => handlePersonalInfoChange("firstName", e.target.value)}
            className={`w-full p-3 rounded-lg border ${isDark ? 'bg-[#1E2329] border-[#3B3F46] text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
            Last Name *
          </label>
          <input
            type="text"
            value={personalInfo.lastName}
            onChange={(e) => handlePersonalInfoChange("lastName", e.target.value)}
            className={`w-full p-3 rounded-lg border ${isDark ? 'bg-[#1E2329] border-[#3B3F46] text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
            Date of Birth *
          </label>
          <input
            type="date"
            value={personalInfo.dateOfBirth}
            onChange={(e) => handlePersonalInfoChange("dateOfBirth", e.target.value)}
            className={`w-full p-3 rounded-lg border ${isDark ? 'bg-[#1E2329] border-[#3B3F46] text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-yellow-500`}
          />
        </div>
        <div>
          <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
            Nationality *
          </label>
          <select
            value={personalInfo.nationality}
            onChange={(e) => handlePersonalInfoChange("nationality", e.target.value)}
            className={`w-full p-3 rounded-lg border ${isDark ? 'bg-[#1E2329] border-[#3B3F46] text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-yellow-500`}
          >
            <option value="">Select nationality</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
          Address *
        </label>
        <input
          type="text"
          value={personalInfo.address}
          onChange={(e) => handlePersonalInfoChange("address", e.target.value)}
          className={`w-full p-3 rounded-lg border ${isDark ? 'bg-[#1E2329] border-[#3B3F46] text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-yellow-500`}
          placeholder="Enter your full address"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
            City *
          </label>
          <input
            type="text"
            value={personalInfo.city}
            onChange={(e) => handlePersonalInfoChange("city", e.target.value)}
            className={`w-full p-3 rounded-lg border ${isDark ? 'bg-[#1E2329] border-[#3B3F46] text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            placeholder="Enter your city"
          />
        </div>
        <div>
          <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
            Postal Code *
          </label>
          <input
            type="text"
            value={personalInfo.postalCode}
            onChange={(e) => handlePersonalInfoChange("postalCode", e.target.value)}
            className={`w-full p-3 rounded-lg border ${isDark ? 'bg-[#1E2329] border-[#3B3F46] text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            placeholder="Enter postal code"
          />
        </div>
        <div>
          <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
            Country *
          </label>
          <select
            value={personalInfo.country}
            onChange={(e) => handlePersonalInfoChange("country", e.target.value)}
            className={`w-full p-3 rounded-lg border ${isDark ? 'bg-[#1E2329] border-[#3B3F46] text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-yellow-500`}
          >
            <option value="">Select country</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  const FileUploadBox = ({ title, description, file, onFileSelect, accept }) => (
    <div className={`border-2 border-dashed ${isDark ? 'border-[#3B3F46]' : 'border-gray-300'} rounded-lg p-6 text-center`}>
      <div className="mb-4">
        <svg className={`mx-auto h-12 w-12 ${isDark ? 'text-gray-400' : 'text-gray-400'}`} stroke="currentColor" fill="none" viewBox="0 0 48 48">
          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>{title}</h3>
      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{description}</p>
      {file ? (
        <div className={`text-sm ${isDark ? 'text-green-400' : 'text-green-600'} mb-4`}>
          ✓ File uploaded: {file.name}
        </div>
      ) : null}
      <input
        type="file"
        accept={accept}
        onChange={(e) => onFileSelect(e.target.files[0])}
        className="hidden"
        id={`upload-${title.replace(/\s+/g, '-').toLowerCase()}`}
      />
      <label
        htmlFor={`upload-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="cursor-pointer bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors inline-block"
      >
        {file ? "Change File" : "Upload File"}
      </label>
    </div>
  );

  const renderDocumentUpload = () => (
    <div className="space-y-6">
      {/* ID Type Selection */}
      <div>
        <h3 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
          Select ID Document Type
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {idTypes.map(type => (
            <div
              key={type.value}
              onClick={() => setDocuments(prev => ({ ...prev, idType: type.value }))}
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                documents.idType === type.value
                  ? "border-yellow-500 bg-yellow-500/10"
                  : `${isDark ? 'border-[#3B3F46] hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'}`
              }`}
            >
              <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>{type.label}</h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Document Upload */}
      {documents.idType && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FileUploadBox
            title="Front Side"
            description="Upload the front side of your ID document"
            file={documents.frontImage}
            onFileSelect={(file) => handleFileUpload("frontImage", file)}
            accept="image/*"
          />
          <FileUploadBox
            title="Back Side"
            description="Upload the back side of your ID document"
            file={documents.backImage}
            onFileSelect={(file) => handleFileUpload("backImage", file)}
            accept="image/*"
          />
        </div>
      )}

      {/* Selfie Upload */}
      <div className="max-w-md mx-auto">
        <FileUploadBox
          title="Selfie Verification"
          description="Take a clear selfie holding your ID document"
          file={documents.selfieImage}
          onFileSelect={(file) => handleFileUpload("selfieImage", file)}
          accept="image/*"
        />
      </div>

      {/* Requirements */}
      <div className={`${isDark ? 'bg-[#1E2329]' : 'bg-gray-50'} rounded-lg p-6`}>
        <h3 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
          Document Requirements
        </h3>
        <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Document must be valid and not expired
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            All text must be clearly visible and legible
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Images should be high quality (at least 1MB)
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No screenshots or photocopies
          </li>
        </ul>
      </div>
    </div>
  );

  const renderVerificationStatus = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
          Verification in Progress
        </h3>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Your documents are being reviewed. This process typically takes 1-3 business days.
        </p>
      </div>

      <div className="space-y-4">
        <div className={`flex items-center justify-between p-4 ${isDark ? 'bg-[#1E2329]' : 'bg-gray-50'} rounded-lg`}>
          <div className="flex items-center">
            {getStatusIcon(verificationStatus.identity)}
            <span className={`ml-3 font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Identity Verification
            </span>
          </div>
          <span className={`text-sm ${getStatusColor(verificationStatus.identity)} capitalize`}>
            {verificationStatus.identity}
          </span>
        </div>

        <div className={`flex items-center justify-between p-4 ${isDark ? 'bg-[#1E2329]' : 'bg-gray-50'} rounded-lg`}>
          <div className="flex items-center">
            {getStatusIcon(verificationStatus.address)}
            <span className={`ml-3 font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Address Verification
            </span>
          </div>
          <span className={`text-sm ${getStatusColor(verificationStatus.address)} capitalize`}>
            {verificationStatus.address}
          </span>
        </div>

        <div className={`flex items-center justify-between p-4 ${isDark ? 'bg-[#1E2329]' : 'bg-gray-50'} rounded-lg`}>
          <div className="flex items-center">
            {getStatusIcon(verificationStatus.selfie)}
            <span className={`ml-3 font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Selfie Verification
            </span>
          </div>
          <span className={`text-sm ${getStatusColor(verificationStatus.selfie)} capitalize`}>
            {verificationStatus.selfie}
          </span>
        </div>
      </div>

      <div className={`${isDark ? 'bg-blue-900/20 border-blue-500/30' : 'bg-blue-50 border-blue-200'} border rounded-lg p-4`}>
        <div className="flex items-start">
          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className={`font-medium ${isDark ? 'text-blue-300' : 'text-blue-800'} mb-1`}>
              What happens next?
            </h4>
            <p className={`text-sm ${isDark ? 'text-blue-200' : 'text-blue-700'}`}>
              Our team will review your documents and notify you via email once verification is complete. 
              You can check your verification status anytime on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return renderPersonalInformation();
      case 2:
        return renderDocumentUpload();
      case 3:
        return renderVerificationStatus();
      default:
        return renderPersonalInformation();
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-[#0B0E11] via-[#1A1D29] to-[#0B0E11] text-white' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'}`}>
      <div className="w-full max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Identity Verification</h1>
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-lg ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36] border-[#3B3F46]' : 'bg-white border-gray-200'} border transition-all duration-300`}
          >
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step.status === 'completed' ? 'bg-green-500' :
                  step.status === 'current' ? 'bg-yellow-500' : 
                  `${isDark ? 'bg-gray-700' : 'bg-gray-300'}`
                }`}>
                  {step.status === 'completed' ? (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className={`font-medium ${step.status === 'current' ? 'text-black' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {step.id}
                    </span>
                  )}
                </div>
                <span className={`ml-3 font-medium ${
                  step.status === 'current' ? (isDark ? 'text-white' : 'text-gray-900') : 
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className={`${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-xl border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} p-8`}>
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
            <button
              onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
              disabled={activeStep === 1}
              className={`px-6 py-2 rounded-lg ${
                activeStep === 1 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-700'
              } ${isDark ? 'bg-[#2B2F36] text-white' : 'bg-gray-100 text-gray-900'} transition-colors`}
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStep(Math.min(3, activeStep + 1))}
              disabled={activeStep === 3}
              className={`px-6 py-2 rounded-lg ${
                activeStep === 3 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-yellow-600'
              } bg-yellow-500 text-black font-medium transition-colors`}
            >
              {activeStep === 3 ? 'Completed' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
