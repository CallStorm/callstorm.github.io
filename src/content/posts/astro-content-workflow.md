---
title: 用 Astro Content Collections 管理个人站内容
excerpt: 把“页面代码”和“内容数据”拆开之后，维护成本会明显下降。
publishedAt: 2026-04-12
tags:
  - astro
  - workflow
---

个人网站最怕的是“改一条内容要动三处代码”。  
Content Collections 能把结构约束提前，让内容维护更稳定。

## 建议做法

- 先定义 schema 再写内容
- 给每类内容设计最小必要字段
- 保持内容文件命名规范
