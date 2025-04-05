import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "首页",
      link: "index.md",
    },
  ],
  "/app/": [
    {
      icon: "fa-solid fa-lightbulb",
      text: "客户端",
      children: [
        "README.md",
        "setup.md",
        {
          text: "桌面端",
          collapsible: true,
          expanded: true,
          prefix: "desktop/",
          children: [
            "README.md",
          ],
          icon: "desktop"
        },
        {
          text: "网页端",
          collapsible: true,
          expanded: true,
          prefix: "web/",
          children: [
            "README.md",
            "web-deploy.md",
          ],
          icon: "globe"
        },
        "config-edited.md",
      ],
    },
  ],
  "/management/": [
    {
      text: "集控",
      children: [
        "README.md",
        {

          text: "考试服务器",
          collapsible: true,
          expanded: true,
          prefix: "examcloudsechdule/",
          children: [
            "README.md",
            {
              text: "部署教程",
              link: "web-deploy.md",
              icon: "fa-solid fa-file-lines"
            },
          ],
          icon: "fa-solid fa-file-lines"
        },
        {
          text: "静态托管",
          collapsible: true,
          expanded: true,
          prefix: "examshowboard/",
          children: [
            "static-config.md",
          ],
          icon: "fa-solid fa-file-lines"
        },
        {
          text: "加入集控",
          link: "Join-management.md",
          icon: "fa-solid fa-file-lines"
        },
      ],
    },
  ],
  "/about/": [
    {
      text: "关于",
      children: [
        "README.md",
        "contributing.md",
        "community.md",
        "rules.md",
      ],
    },
  ],
});
