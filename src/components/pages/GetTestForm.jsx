import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, Calendar, MapPin, Beaker, CheckCircle, ChevronDown } from 'lucide-react';
import '../../assets/css/get-test-form.css';
import SendToMail from '../data/SendToMail';
import servicesData from '../data/ServicesData';

const GetTestForm = ({ isOpen, onClose, activeSection, categories, selectedCategory, onCategoryChange }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', specimenCollection: false, location: '', date: '', selectedCategory: selectedCategory || '', selectedTest: ''
  });

  // Sync prop changes into state
  useEffect(() => {
    if (selectedCategory) {
      setFormData(prev => ({ ...prev, selectedCategory: selectedCategory, selectedTest: '' }));
    }
  }, [selectedCategory]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setFormData((prev) => ({ ...prev, selectedCategory: category, selectedTest: '' }));
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const getTestsForCategory = (catStr) => {
     const category = Object.values(servicesData).find(cat => cat.section === catStr);
     return category ? category.tests : [];
  };

  const currentTests = getTestsForCategory(formData.selectedCategory);

  const handleResetForm = () => {
    setFormData({
      name: '', email: '', phone: '', specimenCollection: false, location: '', date: '', selectedCategory: '', selectedTest: ''
    });
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const locString = `Lat: ${position.coords.latitude.toFixed(4)}, Lng: ${position.coords.longitude.toFixed(4)}`;
          setFormData((prev) => ({ ...prev, location: locString }));
        },
        (error) => {
          console.error("Error getting location: ", error);
          alert("Could not get location. Please allow permissions or type it manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate required fields.. then logic
    console.log("Submitting formData", formData);
  };

  return (
    <div className="premium-form-wrapper">
       <div className="premium-form-header">
           <h2 className="premium-form-title">Book a Consultation or Test</h2>
           <p className="premium-form-subtitle">Fill in your details below and our specialists will secure your appointment.</p>
       </div>

       <form onSubmit={handleSubmit} className="premium-booking-form">
          {/* Patient Details Section */}
          <div className="form-section">
             <h3 className="form-section-title">1. Patient Details</h3>
             <div className="form-row-2">
                 <div className="form-group-premium">
                     <label className="form-label">Full Name</label>
                     <div className="input-with-icon">
                        <User className="input-icon" size={18} />
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className="form-input" required />
                     </div>
                 </div>
                 <div className="form-group-premium">
                     <label className="form-label">Email Address</label>
                     <div className="input-with-icon">
                        <Mail className="input-icon" size={18} />
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="johndoe@example.com" className="form-input" required />
                     </div>
                 </div>
             </div>
             
             <div className="form-row-2">
                 <div className="form-group-premium">
                     <label className="form-label">Phone Number</label>
                     <div className="input-with-icon">
                        <Phone className="input-icon" size={18} />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="07... " className="form-input" required />
                     </div>
                 </div>
                 <div className="form-group-premium">
                     <label className="form-label">Preferred Date</label>
                     <div className="input-with-icon">
                        <Calendar className="input-icon" size={18} />
                        <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="form-input" required />
                     </div>
                 </div>
             </div>
          </div>

          <div className="form-separator" />

          {/* Test Details Section */}
          <div className="form-section">
             <h3 className="form-section-title">2. Test Selection</h3>
             <div className="form-row-2">
                <div className="form-group-premium">
                    <label className="form-label">Test Category</label>
                    <div className="select-with-icon">
                       <Beaker className="select-icon-left" size={18} />
                       <select name="selectedCategory" value={formData.selectedCategory} onChange={handleCategoryChange} className="form-select" required>
                          <option value="">Select Category</option>
                          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                       </select>
                       <ChevronDown className="select-icon-right" size={18} />
                    </div>
                </div>

                <div className="form-group-premium">
                    <label className="form-label">Specific Test</label>
                    <div className={`select-with-icon ${!formData.selectedCategory ? 'disabled' : ''}`}>
                       <CheckCircle className="select-icon-left" size={18} />
                       <select name="selectedTest" value={formData.selectedTest} onChange={handleInputChange} className="form-select" disabled={!formData.selectedCategory} required>
                          <option value="">{formData.selectedCategory ? 'Select Test' : 'Choose a category first'}</option>
                          {currentTests.map((t, i) => <option key={i} value={t.name}>{t.name}</option>)}
                       </select>
                       <ChevronDown className="select-icon-right" size={18} />
                    </div>
                </div>
             </div>

             <div className="premium-checkbox-wrapper">
                 <label className="premium-checkbox-label">
                     <input type="checkbox" name="specimenCollection" checked={formData.specimenCollection} onChange={handleInputChange} className="premium-checkbox-input" />
                     <span className="premium-checkbox-custom"></span>
                     Request Home Specimen Collection
                 </label>
             </div>

             {formData.specimenCollection && (
                 <div className="form-group-premium location-animate">
                     <label className="form-label">Collection Location</label>
                     <div className="input-with-icon" style={{ display: 'flex', gap: '0.5rem' }}>
                        <MapPin className="input-icon" size={18} />
                        <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Enter your full address" className="form-input" required />
                        <button type="button" onClick={handleGetLocation} className="nav-cta-btn" style={{ whiteSpace: 'nowrap', border: 'none', cursor: 'pointer' }}>
                           Use GPS
                        </button>
                     </div>
                 </div>
             )}
          </div>

       </form>

       <SendToMail formData={formData} handleResetForm={handleResetForm} handleSubmit={handleSubmit} isOpen={isOpen} onClose={onClose} />

    </div>
  );
};

export default GetTestForm;
