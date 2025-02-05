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
      text: "应用帮助",
      children: [
        "index.md",
        "setup.md",
        {
          text: "档案设置",
          collapsible: true,
          expanded: true,
          prefix: "profile/",
          children: [
            "faq.md",
          ],
          icon: "fa-solid fa-file-lines"
        },
      ],
    },
  ],
  "/web/": [
    {
      text: "网页端",
      children: [
        "README.md",
        {
          text: "部署教程",
          link: "web-deploy.md",
          icon: "fa-solid fa-file-lines"
        },
      ],
    },
  ],
  "/management/": [
    {
      text: "集控",
      children: [
        "README.md",
        {
          text: "集控服务器",
          collapsible: true,
          expanded: true,
          prefix: "management-server/",
          children: [
            "README.md",
            {
              text: "部署教程",
              link: "web-deploy.md",
              icon: "fa-solid fa-file-lines"
            },
            "client-identify.md",
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
  "/community/": [
    {
      text: "社区",
      children: [
        "README.md",
        "rules.md"
      ],
    },
  ],
});
