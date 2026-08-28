export const disciplines = [
  'Any',
  'General',
  'Mechanical',
  'Electrical',
  'Electronic',
  'Civil',
  'Aerospace',
  'Biomedical',
  'Environmental',
] as const;

export const modules = [
  'Any',
  'Mechanics',
  'Programming',
  'Circuits',
  'Materials',
  'Structures',
  'Thermodynamics',
  'Fluids',
  'CAD',
] as const;

export const buildStyles = [
  'Any',
  'Physical build',
  'Electronics',
  'Robotics',
  'Data/software',
  'Design/CAD',
] as const;

export type Project = {
  title: string;
  discipline: string[];
  modules: string[];
  style: string;
  summary: string;
  outcome: string;
  difficulty: string;
  weeks: number;
  cost: number;
  parts: string[];
  skills: string[];
  milestones: string[];
  cv: string;
};

export type ProjectFilters = {
  discipline: string;
  module: string;
  budget: number;
  weeks: number;
  style: string;
};

export const projects: Project[] = [
  {
    title: 'Water-Rocket Flight Lab',
    discipline: ['Mechanical', 'Aerospace'],
    modules: ['Mechanics', 'Thermodynamics'],
    style: 'Physical build',
    summary: 'Design a reusable pressurised-water rocket and test how water volume, fin geometry and launch angle affect flight.',
    outcome: 'A safe working prototype, flight dataset and engineering test report.',
    difficulty: 'Starter', weeks: 3, cost: 25,
    parts: ['PET bottles', 'Cork + bicycle valve', 'Card fins', 'Phone slow-motion camera'],
    skills: ['CAD', 'Experimental design', 'Data analysis'],
    milestones: ['Sketch and risk-assess the launcher', 'Build and baseline-test', 'Run a controlled experiment', 'Analyse results and present trade-offs'],
    cv: 'Designed and experimentally validated a reusable water rocket, using controlled testing and data analysis to improve flight performance.',
  },
  {
    title: 'Smart Plant Guardian', discipline: ['Electrical', 'Electronic', 'General'], modules: ['Programming', 'Circuits'], style: 'Electronics',
    summary: 'Build a sensor that measures soil moisture and warns when a plant needs water, with a simple status dashboard.',
    outcome: 'A working sensor node, calibrated readings and a live dashboard.', difficulty: 'Starter', weeks: 2, cost: 20,
    parts: ['Arduino-compatible board', 'Moisture sensor', 'LED or buzzer', 'Breadboard'], skills: ['Embedded C', 'Circuits', 'Calibration'],
    milestones: ['Read raw sensor values', 'Calibrate dry and wet limits', 'Add alerts', 'Document accuracy and limitations'],
    cv: 'Built and calibrated an embedded plant-monitoring system, translating sensor data into reliable real-time user alerts.',
  },
  {
    title: 'Desktop Wind Turbine', discipline: ['Mechanical', 'Electrical', 'Aerospace'], modules: ['Mechanics', 'Circuits'], style: 'Physical build',
    summary: 'Create interchangeable turbine blades and measure which geometry generates the most electrical power in a desk-fan wind tunnel.',
    outcome: 'A miniature generator and a defensible blade-design comparison.', difficulty: 'Intermediate', weeks: 4, cost: 35,
    parts: ['Small DC motor', '3D-printed/card blades', 'Multimeter', 'Wooden frame'], skills: ['Prototyping', 'Power measurement', 'Optimisation'],
    milestones: ['Define blade variables', 'Build a safe test rig', 'Test three blade sets', 'Recommend an optimum design'],
    cv: 'Optimised a small wind turbine through iterative prototyping, measuring electrical output across three blade geometries.',
  },
  {
    title: 'Bridge-in-a-Box Challenge', discipline: ['Civil', 'Mechanical', 'General'], modules: ['Materials', 'Structures'], style: 'Physical build',
    summary: 'Design a lightweight bridge from low-cost materials, predict its failure load and test it to destruction.',
    outcome: 'A tested structure, load-to-weight score and failure analysis.', difficulty: 'Starter', weeks: 2, cost: 15,
    parts: ['Wooden sticks', 'PVA glue', 'Weights', 'Kitchen scale'], skills: ['Statics', 'Material selection', 'Failure analysis'],
    milestones: ['Calculate reactions and member forces', 'Choose a truss layout', 'Build consistently', 'Load-test and explain failure'],
    cv: 'Designed and load-tested a lightweight truss bridge, comparing analytical predictions with observed structural failure.',
  },
  {
    title: 'Room Energy Detective', discipline: ['Electrical', 'Electronic', 'General'], modules: ['Programming', 'Thermodynamics'], style: 'Data/software',
    summary: 'Log temperature and light use to identify wasted energy, then model the impact of simple efficiency changes.',
    outcome: 'A week of environmental data and an evidence-based energy plan.', difficulty: 'Starter', weeks: 3, cost: 15,
    parts: ['Temperature/light sensor', 'Microcontroller', 'CSV spreadsheet', 'Optional Python notebook'], skills: ['Python', 'Data visualisation', 'Energy analysis'],
    milestones: ['Plan sampling and privacy', 'Collect clean data', 'Find usage patterns', 'Model savings and communicate recommendations'],
    cv: 'Developed an environmental data logger and analysed usage patterns to propose quantified room-energy improvements.',
  },
  {
    title: 'Line-Following Delivery Rover', discipline: ['Electronic', 'Electrical', 'Mechanical'], modules: ['Programming', 'Circuits'], style: 'Robotics',
    summary: 'Build a small rover that follows a marked route and delivers a lightweight payload reliably.',
    outcome: 'An autonomous prototype with measured speed and route-success rate.', difficulty: 'Intermediate', weeks: 5, cost: 55,
    parts: ['Robot chassis', 'Two motors + driver', 'IR sensors', 'Microcontroller'], skills: ['Control logic', 'Debugging', 'Systems integration'],
    milestones: ['Assemble drivetrain', 'Read and calibrate sensors', 'Tune steering control', 'Run repeatability trials'],
    cv: 'Integrated sensors, motor control and embedded software to deliver an autonomous line-following rover with measured reliability.',
  },
  {
    title: 'Flood-Safe Street Model', discipline: ['Civil', 'Environmental', 'General'], modules: ['Fluids', 'Materials'], style: 'Physical build',
    summary: 'Model a neighbourhood drainage system and compare permeable surfaces, channels and storage during simulated rainfall.',
    outcome: 'A tabletop model and quantified comparison of flood interventions.', difficulty: 'Intermediate', weeks: 4, cost: 30,
    parts: ['Foam board', 'Gravel and sponge', 'Measuring jug', 'Collection trays'], skills: ['Fluid flow', 'Sustainable design', 'Measurement'],
    milestones: ['Map the catchment', 'Build a repeatable rain rig', 'Test three interventions', 'Recommend a combined solution'],
    cv: 'Modelled urban flood mitigation strategies and quantified runoff reduction across three sustainable drainage interventions.',
  },
  {
    title: 'Assistive Grip Re-Design', discipline: ['Biomedical', 'Mechanical', 'General'], modules: ['CAD', 'Materials'], style: 'Design/CAD',
    summary: 'Redesign an everyday handle for a user with limited grip strength, using ergonomic measurements and rapid prototypes.',
    outcome: 'A user-centred CAD model, prototype and evaluation matrix.', difficulty: 'Starter', weeks: 3, cost: 20,
    parts: ['Card/foam prototypes', 'Callipers', 'CAD software', 'Optional 3D print'], skills: ['Human-centred design', 'CAD', 'Design evaluation'],
    milestones: ['Define user needs ethically', 'Measure and ideate', 'Prototype two concepts', 'Evaluate and refine'],
    cv: 'Applied human-centred design and rapid prototyping to improve an everyday grip for users with reduced hand strength.',
  },
];

export function filterProjects(filters: ProjectFilters): Project[] {
  return projects.filter((project) =>
    (filters.discipline === 'Any' || project.discipline.includes(filters.discipline)) &&
    (filters.module === 'Any' || project.modules.includes(filters.module)) &&
    project.cost <= filters.budget &&
    project.weeks <= filters.weeks &&
    (filters.style === 'Any' || project.style === filters.style),
  );
}

export function createProjectBrief(project: Project): string {
  return `${project.title}\n\n${project.summary}\n\nMilestones:\n- ${project.milestones.join('\n- ')}\n\nCV: ${project.cv}`;
}

