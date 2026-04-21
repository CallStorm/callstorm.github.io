---
title: SmartReview
summary: 面向施工方案的全流程管理与智能审核系统，覆盖模板管理、任务审核、在线编辑与 AI 辅助分析。
tech:
  - Python
  - FastAPI
  - React
  - TypeScript
  - MySQL
  - MinIO
  - OnlyOffice
  - Docker Compose
  - AI
repo: https://github.com/CallStorm/SmartReview
cover: /images/projects/smartreview-cover.svg
publishedAt: 2026-04-21
---

`SmartReview` 是一个面向施工方案场景的审核平台，核心目标是把“模板规范 -> 任务提交 -> 自动审核 -> 结果复盘”串成统一流程，降低人工审核的重复劳动与漏检风险。

## 项目亮点

- 支持方案类型、编制依据、Word 模板和标题树结构的统一维护，形成可复用审核标准
- API + 独立 Worker 协同处理审核队列，实现任务异步执行与状态跟踪
- 集成 OnlyOffice 在线文档编辑，支持回调与文档流转，提升审核协作效率
- 支持 Dify 与多种模型接口配置，输出结构化审核意见和辅助诊断建议

## 已完成能力

- 账号体系与权限管理：JWT 登录、用户角色管理、基础 RBAC 控制
- 审核任务管理：任务创建、进度追踪、结果报表与管理看板
- 对象存储集成：模板文件与结构化配置存储在 MinIO
- 系统配置中心：知识库、审核策略、模型与 OnlyOffice 配置集中管理

## 架构与工程设计

- 前端：React + TypeScript + Vite，提供管理端 SPA 与审核配置界面
- 后端：FastAPI + SQLAlchemy + Alembic，负责业务 API、任务状态与数据管理
- 异步处理：独立 `worker` 进程轮询队列并执行审核任务
- 数据与文档：MySQL 存储结构化业务数据，MinIO 承载模板与文档对象
- 运行编排：Docker Compose 组织 MySQL、MinIO、OnlyOffice、Backend、Frontend、Worker

## 规划中的方向

- 增强规则引擎能力，支持更细粒度的审核策略与场景化规则包
- 提升审核解释性，支持“规则命中链路 + 证据片段”联动展示
- 引入审核质量度量体系，沉淀项目级与团队级持续改进指标
- 增加多项目隔离和审计能力，提升企业级落地可治理性
