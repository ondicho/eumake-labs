"use client"

import React, { useState } from "react"
import { ShieldCheck, Eye, EyeOff } from "lucide-react"
import '../../assets/css/accreditations.css'
import kenasImage from '../../assets/images/eumake-kenas-accreditation.png'

const accreditations = [
    {
        name: "ISO 15189:2022",
        body: "Kenya Accreditation Service(KENAS)",
        description: "International standard for medical laboratory quality and competence",
        icon: ShieldCheck,
    }
]

export function AccreditationsSection() {
    const [showCertificate, setShowCertificate] = useState(false);
    const acc = accreditations[0];
    const Icon = acc.icon;

    return (
        <section className="accreditations-section">
            <div className="accreditations-container">
                {/* Section Header */}
                <div className="accreditations-header">
                    <h2 className="accreditations-title">
                        Accreditations
                    </h2>
                    <p className="accreditations-desc">
                        Our laboratory meets the highest international standards for quality,
                        accuracy, and patient safety.
                    </p>
                </div>

                {/* Single Spotlight Accreditation */}
                <div className="accreditation-single-spotlight">
                    <div className="accreditation-spotlight-icon-wrap">
                        <div className="accreditation-spotlight-glow" />
                        <Icon strokeWidth={1.5} className="accreditation-spotlight-icon" />
                    </div>

                    <div className="accreditation-spotlight-content">
                        <div className="accreditation-spotlight-label">PREMIER CERTIFICATION</div>
                        <h3 className="accreditation-spotlight-title">
                            {acc.name}
                        </h3>
                        <div className="accreditation-issuing-body">
                            Issued by: <strong>{acc.body}</strong>
                        </div>
                        <p className="accreditation-spotlight-desc">
                            {acc.description}. This rigorous accreditation validates our commitment to providing precise, reliable, and timely diagnostic results to all our patients and healthcare partners.
                        </p>

                        <div className="accreditation-actions">
                            <div className="accreditation-spotlight-badge">
                                <ShieldCheck className="accreditation-spotlight-badge-icon" />
                                <span>Verified and current as of 2026</span>
                            </div>

                            <button
                                className="accreditation-toggle-btn"
                                onClick={() => setShowCertificate(!showCertificate)}
                                aria-expanded={showCertificate}
                            >
                                {showCertificate ? (
                                    <><EyeOff className="toggle-btn-icon" /> Hide Certificate</>
                                ) : (
                                    <><Eye className="toggle-btn-icon" /> View Certificate</>
                                )}
                            </button>
                        </div>

                        {/* Expandable Certificate Area */}
                        <div className={`accreditation-certificate-wrapper ${showCertificate ? 'open' : ''}`}>
                            <div className="accreditation-certificate-inner">
                                <img
                                    src={kenasImage}
                                    alt="Eumake KENAS Accreditation Certificate"
                                    className="accreditation-certificate-img"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}