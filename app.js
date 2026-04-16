const storageKey = "wallpaper-product-theme";
const langStorageKey = "wallpaper-product-lang";

const translations = {
  "zh-CN": {
    "page.title": "閿愯嚧妗岄潰锝滆棰戞闈㈠绾歌蒋浠?,
    "page.description": "灏嗘湰鍦拌棰戜笌缃戠粶瑙嗛璁剧疆涓哄姩鎬佹闈㈠绾搞€傛敮鎸佸璇█銆佷富棰樺垏鎹€侀煶棰戞ā寮忋€佽嚜鍔ㄦ洿鎹笌鏀惰棌銆?,
    "brand.ariaLabel": "閿愯嚧妗岄潰",
    "brand.name": "閿愯嚧妗岄潰",
    "brand.tag": "瑙嗛妗岄潰澹佺焊",
    "nav.features": "鍔熻兘",
    "nav.how": "浣跨敤鏂瑰紡",
    "nav.faq": "甯歌闂",
    "nav.download": "涓嬭浇",
    "lang.label": "璇█",
    "lang.ariaLabel": "璇█",
    "action.theme": "鍒囨崲涓婚",
    "action.downloadNow": "绔嬪嵆涓嬭浇",
    "hero.kicker": "Windows 路 鏈湴/缃戠粶瑙嗛 路 杞婚噺绋冲畾",
    "hero.title": "鎶婅棰戝彉鎴愪綘鐨勬闈?,
    "hero.subtitle": "涓€閿皢鏈湴瑙嗛鎴栫綉缁滆棰戣缃负鍔ㄦ€佹闈㈠绾搞€傛敮鎸佸璇█銆佷富棰樺垏鎹€侀煶棰戞ā寮忋€佽嚜鍔ㄦ洿鎹笌鏀惰棌锛岃妗岄潰鏇存湁姘涘洿鎰熴€?,
    "hero.ctaPrimary": "涓嬭浇 Windows 鐗?,
    "hero.ctaSecondary": "鏌ョ湅鍔熻兘",
    "hero.bullet1": "鏀寔鏈湴瑙嗛锛歮p4/avi/wmv/mkv",
    "hero.bullet2": "鏀寔缃戠粶瑙嗛锛氱洿鎺ョ矘璐?URL 鎴栧湪绾挎悳绱?,
    "hero.bullet3": "闅愯棌妗岄潰涓哄彲閫夐」锛氶粯璁や笉闅愯棌",
    "hero.note": "鎻愮ず锛氭椤典负闈欐€佷骇鍝侀〉绀轰緥锛屽彲鐩存帴閮ㄧ讲鍒颁换鎰忛潤鎬佺珯鐐广€?,
    "hero.previewAria": "浜у搧棰勮",
    "mock.title": "閿愯嚧妗岄潰 路 棰勮",
    "mock.localTitle": "鏈湴瑙嗛",
    "mock.localText": "鎷栧叆鏂囦欢澶癸紝鑷姩鍔犺浇鍒楄〃",
    "mock.localPill": "璁句负鍔ㄦ€佸绾?,
    "mock.onlineTitle": "缃戠粶瑙嗛",
    "mock.onlineText": "鎼滅储鍏抽敭璇嶆垨绮樿创閾炬帴",
    "mock.onlinePill": "涓€閿挱鏀?,
    "features.title": "鏍稿績鍔熻兘",
    "features.desc": "鍥寸粫鈥滃揩閫熻缃€佺ǔ瀹氭挱鏀俱€佸彲鎺т綋楠屸€濊璁°€?,
    "features.local.title": "鏈湴瑙嗛鍔ㄦ€佸绾?,
    "features.local.text": "閫夋嫨榛樿瑙嗛璺緞鍚庤嚜鍔ㄦ壂鎻忥紝鍒楄〃涓竴閿缃埌妗岄潰銆?,
    "features.local.li1": "鏈湴璺緞/鏂囦欢 URI 閮藉彲鐢?,
    "features.local.li2": "鎾斁澶辫触鑷姩閲嶈瘯涓庤秴鏃跺厹搴?,
    "features.local.li3": "閫€鍑鸿嚜鍔ㄦ竻鐞嗕笉娈嬬暀绐楀彛",
    "features.online.title": "缃戠粶瑙嗛鎼滅储涓庤缃?,
    "features.online.text": "鏀寔鍦ㄧ嚎鎼滅储涓庨摼鎺ユ挱鏀撅紝閫傚悎蹇€熸崲椋庢牸銆?,
    "features.online.li1": "鍙€夋嫨涓嶅悓鍒嗚鲸鐜囨簮",
    "features.online.li2": "鏀寔涓嬭浇淇濆瓨鍒版湰鍦?,
    "features.online.li3": "澶辫触鎻愮ず鏄庣‘锛屾槗鎺掓煡",
    "features.desktop.title": "鍙帶鐨勬闈㈡樉绀?,
    "features.desktop.text": "闅愯棌妗岄潰鏄彲閫夐」锛氶粯璁や笉鐢熸晥锛屽彧鏈夋墜鍔ㄥ紑鍚墠浼氶殣钘忋€?,
    "features.desktop.li1": "鎾斁鏃舵寜璁剧疆鍐冲畾鏄惁闅愯棌",
    "features.desktop.li2": "鍏抽棴閫夐」浼氬皾璇曟仮澶嶆闈?,
    "features.desktop.li3": "涓嶅奖鍝嶆櫘閫氶潤鎬佸绾?,
    "features.ui.title": "涓婚涓庤瑷€",
    "features.ui.text": "鍐呯疆澶氫富棰樹笌澶氳瑷€鐣岄潰锛岄€傞厤涓嶅悓浣跨敤涔犳儻銆?,
    "features.auto.title": "鑷姩鏇存崲涓庢敹钘?,
    "features.auto.text": "鏀寔瀹氭椂鑷姩鍒囨崲澹佺焊锛屾敹钘忓父鐢ㄨ祫婧愬揩閫熷洖鍒板枩娆㈢殑椋庢牸銆?,
    "features.auto.pill1": "30 鍒嗛挓",
    "features.auto.pill2": "1 灏忔椂",
    "features.auto.pill3": "2 灏忔椂",
    "features.auto.pill4": "6 灏忔椂",
    "features.auto.pill5": "12 灏忔椂",
    "features.auto.pill6": "1 澶?,
    "how.title": "浣跨敤鏂瑰紡",
    "how.desc": "涓夋瀹屾垚璁剧疆锛屾闈㈢珛鍒诲姩璧锋潵銆?,
    "how.step1.title": "閫夋嫨璧勬簮",
    "how.step1.text": "浠庢湰鍦拌棰戝垪琛ㄩ€夋嫨锛屾垨鍦ㄧ綉缁滆棰戜腑鎼滅储/绮樿创閾炬帴銆?,
    "how.step2.title": "涓€閿缃闈?,
    "how.step2.text": "鐐瑰嚮鈥滆缃闈⑩€濓紝鎾斁鍣ㄤ細鍦ㄥ悗鍙板垵濮嬪寲骞跺紑濮嬫挱鏀俱€?,
    "how.step3.title": "鎸夐渶璋冩暣",
    "how.step3.text": "鍦ㄨ缃〉璋冩暣闊抽妯″紡銆佽嚜鍔ㄦ洿鎹€侀殣钘忔闈㈢瓑閫夐」銆?,
    "how.req.title": "绯荤粺瑕佹眰",
    "how.req.text": "Windows 10/11 路 寤鸿鐙樉/鏍告樉鍧囧彲 路 瑙嗛杈冨ぇ鏃跺缓璁斁鍦?SSD銆?,
    "faq.title": "甯歌闂",
    "faq.desc": "杩欓噷瑕嗙洊浜嗘渶甯歌鐨勪娇鐢ㄧ枒闂€?,
    "faq.q1": "闅愯棌妗岄潰榛樿浼氱敓鏁堝悧锛?,
    "faq.a1": "涓嶄細銆傞殣钘忔闈负鐙珛璁剧疆椤癸紝榛樿鍏抽棴銆傚彧鏈夊湪璁剧疆閲屽嬀閫夊悗鎵嶄細鍦ㄦ挱鏀惧姩鎬佸绾告椂鐢熸晥銆?,
    "faq.q2": "鏈湴瑙嗛涓轰粈涔堟彁绀烘壘涓嶅埌锛?,
    "faq.a2": "璇风‘璁よ矾寰勬槸鍚﹀瓨鍦ㄣ€傝嫢鏄?file:/// 褰㈠紡鐨勮矾寰勶紝涔熶細鑷姩杞崲鏍￠獙銆傚缓璁皢瑙嗛鏀惧埌鈥滈粯璁よ棰戣矾寰勨€濈洰褰曚腑銆?,
    "faq.q3": "閫€鍑哄悗妗岄潰/绐楀彛娈嬬暀鎬庝箞鍔烇紵",
    "faq.a3": "绋嬪簭閫€鍑轰細灏濊瘯鍋滄鎾斁銆佹仮澶嶆闈㈠苟鍏抽棴瀛愮獥鍙ｃ€傝嫢绯荤粺鐜寮傚父锛屼篃浼氭湁鍏滃簳閫€鍑烘満鍒躲€?,
    "faq.q4": "鏄惁浼氫笂浼犳垜鐨勬枃浠讹紵",
    "faq.a4": "鏈湴瑙嗛涓嶄細涓婁紶銆傜綉缁滆棰戞挱鏀惧彇鍐充簬浣犻€夋嫨鐨勫湪绾挎簮锛屼粎鍙戠敓蹇呰鐨勭綉缁滆姹傘€?,
    "download.title": "涓嬭浇涓庨儴缃?,
    "download.text": "杩欐槸涓€涓潤鎬佷骇鍝侀〉锛圚TML/CSS/JS锛夈€備綘鍙互鐩存帴鎶婃暣涓?wallpaper 鐩綍閮ㄧ讲鍒?GitHub Pages銆丯ginx銆両IS 鎴栦换浣曢潤鎬佹墭绠″钩鍙般€?,
    "download.downloadBtn": "涓嬭浇锛堝崰浣嶉摼鎺ワ級",
    "download.copyPathBtn": "澶嶅埗閮ㄧ讲璺緞",
    "download.hint": "鎻愮ず锛氬皢涓嬭浇閾炬帴鏇挎崲涓轰綘鐨?Release/瀹夎鍖呭湴鍧€鍗冲彲銆?,
    "download.previewAria": "鏈湴棰勮",
    "download.previewTitle": "鏈湴棰勮",
    "download.previewCode": "鐩存帴鍙屽嚮鎵撳紑 index.html\n\n鎴栧湪璇ョ洰褰曞惎鍔ㄩ潤鎬佹湇鍔″櫒锛歕npython -m http.server 5173",
    "download.stat.platform.k": "閫傜敤骞冲彴",
    "download.stat.platform.v": "Windows",
    "download.stat.lang.k": "璇█",
    "download.stat.lang.v": "涓枃 / English / 鏃ユ湰瑾?,
    "download.stat.cap.k": "鍏抽敭鑳藉姏",
    "download.stat.cap.v": "鏈湴/缃戠粶瑙嗛 路 闊抽妯″紡 路 鑷姩鏇存崲",
    "download.stat.hideDesktop.k": "妗岄潰闅愯棌",
    "download.stat.hideDesktop.v": "鍙€夐」锛堥粯璁ゅ叧闂級",
    "footer.brand": "閿愯嚧妗岄潰",
    "footer.meta": "瑙嗛妗岄潰澹佺焊杞欢",
    "footer.top": "鍥炲埌椤堕儴",
    "footer.features": "鍔熻兘",
    "footer.download": "涓嬭浇",
    "download.copyPathCopied": "宸插鍒?,
    "download.replaceLinkPrompt": "璇锋浛鎹负瀹夎鍖呴摼鎺?
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
    "hero.kicker": "Windows 路 Local/Online Videos 路 Lightweight & Stable",
    "hero.title": "Turn videos into your desktop",
    "hero.subtitle": "Set local or online videos as live wallpapers in one click. Multi-language, themes, audio modes, auto rotation, and favorites to make your desktop feel alive.",
    "hero.ctaPrimary": "Download for Windows",
    "hero.ctaSecondary": "See features",
    "hero.bullet1": "Local videos: mp4/avi/wmv/mkv",
    "hero.bullet2": "Online videos: paste a URL or search online",
    "hero.bullet3": "Hide desktop is optional (off by default)",
    "hero.note": "Note: This is a static product-page demo and can be deployed anywhere.",
    "hero.previewAria": "Product preview",
    "mock.title": "RizzView 路 Preview",
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
    "how.step2.text": "Click 鈥淪et Desktop鈥?and the player initializes in the background.",
    "how.step3.title": "Adjust as needed",
    "how.step3.text": "Tune audio mode, auto rotation, hide desktop, and more in Settings.",
    "how.req.title": "System requirements",
    "how.req.text": "Windows 10/11 路 iGPU/dGPU supported 路 SSD recommended for large videos.",
    "faq.title": "FAQ",
    "faq.desc": "Answers to the most common questions.",
    "faq.q1": "Is 鈥淗ide desktop鈥?enabled by default?",
    "faq.a1": "No. It is a separate option and is off by default. It only takes effect when you enable it in Settings.",
    "faq.q2": "Why does a local video show 鈥渘ot found鈥?",
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
    "download.stat.lang.v": "涓枃 / English / 鏃ユ湰瑾?,
    "download.stat.cap.k": "Highlights",
    "download.stat.cap.v": "Local/Online videos 路 Audio modes 路 Auto rotation",
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
    "page.title": "閶嚧銉囥偣銈儓銉冦儣锝滃嫊鐢汇儵銈ゃ儢澹佺礄锛圵indows锛?,
    "page.description": "銉兗銈儷鍕曠敾銈勩偑銉炽儵銈ゃ兂鍕曠敾銈掑嫊銇忓绱欍伀銆傚瑷€瑾炪兓銉嗐兗銉炲垏鏇裤兓闊冲０銉兗銉夈兓鑷嫊鍒囨浛銉汇亰姘椼伀鍏ャ倞銇蹇溿€?,
    "brand.ariaLabel": "閶嚧銉囥偣銈儓銉冦儣",
    "brand.name": "閶嚧銉囥偣銈儓銉冦儣",
    "brand.tag": "鍕曠敾銉┿偆銉栧绱?,
    "nav.features": "姗熻兘",
    "nav.how": "浣裤亜鏂?,
    "nav.faq": "FAQ",
    "nav.download": "銉€銈︺兂銉兗銉?,
    "lang.label": "瑷€瑾?,
    "lang.ariaLabel": "瑷€瑾?,
    "action.theme": "銉嗐兗銉炲垏鏇?,
    "action.downloadNow": "浠娿仚銇愩儉銈︺兂銉兗銉?,
    "hero.kicker": "Windows 路 銉兗銈儷/銈兂銉┿偆銉冲嫊鐢?路 杌介噺銇у畨瀹?,
    "hero.title": "鍕曠敾銈掋儑銈广偗銉堛儍銉椼伀銇欍倠",
    "hero.subtitle": "銉兗銈儷鍕曠敾銈勩偑銉炽儵銈ゃ兂鍕曠敾銈掋儻銉炽偗銉儍銈仹鍕曘亸澹佺礄銇€傚瑷€瑾炪€併儐銉笺優銆侀煶澹般儮銉笺儔銆佽嚜鍕曞垏鏇裤€併亰姘椼伀鍏ャ倞銇с儑銈广偗銉堛儍銉椼倰婕斿嚭銇椼伨銇欍€?,
    "hero.ctaPrimary": "Windows 鐗堛倰鍏ユ墜",
    "hero.ctaSecondary": "姗熻兘銈掕銈?,
    "hero.bullet1": "銉兗銈儷鍕曠敾锛歮p4/avi/wmv/mkv",
    "hero.bullet2": "銈兂銉┿偆銉冲嫊鐢伙細URL 銈掕布銈婁粯銇?or 妞滅储",
    "hero.bullet3": "銉囥偣銈儓銉冦儣闈炶〃绀恒伅浠绘剰锛堟棦瀹氥伅銈儠锛?,
    "hero.note": "娉細銇撱伄銉氥兗銈搞伅闈欑殑銇＝鍝併儦銉笺偢渚嬨仹銆併仼銇撱仹銈傞厤淇°仹銇嶃伨銇欍€?,
    "hero.previewAria": "瑁藉搧銉椼儸銉撱儱銉?,
    "mock.title": "閶嚧銉囥偣銈儓銉冦儣 路 銉椼儸銉撱儱銉?,
    "mock.localTitle": "銉兗銈儷鍕曠敾",
    "mock.localText": "銉曘偐銉儉銉笺倰鎸囧畾銇椼仸鑷嫊銇т竴瑕с倰瑾伩杈笺伩",
    "mock.localPill": "鍕曘亸澹佺礄銇ō瀹?,
    "mock.onlineTitle": "銈兂銉┿偆銉冲嫊鐢?,
    "mock.onlineText": "銈兗銉兗銉夋绱倓銉兂銈布銈婁粯銇?,
    "mock.onlinePill": "銉兂銈儶銉冦偗鍐嶇敓",
    "features.title": "涓汇仾姗熻兘",
    "features.desc": "绱犳棭銇勮ō瀹氥€佸畨瀹氬啀鐢熴€佸埗寰℃€с倰閲嶈銆?,
    "features.local.title": "銉兗銈儷鍕曠敾銉┿偆銉栧绱?,
    "features.local.text": "鏃㈠畾銇嫊鐢汇儠銈┿儷銉€銉笺倰閬搞伓銇ㄨ嚜鍕曘偣銈儯銉炽仐銆佷竴瑕с亱銈夈儻銉炽偗銉儍銈仹閬╃敤銇с亶銇俱仚銆?,
    "features.local.li1": "銉兗銈儷銉戙偣/銉曘偂銈ゃ儷 URI 銇蹇?,
    "features.local.li2": "澶辨晽鏅傘伄銉儓銉┿偆銇ㄣ偪銈ゃ儬銈偊銉堝绛?,
    "features.local.li3": "绲備簡鏅傘伀銈︺偅銉炽儔銈︺倰銈儶銉笺兂銈儍銉?,
    "features.online.title": "銈兂銉┿偆銉虫绱仺鍐嶇敓",
    "features.online.text": "妞滅储銈勩儶銉炽偗鍐嶇敓銇ф墜杌姐伀闆板洸姘椼倰澶夋洿銆?,
    "features.online.li1": "瑙ｅ儚搴︺伄閬告姙銇屽彲鑳?,
    "features.online.li2": "銉兗銈儷銇搞儉銈︺兂銉兗銉変繚瀛?,
    "features.online.li3": "鍒嗐亱銈娿倓銇欍亜銈ㄣ儵銉艰〃绀?,
    "features.desktop.title": "銉囥偣銈儓銉冦儣琛ㄧず銇埗寰?,
    "features.desktop.text": "銉囥偣銈儓銉冦儣闈炶〃绀恒伅浠绘剰锛氭棦瀹氥伅鐒″姽銇с€併偑銉炽伀銇椼仧銇ㄣ亶銇犮亼鏈夊姽銇с仚銆?,
    "features.desktop.li1": "鍐嶇敓鏅傘伀瑷畾銇繙銇樸仸闈炶〃绀?,
    "features.desktop.li2": "銈儠銇仚銈嬨仺寰╁厓銈掕│銇裤伨銇?,
    "features.desktop.li3": "閫氬父銇潤鐨勫绱欍伀銇奖闊裤仾銇?,
    "features.ui.title": "銉嗐兗銉炪仺瑷€瑾?,
    "features.ui.text": "瑜囨暟銉嗐兗銉炪仺澶氳█瑾?UI 銈掑唴钄点€?,
    "features.auto.title": "鑷嫊鍒囨浛銇ㄣ亰姘椼伀鍏ャ倞",
    "features.auto.text": "瀹氭湡鐨勩仾鑷嫊鍒囨浛銇ㄣ€併亰姘椼伀鍏ャ倞銇搞伄淇濆瓨銇蹇溿€?,
    "features.auto.pill1": "30 鍒?,
    "features.auto.pill2": "1 鏅傞枔",
    "features.auto.pill3": "2 鏅傞枔",
    "features.auto.pill4": "6 鏅傞枔",
    "features.auto.pill5": "12 鏅傞枔",
    "features.auto.pill6": "1 鏃?,
    "how.title": "浣裤亜鏂?,
    "how.desc": "3 銈广儐銉冦儣銇с儑銈广偗銉堛儍銉椼亴鍕曘亶鍑恒仐銇俱仚銆?,
    "how.step1.title": "绱犳潗銈掗伕銇?,
    "how.step1.text": "銉兗銈儷涓€瑕с亱銈夐伕銇躲亱銆併偑銉炽儵銈ゃ兂銇ф绱?銉兂銈布銈婁粯銇戙€?,
    "how.step2.title": "銉兂銈儶銉冦偗銇ч仼鐢?,
    "how.step2.text": "銆屻儑銈广偗銉堛儍銉椼伀瑷畾銆嶃倰鎶笺仚銇ㄣ€併儛銉冦偗銈般儵銈︺兂銉夈仹鍒濇湡鍖栥仐銇﹀啀鐢熴仐銇俱仚銆?,
    "how.step3.title": "蹇呰銇繙銇樸仸瑾挎暣",
    "how.step3.text": "瑷畾銉氥兗銈搞仹闊冲０銉兗銉夈€佽嚜鍕曞垏鏇裤€併儑銈广偗銉堛儍銉楅潪琛ㄧず銇仼銈掕鏁淬€?,
    "how.req.title": "鍕曚綔鐠板",
    "how.req.text": "Windows 10/11 路 iGPU/dGPU 瀵惧繙 路 澶с亶銇勫嫊鐢汇伅 SSD 鎺ㄥエ銆?,
    "faq.title": "FAQ",
    "faq.desc": "銈堛亸銇傘倠璩晱銈掋伨銇ㄣ倎銇俱仐銇熴€?,
    "faq.q1": "銉囥偣銈儓銉冦儣闈炶〃绀恒伅鏃㈠畾銇ф湁鍔广仹銇欍亱锛?,
    "faq.a1": "銇勩亜銇堛€傜嫭绔嬨仐銇熻ō瀹氥仹鏃㈠畾銇偑銉曘仹銇欍€傝ō瀹氥仹銈兂銇仐銇熷牬鍚堛伄銇裤€佸嫊銇忓绱欍伄鍐嶇敓鏅傘伀鏈夊姽銇仾銈娿伨銇欍€?,
    "faq.q2": "銉兗銈儷鍕曠敾銇岃銇ゃ亱銈夈仾銇勩仺琛ㄧず銇曘倢銇俱仚",
    "faq.a2": "銉戙偣銇屽瓨鍦ㄣ仚銈嬨亱纰鸿獚銇椼仸銇忋仩銇曘亜銆俧ile:/// 褰㈠紡銈傛瑷笺仌銈屻伨銇欍€傚嫊鐢汇伅銆屾棦瀹氥伄鍕曠敾銉曘偐銉儉銉笺€嶃伀鍏ャ倢銈嬨伄銇屻亰銇欍仚銈併仹銇欍€?,
    "faq.q3": "绲備簡寰屻伀銉囥偣銈儓銉冦儣/銈︺偅銉炽儔銈︺亴娈嬨倠鍫村悎銇紵",
    "faq.a3": "绲備簡鏅傘伀鍐嶇敓鍋滄銆併儑銈广偗銉堛儍銉楀京鍏冦€佸瓙銈︺偅銉炽儔銈︺伄銈儹銉笺偤銈掕│銇裤伨銇欍€傜暟甯告檪銇儠銈┿兗銉儛銉冦偗銈傘亗銈娿伨銇欍€?,
    "faq.q4": "銉曘偂銈ゃ儷銇偄銉冦儣銉兗銉夈仌銈屻伨銇欍亱锛?,
    "faq.a4": "銉兗銈儷鍕曠敾銇偄銉冦儣銉兗銉夈仌銈屻伨銇涖倱銆傘偑銉炽儵銈ゃ兂鍐嶇敓銇伕鎶炪仐銇熴偨銉笺偣銇繙銇樸仸蹇呰銇€氫俊銇伩琛屻亜銇俱仚銆?,
    "download.title": "銉€銈︺兂銉兗銉夈仺閰嶄俊",
    "download.text": "銇撱倢銇潤鐨勩仾瑁藉搧銉氥兗銈革紙HTML/CSS/JS锛夈仹銇欍€倃allpaper 銉曘偐銉儉銉煎叏浣撱倰 GitHub Pages銆丯ginx銆両IS 銇仼銇潤鐨勩儧銈广儐銈ｃ兂銈般伀閰嶇疆銇с亶銇俱仚銆?,
    "download.downloadBtn": "銉€銈︺兂銉兗銉夛紙銉椼儸銉笺偣銉涖儷銉€銉硷級",
    "download.copyPathBtn": "閰嶇疆銉戙偣銈掋偝銉斻兗",
    "download.hint": "銉掋兂銉堬細銉€銈︺兂銉兗銉夈儶銉炽偗銈?Release/銈ゃ兂銈广儓銉笺儵銉笺伄 URL 銇疆銇嶆彌銇堛仸銇忋仩銇曘亜銆?,
    "download.previewAria": "銉兗銈儷銉椼儸銉撱儱銉?,
    "download.previewTitle": "銉兗銈儷銉椼儸銉撱儱銉?,
    "download.previewCode": "index.html 銈掋儉銉栥儷銈儶銉冦偗\n\n銇俱仧銇€併亾銇儠銈┿儷銉€銉笺仹闈欑殑銈点兗銉愩兗銈掕捣鍕曪細\npython -m http.server 5173",
    "download.stat.platform.k": "瀵惧繙銉椼儵銉冦儓銉曘偐銉笺儬",
    "download.stat.platform.v": "Windows",
    "download.stat.lang.k": "瑷€瑾?,
    "download.stat.lang.v": "涓枃 / English / 鏃ユ湰瑾?,
    "download.stat.cap.k": "涓汇仾姗熻兘",
    "download.stat.cap.v": "銉兗銈儷/銈兂銉┿偆銉冲嫊鐢?路 闊冲０銉兗銉?路 鑷嫊鍒囨浛",
    "download.stat.hideDesktop.k": "銉囥偣銈儓銉冦儣闈炶〃绀?,
    "download.stat.hideDesktop.v": "浠绘剰锛堟棦瀹氥伅銈儠锛?,
    "footer.brand": "閶嚧銉囥偣銈儓銉冦儣",
    "footer.meta": "鍕曠敾銉┿偆銉栧绱?,
    "footer.top": "銉堛儍銉椼伕",
    "footer.features": "姗熻兘",
    "footer.download": "銉€銈︺兂銉兗銉?,
    "download.copyPathCopied": "銈炽償銉笺仐銇俱仐銇?,
    "download.replaceLinkPrompt": "銈ゃ兂銈广儓銉笺儵銉笺儶銉炽偗銇疆銇嶆彌銇堛仸銇忋仩銇曘亜"
  }
};

Object.assign(translations, {
  "zh-CN": {
    ...translations["zh-CN"],
    "lang.label": "璇█",
    "lang.ariaLabel": "璇█",
    "footer.home": "棣栭〉",
    "footer.about": "鍏充簬鎴戜滑",
    "footer.privacy": "闅愮鏀跨瓥",
    "footer.terms": "鏈嶅姟鏉℃"
  },
  "en-US": {
    ...translations["en-US"],
    "footer.home": "Home",
    "footer.about": "About Us",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms"
  },
  "ja-JP": {
    ...translations["ja-JP"],
    "lang.label": "瑷€瑾?,
    "lang.ariaLabel": "瑷€瑾?,
    "footer.home": "銉涖兗銉?,
    "footer.about": "浼氱ぞ鎯呭牨",
    "footer.privacy": "銉椼儵銈ゃ儛銈枫兗",
    "footer.terms": "鍒╃敤瑕忕磩"
  },
  "zh-TW": {
    "page.title": "RizzView | Windows 鍕曟厠妗屽竷",
    "page.description": "灏囨湰姗熸垨绶氫笂褰辩墖瑷偤鍕曟厠妗屽竷銆傛敮鎻村瑾炶█銆佷富椤屽垏鎻涖€侀煶瑷婃ā寮忋€佽嚜鍕曡吉鎾垏鏀惰棌銆?,
    "lang.label": "瑾炶█",
    "lang.ariaLabel": "瑾炶█",
    "footer.brand": "閵宠嚧妗岄潰",
    "footer.meta": "褰辩墖鍕曟厠妗屽竷杌熼珨",
    "footer.features": "鍔熻兘",
    "footer.download": "涓嬭級",
    "footer.home": "棣栭爜",
    "footer.about": "闂滄柤鎴戝€?,
    "footer.privacy": "闅辩娆婃斂绛?,
    "footer.terms": "鏈嶅嫏姊濇"
  },
  "de-DE": {
    "page.title": "RizzView | Video-Live-Wallpaper f眉r Windows",
    "page.description": "Setze lokale oder Online-Videos als animierten Desktop-Hintergrund. Mit Mehrsprachigkeit, Themen, Audio-Modi, Auto-Wechsel und Favoriten.",
    "lang.label": "Sprache",
    "lang.ariaLabel": "Sprache",
    "footer.brand": "RizzView",
    "footer.meta": "Video-Live-Wallpaper",
    "footer.features": "Funktionen",
    "footer.download": "Download",
    "footer.home": "Startseite",
    "footer.about": "脺ber uns",
    "footer.privacy": "Datenschutz",
    "footer.terms": "Nutzungsbedingungen"
  },
  "fr-FR": {
    "page.title": "RizzView | Fond d'茅cran vid茅o anim茅 pour Windows",
    "page.description": "D茅finissez des vid茅os locales ou en ligne comme fond d'茅cran anim茅. Interface multilingue, th猫mes, modes audio, rotation auto et favoris.",
    "lang.label": "Langue",
    "lang.ariaLabel": "Langue",
    "footer.brand": "RizzView",
    "footer.meta": "Fond d'茅cran vid茅o anim茅",
    "footer.features": "Fonctionnalit茅s",
    "footer.download": "T茅l茅charger",
    "footer.home": "Accueil",
    "footer.about": "脌 propos",
    "footer.privacy": "Confidentialit茅",
    "footer.terms": "Conditions"
  },
  "pt-PT": {
    "page.title": "RizzView | Papel de parede em v铆deo para Windows",
    "page.description": "Defina v铆deos locais ou online como papel de parede animado. Suporte multil铆ngue, temas, modos de 谩udio, rota莽茫o autom谩tica e favoritos.",
    "lang.label": "Idioma",
    "lang.ariaLabel": "Idioma",
    "footer.brand": "RizzView",
    "footer.meta": "Papel de parede em v铆deo",
    "footer.features": "Funcionalidades",
    "footer.download": "Transferir",
    "footer.home": "In铆cio",
    "footer.about": "Sobre n贸s",
    "footer.privacy": "Privacidade",
    "footer.terms": "Termos"
  },
  "es-ES": {
    "page.title": "RizzView | Fondo de pantalla en video para Windows",
    "page.description": "Establece videos locales u online como fondo de pantalla animado. Soporte multiling眉e, temas, modos de audio, rotaci贸n autom谩tica y favoritos.",
    "lang.label": "Idioma",
    "lang.ariaLabel": "Idioma",
    "footer.brand": "RizzView",
    "footer.meta": "Fondo de pantalla en video",
    "footer.features": "Funciones",
    "footer.download": "Descargar",
    "footer.home": "Inicio",
    "footer.about": "Sobre nosotros",
    "footer.privacy": "Privacidad",
    "footer.terms": "T茅rminos"
  }
});

const baseLangForFallback = "en-US";
for (const lang of Object.keys(translations)) {
  if (lang === baseLangForFallback) continue;
  translations[lang] = {
    ...translations[baseLangForFallback],
    ...translations[lang]
  };
}

Object.assign(translations, {
  "zh-TW": {
    ...translations["zh-TW"],
    "brand.tag": "褰辩墖鍕曟厠妗屽竷",
    "nav.features": "鍔熻兘",
    "nav.how": "浣跨敤鏂瑰紡",
    "nav.faq": "甯歌鍟忛",
    "action.downloadNow": "绔嬪嵆涓嬭級",
    "hero.kicker": "Windows 路 鏈/绶氫笂褰辩墖 路 杓曢噺绌╁畾",
    "hero.title": "鎶婂奖鐗囪畩鎴愪綘鐨勬闈?,
    "hero.subtitle": "涓€閸靛皣鏈鎴栫窔涓婂奖鐗囪ō鐐哄嫊鎱嬫甯冦€傛敮鎻村瑾炶█銆佷富椤屽垏鎻涖€侀煶瑷婃ā寮忋€佽嚜鍕曡吉鎾垏鏀惰棌锛岃畵妗岄潰鏇存湁姘涘湇銆?,
    "hero.ctaPrimary": "涓嬭級 Windows 鐗?,
    "hero.ctaSecondary": "鏌ョ湅鍔熻兘",
    "hero.bullet1": "鏀彺鏈褰辩墖锛歮p4/avi/wmv/mkv",
    "hero.bullet2": "鏀彺绶氫笂褰辩墖锛氬彲鐩存帴璨间笂 URL 鎴栫窔涓婃悳灏?,
    "hero.bullet3": "闅辫棌妗岄潰鐐哄彲閬搁爡锛堥爯瑷棞闁夛級",
    "features.title": "鏍稿績鍔熻兘",
    "features.desc": "鍦嶇篂蹇€熻ō瀹氥€佺┅瀹氭挱鏀捐垏鍙帶楂旈鑰岃ō瑷堛€?,
    "features.local.title": "鏈褰辩墖鍕曟厠妗屽竷",
    "features.local.text": "閬告搰闋愯ō璩囨枡澶惧緦鑷嫊鎺冩弿锛屾竻鍠腑涓€閸靛鐢ㄣ€?,
    "features.online.title": "绶氫笂鎼滃皨鑸囨挱鏀?,
    "features.online.text": "鏀彺绶氫笂鎼滃皨鑸囬€ｇ祼鎾斁锛屽揩閫熷垏鎻涢ⅷ鏍笺€?,
    "features.desktop.title": "鍙帶鐨勬闈㈤’绀?,
    "features.desktop.text": "闅辫棌妗岄潰鏄彲閬搁爡锛氶爯瑷笉鐢熸晥锛屽暉鐢ㄥ緦鎵嶆渻濂楃敤銆?,
    "features.ui.title": "涓婚鑸囪獮瑷€",
    "features.ui.text": "鍏у缓澶氫富椤岃垏澶氳獮瑷€浠嬮潰锛岄仼鎳変笉鍚屼娇鐢ㄧ繏鎱ｃ€?,
    "features.auto.title": "鑷嫊杓挱鑸囨敹钘?,
    "features.auto.text": "鏀彺瀹氭檪鑷嫊鍒囨彌妗屽竷锛屾敹钘忓父鐢ㄨ硣婧愬揩閫熷洖鍒板枩姝￠ⅷ鏍笺€?,
    "how.title": "浣跨敤鏂瑰紡",
    "how.desc": "涓夋瀹屾垚瑷畾锛屾闈㈢珛鍒诲嫊璧蜂締銆?,
    "how.step1.title": "閬告搰鍏у",
    "how.step1.text": "寰炴湰姗熷奖鐗囨竻鍠伕鎿囷紝鎴栧湪缍茶矾褰辩墖涓悳灏?璨间笂閫ｇ祼銆?,
    "how.step2.title": "涓€閸靛鐢ㄦ闈?,
    "how.step2.text": "榛炴搳銆岃ō瀹氭闈€嶏紝鎾斁鍣ㄦ渻鍦ㄨ儗鏅垵濮嬪寲涓﹂枊濮嬫挱鏀俱€?,
    "how.step3.title": "渚濋渶姹傝鏁?,
    "how.step3.text": "鍦ㄨō瀹氶爜瑾挎暣闊宠▕妯″紡銆佽嚜鍕曡吉鎾€侀毐钘忔闈㈢瓑閬搁爡銆?,
    "how.req.title": "绯荤当闇€姹?,
    "how.req.text": "Windows 10/11 路 寤鸿 iGPU/dGPU 鐨嗗彲 路 澶у奖鐗囧缓璀版斁鍦?SSD銆?,
    "faq.title": "甯歌鍟忛",
    "faq.desc": "閫欒！鏁寸悊浜嗘渶甯歌鐨勪娇鐢ㄧ枒鍟忋€?,
    "faq.q1": "銆岄毐钘忔闈€嶉爯瑷渻鍟熺敤鍡庯紵",
    "faq.a1": "涓嶆渻銆傞€欐槸鐛ㄧ珛閬搁爡涓旈爯瑷棞闁夛紝鍙湁鍦ㄨō瀹氫腑鍟熺敤寰屾墠鏈冪敓鏁堛€?,
    "faq.q2": "鐐轰粈楹兼湰姗熷奖鐗囬’绀烘壘涓嶅埌锛?,
    "faq.a2": "璜嬬⒑瑾嶈矾寰戝瓨鍦ㄣ€俧ile:/// 鏍煎紡涔熸渻鑷嫊鏍￠銆傚缓璀版妸褰辩墖鏀惧湪闋愯ō褰辩墖璩囨枡澶俱€?,
    "faq.q3": "閫€鍑哄緦閭勬湁娈樼暀瑕栫獥鎬庨杭杈︼紵",
    "faq.a3": "绋嬪紡閫€鍑烘檪鏈冨槜瑭﹀仠姝㈡挱鏀俱€侀倓鍘熸闈甫闂滈枆瀛愯绐楋紝涓﹀付鏈夊厹搴曚繚璀枫€?,
    "faq.q4": "浣犲€戞渻涓婂偝鎴戠殑妾旀鍡庯紵",
    "faq.a4": "鏈褰辩墖涓嶆渻涓婂偝銆傜窔涓婃挱鏀惧儏鏈冨悜浣犻伕鎿囩殑渚嗘簮鐧奸€佸繀瑕佽珛姹傘€?,
    "footer.brand": "RizzView",
    "footer.meta": "褰辩墖鍕曟厠妗屽竷",
    "footer.features": "鍔熻兘",
    "footer.download": "涓嬭級",
    "footer.home": "棣栭爜",
    "footer.about": "闂滄柤鎴戝€?,
    "footer.privacy": "闅辩娆婃斂绛?,
    "footer.terms": "鏈嶅嫏姊濇"
  },
  "de-DE": {
    ...translations["de-DE"],
    "brand.tag": "Video-Live-Wallpaper",
    "nav.features": "Funktionen",
    "nav.how": "So funktioniert's",
    "nav.faq": "FAQ",
    "action.downloadNow": "Jetzt herunterladen",
    "hero.kicker": "Windows 路 Lokale/Online-Videos 路 Leicht und stabil",
    "hero.title": "Mache Videos zu deinem Desktop",
    "hero.subtitle": "Setze lokale oder Online-Videos mit einem Klick als Live-Wallpaper. Mehrsprachig, mit Designs, Audiomodi, Auto-Wechsel und Favoriten.",
    "hero.ctaPrimary": "F眉r Windows herunterladen",
    "hero.ctaSecondary": "Funktionen ansehen",
    "hero.bullet1": "Lokale Videos: mp4/avi/wmv/mkv",
    "hero.bullet2": "Online-Videos: URL einf眉gen oder online suchen",
    "hero.bullet3": "Desktop ausblenden ist optional (standardm盲脽ig aus)",
    "features.title": "Kernfunktionen",
    "features.desc": "Entwickelt f眉r schnelle Einrichtung, stabile Wiedergabe und volle Kontrolle.",
    "features.local.title": "Lokales Video als Live-Wallpaper",
    "features.local.text": "Nach Auswahl eines Standardordners wird automatisch gescannt und per Klick angewendet.",
    "features.online.title": "Online-Suche und Wiedergabe",
    "features.online.text": "Suche online oder spiele direkt 眉ber Link f眉r schnellen Stilwechsel.",
    "features.desktop.title": "Kontrollierte Desktop-Anzeige",
    "features.desktop.text": "Desktop ausblenden ist optional: standardm盲脽ig aus und nur aktiv, wenn eingeschaltet.",
    "features.ui.title": "Designs und Sprachen",
    "features.ui.text": "Integrierte Designs und mehrsprachige UI f眉r verschiedene Gewohnheiten.",
    "features.auto.title": "Auto-Wechsel und Favoriten",
    "features.auto.text": "Geplante Wallpaper-Rotation und Favoriten f眉r schnellen Zugriff.",
    "how.title": "So funktioniert's",
    "how.desc": "In drei Schritten zu einem lebendigen Desktop.",
    "how.step1.title": "Inhalt w盲hlen",
    "how.step1.text": "W盲hle lokale Videos oder suche/f眉ge einen Online-Link ein.",
    "how.step2.title": "Mit einem Klick anwenden",
    "how.step2.text": "Klicke auf 鈥濪esktop setzen鈥? der Player startet im Hintergrund.",
    "how.step3.title": "Nach Bedarf anpassen",
    "how.step3.text": "Audiomodus, Auto-Wechsel, Desktop ausblenden und mehr in den Einstellungen anpassen.",
    "how.req.title": "Systemanforderungen",
    "how.req.text": "Windows 10/11 路 iGPU/dGPU unterst眉tzt 路 SSD f眉r gro脽e Videos empfohlen.",
    "faq.title": "FAQ",
    "faq.desc": "Antworten auf die h盲ufigsten Fragen.",
    "faq.q1": "Ist 鈥濪esktop ausblenden鈥?standardm盲脽ig aktiv?",
    "faq.a1": "Nein. Es ist eine separate Option und standardm盲脽ig aus. Aktiv erst nach Einschalten in den Einstellungen.",
    "faq.q2": "Warum wird ein lokales Video als 鈥瀗icht gefunden鈥?angezeigt?",
    "faq.a2": "Pr眉fe, ob der Pfad existiert. file:/// Pfade werden ebenfalls gepr眉ft. Lege Videos am besten im Standardordner ab.",
    "faq.q3": "Was tun, wenn nach dem Beenden Fenster 眉brig bleiben?",
    "faq.a3": "Die App stoppt die Wiedergabe, stellt den Desktop wieder her und schlie脽t Unterfenster inklusive Fallback-Schutz.",
    "faq.q4": "Werden meine Dateien hochgeladen?",
    "faq.a4": "Lokale Videos werden nicht hochgeladen. Online-Wiedergabe nutzt nur notwendige Anfragen zur gew盲hlten Quelle.",
    "footer.brand": "RizzView",
    "footer.meta": "Video-Live-Wallpaper",
    "footer.features": "Funktionen",
    "footer.download": "Download",
    "footer.home": "Startseite",
    "footer.about": "脺ber uns",
    "footer.privacy": "Datenschutz",
    "footer.terms": "Nutzungsbedingungen"
  },
  "fr-FR": {
    ...translations["fr-FR"],
    "brand.tag": "Fond d'茅cran vid茅o anim茅",
    "nav.features": "Fonctionnalit茅s",
    "nav.how": "Comment 莽a marche",
    "nav.faq": "FAQ",
    "action.downloadNow": "T茅l茅charger",
    "hero.kicker": "Windows 路 Vid茅os locales/en ligne 路 L茅ger et stable",
    "hero.title": "Transformez vos vid茅os en bureau anim茅",
    "hero.subtitle": "D茅finissez des vid茅os locales ou en ligne en fond anim茅 en un clic. Multilingue, th猫mes, modes audio, rotation auto et favoris.",
    "hero.ctaPrimary": "T茅l茅charger pour Windows",
    "hero.ctaSecondary": "Voir les fonctionnalit茅s",
    "hero.bullet1": "Vid茅os locales : mp4/avi/wmv/mkv",
    "hero.bullet2": "Vid茅os en ligne : collez une URL ou faites une recherche",
    "hero.bullet3": "Masquer le bureau est optionnel (d茅sactiv茅 par d茅faut)",
    "features.title": "Fonctionnalit茅s cl茅s",
    "features.desc": "Con莽u pour une configuration rapide, une lecture stable et un contr么le total.",
    "features.local.title": "Fond anim茅 avec vid茅os locales",
    "features.local.text": "Apr猫s avoir choisi un dossier par d茅faut, le scan est automatique et l'application se fait en un clic.",
    "features.online.title": "Recherche et lecture en ligne",
    "features.online.text": "Recherchez en ligne ou lisez via un lien pour changer de style rapidement.",
    "features.desktop.title": "Affichage du bureau ma卯tris茅",
    "features.desktop.text": "Masquer le bureau est optionnel : d茅sactiv茅 par d茅faut et actif uniquement si vous l'activez.",
    "features.ui.title": "Th猫mes et langues",
    "features.ui.text": "Th猫mes int茅gr茅s et interface multilingue pour diff茅rents usages.",
    "features.auto.title": "Rotation auto et favoris",
    "features.auto.text": "Planifiez la rotation du fond d'茅cran et enregistrez vos favoris.",
    "how.title": "Comment 莽a marche",
    "how.desc": "Trois 茅tapes pour animer votre bureau.",
    "how.step1.title": "Choisir le contenu",
    "how.step1.text": "Choisissez des vid茅os locales, ou recherchez/collez un lien en ligne.",
    "how.step2.title": "Appliquer en un clic",
    "how.step2.text": "Cliquez sur 芦 D茅finir le bureau 禄 et le lecteur d茅marre en arri猫re-plan.",
    "how.step3.title": "Ajuster selon vos besoins",
    "how.step3.text": "R茅glez le mode audio, la rotation auto, le masquage du bureau et plus dans les param猫tres.",
    "how.req.title": "Configuration requise",
    "how.req.text": "Windows 10/11 路 iGPU/dGPU pris en charge 路 SSD recommand茅 pour les grosses vid茅os.",
    "faq.title": "FAQ",
    "faq.desc": "R茅ponses aux questions les plus fr茅quentes.",
    "faq.q1": "芦 Masquer le bureau 禄 est-il activ茅 par d茅faut ?",
    "faq.a1": "Non. C'est une option s茅par茅e, d茅sactiv茅e par d茅faut. Elle ne s'applique qu'apr猫s activation dans les param猫tres.",
    "faq.q2": "Pourquoi une vid茅o locale affiche 芦 introuvable 禄 ?",
    "faq.a2": "V茅rifiez que le chemin existe. Les chemins file:/// sont aussi valid茅s. Placez les vid茅os dans votre dossier vid茅o par d茅faut.",
    "faq.q3": "Que faire si des fen锚tres restent apr猫s fermeture ?",
    "faq.a3": "L'application tente d'arr锚ter la lecture, restaurer le bureau et fermer les sous-fen锚tres, avec un m茅canisme de secours.",
    "faq.q4": "Mes fichiers sont-ils envoy茅s ?",
    "faq.a4": "Les vid茅os locales ne sont pas envoy茅es. La lecture en ligne d茅pend de la source choisie et n'effectue que les requ锚tes n茅cessaires.",
    "footer.brand": "RizzView",
    "footer.meta": "Fond d'茅cran vid茅o anim茅",
    "footer.features": "Fonctionnalit茅s",
    "footer.download": "T茅l茅charger",
    "footer.home": "Accueil",
    "footer.about": "脌 propos",
    "footer.privacy": "Confidentialit茅",
    "footer.terms": "Conditions"
  },
  "pt-PT": {
    ...translations["pt-PT"],
    "brand.tag": "Papel de parede em v铆deo",
    "nav.features": "Funcionalidades",
    "nav.how": "Como funciona",
    "nav.faq": "FAQ",
    "action.downloadNow": "Transferir agora",
    "hero.kicker": "Windows 路 V铆deos locais/online 路 Leve e est谩vel",
    "hero.title": "Transforme v铆deos no seu ambiente de trabalho",
    "hero.subtitle": "Defina v铆deos locais ou online como papel de parede animado com um clique. Multi-idioma, temas, modos de 谩udio, rota莽茫o autom谩tica e favoritos.",
    "hero.ctaPrimary": "Transferir para Windows",
    "hero.ctaSecondary": "Ver funcionalidades",
    "hero.bullet1": "V铆deos locais: mp4/avi/wmv/mkv",
    "hero.bullet2": "V铆deos online: cole um URL ou pesquise",
    "hero.bullet3": "Ocultar ambiente de trabalho 茅 opcional (desativado por defeito)",
    "features.title": "Funcionalidades principais",
    "features.desc": "Concebido para configura莽茫o r谩pida, reprodu莽茫o est谩vel e controlo total.",
    "features.local.title": "Papel animado com v铆deo local",
    "features.local.text": "Depois de escolher a pasta padr茫o, o sistema analisa automaticamente e aplica com um clique.",
    "features.online.title": "Pesquisa e reprodu莽茫o online",
    "features.online.text": "Pesquise online ou reproduza por link para mudar de estilo rapidamente.",
    "features.desktop.title": "Visibilidade do ambiente de trabalho sob controlo",
    "features.desktop.text": "Ocultar ambiente de trabalho 茅 opcional: fica desativado por defeito e s贸 funciona quando ativado.",
    "features.ui.title": "Temas e idiomas",
    "features.ui.text": "Temas integrados e interface multi-idioma para diferentes h谩bitos.",
    "features.auto.title": "Rota莽茫o autom谩tica e favoritos",
    "features.auto.text": "Agende a rota莽茫o do papel de parede e guarde os seus favoritos.",
    "how.title": "Como funciona",
    "how.desc": "Tr锚s passos para p么r o seu ambiente de trabalho em movimento.",
    "how.step1.title": "Escolher conte煤do",
    "how.step1.text": "Escolha v铆deos locais ou pesquise/cole um link online.",
    "how.step2.title": "Aplicar com um clique",
    "how.step2.text": "Clique em \"Definir Ambiente de Trabalho\" e o leitor inicia em segundo plano.",
    "how.step3.title": "Ajustar conforme necess谩rio",
    "how.step3.text": "Ajuste modo de 谩udio, rota莽茫o autom谩tica, ocultar ambiente e mais nas Defini莽玫es.",
    "how.req.title": "Requisitos do sistema",
    "how.req.text": "Windows 10/11 路 iGPU/dGPU suportado 路 SSD recomendado para v铆deos grandes.",
    "faq.title": "FAQ",
    "faq.desc": "Respostas 脿s perguntas mais frequentes.",
    "faq.q1": "\"Ocultar ambiente de trabalho\" est谩 ativo por defeito?",
    "faq.a1": "N茫o. 脡 uma op莽茫o separada e vem desativada por defeito. S贸 entra em vigor quando ativada nas Defini莽玫es.",
    "faq.q2": "Porque um v铆deo local aparece como \"n茫o encontrado\"?",
    "faq.a2": "Confirme se o caminho existe. Caminhos file:/// tamb茅m s茫o validados. Coloque os v铆deos na pasta de v铆deo padr茫o.",
    "faq.q3": "E se ficarem janelas abertas ap贸s sair?",
    "faq.a3": "A aplica莽茫o tenta parar a reprodu莽茫o, restaurar o ambiente de trabalho e fechar janelas-filhas, com prote莽茫o de fallback.",
    "faq.q4": "Voc锚s carregam os meus ficheiros?",
    "faq.a4": "V铆deos locais n茫o s茫o carregados. A reprodu莽茫o online depende da fonte escolhida e faz apenas pedidos necess谩rios.",
    "footer.brand": "RizzView",
    "footer.meta": "Papel de parede em v铆deo",
    "footer.features": "Funcionalidades",
    "footer.download": "Transferir",
    "footer.home": "In铆cio",
    "footer.about": "Sobre n贸s",
    "footer.privacy": "Privacidade",
    "footer.terms": "Termos"
  },
  "es-ES": {
    ...translations["es-ES"],
    "brand.tag": "Fondo de pantalla en video",
    "nav.features": "Funciones",
    "nav.how": "C贸mo funciona",
    "nav.faq": "Preguntas frecuentes",
    "action.downloadNow": "Descargar ahora",
    "hero.kicker": "Windows 路 Videos locales/online 路 Ligero y estable",
    "hero.title": "Convierte videos en tu escritorio",
    "hero.subtitle": "Configura videos locales u online como fondo animado con un clic. Multiidioma, temas, modos de audio, rotaci贸n autom谩tica y favoritos.",
    "hero.ctaPrimary": "Descargar para Windows",
    "hero.ctaSecondary": "Ver funciones",
    "hero.bullet1": "Videos locales: mp4/avi/wmv/mkv",
    "hero.bullet2": "Videos online: pega una URL o busca en l铆nea",
    "hero.bullet3": "Ocultar escritorio es opcional (desactivado por defecto)",
    "features.title": "Funciones principales",
    "features.desc": "Dise帽ado para configuraci贸n r谩pida, reproducci贸n estable y control total.",
    "features.local.title": "Fondo animado con video local",
    "features.local.text": "Tras elegir la carpeta predeterminada, escanea autom谩ticamente y aplica con un clic.",
    "features.online.title": "B煤squeda y reproducci贸n online",
    "features.online.text": "Busca en l铆nea o reproduce por enlace para cambiar de estilo r谩pidamente.",
    "features.desktop.title": "Visibilidad del escritorio bajo control",
    "features.desktop.text": "Ocultar escritorio es opcional: est谩 desactivado por defecto y solo funciona al activarlo.",
    "features.ui.title": "Temas e idiomas",
    "features.ui.text": "Temas integrados e interfaz multiling眉e para distintos h谩bitos.",
    "features.auto.title": "Rotaci贸n autom谩tica y favoritos",
    "features.auto.text": "Programa la rotaci贸n del fondo y guarda tus favoritos.",
    "how.title": "C贸mo funciona",
    "how.desc": "Tres pasos para poner en movimiento tu escritorio.",
    "how.step1.title": "Elegir contenido",
    "how.step1.text": "Elige videos locales o busca/pega un enlace online.",
    "how.step2.title": "Aplicar con un clic",
    "how.step2.text": "Haz clic en \"Establecer escritorio\" y el reproductor se inicia en segundo plano.",
    "how.step3.title": "Ajustar seg煤n necesidad",
    "how.step3.text": "Ajusta modo de audio, rotaci贸n autom谩tica, ocultar escritorio y m谩s en Configuraci贸n.",
    "how.req.title": "Requisitos del sistema",
    "how.req.text": "Windows 10/11 路 Compatible con iGPU/dGPU 路 SSD recomendado para videos grandes.",
    "faq.title": "Preguntas frecuentes",
    "faq.desc": "Respuestas a las dudas m谩s comunes.",
    "faq.q1": "驴\"Ocultar escritorio\" est谩 activo por defecto?",
    "faq.a1": "No. Es una opci贸n independiente y viene desactivada por defecto. Solo se aplica al activarla en Configuraci贸n.",
    "faq.q2": "驴Por qu茅 un video local aparece como \"no encontrado\"?",
    "faq.a2": "Verifica que la ruta exista. Las rutas file:/// tambi茅n se validan. Coloca los videos en tu carpeta predeterminada.",
    "faq.q3": "驴Qu茅 pasa si quedan ventanas tras salir?",
    "faq.a3": "La app intenta detener la reproducci贸n, restaurar el escritorio y cerrar subventanas, con protecci贸n de respaldo.",
    "faq.q4": "驴Suben mis archivos?",
    "faq.a4": "Los videos locales no se suben. La reproducci贸n online depende de la fuente elegida y solo realiza solicitudes necesarias.",
    "footer.brand": "RizzView",
    "footer.meta": "Fondo de pantalla en video",
    "footer.features": "Funciones",
    "footer.download": "Descargar",
    "footer.home": "Inicio",
    "footer.about": "Sobre nosotros",
    "footer.privacy": "Privacidad",
    "footer.terms": "T茅rminos"
  }
});

let currentLang = "en-US";

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
  if (lower === "zh-tw" || lower.startsWith("zh-hk") || lower.startsWith("zh-mo")) return "zh-TW";
  if (lower.startsWith("zh")) return "zh-CN";
  if (lower.startsWith("de")) return "de-DE";
  if (lower.startsWith("fr")) return "fr-FR";
  if (lower.startsWith("ja")) return "ja-JP";
  if (lower.startsWith("pt")) return "pt-PT";
  if (lower.startsWith("es")) return "es-ES";
  if (lower.startsWith("en")) return "en-US";
  return "en-US";
}

function getInitialLang() {
  const stored = getStoredLang();
  if (stored && translations[stored]) return stored;
  return "en-US";
}

function t(lang, key) {
  const table = translations[lang] || translations["en-US"];
  const fallbackEn = translations["en-US"];
  const fallbackZh = translations["zh-CN"];
  return table[key] ?? fallbackEn[key] ?? fallbackZh[key] ?? key;
}

function applyI18n(lang) {
  currentLang = translations[lang] ? lang : "en-US";
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

