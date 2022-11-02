module.exports = {
    
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
                    { text: 'guide', link: '/guide/' },
                    { text: 'install', link: '/install/' },
                    { text: 'plugin', link: '/plugin/' },
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
                    { text: '首页', link: '/' },
                    { text: '指南', link: '/guide/' },
                    { text: '安装', link: '/install/' },
                    { text: '插件', link: '/plugin/' },
                    { text: 'Gitee', link: 'https://gitee.com/freakchicken/db-api' },
                    { text: 'Github', link: 'https://github.com/freakchick/DBApi' },
                ],
                // displayAllHeaders: true,
                sidebar: 'auto'
                /* sidebar: [
                    '/guide/', '/install/', '/plugin/'
                ] */

            }


        }
    }
}