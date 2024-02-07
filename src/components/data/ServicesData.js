const servicesData = {
  generalWellness: {
    section: 'General Wellness',
    tests: [
      { name: 'COMPLETE BLOOD COUNT(CBC)', duration: '2-3HRS', price: 900 },
      { name: 'ESR, blood', duration: '2-3HRS', price: 850 },
      { name: 'FERRITIN, serum', duration: '2-3HRS', price: 1700 },
      { name: 'URIC ACID, serum', duration: '2-3HRS', price: 850 },
      { name: 'VITAMIN B12', duration: '2-3HRS', price: 850 },
      { name: 'VITAMIN D 25 HYDROXY', duration: '2-3HRS', price: 1300 },
    ],
  },
  renalElectrolytes: {
    section: 'Renal/Electrolytes',
    tests: [
      {
        name: "CHLORIDE, serum",
        duration: "2-3HRS",
        price: "700"
      },
      {
        name: "CREATINE CLEARANCE",
        duration: "2-3HRS",
        price: "1750"
      },
      {
        name: "CREATININE,serum",
        duration: "2-3HRS",
        price: "700"
      },
      {
        name: "POTASSIUM, serum",
        duration: "2-3HRS",
        price: "700"
      },
      {
        name: "RENAL  PROFILE EXTENDED",
        duration: "2-3DAYS",
        price: "5200"
      },
      {
        name: "SODIUM, serum",
        duration: "2-3HRS",
        price: "700"
      },
      {
        name: "UEC",
        duration: "2-3HRS",
        price: "2500"
      },
      {
        name: "UREA",
        duration: "2-3HRS",
        price: "700"
      },
      {
        name: "UREA&CREATINE (BUN), serum",
        duration: "2-3HRS",
        price: "1350"
      },
      {
        name: "URINE ALB/CREAT RATIO(UACR)",
        duration: "2-3HRS",
        price: "3350"
      },
    ],
  },
  boneMetabolism: {
    section: 'Bone Metabolism',
    tests: [
      {
        name: "CALCIUM CORRECTED INCL ALBUMIN SERUM",
        duration: "2-3HRS",
        price: "1850"
      },
      {
        name: "CALCIUM TOTAL",
        duration: "2-3HRS",
        price: "900"
      },
      {
        name: "MAGNESIUM, serum",
        duration: "2-3HRS",
        price: "900"
      },
      {
        name: "PHOSPHATE inorganic, serum",
        duration: "2-3HRS",
        price: "700"
      },
      {
        name: "VITAMIN D 25 OH",
        duration: "2-3HRS",
        price: "4250"
      },
    ],
  },
  cardiacAssessment: {
    section: 'Cardiac Assessment',
    tests: [
      {
        name: "CARDIAC PROFILE(TROPONIN T CKMB CPK TOTAL)",
        duration: "2-3HRS",
        price: "9300"
      },
      {
        name: "CARDIAC TROPONIN T",
        duration: "2HRS",
        price: "4250"
      },
      {
        name: "CARDIAC ULTRASENSITIVE (CRP)",
        duration: "2HRS",
        price: "2400"
      },
      {
        name: "CHOLESTEROL, serum",
        duration: "2-3HRS",
        price: "850"
      },
      {
        name: "CKMB QUANTITATIVE",
        duration: "2-3HRS",
        price: "2850"
      },
      {
        name: "CPK, serum",
        duration: "2-3HRS",
        price: "900"
      },
      {
        name: "CRP ULTRASENSITIVE",
        duration: "2-3HRS",
        price: "2400"
      },
      {
        name: "HOMOCYSTEINE(FASTING), serum/blood",
        duration: "2-3HRS",
        price: "3250"
      },
      {
        name: "LIPOPROTEIN",
        duration: "3-4DAYS",
        price: "3150"
      },
      {
        name: "MYOGLOBIN",
        duration: "48HRS",
        price: "3350"
      },
      {
        name: "proBNP",
        duration: "2-3HRS",
        price: "7500"
      },
      {
        name: "TROPONIN T (High sensitivity)",
        duration: "2-3HRS",
        price: "4350"
      },],
  },
  diabetes: {
    section: 'Diabetes',
    tests: [
      { name: 'GLUCOSE BASAL', duration: '2-3HRS', price: 700 },
      { name: 'GLUCOSE FASTING', duration: '2-3HRS', price: 700 },
      { name: 'GLUCOSE RANDOM', duration: '2-3HRS', price: 700 },
      { name: 'HBA1C, blood', duration: '2-3HRS', price: 5200 },
      { name: 'GESTATIONAL DIABETES(GDM)', duration: '2-3HRS', price: 1850 },
      { name: 'GLUCOSE TOLERANCE 2 SPECIMEN', duration: '2-3HRS', price: 900 },
      { name: 'GLUCOSE TOLERANCE 2HR 3SP 75G', duration: '2-3HRS', price: 900 },
      { name: 'GLUCOSE TOLERANCE 2HR 5SP AUC', duration: '2-3HRS', price: 2300 },
      { name: 'GLUCOSE TOLERANCE 2HR 75G 5SP', duration: '2-3HRS', price: 850 },
      { name: 'GLUCOSE TOLERANCE 3H PREG 100G', duration: '2-3HRS', price: 2850 },
      { name: 'GLUCOSE TOLERANCE 3HR 7SP', duration: '2-3HRS', price: 900 },
      { name: 'GLUCOSE TOLERANCE 5 SPECIMEN', duration: '2-3HRS', price: 2400 },
      { name: 'GLUCOSE TOLERANCE GEST 2HR', duration: '2-3HRS', price: 3250 },
      { name: 'GLUCOSE TORLANCE 6 SPECIMENS', duration: '3-4DAYS', price: 3150 },
      { name: 'GLUCOSE TOLERANCE GEST 2HR', duration: '48HRS', price: 3350 },
      { name: 'GLUCOSE TORLANCE 6 SPECIMENS', duration: '2-3HRS', price: 7500 },
    ],
  },
  liverFunctionTest: {
    section: 'Liver Function Test',
    tests: [
      { name: 'ALBUMIN', duration: '2-3HRS', price: 4350 },
      { name: 'ALT/SGPT, serum', duration: '2-3HRS', price: 850 },
      { name: 'AST/SGOT, serum', duration: '2-3HRS', price: 850 },
      { name: 'BILIRUBIN (TOTAL)- SERUM', duration: '2-3HRS', price: 850 },
      { name: 'BILIRUBIN CONJUGATED SERUM', duration: '2-3HRS', price: 850 },
      { name: 'BILIRUBIN PROFILE, TOTAL & DIRECT', duration: '2-3HRS', price: 800 },
      { name: 'LFT BASIC (NO PROTEINS)', duration: '2-3HRS', price: 1850 },
      { name: 'LFT EXTRA (WITH PROTEINS & LDH)', duration: '2-3HRS', price: 3350 },
      { name: 'LFT FULL (WITH PROTEINS)', duration: '2-3HRS', price: 4850 },
      { name: 'TOTAL PROTEIN', duration: '3-4DAYS', price: 4000 },
    ],
  },
  lipidProfile: {
    section: 'Lipid Profile',
    tests: [
      { name: 'HDL, serum', duration: '2-3HRS', price: 1300 },
      { name: 'LDL, Cholestrol', duration: '2-3HRS', price: 1300 },
      { name: 'LIPID PROFILE', duration: '2-3HRS', price: 3600 },
      { name: 'TOTAL CHOLESTEROL, serum', duration: '2-3HRS', price: 700 },
      { name: 'TRIGLYCERIDES, serum', duration: '2-3HRS', price: 850 },
    ],
  },
  thyroidFunctionTest: {
    section: 'Thyroid Function Test',
    tests: [
      {
        name: "FREE TRI-IODOTHYRONINE FT3",
        duration: "2-3HRS",
        price: "2750"
    },
    {
        name: "T3",
        duration: "2-3HRS",
        price: "1650"
    },
    {
        name: "T4",
        duration: "2-3HRS",
        price: "1650"
    },
    {
        name: "THYROID ANTIBODIES ONLY",
        duration: "3-4DAYS",
        price: "6500"
    },
    {
        name: "THYROID FUNCTIONS ",
        duration: "2-3HRS",
        price: "3950"
    },
    {
        name: "THYROID PROFILE - TFT",
        duration: "2-3HRS",
        price: "3950"
    },
    {
        name: "TSH (THYROTROPIN)",
        duration: "2-3HRS",
        price: "1650"
    }
    ],
  },
  inflamationInfection: {
    section: 'Inflamation/Infection',
    tests: [
      {
        name: "C-REACTIVE PROTEIN",
        duration: "2-3HRS",
        price: "2400"
    },
    {
        name: "LACTATE",
        duration: "3-4DAYS",
        price: "3000"
    },
    {
        name: "PROCALCITONIN, serum",
        duration: "2-3HRS",
        price: "6750"
    }
    ],
  },
  pancreas: {
    section: 'Pancreas/Git',
    tests: [
      {
        name: "AMYLASE",
        duration: "2-3HRS",
        price: "1050"
    },
    {
        name: "INSULIN FASTING",
        duration: "12HRS",
        price: "3850"
    },
    {
        name: "INSULIN RANDOM",
        duration: "12HRS",
        price: "3850"
    },
    {
        name: "LIPASE",
        duration: "12HRS",
        price: "1550"
    }
    ],
  },
  otherBioChemistry: {
    section: 'Other BioChemistry',
    tests: [
      {
        name: "ADS SERUM",
        duration: "2-3HRS",
        price: "3200"
    },
    {
        name: "ALDOLASE SERUM",
        duration: "4-5DAYS",
        price: "1500"
    },
    {
        name: "ALDOSTERONE",
        duration: "4-5DAYS",
        price: "3250"
    },
    {
        name: "ALKALINE PHOSPHATASE, serum",
        duration: "2-3DAYS",
        price: "850"
    },
    {
        name: "ALPHA 1 ANTITRYPSIN, serum",
        duration: "3-4 DAYS",
        price: "1400"
    },
    {
        name: "ANF+DNA",
        duration: "3-4DAYS",
        price: "5800"
    },
    {
        name: "APOLIPOPROTEIN A1, serum",
        duration: "3-4 DAYS",
        price: "3150"
    },
    {
        name: "CAERULOPLASMIN, serum",
        duration: "3-4 DAYS",
        price: "2250"
    },
    {
        name: "CO2 (BICARBONATE), serum",
        duration: "2-3HRS",
        price: "950"
    },
    {
        name: "COPPER, serum",
        duration: "3-4 DAYS",
        price: "4650"
    },
    {
        name: "CRP (C REACTIVE PROTEIN)",
        duration: "2-3HRS",
        price: "2400"
    },
    {
        name: "DS DNA",
        duration: "3-4DAYS",
        price: "3100"
    },
    {
        name: "FERRITIN, serum",
        duration: "2-3HRS",
        price: "2950"
    },
    {
        name: "FOLATE(FOLIC ACID), serum",
        duration: "2-3HRS",
        price: "2650"
    },
    {
        name: "GASTRIN SERUM",
        duration: "2-3HRS",
        price: "3500"
    },
    {
        name: "GGT, serum",
        duration: "2-3HRS",
        price: "850"
    },
    {
        name: "IMMUNOGLOBULINS IGA IGG IGM",
        duration: "2-3HRS",
        price: "6000"
    },
    {
        name: "IRON PROFILE",
        duration: "2-3HRS",
        price: "7150"
    },
    {
        name: "IRON, serum/plasma",
        duration: "12HRS",
        price: "1500"
    },
    {
        name: "LDH (LACTATE DEHYDROGENASE)ser",
        duration: "2-3HRS",
        price: "850"
    },
    {
        name: "P ANCA",
        duration: "4DAYS",
        price: "4100"
    },
    {
        name: "PARATHYROID HORMONE",
        duration: "4HRS",
        price: "3750"
    },
    {
        name: "PLASMA METANEPHRINES",
        duration: "1WEEK",
        price: "14950"
    },
    {
        name: "URIC ACID, serum",
        duration: "2-3HRS",
        price: "700"
    },
    {
        name: "VITAMIN B12",
        duration: "24HRS",
        price: "2950"
    },
    {
        name: "ZINC",
        duration: "3-4DAYS",
        price: "6250"
    },
    
    ],
  },
  urineBioChemistry: {
    section: 'Urine BioChemistry',
    tests: [,
    {
        name: "TOTAL PROTEIN  24 HOUR URINE",
        duration: "2-3HRS",
        price: "2300"
    },
    {
        name: "TOTAL PROTEIN QUANTATIVE URINE",
        duration: "2-3HRS",
        price: "900"
    },
    {
        name: "URINE MCS",
        duration: "3-4DAYS",
        price: "2850"
    },
    {
        name: "URINE OF DRUG ABUSE",
        duration: "3-4HRS",
        price: "7400"
    },
    {
        name: "URINE TOXICOLOGY",
        duration: "2-3HRS",
        price: "2300"
    },
    ],
  },
  endocrinology: {
    section: 'Endocrinology',
    tests: [
      {
        name: "ACTH",
        duration: "4-5DAYS",
        price: "4850"
    },
    {
        name: "AMH",
        duration: "3-4 HRS",
        price: "8500"
    },
    {
        name: "Antenatal Basic profile",
        duration: "2-3 HRS",
        price: "3800"
    },
    {
        name: "Antenatal full profile",
        duration: "2-3 HRS",
        price: "13000"
    },
    {
        name: "bHCG QUANTITATIVE",
        duration: "2-3 HRS",
        price: "2850"
    },
    {
        name: "CORTISOL",
        duration: "2-3HRS",
        price: "2850"
    },
    {
        name: "DHEA (DEHYDROEPIANDROSTERONE ), serum",
        duration: "2DAYS ",
        price: "3500"
    },
    {
        name: "E2 (ESTRADIOL/ESTROGEN), serum",
        duration: "2-3 HRS",
        price: "2750"
    },
    {
        name: "FSH (FOLLICLE STIMULATING HORMONE), serum",
        duration: "2-3 HRS",
        price: "2750"
    },
    {
        name: "INFERTILIRTY HORMONAL PROFILE FEMALE",
        duration: "2-3DAYS",
        price: "22600"
    },
    {
        name: "INFERTILITY HORMONAL PROFILE MALE",
        duration: "2-3DAYS",
        price: "20000"
    },
    {
        name: "LUTEINIZING HORMONE",
        duration: "4-5HRS",
        price: "2850"
    },
    {
        name: "NIPT",
        duration: "2WEEKS",
        price: "46600"
    },
    {
        name: "PARATHYROID HORMONE",
        duration: "4HRS",
        price: "3750"
    },
    {
        name: "PATERNITY TEST",
        duration: "3-4 WEEKS",
        price: "19950"
    },
    {
        name: "PROGESTERONE, serum",
        duration: "2-3 HRS",
        price: "2750"
    },
    {
        name: "PROLACTIN, serum",
        duration: "2-3 HRS",
        price: "2500"
    },
    {
        name: "SHBG (SEX HORMONE BINDING GLOBULIN), serum",
        duration: "2-3 HRS",
        price: "1500"
    },
    {
        name: "TESTOSTERONE",
        duration: "2-3 HRS",
        price: "3150"
    }
    ],
  },
  tumorMakers: {
    section: 'Tumor Makers',
    tests: [
    {
        name: "AFP (ALPHA-FETOPROTEIN), serum",
        duration: "2-3HRS",
        price: "2950"
    },
    {
        name: "B2 MICROGLOBULIN",
        duration: "4-5DAYS",
        price: "3150"
    },
    {
        name: "B-HCG QUANTATIVE",
        duration: "2-3HRS",
        price: "2850"
    },
    {
        name: "BRCA PANEL NGS",
        duration: "7DAYS",
        price: "52500"
    },
    {
        name: "CA125, serum",
        duration: "2-3HRS",
        price: "3150"
    },
    {
        name: "CA153, serum",
        duration: "2-3HRS",
        price: "3350"
    },
    {
        name: "CA199, serum",
        duration: "2-3HRS",
        price: "3050"
    },
    {
        name: "CEA (CARCINO-EMBRYONIC ANTIGEN), serum",
        duration: "2-3HRS",
        price: "3050"
    },
    {
        name: "COLORECTAL CANCER MUTATION",
        duration: "2-3DAYS",
        price: "20450"
    },
    {
        name: "EGFR MUTATION PANEL QPCR",
        duration: "3-4days",
        price: "26800"
    },
    {
        name: "FREE PSA, serum",
        duration: "2-3HRS",
        price: "6650"
    },
    {
        name: "GROWTH HORMONE",
        duration: "3-4DAYS",
        price: "3750"
    },
    {
        name: "HIGH RISK &LOW RISK GENOTYPING",
        duration: "3-4days",
        price: "89400"
    },
    {
        name: "ProGRP (NON-SMALL CELL LUNG CANCER), serum",
        duration: "2-3HRS",
        price: "7500"
    },
    {
        name: "SOMATIC MUTATION PANEL FOR HAEMATOLOGIC BLOOD CANCER",
        duration: "2DAYS",
        price: "56700"
    },
    {
        name: "TOTAL PSA, serum",
        duration: "2-3HRS",
        price: "2850"
    },
    {
        name: "VMA",
        duration: "1WEEK",
        price: "14400"
    }
    ],
  },
  serology: {
    section: 'Serology',
    tests: [
      {
        name: "ANTI-STREPTOLYSIN(ASOT), serum",
        duration: "2-3HRS",
        price: "1450"
    },
    {
        name: "CMV ABS - SERUM (IGG +IGM)",
        duration: "2DAYS",
        price: "5350"
    },
    {
        name: "CMV IGG, serum",
        duration: "2DAYS",
        price: "2950"
    },
    {
        name: "CMV IGM, serum",
        duration: "2-DAYS",
        price: "3150"
    },
    {
        name: "CORTISOL, serum",
        duration: "2-3HRS",
        price: "2850"
    },
    {
        name: "C-PEPTIDE, serum",
        duration: "2DAYS",
        price: "2950"
    },
    {
        name: "CYTOMEGALOVIRUS CMV IGG",
        duration: "2DAYS",
        price: "2950"
    },
    {
        name: "CYTOMEGALOVIRUS CMV IGM",
        duration: "2DAYS",
        price: "3150"
    },
    {
        name: "HAPTOGLOBIN, serum",
        duration: "3-4DAYS",
        price: "3550"
    },
    {
        name: "HEP B  SURFACE ANTIGEN",
        duration: "2-3HRS",
        price: "2650"
    },
    {
        name: "HEP B SURFACE ANTIBODY",
        duration: "2-3HRS",
        price: "2850"
    },
    {
        name: "HEP C ANTIBODY ELISA",
        duration: "3-4DAYS",
        price: "2750"
    },
    {
        name: "HERPES 1 IGG",
        duration: "2-3DAYS",
        price: "3150"
    },
    {
        name: "HERPES 1&2 IGM",
        duration: "2-3DAYS",
        price: "3550"
    },
    {
        name: "HERPES 2 IGG",
        duration: "2-3DAYS",
        price: "3150"
    },
    {
        name: "HERPES IGG+IGM",
        duration: "2-3DAYS",
        price: "9550"
    },
    {
        name: "IGE (TOTAL MYOGLOBULIN E), serum",
        duration: "3-4DAYS",
        price: "2850"
    },
    {
        name: "LEUTINIZING HORMONE",
        duration: "4-5HRS",
        price: "2850"
    },
    {
        name: "MEASLES ANTIBODIES IGG&IGM",
        duration: "3-4DAYS",
        price: "9400"
    },
    {
        name: "RPR(VDRL), serum",
        duration: "2HRS",
        price: "850"
    },
    {
        name: "RUBELLA (IGG + IGM) - SERUM",
        duration: "24HRS",
        price: "5200"
    },
    {
        name: "RUBELLA IGG, serum",
        duration: "24HRS",
        price: "3100"
    },
    {
        name: "RUBELLA IGM, serum",
        duration: "24HRS",
        price: "3100"
    },
    {
        name: "TOXOPLASMA - SERUM IGG+IGM",
        duration: "2DAYS",
        price: "5340"
    },
    {
        name: "TOXOPLASMA IGG, serum",
        duration: "2DAYS",
        price: "3150"
    },
    {
        name: "TOXOPLASMA IGM, serum",
        duration: "2DAYS",
        price: "3150"
    },
    {
        name: "TREPONEMAL AB igg",
        duration: "2-3DAYS",
        price: "3250"
    },
    {
        name: "WIDAL TEST",
        duration: "2-3HRS",
        price: "1500"
    }
    ],
  },
  haematology: {
    section: 'Haematology',
    tests: [
      {
        name: "BLEEDING TIME",
        duration: "2-3HRS",
        price: "950"
    },
    {
        name: "BLOOD GROUP+ RHESUS",
        duration: "2-3HRS",
        price: "700"
    },
    {
        name: "BONE MARROW TREPHINE ",
        duration: "3-4DAYS",
        price: "6250"
    },
    {
        name: "CD4/CD8",
        duration: "2-3DAYS",
        price: "3500"
    },
    {
        name: "CLOTTING TIME",
        duration: "2-3HRS",
        price: "950"
    },
    {
        name: "ESR",
        duration: "2HRS",
        price: "450"
    },
    {
        name: "FBC (FULL BLOOD COUNT)",
        duration: "2HRS",
        price: "1000"
    },
    {
        name: "HB ELECTROPHORESIS",
        duration: "2-3HRS",
        price: "7200"
    },
    {
        name: "HB ONLY",
        duration: "2-3HRS",
        price: "650"
    },
    {
        name: "MALARIA SCREEN",
        duration: "2HRS",
        price: "700"
    },
    {
        name: "PERIPHERAL BLOOD FILM",
        duration: "2-3HRS",
        price: "950"
    },
    {
        name: "PLATELETS COUNT",
        duration: "2-3HRS",
        price: "700"
    },
    {
        name: "PORPHYRIN SCREEN BLOOD",
        duration: "24HRS",
        price: "1250"
    },
    {
        name: "RETICULOCYTES",
        duration: "24HRS",
        price: "750"
    }
    ],
  },
  coagulation: {
    section: 'Coagulation',
    tests: [
      {
        name: "APTT",
        duration: "2-3HRS",
        price: "1100"
    },
    {
      name: "PTI/INR",
      duration: "2-3HRS",
      price: "1100"
  },
    {
        name: "D-DIMER QUANTITATIVE, blood",
        duration: "2-3HRS",
        price: "4100"
    },
    {
        name: "LUPUS ANTICOAGULANT",
        duration: "4-5DAYS",
        price: "12450"
    },
    {
        name: "PROTEIN C",
        duration: "2-3DAYS",
        price: "6750"
    },
    {
        name: "PROTEIN ELECTROPHORESIS",
        duration: "3 DAYS",
        price: "3000"
    },
    {
        name: "PROTEIN S",
        duration: "2-3DAYS",
        price: "6750"
    },
    ],
  },
  boneMarrowStudies: {
    section: 'Bone Marrow Studies',
    tests: [
      {
        name: "BONE MARROW ASPIRATE PROCEDURE &INTERPRETATION",
        duration: "4-5DAYS",
        price: "4450"
    },
    {
        name: "TREPHINE BONE BIOSPSY PROCEDURE &INTEPRETATION",
        duration: "4-5DAYS",
        price: "6250"
    }
    ],
  },
  hematoOncology: {
    section: 'Hemato-Oncology',
    tests: [
      {
        name: "BCR-ABL",
        duration: "4-5DAYS",
        price: "18400"
    }
    ],
  },
  microbiology: {
    section: 'Microbiology',
    tests: [
      {
        name: "ADENOVIRUS",
        duration: "2-3HRS",
        price: "2550"
    },
    {
        name: "BLOOD CULTURE (ANAEROBIC & AEROBIC)",
        duration: "2-3HRS",
        price: "7900"
    },
    {
        name: "BLOOD CULTURE(AEROBIC)",
        duration: "2-3HRS",
        price: "3950"
    },
    {
        name: "H.PYLORI",
        duration: "2-3HRS",
        price: "2950"
    },
    {
        name: "SEMENALYSIS",
        duration: "3-4 DAYS",
        price: "6200"
    },
    {
        name: "SPUTUM CULTURE & SENSITIVITY",
        duration: "3-4hrs",
        price: "1000"
    },
    {
        name: "STOOL MCS",
        duration: "2HRS",
        price: "2850"
    },
    {
        name: "STOOL MICROSCOPY CULTURE &SENSITIVITY",
        duration: "2HRS",
        price: "2850"
    },
    {
        name: "STOOL OCCULT BLOOD",
        duration: "2HRS",
        price: "2950"
    },
    {
        name: "STOOL ROUTINE",
        duration: "2HRS",
        price: "650"
    },
    {
        name: "URINE MCS",
        duration: "3-4DAYS",
        price: "2850"
    },
    {
        name: "URINE ROUTINE",
        duration: "2HRS",
        price: "650"
    }
    ],
  },
  immunology: {
    section: 'Immunology',
    tests: [
      {
        name: "ANTI CCP",
        duration: "4-5DAYS",
        price: "3550"
    },
    {
        name: "ANTI NUCLEAR ANTIBODIES (ANA)",
        duration: "4-5DAYS",
        price: "3250"
    },
    {
        name: "ANTI PHOSPOLIPID",
        duration: "4-5DAYS",
        price: "33200"
    },
    {
        name: "IMMUNOGLOBULINS (IgG, IgM ,IgA)",
        duration: "3-4DAYS",
        price: "6000"
    },
    {
        name: "RHEUMATOID ARTHRITIS FACTOR, serum",
        duration: "2-3HRS",
        price: "950"
    },
    {
        name: "RHEUMATOID FACTOR",
        duration: "2-3HRS",
        price: "950"
    }
    ],
  },
  electrophoresis: {
    section: 'Electrophoresis',
    tests: [
      {
        name: "CSF PROTEIN ELECTROPHORESIS",
        duration: "2-3HRS",
        price: "950"
    },
    {
        name: "HAEMOGLOBIN ELECTROPHORESIS",
        duration: "2-3hrs",
        price: "7350"
    }
    ],
  },
  molecular: {
    section: 'Molecular',
    tests: [
      {
        name: "HIV ELISA",
        duration: "2-3HRS",
        price: "2250"
    },
    {
        name: "PCR HBV VIRAL LOAD QUANTITATIVE",
        duration: "3-4DAYS",
        price: "15500"
    },
    {
        name: "PCR HIV VIRAL LOAD",
        duration: "3-4DAYS",
        price: "10700"
    },
    {
        name: "PCR HPV (COBAS 4800)",
        duration: "3-4DAYS",
        price: "4950"
    },
    {
        name: "HEP B VIRAL LOAD",
        duration: "3-4DAYS",
        price: "14450"
    },
    {
        name: "HCV VIRAL LOAD",
        duration: "3-4DAYS",
        price: "16350"
    }
    ],
  },
  hispatology: {
    section: 'Hispatology',
    tests: [
      {
        name: "HISTOLOGY (LARGE SPECIMEN)",
        duration: "7 DAYS",
        price: "8500"
    },
    {
        name: "HISTOLOGY (MEDIUM SPECIMEN)",
        duration: "7 DAYS",
        price: "6500"
    },
    {
        name: "HISTOLOGY (SMALL SPECIMEN)",
        duration: "7 DAYS",
        price: "4450"
    }
    ],
  },
  cytology: {
    section: 'cytology',
    tests: [
      {
        name: "PAP SMEAR (CERVICAL SMEAR) FOR REPORTING",
        duration: "3-4DAYS",
        price: "2950"
    },
    {
        name: "FNA",
        duration: "3-4DAYS",
        price: "4250"
    }
    ],
  },
};


export default servicesData;