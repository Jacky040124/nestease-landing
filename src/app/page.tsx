"use client";

import { useState } from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-rausch flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="text-[17px] font-semibold tracking-tight text-[#222]">栖安</span>
        </a>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center h-10 px-5 bg-[#222] text-white text-[13px] font-medium rounded-lg hover:bg-rausch transition-all duration-200"
        >
          预约咨询
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/80 via-white to-white" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-rausch/[0.03] blur-3xl" />
      <div className="relative max-w-3xl mx-auto text-center pt-24 pb-20 sm:pt-32 sm:pb-28 px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rausch/[0.08] text-rausch text-xs font-semibold tracking-wide mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-rausch animate-pulse" />
          现已开放预约
        </div>
        <h1 className="text-[40px] sm:text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-[#222]">
          海外华人房东的
          <br />
          <span className="bg-gradient-to-r from-rausch to-[#e00b41] bg-clip-text text-transparent">智能物业管家</span>
        </h1>
        <p className="mt-6 text-[17px] sm:text-lg text-[#6a6a6a] leading-relaxed max-w-lg mx-auto">
          受够了物业公司的糊涂账？栖安用 AI 帮您管房子，每一笔花费清清楚楚，中英沟通再无障碍。
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-7 bg-rausch text-white text-[15px] font-medium rounded-xl hover:bg-rausch-deep transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(255,56,92,0.25)]"
          >
            预约免费咨询
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center h-12 px-7 bg-white text-[#222] text-[15px] font-medium rounded-xl border border-black/[0.08] hover:border-black/[0.16] hover:shadow-sm transition-all duration-200"
          >
            了解服务
          </a>
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  const points = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      ),
      color: "bg-amber-50 text-amber-600",
      title: "物业公司不透明",
      description:
        "维修明明 $80 能搞定，物业公司报价 $240。账单看不懂，问了也说不清楚。钱花在哪了，永远是个谜。",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      color: "bg-blue-50 text-blue-600",
      title: "语言障碍重重",
      description:
        "租客半夜打电话报漏水，英文听不全、说不清。找维修工沟通更头疼，每次都得拉上朋友帮忙翻译。",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      color: "bg-purple-50 text-purple-600",
      title: "远程管理耗时耗力",
      description:
        "人在温哥华，房在西雅图。物业经理总说'已处理'，但到底修了没有？只能干着急。",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-rausch text-sm font-semibold tracking-wide mb-3">
          痛点
        </p>
        <h2 className="text-[28px] sm:text-[36px] font-bold text-center text-[#222] tracking-[-0.02em] mb-4">
          这些问题，是不是很熟悉？
        </h2>
        <p className="text-center text-[#6a6a6a] mb-14 max-w-md mx-auto">
          我们深知华人房东在海外管理房产的难处
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          {points.map((point) => (
            <div
              key={point.title}
              className="group bg-white rounded-2xl p-7 border border-black/[0.04] hover:border-black/[0.08] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-xl ${point.color} flex items-center justify-center mb-5`}>
                {point.icon}
              </div>
              <h3 className="text-[16px] font-semibold text-[#222] mb-2.5">
                {point.title}
              </h3>
              <p className="text-[14px] text-[#6a6a6a] leading-[1.6]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const solutions = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "AI 智能接线",
      description:
        "7x24 小时 AI 自动接听租客来电和消息，中英双语无缝切换。紧急事项即时通知您，普通问题自动处理。",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: "工单全程透明",
      description:
        "每一个维修请求、每一次沟通记录，全部在线可查。实时推送到手机，再也不用追着物业问进度。",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "中英双语服务",
      description:
        "所有报告、账单、沟通记录均提供中英对照。再也不用对着英文文件一头雾水。",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "月报清晰明了",
      description:
        "每月自动生成中文物业报告，收支一目了然。房屋状态、租客动态、市场趋势，尽在掌握。",
    },
  ];

  return (
    <section id="solutions" className="py-20 sm:py-28 px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-rausch text-sm font-semibold tracking-wide mb-3">
          解决方案
        </p>
        <h2 className="text-[28px] sm:text-[36px] font-bold text-center text-[#222] tracking-[-0.02em] mb-4">
          栖安，让一切变简单
        </h2>
        <p className="text-center text-[#6a6a6a] mb-14 max-w-md mx-auto">
          专为华人房东设计的智能物业管理方案
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {solutions.map((sol, i) => (
            <div
              key={sol.title}
              className="group flex gap-5 p-6 rounded-2xl bg-white border border-black/[0.04] hover:border-black/[0.08] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-rausch/[0.08] text-rausch flex items-center justify-center shrink-0">
                {sol.icon}
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-[#222] mb-1.5">
                  {sol.title}
                </h3>
                <p className="text-[14px] text-[#6a6a6a] leading-[1.6]">
                  {sol.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "62%", label: "物业来电被漏接" },
    { value: "20%+", label: "维修平均加价幅度" },
    { value: "24/7", label: "AI 全天候在线" },
    { value: "中英", label: "双语无障碍沟通" },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[32px] sm:text-[40px] font-bold text-rausch tracking-tight">
                {stat.value}
              </div>
              <div className="text-[13px] text-[#6a6a6a] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [wechat, setWechat] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wechat.trim() || submitting) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/submit-wechat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wechat: wechat.trim() }),
      });
      if (!res.ok) throw new Error("提交失败");
      setSubmitted(true);
    } catch {
      setError("提交失败，请稍后再试");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-6 bg-[#fafafa]">
      <div className="max-w-md mx-auto text-center">
        <p className="text-rausch text-sm font-semibold tracking-wide mb-3">
          开始使用
        </p>
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#222] tracking-[-0.02em] mb-3">
          留下您的微信号
        </h2>
        <p className="text-[#6a6a6a] mb-2">
          我们会在 24 小时内添加您，提供免费咨询
        </p>
        <p className="text-sm text-rausch font-medium mb-8">
          已有 30+ 位华人房东加入等待列表
        </p>
        {submitted ? (
          <div className="bg-white rounded-2xl p-10 border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-[#222]">提交成功！</p>
            <p className="text-sm text-[#6a6a6a] mt-2">我们会尽快通过微信联系您</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          >
            <label
              htmlFor="wechat"
              className="block text-[13px] font-medium text-[#222] text-left mb-2"
            >
              微信号
            </label>
            <input
              id="wechat"
              type="text"
              value={wechat}
              onChange={(e) => setWechat(e.target.value)}
              placeholder="请输入您的微信号"
              required
              className="w-full h-12 px-4 rounded-xl border border-black/[0.1] text-[15px] text-[#222] placeholder:text-[#c1c1c1] focus:outline-none focus:ring-2 focus:ring-rausch/20 focus:border-rausch transition-all duration-200"
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-4 h-12 bg-rausch text-white text-[15px] font-medium rounded-xl hover:bg-rausch-deep transition-all duration-200 disabled:opacity-60 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(255,56,92,0.25)]"
            >
              {submitting ? "提交中..." : "预约免费咨询"}
            </button>
            {error && (
              <p className="text-xs text-[#c13515] mt-2">{error}</p>
            )}
            <p className="text-[12px] text-[#6a6a6a] mt-4">
              我们尊重您的隐私，信息仅用于联系您
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-black/[0.04]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#6a6a6a]">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-rausch flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="font-medium text-[#222]">栖安 NestEase</span>
        </div>
        <p>&copy; {new Date().getFullYear()} NestEase. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solutions />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
