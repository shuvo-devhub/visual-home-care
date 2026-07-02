// Shared service catalog + per-service detail content, used by services.html and service.html
const SERVICES = [
  { slug: 'companion', icon: 'heart-handshake', title: 'Companion care', desc: 'Friendly company, conversation, errands, and a watchful eye so no one feels alone.' },
  { slug: 'personal', icon: 'hand-heart', title: 'Personal care', desc: 'Dignified help with bathing, dressing, grooming, and mobility.' },
  { slug: 'skilled', icon: 'stethoscope', title: 'Skilled nursing', desc: 'Clinical care at home under RN oversight — medications, wounds, and monitoring.' },
  { slug: 'dementia', icon: 'brain', title: 'Dementia care', desc: 'Patient, specially-trained support that brings calm and gentle routine.' },
  { slug: 'respite', icon: 'coffee', title: 'Respite care', desc: 'Short-term relief for family caregivers, so you can rest and recharge.' },
  { slug: 'postsurgery', icon: 'activity', title: 'Post-surgery care', desc: 'Recovery support at home — mobility, meds, and a safe return.' },
];

const SERVICE_DATA = {
  companion: {
    tagline: 'Warm company and a helping hand — conversation, errands, and a watchful eye so your loved one never feels alone.',
    included: ['Friendly conversation & company', 'Errands & grocery shopping', 'Rides to appointments', 'Meal prep & light housekeeping', 'Medication reminders', 'Hobbies, walks & activities'],
    cost: 'Companion care is often our most affordable option — billed hourly, with lower rates for longer visits. We’ll build a schedule that fits your budget and give you a clear estimate at your free assessment.',
    scenarios: [
      { icon: 'coffee', title: 'Company through the day', desc: 'A caregiver visits a few afternoons a week to chat, play cards, and share a cup of tea — so Mom has someone to look forward to.' },
      { icon: 'car-front', title: 'Getting out safely', desc: 'Rides to the doctor, church, and the grocery store keep Dad connected to the life he loves.' },
    ],
    faqs: [
      { q: 'What does companion care include?', a: 'Conversation and company, help with errands and shopping, transportation, meal prep, light housekeeping, and medication reminders — everyday support that keeps life full and connected.' },
      { q: 'Is companion care medical?', a: 'No — it’s non-medical support focused on company, safety, and daily living. If clinical needs arise, our RN can add personal or skilled care to the plan.' },
      { q: 'How many hours can we schedule?', a: 'From a couple of hours a week to daily visits. Many families start small and adjust as needs change.' },
      { q: 'Will it be the same caregiver each time?', a: 'Yes — we build a small, consistent care team so your loved one sees familiar faces.' },
      { q: 'Is Visual Home Care licensed and insured?', a: 'Yes — licensed, bonded, and insured, and every caregiver is a background-checked W-2 employee under RN oversight.' },
    ],
  },
  personal: {
    tagline: 'Dignified, hands-on help with the everyday activities that keep your loved one safe, clean, and comfortable — delivered with patience and respect.',
    included: ['Bathing, dressing & grooming', 'Mobility & safe transfers', 'Toileting & incontinence care', 'Medication reminders', 'Meal prep & feeding support', 'Light housekeeping & laundry'],
    cost: 'Most families pay by the hour, with lower rates for longer shifts. A few morning visits a week costs far less than round-the-clock care — we’ll give you a clear, personalized estimate at your free assessment. No surprises.',
    scenarios: [
      { icon: 'sunrise', title: 'Morning help to start the day', desc: 'A caregiver arrives each morning to help Mom bathe, dress, and have breakfast — so every day starts safely and with dignity.' },
      { icon: 'shield', title: 'Safer moves after a fall', desc: 'After Dad’s fall, we added transfer support and mobility help so he can move around the house without fear.' },
    ],
    faqs: [
      { q: 'What does personal care include?', a: 'Help with bathing, dressing, grooming, toileting, mobility and transfers, and medication reminders — always with patience and dignity.' },
      { q: 'How many hours can we schedule?', a: 'Anywhere from a few hours a week to 24/7 live-in support. Many families start small and adjust as needs change.' },
      { q: 'How much does personal care cost?', a: 'Most families pay by the hour, with lower rates for longer shifts. A few morning visits a week costs far less than round-the-clock care — we’ll give you a clear estimate at your free assessment.' },
      { q: 'Will it be the same caregiver each time?', a: 'Yes — we build a small, consistent care team so your loved one sees familiar faces, with trained backups for continuity.' },
      { q: 'Is Visual Home Care licensed and insured?', a: 'Yes. We’re licensed, bonded, and insured, and every caregiver is a background-checked W-2 employee under RN oversight.' },
    ],
  },
  skilled: {
    tagline: 'Clinical care at home, led by registered nurses — from medication management to wound care and health monitoring.',
    included: ['Medication management', 'Wound care & dressing changes', 'Injections & IV support', 'Vital signs & health monitoring', 'Post-hospital care coordination', 'Chronic condition management'],
    cost: 'Skilled nursing is billed by the visit or hour depending on need, and may be partly covered by insurance or Medicare in some cases. We’ll review your options at your free assessment.',
    scenarios: [
      { icon: 'pill', title: 'Managing complex medications', desc: 'Our nurse sets up and oversees a safe medication routine, catching interactions and keeping the doctor informed.' },
      { icon: 'activity', title: 'Recovery after a hospital stay', desc: 'Skilled visits at home speed healing and reduce the risk of readmission after surgery or illness.' },
    ],
    faqs: [
      { q: 'Who provides skilled nursing?', a: 'Licensed registered nurses (RNs) and licensed practical nurses (LPNs), overseen by our Director of Nursing.' },
      { q: 'Do I need a doctor’s order?', a: 'Some skilled services require a physician’s order — we’ll help coordinate that with your loved one’s doctor.' },
      { q: 'Is skilled nursing covered by insurance?', a: 'It may be partly covered by Medicare or private insurance depending on the situation. We’ll help you understand what applies.' },
      { q: 'Can nursing be combined with other care?', a: 'Yes — we often pair skilled nursing with personal or companion care for complete support.' },
      { q: 'Is Visual Home Care licensed and insured?', a: 'Yes — licensed, bonded, and insured, with RN oversight on every plan.' },
    ],
  },
  dementia: {
    tagline: 'Patient, specially-trained support for memory loss — bringing calm, gentle routine, and safety to every day.',
    included: ['Consistent daily routines', 'Safety & wandering prevention', 'Engaging memory activities', 'Personal care with patience', 'Behavioral & mood support', 'Family guidance & respite'],
    cost: 'Dementia care is billed hourly like our other in-home services, with plans that scale from a few hours to around-the-clock support. We’ll build one to fit your family at your free assessment.',
    scenarios: [
      { icon: 'sun', title: 'Calm through sundowning', desc: 'A familiar caregiver brings gentle routine and reassurance during the hard late-afternoon hours, easing anxiety.' },
      { icon: 'puzzle', title: 'Meaningful engagement', desc: 'Music, photos, and simple activities spark connection and joy — meeting your loved one where they are.' },
    ],
    faqs: [
      { q: 'Are caregivers trained in dementia care?', a: 'Yes — our caregivers receive specialized dementia and Alzheimer’s training, and plans are guided by a Certified Dementia Practitioner.' },
      { q: 'How do you handle difficult behaviors?', a: 'With patience, familiarity, and proven techniques — redirection, routine, and a calm presence rather than confrontation.' },
      { q: 'Can you help with wandering and safety?', a: 'Yes — we build safety into the daily routine and home environment to reduce wandering and fall risks.' },
      { q: 'Will it be the same caregiver?', a: 'Consistency matters most in dementia care, so we prioritize a small, familiar care team.' },
      { q: 'Is Visual Home Care licensed and insured?', a: 'Yes — licensed, bonded, and insured, with RN oversight on every plan.' },
    ],
  },
  respite: {
    tagline: 'Short-term relief for family caregivers — so you can rest, travel, or simply recharge, knowing your loved one is in good hands.',
    included: ['A few hours or several days', 'Daytime or overnight relief', 'Full personal & companion care', 'Medication reminders', 'Meals & household help', 'Seamless handoff & updates'],
    cost: 'Respite care is billed hourly or daily, with no long-term commitment — use it as often or as little as you need. We’ll give you a clear estimate up front.',
    scenarios: [
      { icon: 'plane', title: 'Peace of mind while you’re away', desc: 'Travel for work or a family event knowing a trusted caregiver is with Mom day and night.' },
      { icon: 'heart', title: 'A break to recharge', desc: 'Even a few hours a week lets family caregivers rest, run errands, and return refreshed.' },
    ],
    faqs: [
      { q: 'What is respite care?', a: 'Temporary care that gives family caregivers a break — from a few hours to several days or overnight stays.' },
      { q: 'How far in advance should I book?', a: 'When possible, a little notice helps us match the right caregiver — but we also do our best to help in a pinch.' },
      { q: 'What does the caregiver do?', a: 'Everything you need covered — personal care, companionship, meals, medication reminders, and household help.' },
      { q: 'Is there a minimum commitment?', a: 'No long-term contract — respite care is designed to flex around your life.' },
      { q: 'Is Visual Home Care licensed and insured?', a: 'Yes — licensed, bonded, and insured, with RN oversight on every plan.' },
    ],
  },
  postsurgery: {
    tagline: 'Recovery support at home after surgery or a hospital stay — helping your loved one heal safely and avoid setbacks.',
    included: ['Safe mobility & transfers', 'Medication & pain reminders', 'Wound care coordination', 'Meal prep & nutrition', 'Rides to follow-up visits', 'Help with daily tasks'],
    cost: 'Post-surgery care is usually short-term and billed hourly, scaling down as recovery progresses. We’ll plan it around your loved one’s recovery timeline at the free assessment.',
    scenarios: [
      { icon: 'house', title: 'A safe return home', desc: 'After a hip replacement, a caregiver helps Dad move safely, keep his schedule, and stay on top of his exercises.' },
      { icon: 'clipboard-check', title: 'Fewer setbacks', desc: 'Support with meds, follow-ups, and warning signs helps prevent complications and hospital readmission.' },
    ],
    faqs: [
      { q: 'How soon can care start?', a: 'Often the same day as discharge — we can coordinate directly with the hospital or discharge planner.' },
      { q: 'What does post-surgery care include?', a: 'Mobility help, medication and appointment reminders, wound care coordination, meals, transportation, and daily support during recovery.' },
      { q: 'How long does it last?', a: 'As long as recovery needs it — many families use it for a few weeks and taper off as strength returns.' },
      { q: 'Can you coordinate with our doctors?', a: 'Yes — our RN can coordinate with physicians and therapists to keep recovery on track.' },
      { q: 'Is Visual Home Care licensed and insured?', a: 'Yes — licensed, bonded, and insured, with RN oversight on every plan.' },
    ],
  },
};
