module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: `@import "@/assets/css/mixins.scss";`,
        },
      },
    },
};