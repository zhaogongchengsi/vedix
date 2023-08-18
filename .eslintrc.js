module.exports = {
    root: true,
    overrides: [
        {
            files: ['packages/cli/**/*.ts'], // 匹配 cli 文件夹下的所有 .js 文件
            extends: [
                "@antfu",
            ]
        },
        {
            files: ['packages/components/**/*.vue', 'packages/components/**/*.ts'], // 匹配 components 文件夹下的所有 .js 文件
            extends: [
                "@antfu",
                "@unocss"
            ]
        },
    ],
};