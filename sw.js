/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/15/数据结构noj_1/index.html","7f42813bf5b4a75cd5f28083ddfb2d87"],["/2021/04/20/稀疏矩阵/index.html","b3a800b1c05ce812fb84b95bbe7dfcc4"],["/2021/04/23/广义表简介/index.html","6510bef644b8d388a4a9fdd22ccaacbd"],["/2021/04/29/关于指针和函数/index.html","a0743139ca5a53d9558e76372b128125"],["/2021/05/10/哈夫曼编-译码/index.html","a578aa73e0cf29fe88d812064d3fccc9"],["/2021/05/17/数据结构noj_2/index.html","3f6aefc0c7d9199de250a1bdfd9c0ab1"],["/2021/05/30/数据结构试验/index.html","156b2cf89212ca1707dd8da4a304108e"],["/2021/06/12/数据结构noj-3/index.html","29750c74775af84187125cbd59729cd6"],["/2021/07/08/C++与Qt开发入门_1.安装与下载/index.html","2b0d3131f55580dd02d1ad4a2672bd6c"],["/2021/07/08/课程资源分享/index.html","ebaaf8760fe64c77d50dae2bcc8f17d1"],["/2021/07/20/Scrapy-下载图片-文件/index.html","a3703a28e1fe9af299ad819542da4ea8"],["/2021/07/21/Scrapy-动态网页爬取/index.html","d5a01ee16c727c9327dedd0a45d16f09"],["/2021/07/21/疫情打卡/index.html","f00bf2735ae8bcb80b2e4c2f0f6b9f1a"],["/2021/07/29/Scrapy代理设置/index.html","3bd11e7948e4f1f150037967db0b50c2"],["/2021/07/29/数据库认识/index.html","6d4c5f0c24ec0830558d8804194869a6"],["/2021/07/31/Python多线程学习/index.html","9fb403cb7bcd839b5784de51dd8c9974"],["/2021/07/31/tkinter-requests练习/index.html","4fb94a558707aabdbd2c30c2ed9afdd9"],["/2021/08/10/Git学习/index.html","3600e2131a8bc989c449d7217cc3952f"],["/2021/08/15/pygame实践-1/index.html","6355edcdc8566ea32dc6cc4c9f87e64b"],["/2021/09/06/微信小程序开发/index.html","f5b0a11c049d9dd2d3ff49c6fdcb972b"],["/2021/09/21/命令集-1/index.html","480044acdd6f05b42b92772bb1a1f653"],["/2021/09/21/命令集-2/index.html","84b11ba62856020f6f0a480222e0a08c"],["/2021/09/21/命令集-3/index.html","21bf1cc732f6e423d18b8cb0b3f7626f"],["/2021/09/21/命令集-4/index.html","ea8774b4eaf82dd298b91ad15c121a6d"],["/2021/10/03/socket学习/index.html","e8207dddaf08a6e4ebdfddf579a40ade"],["/2021/10/10/dwm入门/index.html","1625b0aeacbef1bdef074977e8052d10"],["/2021/10/10/安装ohmyzsh并配置/index.html","0ce80411d0d631b9a0be352fda12e3ad"],["/2021/10/20/css学习/index.html","245d647fd4273e3f70501143d07e041c"],["/2021/10/20/wm入坑/index.html","4644408f124ba6673245d5de1e62ab45"],["/2021/11/03/微信小程序学习/index.html","6ed772b6c5806bea10519d64ce4520c3"],["/2021/11/04/css揭秘/index.html","0c3a0724a8358c911cff464ff79cfa8a"],["/2021/11/05/css-练习/index.html","ad0cf1c5557784c4b0f20f0b43394fb1"],["/2021/11/21/命令集-5/index.html","63fa0bcd5ad6e4a825d006a2db6df32d"],["/2021/11/21/命令集-6/index.html","25649ad1ad00b5840d56bbb5ce75f14c"],["/2021/11/21/命令集-7/index.html","2d85feccb201244acb80e22d36564a03"],["/2021/12/01/搭建wordpress/index.html","77a4be10c2a4c0fc3cf9dfa8cf272ead"],["/2021/12/08/python操作百度网盘/index.html","b3d7b471185d501cd032c86d859dde54"],["/2021/12/14/js爬虫/index.html","54d96e10779fd6e9548584eacb9c81fb"],["/2021/12/25/为网站申请ssl证书/index.html","0aaec16d7cfdfc2655bb8ca7bf7b0ee5"],["/2021/12/29/使用七牛云为网站提供服务/index.html","72032e16257c3f251421d5abe4063ba2"],["/2021/12/30/jQurey继续学习/index.html","743bd148ab7a04475b7cdaafeb4ef71d"],["/2021/12/30/jquery学习/index.html","cdbfe8510c4834c6ed5af68a02360318"],["/2021/12/31/vue学习/index.html","ce8c3606cfbd94fdea192bcad4acf999"],["/2022/01/02/疫情自动打卡/index.html","575428454b0769bacd9b94eb3cfc0c02"],["/2022/01/03/javaweb初体验/index.html","4b272b2211edcb765d5bbf4ce8b06c01"],["/2022/01/04/codewars练习/index.html","a382a3d1431b5139ee16b65d9f46f840"],["/2022/01/05/Spring学习/index.html","8458d5650c8969b3ffe92ebffcdca790"],["/2022/01/05/vue实战/index.html","b7c1f52ad06c3f3c4a642b5b7db0bee0"],["/2022/01/08/gdb-gcc学习/index.html","f0da3a1c39578abecb384ebfad2e9450"],["/2022/01/11/python-opencv学习/index.html","3643260156084e9c273403c9ddf6191f"],["/2022/01/12/汇编实战/index.html","4758ceec9514c0be3f9c6697054234b3"],["/2022/01/17/pandas学习/index.html","5f17ccc5c19beccbf3b1350dafd75cd6"],["/2022/01/19/可视化图的工具/index.html","953124a52654a2da884dbfe86039a50c"],["/2022/01/19/机器学习入门/index.html","007cbdf106f69c53d10da4cfa4483d20"],["/2022/01/20/cousera-ML学习/index.html","15179061b71b3b791fe31db3ddde549f"],["/2022/01/30/typora解绑后出现问题/index.html","da8d165142dc20533971386d1e0253b2"],["/2022/02/03/NLP学习/index.html","294a8de5f0b5743b0fbb385b9f803f9d"],["/2022/02/04/Web漏洞学习/index.html","7a30d350c70e60f0fd89a7873ae6fc29"],["/2022/02/04/pyqt学习/index.html","a323b85c959645ac6bb997bf0576594f"],["/2022/02/04/python爬虫/index.html","9851ab67d4683328212db0dde853e345"],["/2022/02/18/Electron学习/index.html","ab80f85ac34fbb6ca1760e960a085d94"],["/2022/02/22/疫情填报字段解析/index.html","5d3a333bb187333c52192defbe89ee89"],["/2022/02/24/Bomb-lab实验/index.html","aac99e2de3ce3c030b1fe930fc97ab03"],["/2022/03/05/nginx学习/index.html","0777741b35f3845d612fe9e24356abf7"],["/2022/03/09/汇编原理课程学习/index.html","c8b98570d073bf3c6f2d8774b6616765"],["/2022/03/11/Keras学习/index.html","ae917e37f9b333889594bc75978bc597"],["/2022/04/01/graphviz学习/index.html","1a7155bb7712fa27425f01ec6989a1b7"],["/2022/04/07/django学习/index.html","a789f49d475a36c95a9809e0ef326916"],["/2022/04/11/密码破解学习/index.html","d0693720cedc405232205201617d0787"],["/2022/04/12/flex-bison学习/index.html","b1b22eb79afb7a68bfd9587cd4de5256"],["/2022/04/15/pytorch学习/index.html","0e210bb6046489098242b40885d75770"],["/2022/04/23/写一个音乐播放器-静态页面实现/index.html","50726c2b3c56b8de9de7b05ed4880296"],["/2022/04/23/写一个音乐播放器/index.html","6b2e880a93efb7bf4f96f4d73a0758ac"],["/2022/04/27/写一个音乐播放器-轮播图实现/index.html","113bbe100ecdc01a1e8999eef369045c"],["/2022/04/30/GAN学习/index.html","bb170a90682d0ebfce08d2ba6589adac"],["/2022/05/02/html精学/index.html","73589e99305bcb8d17e311f763aeb72c"],["/2022/05/06/write-a-compiler-by-yourself/index.html","0f7b6b4567086b5f523eea351f152cad"],["/2022/05/30/acwj-01/index.html","9fa5a5aebd484910d74896cdad8784f9"],["/2022/06/14/animeGAN/index.html","b27ac8a2bad5514948b3dba173db1878"],["/2022/07/09/c-与算法学习/index.html","8b2018a6d017c529490acb7771b8844e"],["/2022/09/19/flask学习/index.html","717a9fd8877ad193a332f5685747b3aa"],["/2022/09/22/cs224w学习/index.html","687817bdd541b6c3496f78880946e643"],["/2022/09/28/记录一次wp重装/index.html","ae7fbff8da4dc0db0dac3d8805d673db"],["/2022/10/01/Obsidian学习/index.html","def1ed200c012ac8d7f9382ae5ff8623"],["/2022/10/08/vue-element-template实战/index.html","aaf5d1fad5613cf616c4222f6cbab0cb"],["/2022/10/25/vue网上商城项目/index.html","a180018749ebfaa31d3a861e5e141362"],["/2022/11/11/leetcode刷题记录/index.html","29be7ad8dc403865013b03d820f98438"],["/2022/11/11/使用overleaf优雅地写文章/index.html","ae0c5a0b98598453faf63b3861938968"],["/2022/11/22/磁力链接与RSS订阅/index.html","242b312eef46de821e9e77aa83e82401"],["/2022/12/11/uniapp申请获取地理位置/index.html","7dbc97f6e395d58f89c9c18841d12ac1"],["/2022/12/26/pr剪辑学习/index.html","3ff3a1a40d3751bafdd9399ceb5c622a"],["/2022/12/27/css中的flex和grid布局/index.html","9b15ffa67daa6d4cf7ffec754d293f13"],["/2022/12/28/Flutter学习/index.html","20275a6caad23ce30591c9a03d155fa9"],["/2023/01/01/美化github首页/index.html","c74ea2e73f9a84f077d0f5e981cbfbb9"],["/2023/01/04/python构建微信公众号文章发表控制台应用/index.html","88e727ac98884c4b342e17fe43c493a8"],["/2023/01/04/构建微信快捷发布文章工具/index.html","d508903d42a11cfdbce69ca5f806dfd6"],["/about/index.html","492471eb718445a54a702e63b9a272df"],["/archives/2021/04/index.html","33fc68a2ff18306b9c5f6052f9fe1ed3"],["/archives/2021/05/index.html","f53ddb4cf40f111f68fae9a4f2073f29"],["/archives/2021/06/index.html","4bc272ac85784038a56cfb11f87eed00"],["/archives/2021/07/index.html","a2296bfccd8128853a3a34db49ea9b9c"],["/archives/2021/08/index.html","2065e497fc53b469758ef86920384f84"],["/archives/2021/09/index.html","5d326b8f5c3fd6255c191aaa552ba965"],["/archives/2021/10/index.html","11ada86ede21e76f22704de336f4617a"],["/archives/2021/11/index.html","f10a76132bfd902b4e82451300a7935d"],["/archives/2021/12/index.html","acd7b0b30733db23a543a2b86ff2296b"],["/archives/2021/index.html","14984c55b18695815e737cb1470196c2"],["/archives/2022/01/index.html","e8fabe44a9a6a80fb7510452fb9650a0"],["/archives/2022/02/index.html","979fb1755fe827f62873b1310127b9c7"],["/archives/2022/03/index.html","51a589e4c3b9e30a87615aed35e5afd3"],["/archives/2022/04/index.html","8956f8b46306a6c67a6d880bb19bca5a"],["/archives/2022/05/index.html","8b655191684ed8a968aae855a8bb4c51"],["/archives/2022/06/index.html","036c9f952aa14671475f4224306731d4"],["/archives/2022/07/index.html","a2ea531fd9eba9d2e7d57241533ad73c"],["/archives/2022/09/index.html","2f98e6532a35b460d0a086610d1cb9e8"],["/archives/2022/10/index.html","21d97526e8add1006992d6ad6b4a0b2f"],["/archives/2022/11/index.html","c3abd26cb53ea13c4159858fc0cf0d17"],["/archives/2022/12/index.html","24aac10f91f99ea73b70ca7f69152a0f"],["/archives/2022/index.html","41e4a6b9ace93b30d455958c435400f7"],["/archives/2023/01/index.html","0ccfd56298ac3f549c53c3baf98355fa"],["/archives/2023/index.html","8fa7b97f973beab9969a026b3cfb9e9d"],["/archives/index.html","2937d4054c0b9b6f100c098068c84e7b"],["/archives/page/2/index.html","f3841160747fdd37d178dbdf3c1ef6d2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux-study/index.html","b02fe0bbf5e964c95c0ac1ade0ec2c6f"],["/categories/ML/index.html","1b6e6798bb6d8aecd6cb34cf3b21d542"],["/categories/Nginx/index.html","2b13b8584cc9ccbaac90722e767be78f"],["/categories/Spring/index.html","51082ec88173ff56fe6baf023f0649f4"],["/categories/course/index.html","587b1161036d1c78eec5af05f4cbfc03"],["/categories/django/index.html","5f6ffe6f82fd688b3406e49d2652fbb1"],["/categories/fun/index.html","d488936de4a227f74a0cff717905723a"],["/categories/gcc/gdb/index.html","507e481a7adca7fd4efffc506ee19595"],["/categories/gcc/index.html","137a30a776723fbee1cee8aae8bac889"],["/categories/index.html","a6bf4f0a041b0f6f04b56c16d9321a77"],["/categories/java/index.html","cdb9bf4c12437b5cdeb3e3c6927aab70"],["/categories/python/index.html","e720e3d4e6c8735de8d62bb1435215a1"],["/categories/study/index.html","ccd6e754b5c5a9b036aeb54e9547ee5d"],["/categories/vue/index.html","326ed8717903e2e53a775d5003ff269d"],["/categories/误区/index.html","61b05f7a5837e1d9fed4a42d391edcc8"],["/commonweal/index.html","5a91894e52d3ecc7d29839e2ad514dfc"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","6d50b925d8aafbc70e1b8b2969a85937"],["/home/index.html","a5d6164a957c0a9697df7714a42dafcf"],["/images/Kona_gintama.jpg","a789a32a498a88599f2ff66ce2525c28"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avator.jpg","28bde6d577e56f769102cd0a0701654a"],["/images/blog_16px.png","ff81c5a3ed9296ce23b5ebb25780f91b"],["/images/blog_32px.png","58c4e09f70379b083f2d014d4778c20a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","6c8ade30224cebf6e214ff7d89d48663"],["/index.html","aea375fe52ff366ae5e2e84d6364e61c"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/outdate.js","f14cdd6cf20877f463f793c75c13e0cc"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/utils.js","b9ce39cb190c1a465ce5fd22cc3b8cdc"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/bookmark/README.html","cb0f6c3a1e18d2049c9b04bec520a53e"],["/lib/bookmark/bookmark.min.js","45107aba39e9875e05d4306f53fad3e6"],["/lib/bookmark/index.js","07c9466ea8e20a57014ae6e2afeb32aa"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery_lazyload/README.html","3ff4f6cce6991b1cf622a0840738c89c"],["/lib/jquery_lazyload/jquery.lazyload.js","1e61b3093118a8125c7b9e68e3ebbbd7"],["/lib/jquery_lazyload/jquery.scrollstop.js","62dae795bc0407e1d5827f8f58481849"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","f78fed124cae1166aacb3a8d9f9e383a"],["/page/11/index.html","a2bca99729682b9d70ba726c0f0c75bb"],["/page/12/index.html","db26d31cd73352dbef7c6fdd76b53c54"],["/page/13/index.html","38216e2c758196541627dec733cdfa2e"],["/page/14/index.html","ab3184dc731d9e6c802f7965c41a4025"],["/page/15/index.html","5b9d7f0771cb21fa7f04cb36d44d64c9"],["/page/16/index.html","e9fdeed964a64a7419f520571e6ae125"],["/page/17/index.html","0511e47fce07a8339304f0782c92a1e7"],["/page/18/index.html","8b20734d0ff6fc35be8515cf5c28db8b"],["/page/19/index.html","7007d4b3d24721ba537d09435ba3ef85"],["/page/2/index.html","a60ca3cb40203ac78cd598a52363d922"],["/page/20/index.html","0848bf11c4b5736b7f0d382d7f09f582"],["/page/3/index.html","faf8cb2c26383c3927692943d2169f7a"],["/page/4/index.html","7129a634ede8f3071267b0ad4a156ffb"],["/page/5/index.html","9e256caf7a8b6157422c952c35ef7824"],["/page/6/index.html","e3c1dc8aa208e27d3a3936ac0c0eadee"],["/page/7/index.html","5e479bf1f5b5a9f85f251c2e28bbcfe9"],["/page/8/index.html","e53607f96edafbf3509212986b01d440"],["/page/9/index.html","f1e7452336694eea7816fdf4e1c4c23a"],["/resume/index.html","8e2e47ed0362b1091815c47101302b95"],["/schedule/index.html","ec021a5e31bd675d5c2f826f3ec216d1"],["/sitemap/index.html","f2b0154518e410de85d4b0d1d5182f43"],["/sw-register.js","742182116f3e1532444b9fcc92747e21"],["/tags/AI/index.html","50ba5e7811956140f5efde21eec27719"],["/tags/BT/index.html","5d817cbcad49aff96516cf056b63d470"],["/tags/BaiduNetdisk/index.html","692fb847ca184089c04764caa8615d52"],["/tags/Bootstrap5/index.html","f54575c98082e908f9d35c0357181b1c"],["/tags/CSS3/index.html","4d1b1c6218ed375cf897611412fa53a9"],["/tags/Electron/index.html","c6c28aec6f2d2da8f369c1a8d67485d2"],["/tags/ElementUI/index.html","773041a4bd70817c86d943a639aa7be4"],["/tags/Flutter/index.html","7a6474724c4331086169339d09c9df37"],["/tags/GAN/index.html","3681b7669209ddd73219078fc5d986f9"],["/tags/GUI/index.html","bf3f18b2696cf61bfb6041750493268c"],["/tags/Git/index.html","a857469880213377a02bcc4bc40c81ed"],["/tags/JavaScript/index.html","f32f42f43e3eb2b93c55bd0b1ca85c50"],["/tags/Keras/index.html","38c5c75cba574de96ab599a3d63731a4"],["/tags/Linux/index.html","ec8f012dba6b761482f87e84e8bb3c48"],["/tags/ML/index.html","a474c4596bed0a2c7388ee1aa1861ebf"],["/tags/NLP学习/index.html","4a88bda2d9971bfacf162f5749891262"],["/tags/Nginx/index.html","178a4b5814fd800d0b29142a7807a7d1"],["/tags/Obsidian/index.html","b9f651aa40a3f8bd0d0df8a788fb0f0d"],["/tags/Qt/index.html","d904e2dd4f911bc5573a516027e935e3"],["/tags/RSS/index.html","9f557c5be1dfa62fa9c89514877b2fb6"],["/tags/SSL/index.html","ffa07e8fc00744afdc462ba6cc2ccdd5"],["/tags/Scrapy/index.html","3592eea31724a44425727f3417fa450f"],["/tags/Web/index.html","4d049d10cef5fca95ff5559f5fab54f8"],["/tags/algorithm/index.html","c3cc1beddb744d1b8f2b12a96f95f836"],["/tags/bison/index.html","efe5d9232c3515f23c148cad2f81a23d"],["/tags/bomb-lab/index.html","bddc2184a3c5513a13cbf42f0e28a6d9"],["/tags/c/index.html","0331e3d3eeae3b1c70d895cf5b82fa26"],["/tags/cheerio/index.html","8b87c781776da57b068cdd3e00d621a4"],["/tags/codewars/index.html","ce13cd6a6a323e45bcdbb13c075dae46"],["/tags/compile/index.html","8c2da76bfb1e0c6f1706a63b5c48509a"],["/tags/compiler/index.html","3eedc6eea825e630447b5a3ab93fb7d3"],["/tags/course/index.html","9b2773379b9ff52452d82bcd05b033a9"],["/tags/crypto/index.html","a82ba6f9081694a3860433570831397a"],["/tags/csapp/index.html","8c7fab5b6e788079a68076b6bcd4b830"],["/tags/css/index.html","43830433f1f1742bc7f51c72740e6125"],["/tags/data-structure/index.html","a7148b4553b8793a604892c83a89ce6d"],["/tags/database/index.html","f5b7b1db78081967959aef71f2cb135e"],["/tags/deep-learning/index.html","72a663a7cb0732e5dba7f8ef9fa55d8b"],["/tags/django/index.html","c48f1013343b14f932a7bc8e7ab64ffb"],["/tags/dwm/index.html","ee00b00c8806d44bbf20b1f35de778d0"],["/tags/exercise/index.html","843190220563356b0ecde669528e6f8c"],["/tags/flask/index.html","99a80d5b7c7fe8fec7b676f19843ca9b"],["/tags/flex/index.html","d1b725fc58e1b0f4df3e9cdd8827cb0b"],["/tags/front/index.html","1507c3aeae77497603e5756c03949c1e"],["/tags/gcc/index.html","450f8990a481061983dcfa583bef8886"],["/tags/gdb/index.html","2d0a1b9ba72a60316941c993f5dd7571"],["/tags/github-profile/index.html","ddb3dc1ac1c6c44b8eeec3d3d6dc2184"],["/tags/github/index.html","e004dc7b19f34f9a71d52221a274cc2e"],["/tags/graphviz/index.html","524819c30336b4c06bd81d7c1e894236"],["/tags/grid/index.html","2425fb3243765bd9c38db97906d94ade"],["/tags/html/index.html","25f8d901358bd947b526c0da52166d67"],["/tags/i3wm/index.html","801262b741ee4e14dafc83060b052c08"],["/tags/index.html","fb8901229bf30cf62a227deec022241e"],["/tags/issue/index.html","3377400c5f78fe402b973c414a8a9b17"],["/tags/jQuery/index.html","88a9752746ae0c44f000c1ddddb2c5d3"],["/tags/java/index.html","3631befe3e8d405b7da7da67bef2fbcb"],["/tags/js/index.html","7c4db8abb297755b494ec8d68eb527cb"],["/tags/latex/index.html","67c425288d133086f82623330b7a2059"],["/tags/leetcode/index.html","f0307bfea3d1eaf80ca4562376b06d04"],["/tags/lex/index.html","cb7cafdd6bd17dd6b92e17d85def6a58"],["/tags/material/index.html","b452a0a18fc840bd6062b8d03ea59a3c"],["/tags/music-player/index.html","8a6427b7eb73073a21d30e22dd288cad"],["/tags/nodejs/index.html","9481271f75253495d6beaa0dd349af9f"],["/tags/noj/index.html","a448a583457f783bd9b58f436e2b8ce1"],["/tags/opencv/index.html","33b9a34743e58fe6fbdd629b6860edcc"],["/tags/overleaf/index.html","06e4292a41a4f13d87c91318336b2365"],["/tags/pandas/index.html","b70e6c18d1e2e9de3915940a9797f39f"],["/tags/premiere-pro/index.html","95642d17ee42ffc89bf1e977678a5cc2"],["/tags/proxy/index.html","eb9f7a0c68cff0a94d10ad981f70eb7a"],["/tags/pygame/index.html","55085fd324cd34c54cba11545ee39c39"],["/tags/python/index.html","782bfccfd756db97d41ab21b04834604"],["/tags/pytorch/index.html","0f485e964bbf474265f7730ce47e3978"],["/tags/reading/index.html","735818f77bbc7bd2c8bfa62094b638ed"],["/tags/request/index.html","ad413e8bc0345f8decbaba2390be795a"],["/tags/requests/index.html","7a59d9d93862d9d27e7628e006d1399d"],["/tags/security/index.html","c3c8fff176abceef74d66ea6e13777ed"],["/tags/shell/index.html","c216e0f37ed5531cbbc90732159cd2b3"],["/tags/sign-in/index.html","2a85b840755bd2e3f73fcc64fb78d9b1"],["/tags/socket/index.html","6fdcc8d6c0bd54e982ed75d9f04cca7a"],["/tags/spider/index.html","6bd5bc61f84ef81791c7b0419ee31982"],["/tags/splash/index.html","11fca1b15a1720e60226e5456ca9485e"],["/tags/superagent/index.html","3c913bd3c8c4cc32b048b6ea142e63ab"],["/tags/tensorlow/index.html","4459d9100a045546aad6c8d2baddccef"],["/tags/tex/index.html","d44a4096f2cfa2b8bf4df473be650f5b"],["/tags/threading/index.html","240e49f3a4fa73536c1c53d0ab5ef789"],["/tags/tkinter/index.html","16b2306081ab572dd7c2e58a3abbc1aa"],["/tags/torrent/index.html","16905b2c3f751ee6f38d6078f6a954ce"],["/tags/tutorial/index.html","6b9d10e3db55e4f0827a03a1078aa6b0"],["/tags/typora/index.html","e09bb059072988bd6f7af8208ab17efb"],["/tags/uniapp/index.html","2688a229a0c0d2f2c1489517960e526b"],["/tags/vite/index.html","9f34dcf3d626b56deb4d63904cf7470e"],["/tags/vue-element-template/index.html","b4e32c2c93acd4c84cd88463cdc3c711"],["/tags/vue/index.html","73a8b4d8b10c71bbba4ee224ff27a6ec"],["/tags/vue2/index.html","03577932ce9febe978ce7b5d55fe43e4"],["/tags/vue3-x/index.html","b17c41d017cac04e21db7452054bb653"],["/tags/wechat/index.html","0be4fa3f5ff4fdaeafbc0d5b081eae23"],["/tags/wm/index.html","3ac15d7a11209f159330e0b0171e2c43"],["/tags/wordpress/index.html","2d03c885985b9064a8c5f28b0101842d"],["/tags/workflow/index.html","5679427fad52761aa22b9f7e0d142316"],["/tags/xpath/index.html","5538fbbf0d46d35e511df4d24d25ac5c"],["/tags/yacc/index.html","b09106c9bf4310cbb469d0851f3a09d9"],["/tags/zsh/index.html","6caa1b4e0c1434d8be18090e73cb3550"],["/tags/七牛云/index.html","048320b7483bfb2a4629b5911eceefe9"],["/tags/函数/index.html","a0254d2dde67b0049acaac148e1dac33"],["/tags/剪辑/index.html","df83aa6fc41f900a55ce23ea5e86ab74"],["/tags/存储/index.html","2d2386c72a4f97c9f76d10481a65786a"],["/tags/实战/index.html","ac4588d11cf4e28c45a692e2cdc2f3c5"],["/tags/建站/index.html","2f5feda394648bb34b04cd07402a5866"],["/tags/微信小程序/index.html","e9ed171562cbe3da91105a0ec29e423c"],["/tags/指针/index.html","2fb3597c7dc55e075547cc1ddfa103a6"],["/tags/汇编/index.html","3c371a0d109498dc8365513d4077cc1d"],["/tags/爬虫/index.html","dd8ef639d7c9d769d6074a8df98f8f1c"],["/tags/算法/index.html","132d98dc24b8e7e0762aadb917b3a703"],["/tags/编译原理/index.html","951d0eec7b214d01543243a9270e122b"],["/tags/获取地理位置/index.html","3db806d097ecbd0ef020951d8d9a3d98"]];
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
