"use client";

import { useState } from "react";
import Image from "next/image";

function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const textSize = size === "sm" ? "text-[15px]" : "text-[18px]";
  const subSize = size === "sm" ? "text-[10px]" : "text-[11px]";
  return (
    <div className="flex items-baseline gap-1">
      <span className={`${textSize} font-bold tracking-tight text-primary`}>
        栖安
      </span>
      <span className={`${subSize} font-medium tracking-[0.08em] text-secondary uppercase`}>
        NestEase
      </span>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/[0.05]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#">
          <Logo />
        </a>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center h-9 px-5 bg-primary text-white text-[13px] font-medium rounded-lg hover:bg-primary-dark transition-all duration-200"
        >
          预约咨询
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80&auto=format"
          alt="Modern home"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            现已开放预约
          </div>
          <h1 className="text-[36px] sm:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            海外华人房东的
            <br />
            智能物业管家
          </h1>
          <p className="mt-5 text-[16px] sm:text-[17px] text-white/70 leading-relaxed max-w-md">
            受够了物业公司的糊涂账？栖安用 AI 帮您管房子，每一笔花费清清楚楚，中英沟通再无障碍。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-7 bg-accent text-white text-[15px] font-medium rounded-xl hover:bg-accent-dark transition-all duration-200"
            >
              预约免费咨询
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center h-12 px-7 text-white/90 text-[15px] font-medium rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-200"
            >
              了解服务
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  const points = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "物业公司不透明",
      description:
        "维修明明 $80 能搞定，物业公司报价 $240。账单看不懂，问了也说不清楚。钱花在哪了，永远是个谜。",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "语言障碍重重",
      description:
        "租客半夜打电话报漏水，英文听不全、说不清。找维修工沟通更头疼，每次都得拉上朋友帮忙翻译。",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "远程管理耗时耗力",
      description:
        "人在温哥华，房在西雅图。物业经理总说'已处理'，但到底修了没有？只能干着急。",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-semibold tracking-wide mb-3 text-center">常见痛点</p>
        <h2 className="text-[26px] sm:text-[34px] font-bold text-center text-foreground tracking-[-0.02em] mb-14">
          这些问题，是不是很熟悉？
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {points.map((point) => (
            <div key={point.title}>
              <div className="w-10 h-10 rounded-lg bg-primary-light text-primary flex items-center justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-[14px] text-secondary leading-[1.7]">
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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "AI 智能接线",
      description:
        "7x24 小时 AI 自动接听租客来电和消息，中英双语无缝切换。紧急事项即时通知您，普通问题自动处理。",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      title: "工单全程透明",
      description:
        "每一个维修请求、每一次沟通记录，全部在线可查。实时推送到手机，再也不用追着物业问进度。",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <section id="solutions" className="py-20 sm:py-28 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-semibold tracking-wide mb-3 text-center">解决方案</p>
        <h2 className="text-[26px] sm:text-[34px] font-bold text-center text-foreground tracking-[-0.02em] mb-5">
          栖安，让一切变简单
        </h2>
        <p className="text-center text-secondary mb-14 max-w-md mx-auto">
          专为华人房东设计的智能物业管理方案
        </p>
        <div className="grid sm:grid-cols-2 gap-px bg-black/[0.06] rounded-2xl overflow-hidden">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="flex gap-4 p-7 bg-white"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-light text-primary flex items-center justify-center shrink-0">
                {sol.icon}
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-foreground mb-1.5">
                  {sol.title}
                </h3>
                <p className="text-[13px] text-secondary leading-[1.7]">
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

function Highlight() {
  return (
    <section className="py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format"
              alt="Beautiful home interior"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-primary text-sm font-semibold tracking-wide mb-3">为什么选择栖安</p>
            <h2 className="text-[26px] sm:text-[30px] font-bold text-foreground tracking-[-0.02em] mb-5 leading-tight">
              您负责投资，
              <br />我们负责管好每一天
            </h2>
            <div className="space-y-4">
              {[
                { num: "01", text: "所有沟通记录、维修工单、财务账目全部在线可查" },
                { num: "02", text: "AI 自动处理 80% 的日常租客沟通" },
                { num: "03", text: "每月中文报告，收支一目了然" },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 items-start">
                  <span className="text-[13px] font-bold text-primary/40 mt-0.5">{item.num}</span>
                  <p className="text-[14px] text-secondary leading-[1.6]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
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
    <section id="contact" className="py-20 sm:py-28 px-6 bg-primary">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-[26px] sm:text-[34px] font-bold text-white tracking-[-0.02em] mb-3">
          开始使用栖安
        </h2>
        <p className="text-white/60 mb-2">
          留下微信号，我们 24 小时内联系您
        </p>
        <p className="text-sm text-accent font-medium mb-8">
          已有 30+ 位华人房东加入等待列表
        </p>
        {submitted ? (
          <div className="bg-white rounded-2xl p-10">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-foreground">提交成功！</p>
            <p className="text-sm text-secondary mt-2">我们会尽快通过微信联系您</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 text-left"
          >
            <label
              htmlFor="wechat"
              className="block text-[13px] font-medium text-foreground mb-2"
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
              className="w-full h-12 px-4 rounded-xl border border-black/[0.1] text-[15px] text-foreground placeholder:text-black/25 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-4 h-12 bg-accent text-white text-[15px] font-medium rounded-xl hover:bg-accent-dark transition-all duration-200 disabled:opacity-60"
            >
              {submitting ? "提交中..." : "预约免费咨询"}
            </button>
            {error && (
              <p className="text-xs text-red-500 mt-2">{error}</p>
            )}
            <p className="text-[12px] text-secondary mt-4 text-center">
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
    <footer className="py-8 px-6 border-t border-black/[0.05]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-secondary">
        <Logo size="sm" />
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
        <Highlight />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
