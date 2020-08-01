module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('img')
    eleventyConfig.addPassthroughCopy('*.xml')
    eleventyConfig.addPassthroughCopy('*.png')
    eleventyConfig.addPassthroughCopy('*.ico')
    eleventyConfig.addPassthroughCopy('*.webmanifest')
    eleventyConfig.addPassthroughCopy('*.txt')
    return {
      passthroughFileCopy: true
    }
  }