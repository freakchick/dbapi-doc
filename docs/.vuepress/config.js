module.exports = {
    // theme: "vdoing",
    base: "/",
    dest: "dist",
    // markdown: {
    //     lineNumbers: true
    // },
    head: [
        [
            'script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?a8fb326da5bdf70aa80eb56b11f97e0f";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
                
          `
        ]
    ],

    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'DBAPI',
            description: 'Vue-powered Static Site Generator'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'DBAPI',
            description: 'Vue 驱动的静态网站生成器'
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Guide', link: '/guide/' },
                    { text: 'Installment', link: '/install/' },
                    { text: 'Plugin', link: '/plugin/' },
                    { text: "Question", link: "/question/" },
                    { text: "Contact", link: "/contact/" },
                    { text: "💖Sponsorship", link: "/donate/" },
                    { text: 'Gitee', link: 'https://gitee.com/freakchicken/db-api' },
                    { text: 'Github', link: 'https://github.com/freakchick/DBApi' },

                ],
                // displayAllHeaders: true,
                sidebar: 'auto',
                /*  sidebar: [
                   
                     '/guide/', '/install/', '/plugin/'
                 ] */

            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    { text: '首页', link: '/zh/' },
                    { text: '指南', link: '/zh/guide/' },
                    { text: '安装', link: '/zh/install/' },
                    { text: '插件', link: '/zh/plugin/' },
                    { text: "问答", link: "/zh/question/" },
                    { text: "联系", link: "/zh/contact/" },
                    { text: "💖支持", link: "/zh/donate/" },
                    { text: 'Gitee', link: 'https://gitee.com/freakchicken/db-api' },
                    { text: 'Github', link: 'https://github.com/freakchick/DBApi' },
                ],
                // displayAllHeaders: true,
                sidebar: 'auto'


            }


        }
    }
}