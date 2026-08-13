# ExamAware 文档

[![Netlify Status](https://api.netlify.com/api/v1/badges/efe5dddf-07af-440e-bb30-a2691a7464fb/deploy-status)](https://app.netlify.com/sites/docs-examaware/deploys)
[![Deploy VitePress site to Pages](https://github.com/ExamAware/ExamAware-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/ExamAware/ExamAware-docs/actions/workflows/deploy.yml)

这是 [ExamAware](https://github.com/ExamAware/ExamAware-docs) 文档仓库。本文档基于 [VuePress](https://vuejs.press/) 搭建

[在线查看文档](https://docs.examaware.cn)

## 开始编写文档

1. 安装 Node 20 环境（推荐使用NVM）
2. 克隆并进入文档仓库
3. 安装依赖（需要使用pnpm，可使用corepack安装）
   ```sh
   pnpm install
   ```

4. 启动 VuePress 服务器

    ``` bash
    pnpm run docs:dev
    ```

启动 VuePress 服务器后，在浏览器中打开终端输出的链接（默认是[http://localhost:8080/](http://localhost:8080/)）即可浏览文档。当本地文档做出更改时，浏览器中的文档将自动刷新。

## 部署到 Cloudflare Workers

本仓库已配置 Cloudflare Workers Static Assets，构建产物位于 `src/.vuepress/dist`。

### 使用 Wrangler 部署

1. 安装依赖并登录 Cloudflare：

   ```sh
   pnpm install
   pnpm exec wrangler login
   ```

2. 在本地构建并预览 Worker（Wrangler 会自动执行 VuePress 构建）：

   ```sh
   pnpm run worker:dev
   ```

3. 构建并部署到 Cloudflare Workers（Wrangler 会自动执行 VuePress 构建）：

   ```sh
   pnpm run worker:deploy
   ```

### 使用 Cloudflare 控制台自动部署

在 Cloudflare 控制台的 **Workers & Pages** 中导入本 GitHub 仓库，并设置：

- 构建命令：留空（由 `wrangler.jsonc` 的自定义构建命令执行）
- 部署命令：`pnpm exec wrangler deploy`
- Node.js 版本：20 或更高

Wrangler 会根据 `wrangler.jsonc` 先构建 VuePress，再部署静态资源，避免 Cloudflare 在没有生成 `src/.vuepress/dist` 时直接部署失败。

Wrangler 会根据 `wrangler.jsonc` 将 VuePress 构建产物作为 Worker 静态资源部署。原有 GitHub Pages 部署方式不受影响。

本文档使用了 vuepress-plugin-md-enhance
 的一些扩展语法，请尽量直接编辑 Markdown 文件，而不是使用可视化 Markdown 编辑器。建议使用 [Visual Studio Code](https://code.visualstudio.com/) 编辑文档。

关于 VuePress 和 vuepress-plugin-md-enhance
 的用法，请参见 [VuePress 文档](https://vuejs.press/) 和 [vuepress-plugin-md-enhance 文档](https://plugin-md-enhance.vuejs.press/zh/)。

## 做出贡献

我们欢迎向本仓库提交 [Pull Request](https://github.com/ExamAware/ExamAware-docs/pulls)。

## 许可证

<p xmlns:cc="http://creativecommons.org/ns#" >本文档以 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a> 许可协议授权。</p>
