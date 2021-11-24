module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
    pwa: {
      name: 'Music app',
      themeColor: '#ff53a',
      manifestOptions: {
        short_name: 'Music app',
      },
    },
  },
};
