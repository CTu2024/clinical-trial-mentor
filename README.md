# 临床试验带教导师 · Clinical Trial Mentor

把临床试验执行经验 + 2026 版 GCP 法规，变成一套可以**在线刷题、AI 带教、随时提问**的学习工具。

像一位坐你旁边的前辈：结论先行、必带踩坑提醒、追问式讲解，而不是把培训资料原文糊你脸上。

## 三种使用方式

### 1️⃣ 在线刷题（无需任何配置）

打开 **https://ctu2024.github.io/clinical-trial-mentor/quiz/** ，两套卷共 200 题：

| 卷 | 内容 | 题型 |
|---|---|---|
| 综合百题 | GCP 法规 + 立项/伦理/启动/执行/收尾全流程实操 + 综合情景 | 情景 77 / 简答 / 判断 |
| GCP 法规百题 | 仅基于 2026 版 GCP（6 章 54 条），情景题为主 | 按板块分组 |

支持按板块筛选、按答题状态筛选、进度自动保存（浏览器本地）、自评对错。

### 2️⃣ WorkBuddy 专家包（AI 答疑 · 推荐，免 API Key）

如果你在用 [WorkBuddy](https://www.workbuddy.cn)：下载 [`expert/clinical-trial-mentor.zip`](expert/clinical-trial-mentor.zip)，在 WorkBuddy「专家 → 我的专家」导入即可，**AI 由 WorkBuddy 提供，不需要自己申请 API Key**。同样的带教人格 + 三种学习模式（考我 / 今日一招 / 专题串讲），且支持放入自有资料扩展知识库（见 [expert/README](expert/clinical-trial-mentor/README.md)）。

### 3️⃣ 网页版 AI 带教导师（BYOK，填自己的 API Key）

打开 **https://ctu2024.github.io/clinical-trial-mentor/web-mentor/** ：

- 点右上角「⚙ 设置 API」，填入 **Kimi / DeepSeek / 任意 OpenAI 兼容接口**的地址和 Key
- 内置 2026 版 GCP 法规全文 + 200 题题库做检索（纯浏览器本地 BM25，不需要后端）
- 三种学习模式：
  - **考我** — 出情景题等你作答，逐条点评，可指定专题（如"考我，伦理相关的"）
  - **今日一招** — 随机一个踩坑场景的情景小故事
  - **专题串讲** — 把一个主题（监查、知情同意、SAE……）从法规底线到实操坑点讲透
- **隐私**：你的培训资料可以拖进页面扩展检索范围，只在你的浏览器本地解析，不上传任何服务器；对话仅发送检索到的相关片段到你配置的 AI 服务

## 目录结构

```
├── quiz/                 # 200 题在线答题（纯静态，GitHub Pages 直开）
│   ├── index.html        #   入口导航
│   ├── quiz.html         #   综合百题
│   └── quiz_gcp.html     #   GCP 法规百题
├── quiz-bank.md          # 200 题文本版（方便检索/二次加工）
├── web-mentor/           # 网页版 AI 导师（BYOK，单文件，无后端）
├── expert/               # WorkBuddy 专家包（公开版，含导入说明）
└── docs/
    └── how-i-built-it.md # 这套东西是怎么做出来的（制作教程）
```

## 适合谁

- 临床试验新人（CRA / CRC / 研究护士）：入行 0-1 系统性刷题 + 随手问
- 备查/迎检前突击：GCP 条款快速查证 + 情景题演练
- 带教者：直接把题库和导师丢给新人

## 免责声明

本题库与 AI 导师基于公开法规与培训资料整理，仅供学习参考，不构成法规咨询或执业建议；具体操作请以现行法规、指导原则和所在机构 SOP 为准。

## License

题库与代码：MIT。GCP 法规文本版权归国家药监局等发布机构所有，此处转载仅供学习。
