---
title: ppt-web
summary: 基于 Claude Code agent 的 PPT 生成 Web 服务：每个生成任务在独立 Docker 容器内执行、跑完自毁，支持多用户鉴权、智能填充与版本化修改，产物可下载。
tech:
  - Python
  - FastAPI
  - React
  - TypeScript
  - Docker
  - MySQL
  - Claude Code
  - LLM
  - AI
repo: https://github.com/CallStorm/ppt-web
cover: /images/projects/ppt-web-cover.svg
publishedAt: 2026-07-01
---

`ppt-web` 是围绕 [ppt-master](https://github.com/CallStorm/ppt-master) 的 Web 化封装项目。ppt-master 负责 PPT 生成的核心 agent 与技能系统；本项目将其包装为「开箱即用」的 Web 服务，重点探索如何以可管控的方式利用 Claude Code 的 agent 能力——以 Docker 隔离每个 PPT 生成任务、运行后自毁，在保护宿主与用户隐私的前提下交付可下载的产物。

## 项目亮点

- 每个生成任务在独立 Docker 容器内执行，跑完自动销毁（`--rm`），per-user 写目录挂载，资源与进程完全隔离
- 三段式可折叠创建任务页 + AI 智能填充，将 14 项生成选项渐进式呈现，支持视觉风格、配色、素材策略等结构化配置
- 作品列表支持全屏预览、快捷下载与人话化错误展示；失败任务可原地重试，沿用原始 prompt 与选项
- 已完成任务支持 revision 版本链：按页提交修改意见后新建 revision job，保留完整版本历史，下载默认指向最新版

## 已完成能力

- FastAPI 后端 + React WebUI：JWT 鉴权、多用户隔离、SSE 实时进度推送
- Admin 管理后台：用户 / 任务 / JOB 设置 / 应用设置（LLM 模型配置与 API Key 管理）
- 14 项结构化生成选项（`JobOptions` schema）注入 prompt，覆盖画布、视觉调性、内容定位与输出约束
- 错误文案友好化：机器错误串在写库前翻译为人话，卡片、详情页与 Admin 三处一致展示
- 渲染与选图稳定性：SVG 命名空间自动修复、图像安全过滤与 AI 生成 fallback

## 架构与工程设计

- API 层：uvicorn 进程调度 `docker run --rm` ppt-runner 容器，每 job 独立 netns，超时强杀
- 数据层：MySQL 持久化用户、任务、事件与 revision 链；ppt-master 以 git submodule 独立版本管理
- 前端：React SPA，作品列表 / 创建任务 / 任务详情 / 编辑修改 / Admin 后台
- 运行编排：MySQL 容器 + ppt-runner 镜像（含 python 3.11、claude CLI、ppt-master 源码与中英文字体）
- 容器参数可通过环境变量调节：并发上限、内存、CPU、超时等

## 规划中的方向

- 持续加固 SVG 渲染与配图选图稳定性，扩展自动化回归测试覆盖
- 扩展 LLM provider 协议支持，降低 Admin 模型配置的接入门槛
