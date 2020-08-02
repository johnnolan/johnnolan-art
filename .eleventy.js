module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('img')
    eleventyConfig.addPassthroughCopy('*.xml')
    eleventyConfig.addPassthroughCopy('*.png')
    eleventyConfig.addPassthroughCopy('./**/*.jpeg')
    eleventyConfig.addPassthroughCopy('*.ico')
    eleventyConfig.addPassthroughCopy('*.webmanifest')
    eleventyConfig.addPassthroughCopy('*.txt')

    eleventyConfig.addWatchTarget('./**/*.css')

    return {
      dir: { input: 'src', output: '_site', data: '_data' },
      templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
      htmlTemplateEngine: 'njk',
      passthroughFileCopy: true
    }
  }