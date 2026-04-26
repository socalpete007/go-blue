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
  ExternalLink 
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Official University of Michigan Hex Codes
  const UM_BLUE = "#00274C";
  const UM_MAIZE = "#FFCB05";
  const UM_LIGHT_BLUE = "#1D4477"; 
  const UM_PALE_BLUE = "#F0F4F8"; 

  const data = {
    name: "Ben Heinemann",
    targetUniversity: "University of Michigan",
    fundingGoal: "160000", // Update this to your total gap
    currentFunding: "75000", // Update this as you secure funds
    academicGpa: "4.7 / 4.0",
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
            <span className="font-bold text-lg tracking-tight text-slate-800">Student Portfolio</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
            {['profile', 'academics', 'athletics', 'extra'].map((t) => (
              <button 
                key={t}
                onClick={() => setActiveTab(t)} 
                className={`capitalize ${activeTab === t ? 'text-[#00274C] font-bold border-b-2 border-[#00274C]' : 'hover:text-[#00274C]'}`}
              >
                {t}
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
                Class of 2025 • High School Senior
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
                <p className="text-slate-600 leading-relaxed mb-6 italic border-l-4 border-yellow-400 pl-4">
                  "From the first time I set foot on the University of Michigan campus as a 6-year-old, I knew I was meant to be a Wolverine. My journey through high school has been defined by excellence in the classroom, leadership on the athletic field, and a commitment to service."
                </p>
                {/* 6 Photo Grid Placeholders */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-square bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-2 text-center group hover:border-[#00274C] transition-all">
                      <Camera className="w-8 h-8 text-slate-300 group-hover:text-[#00274C] mb-2" />
                      <span className="text-[10px] uppercase font-bold text-slate-400 group-hover:text-[#00274C]">Photo Placeholder {i+1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Detailed Tabs */}
            <div className="bg-white rounded-xl shadow-sm border min-h-[400px]">
              <div className="flex border-b overflow-x-auto">
                <button onClick={() => setActiveTab('profile')} className={`flex-1 p-4 font-bold text-xs uppercase ${activeTab === 'profile' ? 'bg-[#F0F4F8] text-[#00274C] border-b-2 border-[#00274C]' : 'text-slate-400'}`}>Overview</button>
                <button onClick={() => setActiveTab('academics')} className={`flex-1 p-4 font-bold text-xs uppercase ${activeTab === 'academics' ? 'bg-[#F0F4F8] text-[#00274C] border-b-2 border-[#00274C]' : 'text-slate-400'}`}>Academics</button>
                <button onClick={() => setActiveTab('athletics')} className={`flex-1 p-4 font-bold text-xs uppercase ${activeTab === 'athletics' ? 'bg-[#F0F4F8] text-[#00274C] border-b-2 border-[#00274C]' : 'text-slate-400'}`}>Athletics</button>
                <button onClick={() => setActiveTab('extra')} className={`flex-1 p-4 font-bold text-xs uppercase ${activeTab === 'extra' ? 'bg-[#F0F4F8] text-[#00274C] border-b-2 border-[#00274C]' : 'text-slate-400'}`}>Extra</button>
              </div>
              <div className="p-8">
                {activeTab === 'academics' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2">
                    <h3 className="font-bold mb-4 text-[#00274C]">Academic Accomplishments</h3>
                    <ul className="space-y-4">
                      <li className="p-4 bg-slate-50 border rounded-lg"><strong>National Honor Society:</strong> Member since Sophomore year.</li>
                      <li className="p-4 bg-slate-50 border rounded-lg"><strong>AP Scholar:</strong> Distinction in STEM and Humanities.</li>
                    </ul>
                  </div>
                )}
                {activeTab === 'profile' && <p className="text-slate-500">Provide a high-level summary of the son's goals and why this university is the top choice.</p>}
                {activeTab === 'athletics' && <p className="text-slate-500">Highlight varsity letters, leadership roles, and key statistics.</p>}
                {activeTab === 'extra' && <p className="text-slate-500">Detail community service, clubs, and summer internships.</p>}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            <section className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <SectionHeader icon={DollarSign} title="Funding Status" bgColor="#F8FAFC" textColor={UM_BLUE} />
              <div className="p-6 space-y-4">
                <div className="flex justify-between text-sm py-1 border-b">
                  <span className="text-slate-600">University Aid</span>
                  <span className="font-bold text-green-600">$XX,XXX</span>
                </div>
                <div className="flex justify-between text-sm py-1 font-bold">
                  <span className="text-[#00274C] uppercase text-xs">Bridge Gap</span>
                  <span className="text-[#00274C]">${(data.fundingGoal - data.currentFunding).toLocaleString()}</span>
                </div>
                <button className="w-full text-white font-bold py-3 rounded-lg shadow-lg active:scale-95 transition-all" style={{ backgroundColor: UM_LIGHT_BLUE }}>
                  Detailed Budget Plan <ExternalLink className="ml-2 inline w-4 h-4" />
                </button>
              </div>
            </section>

            <div className="p-6 rounded-xl text-white text-center shadow-xl" style={{ backgroundColor: UM_BLUE }}>
              <div className="w-24 h-24 bg-white mx-auto mb-4 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-3 gap-1 p-2">
                  {[...Array(9)].map((_, i) => <div key={i} className="w-4 h-4 bg-[#00274C]"></div>)}
                </div>
              </div>
              <p className="text-xs font-black mb-1" style={{ color: UM_MAIZE }}>Scan for Video Intro</p>
              <p className="text-[10px] opacity-75">Watch a personal message about Michigan.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-4 mt-16 text-center text-slate-400 text-[10px]">
        <p>© 2025 [Family Name] • GO BLUE!</p>
      </footer>
    </div>
  );
};

export default App;
