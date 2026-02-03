# 快速开始指南

## 📋 项目已创建完成

你的 Recall 官网已经准备好了！项目位于：
```
/home/ylong030/website/recall-landing/
```

## 🚀 下一步：推送到 GitHub 并部署

### 1. 在 GitHub 上创建新仓库

1. 访问 https://github.com/new
2. 仓库名称：`recall-landing`（或其他你喜欢的名字）
3. 设置为 Public
4. **不要**添加 README、.gitignore 或 license（我们已经有了）
5. 点击 "Create repository"

### 2. 推送代码到 GitHub

在终端中运行（替换你的 GitHub 用户名）：

```bash
cd /home/ylong030/website/recall-landing

# 添加远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/recall-landing.git

# 推送代码
git push -u origin main
```

### 3. 部署到 Vercel

#### 方式 A：通过 GitHub 导入（推荐，最简单）

1. 访问 https://vercel.com
2. 点击 "Add New Project"
3. 点击 "Import Git Repository"
4. 选择你刚刚创建的 `recall-landing` 仓库
5. Vercel 会自动检测这是 Next.js 项目
6. 直接点击 "Deploy"

**完成！** 大约 1-2 分钟后，你的网站就上线了！

#### 方式 B：使用 Vercel CLI

```bash
# 安装 Vercel CLI（如果还没安装）
npm install -g vercel

# 登录
vercel login

# 部署
cd /home/ylong030/website/recall-landing
vercel

# 部署到生产环境
vercel --prod
```

## 🎨 本地预览

启动开发服务器：

```bash
cd /home/ylong030/website/recall-landing
npm run dev
```

然后访问 http://localhost:3000

## 📝 网站特点

你的官网包含：

✅ **现代化设计**
- 清晰的 Hero 区域
- 问题陈述
- 解决方案说明
- "What Recall Is Not" 澄清边界
- 邮件联系 CTA

✅ **完全响应式**
- 适配手机、平板、桌面

✅ **SEO 优化**
- 合适的 meta 标签
- 语义化 HTML

✅ **性能优化**
- 静态导出
- Tailwind CSS
- 零服务端依赖

✅ **专业品牌**
- 克制、不浮夸
- 强调"记忆"而非"AI"
- 突出研究人员痛点

## 🎯 核心信息定位

网站明确传达：
- ✅ 被动研究记忆系统
- ✅ 保留研究判断
- ✅ 帮助召回过去的证据
- ❌ 不是 reference manager
- ❌ 不是 AI agent
- ❌ 不是 PDF 整理工具

## 📧 联系方式

网站包含了你的联系信息：
- Email: loy004@ucsd.edu
- LinkedIn: 已链接

## 🔄 自动部署

一旦通过 GitHub 连接 Vercel：
- 推送到 `main` → 自动部署到生产环境
- 推送到其他分支 → 创建预览部署
- Pull Request → 独立预览链接

## 📱 分享链接

部署后，你会得到：
- Vercel 域名：`https://recall-landing.vercel.app`（或类似）
- 可以随时添加自定义域名

## 🎉 完成！

你现在有了一个：
- ✅ 专业的 landing page
- ✅ 版本控制（Git）
- ✅ 托管在 GitHub
- ✅ 自动部署到 Vercel

祝你的 Recall 项目成功！🚀
