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
          text: "ExamSchedule 配置",
          collapsible: true,
          expanded: true,
          prefix: "examschedule/",
          children: [
            "web-deploy.md",
          ],
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
