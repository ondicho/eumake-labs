import React from 'react';
import { Link } from 'react-router-dom';
import PharmacyCarousel from "./PharmacyCarousel";
import '../../assets/css/home.css';
import { AccreditationsSection } from "./Accreditations";
import Widgets from "../layouts/Widgets";
import CustomerReview from './CustomerReview';
import { Helmet } from 'react-helmet';
import { FlaskConical, ArrowRight, Clock, Award } from 'lucide-react';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Eumake Diagnostic Laboratories</title>
        <meta name="description" content="Welcome to Eumake Diagnostic Laboratories — Nairobi's leading precision diagnostics provider." />
        <meta name="keywords" content="diagnostics, pathology, laboratory, nairobi, eumake" />
        <meta name="author" content="ondicho" />
        <meta property="og:title" content="Home | Eumake" />
        <meta property="og:description" content="Eumake Diagnostic Laboratory website homepage" />
        <meta property="og:url" content="https://eumake.co.ke" />
      </Helmet>

      <PharmacyCarousel />

      {/* Animated flow separator */}
      <div className="separate-line"></div>

      {/* Services CTA Section */}
      <section className="home-services-cta">
        <div className="home-cta-container">
          <div className="home-cta-badge">
            <FlaskConical size={16} />
            <span>Test Catalogue</span>
          </div>
          <h2 className="home-cta-heading">Explore Our Full Range of Diagnostic Services</h2>
          <p className="home-cta-desc">
            From general wellness to advanced molecular diagnostics, our comprehensive catalogue covers over 200+ tests — all processed with precision and speed.
          </p>

          <div className="home-cta-stats">
            <div className="home-stat-item">
              <Clock size={22} className="home-stat-icon" />
              <div>
                <strong>Fast Turnaround</strong>
                <span>Results in as little as 2–3 hrs</span>
              </div>
            </div>
            <div className="home-stat-item">
              <Award size={22} className="home-stat-icon" />
              <div>
                <strong>Accredited Lab</strong>
                <span>ISO 15189 &amp; KENAS certified</span>
              </div>
            </div>
            <div className="home-stat-item">
              <FlaskConical size={22} className="home-stat-icon" />
              <div>
                <strong>200+ Tests</strong>
                <span>Comprehensive catalogue available</span>
              </div>
            </div>
          </div>

          <div className="home-cta-actions">
            <Link to="/services" className="home-cta-primary">
              Browse Test Catalogue <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <AccreditationsSection />
      <CustomerReview />
      <Widgets />
    </>
  );
};

export default Home;
