import { defineUserConfig, Plugin } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "ExamAware 文档",
      description: "ExamAware 的文档",
    },
    "/en-us/": {
      lang: "en-US",
      title: "ExamAware Documentation",
      description: "documentation of ExamAware",
    },
  },

  head: [
    // MXA 分析脚本
    [
      "script",
      {
        charset: "UTF-8",
        id: "MXA_COLLECT",
        src: "//mxana.tacool.com/sdk.js",
      },
    ],
    [
      "script",
      {},
      `MXA.init({ id: "c1-YBFDQnwP", useHeatMap: true, useHash: true, useErrorLog: true })`,
    ],
  ],

  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
