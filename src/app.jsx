import React, { useState } from 'react';
import { Camera, GraduationCap, Trophy, Users, DollarSign, Target, Quote, ChevronRight, ExternalLink } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // U of M Brand Colors
  const UM_BLUE = "#00274C";
  const UM_MAIZE = "#FFCB05";
  const UM_LIGHT_BLUE = "#1D4477"; 
  const UM_PALE_BLUE = "#E6E9ED"; 

  const data = {
    name: "[Son's Name]",
    targetUniversity: "University of Michigan",
    fundingGoal: 25000,
    currentFunding: 15000,
    academicGpa: "4.XX / 4.0",
    academicRank: "Top X%",
    athleticSport: "[Primary Sport]",
    athleticRole: "[Position/Captain]",
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
      {/* Navigation Bar */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: UM_BLUE }}
            >
              M
            </div>
            <span className="font-bold text-lg tracking-tight">Student Funding Portfolio</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
            <button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'text-[#00274C] font-bold border-b-2 border-[#00274C]' : 'hover:text-[#00274C]'}>Overview</button>
            <button onClick={() => setActiveTab('academics')} className={activeTab === 'academics' ? 'text-[#00274C] font-bold border-b-2 border-[#00274C]' : 'hover:text-[#00274C]'}>Academics</button>
            <button onClick={() => setActiveTab('athletics')} className={activeTab === 'athletics' ? 'text-[#00274C] font-bold border-b-2 border-[#00274C]' : 'hover:text-[#00274C]'}>Athletics</button>
            <button onClick={() => setActiveTab('extra')} className={activeTab === 'extra' ? 'text-[#00274C] font-bold border-b-2 border-[#00274C]' : 'hover:text-[#00274C]'}>Involvement</button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 pt-8">
        
        {/* Header Hero */}
        <div 
          className="rounded-2xl p-8 text-white mb-8 shadow-xl"
          style={{ backgroundColor: UM_BLUE }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p 
                className="font-semibold tracking-widest uppercase text-sm mb-1"
                style={{ color: '#A5B9D1' }}
              >
                Class of 2025 • High School Senior
              </p>
              <h1 className="text-4xl md:text-5xl font-black mb-2" style={{ color: UM_MAIZE }}>
                {data.name}
              </h1>
              <div className="flex items-center gap-2 italic" style={{ color: '#A5B9D1' }}>
                <Target className="w-4 h-4" />
                <span>Admitted to: <span className="font-bold underline">{data.targetUniversity}</span></span>
              </div>
            </div>

            <div 
              className="p-5 rounded-xl border flex items-center gap-6"
              style={{ backgroundColor: UM_LIGHT_BLUE, borderColor: 'rgba(255,255,255,0.1)' }}
            >
              <div className="text-right">
                <p 
                  className="text-xs uppercase font-bold mb-1"
                  style={{ color: '#A5B9D1' }}
                >
                  Funding Bridge Needed
                </p>
                <p className="text-3xl font-black" style={{ color: UM_MAIZE }}>
                  ${(data.fundingGoal - data.currentFunding).toLocaleString()}
                </p>
              </div>
              <ProgressCircle current={data.currentFunding} total={data.fundingGoal} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <SectionHeader 
                icon={Camera} 
                title="About My Journey" 
                bgColor={UM_BLUE} 
                textColor={UM_MAIZE} 
              />
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed mb-6">
                  "From the first time I set foot on the University of Michigan campus as a 6-year-old, I knew I was meant to be a Wolverine. My journey through high school has been defined by excellence in the classroom, leadership on the athletic field, and a commitment to service. This bridge funding represents the final step in realizing a lifelong dream..."
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { label: "Childhood Dream", year: "2012" },
                    { label: "Academic Milestone", year: "2018" },
                    { label: "Varsity Highlight", year: "2023" },
                    { label: "Honor Society", year: "2024" },
                    { label: "Community Service", year: "2024" },
                    { label: "Admissions Letter", year: "2025" }
                  ].map((img, i) => (
                    <div key={i} className="group relative aspect-square bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 flex flex-col items-center justify-center overflow-hidden hover:border-[#00274C] transition-colors cursor-pointer text-center p-2">
                      <Camera className="w-8 h-8 text-slate-300 group-hover:text-[#00274C] mb-2" />
                      <span className="text-[10px] uppercase font-bold text-slate-400 group-hover:text-[#00274C]">{img.label}</span>
                      <span className="text-[10px] text-slate-300">{img.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="bg-white rounded-xl shadow-sm border min-h-[400px]">
              <div className="flex border-b overflow-x-auto">
                <button onClick={() => setActiveTab('profile')} className={`flex-1 min-w-[100px] p-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${activeTab === 'profile' ? 'bg-[#F0F4F8] text-[#00274C] border-b-2 border-[#00274C]' : 'text-slate-400 hover:bg-slate-50'}`}>
                   Overview
                </button>
                <button onClick={() => setActiveTab('academics')} className={`flex-1 min-w-[100px] p-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${activeTab === 'academics' ? 'bg-[#F0F4F8] text-[#00274C] border-b-2 border-[#00274C]' : 'text-slate-400 hover:bg-slate-50'}`}>
                  <GraduationCap className="w-4 h-4" /> Academic
                </button>
                <button onClick={() => setActiveTab('athletics')} className={`flex-1 min-w-[100px] p-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${activeTab === 'athletics' ? 'bg-[#F0F4F8] text-[#00274C] border-b-2 border-[#00274C]' : 'text-slate-400 hover:bg-slate-50'}`}>
                  <Trophy className="w-4 h-4" /> Athletic
                </button>
                <button onClick={() => setActiveTab('extra')} className={`flex-1 min-w-[100px] p-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${activeTab === 'extra' ? 'bg-[#F0F4F8] text-[#00274C] border-b-2 border-[#00274C]' : 'text-slate-400 hover:bg-slate-50'}`}>
                  <Users className="w-4 h-4" /> Extra
                </button>
              </div>

              <div className="p-8">
                {activeTab === 'academics' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#00274C]">Top Academic Honors</h3>
                    <ul className="space-y-4">
                      {[
                        { title: "National Honor Society", detail: "Member since Sophomore year, maintain 4.0 GPA." },
                        { title: "AP Scholar with Distinction", detail: "Average score of 4.5 across 6 AP Exams." },
                        { title: "Top 5% of Graduating Class", detail: "Ranked X out of XXX students." }
                      ].map((item, i) => (
                        <li key={i} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                          <div className="bg-[#E6E9ED] p-2 rounded h-fit"><ChevronRight className="w-4 h-4 text-[#00274C]" /></div>
                          <div>
                            <p className="font-bold text-slate-800">{item.title}</p>
                            <p className="text-sm text-slate-500">{item.detail}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeTab === 'profile' && (
                   <div className="animate-in fade-in slide-in-from-bottom-2">
                     <h3 className="text-lg font-bold mb-4 text-[#00274C]">Mission Statement</h3>
                     <p className="text-slate-600 leading-relaxed italic border-l-4 border-yellow-400 pl-4 py-2">
                       "To embody the Michigan spirit of 'The Leaders and Best' by combining rigorous academic inquiry with a commitment to community impact and athletic excellence."
                     </p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                          <h4 className="font-bold text-[#00274C] mb-2 uppercase text-xs">Primary Goal</h4>
                          <p className="text-sm text-slate-600">Secure $10,000 in bridge funding to cover housing and essential academic materials for the Freshman year.</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                          <h4 className="font-bold text-[#00274C] mb-2 uppercase text-xs">Academic Focus</h4>
                          <p className="text-sm text-slate-600">Pursuing a degree in [Your Intended Major], with a focus on [Specific Interest].</p>
                        </div>
                     </div>
                   </div>
                )}
                {activeTab === 'athletics' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2">
                    <h3 className="text-lg font-bold mb-4 text-[#00274C]">Athletic Achievements</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
                        <p className="text-2xl font-black text-[#00274C]">Captain</p>
                        <p className="text-xs uppercase text-slate-500">Varsity Team</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
                        <p className="text-2xl font-black text-[#00274C]">All-State</p>
                        <p className="text-xs uppercase text-slate-500">Recognition</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'extra' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2">
                    <h3 className="text-lg font-bold mb-4 text-[#00274C]">Involvement & Service</h3>
                    <p className="text-sm text-slate-600">Extracurricular activities and community service record details go here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <SectionHeader 
                icon={DollarSign} 
                title="Funding Status" 
                bgColor="#F8FAFC" 
                textColor={UM_BLUE} 
              />
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-sm text-slate-500 font-medium">Total 4-Year Cost Estimate</span>
                  <span className="text-xl font-bold text-[#00274C]">$XXX,XXX</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase text-slate-400">
                    <span>Source</span>
                    <span>Amount</span>
                  </div>
                  <div className="h-px bg-slate-100"></div>
                  <div className="flex justify-between text-sm py-1">
                    <span className="text-slate-600">University Grant/Aid</span>
                    <span className="font-bold text-green-600">$XX,XXX</span>
                  </div>
                  <div className="flex justify-between text-sm py-1">
                    <span className="text-slate-600">Local Scholarships</span>
                    <span className="font-bold text-green-600">$X,XXX</span>
                  </div>
                  <div className="flex justify-between text-sm py-1 border-t-2 border-dashed border-slate-100 pt-2 font-bold">
                    <span className="text-[#00274C] uppercase text-xs">Remaining Bridge Need</span>
                    <span className="text-[#00274C]">${(data.fundingGoal - data.currentFunding).toLocaleString()}</span>
                  </div>
                </div>
                <button 
                  className="w-full text-white font-bold py-3 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-4 shadow-lg"
                  style={{ backgroundColor: UM_LIGHT_BLUE }}
                >
                  Detailed Budget Plan <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <SectionHeader 
                icon={Quote} 
                title="What Others Say" 
                bgColor={UM_PALE_BLUE} 
                textColor={UM_BLUE} 
              />
              <div className="p-6 space-y-6">
                <div className="italic text-slate-600 text-sm leading-relaxed border-l-4 border-[#00274C] pl-4">
                  "I have taught many students, but [Son's Name] has a rare combination of intellectual curiosity and grit. He is exactly the type of student who thrives at Michigan."
                  <p className="mt-2 font-bold text-[#00274C] not-italic">— Mrs. Smith, AP Physics</p>
                </div>
                <div className="italic text-slate-600 text-sm leading-relaxed border-l-4 border-[#00274C] pl-4">
                  "Leadership isn't just about the title; it's about action. He embodies the 'Leaders and Best' spirit every single day."
                  <p className="mt-2 font-bold text-[#00274C] not-italic">— Coach Johnson, Varsity Baseball</p>
                </div>
              </div>
            </section>

            <div 
              className="p-6 rounded-xl text-white text-center shadow-lg"
              style={{ backgroundColor: UM_BLUE }}
            >
              <div className="w-24 h-24 bg-white mx-auto mb-4 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => <div key={i} className="w-4 h-4 bg-[#00274C]"></div>)}
                </div>
              </div>
              <p 
                className="text-xs uppercase tracking-widest font-bold mb-1"
                style={{ color: UM_MAIZE }}
              >
                Scan for Video Intro
              </p>
              <p className="text-[10px] opacity-70" style={{ color: 'white' }}>
                View personal statement and athletic highlights
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-4 mt-12 text-center text-slate-400 text-xs">
        <p>© 2025 [Family Name] • Financial Support Request Portfolio</p>
        <p className="mt-1" style={{ color: UM_BLUE }}>GO BLUE!</p>
      </footer>
    </div>
  );
};

export default App;
