import React, { useState } from 'react';
import { 
  Camera, 
  GraduationCap, 
  Trophy, 
  Users, 
  DollarSign, 
  Target, 
  Quote, 
  ChevronRight, 
  ExternalLink,
  X
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);

  // Official University of Michigan Hex Codes
  const UM_BLUE = "#00274C";
  const UM_MAIZE = "#FFCB05";
  const UM_LIGHT_BLUE = "#1D4477"; 
  const UM_PALE_BLUE = "#F0F4F8"; 

  // PHOTO CONFIGURATION
  // Replace these placeholders with the "Direct Links" from your Cloudinary collection
  const photoUrls = [
    "https://res.cloudinary.com/dapijn1ts/image/upload/v1777319107/C3_Ben-Growing-Up-Michigan_qmppuk.jpg",
    "https://res.cloudinary.com/dapijn1ts/image/upload/v1777319106/C4_Ben-Growing-Up-Michigan_ktcjmc.jpg",
    "https://res.cloudinary.com/dapijn1ts/image/upload/v1777319109/A1_Ben-Academic_cklq6d.jpg",
    "https://res.cloudinary.com/dapijn1ts/image/upload/v1777319104/B1_Ben-Basketball_hiayts.jpg",
    "https://res.cloudinary.com/dapijn1ts/image/upload/v1777319103/A2_Ben-Academic_a2ufje.jpg",
    "https://res.cloudinary.com/dapijn1ts/image/upload/v1777319105/A4_Ben-Academic_vcxldb.jpg"
  ];

  const data = {
    name: "Ben Heinemann",
    targetUniversity: "University of Michigan",
    fundingGoal: 320000, 
    currentFunding: 240000, 
    academicGpa: "4.65 / 4.0",
    academicRank: "Top 5%",
    athleticSport: "Basketball",
    athleticRole: "Forward/Captain",
  };

  const SectionHeader = ({ icon: Icon, title, bgColor, textColor }) => (
    <div 
      className="flex items-center gap-3 p-4 border-b" 
      style={{ backgroundColor: bgColor || 'white', color: textColor || 'inherit' }}
    >
      <Icon className="w-6 h-6" />
      <h2 className="text-xl font-bold uppercase tracking-tight">{title}</h2>
    </div>
  );

  const ProgressCircle = ({ current, total }) => {
    const percentage = Math.min(Math.round((current / total) * 100), 100);
    return (
      <div className="relative flex items-center justify-center w-32 h-32">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="64" cy="64" r="58" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="transparent" />
          <circle 
            cx="64" cy="64" r="58" 
            stroke={UM_MAIZE} 
            strokeWidth="8" 
            fill="transparent" 
            strokeDasharray={364} 
            strokeDashoffset={364 - (364 * percentage) / 100} 
            className="transition-all duration-1000" 
          />
        </svg>
        <div className="absolute text-center">
          <span className="text-2xl font-bold" style={{ color: UM_MAIZE }}>{percentage}%</span>
          <p className="text-[10px] uppercase opacity-80" style={{ color: UM_MAIZE }}>Funded</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      {/* Budget Modal Overlay */}
      {isBudgetModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setIsBudgetModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
          >
            <div className="p-6 text-white flex justify-between items-center" style={{ backgroundColor: UM_BLUE }}>
              <h3 className="font-bold text-xl uppercase tracking-tight">4-Year Budget Overview</h3>
              <button onClick={() => setIsBudgetModalOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span>Expense Item</span>
                  <span>Annual Amount</span>
                </div>
                <div className="h-px bg-slate-100"></div>
                {[
                  { item: "Tuition & Mandatory Fees", amount: "$240,000", status: "Partially Funded • Gap Needed" },
                  { item: "Housing & Meal Plan", amount: "$64,000", status: "Parent • Student Loan Funded" },
                  { item: "Books & Academic Supplies", amount: "$8,000", status: "Student Employment Funded" },
                  { item: "Personal & Tech Expenses", amount: "$12,000", status: "Student Employment Funded" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0">
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{row.item}</p>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase">{row.status}</p>
                    </div>
                    <span className="font-mono font-bold text-slate-700">{row.amount}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-200 mt-4">
                <p className="text-xs text-slate-500 leading-relaxed text-center italic">
                  "Transparency is our priority. All scholarship contributions are applied directly to the official University of Michigan student account portal."
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-t">
               <button 
                 onClick={() => setIsBudgetModalOpen(false)} 
                 className="w-full py-3 font-bold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
               >
                 Return to Portfolio
               </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-xl"
              style={{ backgroundColor: UM_BLUE }}
            >
              M
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800 uppercase">Student Portfolio</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
            {['profile', 'academics', 'athletics', 'extra'].map((t) => (
              <button 
                key={t}
                onClick={() => setActiveTab(t)} 
                className={`capitalize transition-all pb-1 ${activeTab === t ? 'text-[#00274C] font-bold border-b-2 border-[#00274C]' : 'hover:text-[#00274C]'}`}
              >
                {t === 'profile' ? 'Overview' : t}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 pt-8">
        {/* Header Hero */}
        <div className="rounded-2xl p-8 text-white mb-8 shadow-xl" style={{ backgroundColor: UM_BLUE }}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="font-semibold tracking-widest uppercase text-xs mb-1" style={{ color: '#A5B9D1' }}>
                Class of 2026 • High School Senior
              </p>
              <h1 className="text-4xl md:text-5xl font-black mb-2" style={{ color: UM_MAIZE }}>{data.name}</h1>
              <div className="flex items-center gap-2 italic text-sm" style={{ color: '#A5B9D1' }}>
                <Target className="w-4 h-4" />
                <span>Admitted to: <span className="font-bold underline">{data.targetUniversity}</span></span>
              </div>
            </div>
            <div className="p-5 rounded-xl border flex items-center gap-6" style={{ backgroundColor: UM_LIGHT_BLUE, borderColor: 'rgba(255,255,255,0.1)' }}>
              <div className="text-right">
                <p className="text-xs uppercase font-bold mb-1" style={{ color: '#A5B9D1' }}>Funding Bridge Needed</p>
                <p className="text-3xl font-black" style={{ color: UM_MAIZE }}>${(data.fundingGoal - data.currentFunding).toLocaleString()}</p>
              </div>
              <ProgressCircle current={data.currentFunding} total={data.fundingGoal} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* About Me Section */}
            <section className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <SectionHeader icon={Camera} title="About My Journey" bgColor={UM_BLUE} textColor={UM_MAIZE} />
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed mb-6 italic border-l-4 border-yellow-400 pl-4 text-lg">
                  "From the first time I set foot on the University of Michigan campus as a 6-year-old, I knew I was meant to be a Wolverine. My journey through high school has been defined by excellence in the classroom, leadership on the athletic field, and a commitment to service."
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-square bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-2 text-center group hover:border-[#00274C] transition-all cursor-pointer hover:bg-white hover:shadow-md">
                      <Camera className="w-8 h-8 text-slate-300 group-hover:text-[#00274C] mb-2" />
                      <span className="text-[10px] uppercase font-bold text-slate-400 group-hover:text-[#00274C]">Photo Placeholder {i+1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Detailed Tabs */}
            <div className="bg-white rounded-xl shadow-sm border min-h-[400px]">
              <div className="flex border-b overflow-x-auto scrollbar-hide">
                <button onClick={() => setActiveTab('profile')} className={`flex-1 p-4 font-bold text-xs uppercase tracking-widest ${activeTab === 'profile' ? 'bg-[#F0F4F8] text-[#00274C] border-b-2 border-[#00274C]' : 'text-slate-400'}`}>Overview</button>
                <button onClick={() => setActiveTab('academics')} className={`flex-1 p-4 font-bold text-xs uppercase tracking-widest ${activeTab === 'academics' ? 'bg-[#F0F4F8] text-[#00274C] border-b-2 border-[#00274C]' : 'text-slate-400'}`}>Academics</button>
                <button onClick={() => setActiveTab('athletics')} className={`flex-1 p-4 font-bold text-xs uppercase tracking-widest ${activeTab === 'athletics' ? 'bg-[#F0F4F8] text-[#00274C] border-b-2 border-[#00274C]' : 'text-slate-400'}`}>Athletics</button>
                <button onClick={() => setActiveTab('extra')} className={`flex-1 p-4 font-bold text-xs uppercase tracking-widest ${activeTab === 'extra' ? 'bg-[#F0F4F8] text-[#00274C] border-b-2 border-[#00274C]' : 'text-slate-400'}`}>Extra</button>
              </div>
              <div className="p-8">
                {activeTab === 'academics' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <h3 className="font-bold mb-4 text-[#00274C] text-xl">Academic Accomplishments</h3>
                    <ul className="space-y-4">
                      <li className="p-4 bg-slate-50 border rounded-lg hover:shadow-sm transition-all">
                        <p className="font-bold text-slate-800">National Honor Society</p>
                        <p className="text-sm text-slate-500">Member since Sophomore year, maintaining consistent excellence.</p>
                      </li>
                      <li className="p-4 bg-slate-50 border rounded-lg hover:shadow-sm transition-all">
                        <p className="font-bold text-slate-800">AP Scholar with Distinction</p>
                        <p className="text-sm text-slate-500">Recognition for exceptional scores across 6 advanced placement subjects.</p>
                      </li>
                    </ul>
                  </div>
                )}
                {activeTab === 'profile' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <h3 className="font-bold mb-4 text-[#00274C] text-xl">Why Michigan?</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Michigan is not just a destination; it's the standard. I am driven to join "The Leaders and Best" to contribute to a legacy of innovation and community leadership...
                    </p>
                  </div>
                )}
                {activeTab === 'athletics' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <h3 className="font-bold mb-4 text-[#00274C] text-xl">Athletic Record</h3>
                    <p className="text-slate-600 italic">Highlighting 4 years of varsity commitment and leadership as a team captain.</p>
                  </div>
                )}
                {activeTab === 'extra' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <h3 className="font-bold mb-4 text-[#00274C] text-xl">Beyond the Classroom</h3>
                    <p className="text-slate-600 italic">Exploring over 200 hours of community service and leadership in student government.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            <section className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <SectionHeader icon={DollarSign} title="Funding Status" bgColor="#F8FAFC" textColor={UM_BLUE} />
              <div className="p-6 space-y-4">
                <div className="flex justify-between text-sm py-1 border-b">
                  <span className="text-slate-600 font-medium">Verified University Aid</span>
                  <span className="font-bold text-green-600">$XX,XXX</span>
                </div>
                <div className="flex justify-between text-sm py-1 font-bold">
                  <span className="text-[#00274C] uppercase text-xs tracking-widest">Current Bridge Gap</span>
                  <span className="text-[#00274C] text-lg">${(data.fundingGoal - data.currentFunding).toLocaleString()}</span>
                </div>
                <button 
                  onClick={() => setIsBudgetModalOpen(true)}
                  className="w-full text-white font-bold py-3 rounded-lg shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 hover:opacity-90" 
                  style={{ backgroundColor: UM_LIGHT_BLUE }}
                >
                  Detailed Budget Plan <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </section>

            {/* What Others Say Section */}
            <section className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <SectionHeader icon={Quote} title="What Others Say" bgColor={UM_PALE_BLUE} textColor={UM_BLUE} />
              <div className="p-6 space-y-6">
                <div className="italic text-slate-600 text-sm leading-relaxed border-l-4 border-[#00274C] pl-4">
                  "Ben sets a new standard in intellectual curiosity and classroom leadership."
                  <p className="mt-2 font-bold text-[#00274C] not-italic">— Mrs. Teacher, Anatomy Honors</p>
                </div>
                <div className="italic text-slate-600 text-sm leading-relaxed border-l-4 border-[#00274C] pl-4">
                  "Ben is the true definition of a student-athlete. His discipline, teamwork, and dedication in the classroom is exactly what he brings to his basketball team."
                  <p className="mt-2 font-bold text-[#00274C] not-italic">— Coach Keith, Basketball</p>
                </div>
                <div className="italic text-slate-600 text-sm leading-relaxed border-l-4 border-[#00274C] pl-4">
                  "Ben is the type of captain who by leads by example and always supports his team."
                  <p className="mt-2 font-bold text-[#00274C] not-italic">— Genke , Varsity Basketball Teammate</p>
                </div>
                <div className="italic text-slate-600 text-sm leading-relaxed border-l-4 border-[#00274C] pl-4">
                  "Ben's character and integrity are a gold standard amongst his peers."
                  <p className="mt-2 font-bold text-[#00274C] not-italic">— Derek Berz, Family Friend and COO Torrance Memorial Hospital</p>
                </div>
              </div>
            </section>

            {/* Video CTA */}
            <div className="p-6 rounded-xl text-white text-center shadow-xl" style={{ backgroundColor: UM_BLUE }}>
              <div className="w-24 h-24 bg-white mx-auto mb-4 rounded-lg flex items-center justify-center shadow-inner">
                <div className="grid grid-cols-3 gap-1 p-2">
                  {[...Array(9)].map((_, i) => <div key={i} className="w-4 h-4 bg-[#00274C] rounded-sm"></div>)}
                </div>
              </div>
              <p className="text-xs font-black mb-1 uppercase tracking-widest" style={{ color: UM_MAIZE }}>Scan for Video Intro</p>
              <p className="text-[10px] opacity-75 px-4">Watch a personal statement regarding my journey to the University of Michigan.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-4 mt-16 text-center text-slate-400 text-[10px] border-t pt-8">
        <p>© 2026 Ben Heinemann • University Of Michigan Funding Request Microsite</p>
        <p className="mt-2 font-black tracking-[0.2em] text-[#00274C]">GO BLUE!</p>
      </footer>
    </div>
  );
};

export default App;
