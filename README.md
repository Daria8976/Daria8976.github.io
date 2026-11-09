# 将个人主页发布到 Daria8976.github.io

网页中的本科信息已更新为：

**Harbin Engineering University**
B.Eng. in Computer Science

中文界面对应为“哈尔滨工程大学 · 计算机科学工学学士”。

## 1. 下载并解压网站文件包

新版 `xiaojun-ye-website.zip` 已整理为可直接部署的静态网站。解压后可以看到：

- `index.html`：主页
- `styles.css`：样式
- `script.js`：中英文切换、论文筛选及引用功能
- `assets/`：论文 PDF、图示及 BibTeX 文件
- `README.md`：本说明
- `.nojekyll`：跳过 Jekyll 处理的标识文件（可能被文件管理器隐藏）

双击 `index.html` 可以先在本地查看。文件包不需要安装依赖或运行构建命令。

## 2. 创建主页仓库

登录 https://github.com/Daria8976 。

点击右上角 **+ → New repository**，填写：

- Owner：`Daria8976`
- Repository name：`Daria8976.github.io`
- Visibility：`Public`
- Add README：开启

点击 **Create repository**。如果这个仓库已经存在，请直接打开它，保留其已有项目和内容，不要另建同名仓库。

## 3. 上传网页文件

在仓库首页点击 **Add file → Upload files**。

把解压后的 `index.html`、`styles.css`、`script.js` 和整个 `assets` 文件夹拖入上传区域。能看到 `.nojekyll` 时，也可以一起上传。

上传的是解压后的文件，不是 ZIP。仓库首页应当直接显示 `index.html`，不要把外层 `xiaojun-ye-website` 或 `site` 文件夹整体上传成另一层目录。

提交到 `main` 分支；如果使用了新分支和 Pull Request，需要把 Pull Request 合并到 `main`。

## 4. 开启 GitHub Pages

打开仓库 **Settings → Pages → Build and deployment**：

- Source：**Deploy from a branch**
- Branch：**main**
- Folder：**/ (root)**

点击 **Save**。

此直接上传方案不需要另外添加 GitHub Actions 工作流。

## 5. 查看部署结果

在 **Actions** 中等待 Pages 部署完成，或在 **Settings → Pages** 查看站点状态。首次发布可能需要几分钟，GitHub 说明发布最长可能需要约 10 分钟。

部署成功后访问：

https://daria8976.github.io/

以后更新网页时，替换仓库中对应文件并提交，GitHub Pages 会重新发布。`mmad-page` 是另一个项目页面，不需要修改它。

## 官方说明

- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
