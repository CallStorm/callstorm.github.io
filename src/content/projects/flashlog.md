---
title: FlashLog
summary: 本地优先、BYOK 的 AI 智能工时 App：语音或文字描述工作，自动提炼为结构化工时卡片，并支持 AI 分析与语音播报。
tech:
  - React
  - TypeScript
  - Vite
  - Capacitor
  - SQLite
  - Zustand
  - Tailwind CSS
  - LLM
  - ASR
  - TTS
repo: https://github.com/CallStorm/FlashLog
demo: https://github.com/CallStorm/FlashLog/releases/latest
cover: /images/projects/flashlog-cover.svg
publishedAt: 2026-05-31
---

`FlashLog` 是一款纯单机、AI 驱动的移动端工时 App：**语音或文字**描述工作内容，经语音识别与大模型自动提炼为结构化「工时卡片」；积累的数据可由 AI **分析工时分布、总结阶段工作并给出改进建议**；分析页还支持 **语音播报** 回复。所有记录仅存本机，LLM / 语音识别 / 语音合成由 App **直连用户配置的云服务商**（默认火山引擎），不经任何第三方服务器转发。

## 产品原则

- **Local-First**：工时记录仅存本机 SQLite，支持离线查看与手动录入
- **BYOK**：用户自带 API Key，费用由用户自行承担
- **No Backend**：无账号、无云同步、无 API 代理

## 项目亮点

- 按住麦克风录音或文字输入，火山 ASR 转写 → 流式 AI 总结为可编辑工时卡片（任务、工时大类、日期、时长、描述）
- 消息页统计自启用日起尚未填写工时的中国工作日，Tab 角标提醒待补记
- 历史支持列表 / 日历视图，按日期范围导出分享（文本、图片、Excel、Word）；Android 支持微信、QQ、企业微信定向分享
- 分析页提供基于本机工时的 AI 对话助手，自动解析时间范围，可选 TTS 语音播报

## 已完成能力

- 工作记录：录音（最长约 3 分钟）、口述日期解析、补充说明后重新总结并合并预览
- 本地提醒：工作日 / 每天定时提醒，deeplink 跳转工作记录
- 设置中心：火山方舟 LLM、豆包 ASR / TTS、工时大类、浅 / 深色主题、清除本地数据
- Android 构建：Capacitor 8 壳，一键 debug APK 与 GitHub Release 发布流程

## 架构与工程设计

- UI：React 19 + TypeScript + Tailwind CSS 4 + Lucide React
- 状态：Zustand 5；路由：React Router 7
- 数据：SQLite（浏览器回退 localStorage）；敏感配置 Secure Storage（浏览器回退 Preferences）
- 自定义 Android 插件：`HeaderWebSocketPlugin`（ASR 鉴权）、`TargetedSharePlugin`（定向分享）
- 网络请求仅发往用户配置的 LLM / ASR / TTS endpoint，工时记录不出网

## 规划中的方向

- 完善 iOS 构建与发布流程
- 增强工时统计图表与趋势可视化
- 支持更多 LLM / ASR / TTS 服务商接入
- 可选本地备份与恢复能力
