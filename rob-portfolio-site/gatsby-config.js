module.exports = {
  siteMetadata: {
      title: `Rob Portfolio Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "IKOu1gdQ_m6e-tXi_NXtfcJH2DMI8oiXnsUahXSCXlM",
      "spaceId": "7y1z80rxdg25"
    }
  }, "gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": ""
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};