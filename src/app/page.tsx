"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const imgSize = size === "sm" ? 24 : 32;
  const textSize = size === "sm" ? "text-[15px]" : "text-[18px]";
  const subSize = size === "sm" ? "text-[10px]" : "text-[11px]";
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.png" alt="栖安" width={imgSize} height={imgSize} />
      <div className="flex items-baseline gap-1">
        <span className={`${textSize} font-bold tracking-tight text-primary`}>栖安</span>
        <span className={`${subSize} font-medium tracking-[0.08em] text-secondary uppercase`}>NestEase</span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/[0.05]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a href="#"><Logo /></a>
        <a href="#contact" className="inline-flex items-center h-9 px-5 bg-primary text-white text-[13px] font-medium rounded-lg hover:bg-primary-dark transition-all duration-200">
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
        <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80&auto=format" alt="Modern home" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-32">
        <div className="max-w-xl">
          <FadeIn>
            <h1 className="text-[28px] sm:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-white">
              你买房是为了安心，
              <br />
              <span className="text-accent">不是为了半夜被英文电话吵醒。</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-5 text-[15px] sm:text-[17px] text-white/70 leading-relaxed max-w-md">
              栖安用 AI 帮您管房子，每一笔花费清清楚楚，中英沟通再无障碍。让您真正做个省心的甩手掌柜。
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center h-12 px-7 bg-accent text-white text-[15px] font-medium rounded-xl hover:bg-accent-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                预约免费咨询
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              <a href="#solutions" className="inline-flex items-center justify-center h-12 px-7 text-white/90 text-[15px] font-medium rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-200">
                了解服务
              </a>
            </div>
          </FadeIn>
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
      title: "糊涂账",
      description: "马桶堵了，PM 报价 $240。你找人问了一圈，$80 就修好了。但你已经付了 $240。",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "半夜电话",
      description: "凌晨两点，租客打来说漏水。你听了三遍才听懂是哪个房间。挂了电话，一夜没睡。",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "隔空焦虑",
      description: "你在温哥华，房子在西雅图。PM 说'已处理'，你翻遍邮件找不到一张维修照片。",
    },
  ];

  return (
    <section className="py-16 sm:py-28 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-primary text-sm font-semibold tracking-wide mb-3 text-center">常见痛点</p>
          <h2 className="text-[24px] sm:text-[34px] font-bold text-center text-foreground tracking-[-0.02em] mb-12 sm:mb-14">
            当房东，不应该这么累
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-8">
          {points.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.1}>
              <div className="w-10 h-10 rounded-lg bg-primary-light text-primary flex items-center justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-[14px] text-secondary leading-[1.7]">{point.description}</p>
            </FadeIn>
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
      title: "再也不怕漏接电话",
      description: "AI 帮你 24 小时接听，中英文都行。你醒来只看一条中文摘要。",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "每一分钱，清清楚楚",
      description: "维修多少钱、谁干的活、什么时候完工。你打开手机就知道。",
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
      title: "中文报告，报税直接用",
      description: "每月一份中文收支报告，不用再对着英文表格猜。",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "人不在，心不慌",
      description: "房子出了事，你第一时间收到通知。没事的时候，完全不用操心。",
    },
  ];

  return (
    <section id="solutions" className="py-16 sm:py-28 px-5 sm:px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-primary text-sm font-semibold tracking-wide mb-3 text-center">解决方案</p>
          <h2 className="text-[24px] sm:text-[34px] font-bold text-center text-foreground tracking-[-0.02em] mb-5">
            你管投资，栖安管剩下的一切
          </h2>
          <p className="text-center text-secondary mb-12 sm:mb-14 max-w-md mx-auto">
            专为华人房东设计的智能物业管理方案
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/[0.06] rounded-2xl overflow-hidden">
          {solutions.map((sol, i) => (
            <FadeIn key={sol.title} delay={i * 0.08} className="flex gap-4 p-6 sm:p-7 bg-white">
              <div className="w-10 h-10 rounded-lg bg-primary-light text-primary flex items-center justify-center shrink-0">
                {sol.icon}
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-foreground mb-1.5">{sol.title}</h3>
                <p className="text-[13px] text-secondary leading-[1.7]">{sol.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlight() {
  return (
    <section className="py-16 sm:py-28 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 items-center">
          <FadeIn>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format" alt="Beautiful home" fill className="object-cover" />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div>
              <p className="text-primary text-sm font-semibold tracking-wide mb-3">为什么选择栖安</p>
              <h2 className="text-[24px] sm:text-[30px] font-bold text-foreground tracking-[-0.02em] mb-5 leading-tight">
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
          </FadeIn>
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
    <section id="contact" className="py-16 sm:py-28 px-5 sm:px-6 bg-primary">
      <div className="max-w-md mx-auto text-center">
        <FadeIn>
          <h2 className="text-[24px] sm:text-[34px] font-bold text-white tracking-[-0.02em] mb-3">
            开始使用栖安
          </h2>
          <p className="text-white/60 mb-2">留下微信号，我们 24 小时内联系您</p>
          <p className="text-sm text-accent font-medium mb-8">已有 30+ 位华人房东加入等待列表</p>
        </FadeIn>
        <FadeIn delay={0.15}>
          {submitted ? (
            <div className="bg-white rounded-2xl p-10">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <p className="text-lg font-semibold text-foreground">提交成功！</p>
              <p className="text-sm text-secondary mt-2">我们会尽快通过微信联系您</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 text-left">
              <label htmlFor="wechat" className="block text-[13px] font-medium text-foreground mb-2">微信号</label>
              <input
                id="wechat" type="text" value={wechat} onChange={(e) => setWechat(e.target.value)}
                placeholder="请输入您的微信号" required
                className="w-full h-12 px-4 rounded-xl border border-black/[0.1] text-[15px] text-foreground placeholder:text-black/25 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              />
              <button type="submit" disabled={submitting} className="w-full mt-4 h-12 bg-accent text-white text-[15px] font-medium rounded-xl hover:bg-accent-dark hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-60">
                {submitting ? "提交中..." : "预约免费咨询"}
              </button>
              {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
              <p className="text-[12px] text-secondary mt-4 text-center">我们尊重您的隐私，信息仅用于联系您</p>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-5 sm:px-6 border-t border-black/[0.05]">
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
