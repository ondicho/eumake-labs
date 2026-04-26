import React, { useState } from 'react';
import '../../assets/css/services.css';
import cardiac from '../../assets/images/heart.png'
import liver from '../../assets/images/liver.png'
import kidney from '../../assets/images/kidney.png'
import wellness from '../../assets/images/health.png'
import other from '../../assets/images/blood-sample.png'
import diabetes from '../../assets/images/diabetes.png'
import thyroid from '../../assets/images/thyroid.png'
import lipid from '../../assets/images/lipid.png'
import search from '../../assets/images/search.png'

import GetTestForm from './GetTestForm';
import servicesData from '../data/ServicesData';

import { Helmet } from 'react-helmet';
import { Search, ChevronRight, Clock } from 'lucide-react';

const iconImages = {
   generalWellness: wellness,
   renalElectrolytes: kidney,
   boneMetabolism: other,
   cardiacAssessment: cardiac,
   diabetes: diabetes,
   liverFunctionTest: liver,
   lipidProfile: lipid,
   thyroidFunctionTest: thyroid,
   inflamationInfection: other,
   pancreas: other,
   otherBioChemistry: other,
   urineBioChemistry: other,
   endocrinology: other,
   tumorMakers: other,
   serology: other,
   haematology: other,
   coagulation: other,
   boneMarrowStudies: other,
   hematoOncology: other,
   microbiology: other,
   immunology: other,
   electrophoresis: other,
   molecular: other,
   hispatology: other,
   cytology: other
};

const sectionNames = Object.values(servicesData).map(category => category.section);

const Services = () => {
   const [activeSection, setActiveSection] = useState('generalWellness');
   const [selectedCategory, setSelectedCategory] = useState('');
   const [searchQuery, setSearchQuery] = useState('');
   const [searchResults, setSearchResults] = useState([]);

   const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
   };

   const filteredServices = Object.keys(servicesData).filter((serviceKey) =>
      servicesData[serviceKey].section.toLowerCase().includes(searchQuery.toLowerCase())
   );

   const toggleSection = (section) => {
      const elementId = `services-main-content`;
      const element = document.getElementById(elementId);

      if (element && window.innerWidth < 992) {
         element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      }

      setActiveSection(section);
      setSelectedCategory('');
   };

   const handleFormSubmit = (formData) => {
      console.log('Form data submitted:', formData);
   };

   const handleSearch = (event) => {
      event.preventDefault();
      // Re-use logic but update UI gracefully
   };

   const handleBookTestClick = (testName) => {
      // Scroll to the form area and pre-fill if hookup is ready
      const elementId = `booking-form-section`;
      const element = document.getElementById(elementId);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <>
         <Helmet>
            <title>Test Catalogue | Eumake Diagnostic Laboratories</title>
            <meta name="description" content="Eumake Online Test Catalogue" />
            <meta name="keywords" content="react, meta tags, seo, pathology, test catalogue" />
         </Helmet>
         <div className="services-page">
            <div className="services-header-hero">
               <h1 className="services-hero-title">Test Catalogue</h1>
               <p className="services-hero-desc">Explore our comprehensive range of diagnostic tests. High quality, rigorous analysis, and fast turnarounds.</p>
               <div className="services-search-wrapper">
                  <Search className="search-icon-lucide" size={20} />
                  <input
                     type="text"
                     placeholder="Search for any category..."
                     className="services-search-input"
                     value={searchQuery}
                     onChange={handleSearchChange}
                  />
                  <button className="services-search-btn" onClick={handleSearch}>Search</button>
               </div>
            </div>

            <div className="services-layout">
               {/* Sidebar */}
               <aside className="services-sidebar">
                  <h3 className="sidebar-title">Categories</h3>
                  <ul className="category-list">
                     {filteredServices.map(section => (
                        <li
                           key={section}
                           className={`category-item ${activeSection === section ? 'active' : ''}`}
                           onClick={() => toggleSection(section)}
                        >
                           <img src={iconImages[section]} className="category-icon" alt="" />
                           <span>{servicesData[section].section}</span>
                           <ChevronRight className="chevron-icon" size={18} />
                        </li>
                     ))}
                  </ul>
               </aside>

               {/* Main Content */}
               <main className="services-main-content" id="services-main-content">
                  {activeSection && (
                     <div className="test-catalog-list">
                        <h2 className="catalog-title">{servicesData[activeSection].section}</h2>
                        <div className="test-cards-grid">
                           {servicesData[activeSection].tests.map((test, index) => (
                              <div key={index} className="test-row-card">
                                 <div className="test-info">
                                    <h4 className="test-name">{test.name}</h4>
                                    <div className="test-duration">
                                       <Clock size={14} /> {test.duration}
                                    </div>
                                 </div>
                                 {/* <button className="book-test-sm-btn" onClick={() => handleBookTestClick(test.name)}>
                                Select Test
                            </button> */}
                              </div>
                           ))}
                        </div>
                     </div>
                  )}

                  <div className="form-area" id="booking-form-section">
                     <GetTestForm
                        activeSection={activeSection}
                        tests={servicesData[activeSection] ? servicesData[activeSection].tests : []}
                        categories={sectionNames}
                        onSubmit={handleFormSubmit}
                        selectedCategory={selectedCategory}
                        onCategoryChange={(category) => setSelectedCategory(category)}
                     />
                  </div>
               </main>
            </div>
         </div>
      </>
   );
};

export default Services;
