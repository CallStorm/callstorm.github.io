---
title: paperless-ngx-ai
summary: 在 paperless-ngx 基础上做 AI 深度增强，打造可对话、可理解、可扩展的智能文档知识库系统。
tech:
  - Python
  - Django
  - TypeScript
  - Angular
  - Redis
  - Docker Compose
  - LLM
  - VLM
repo: https://github.com/CallStorm/paperless-ngx-ai
cover: /images/projects/paperless-ngx-ai-cover.svg
publishedAt: 2026-04-13
---

这是一个基于 `paperless-ngx` 深度二次开发的智能文档管理项目。目标不是只做“文档存储”，而是让文档具备可理解、可问答、可复用的知识价值，服务真实业务流程。

## 项目亮点

- 融合 LLM 与 VLM，实现文档问答、关键信息提取与低质量图片内容理解
- 增强目录组织能力，支持树形结构与标签继承，降低复杂资料管理成本
- 保留 paperless-ngx 的稳定基础能力：OCR、全文检索、权限控制与工作流
- 面向生产部署，支持 Docker Compose 一键启动和多组件协同

## 已完成能力

- 树形目录结构（支持无限级嵌套）
- AI 文档对话（基于文档内容进行问答）
- VLM 图片识别增强（优化传统 OCR 在拍照场景下的效果）
- AI 提示词管理（系统提示词与用户提示词模板配置）

## 架构与工程设计

- 后端：Python + Django + DRF，承载文档处理、权限与 API
- 前端：TypeScript + Angular，提供文档检索与交互界面
- 中间件：Redis 用于任务队列与缓存
- 文档处理链路：OCRmyPDF、Apache Tika、Gotenberg 等组件协同完成解析与索引
- 部署方式：基于 Docker Compose 组织 MariaDB、Redis、Tika、Gotenberg 与应用容器

## 规划中的方向

- 向量语义检索与混合检索（关键词 + 语义 + 元数据过滤）
- 音视频多媒体文档处理能力
- 全局 AI 助手与多文档摘要
- 可视化运营仪表盘与知识库最佳实践体系

这个项目体现了我在“开源系统二开 + AI 工程化落地 + 文档知识管理”三者交叉场景的完整能力。
