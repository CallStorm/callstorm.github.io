# Personal Website (Astro + GitHub Pages)

一个内容驱动的个人网站模板，包含四大板块：

- 个人简介
- 作品集
- 文章
- 视频

## 本地开发

```bash
npm install
npm run dev
```

## 内容维护

只需要编辑 `src/content/` 下的 Markdown 文件：

- `profile/` 个人资料
- `projects/` 作品集
- `posts/` 文章
- `videos/` 视频

## 部署到 GitHub Pages

1. 仓库 Settings -> Pages -> Source 选择 **GitHub Actions**
2. 推送到 `main` 分支后自动构建发布

```bash
git add .
git commit -m "feat: launch personal site"
git push origin main
```
