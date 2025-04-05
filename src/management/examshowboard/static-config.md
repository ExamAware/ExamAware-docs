# 使用静态配置文件

## 开始使用

本功能支持通过静态配置文件部署

### 使用静态配置文件

您可以手动编写集控配置文件，并将其托管到静态网站上。

请参阅[配置文件编写教程](../../app/config-edited.md)  

- 新建 GitHub 公开存储仓库
- 上传您编写好的的 `exam_config.json` 文件
- 复制 `Raw` 直链粘贴到应用`请求地址`文本框并保存   

> [!tip]
>
> 由于 GitHub 的 `Raw` 直链可能会被墙，您可以使用以下方法解决：
>
> 可以在 `Raw 文件` 前加上镜像源，如
>
> ```txt
> https://github.moeyy.xyz/https://raw.githubusercontent.com/{owner}/{repo}/refs/heads/main/exam_config.json
> ```

- 点击`请求配置`加载配置文件并进入看板（下次可直接点击`直接进入看板`加载上次配置文件）

