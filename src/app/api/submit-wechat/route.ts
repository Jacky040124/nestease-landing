import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const { wechat } = await request.json();

    if (!wechat || typeof wechat !== "string" || wechat.trim().length === 0 || wechat.trim().length > 100) {
      return NextResponse.json({ error: "Invalid WeChat ID" }, { status: 400 });
    }

    const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!serviceAccountKey) {
      console.error("GOOGLE_SERVICE_ACCOUNT_KEY not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const credentials = JSON.parse(serviceAccountKey);
    const auth = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/gmail.send"],
      subject: "me@jacky-zhong.com",
    });

    const gmail = google.gmail({ version: "v1", auth });

    const now = new Date().toLocaleString("zh-CN", { timeZone: "America/Vancouver" });
    const subject = `[栖安] 新微信号提交: ${wechat.trim()}`;
    const body = `有新用户通过栖安 Landing Page 提交了微信号。\n\n微信号: ${wechat.trim()}\n提交时间: ${now}\n\n请尽快添加对方微信。`;

    const raw = Buffer.from(
      `From: me@jacky-zhong.com\r\nTo: zhongzhenyu190@gmail.com\r\nSubject: =?UTF-8?B?${Buffer.from(subject).toString("base64")}?=\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n${body}`
    ).toString("base64url");

    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("submit-wechat error:", err);
    return NextResponse.json({ error: "提交失败" }, { status: 500 });
  }
}
