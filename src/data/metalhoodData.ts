export interface Product {
  id: string;
  name: string;
  modelCode: string;
  category: 'electrical-winches' | 'manual-winches' | 'control-systems' | 'rigging-accessories';
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  capacity?: string;
  capacityNewtons?: string;
  lines?: string;
  brakeSystem?: string;
  drumType?: string;
  standard?: string;
  motorPower?: string;
  controlInterface?: string;
  keyFeatures: string[];
  applications: string[];
  specs: { label: string; value: string }[];
  isFeatured?: boolean;
}

export interface ManufacturingService {
  id: string;
  stepNumber: string;
  name: string;
  shortDesc: string;
  detailedDesc: string;
  capabilities: string[];
  equipment: string;
}

export interface ApplicationArea {
  id: string;
  title: string;
  description: string;
  useCases: string[];
  typicalEquipment: string[];
}

export const COMPANY_DETAILS = {
  name: 'METALHOOD',
  legalName: 'SIA Metalhood',
  registrationNumber: '42403038644',
  workshopAddress: 'Latgales street A449, Riga, LV-1063, Latvia',
  legalAddress: 'Raiņa iela 41-19, Balvi, LV-4501, Latvia',
  email: 'sales@metalhood.com',
  phone: '+371 28322550',
  foundedYear: '2015',
  founders: 'Founded in 2015 by two brothers specializing in precision entertainment mechanics',
  headquarters: 'Riga, Latvia (European Union)',
  standards: ['EN 17206 (Stage machinery)', 'EU Machinery Directive 2006/42/EC', 'LIAA Supported Technology Transfer'],
};

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'electrical-winches', label: 'Electrical Winches' },
  { id: 'manual-winches', label: 'Manual Winches' },
  { id: 'control-systems', label: 'Control Systems' },
  { id: 'rigging-accessories', label: 'Pulleys & Rigging' },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'mh-500',
    name: 'MH-500 Electrical Lifting Winch',
    modelCode: 'MH-500-3/4/5/6',
    category: 'electrical-winches',
    categoryLabel: 'Electrical Winch',
    tagline: 'High-capacity theatrical upper machinery for heavy scenery and lighting battens',
    description:
      'The MH-500 is METALHOOD’s flagship heavy-duty electric stage winch, delivering 5,000 N (500 kg) of certified lifting force. Available in 3, 4, 5, or 6 line configurations with precision helical drum grooving, redundant dual electromagnetic holding brakes, and calibrated limit switches. Manufactured in our Riga facility according to European theatrical safety norms.',
    image: '/images/winch_electrical_mh500_1790577879976.jpg',
    capacity: '500 kg',
    capacityNewtons: '5,000 N (ELL)',
    lines: '3, 4, 5, or 6 operation lines',
    brakeSystem: 'Dual redundant electromagnetic holding brakes with microswitch monitoring',
    drumType: 'Precision helical-grooved cylindrical steel drum',
    standard: 'EN 17206 / EU Machinery Directive',
    motorPower: 'Heavy-duty 3-phase gearmotor with thermal overload protection',
    controlInterface: 'Direct integration with local or multi-unit master control cabinets',
    isFeatured: true,
    keyFeatures: [
      '5,000 N (500 kg) working load limit',
      'Configurable with 3 to 6 independent wire rope lines',
      'Dual redundant safety brakes for overhead stage suspension',
      'Precision machined grooved drum minimizes wire rope wear',
      'Integrated gear limit switches for upper and lower travel stops',
      'Modular mounting brackets for gridiron or fly tower I-beams',
    ],
    applications: ['Theatres & Opera Houses', 'Concert Hall Lighting Battens', 'Heavy Scenery Trusses', 'Auditorium Suspensions'],
    specs: [
      { label: 'Model Series', value: 'MH-500-3/4/5/6' },
      { label: 'Rated Lifting Capacity', value: '5 000 N (500 kg)' },
      { label: 'Number of Wire Lines', value: '3, 4, 5, or 6 lines' },
      { label: 'Braking System', value: 'Dual independent electromagnetic fail-safe disc brakes' },
      { label: 'Drum Design', value: 'Precision CNC turned helical grooving' },
      { label: 'Travel Distance', value: 'Customizable up to 18 m' },
      { label: 'Safety Standards', value: 'EN 17206 / 2006/42/EC' },
      { label: 'Origin', value: 'Manufactured in Latvia (EU)' },
    ],
  },
  {
    id: 'mh-250',
    name: 'MH-250 Electrical Lifting Winch',
    modelCode: 'MH-250-3/4/5/6',
    category: 'electrical-winches',
    categoryLabel: 'Electrical Winch',
    tagline: 'Versatile multi-line stage lifting winch for medium venue installations',
    description:
      'Engineered specifically for school halls, regional theatres, and cultural centres, the MH-250 series provides 2,500 N (250 kg) of dependable lifting force across 3 to 6 lines. Features a compact steel chassis, dual safety brakes, and flexible mounting options for overhead gridirons or side walls.',
    image: '/images/winch_electrical_mh500_1790577879976.jpg',
    capacity: '250 kg',
    capacityNewtons: '2,500 N (ELL)',
    lines: '3, 4, 5, or 6 operation lines',
    brakeSystem: 'Dual redundant holding brakes',
    drumType: 'Grooved steel drum or pilewind drum option',
    standard: 'EN 17206 / EU Machinery Directive',
    motorPower: 'Quiet, compact 3-phase gearmotor',
    controlInterface: 'Wall-mounted panel or handheld pendant',
    isFeatured: true,
    keyFeatures: [
      '2,500 N (250 kg) lifting capacity',
      'Multi-line configuration (3 to 6 lines)',
      'Dual safety brake system meeting European theatrical safety regulations',
      'Low acoustic emission gearmotor ideal for quiet theatre environments',
      'Available with grooved drum or compact pilewind drum',
    ],
    applications: ['Regional Theatres', 'Educational Auditoriums', 'Acoustic Baffle Hoisting', 'Light Scenery Suspensions'],
    specs: [
      { label: 'Model Series', value: 'MH-250-3/4/5/6' },
      { label: 'Rated Lifting Capacity', value: '2 500 N (250 kg)' },
      { label: 'Number of Wire Lines', value: '3, 4, 5, or 6 lines' },
      { label: 'Braking System', value: 'Dual redundant fail-safe brakes' },
      { label: 'Drum Surface', value: 'CNC grooved or smooth pilewind' },
      { label: 'Compliance', value: 'EN 17206 / EU Machinery Directive' },
      { label: 'Origin', value: 'Latvia (EU)' },
    ],
  },
  {
    id: 'mh-150',
    name: 'MH-150 Electrical Lifting Winch',
    modelCode: 'MH-150-1/2/3/4',
    category: 'electrical-winches',
    categoryLabel: 'Electrical Winch',
    tagline: 'Ultra-compact electrical hoist for space-restricted fly lofts and light loads',
    description:
      'The MH-150 provides 1,500 N (150 kg) lifting capacity with 1 to 4 wire rope lines. Its minimal footprint makes it ideal for architectural suspensions, museum exhibits, lightweight borders, and small studio theatres where space in the fly loft is strictly limited.',
    image: '/images/winch_electrical_mh500_1790577879976.jpg',
    capacity: '150 kg',
    capacityNewtons: '1,500 N (ELL)',
    lines: '1, 2, 3, or 4 operation lines',
    brakeSystem: 'Single or dual electromagnetic holding brake',
    drumType: 'Compact grooved steel drum',
    standard: 'EN 17206 / EU Machinery Directive',
    motorPower: 'High-efficiency compact gearmotor',
    controlInterface: 'Direct wired pendant or cabinet connection',
    isFeatured: false,
    keyFeatures: [
      '1,500 N (150 kg) certified working load',
      '1, 2, 3, or 4 line operational layouts',
      'Minimal overall dimensions for narrow grid spaces',
      'Tested and certified in accordance with EU regulations',
      'Single or dual brake configurations available on request',
    ],
    applications: ['Museum Display Rigging', 'Acoustic Panels', 'Lightweight Stage Borders', 'Architectural Hoisting'],
    specs: [
      { label: 'Model Series', value: 'MH-150-1/2/3/4' },
      { label: 'Rated Lifting Capacity', value: '1 500 N (150 kg)' },
      { label: 'Operation Lines', value: '1 to 4 lines' },
      { label: 'Braking Option', value: 'Single or double fail-safe brake' },
      { label: 'Design', value: 'Compact spatial envelope' },
      { label: 'Safety Norm', value: 'EN 17206' },
    ],
  },
  {
    id: 'mh-1000',
    name: 'MH-1000 Heavy Stage Lifting Winch',
    modelCode: 'MH-1000',
    category: 'electrical-winches',
    categoryLabel: 'Electrical Winch',
    tagline: 'High-tonnage stage upper machinery for major theatrical bridges & curtains',
    description:
      'Engineered for large-scale venues requiring serious lifting capacity up to 10,000 N (1,000 kg). Features reinforced steel framework, dual heavy-duty electromagnetic disc brakes, precision wire rope guidance, and synchronized speed controls for main proscenium curtains and heavy lighting bridges.',
    image: '/images/winch_electrical_mh500_1790577879976.jpg',
    capacity: '1,000 kg',
    capacityNewtons: '10,000 N (ELL)',
    lines: 'Multi-line high-tensile steel wire system',
    brakeSystem: 'Dual redundant heavy-duty brakes with manual release mechanism',
    drumType: 'Machined steel drum with hardened wire grooves',
    standard: 'EN 17206 / EU Directives',
    motorPower: 'Industrial high-torque gearmotor with forced cooling',
    controlInterface: 'Central automated console / PLC integration',
    isFeatured: false,
    keyFeatures: [
      '10,000 N (1,000 kg) rated lifting capacity',
      'Rugged structural steel chassis welded in-house',
      'Full compliance with European safety standards for personnel overhead safety',
      'Precision wire rope spooling system prevents crossover',
    ],
    applications: ['Main Stage Curtain Rigs', 'Orchestra Shell Hoisting', 'Major Lighting Bridges', 'Heavy Theatrical Scenery'],
    specs: [
      { label: 'Model Series', value: 'MH-1000' },
      { label: 'Capacity', value: '10 000 N (1 000 kg)' },
      { label: 'Brake Standard', value: 'Redundant dual spring-set disc brakes' },
      { label: 'Construction', value: 'Heavy structural steel plate chassis' },
      { label: 'Standard', value: 'EN 17206' },
    ],
  },
  {
    id: 'mhm-w500',
    name: 'MHM_W500 Manual Lifting Winch',
    modelCode: 'MHM_W500-3/4/5/6',
    category: 'manual-winches',
    categoryLabel: 'Manual Winch',
    tagline: 'Precision manual theatrical hoist with dual automatic pressure load brakes',
    description:
      'The MHM_W500 provides manual stage lifting for loads up to 5,000 N (500 kg) across 3 to 6 lines. Equipped with an automatic dual pressure load holding brake that prevents inadvertent descent when the crank handle is released. Engineered without ratchets for whisper-quiet backstage operation.',
    image: '/images/winch_manual_theatrical_1790577892470.jpg',
    capacity: '500 kg',
    capacityNewtons: '5,000 N (ELL)',
    lines: '3, 4, 5, or 6 operation lines',
    brakeSystem: 'Dual automatic pressure load brake (friction disc)',
    drumType: 'Precision grooved steel drum',
    standard: 'EN 17206 compliant design',
    isFeatured: true,
    keyFeatures: [
      '5,000 N (500 kg) manual lifting capacity',
      'Dual automatic pressure brake secures load at any height instantly',
      'Ergonomic manual hand crank with removable handle',
      'Silent operation without noisy ratchets during lowering or hoisting',
      'CNC machined grooved cable drum ensures uniform rope lay',
      'No electrical supply required — perfect for backup or remote rigging',
    ],
    applications: ['School Theatres', 'Civic Auditorium Scenery Lines', 'Exhibition Rigging', 'Manual Fly Bars'],
    specs: [
      { label: 'Model Series', value: 'MHM_W500-3/4/5/6' },
      { label: 'Capacity (ELL)', value: '5 000 N (500 kg)' },
      { label: 'Lines', value: '3, 4, 5, or 6 wire ropes' },
      { label: 'Brake Mechanism', value: 'Dual automatic friction pressure brake' },
      { label: 'Drum Type', value: 'Machined grooved steel drum' },
      { label: 'Crank Handle', value: 'Removable ergonomic steel crank' },
      { label: 'Manufacturing', value: '100% in-house Riga workshop' },
    ],
  },
  {
    id: 'manual-pilewind',
    name: 'Manual Pilewind Theatrical Winch',
    modelCode: 'MHM-PW',
    category: 'manual-winches',
    categoryLabel: 'Manual Winch',
    tagline: 'Narrow-chassis manual wire rope winch for constrained backstage spaces',
    description:
      'Designed for venues with minimal lateral space, pilewind winches stack wire rope neatly in narrow drum bays. Provides secure manual hoisting for lightweight curtains, masking drapes, and banners with full load-holding safety brake integration.',
    image: '/images/winch_manual_theatrical_1790577892470.jpg',
    capacity: 'Up to 300 kg',
    capacityNewtons: '3,000 N (ELL)',
    lines: '1 to 4 lines',
    brakeSystem: 'Automatic self-locking pressure brake',
    drumType: 'Segmented narrow pilewind drum',
    standard: 'EN 17206',
    isFeatured: false,
    keyFeatures: [
      'High rope storage capacity within minimal overall width',
      'Automatic self-actuating friction brake holds load securely',
      'Removable crank handle with safety lock',
      'Ideal for mounting on side walls, galleries, or structural columns',
    ],
    applications: ['Masking Drapes & Borders', 'Acoustic Baffles', 'Rehearsal Rooms', 'Small Assembly Halls'],
    specs: [
      { label: 'Category', value: 'Manual Pilewind Winch' },
      { label: 'Capacity', value: 'Up to 3 000 N (300 kg)' },
      { label: 'Drum Width', value: 'Compact high-density pilewind' },
      { label: 'Safety', value: 'Integrated holding brake' },
    ],
  },
  {
    id: 'control-multi-unit',
    name: 'Multi-Unit Synchronous Control Cabinet',
    modelCode: 'MH-CTRL-MULTI',
    category: 'control-systems',
    categoryLabel: 'Control System',
    tagline: 'Coordinated multi-winch automation cabinet with 25+ years electronics heritage',
    description:
      'Developed with METALHOOD’s specialized European electronics engineering partner boasting over 25 years of stage automation experience. Allows synchronized or individual operation of multiple electrical lifting winches with dual-channel Emergency Power Off (EPO), phase monitoring, and group interlocking.',
    image: '/images/stage_control_system_1790577905027.jpg',
    brakeSystem: 'Coordinated brake monitoring with microswitch feedback',
    controlInterface: 'Keyed master panel + remote handheld interface',
    standard: 'EN 17206 / IEC 60204-1 / 2006/42/EC',
    isFeatured: true,
    keyFeatures: [
      'Controls 2 to 16+ winches in synchronous groups or single mode',
      'Dual-channel Emergency Power Off (EPO) circuit with safety relay',
      'Phase sequence, phase loss, and motor thermal overload monitoring',
      'Industrial IP65 powder-coated steel cabinet enclosure',
      'Electronics backed by 25+ years of European stage engineering expertise',
      'Keyed supervisor access switch prevents unauthorized motion',
    ],
    applications: ['Multi-batten Stage Rigging', 'Lighting Grid Synchronization', 'Auditorium Ceiling Acoustic Panels'],
    specs: [
      { label: 'Configuration', value: 'Modular 2 to 16+ winch drives' },
      { label: 'Safety Circuit', value: 'Dual-channel Safety Relay (Cat 3/4)' },
      { label: 'Protection Rating', value: 'IP55 / IP65 powder-coated steel' },
      { label: 'Emergency Stop', value: 'Integrated latching mushroom EPO' },
      { label: 'Standards', value: 'EN 17206 / EN 60204-1' },
      { label: 'Partner Heritage', value: '25+ years stage electronics' },
    ],
  },
  {
    id: 'control-remote-pendant',
    name: 'Industrial Wired & Radio Remote Pendants',
    modelCode: 'MH-REM-PRO',
    category: 'control-systems',
    categoryLabel: 'Control System',
    tagline: 'Heavy-duty handheld pendants with dual-speed control and mushroom EPO',
    description:
      'Rugged industrial handheld controllers engineered for stage technicians. Available in wired cable-reel versions and industrial wireless frequency-hopping radio remote versions. Features tactile dual-pressure buttons for creep and nominal travel speeds.',
    image: '/images/stage_control_system_1790577905027.jpg',
    controlInterface: 'Wired pendant or 868 MHz / 2.4 GHz wireless RF link',
    standard: 'IP65 ruggedized casing / EN 17206',
    isFeatured: false,
    keyFeatures: [
      'High-impact yellow & anthracite IP65 enclosure',
      'Two-step tactile pushbuttons for precise positioning',
      'Instantaneous mushroom Emergency Power Off (EPO)',
      'Clear directional status LED indicators',
      'Flexible polyurethane cable or secure encrypted wireless RF',
    ],
    applications: ['Stage Floor Positioning', 'Maintenance Rigging', 'Mobile Technician Workstations'],
    specs: [
      { label: 'Enclosure', value: 'Shock-resistant IP65 polyamide' },
      { label: 'Button Type', value: '2-step tactile UP / DOWN buttons' },
      { label: 'Safety', value: 'Integrated mushroom emergency stop' },
      { label: 'Options', value: 'Wired or encrypted wireless RF' },
    ],
  },
  {
    id: 'pulley-blocks-certified',
    name: 'Certified Pulley Blocks & Divert Pulleys',
    modelCode: 'MH-PB-SERIES',
    category: 'rigging-accessories',
    categoryLabel: 'Rigging & Upper Machinery',
    tagline: 'Tested and certified stage divert sheaves for smooth cable transmission',
    description:
      'Tested and certified in cooperation with the Investment and Development Agency of Latvia (LIAA) technology transfer program. Sheaves are CNC machined from high-tensile steel or low-friction cast polyamide with deep-groove sealed ball bearings for quiet, wear-free cable passage.',
    image: '/images/hero_stage_lifting_machinery_1790577867656.jpg',
    standard: 'Tested to European Directives & Standards via LIAA project',
    isFeatured: false,
    keyFeatures: [
      'Single and multi-groove sheave arrangements',
      'Certified wire rope groove profile matching 5mm to 10mm steel cables',
      'Heavy-duty sealed bearings require zero periodic lubrication',
      'Integrated cable retainers prevent rope jump',
      'Tested and verified under EU technology certification projects',
    ],
    applications: ['Gridiron Divert Lines', 'Loft Blocks', 'Head Blocks', 'Underhung Beam Rigging'],
    specs: [
      { label: 'Sheave Diameter', value: '150 mm to 300 mm' },
      { label: 'Material', value: 'Precision turned steel or cast Nylatron' },
      { label: 'Bearings', value: 'Dual sealed deep-groove ball bearings' },
      { label: 'Certification', value: 'LIAA technology transfer verified' },
    ],
  },
  {
    id: 'pulley-brackets-headblocks',
    name: 'Structural Head Blocks & Mounting Brackets',
    modelCode: 'MH-MB-HEAD',
    category: 'rigging-accessories',
    categoryLabel: 'Rigging & Upper Machinery',
    tagline: 'Engineered structural steel assemblies for I-beam and gridiron clamping',
    description:
      'Fabricated from certified European structural steel in METALHOOD’s own workshop. Designed for secure, vibration-resistant attachment to standard European HEA/HEB/IPE beams without on-site welding or drilling of building framework.',
    image: '/images/cnc_manufacturing_facility_1790577916831.jpg',
    standard: 'Eurocode 3 structural steel design compliance',
    isFeatured: false,
    keyFeatures: [
      'Bolt-on structural beam clamps for easy installation',
      'High-strength laser cut and CNC bent steel plate construction',
      'Durable powder coated or hot-dip galvanized finish',
      'Pre-calculated structural capacity ratings',
    ],
    applications: ['Fly Tower Steel I-Beams', 'Overhead Gridiron Rigging', 'Wall Mount Stiffeners'],
    specs: [
      { label: 'Material', value: 'Certified S355 European structural steel' },
      { label: 'Finish', value: 'Industrial powder coating / Galvanized' },
      { label: 'Beam Types', value: 'Compatible with standard European profiles' },
      { label: 'Manufacturing', value: 'Laser cut, CNC bent, and welded in Riga' },
    ],
  },
];

export const MANUFACTURING_PROCESS: ManufacturingService[] = [
  {
    id: 'engineering',
    stepNumber: '01',
    name: 'Mechanical Engineering & CAD Design',
    shortDesc: 'Product development, 3D CAD modeling, FEA stress analysis, and Design for Manufacturing (DFM).',
    detailedDesc:
      'Every METALHOOD stage winch and custom mechanism begins in our engineering department. We develop full 3D parametric CAD models, produce detailed fabrication drawings, calculate safety factors according to EN 17206, and optimize designs for efficient CNC manufacturing and longevity.',
    capabilities: ['SolidWorks 3D Modeling', 'FEA Structural Stress Simulation', 'DFM (Design for Manufacturing)', 'Prototyping & Technical Documentation'],
    equipment: '3D CAD Workstations & Simulation Software',
  },
  {
    id: 'laser-cutting',
    stepNumber: '02',
    name: 'CNC Sheet Metal & Tube Laser Cutting',
    shortDesc: 'High-precision cutting of steel plates and structural tubing with clean burr-free edges.',
    detailedDesc:
      'We operate advanced CNC laser cutting systems for flat sheet metal and structural tubing. Tight cutting tolerances ensure perfect fit-up for all winch chassis plates, brackets, and structural framing components with zero edge distortion.',
    capabilities: ['Sheet metal cutting up to 20 mm steel', 'CNC tube & pipe cutting for frame members', 'Tight dimensional tolerances (±0.1 mm)', 'Clean burr-free edges ready for bending'],
    equipment: 'Industrial CNC Fiber Laser Cutting Systems',
  },
  {
    id: 'bending',
    stepNumber: '03',
    name: 'CNC Bending & Press Brake Forming',
    shortDesc: 'Precision multi-axis press brake forming of complex high-tonnage structural components.',
    detailedDesc:
      'Our CNC press brakes deliver exact angle precision across long sheet metal components. Hydraulic crowning and multi-axis backgauging guarantee consistent angles and structural rigidity for all winch bodies and enclosure plates.',
    capabilities: ['Multi-axis CNC backgauge positioning', 'High-tonnage hydraulic bending capacity', 'Complex multiple-bend profiles', 'Consistent radius control on structural steels'],
    equipment: 'Multi-Axis CNC Hydraulic Press Brakes',
  },
  {
    id: 'cnc-machining',
    stepNumber: '04',
    name: 'CNC Turning with Live Tooling & CNC Milling',
    shortDesc: 'Precision machining of winch drums, bearing housings, shafts, and couplings.',
    detailedDesc:
      'Equipped with CNC turning centres featuring live tooling and Y-axis capabilities, alongside multi-axis CNC milling machines. We manufacture high-precision grooved cable drums, bearing journals, splined shafts, and custom gearbox adaptors in-house in a single setup.',
    capabilities: ['CNC Turning with Live Tooling & Y-Axis', '3-Axis & 4-Axis CNC Milling', 'Precision drum grooving with exact cable pitch', 'Tight tolerance boring for heavy-duty bearings'],
    equipment: 'CNC Turning Centers with Live Tooling & CNC Milling Machines',
  },
  {
    id: 'welding',
    stepNumber: '05',
    name: 'Certified Welding & Structural Assembly',
    shortDesc: 'Qualified MIG/MAG and TIG welding for structural steel and stage machinery chassis.',
    detailedDesc:
      'Our skilled fabricators perform precision welding of winch frameworks, mounting brackets, and custom theatrical assemblies. Every weld is inspected for penetration and structural integrity before surface treatment.',
    capabilities: ['MIG/MAG & TIG welding processes', 'Steel & aluminum structural fabrication', 'Dedicated welding jigs for distortion-free assemblies', 'Visual and dimensional QA inspections'],
    equipment: 'Professional Industrial MIG/TIG Inverter Welding Systems & Fixtures',
  },
  {
    id: 'finishing',
    stepNumber: '06',
    name: 'Surface Treatment, Powder Coating & QA',
    shortDesc: 'Industrial protective coating, hot-dip galvanization, full load testing and certification.',
    detailedDesc:
      'Components undergo abrasive blasting and high-durability electrostatic powder coating or galvanization to protect against corrosion. Finished winches are assembled, wired, bench tested under test loads, and verified for limit switch and brake operation.',
    capabilities: ['Durable electrostatic powder coating (standard RAL finishes)', 'Hot-dip galvanizing for harsh environments', 'Full mechanical and electrical bench load testing', 'Traceable quality assurance documentation'],
    equipment: 'Electrostatic Powder Coating Booth & Dedicated Test Rigging Bench',
  },
];

export const APPLICATIONS: ApplicationArea[] = [
  {
    id: 'theatres',
    title: 'Theatres & Opera Houses',
    description: 'Permanent stage upper machinery engineered for critical reliability during live performances. Designed with whisper-quiet drive systems, dual safety brakes, and synchronized controls.',
    useCases: ['Scenery battens & lighting pipes', 'Main proscenium curtains & borders', 'Acoustic baffle positioning', 'Point hoist theatrical rigging'],
    typicalEquipment: ['MH-500 & MH-1000 Electrical Winches', 'Multi-Unit Synchronous Control Cabinets', 'Certified Divert Pulley Blocks'],
  },
  {
    id: 'concert-halls',
    title: 'Concert Halls & Auditoriums',
    description: 'Precision hoisting systems for massive acoustic reflectors, architectural ceiling elements, and permanent lighting fixtures where positioning accuracy is paramount.',
    useCases: ['Acoustic cloud adjustments', 'Orchestra shell deployment', 'Heavy chandelier and lighting maintenance hoists'],
    typicalEquipment: ['MH-250 & MH-500 Winches', 'Synchronized Wall Panels', 'Engineered Head Blocks'],
  },
  {
    id: 'museums',
    title: 'Museums & Cultural Spaces',
    description: 'Discreet, ultra-reliable lifting mechanisms for suspended art installations, kinetic exhibitions, and adjustable lighting grids.',
    useCases: ['Kinetic sculpture movement', 'Suspended exhibition artifacts', 'Architectural lighting repositioning'],
    typicalEquipment: ['MH-150 Compact Hoists', 'Industrial Handheld Pendants', 'Low-profile Sheave Assemblies'],
  },
  {
    id: 'schools',
    title: 'Schools & Educational Venues',
    description: 'Safe, durable, budget-conscious lifting solutions engineered for high safety margins and ease of maintenance in school and university stages.',
    useCases: ['School hall lighting bars', 'Backstage manual scenery bars', 'Auditorium projection screen hoists'],
    typicalEquipment: ['MHM_W500 Manual Winches', 'MH-250 Electrical Winches', 'Keyed Safe-Access Controls'],
  },
];

export const WHY_METALHOOD = [
  {
    title: '100% In-House European Workshop',
    desc: 'Full control over the entire production cycle in our modern Riga workshop, from initial CAD modeling to CNC machining and final load testing.',
  },
  {
    title: 'Verified EU Materials & Supply Chain',
    desc: 'We partner strictly with certified European Union suppliers for high-tensile steels, geared motors, precision bearings, and fasteners.',
  },
  {
    title: '25+ Years Electronics Experience',
    desc: 'Our specialized electronics engineering partner brings over two decades of dedicated theatrical automation and safety control design.',
  },
  {
    title: 'LIAA Supported Technology Transfer',
    desc: 'Supported by the Investment and Development Agency of Latvia for process digitalization, rigorous testing, and EU standard certifications.',
  },
  {
    title: 'Custom Engineering Agility',
    desc: 'Direct communication with our engineering team to adapt winch dimensions, line counts, speeds, and mounting geometry to your venue constraints.',
  },
];
