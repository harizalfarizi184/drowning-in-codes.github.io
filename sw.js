/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","8f1115469fba4a3cdd77885e4a4be341"],["/2021/04/20/稀疏矩阵/index.html","d52b3ae229499084684e0c17dd81833e"],["/2021/04/23/广义表简介/index.html","95ca6c1a12f79c25c9d09ba74e2b5a6f"],["/2021/04/29/关于指针和函数/index.html","9e18fbf8a588b21362dda0937141a44b"],["/2021/05/10/哈夫曼编-译码/index.html","300e275665175bd0b9e3d5d1d91ff9ab"],["/2021/05/17/数据结构noj_2/index.html","f577b6770ec3bd4522979a0239073954"],["/2021/05/30/数据结构试验/index.html","a4a0a659876720a3851079278217ce4d"],["/2021/06/12/数据结构noj-3/index.html","69d9f2dc350c33dac5a1ec972962f16e"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","c3019b204d06918eec7b43db996ee8a7"],["/2021/07/08/课程资源分享/index.html","fbc1b1ef5dede9b951ba27f173823998"],["/2021/07/20/Scrapy-下载图片-文件/index.html","4f6d70badd89f3a29e181cbf50919170"],["/2021/07/21/Scrapy-动态网页爬取/index.html","65a43e10543bdea5302b56eed06b0d43"],["/2021/07/21/疫情打卡/index.html","db9f46d3103d310db2f451a57ff75bb9"],["/2021/07/29/Scrapy代理设置/index.html","559b82c64552eb04a0a5e0b5a610c015"],["/2021/07/29/数据库认识/index.html","ea67d77d27c9d94a89733185d5658c67"],["/2021/07/31/Python多线程学习/index.html","03a42bc01afd532452dcefcbc76151ef"],["/2021/07/31/tkinter-requests练习/index.html","3cd2a9b6443af7e9e559f4da6425eea9"],["/2021/08/10/Git学习/index.html","d2cee1b006d1f5d3beaef59866b02ce7"],["/2021/08/15/pygame实践-1/index.html","3b597e3714f3371eb1ba934d81947604"],["/2021/09/06/微信小程序开发/index.html","3d0ac37165b21efce72d555f8084751f"],["/2021/09/21/命令集-1/index.html","079e13f60acd695578f335d5d1d23159"],["/2021/09/21/命令集-2/index.html","60f8c341c167c2baf73a633639a9d93c"],["/2021/09/21/命令集-3/index.html","ed565c81665e8522fe37d3b6b7350ac1"],["/2021/09/21/命令集-4/index.html","237cbf13efd3ad312dcf1c88ec3a419b"],["/2021/10/03/socket学习/index.html","21d4002835e6ec526f543bc1ca051b2a"],["/2021/10/10/dwm入门/index.html","ed1ae98041b7fa0d712940b05f99ebe3"],["/2021/10/10/安装ohmyzsh并配置/index.html","c6458ab32b871586c0f2864a56b9379f"],["/2021/10/20/css学习/index.html","5b0e0e1d68196a835b09aafcbc7bdf17"],["/2021/10/20/wm入坑/index.html","4fb3fe81b5978a50dd70d3eab25a9064"],["/2021/11/03/微信小程序学习/index.html","6d9c56f0e31b81bdb24c14b20c575920"],["/2021/11/04/css揭秘/index.html","f3007f3b724e507c2c310417cec83cda"],["/2021/11/05/css-练习/index.html","5850eb6ad85d0b424e7dfc2b6d4b630d"],["/2021/11/21/命令集-5/index.html","7b5f83d351c795e9e5cb64c2c9f2a7cb"],["/2021/11/21/命令集-6/index.html","56e38c7d30e21f1d00150367ace2e675"],["/2021/11/21/命令集-7/index.html","ffaf02a33d4f593fa1e9c0e5ef6b6250"],["/2021/12/01/搭建wordpress/index.html","2179eea4e586a531ed1f9ae990bc6d79"],["/2021/12/08/python操作百度网盘/index.html","46132131480cf75ccb8471272c166d0d"],["/2021/12/14/js爬虫/index.html","5ac377b042faf412021875cde59ade87"],["/2021/12/25/为网站申请ssl证书/index.html","a0b3eb09f1a87d50c573f9dee1393bd5"],["/2021/12/29/使用七牛云为网站提供服务/index.html","175fd68efadbd96b71514e1954fb75eb"],["/2021/12/30/jQurey继续学习/index.html","d283d4e2218a0b8eda739cffc6d083c4"],["/2021/12/30/jquery学习/index.html","a61a6d4c26e9b1ba91bf88e09fbb70ea"],["/2021/12/31/vue学习/index.html","e23a48cc23c007da9f82fb164d25e3af"],["/2022/01/02/疫情自动打卡/index.html","d10cbc8895a912b9dae00b9f6c2d3ba1"],["/2022/01/03/javaweb初体验/index.html","3a1be314a21e7c3f96155c618be435e1"],["/2022/01/04/codewars练习/index.html","5631b28f546cf32a52b6c4e38419ffd6"],["/2022/01/05/Spring学习/index.html","f77ba8cc0d280818ab7b926c5c2ee863"],["/2022/01/05/vue实战/index.html","c2f48c1773ae65a04e9c30df4d27be03"],["/2022/01/08/gdb-gcc学习/index.html","99288aa8d70d6a8f11fd5557ac06ee3e"],["/2022/01/11/python-opencv学习/index.html","38cbd664183444f8ddf842cc2ec3691c"],["/2022/01/12/汇编实战/index.html","496e69faad8b656c7f5c2087dd7850fc"],["/2022/01/17/pandas学习/index.html","3e9c540509cc026ea1e454aa479d8682"],["/2022/01/19/可视化图的工具/index.html","da34bd531397faf5e14365f3d3762b9f"],["/2022/01/19/机器学习入门/index.html","3d2fa3a9a40fdaf03b1a05528c8d772a"],["/2022/01/20/cousera-ML学习/index.html","72bd0bc0ecc6bf1d32f7fa237bdfbdfb"],["/2022/01/30/typora解绑后出现问题/index.html","4f81ea6750e437f5d2f7f5cae40ac3c7"],["/2022/02/03/NLP学习/index.html","e19ea9cbc479bd9cf75e2e4bf8bca440"],["/2022/02/04/Web漏洞学习/index.html","d923a58178ad0ad1350be75fb764e20e"],["/2022/02/04/pyqt学习/index.html","3932b26387b3dd57deba9ef4a0ac0d29"],["/2022/02/04/python爬虫/index.html","c6f9d62c7147433da08277a638c21876"],["/2022/02/18/Electron学习/index.html","3e31b62efe5c7770f311089865bca1ae"],["/2022/02/22/疫情填报字段解析/index.html","08d21e61e4d097ea9514ecff6579d1e5"],["/2022/02/24/Bomb-lab实验/index.html","3cefb45ccb208ee25fdbcb666d2e22b9"],["/2022/03/05/nginx学习/index.html","2cd967181af06bd5a50cdedbdd214f90"],["/2022/03/09/汇编原理课程学习/index.html","6e26dc4f99929f7838ca3eab42c1ee5d"],["/2022/03/11/Keras学习/index.html","d811347e2ff2f675e41ddca1d0979b78"],["/2022/04/01/graphviz学习/index.html","b7ce964cc33744900d483f86c8e03c1b"],["/2022/04/07/django学习/index.html","76962e2c68b792e98be487ea1fa54de7"],["/2022/04/11/密码破解学习/index.html","e40e40aa1f6d0fe7065a5eb98a4ab336"],["/2022/04/12/flex-bison学习/index.html","7a693b18d6e4f01872a88d0915f0cbab"],["/2022/04/15/pytorch学习/index.html","9fb822e02ca38eedef45979a3c2422ba"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","e511a2f00f37a0f0a37a388480ddbe21"],["/2022/04/23/写一个音乐播放器/index.html","6497b7b5facd08954b07e979d955b5ee"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","7c5970cab4848f97eae6ad8d26ba2a98"],["/2022/04/30/GAN学习/index.html","d29ac67baaeca64dde5be0a1bfd814d8"],["/2022/05/02/html精学/index.html","a1bf6872c7407cc0aa57214942d4ebf1"],["/2022/05/06/write-a-compiler-by-yourself/index.html","b164603b01036f58f1bb4e378ec3b2be"],["/2022/05/30/acwj-01/index.html","90a416d6f3a55698e611413ee09eea15"],["/2022/06/14/animeGAN/index.html","5c3bea924dd99796b6c7a477e3d81c8a"],["/2022/07/09/c-与算法学习/index.html","1190c5553aab6a869c1622dd454106dd"],["/2022/09/19/flask学习/index.html","b30f3a9a6a31e76257c3046d467f36c4"],["/2022/09/22/cs224w学习/index.html","1e5ad3f7ce39d561c8b146c55baa5ce3"],["/2022/09/28/记录一次wp重装/index.html","a245663e97f7f6fe5e1903cf09bd82e2"],["/2022/10/01/Obsidian学习/index.html","5c54fd039e2daa28c69c961b66a1440d"],["/2022/10/08/vue-element-template实战/index.html","5755fee407b8453194fd840d23ffe2f8"],["/2022/10/25/vue网上商城项目/index.html","a97c4cf52080e09842ee13660be6a738"],["/2022/11/11/leetcode刷题记录/index.html","a9ed3d423017fdf7520a2b50f4b3f5ef"],["/2022/11/11/使用overleaf优雅地写文章/index.html","7e1c3e646784e5d1db7981284ea5ec01"],["/2022/11/22/磁力链接与RSS订阅/index.html","5bb6d0266c52a395adecd7818ced6e3a"],["/2022/12/11/uniapp申请获取地理位置/index.html","2b696a2f6b475fbb303bb1097f0e3174"],["/2022/12/26/pr剪辑学习/index.html","6fae9d25533c0ba81da660d49afecdcc"],["/2022/12/27/css中的flex和grid布局/index.html","c4405c69485d99f645a96e7280ea0843"],["/2022/12/28/Flutter学习/index.html","08a172ce4b90650a2a39e4ea66a176de"],["/2023/01/01/美化github首页/index.html","7d1edd0913c0a3dd2fcf2c3648ad091a"],["/about/index.html","bb57b12559b2710f6ae2cd14bbd613a3"],["/archives/2021/04/index.html","b506637729b4100eae9ce0ddc24a1051"],["/archives/2021/05/index.html","3e562c3a2dd9b0b5f076b7a69c1e8755"],["/archives/2021/06/index.html","66841a238797c098bc82f54ebdcf09fc"],["/archives/2021/07/index.html","da975c11177a7477631fc5b843ab74fc"],["/archives/2021/08/index.html","7cc8ee656bb63d4730b7764cd8afdc6b"],["/archives/2021/09/index.html","e019501d057875b9832f8f3346b143cd"],["/archives/2021/10/index.html","bf919687bb53cce7932752223deb7bdc"],["/archives/2021/11/index.html","fbd84d0d8c687c2e616fd9d4f3b7d579"],["/archives/2021/12/index.html","0036eb1d82e00f94f51e85ae9ff1626c"],["/archives/2021/index.html","403aca83459237f538091d0dd8d9929d"],["/archives/2022/01/index.html","be0d7bdaa98ae7ec97ff45792256ccc2"],["/archives/2022/02/index.html","e1ff88ff7b74d5f1e025be3296bdc2a4"],["/archives/2022/03/index.html","c82b7194f64302933ee2a5d9c1858917"],["/archives/2022/04/index.html","042ece9b9ea0b5f411defbef110235e9"],["/archives/2022/05/index.html","553126ae045f612781350b7789d0d8ba"],["/archives/2022/06/index.html","0456a6f7f5d3a2175b810e9f07f5cc81"],["/archives/2022/07/index.html","78d65d5209d83338eac36ffd111a7291"],["/archives/2022/09/index.html","0a8c3c51dc8a33aa679aa57b5f1b1b7a"],["/archives/2022/10/index.html","b81c54741d9ccef68d8fc56f3c36c092"],["/archives/2022/11/index.html","72067bdd21afe80f084fc6aa8d8d04bd"],["/archives/2022/12/index.html","244514b7ff85cc4c1156962bb1ee37b8"],["/archives/2022/index.html","277a52e1dc866f729ba17465ed4ee4b9"],["/archives/2023/01/index.html","2046ab3fb9a2901700abd40103140375"],["/archives/2023/index.html","d0aeeb848b6a095c64ee38eacd8aba3d"],["/archives/index.html","fab2eb75e8bae8c173d7b5d6ba49a299"],["/archives/page/2/index.html","8df5bc0d46e78765d3c09e6f720c1202"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","09eab57f13d0e08811a32021316f31f8"],["/categories/ML/index.html","c89209f253f6500a0d13abeb896c3c27"],["/categories/Nginx/index.html","fc9d85a3ae5ef48026cc5095a0e9162d"],["/categories/Spring/index.html","a1d677d4d958ff8f667224fb8d6de087"],["/categories/course/index.html","c719556fc85f9a591c62c69aaceb49f8"],["/categories/django/index.html","94235ce086c3af8f5399b39293f1de95"],["/categories/fun/index.html","b4a5dd65090ddec82b8ccee4a2d74248"],["/categories/gcc/gdb/index.html","011bb1d10e6fb940d9fc2b3346cfe9be"],["/categories/gcc/index.html","968d1d8baaea66bd325b9cde4573ac38"],["/categories/index.html","8ac215be6b596552f46aec100dd80ee9"],["/categories/java/index.html","9c4a767874ba2d4eca9aa4b93838c588"],["/categories/python/index.html","2fabc8212a06f85b6839a8aec1ec6d98"],["/categories/study/index.html","93d847be72ec0c027772da1122788886"],["/categories/vue/index.html","9492fef038fea95d2620aa21e616463c"],["/categories/误区/index.html","ad7f2c845d32bdb19100842e8f2c6ad2"],["/commonweal/index.html","c1dab85982536bf6ab0ad3bde419a4b8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","e9f7e30cb8a4e2dd30b3b2ae692aca7a"],["/home/index.html","6eee02162b614ee11356b2060326134d"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","594a28834fd4d3491bf7fdd2d6cd6d6d"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","e85add2ce2a7ce633d638c57756e6bcb"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","337aed869a3cfe81911d0b4eb74ceedd"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","29e9122cdf963f4f6a2ebc60f5a9e73c"],["/page/11/index.html","815852d11698430bf26620a1661b2d70"],["/page/12/index.html","eebabf6b2b0047c397ef3e99fd971398"],["/page/13/index.html","7b2e219a22591c35db53b5e4d4af0c72"],["/page/14/index.html","48eca83174cc63a9615ec31283458c4c"],["/page/15/index.html","8ef3318363de3c2fb31f72ce7f5dee67"],["/page/16/index.html","d5d8de75433ed1f0773540c90283df32"],["/page/17/index.html","71a81bc0af3dd06895293849f947d2dd"],["/page/18/index.html","98200d1516b864cfe23c11c0ef6ded71"],["/page/19/index.html","9679899ce873641bee282687acb3c3ed"],["/page/2/index.html","11cf05e34c606571117e553bc818564e"],["/page/3/index.html","9f36a066f6ae0cc367e66c3bf3faa353"],["/page/4/index.html","2c7b01be14f86d08077e8ccb246bbd63"],["/page/5/index.html","bc4b0570437f3ebf583b45dee5491452"],["/page/6/index.html","0070955fb2226c45915cb2148910ca17"],["/page/7/index.html","accd718b9b276fca39da052e40f61011"],["/page/8/index.html","44e1dfbc72be738cbd7efc69c87a1889"],["/page/9/index.html","548be2b73438ed2bef57de65451064a0"],["/resume/index.html","9f6bbffb0935961dad741ca3fd30ce47"],["/schedule/index.html","00aba24e83467d1e47de00003ec4b032"],["/sitemap/index.html","6645637778735f9535adc6be1d62ed23"],["/sw-register.js","e361078b090d6a08fc4cd539944d8bc6"],["/tags/AI/index.html","f735096d73cdb687a9152d23579df979"],["/tags/BT/index.html","b8e815d95bb35f6b8d0cc32bede00b6b"],["/tags/BaiduNetdisk/index.html","0dedb8995fce20a4087e0f3dfe460fc6"],["/tags/CSS3/index.html","9e1cc8d70a1edcaff5cadfec52106bd9"],["/tags/Electron/index.html","f04efee90af13d103ef211c1db92969b"],["/tags/ElementUI/index.html","d736a317939f21022e550d6120d47413"],["/tags/Flutter/index.html","addf74853b0c7cd7b58e82c870e25202"],["/tags/GAN/index.html","eb26504239e23b5b5d5f6dc4c956ff85"],["/tags/GUI/index.html","4ee1e578d6dcb969987d99b1b9c96a9b"],["/tags/Git/index.html","c3abba1d3d0b4e2420a194460ceea2ad"],["/tags/JavaScript/index.html","33959ca02629e0d9fe65a60be4d508ce"],["/tags/Keras/index.html","6cfff18c5580c7482d931d4c91d1e5a6"],["/tags/Linux/index.html","8bf91aae9d99fc952357b2b1a971a26d"],["/tags/ML/index.html","eeed4c6d73ffcff6bada1c0393035a91"],["/tags/NLP学习/index.html","2f932d8547e015691497e6b0bcaad4e5"],["/tags/Nginx/index.html","cebfa86c4f74483e10e22887ddca8314"],["/tags/Obsidian/index.html","0fbaee657274189102dbc0aa32ff1345"],["/tags/Qt/index.html","e95f9a2c9e1bfdea40600c92e8cb8548"],["/tags/RSS/index.html","93353684536cd34ece47954912f55f15"],["/tags/SSL/index.html","f342e26fe9b0966775fcf4458425c083"],["/tags/Scrapy/index.html","c41ebd9651e7eaf622e46078d1eb37f7"],["/tags/Web/index.html","f787cfa359a7eb5dbe1e28afbde402ab"],["/tags/algorithm/index.html","6c4d9d466dc9ba98329b25aaefd87438"],["/tags/bison/index.html","eafcd7224bbbb47aeead5b097c344298"],["/tags/bomb-lab/index.html","44f3d9e43817904215372553d753c4e3"],["/tags/c/index.html","eb211de674b87532c9c480c94dbb57f5"],["/tags/cheerio/index.html","566b72c76612fc6681c1465a5ed48ab7"],["/tags/codewars/index.html","7f49913786bd13a181b1ff4116adf606"],["/tags/compile/index.html","b388f581499aa21c7af1eeabbdee9a23"],["/tags/compiler/index.html","9b54789815a8c1f60fa027e1b50e170d"],["/tags/course/index.html","970ab485a1bac1c40428dfb198d04539"],["/tags/crypto/index.html","4bebfadb9160176e36be5f794dd444e8"],["/tags/csapp/index.html","a9788d40d06c96fceb08160d564b9023"],["/tags/css/index.html","09bcc748579fa1e5a15cded2374798dd"],["/tags/data-structure/index.html","5d625ecc3efbda3adb62bed85111138a"],["/tags/database/index.html","075ab26cfd70a84aac661ba775438e82"],["/tags/deep-learning/index.html","6355e61c4ff46a86c89660d521addddc"],["/tags/django/index.html","2a87f9a19121dd9710d9fbe9c4a0624a"],["/tags/dwm/index.html","440b81dafad019b0bb387aac699c9ebf"],["/tags/exercise/index.html","35f41b8a94b06871a47b64a809f8d11e"],["/tags/flask/index.html","0d2ead0ffadee4acda118d670d947692"],["/tags/flex/index.html","61000cc8819f2e62f6260a6fe024424c"],["/tags/front/index.html","648de48c8a2a9d5396e740b989e9cc94"],["/tags/gcc/index.html","a0a9b9ff4a7e10181e0b43a05546d9e5"],["/tags/gdb/index.html","79ded8f24be734df93429f102a30f301"],["/tags/github-profile/index.html","1faa69c500bfb04bd135d99274872c44"],["/tags/github/index.html","ae53e495fbd5dc1d9f1864801341009b"],["/tags/graphviz/index.html","ec075e6a47b7bf813e5949e9da3c8b24"],["/tags/grid/index.html","5120cab4a2d726e9324adfbc7dd2376c"],["/tags/html/index.html","19ff9a4160026fb0e2f8be0b039113c8"],["/tags/i3wm/index.html","a231df84a4a7ea6bdf55f194c20ecdf5"],["/tags/index.html","dfa518e0ad7adb71418bcb1f07e7d62b"],["/tags/issue/index.html","cb3d8c242e2b141794fdf367e898cf79"],["/tags/jQuery/index.html","cd1240ec2843cd0d347fb1e04dd45a50"],["/tags/java/index.html","4f46034d785d8aa884dddee9159d115c"],["/tags/js/index.html","a906f2fb33d8951e6ed1265c1471c643"],["/tags/latex/index.html","983f38f7322a2d1e5aa19b2409a137cf"],["/tags/leetcode/index.html","bbc5419e4b38192e43414d59ee602f27"],["/tags/lex/index.html","9d5ff9c98dd301b7dce34cbc36bf8d67"],["/tags/material/index.html","7007f2831501ee6935f8c3df135e154f"],["/tags/music-player/index.html","fe292dba11a3d76a324e124e2c8af1a1"],["/tags/nodejs/index.html","0b50c255f31542ce4e99bf2a0008cc8d"],["/tags/noj/index.html","730a5b8160de0cccd0bf70b63c5a571e"],["/tags/opencv/index.html","b8eec25d446a03fdcc443ec6bdb89a38"],["/tags/overleaf/index.html","39e6c468479d3f757091556c1a1dee2a"],["/tags/pandas/index.html","87dbe6d781eb0e14822df6b5b0815402"],["/tags/premiere-pro/index.html","e9aedd583aa45a930d4188e973b8341f"],["/tags/proxy/index.html","e36c97aa13cf5e61f1f2192a5eab94a0"],["/tags/pygame/index.html","04d427f5c014d883e091fb0d84a38e20"],["/tags/python/index.html","1d83a4beea11e248c8de1e46ff2c6e6e"],["/tags/pytorch/index.html","939b534048cffa9c639bd7bb81692ed3"],["/tags/reading/index.html","54b0b3d5c3ee2e0df99eb47a72c05497"],["/tags/requests/index.html","0de34ccac0d996566c3740c83e05ea3c"],["/tags/security/index.html","ab3255fae04b3a8caea35ccae221158d"],["/tags/shell/index.html","10ce0700550b7f9f37545c519091f14f"],["/tags/sign-in/index.html","f10a7150c9e0082d5ba02148681ed8bd"],["/tags/socket/index.html","a5d13413644978ad03bcad07efb428a5"],["/tags/spider/index.html","cb97de94ed03b3e86216ebf38073b164"],["/tags/splash/index.html","7d27b4547a6d81be0e098a01b244b68e"],["/tags/superagent/index.html","96e278800b6cecb042731caf04906634"],["/tags/tensorlow/index.html","58a141c2815b4ed6263325aafcea56a6"],["/tags/tex/index.html","8c3b5033772266eb509d6df93d597b81"],["/tags/threading/index.html","187b1ffd1aa9e474c8399c7a0ee696a6"],["/tags/tkinter/index.html","1cf3350d2203e7666dbd7f8f183e57d5"],["/tags/torrent/index.html","c08abee600749955af31839c2865f8b5"],["/tags/tutorial/index.html","9e9b52d464da8bf25c95d5d62dd87398"],["/tags/typora/index.html","1a71c26e051a68aca8bdddccca793fb1"],["/tags/uniapp/index.html","d0be5f6685c7629b65960c95a4a7e06a"],["/tags/vue-element-template/index.html","e021d044dd44a5de7f8ba5bc368eb896"],["/tags/vue/index.html","6231c8533238e999ad90100c9aee3bec"],["/tags/vue2/index.html","d707363371a02ae47009d495f5d0a9c7"],["/tags/vue3-x/index.html","8102151e0df9a45a582e4eda9a742590"],["/tags/wechat/index.html","792a4fb1d0b3d74640914f460dd63dc6"],["/tags/wm/index.html","f92a1a450b0f2109967cc8335521f040"],["/tags/wordpress/index.html","6dbc6453c2b848cdc0d72c90e8e56d94"],["/tags/workflow/index.html","77a06f5e523fd2846dafdb73354e1b6e"],["/tags/yacc/index.html","cd8abcabb849513c62cb863a047560b3"],["/tags/zsh/index.html","d03117a670bb08ed697051ef3f8b9640"],["/tags/七牛云/index.html","f3fbd77067727c8bc0a3428bcfb2836c"],["/tags/函数/index.html","e9d32e48be5a29aef2ced5fda8331b3d"],["/tags/剪辑/index.html","52956b8a15efc82452efcb68890eeeac"],["/tags/存储/index.html","171e11a689a26f73ee6cd278c4b41b38"],["/tags/实战/index.html","e7c9060ba7f3bb67b8a34b8eefc815a1"],["/tags/建站/index.html","5f33581f926fff78c08339b6d9c03691"],["/tags/微信小程序/index.html","cebc352fc5e25da40e71876a05dbf850"],["/tags/指针/index.html","dda1fa4c74d8a3648f4827491c3ecdb5"],["/tags/汇编/index.html","aa366f568ab31ce6e31c92c9ad7317e7"],["/tags/爬虫/index.html","2b5f47bd5bbc4b1c1e4432423cddc3be"],["/tags/算法/index.html","d3a01414330da08b530f329ae3c01310"],["/tags/编译原理/index.html","5b64a4bf1d7ccce6de54dff378ad622a"],["/tags/获取地理位置/index.html","c7f33491dee13648d7209f9e8ef396af"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.sekyoro.top"});





/* eslint-enable */
