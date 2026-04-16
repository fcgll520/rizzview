const langStorageKey = "wallpaper-product-lang";

const pageI18n = {
  "en-US": {
    htmlLang: "en-US",
    title: "RizzView | Video Live Wallpaper for Windows",
    metaDescription:
      "Set local or online videos as your live desktop wallpaper. Multi-language, theme switch, audio modes, auto rotation, and favorites.",
    one: {
      '.brand__name': "RizzView",
      '.brand__tag': "Video Live Wallpaper",
      '.nav__link[href="#features"]': "Features",
      '.nav__link[href="#scenes"]': "Scenarios",
      '.nav__link[href="#how"]': "Quick Start",
      '.nav__link[href="#faq"]': "FAQ",
      '.topbar__actions .button': "Free Download",
      ".kicker": "Windows 10/11 · Local & Online Videos · Stable and Lightweight",
      ".hero__title": "Make your desktop more than static images<br />Bring atmosphere every time you unlock",
      ".hero__subtitle":
        "RizzView is a Windows video wallpaper tool built for smooth daily use. Set local files or online videos as live wallpapers in one click, then fine-tune with auto rotation, favorites, audio modes, and multilingual UI.",
      '.hero__cta .button--primary': "Download for Windows",
      '.hero__cta .button--ghost': "Explore Highlights",
      ".trustBar__title": "Why users choose RizzView",
      '#features .section__title': "Core Features",
      '#features .section__desc':
        "From source management to playback control, every part is designed for beauty, usability, and reliability.",
      '#scenes .section__title': "Typical Scenarios",
      '#scenes .section__desc':
        "Not just visual polish, RizzView adapts your desktop mood to different moments in your day.",
      '#how .section__title': "Quick Start in 3 Steps",
      '#how .section__desc': "Complete setup in minutes after install, with almost zero learning cost.",
      '.callout__title': "System Notes",
      '.callout__text':
        "Runs on Windows 10/11 with either integrated or dedicated graphics. For large video assets, SSD storage is recommended for smoother loading.",
      '#overview .section__title': "Product Overview",
      '#overview .section__desc':
        "Structured details to quickly evaluate whether RizzView fits your workflow and device setup.",
      '#faq .section__title': "Frequently Asked Questions",
      '#faq .section__desc': "Answers to the most common install and usage questions.",
      '.ctaSection__title': "Ready to upgrade your desktop experience?",
      '.ctaSection__text':
        "Install now and finish setup in minutes. Build a more immersive personal workspace with dynamic video wallpapers.",
      '.ctaSection__actions .button--primary': "Download Now",
      '.ctaSection__actions .button--ghost': "Business Contact",
      '.footer__meta': "Video Live Wallpaper for Windows",
      '.footer__link[href="#features"]': "Features",
      '.footer__link[href*="rizzview_setup.exe"]': "Download"
    },
    list: {
      ".statPill__k": ["Supported Formats", "Hide Desktop", "Learning Curve"],
      ".statPill__v": ["MP4 / AVI / WMV / MKV", "Off by default, enabled on demand", "Ready in 3 steps"],
      ".trustItem": ["Fast Setup", "Stable Playback", "Premium Visuals", "Complete Features", "Continuous Updates"],
      ".floatCard__title": ["Auto Rotation", "Online Search"],
      ".floatCard__desc": [
        "Set intervals from 30 minutes to 1 day and rotate your desktop style automatically.",
        "Paste a URL or search directly to find and apply the exact mood you want."
      ],
      ".sceneCard__tag": ["Work Desk", "Creative Flow", "Entertainment"],
      ".sceneCard__title": [
        "Quiet motion to improve focus",
        "Mood-driven visuals for inspiration",
        "Showcase-ready desktop atmosphere"
      ],
      ".sceneCard__text": [
        "Use low-distraction videos and mute mode to add depth and style without breaking concentration.",
        "Switch favorites and rotation lists quickly so your desktop supports ideation, editing, and design sessions.",
        "Apply online content instantly and create a more immersive visual style for personal setup displays."
      ],
      ".step__title": ["Import local or online videos", "Click Set as Desktop", "Tune rules as needed"],
      ".step__text": [
        "Choose a local folder or paste a video link. The app detects and loads playable resources automatically.",
        "Start playback with one click while the app handles player initialization and desktop layering in the background.",
        "Adjust rotation intervals, audio behavior, and desktop visibility strategy, then save your favorite combinations."
      ],
      ".faq__q": [
        'Is "Hide Desktop" enabled by default?',
        "Why does a local video show as not found?",
        "What if windows remain after exit?",
        "Do you upload my local files?"
      ],
      ".faq__a": [
        "No. It is disabled by default and only takes effect when you manually enable it in settings.",
        "Please verify the path exists and is accessible. If using a file:/// path, it is also converted and validated automatically.",
        "The app prioritizes stopping playback, restoring desktop state, and closing child windows. Fallback cleanup logic is also built in for edge cases.",
        "No. Local videos are never uploaded. Online playback only visits your chosen source with necessary requests."
      ]
    }
  },
  "zh-TW": {
    htmlLang: "zh-TW",
    title: "RizzView | Windows 視訊動態桌布",
    metaDescription:
      "將本機或線上影片設為動態桌布。支援多語言、主題、音訊模式、自動輪播與收藏。",
    one: {
      '.brand__name': "RizzView",
      '.brand__tag': "視訊動態桌布",
      '.nav__link[href="#features"]': "功能亮點",
      '.nav__link[href="#scenes"]': "使用場景",
      '.nav__link[href="#how"]': "快速上手",
      '.nav__link[href="#faq"]': "常見問題",
      '.topbar__actions .button': "免費下載",
      ".kicker": "Windows 10/11 · 本機與線上影片 · 穩定輕量",
      ".hero__title": "讓桌面不只是一張靜態圖片<br />每次解鎖都更有氛圍",
      ".hero__subtitle":
        "RizzView 是一款強調體驗的 Windows 視訊桌布工具。可一鍵套用本機或線上影片，並搭配自動輪播、收藏、音訊模式與多語言介面。",
      '.hero__cta .button--primary': "下載 Windows 版",
      '.hero__cta .button--ghost': "查看亮點",
      ".trustBar__title": "為什麼使用者選擇 RizzView",
      '#features .section__title': "核心功能",
      '#features .section__desc': "從素材來源到播放控制，全面兼顧美感、易用性與穩定性。",
      '#scenes .section__title': "典型使用場景",
      '#scenes .section__desc': "不只是好看，而是讓桌面在不同情境都更貼合你的節奏。",
      '#how .section__title': "3 步快速完成",
      '#how .section__desc': "安裝後幾分鐘即可完成設定，幾乎零學習成本。",
      '.callout__title': "系統建議",
      '.callout__text': "支援 Windows 10/11，核顯與獨顯皆可。若影片較大，建議放在 SSD 以提升讀取穩定性。",
      '#overview .section__title': "產品特性總覽",
      '#overview .section__desc': "用結構化資訊快速判斷 RizzView 是否符合你的使用習慣。",
      '#faq .section__title': "常見問題",
      '#faq .section__desc': "安裝與使用過程中最常見問題一次看懂。",
      '.ctaSection__title': "準備好升級你的桌面體驗了嗎？",
      '.ctaSection__text': "現在安裝，幾分鐘內完成設定，用動態影片打造更沉浸的個人桌面空間。",
      '.ctaSection__actions .button--primary': "立即下載",
      '.ctaSection__actions .button--ghost': "商務合作",
      '.footer__meta': "Windows 視訊動態桌布",
      '.footer__link[href="#features"]': "功能",
      '.footer__link[href*="rizzview_setup.exe"]': "下載"
    },
    list: {
      ".statPill__k": ["支援格式", "隱藏桌面", "上手門檻"],
      ".statPill__v": ["MP4 / AVI / WMV / MKV", "預設關閉，按需開啟", "3 步完成"],
      ".trustItem": ["快速設定", "播放穩定", "高級視覺", "功能完整", "持續更新"],
      ".floatCard__title": ["自動輪播", "線上搜尋"],
      ".floatCard__desc": ["可設定 30 分鐘到 1 天，桌面風格自動切換。", "貼上網址或直接搜尋，快速找到想要的氛圍素材。"],
      ".sceneCard__tag": ["工作桌面", "創作模式", "娛樂展示"],
      ".sceneCard__title": ["低干擾動態背景，更專注", "氛圍化視覺，激發靈感", "更具展示感的沉浸桌面"],
      ".sceneCard__text": [
        "搭配低干擾影片與靜音模式，在不打斷注意力的前提下提升桌面質感。",
        "快速切換收藏與輪播清單，讓桌面更貼近創作節奏。",
        "一鍵套用線上素材，打造更有個性的設備展示風格。"
      ],
      ".step__title": ["匯入本機或線上影片", "一鍵設為桌面", "依需求調整規則"],
      ".step__text": [
        "選擇本機資料夾或貼上影片連結，系統會自動辨識可播放資源。",
        "點擊後即開始播放，播放器與桌面層級會在背景完成初始化。",
        "可調整輪播間隔、音訊行為與桌面顯示策略，並儲存常用組合。"
      ],
      ".faq__q": ["「隱藏桌面」預設會啟用嗎？", "為什麼本機影片顯示找不到？", "退出後若仍有殘留視窗怎麼辦？", "會上傳我的本機檔案嗎？"],
      ".faq__a": [
        "不會。此選項預設關閉，只有你手動開啟後才會生效。",
        "請確認路徑存在且可讀取。若是 file:/// 格式，程式也會自動轉換與校驗。",
        "程式會優先停止播放、恢復桌面並關閉子視窗，另有兜底清理機制處理少數異常。",
        "不會。你的本機影片不會被上傳；線上播放只對你選擇的來源發送必要請求。"
      ]
    }
  },
  "de-DE": {
    htmlLang: "de-DE",
    title: "RizzView | Video-Live-Wallpaper fur Windows",
    metaDescription:
      "Nutze lokale oder Online-Videos als Live-Desktop-Hintergrund. Mehrsprachig, mit Audiomodi, Auto-Wechsel und Favoriten.",
    one: {
      '.brand__name': "RizzView",
      ".brand__tag": "Video-Live-Wallpaper",
      '.nav__link[href="#features"]': "Funktionen",
      '.nav__link[href="#scenes"]': "Szenarien",
      '.nav__link[href="#how"]': "Schnellstart",
      '.nav__link[href="#faq"]': "FAQ",
      ".topbar__actions .button": "Kostenlos herunterladen",
      ".kicker": "Windows 10/11 · Lokale & Online-Videos · Stabil und leichtgewichtig",
      ".hero__title": "Mehr als ein statisches Desktop-Bild<br />Mehr Atmosphare bei jedem Entsperren",
      ".hero__subtitle":
        "RizzView ist ein Video-Wallpaper-Tool fur Windows mit Fokus auf Alltagstauglichkeit. Nutze lokale oder Online-Videos per Klick und steuere Rotation, Favoriten, Audiomodi und Sprache.",
      '.hero__cta .button--primary': "Fur Windows herunterladen",
      '.hero__cta .button--ghost': "Highlights ansehen",
      ".trustBar__title": "Warum Nutzer RizzView wahlen",
      '#features .section__title': "Kernfunktionen",
      '#features .section__desc':
        "Von der Quellenverwaltung bis zur Wiedergabesteuerung fur Design, Bedienbarkeit und Stabilitat.",
      '#scenes .section__title': "Typische Szenarien",
      '#scenes .section__desc':
        "Nicht nur Optik: RizzView passt die Desktop-Stimmung an deine Tagesphasen an.",
      '#how .section__title': "Schnellstart in 3 Schritten",
      '#how .section__desc': "Nach der Installation in wenigen Minuten einsatzbereit.",
      ".callout__title": "Systemhinweise",
      ".callout__text":
        "Lauft auf Windows 10/11 mit integrierter oder dedizierter GPU. Fur grose Videos wird SSD-Speicher empfohlen.",
      "#overview .section__title": "Produktuberblick",
      "#overview .section__desc":
        "Strukturierte Infos, um schnell zu entscheiden, ob RizzView zu deinem Workflow passt.",
      '#faq .section__title': "Haufige Fragen",
      '#faq .section__desc': "Antworten auf die wichtigsten Fragen zu Installation und Nutzung.",
      ".ctaSection__title": "Bereit fur ein besseres Desktop-Erlebnis?",
      ".ctaSection__text":
        "Jetzt installieren und in wenigen Minuten starten. Erzeuge ein immersiveres Setup mit Video-Wallpapern.",
      '.ctaSection__actions .button--primary': "Jetzt herunterladen",
      '.ctaSection__actions .button--ghost': "Business-Kontakt",
      ".footer__meta": "Video-Live-Wallpaper fur Windows",
      '.footer__link[href="#features"]': "Funktionen",
      '.footer__link[href*="rizzview_setup.exe"]': "Download"
    },
    list: {
      ".statPill__k": ["Unterstutzte Formate", "Desktop ausblenden", "Einstieg"],
      ".statPill__v": ["MP4 / AVI / WMV / MKV", "Standard: Aus, bei Bedarf aktivierbar", "In 3 Schritten bereit"],
      ".trustItem": ["Schnelles Setup", "Stabile Wiedergabe", "Hochwertige Optik", "Volle Funktionen", "Kontinuierliche Updates"],
      ".floatCard__title": ["Auto-Wechsel", "Online-Suche"],
      ".floatCard__desc": [
        "Intervall von 30 Minuten bis 1 Tag einstellen und den Stil automatisch rotieren.",
        "URL einfugen oder direkt suchen und die gewunschte Stimmung sofort anwenden."
      ],
      ".sceneCard__tag": ["Arbeitsplatz", "Kreativmodus", "Entertainment"],
      ".sceneCard__title": ["Ruhige Bewegung fur Fokus", "Stimmungsvolle Visuals fur Ideen", "Desktop mit Showcase-Charakter"],
      ".sceneCard__text": [
        "Niedrig ablenkende Videos mit Mute-Modus geben Tiefe, ohne die Konzentration zu storen.",
        "Zwischen Favoriten und Rotationslisten wechseln, passend fur Design- und Edit-Sessions.",
        "Online-Inhalte sofort anwenden und ein immersiveres Setup erstellen."
      ],
      ".step__title": ["Lokale oder Online-Videos importieren", "Als Desktop setzen", "Regeln nach Bedarf anpassen"],
      ".step__text": [
        "Lokalen Ordner wahlen oder Link einfugen. Verfugbare Inhalte werden automatisch erkannt.",
        "Per Klick starten, Initialisierung von Player und Desktop-Ebenen erfolgt im Hintergrund.",
        "Rotationsintervall, Audioverhalten und Desktop-Sichtbarkeit einstellen und Kombinationen speichern."
      ],
      ".faq__q": [
        'Ist "Desktop ausblenden" standardmasig aktiv?',
        "Warum wird ein lokales Video als nicht gefunden angezeigt?",
        "Was tun, wenn Fenster nach dem Beenden bleiben?",
        "Werden lokale Dateien hochgeladen?"
      ],
      ".faq__a": [
        "Nein. Die Option ist standardmasig deaktiviert und wirkt nur nach manueller Aktivierung.",
        "Bitte prufe Pfad und Zugriffsrechte. file:/// Pfade werden ebenfalls automatisch validiert.",
        "Die App stoppt Wiedergabe, stellt den Desktop wieder her und schliest Unterfenster, inklusive Fallback-Logik.",
        "Nein. Lokale Videos werden nicht hochgeladen. Online-Wiedergabe nutzt nur notwendige Anfragen."
      ]
    }
  },
  "fr-FR": {
    htmlLang: "fr-FR",
    title: "RizzView | Fond d'ecran video anime pour Windows",
    metaDescription:
      "Definissez des videos locales ou en ligne comme fond d'ecran anime. Multilingue, modes audio, rotation auto et favoris.",
    one: {
      '.brand__name': "RizzView",
      ".brand__tag": "Fond d'ecran video anime",
      '.nav__link[href="#features"]': "Fonctionnalites",
      '.nav__link[href="#scenes"]': "Scenarios",
      '.nav__link[href="#how"]': "Demarrage rapide",
      '.nav__link[href="#faq"]': "FAQ",
      ".topbar__actions .button": "Telechargement gratuit",
      ".kicker": "Windows 10/11 · Videos locales et en ligne · Stable et leger",
      ".hero__title": "Un bureau bien plus qu'une image statique<br />Plus d'ambiance a chaque ouverture",
      ".hero__subtitle":
        "RizzView est un outil de fond d'ecran video pour Windows, pense pour un usage fluide au quotidien. Appliquez des videos locales ou en ligne en un clic, puis ajustez rotation, favoris, audio et langue.",
      '.hero__cta .button--primary': "Telecharger pour Windows",
      '.hero__cta .button--ghost': "Voir les points forts",
      ".trustBar__title": "Pourquoi les utilisateurs choisissent RizzView",
      '#features .section__title': "Fonctionnalites principales",
      '#features .section__desc':
        "De la gestion des sources au controle de lecture, tout est optimise pour l'esthetique, l'usage et la stabilite.",
      '#scenes .section__title': "Scenarios typiques",
      '#scenes .section__desc': "Au-dela du visuel, RizzView adapte l'ambiance du bureau a chaque moment.",
      '#how .section__title': "Demarrage en 3 etapes",
      '#how .section__desc': "Configuration terminee en quelques minutes apres installation.",
      ".callout__title": "Notes systeme",
      ".callout__text":
        "Fonctionne sur Windows 10/11 avec iGPU ou GPU dedie. Pour les gros fichiers video, un SSD est recommande.",
      "#overview .section__title": "Vue d'ensemble du produit",
      "#overview .section__desc":
        "Informations structurees pour verifier rapidement l'adaptation a votre workflow.",
      '#faq .section__title': "Questions frequentes",
      '#faq .section__desc': "Reponses aux questions les plus courantes sur l'installation et l'usage.",
      ".ctaSection__title": "Pret a ameliorer votre experience bureau ?",
      ".ctaSection__text":
        "Installez maintenant et soyez operationnel en quelques minutes avec des fonds video immersifs.",
      '.ctaSection__actions .button--primary': "Telecharger maintenant",
      '.ctaSection__actions .button--ghost': "Contact pro",
      ".footer__meta": "Fond d'ecran video anime pour Windows",
      '.footer__link[href="#features"]': "Fonctionnalites",
      '.footer__link[href*="rizzview_setup.exe"]': "Telecharger"
    },
    list: {
      ".statPill__k": ["Formats pris en charge", "Masquer le bureau", "Prise en main"],
      ".statPill__v": ["MP4 / AVI / WMV / MKV", "Desactive par defaut, activable a la demande", "Pret en 3 etapes"],
      ".trustItem": ["Mise en route rapide", "Lecture stable", "Visuel premium", "Fonctions completes", "Mises a jour continues"],
      ".floatCard__title": ["Rotation auto", "Recherche en ligne"],
      ".floatCard__desc": [
        "Definissez un intervalle de 30 minutes a 1 jour pour faire tourner automatiquement les styles.",
        "Collez une URL ou recherchez directement pour appliquer l'ambiance voulue."
      ],
      ".sceneCard__tag": ["Travail", "Creation", "Divertissement"],
      ".sceneCard__title": ["Mouvement discret pour la concentration", "Visuels d'ambiance pour inspirer", "Bureau immersif pret a presenter"],
      ".sceneCard__text": [
        "Des videos peu distrayantes avec mode muet pour enrichir le bureau sans casser l'attention.",
        "Alternez rapidement favoris et rotations pour les sessions de creation et montage.",
        "Appliquez instantanement des contenus en ligne pour un setup plus immersif."
      ],
      ".step__title": ["Importer videos locales ou en ligne", "Cliquer sur Definir le bureau", "Ajuster les regles selon vos besoins"],
      ".step__text": [
        "Choisissez un dossier local ou collez un lien video. Les ressources lisibles sont detectees automatiquement.",
        "La lecture demarre en un clic, avec initialisation du lecteur et des couches bureau en arriere-plan.",
        "Reglez rotation, audio et visibilite du bureau puis sauvegardez vos combinaisons favorites."
      ],
      ".faq__q": [
        'Le mode "Masquer le bureau" est-il active par defaut ?',
        "Pourquoi une video locale est-elle introuvable ?",
        "Que faire si des fenetres restent apres fermeture ?",
        "Mes fichiers locaux sont-ils envoyes ?"
      ],
      ".faq__a": [
        "Non. Cette option est desactivee par defaut et ne s'applique qu'apres activation manuelle.",
        "Verifiez le chemin et les droits d'acces. Les chemins file:/// sont aussi convertis et valides.",
        "L'application arrete la lecture, restaure le bureau et ferme les sous-fenetres avec mecanisme de secours.",
        "Non. Les videos locales ne sont pas envoyees. Les sources en ligne ne recoivent que les requetes necessaires."
      ]
    }
  },
  "ja-JP": {
    htmlLang: "ja-JP",
    title: "RizzView | Windows向け動画ライブ壁紙",
    metaDescription:
      "ローカル動画やオンライン動画をライブ壁紙に設定。多言語、音声モード、自動切替、お気に入りに対応。",
    one: {
      '.brand__name': "RizzView",
      ".brand__tag": "動画ライブ壁紙",
      '.nav__link[href="#features"]': "機能",
      '.nav__link[href="#scenes"]': "利用シーン",
      '.nav__link[href="#how"]': "クイックスタート",
      '.nav__link[href="#faq"]': "FAQ",
      ".topbar__actions .button": "無料ダウンロード",
      ".kicker": "Windows 10/11 · ローカル/オンライン動画 · 軽量で安定",
      ".hero__title": "静止画像だけのデスクトップから卒業<br />起動のたびに雰囲気を更新",
      ".hero__subtitle":
        "RizzViewは、日常利用に最適化したWindows向け動画壁紙ツールです。ローカル/オンライン動画をワンクリックで適用し、ローテーション、お気に入り、音声モード、言語を細かく調整できます。",
      '.hero__cta .button--primary': "Windows版をダウンロード",
      '.hero__cta .button--ghost': "特長を見る",
      ".trustBar__title": "RizzViewが選ばれる理由",
      '#features .section__title': "主要機能",
      '#features .section__desc':
        "素材管理から再生制御まで、見た目・使いやすさ・安定性を重視して設計。",
      '#scenes .section__title': "代表的な利用シーン",
      '#scenes .section__desc': "見た目だけでなく、時間帯や用途に合わせてデスクトップの雰囲気を調整。",
      '#how .section__title': "3ステップで開始",
      '#how .section__desc': "インストール後、数分でセットアップ完了。",
      ".callout__title": "システムメモ",
      ".callout__text":
        "Windows 10/11で動作。内蔵GPU/外部GPUの両方に対応。大きな動画ファイルはSSD保存を推奨。",
      "#overview .section__title": "製品概要",
      "#overview .section__desc":
        "ワークフロー適合性を素早く判断できるよう、情報を構造化して表示。",
      '#faq .section__title': "よくある質問",
      '#faq .section__desc': "インストールや利用時によくある質問に回答します。",
      ".ctaSection__title": "デスクトップ体験をアップグレードしませんか？",
      ".ctaSection__text":
        "今すぐインストールして数分で準備完了。動画ライブ壁紙でより没入感のある環境へ。",
      '.ctaSection__actions .button--primary': "今すぐダウンロード",
      '.ctaSection__actions .button--ghost': "法人お問い合わせ",
      ".footer__meta": "Windows向け動画ライブ壁紙",
      '.footer__link[href="#features"]': "機能",
      '.footer__link[href*="rizzview_setup.exe"]': "ダウンロード"
    },
    list: {
      ".statPill__k": ["対応形式", "デスクトップ非表示", "導入しやすさ"],
      ".statPill__v": ["MP4 / AVI / WMV / MKV", "初期設定はオフ、必要時のみ有効", "3ステップで完了"],
      ".trustItem": ["すぐ使える", "安定再生", "上質な見た目", "機能が充実", "継続アップデート"],
      ".floatCard__title": ["自動ローテーション", "オンライン検索"],
      ".floatCard__desc": [
        "30分から1日まで間隔を設定し、デスクトップスタイルを自動で切替。",
        "URL貼り付けや直接検索で、欲しい雰囲気をすぐ適用。"
      ],
      ".sceneCard__tag": ["仕事", "クリエイティブ", "エンタメ"],
      ".sceneCard__title": ["集中を妨げない動き", "発想を促すムード演出", "見せたくなる没入デスクトップ"],
      ".sceneCard__text": [
        "低刺激な動画とミュート設定で、集中を崩さずにデスクトップの質感を向上。",
        "お気に入りやローテーションを切り替え、制作や編集の流れに合わせやすい。",
        "オンライン素材を即適用し、より没入感ある個性的なセットアップに。"
      ],
      ".step__title": ["ローカル/オンライン動画を取り込む", "デスクトップに設定", "必要に応じてルール調整"],
      ".step__text": [
        "ローカルフォルダを選択するか動画リンクを貼り付けると、再生可能な素材を自動検出。",
        "ワンクリックで再生開始。プレイヤー初期化とレイヤー調整はバックグラウンドで実行。",
        "ローテーション、音声挙動、デスクトップ表示ルールを調整し、よく使う組み合わせを保存。"
      ],
      ".faq__q": [
        "「デスクトップ非表示」は初期状態で有効ですか？",
        "ローカル動画が見つからない原因は？",
        "終了後にウィンドウが残る場合は？",
        "ローカルファイルはアップロードされますか？"
      ],
      ".faq__a": [
        "いいえ。初期状態では無効で、設定で手動有効化した場合のみ反映されます。",
        "パスの存在とアクセス権を確認してください。file:/// 形式も自動変換して検証します。",
        "再生停止、デスクトップ復元、子ウィンドウ終了を優先実行し、異常時はフォールバック処理も行います。",
        "いいえ。ローカル動画はアップロードされません。オンライン再生は必要最小限の通信のみ行います。"
      ]
    }
  },
  "pt-PT": {
    htmlLang: "pt-PT",
    title: "RizzView | Papel de parede em video para Windows",
    metaDescription:
      "Use videos locais ou online como papel de parede animado. Multi-idioma, modos de audio, rotacao automatica e favoritos.",
    one: {
      '.brand__name': "RizzView",
      ".brand__tag": "Papel de parede em video",
      '.nav__link[href="#features"]': "Funcionalidades",
      '.nav__link[href="#scenes"]': "Cenarios",
      '.nav__link[href="#how"]': "Inicio rapido",
      '.nav__link[href="#faq"]': "FAQ",
      ".topbar__actions .button": "Transferencia gratuita",
      ".kicker": "Windows 10/11 · Videos locais e online · Estavel e leve",
      ".hero__title": "Mais do que uma imagem estatica no ambiente de trabalho<br />Mais atmosfera a cada desbloqueio",
      ".hero__subtitle":
        "RizzView e uma ferramenta de video wallpaper para Windows, feita para uso diario fluido. Aplique videos locais ou online com um clique e ajuste rotacao, favoritos, audio e idioma.",
      '.hero__cta .button--primary': "Transferir para Windows",
      '.hero__cta .button--ghost': "Ver destaques",
      ".trustBar__title": "Porque os utilizadores escolhem o RizzView",
      '#features .section__title': "Funcionalidades principais",
      '#features .section__desc':
        "Da origem dos conteudos ao controlo de reproducao, tudo para equilibrio entre visual, usabilidade e estabilidade.",
      '#scenes .section__title': "Cenarios tipicos",
      '#scenes .section__desc':
        "Nao e so aparencia: o RizzView adapta o ambiente do desktop a diferentes momentos do dia.",
      '#how .section__title': "Inicio em 3 passos",
      '#how .section__desc': "Configuracao concluida em poucos minutos apos a instalacao.",
      ".callout__title": "Notas do sistema",
      ".callout__text":
        "Funciona no Windows 10/11 com iGPU ou GPU dedicada. Para videos grandes, recomenda-se armazenamento SSD.",
      "#overview .section__title": "Visao geral do produto",
      "#overview .section__desc":
        "Informacao estruturada para avaliar rapidamente se o RizzView se adapta ao seu fluxo.",
      '#faq .section__title': "Perguntas frequentes",
      '#faq .section__desc': "Respostas para as duvidas mais comuns de instalacao e uso.",
      ".ctaSection__title": "Pronto para melhorar a experiencia do seu desktop?",
      ".ctaSection__text":
        "Instale agora e conclua a configuracao em minutos, com um ambiente mais imersivo usando videos.",
      '.ctaSection__actions .button--primary': "Transferir agora",
      '.ctaSection__actions .button--ghost': "Contacto comercial",
      ".footer__meta": "Papel de parede em video para Windows",
      '.footer__link[href="#features"]': "Funcionalidades",
      '.footer__link[href*="rizzview_setup.exe"]': "Transferir"
    },
    list: {
      ".statPill__k": ["Formatos suportados", "Ocultar desktop", "Curva de aprendizagem"],
      ".statPill__v": ["MP4 / AVI / WMV / MKV", "Desativado por defeito, ativavel quando necessario", "Pronto em 3 passos"],
      ".trustItem": ["Configuracao rapida", "Reproducao estavel", "Visual premium", "Recursos completos", "Atualizacoes continuas"],
      ".floatCard__title": ["Rotacao automatica", "Pesquisa online"],
      ".floatCard__desc": [
        "Defina intervalos de 30 minutos a 1 dia para alternar estilos automaticamente.",
        "Cole um URL ou pesquise diretamente para aplicar o ambiente ideal."
      ],
      ".sceneCard__tag": ["Trabalho", "Criacao", "Entretenimento"],
      ".sceneCard__title": ["Movimento discreto para foco", "Visuais de ambiente para inspiracao", "Desktop imersivo para exibicao"],
      ".sceneCard__text": [
        "Use videos de baixa distracao com modo silencioso para enriquecer o ambiente sem quebrar concentracao.",
        "Alterne rapidamente favoritos e listas de rotacao para sessoes de criacao e edicao.",
        "Aplique conteudos online imediatamente e monte um setup mais imersivo."
      ],
      ".step__title": ["Importar videos locais ou online", "Clique em Definir Desktop", "Ajustar regras conforme necessario"],
      ".step__text": [
        "Escolha uma pasta local ou cole um link de video. Os recursos disponiveis sao detetados automaticamente.",
        "A reproducao inicia com um clique; leitor e camadas do desktop sao inicializados em segundo plano.",
        "Ajuste intervalo de rotacao, comportamento de audio e visibilidade do desktop, depois guarde combinacoes favoritas."
      ],
      ".faq__q": [
        'A opcao "Ocultar desktop" vem ativa por defeito?',
        "Porque um video local aparece como nao encontrado?",
        "E se ficarem janelas abertas apos sair?",
        "Os meus ficheiros locais sao enviados?"
      ],
      ".faq__a": [
        "Nao. A opcao vem desativada e so funciona apos ativacao manual nas definicoes.",
        "Confirme se o caminho existe e e acessivel. Caminhos file:/// tambem sao convertidos e validados.",
        "A app para a reproducao, restaura o desktop e fecha janelas-filhas; ha tambem logica de fallback para casos extremos.",
        "Nao. Videos locais nao sao enviados. A reproducao online usa apenas pedidos necessarios."
      ]
    }
  },
  "es-ES": {
    htmlLang: "es-ES",
    title: "RizzView | Fondo de pantalla en video para Windows",
    metaDescription:
      "Usa videos locales u online como fondo animado. Multiidioma, modos de audio, rotacion automatica y favoritos.",
    one: {
      '.brand__name': "RizzView",
      ".brand__tag": "Fondo de pantalla en video",
      '.nav__link[href="#features"]': "Funciones",
      '.nav__link[href="#scenes"]': "Escenarios",
      '.nav__link[href="#how"]': "Inicio rapido",
      '.nav__link[href="#faq"]': "FAQ",
      ".topbar__actions .button": "Descarga gratuita",
      ".kicker": "Windows 10/11 · Videos locales y online · Estable y ligero",
      ".hero__title": "Tu escritorio puede ser mas que una imagen estatica<br />Mas atmosfera cada vez que desbloqueas",
      ".hero__subtitle":
        "RizzView es una herramienta de video wallpaper para Windows pensada para uso diario. Aplica videos locales u online con un clic y ajusta rotacion, favoritos, audio e idioma.",
      '.hero__cta .button--primary': "Descargar para Windows",
      '.hero__cta .button--ghost': "Ver puntos clave",
      ".trustBar__title": "Por que los usuarios eligen RizzView",
      '#features .section__title': "Funciones principales",
      '#features .section__desc':
        "Desde la gestion de fuentes hasta el control de reproduccion, todo optimizado para diseno, uso y estabilidad.",
      '#scenes .section__title': "Escenarios tipicos",
      '#scenes .section__desc':
        "No es solo visual: RizzView adapta el ambiente del escritorio a cada momento del dia.",
      '#how .section__title': "Empieza en 3 pasos",
      '#how .section__desc': "Configuracion completa en pocos minutos tras instalar.",
      ".callout__title": "Notas del sistema",
      ".callout__text":
        "Funciona en Windows 10/11 con iGPU o GPU dedicada. Para videos grandes se recomienda almacenamiento SSD.",
      "#overview .section__title": "Resumen del producto",
      "#overview .section__desc":
        "Informacion estructurada para evaluar rapidamente si RizzView encaja en tu flujo de trabajo.",
      '#faq .section__title': "Preguntas frecuentes",
      '#faq .section__desc': "Respuestas a las dudas mas comunes de instalacion y uso.",
      ".ctaSection__title": "Listo para mejorar tu experiencia de escritorio?",
      ".ctaSection__text":
        "Instala ahora y termina la configuracion en minutos. Crea un espacio mas inmersivo con fondos en video.",
      '.ctaSection__actions .button--primary': "Descargar ahora",
      '.ctaSection__actions .button--ghost': "Contacto comercial",
      ".footer__meta": "Fondo de pantalla en video para Windows",
      '.footer__link[href="#features"]': "Funciones",
      '.footer__link[href*="rizzview_setup.exe"]': "Descargar"
    },
    list: {
      ".statPill__k": ["Formatos compatibles", "Ocultar escritorio", "Curva de aprendizaje"],
      ".statPill__v": ["MP4 / AVI / WMV / MKV", "Desactivado por defecto, se activa cuando quieras", "Listo en 3 pasos"],
      ".trustItem": ["Configuracion rapida", "Reproduccion estable", "Visual premium", "Funciones completas", "Actualizaciones continuas"],
      ".floatCard__title": ["Rotacion automatica", "Busqueda online"],
      ".floatCard__desc": [
        "Configura intervalos de 30 minutos a 1 dia para cambiar el estilo del escritorio automaticamente.",
        "Pega una URL o busca directamente para aplicar la atmosfera que quieres."
      ],
      ".sceneCard__tag": ["Trabajo", "Creatividad", "Entretenimiento"],
      ".sceneCard__title": ["Movimiento suave para concentrarte", "Visuales de ambiente para inspirarte", "Escritorio inmersivo para mostrar"],
      ".sceneCard__text": [
        "Usa videos de baja distraccion con modo silencio para mejorar el entorno sin romper el foco.",
        "Cambia rapido entre favoritos y listas de rotacion en sesiones de diseno y edicion.",
        "Aplica contenido online al instante y crea una configuracion mas inmersiva."
      ],
      ".step__title": ["Importa videos locales u online", "Haz clic en Establecer escritorio", "Ajusta reglas segun necesites"],
      ".step__text": [
        "Selecciona una carpeta local o pega un enlace de video. Los recursos disponibles se detectan automaticamente.",
        "La reproduccion empieza con un clic; el reproductor y las capas del escritorio se inicializan en segundo plano.",
        "Ajusta rotacion, comportamiento de audio y visibilidad del escritorio, luego guarda tus combinaciones favoritas."
      ],
      ".faq__q": [
        'La opcion "Ocultar escritorio" viene activa por defecto?',
        "Por que un video local aparece como no encontrado?",
        "Que hago si quedan ventanas al cerrar?",
        "Se suben mis archivos locales?"
      ],
      ".faq__a": [
        "No. Esta opcion viene desactivada y solo funciona cuando la activas manualmente en ajustes.",
        "Verifica que la ruta exista y sea accesible. Las rutas file:/// tambien se convierten y validan automaticamente.",
        "La app detiene la reproduccion, restaura el escritorio y cierra subventanas; tambien incluye limpieza de respaldo.",
        "No. Los videos locales no se suben. La reproduccion online solo hace solicitudes necesarias."
      ]
    }
  }
};

const coverageBase = {
  one: {
    '.nav__link[href="https://www.phoenysoft.com/contact.html"]': "Contact Us",
    ".ctaSection__kicker": "RizzView for Windows",
    '.footer__link[href="https://www.phoenysoft.com"]': "Home",
    '.footer__link[href="https://www.phoenysoft.com/about.html"]': "About Us",
    '.footer__link[href="https://www.phoenysoft.com/privacy.html"]': "Privacy",
    '.footer__link[href="https://www.phoenysoft.com/terms.html"]': "Terms",
    ".footer__right .srOnly": "Language"
  },
  list: {
    ".featureCard__title": [
      "One-click local video wallpaper",
      "Online search and link playback",
      "Audio modes for each context",
      "Auto rotation and favorites",
      "Controlled desktop visibility",
      "Multilingual UI and themes"
    ],
    ".featureCard__text": [
      "Scan your default video folder, auto-load resources, and apply any item to your desktop instantly.",
      "Find content by keyword or paste direct links, then apply it to your desktop workflow in seconds.",
      "Switch between mute, system-following, or independent playback to match work, study, or entertainment.",
      "Rotate wallpapers on schedule and keep your best picks in favorites for quick replay anytime.",
      "Desktop hiding is optional and off by default. It only activates while playing if you explicitly enable it.",
      "Built-in language options and theme styles for different regions and user preferences."
    ],
    ".featureCard__list li": [
      "Supports local paths and file URIs",
      "Retry and timeout fallback for failed files",
      "Automatic cleanup on exit",
      "Multiple quality options",
      "Download and save for local reuse",
      "Clear errors for easier troubleshooting",
      "Mute / Follow system / Independent playback",
      "Predictable switching behavior",
      "Prevents accidental audio interruptions",
      "30 min / 1 hour / 2 hours and more",
      "Favorite content one-click replay",
      "Keeps your desktop feeling fresh",
      "Safe default behavior",
      "Attempts desktop restore when disabled",
      "Does not affect static wallpaper usage",
      "Built-in themes for fast adaptation",
      "Multi-language UI for global users",
      "Flexible setup for different habits"
    ],
    ".pill": ["Simplified Chinese", "Traditional Chinese", "English", "Deutsch", "Francais", "Japanese"],
    ".specMini__item span": ["Platform", "Recommended RAM", "Installer Size"],
    ".specMini__item strong": ["Windows", "8GB+", "Lightweight"],
    ".specRow__k": ["Content Sources", "Playback Control", "Experience Boosters", "Privacy Behavior", "Compatibility"],
    ".specRow__v": [
      "Local video folders, online video links, and built-in online search results",
      "One-click apply, retry handling, cleanup on exit, and desktop state recovery",
      "Favorites, auto rotation, multilingual UI, themes, and flexible audio modes",
      "Local videos are not uploaded. Online playback only sends required network requests.",
      "Works with common desktop environments. Hide-desktop remains optional and user-controlled."
    ],
    "#footerLangSelect option": [
      "English",
      "繁體中文",
      "Deutsch",
      "Français",
      "日本語",
      "Português",
      "Español"
    ]
  }
};

const coverageZhTW = {
  one: {
    '.nav__link[href="https://www.phoenysoft.com/contact.html"]': "聯絡我們",
    ".ctaSection__kicker": "RizzView for Windows",
    '.footer__link[href="https://www.phoenysoft.com"]': "首頁",
    '.footer__link[href="https://www.phoenysoft.com/about.html"]': "關於我們",
    '.footer__link[href="https://www.phoenysoft.com/privacy.html"]': "隱私政策",
    '.footer__link[href="https://www.phoenysoft.com/terms.html"]': "條款",
    ".footer__right .srOnly": "語言"
  },
  list: {
    ".featureCard__title": ["本機影片一鍵套用", "線上搜尋與連結播放", "多場景音訊模式", "自動輪播與收藏", "桌面顯示可控", "多語言與主題"],
    ".featureCard__text": [
      "掃描預設影片目錄，自動載入資源並快速套用到桌面。",
      "支援關鍵字搜尋與貼上連結，快速切換桌面風格。",
      "可在靜音、跟隨系統與獨立播放間切換，貼合不同情境。",
      "可依排程輪播並收藏常用內容，快速回到喜愛風格。",
      "隱藏桌面為可選功能，預設關閉，僅在你開啟時生效。",
      "內建多語言與主題樣式，適配不同地區與習慣。"
    ],
    ".featureCard__list li": [
      "支援本機路徑與 file URI",
      "失敗可重試與逾時兜底",
      "退出時自動清理",
      "支援多種清晰度來源",
      "可下載保存到本機",
      "錯誤提示清楚，便於排查",
      "靜音 / 跟隨系統 / 獨立播放",
      "切換邏輯清晰",
      "避免誤觸突然出聲",
      "30 分鐘 / 1 小時 / 2 小時等",
      "收藏內容一鍵重播",
      "長期使用更不易審美疲勞",
      "預設行為安全穩定",
      "關閉後可嘗試恢復桌面",
      "不影響靜態壁紙使用",
      "主題切換快速",
      "多語言介面覆蓋常用語系",
      "設定彈性高"
    ],
    ".pill": ["簡體中文", "繁體中文", "English", "Deutsch", "Français", "日本語"],
    ".specMini__item span": ["平台", "建議記憶體", "安裝體積"],
    ".specMini__item strong": ["Windows", "8GB+", "輕量級"],
    ".specRow__k": ["資源來源", "播放控制", "體驗增強", "隱私策略", "相容性"],
    ".specRow__v": [
      "本機影片資料夾、線上影片連結與內建線上搜尋結果",
      "一鍵套用、失敗重試、退出清理與桌面狀態恢復",
      "收藏、自動輪播、多語言介面、主題與彈性音訊模式",
      "本機影片不會上傳，線上播放僅發送必要請求",
      "適配常見桌面環境，隱藏桌面由使用者自行控制"
    ],
    "#footerLangSelect option": ["English", "繁體中文", "Deutsch", "Français", "日本語", "Português", "Español"]
  }
};

const coverageZhCN = {
  htmlLang: "zh-CN",
  title: "RizzView | Windows 视频动态壁纸",
  metaDescription: "将本地或在线视频设为动态壁纸。支持多语言、音频模式、自动轮播与收藏。",
  one: {
    '.brand__tag': "视频动态壁纸",
    '.nav__link[href="#features"]': "功能亮点",
    '.nav__link[href="#scenes"]': "使用场景",
    '.nav__link[href="#how"]': "快速上手",
    '.nav__link[href="#faq"]': "常见问题",
    '.nav__link[href="https://www.phoenysoft.com/contact.html"]': "联系我们",
    ".topbar__actions .button": "免费下载",
    ".kicker": "Windows 10/11 · 本地与在线视频 · 稳定低占用",
    ".hero__title": "让桌面不止静态图片<br />每一次点亮都更有氛围",
    ".hero__subtitle": "RizzView 是一款面向日常使用的 Windows 视频桌面工具。可一键设置本地或在线视频，并按需调整轮播、收藏、音频策略和语言。",
    '.hero__cta .button--primary': "下载 Windows 版",
    '.hero__cta .button--ghost': "查看亮点",
    ".trustBar__title": "为什么用户喜欢 RizzView",
    '#features .section__title': "核心功能",
    '#features .section__desc': "从素材获取到播放控制，围绕好看、好用和稳定构建完整体验。",
    '#scenes .section__title': "典型使用场景",
    '#scenes .section__desc': "不只是美观，而是让桌面在不同状态下都更贴合你的节奏。",
    '#how .section__title': "3 步快速上手",
    '#how .section__desc': "安装后几分钟即可完成配置，学习成本很低。",
    ".callout__title": "系统建议",
    ".callout__text": "支持 Windows 10/11，核显和独显均可使用。若素材较大，建议使用 SSD 存储。",
    "#overview .section__title": "产品特性一览",
    "#overview .section__desc": "用结构化信息快速判断 RizzView 是否符合你的使用习惯。",
    '#faq .section__title': "常见问题",
    '#faq .section__desc': "覆盖安装与使用过程中最常见的问题。",
    ".ctaSection__kicker": "RizzView for Windows",
    ".ctaSection__title": "准备好升级你的桌面体验了吗？",
    ".ctaSection__text": "现在安装，几分钟内完成设置，用动态视频打造更有沉浸感的个人桌面空间。",
    '.ctaSection__actions .button--primary': "立即下载",
    '.ctaSection__actions .button--ghost': "商务合作",
    '.footer__meta': "Windows 视频动态壁纸",
    '.footer__link[href="https://www.phoenysoft.com"]': "首页",
    '.footer__link[href="https://www.phoenysoft.com/about.html"]': "关于我们",
    '.footer__link[href="https://www.phoenysoft.com/privacy.html"]': "隐私政策",
    '.footer__link[href="https://www.phoenysoft.com/terms.html"]': "服务条款",
    '.footer__link[href="#features"]': "功能",
    '.footer__link[href*="rizzview_setup.exe"]': "下载",
    ".footer__right .srOnly": "语言"
  },
  list: {
    ".statPill__k": ["支持格式", "隐藏桌面", "上手门槛"],
    ".statPill__v": ["MP4 / AVI / WMV / MKV", "默认关闭，按需开启", "3 步完成"],
    ".trustItem": ["快速配置", "播放稳定", "视觉高级", "功能完整", "持续更新"],
    ".floatCard__title": ["自动轮播", "在线搜索"],
    ".floatCard__desc": ["30 分钟到 1 天自由设置，桌面风格自动切换。", "粘贴 URL 或直接检索，快速找到目标素材。"],
    ".featureCard__title": ["本地视频一键设为壁纸", "在线搜索与链接播放", "音频模式按场景切换", "自动轮播与收藏", "桌面显示可控", "多语言与主题系统"],
    ".featureCard__text": [
      "扫描默认视频目录，自动读取资源列表，点击即可应用到桌面。",
      "支持关键词搜索与直接粘贴链接，快速切换桌面氛围。",
      "可在静音、跟随系统和独立播放之间切换，适配不同场景。",
      "支持定时轮换壁纸，并通过收藏快速回到常用内容。",
      "隐藏桌面是可选项，默认不生效，手动开启时才会应用。",
      "内置多语言与主题样式，适配不同地区与使用偏好。"
    ],
    ".featureCard__list li": [
      "支持本地路径与 file URI",
      "失败自动重试与超时兜底",
      "退出自动清理资源",
      "可选多清晰度来源",
      "支持下载到本地",
      "错误提示清晰便于排查",
      "静音 / 跟随系统 / 独立播放",
      "切换逻辑清晰可控",
      "避免误触突然出声",
      "支持 30 分钟 / 1 小时 / 2 小时等",
      "收藏内容一键重播",
      "长期使用不易审美疲劳",
      "默认行为安全稳定",
      "关闭后尝试恢复桌面",
      "不影响静态壁纸使用",
      "主题切换快速自然",
      "多语言界面覆盖常用语种",
      "配置灵活，适配不同习惯"
    ],
    ".pill": ["简体中文", "繁體中文", "English", "Deutsch", "Français", "日本語"],
    ".sceneCard__tag": ["办公桌面", "创作模式", "娱乐空间"],
    ".sceneCard__title": ["安静动态背景，提升专注感", "氛围化视觉，激发灵感", "更具展示感的沉浸桌面"],
    ".sceneCard__text": [
      "搭配低干扰视频和静音模式，在不打断注意力的前提下提升桌面质感。",
      "快速切换收藏与轮播列表，让桌面更贴近创作节奏。",
      "一键应用在线资源，打造更有个性的设备展示风格。"
    ],
    ".step__title": ["导入本地或在线视频", "点击设置桌面", "按需调整规则"],
    ".step__text": [
      "选择本地目录或粘贴视频链接，系统会自动识别并加载可用资源。",
      "一键开始播放，播放器与桌面层级会在后台初始化。",
      "调整轮播间隔、音频行为与桌面显示策略，并保存常用组合。"
    ],
    ".specMini__item span": ["平台", "推荐内存", "安装体积"],
    ".specMini__item strong": ["Windows", "8GB+", "轻量级"],
    ".specRow__k": ["资源来源", "播放控制", "体验增强", "隐私策略", "适配性"],
    ".specRow__v": [
      "本地视频目录、在线视频链接与内建在线搜索结果",
      "一键应用、失败重试、退出清理与桌面状态恢复",
      "收藏、自动轮播、多语言界面、主题与音频模式",
      "本地视频不会上传，在线播放仅发起必要请求",
      "兼容常见桌面环境，隐藏桌面保持可选并由用户控制"
    ],
    ".faq__q": ["隐藏桌面默认会生效吗？", "本地视频为什么提示找不到？", "退出后仍有残留窗口怎么办？", "会上传我的本地文件吗？"],
    ".faq__a": [
      "不会。该选项默认关闭，只有你手动开启后才会生效。",
      "请确认路径存在且可访问。若使用 file:/// 路径，程序也会自动转换并校验。",
      "程序会优先停止播放、恢复桌面并关闭子窗口，异常情况下也有兜底清理机制。",
      "不会。本地视频不会上传，在线视频仅访问你选择的来源并发起必要请求。"
    ],
    "#footerLangSelect option": ["English", "繁體中文", "Deutsch", "Français", "日本語", "Português", "Español"]
  }
};

const coverageDe = {
  list: {
    ".featureCard__title": ["Lokales Video per Klick", "Online-Suche und Link-Wiedergabe", "Audiomodi fur jeden Kontext", "Auto-Wechsel und Favoriten", "Kontrollierte Desktop-Sichtbarkeit", "Mehrsprachige UI und Themes"],
    ".featureCard__text": [
      "Standardordner scannen, Inhalte automatisch laden und direkt auf den Desktop anwenden.",
      "Per Stichwort suchen oder Link einfugen und den Stil in Sekunden wechseln.",
      "Zwischen Stumm, System-Folge und unabhangiger Wiedergabe je nach Situation wechseln.",
      "Hintergrunde nach Zeitplan rotieren und Favoriten fur schnellen Zugriff speichern.",
      "Desktop-Ausblendung ist optional und standardmasig aus, bis du sie aktivierst.",
      "Mehrere Sprachen und Theme-Stile fur unterschiedliche Regionen und Vorlieben."
    ],
    ".featureCard__list li": [
      "Unterstutzt lokale Pfade und file URI",
      "Retry und Timeout-Fallback bei Fehlern",
      "Automatische Bereinigung beim Beenden",
      "Mehrere Qualitatsstufen verfugbar",
      "Download zur lokalen Wiederverwendung",
      "Klare Fehlermeldungen fur einfaches Troubleshooting",
      "Stumm / System-Folge / Unabhangige Wiedergabe",
      "Vorhersehbares Umschaltverhalten",
      "Verhindert plotzliche Audio-Unterbrechungen",
      "30 Minuten / 1 Stunde / 2 Stunden und mehr",
      "Favoriten per Klick erneut abspielen",
      "Halt den Desktop dauerhaft frisch",
      "Sicheres Standardverhalten",
      "Versucht den Desktop beim Deaktivieren wiederherzustellen",
      "Beeinflusst statische Wallpaper nicht",
      "Schnelle Theme-Anpassung",
      "Mehrsprachige UI fur globale Nutzer",
      "Flexible Konfiguration fur verschiedene Gewohnheiten"
    ],
    ".pill": ["Vereinfachtes Chinesisch", "Traditionelles Chinesisch", "Englisch", "Deutsch", "Franzosisch", "Japanisch"],
    ".specMini__item span": ["Plattform", "Empfohlener RAM", "Installer-Grose"],
    ".specMini__item strong": ["Windows", "8GB+", "Leichtgewichtig"],
    ".specRow__k": ["Inhaltsquellen", "Wiedergabesteuerung", "Erlebnis-Booster", "Datenschutz", "Kompatibilitat"],
    ".specRow__v": [
      "Lokale Videoordner, Online-Links und integrierte Online-Suchergebnisse",
      "Ein-Klick-Anwenden, Retry-Handling, Cleanup beim Beenden und Desktop-Status-Wiederherstellung",
      "Favoriten, Auto-Wechsel, mehrsprachige UI, Themes und flexible Audiomodi",
      "Lokale Videos werden nicht hochgeladen. Online-Wiedergabe sendet nur notwendige Anfragen.",
      "Funktioniert in gangigen Desktop-Umgebungen. Desktop-Ausblendung bleibt optional und nutzerkontrolliert."
    ]
  }
};

const coverageFr = {
  list: {
    ".featureCard__title": ["Fond video local en un clic", "Recherche en ligne et lecture par lien", "Modes audio selon le contexte", "Rotation auto et favoris", "Visibilite du bureau controlee", "Interface multilingue et themes"],
    ".featureCard__text": [
      "Scannez le dossier video par defaut, chargez automatiquement et appliquez instantanement.",
      "Recherchez par mot-cle ou collez un lien pour changer de style en quelques secondes.",
      "Basculez entre muet, suivi systeme et lecture independante selon vos usages.",
      "Faites tourner les fonds selon un planning et gardez vos selections en favoris.",
      "Le masquage du bureau est optionnel et desactive par defaut tant que vous ne l'activez pas.",
      "Plusieurs langues et themes integres pour differents profils d'utilisateurs."
    ],
    ".featureCard__list li": [
      "Prend en charge les chemins locaux et file URI",
      "Nouvel essai et delai de secours en cas d'echec",
      "Nettoyage automatique a la fermeture",
      "Plusieurs niveaux de qualite disponibles",
      "Telechargement pour reutilisation locale",
      "Erreurs claires pour un diagnostic rapide",
      "Muet / Suivi systeme / Lecture independante",
      "Comportement de bascule previsible",
      "Evite les interruptions audio accidentelles",
      "30 min / 1 h / 2 h et plus",
      "Relecture des favoris en un clic",
      "Garde votre bureau visuellement frais",
      "Comportement par defaut securise",
      "Tente de restaurer le bureau apres desactivation",
      "N'affecte pas les fonds statiques",
      "Themes adaptables rapidement",
      "Interface multilingue pour utilisateurs internationaux",
      "Configuration flexible selon les habitudes"
    ],
    ".pill": ["Chinois simplifie", "Chinois traditionnel", "Anglais", "Allemand", "Francais", "Japonais"],
    ".specMini__item span": ["Plateforme", "RAM recommandee", "Taille de l'installeur"],
    ".specMini__item strong": ["Windows", "8GB+", "Leger"],
    ".specRow__k": ["Sources de contenu", "Controle de lecture", "Boosters d'experience", "Confidentialite", "Compatibilite"],
    ".specRow__v": [
      "Dossiers video locaux, liens video en ligne et resultats de recherche integree",
      "Application en un clic, gestion des retries, nettoyage a la fermeture et restauration de l'etat du bureau",
      "Favoris, rotation auto, interface multilingue, themes et modes audio flexibles",
      "Les videos locales ne sont pas envoyees. La lecture en ligne n'envoie que les requetes necessaires.",
      "Fonctionne avec les environnements bureau courants. Le masquage du bureau reste optionnel."
    ]
  }
};

const coverageJa = {
  list: {
    ".featureCard__title": ["ローカル動画をワンクリック適用", "オンライン検索とリンク再生", "シーン別オーディオモード", "自動ローテーションとお気に入り", "デスクトップ表示を細かく制御", "多言語UIとテーマ"],
    ".featureCard__text": [
      "既定フォルダをスキャンして素材を自動読み込み、即座にデスクトップへ適用。",
      "キーワード検索またはリンク貼り付けで、雰囲気を素早く切り替え。",
      "ミュート、システム連動、独立再生を用途に応じて切り替え可能。",
      "スケジュールで壁紙を自動切替し、お気に入りをすぐ再利用。",
      "デスクトップ非表示は任意機能で、初期状態ではオフです。",
      "複数言語とテーマを内蔵し、地域や好みに合わせて使えます。"
    ],
    ".featureCard__list li": [
      "ローカルパスと file URI をサポート",
      "失敗時はリトライとタイムアウトで補完",
      "終了時に自動クリーンアップ",
      "複数の画質オプションに対応",
      "ローカル再利用向けにダウンロード可能",
      "エラー内容が明確で原因特定しやすい",
      "ミュート / システム連動 / 独立再生",
      "切替挙動が予測しやすい",
      "意図しない音声再生を防止",
      "30分 / 1時間 / 2時間 ほか",
      "お気に入りをワンクリック再生",
      "長期利用でも見た目が新鮮",
      "安全なデフォルト動作",
      "無効化時にデスクトップ復元を試行",
      "静止壁紙の利用を妨げない",
      "テーマ切替が高速",
      "多言語UIでグローバル対応",
      "利用習慣に合わせて柔軟設定"
    ],
    ".pill": ["簡体中文", "繁體中文", "English", "Deutsch", "Français", "日本語"],
    ".specMini__item span": ["プラットフォーム", "推奨RAM", "インストーラーサイズ"],
    ".specMini__item strong": ["Windows", "8GB+", "軽量"],
    ".specRow__k": ["コンテンツソース", "再生制御", "体験向上機能", "プライバシー", "互換性"],
    ".specRow__v": [
      "ローカル動画フォルダ、オンライン動画リンク、内蔵オンライン検索結果",
      "ワンクリック適用、リトライ処理、終了時クリーンアップ、デスクトップ状態復元",
      "お気に入り、自動ローテーション、多言語UI、テーマ、柔軟な音声モード",
      "ローカル動画はアップロードされません。オンライン再生は必要な通信のみ行います。",
      "一般的なデスクトップ環境で動作。デスクトップ非表示は任意でユーザー管理。"
    ]
  }
};

const coveragePt = {
  list: {
    ".featureCard__title": ["Video local com um clique", "Pesquisa online e reproducao por link", "Modos de audio por contexto", "Rotacao automatica e favoritos", "Visibilidade do desktop controlada", "UI multilingue e temas"],
    ".featureCard__text": [
      "Analisa a pasta padrao, carrega recursos automaticamente e aplica de imediato ao desktop.",
      "Pesquise por palavra-chave ou cole um link para mudar o estilo em segundos.",
      "Alterne entre mudo, seguir sistema e reproducao independente conforme o momento.",
      "Rode wallpapers por agenda e guarde os melhores em favoritos.",
      "Ocultar desktop e opcional e vem desligado por defeito.",
      "Varios idiomas e temas integrados para diferentes preferencias."
    ],
    ".featureCard__list li": [
      "Suporta caminhos locais e file URI",
      "Retry e fallback por timeout em falhas",
      "Limpeza automatica ao sair",
      "Multiplas opcoes de qualidade",
      "Transferir e guardar para reutilizacao local",
      "Erros claros para diagnostico rapido",
      "Mudo / Seguir sistema / Reproducao independente",
      "Comportamento de troca previsivel",
      "Evita interrupcoes de audio acidentais",
      "30 min / 1 hora / 2 horas e mais",
      "Repetir favoritos com um clique",
      "Mantem o desktop visualmente fresco",
      "Comportamento padrao seguro",
      "Tenta restaurar o desktop ao desativar",
      "Nao afeta wallpapers estaticos",
      "Troca de tema rapida",
      "UI multilingue para utilizadores globais",
      "Configuracao flexivel para varios habitos"
    ],
    ".pill": ["Chines simplificado", "Chines tradicional", "English", "Deutsch", "Français", "Japanese"],
    ".specMini__item span": ["Plataforma", "RAM recomendada", "Tamanho do instalador"],
    ".specMini__item strong": ["Windows", "8GB+", "Leve"],
    ".specRow__k": ["Fontes de conteudo", "Controlo de reproducao", "Melhorias de experiencia", "Privacidade", "Compatibilidade"],
    ".specRow__v": [
      "Pastas de video locais, links de video online e resultados de pesquisa integrada",
      "Aplicacao com um clique, tratamento de retry, limpeza ao sair e recuperacao do estado do desktop",
      "Favoritos, rotacao automatica, UI multilingue, temas e modos de audio flexiveis",
      "Videos locais nao sao enviados. A reproducao online faz apenas pedidos necessarios.",
      "Funciona em ambientes de desktop comuns. Ocultar desktop continua opcional e controlado pelo utilizador."
    ]
  }
};

const coverageEs = {
  list: {
    ".featureCard__title": ["Video local en un clic", "Busqueda online y reproduccion por enlace", "Modos de audio por contexto", "Rotacion automatica y favoritos", "Visibilidad del escritorio controlada", "UI multilingue y temas"],
    ".featureCard__text": [
      "Escanea la carpeta predeterminada, carga recursos automaticamente y aplica al escritorio al instante.",
      "Busca por palabra clave o pega un enlace para cambiar el estilo en segundos.",
      "Cambia entre silencio, seguimiento del sistema y reproduccion independiente segun el escenario.",
      "Rota wallpapers por horario y guarda tus mejores selecciones en favoritos.",
      "Ocultar escritorio es opcional y viene desactivado por defecto.",
      "Incluye varios idiomas y temas para distintas preferencias."
    ],
    ".featureCard__list li": [
      "Soporta rutas locales y file URI",
      "Reintento y fallback por timeout ante fallos",
      "Limpieza automatica al salir",
      "Varias opciones de calidad",
      "Descarga y guarda para reutilizacion local",
      "Errores claros para diagnostico rapido",
      "Silencio / Seguir sistema / Reproduccion independiente",
      "Comportamiento de cambio predecible",
      "Evita interrupciones de audio accidentales",
      "30 min / 1 hora / 2 horas y mas",
      "Reproducir favoritos con un clic",
      "Mantiene el escritorio siempre fresco",
      "Comportamiento predeterminado seguro",
      "Intenta restaurar el escritorio al desactivar",
      "No afecta el uso de wallpapers estaticos",
      "Cambio de tema rapido",
      "UI multilingue para usuarios globales",
      "Configuracion flexible para diferentes habitos"
    ],
    ".pill": ["Chino simplificado", "Chino tradicional", "English", "Deutsch", "Français", "Japanese"],
    ".specMini__item span": ["Plataforma", "RAM recomendada", "Tamano del instalador"],
    ".specMini__item strong": ["Windows", "8GB+", "Ligero"],
    ".specRow__k": ["Fuentes de contenido", "Control de reproduccion", "Mejoras de experiencia", "Privacidad", "Compatibilidad"],
    ".specRow__v": [
      "Carpetas de video locales, enlaces de video online y resultados de busqueda integrados",
      "Aplicacion en un clic, manejo de reintentos, limpieza al salir y recuperacion del estado del escritorio",
      "Favoritos, rotacion automatica, UI multilingue, temas y modos de audio flexibles",
      "Los videos locales no se suben. La reproduccion online solo envia solicitudes necesarias.",
      "Funciona en entornos de escritorio comunes. Ocultar escritorio sigue siendo opcional y controlado por el usuario."
    ]
  }
};

function mergeLang(base, extra) {
  return {
    ...base,
    ...extra,
    one: { ...(base.one || {}), ...(extra.one || {}) },
    list: { ...(base.list || {}), ...(extra.list || {}) }
  };
}

Object.keys(pageI18n).forEach((lang) => {
  pageI18n[lang] = mergeLang(coverageBase, pageI18n[lang]);
});

pageI18n["zh-TW"] = mergeLang(pageI18n["zh-TW"], coverageZhTW);
pageI18n["zh-CN"] = mergeLang(pageI18n["zh-TW"], coverageZhCN);
pageI18n["de-DE"] = mergeLang(pageI18n["de-DE"], coverageDe);
pageI18n["fr-FR"] = mergeLang(pageI18n["fr-FR"], coverageFr);
pageI18n["ja-JP"] = mergeLang(pageI18n["ja-JP"], coverageJa);
pageI18n["pt-PT"] = mergeLang(pageI18n["pt-PT"], coveragePt);
pageI18n["es-ES"] = mergeLang(pageI18n["es-ES"], coverageEs);

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
  if (!lang) return "en-US";
  const lower = String(lang).toLowerCase();
  if (lower === "zh-cn" || lower.startsWith("zh-sg")) return "zh-TW";
  if (lower === "zh-tw" || lower.startsWith("zh-hk") || lower.startsWith("zh-mo")) return "zh-TW";
  if (pageI18n[lang]) return lang;
  if (lower.startsWith("zh")) return "zh-TW";
  return "en-US";
}

function setOne(selector, value, isHtml = false) {
  const el = document.querySelector(selector);
  if (!el) return;
  if (isHtml) {
    el.innerHTML = value;
    return;
  }
  el.textContent = value;
}

function setList(selector, values) {
  const nodes = document.querySelectorAll(selector);
  nodes.forEach((node, index) => {
    if (index < values.length) node.textContent = values[index];
  });
}

function applyLanguage(langInput) {
  const lang = normalizeLang(langInput);
  const dict = pageI18n[lang] || pageI18n["en-US"];

  document.documentElement.lang = dict.htmlLang;
  document.title = dict.title;
  const metaDesc = document.getElementById("meta-description");
  if (metaDesc) metaDesc.setAttribute("content", dict.metaDescription);

  Object.entries(dict.one).forEach(([selector, value]) => {
    setOne(selector, value, selector === ".hero__title");
  });

  Object.entries(dict.list).forEach(([selector, values]) => {
    setList(selector, values);
  });

  document.querySelectorAll("[data-lang-select]").forEach((sel) => {
    if (sel instanceof HTMLSelectElement) sel.value = lang;
  });

  storeLang(lang);
}

function wireLanguageSelect() {
  document.querySelectorAll("[data-lang-select]").forEach((sel) => {
    if (!(sel instanceof HTMLSelectElement)) return;
    sel.addEventListener("change", () => applyLanguage(sel.value));
  });
}

function wireAccordionSingleOpen() {
  const root = document.querySelector("[data-accordion]");
  if (!root) return;
  root.addEventListener(
    "toggle",
    (e) => {
      const target = e.target;
      if (!(target instanceof HTMLDetailsElement)) return;
      if (!target.open) return;
      root.querySelectorAll("details").forEach((item) => {
        if (item !== target) item.open = false;
      });
    },
    true
  );
}

wireLanguageSelect();
applyLanguage(getStoredLang() || "en-US");
wireAccordionSingleOpen();

