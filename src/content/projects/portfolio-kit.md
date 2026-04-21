---
title: DeepSLO
summary: 端到端 SLO 治理平台，集成 MeterSphere 拨测数据，自动计算误差预算并输出 AI 结构化诊断。
tech:
  - Python
  - Vue
  - JavaScript
  - MySQL
  - JWT
  - RBAC
  - MeterSphere
  - AI
  - Docker Compose
repo: https://github.com/CallStorm/DeepSLO
cover: /images/projects/deepslo-cover.svg
publishedAt: 2026-04-10
---

`DeepSLO` 是一套面向 API / 数字体验团队的 SLO 治理平台。核心目标不是只做“可视化看板”，而是把拨测数据、误差预算和 AI 分析串成可落地的治理闭环，帮助团队持续回答“当前稳定性水平如何、风险在哪里、下一步怎么优化”。

## 项目亮点

- 基于 MeterSphere 拨测报告自动计算月度与年度 SLO，实时追踪误差预算消耗
- 自动解析失败窗口和连续中断区间，支持趋势对比与异常定位
- 集成 AI 模型（兼容 OpenAI / DeepSeek / 火山引擎接口）输出结构化诊断建议
- 提供可导出的分析报告能力，便于周报、复盘与管理层汇报

## 已完成能力

- SLO 大屏：达成率、误差预算、拨测趋势、事件关联可视化
- 拨测数据同步：支持多项目同步、失败重试与断点续传
- 系统配置中心：项目管理、拨测配置、AI 模型配置统一维护
- 权限体系：JWT 鉴权 + RBAC，支持基础用户与项目权限管理

## 架构与工程设计

- 后端：Python 服务负责 SLO 计算、误差预算统计、同步任务调度与权限控制
- 前端：Vue + JavaScript 构建配置后台、SLO 看板与分析交互流程
- 数据层：MySQL 存储项目、拨测报告、规则配置和分析结果
- 集成层：对接 MeterSphere AK/SK 接口，周期拉取拨测报告并入库
- AI 分析链路：将统计指标与中断上下文拼装后调用模型，返回结构化诊断文本
- 部署：支持 Docker Compose 快速部署，降低团队落地和演示门槛

## 规划中的方向

- 增加多维度 SLO 模板（按业务线、接口分组、环境维度）
- 补充告警联动能力（预算阈值触发通知 / 工单）
- 增强 AI 分析可解释性，支持建议与原始证据双向追溯
- 引入更完整的审计与操作留痕，提升团队协作可治理性
