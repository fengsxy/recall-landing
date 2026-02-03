# 部署指南 / Deployment Guide

## 快速部署到 Vercel

### 方式 1: 通过 GitHub 自动部署（推荐）

1. **初始化 Git 仓库并推送到 GitHub**

```bash
cd /home/ylong030/website/recall-landing

# 初始化 git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Recall landing page"

# 添加远程仓库（替换成你的 GitHub 仓库地址）
git remote add origin https://github.com/你的用户名/recall-landing.git

# 推送到 GitHub
git push -u origin main
```

2. **在 Vercel 上部署**

- 访问 [vercel.com](https://vercel.com)
- 点击 "Add New Project"
- 选择 "Import Git Repository"
- 选择你的 GitHub 仓库
- Vercel 会自动检测到这是一个 Next.js 项目
- 点击 "Deploy"

就这么简单！Vercel 会自动构建并部署你的网站。

### 方式 2: 使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 进入项目目录
cd /home/ylong030/website/recall-landing

# 部署
vercel

# 按照提示操作：
# - Set up and deploy? Y
# - Which scope? 选择你的账号
# - Link to existing project? N
# - What's your project's name? recall-landing
# - In which directory is your code located? ./
# - Want to override the settings? N

# 部署到生产环境
vercel --prod
```

## 自定义域名

部署成功后，你会得到一个类似 `recall-landing.vercel.app` 的域名。

如果想使用自定义域名：

1. 在 Vercel 项目设置中点击 "Domains"
2. 添加你的域名
3. 按照提示在你的域名提供商处添加 DNS 记录

## 环境变量

如果以后需要添加环境变量（例如 API keys）：

1. 在 Vercel 项目设置中点击 "Environment Variables"
2. 添加你的变量
3. 重新部署

## 持续集成

一旦通过 GitHub 部署：

- 每次推送到 `main` 分支会自动触发生产环境部署
- 每次推送到其他分支会创建预览部署
- 每个 Pull Request 都会有独立的预览链接

## 本地预览生产版本

```bash
# 构建生产版本
npm run build

# 启动 Next.js 生产服务器
npm run start
```

## 故障排除

### 构建失败

如果 Vercel 构建失败，检查：

1. `package.json` 中的依赖是否完整
2. Node.js 版本（需要 18.0+）
3. 查看 Vercel 构建日志

### 页面无法访问

- 确保没有修改 Next.js 的 `distDir` 或 Vercel Output Directory，保持 `.next/`
- 确保 `npm run build` 成功完成（本地可先跑一遍确认）

### Routes Manifest Could Not Be Found

Vercel 会在 `.next/routes-manifest.json` 中读取路由信息。出现该错误通常是：

1. Build 命令不是 `next build`（比如误用了 `next export` 或自定义脚本）
2. 在 Vercel 中把 Output Directory 改成了 `out/` 或其他路径
3. `next build` 实际上失败了

解决方案：
- 在本地运行 `npm run build` 确认 `.next/routes-manifest.json` 存在
- 在 Vercel 的 **Project Settings → Build & Development Settings** 中确保：
  - Build Command = `npm run build`
  - Output Directory 留空（Vercel 会自动使用 `.next`）
  - Install Command = `npm install`
- 不要把 `.next/` 或 `routes-manifest.json` 加入仓库，Vercel 会在部署时自动生成

## 性能优化建议

部署后，你可以：

1. 在 Vercel 控制台查看 Web Vitals
2. 使用 Lighthouse 测试性能
3. 根据需要添加 `next/image` 优化图片（如果添加了图片）

## 联系方式

如有问题，联系：
- Email: loy004@ucsd.edu
- LinkedIn: [Longxuan Yu](https://www.linkedin.com/in/longxuan-yu-1277b1271)

---

## Quick Deployment to Vercel (English)

### Method 1: Auto-deploy via GitHub (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Method 2: Vercel CLI

```bash
npm install -g vercel
cd /home/ylong030/website/recall-landing
vercel
vercel --prod
```

That's it! Your site will be live at `https://recall-landing.vercel.app`
