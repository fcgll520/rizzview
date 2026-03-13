const storageKey = "wallpaper-product-theme";
const langStorageKey = "wallpaper-product-lang";

const translations = {
  "zh-CN": {
    "page.title": "锐致桌面｜视频桌面壁纸软件",
    "page.description": "将本地视频与网络视频设置为动态桌面壁纸。支持多语言、主题切换、音频模式、自动更换与收藏。",
    "brand.ariaLabel": "锐致桌面",
    "brand.name": "锐致桌面",
    "brand.tag": "视频桌面壁纸",
    "nav.features": "功能",
    "nav.how": "使用方式",
    "nav.faq": "常见问题",
    "nav.download": "下载",
    "lang.label": "语言",
    "lang.ariaLabel": "语言",
    "action.theme": "切换主题",
    "action.downloadNow": "立即下载",
    "hero.kicker": "Windows · 本地/网络视频 · 轻量稳定",
    "hero.title": "把视频变成你的桌面",
    "hero.subtitle": "一键将本地视频或网络视频设置为动态桌面壁纸。支持多语言、主题切换、音频模式、自动更换与收藏，让桌面更有氛围感。",
    "hero.ctaPrimary": "下载 Windows 版",
    "hero.ctaSecondary": "查看功能",
    "hero.bullet1": "支持本地视频：mp4/avi/wmv/mkv",
    "hero.bullet2": "支持网络视频：直接粘贴 URL 或在线搜索",
    "hero.bullet3": "隐藏桌面为可选项：默认不隐藏",
    "hero.note": "提示：此页为静态产品页示例，可直接部署到任意静态站点。",
    "hero.previewAria": "产品预览",
    "mock.title": "锐致桌面 · 预览",
    "mock.localTitle": "本地视频",
    "mock.localText": "拖入文件夹，自动加载列表",
    "mock.localPill": "设为动态壁纸",
    "mock.onlineTitle": "网络视频",
    "mock.onlineText": "搜索关键词或粘贴链接",
    "mock.onlinePill": "一键播放",
    "features.title": "核心功能",
    "features.desc": "围绕“快速设置、稳定播放、可控体验”设计。",
    "features.local.title": "本地视频动态壁纸",
    "features.local.text": "选择默认视频路径后自动扫描，列表中一键设置到桌面。",
    "features.local.li1": "本地路径/文件 URI 都可用",
    "features.local.li2": "播放失败自动重试与超时兜底",
    "features.local.li3": "退出自动清理不残留窗口",
    "features.online.title": "网络视频搜索与设置",
    "features.online.text": "支持在线搜索与链接播放，适合快速换风格。",
    "features.online.li1": "可选择不同分辨率源",
    "features.online.li2": "支持下载保存到本地",
    "features.online.li3": "失败提示明确，易排查",
    "features.desktop.title": "可控的桌面显示",
    "features.desktop.text": "隐藏桌面是可选项：默认不生效，只有手动开启才会隐藏。",
    "features.desktop.li1": "播放时按设置决定是否隐藏",
    "features.desktop.li2": "关闭选项会尝试恢复桌面",
    "features.desktop.li3": "不影响普通静态壁纸",
    "features.ui.title": "主题与语言",
    "features.ui.text": "内置多主题与多语言界面，适配不同使用习惯。",
    "features.auto.title": "自动更换与收藏",
    "features.auto.text": "支持定时自动切换壁纸，收藏常用资源快速回到喜欢的风格。",
    "features.auto.pill1": "30 分钟",
    "features.auto.pill2": "1 小时",
    "features.auto.pill3": "2 小时",
    "features.auto.pill4": "6 小时",
    "features.auto.pill5": "12 小时",
    "features.auto.pill6": "1 天",
    "how.title": "使用方式",
    "how.desc": "三步完成设置，桌面立刻动起来。",
    "how.step1.title": "选择资源",
    "how.step1.text": "从本地视频列表选择，或在网络视频中搜索/粘贴链接。",
    "how.step2.title": "一键设置桌面",
    "how.step2.text": "点击“设置桌面”，播放器会在后台初始化并开始播放。",
    "how.step3.title": "按需调整",
    "how.step3.text": "在设置页调整音频模式、自动更换、隐藏桌面等选项。",
    "how.req.title": "系统要求",
    "how.req.text": "Windows 10/11 · 建议独显/核显均可 · 视频较大时建议放在 SSD。",
    "faq.title": "常见问题",
    "faq.desc": "这里覆盖了最常见的使用疑问。",
    "faq.q1": "隐藏桌面默认会生效吗？",
    "faq.a1": "不会。隐藏桌面为独立设置项，默认关闭。只有在设置里勾选后才会在播放动态壁纸时生效。",
    "faq.q2": "本地视频为什么提示找不到？",
    "faq.a2": "请确认路径是否存在。若是 file:/// 形式的路径，也会自动转换校验。建议将视频放到“默认视频路径”目录中。",
    "faq.q3": "退出后桌面/窗口残留怎么办？",
    "faq.a3": "程序退出会尝试停止播放、恢复桌面并关闭子窗口。若系统环境异常，也会有兜底退出机制。",
    "faq.q4": "是否会上传我的文件？",
    "faq.a4": "本地视频不会上传。网络视频播放取决于你选择的在线源，仅发生必要的网络请求。",
    "download.title": "下载与部署",
    "download.text": "这是一个静态产品页（HTML/CSS/JS）。你可以直接把整个 wallpaper 目录部署到 GitHub Pages、Nginx、IIS 或任何静态托管平台。",
    "download.downloadBtn": "下载（占位链接）",
    "download.copyPathBtn": "复制部署路径",
    "download.hint": "提示：将下载链接替换为你的 Release/安装包地址即可。",
    "download.previewAria": "本地预览",
    "download.previewTitle": "本地预览",
    "download.previewCode": "直接双击打开 index.html\n\n或在该目录启动静态服务器：\npython -m http.server 5173",
    "download.stat.platform.k": "适用平台",
    "download.stat.platform.v": "Windows",
    "download.stat.lang.k": "语言",
    "download.stat.lang.v": "中文 / English / 日本語",
    "download.stat.cap.k": "关键能力",
    "download.stat.cap.v": "本地/网络视频 · 音频模式 · 自动更换",
    "download.stat.hideDesktop.k": "桌面隐藏",
    "download.stat.hideDesktop.v": "可选项（默认关闭）",
    "footer.brand": "锐致桌面",
    "footer.meta": "视频桌面壁纸软件",
    "footer.top": "回到顶部",
    "footer.features": "功能",
    "footer.download": "下载",
    "download.copyPathCopied": "已复制",
    "download.replaceLinkPrompt": "请替换为安装包链接"
  },
  "en-US": {
    "page.title": "RizzView | Video Live Wallpaper for Windows",
    "page.description": "Set local or online videos as your live desktop wallpaper. Multi-language, theme switch, audio modes, auto rotation, and favorites.",
    "brand.ariaLabel": "RizzView",
    "brand.name": "RizzView",
    "brand.tag": "Video Live Wallpaper",
    "nav.features": "Features",
    "nav.how": "How it works",
    "nav.faq": "FAQ",
    "nav.download": "Download",
    "lang.label": "Language",
    "lang.ariaLabel": "Language",
    "action.theme": "Toggle theme",
    "action.downloadNow": "Download",
    "hero.kicker": "Windows · Local/Online Videos · Lightweight & Stable",
    "hero.title": "Turn videos into your desktop",
    "hero.subtitle": "Set local or online videos as live wallpapers in one click. Multi-language, themes, audio modes, auto rotation, and favorites to make your desktop feel alive.",
    "hero.ctaPrimary": "Download for Windows",
    "hero.ctaSecondary": "See features",
    "hero.bullet1": "Local videos: mp4/avi/wmv/mkv",
    "hero.bullet2": "Online videos: paste a URL or search online",
    "hero.bullet3": "Hide desktop is optional (off by default)",
    "hero.note": "Note: This is a static product-page demo and can be deployed anywhere.",
    "hero.previewAria": "Product preview",
    "mock.title": "RizzView · Preview",
    "mock.localTitle": "Local video",
    "mock.localText": "Drop a folder to auto-load your list",
    "mock.localPill": "Set as live wallpaper",
    "mock.onlineTitle": "Online video",
    "mock.onlineText": "Search keywords or paste a link",
    "mock.onlinePill": "Play now",
    "features.title": "Core features",
    "features.desc": "Designed for fast setup, stable playback, and control.",
    "features.local.title": "Local video live wallpaper",
    "features.local.text": "After choosing a default folder, it scans automatically and lets you apply with one click.",
    "features.local.li1": "Supports local paths and file URIs",
    "features.local.li2": "Retry & timeout fallback on failures",
    "features.local.li3": "Cleans up windows on exit",
    "features.online.title": "Online search & playback",
    "features.online.text": "Search online or play from a link for quick style changes.",
    "features.online.li1": "Choose among different resolutions",
    "features.online.li2": "Download to save locally",
    "features.online.li3": "Clear errors for easy troubleshooting",
    "features.desktop.title": "Controlled desktop visibility",
    "features.desktop.text": "Hide desktop is optional: it stays off by default and only works when enabled.",
    "features.desktop.li1": "Hide or not based on your setting",
    "features.desktop.li2": "Disabling attempts to restore desktop",
    "features.desktop.li3": "Does not affect static wallpapers",
    "features.ui.title": "Themes & languages",
    "features.ui.text": "Built-in themes and multi-language UI for different habits.",
    "features.auto.title": "Auto rotation & favorites",
    "features.auto.text": "Schedule wallpaper rotation and favorite your go-to picks.",
    "features.auto.pill1": "30 min",
    "features.auto.pill2": "1 hour",
    "features.auto.pill3": "2 hours",
    "features.auto.pill4": "6 hours",
    "features.auto.pill5": "12 hours",
    "features.auto.pill6": "1 day",
    "how.title": "How it works",
    "how.desc": "Three steps to get your desktop moving.",
    "how.step1.title": "Choose content",
    "how.step1.text": "Pick from local videos, or search/paste an online link.",
    "how.step2.title": "Apply in one click",
    "how.step2.text": "Click “Set Desktop” and the player initializes in the background.",
    "how.step3.title": "Adjust as needed",
    "how.step3.text": "Tune audio mode, auto rotation, hide desktop, and more in Settings.",
    "how.req.title": "System requirements",
    "how.req.text": "Windows 10/11 · iGPU/dGPU supported · SSD recommended for large videos.",
    "faq.title": "FAQ",
    "faq.desc": "Answers to the most common questions.",
    "faq.q1": "Is “Hide desktop” enabled by default?",
    "faq.a1": "No. It is a separate option and is off by default. It only takes effect when you enable it in Settings.",
    "faq.q2": "Why does a local video show “not found”?",
    "faq.a2": "Make sure the path exists. file:/// paths are also validated. Put videos under your default video folder.",
    "faq.q3": "What if windows remain after exit?",
    "faq.a3": "The app tries to stop playback, restore the desktop, and close child windows on exit, with fallback safeguards.",
    "faq.q4": "Do you upload my files?",
    "faq.a4": "Local videos are not uploaded. Online playback depends on the source you choose and only makes necessary requests.",
    "download.title": "Download & Deploy",
    "download.text": "This is a static product page (HTML/CSS/JS). Deploy the entire wallpaper folder to GitHub Pages, Nginx, IIS, or any static host.",
    "download.downloadBtn": "Download (placeholder)",
    "download.copyPathBtn": "Copy deploy path",
    "download.hint": "Tip: Replace the download link with your Release/installer URL.",
    "download.previewAria": "Local preview",
    "download.previewTitle": "Local preview",
    "download.previewCode": "Double-click index.html\n\nOr start a static server in this folder:\npython -m http.server 5173",
    "download.stat.platform.k": "Platform",
    "download.stat.platform.v": "Windows",
    "download.stat.lang.k": "Languages",
    "download.stat.lang.v": "中文 / English / 日本語",
    "download.stat.cap.k": "Highlights",
    "download.stat.cap.v": "Local/Online videos · Audio modes · Auto rotation",
    "download.stat.hideDesktop.k": "Hide desktop",
    "download.stat.hideDesktop.v": "Optional (off by default)",
    "footer.brand": "RizzView",
    "footer.meta": "Video live wallpaper",
    "footer.top": "Back to top",
    "footer.features": "Features",
    "footer.download": "Download",
    "download.copyPathCopied": "Copied",
    "download.replaceLinkPrompt": "Replace with your installer link"
  },
  "ja-JP": {
    "page.title": "鋭致デスクトップ｜動画ライブ壁紙（Windows）",
    "page.description": "ローカル動画やオンライン動画を動く壁紙に。多言語・テーマ切替・音声モード・自動切替・お気に入りに対応。",
    "brand.ariaLabel": "鋭致デスクトップ",
    "brand.name": "鋭致デスクトップ",
    "brand.tag": "動画ライブ壁紙",
    "nav.features": "機能",
    "nav.how": "使い方",
    "nav.faq": "FAQ",
    "nav.download": "ダウンロード",
    "lang.label": "言語",
    "lang.ariaLabel": "言語",
    "action.theme": "テーマ切替",
    "action.downloadNow": "今すぐダウンロード",
    "hero.kicker": "Windows · ローカル/オンライン動画 · 軽量で安定",
    "hero.title": "動画をデスクトップにする",
    "hero.subtitle": "ローカル動画やオンライン動画をワンクリックで動く壁紙に。多言語、テーマ、音声モード、自動切替、お気に入りでデスクトップを演出します。",
    "hero.ctaPrimary": "Windows 版を入手",
    "hero.ctaSecondary": "機能を見る",
    "hero.bullet1": "ローカル動画：mp4/avi/wmv/mkv",
    "hero.bullet2": "オンライン動画：URL を貼り付け or 検索",
    "hero.bullet3": "デスクトップ非表示は任意（既定はオフ）",
    "hero.note": "注：このページは静的な製品ページ例で、どこでも配信できます。",
    "hero.previewAria": "製品プレビュー",
    "mock.title": "鋭致デスクトップ · プレビュー",
    "mock.localTitle": "ローカル動画",
    "mock.localText": "フォルダーを指定して自動で一覧を読み込み",
    "mock.localPill": "動く壁紙に設定",
    "mock.onlineTitle": "オンライン動画",
    "mock.onlineText": "キーワード検索やリンク貼り付け",
    "mock.onlinePill": "ワンクリック再生",
    "features.title": "主な機能",
    "features.desc": "素早い設定、安定再生、制御性を重視。",
    "features.local.title": "ローカル動画ライブ壁紙",
    "features.local.text": "既定の動画フォルダーを選ぶと自動スキャンし、一覧からワンクリックで適用できます。",
    "features.local.li1": "ローカルパス/ファイル URI に対応",
    "features.local.li2": "失敗時のリトライとタイムアウト対策",
    "features.local.li3": "終了時にウィンドウをクリーンアップ",
    "features.online.title": "オンライン検索と再生",
    "features.online.text": "検索やリンク再生で手軽に雰囲気を変更。",
    "features.online.li1": "解像度の選択が可能",
    "features.online.li2": "ローカルへダウンロード保存",
    "features.online.li3": "分かりやすいエラー表示",
    "features.desktop.title": "デスクトップ表示の制御",
    "features.desktop.text": "デスクトップ非表示は任意：既定は無効で、オンにしたときだけ有効です。",
    "features.desktop.li1": "再生時に設定に応じて非表示",
    "features.desktop.li2": "オフにすると復元を試みます",
    "features.desktop.li3": "通常の静的壁紙には影響なし",
    "features.ui.title": "テーマと言語",
    "features.ui.text": "複数テーマと多言語 UI を内蔵。",
    "features.auto.title": "自動切替とお気に入り",
    "features.auto.text": "定期的な自動切替と、お気に入りへの保存に対応。",
    "features.auto.pill1": "30 分",
    "features.auto.pill2": "1 時間",
    "features.auto.pill3": "2 時間",
    "features.auto.pill4": "6 時間",
    "features.auto.pill5": "12 時間",
    "features.auto.pill6": "1 日",
    "how.title": "使い方",
    "how.desc": "3 ステップでデスクトップが動き出します。",
    "how.step1.title": "素材を選ぶ",
    "how.step1.text": "ローカル一覧から選ぶか、オンラインで検索/リンク貼り付け。",
    "how.step2.title": "ワンクリックで適用",
    "how.step2.text": "「デスクトップに設定」を押すと、バックグラウンドで初期化して再生します。",
    "how.step3.title": "必要に応じて調整",
    "how.step3.text": "設定ページで音声モード、自動切替、デスクトップ非表示などを調整。",
    "how.req.title": "動作環境",
    "how.req.text": "Windows 10/11 · iGPU/dGPU 対応 · 大きい動画は SSD 推奨。",
    "faq.title": "FAQ",
    "faq.desc": "よくある質問をまとめました。",
    "faq.q1": "デスクトップ非表示は既定で有効ですか？",
    "faq.a1": "いいえ。独立した設定で既定はオフです。設定でオンにした場合のみ、動く壁紙の再生時に有効になります。",
    "faq.q2": "ローカル動画が見つからないと表示されます",
    "faq.a2": "パスが存在するか確認してください。file:/// 形式も検証されます。動画は「既定の動画フォルダー」に入れるのがおすすめです。",
    "faq.q3": "終了後にデスクトップ/ウィンドウが残る場合は？",
    "faq.a3": "終了時に再生停止、デスクトップ復元、子ウィンドウのクローズを試みます。異常時のフォールバックもあります。",
    "faq.q4": "ファイルはアップロードされますか？",
    "faq.a4": "ローカル動画はアップロードされません。オンライン再生は選択したソースに応じて必要な通信のみ行います。",
    "download.title": "ダウンロードと配信",
    "download.text": "これは静的な製品ページ（HTML/CSS/JS）です。wallpaper フォルダー全体を GitHub Pages、Nginx、IIS などの静的ホスティングに配置できます。",
    "download.downloadBtn": "ダウンロード（プレースホルダー）",
    "download.copyPathBtn": "配置パスをコピー",
    "download.hint": "ヒント：ダウンロードリンクを Release/インストーラーの URL に置き換えてください。",
    "download.previewAria": "ローカルプレビュー",
    "download.previewTitle": "ローカルプレビュー",
    "download.previewCode": "index.html をダブルクリック\n\nまたは、このフォルダーで静的サーバーを起動：\npython -m http.server 5173",
    "download.stat.platform.k": "対応プラットフォーム",
    "download.stat.platform.v": "Windows",
    "download.stat.lang.k": "言語",
    "download.stat.lang.v": "中文 / English / 日本語",
    "download.stat.cap.k": "主な機能",
    "download.stat.cap.v": "ローカル/オンライン動画 · 音声モード · 自動切替",
    "download.stat.hideDesktop.k": "デスクトップ非表示",
    "download.stat.hideDesktop.v": "任意（既定はオフ）",
    "footer.brand": "鋭致デスクトップ",
    "footer.meta": "動画ライブ壁紙",
    "footer.top": "トップへ",
    "footer.features": "機能",
    "footer.download": "ダウンロード",
    "download.copyPathCopied": "コピーしました",
    "download.replaceLinkPrompt": "インストーラーリンクに置き換えてください"
  }
};

let currentLang = "zh-CN";

function getStoredLang() {
  try {
    return localStorage.getItem(langStorageKey);
  } catch {
    return null;
  }
}

function storeLang(lang) {
  try {
    localStorage.setItem(langStorageKey, lang);
  } catch {}
}

function normalizeLang(lang) {
  if (!lang) return "zh-CN";
  const lower = String(lang).toLowerCase();
  if (lower.startsWith("zh")) return "zh-CN";
  if (lower.startsWith("ja")) return "ja-JP";
  if (lower.startsWith("en")) return "en-US";
  return "zh-CN";
}

function getInitialLang() {
  const stored = getStoredLang();
  if (stored && translations[stored]) return stored;
  return "en-US";
}

function t(lang, key) {
  const table = translations[lang] || translations["zh-CN"];
  const fallback = translations["zh-CN"];
  return table[key] ?? fallback[key] ?? key;
}

function applyI18n(lang) {
  currentLang = translations[lang] ? lang : "zh-CN";
  document.documentElement.lang = currentLang;

  document.title = t(currentLang, "page.title");
  const metaDesc = document.getElementById("meta-description");
  if (metaDesc) metaDesc.setAttribute("content", t(currentLang, "page.description"));

  const textNodes = document.querySelectorAll("[data-i18n]");
  for (const el of textNodes) {
    const key = el.getAttribute("data-i18n");
    if (!key) continue;
    el.textContent = t(currentLang, key);
  }

  const ariaNodes = document.querySelectorAll("[data-i18n-aria-label]");
  for (const el of ariaNodes) {
    const key = el.getAttribute("data-i18n-aria-label");
    if (!key) continue;
    el.setAttribute("aria-label", t(currentLang, key));
  }
}

function wireLanguageSelect() {
  const select = document.querySelector("[data-lang-select]");
  if (!(select instanceof HTMLSelectElement)) return;
  select.value = currentLang;
  select.addEventListener("change", () => {
    const next = select.value;
    applyI18n(next);
    storeLang(next);
  });
}

function getStoredTheme() {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem(storageKey, theme);
  } catch {}
}

function getInitialTheme() {
  const stored = getStoredTheme();
  if (stored === "light" || stored === "dark") return stored;
  return null;
}

function applyTheme(theme) {
  if (theme === "light" || theme === "dark") {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  storeTheme(next);
}

function wireThemeToggle() {
  const btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;
  btn.addEventListener("click", () => toggleTheme());
}

function wireCopyPath() {
  const btn = document.querySelector("[data-copy-path]");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    const text = "e:\\\\test2017\\\\WallpaperApp\\\\WallpaperApp\\\\wallpaper";
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = t(currentLang, "download.copyPathCopied");
      setTimeout(() => {
        btn.textContent = t(currentLang, "download.copyPathBtn");
      }, 1200);
    } catch {
      btn.textContent = text;
      setTimeout(() => {
        btn.textContent = t(currentLang, "download.copyPathBtn");
      }, 1800);
    }
  });
}

function wireDownloadPlaceholder() {
  const link = document.querySelector("[data-download]");
  if (!link) return;
  const href = link.getAttribute("href");
  if (href && href !== "#") return;
  link.addEventListener("click", (e) => {
    e.preventDefault();
    link.textContent = t(currentLang, "download.replaceLinkPrompt");
    setTimeout(() => {
      link.textContent = t(currentLang, "download.downloadBtn");
    }, 1600);
  });
}

function wireAccordionSingleOpen() {
  const root = document.querySelector("[data-accordion]");
  if (!root) return;
  root.addEventListener("toggle", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLDetailsElement)) return;
    if (!target.open) return;
    const items = root.querySelectorAll("details");
    for (const item of items) {
      if (item !== target) item.open = false;
    }
  }, true);
}

applyTheme(getInitialTheme());
applyI18n(getInitialLang());
wireLanguageSelect();
wireThemeToggle();
wireCopyPath();
wireDownloadPlaceholder();
wireAccordionSingleOpen();
