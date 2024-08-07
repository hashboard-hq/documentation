const nextra = require("nextra");

const nextraDocsConfig = {
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  latex: true
};

const nextJsConfig = {
  env: {
    SEGMENT_KEY: process.env.SEGMENT_KEY
  },
  redirects: async () => [
    { source: "/", destination: "/docs/getting-started", permanent: false },
    { source: "/docs", destination: "/docs/getting-started", permanent: false },
    {
      source: "/docs/database-connections/redshift",
      destination: "/docs/database-connections/postgresql",
      permanent: false,
    },
    {
      source: "/docs/database-connections/mariadb",
      destination: "/docs/database-connections/mysql",
      permanent: false,
    },


    // redirects for backwards compatibility:
    { source: "/docs/dashboards/Overview", destination: "/docs/dashboards/", permanent: false },
    { source: "/docs/dashboards/saved-views", destination: "/docs/dashboards/saved-explorations", permanent: false },
    { source: "/docs/dashboards/Saved-View", destination: "/docs/dashboards/saved-explorations", permanent: false },
    { source: "/docs/data-modeling/Data-Models-Overview", destination: "/docs/data-modeling/", permanent: false },
    { source: "/guides/data-modeling-best-practices", destination: "/docs/data-modeling/", permanent: false },
    { source: "/docs/data-ops/Using-the-Hashboard-CLI", destination: "/docs/data-ops/cli", permanent: false },
    { source: "/docs/data-ops/config-schema/Data-Model", destination: "/docs/data-ops/config-schema/data-models", permanent: false },
    { source: "/docs/data-ops/config-schema/Saved-View", destination: "/docs/data-ops/config-schema/saved-explorations", permanent: false },
    { source: "/docs/data-ops/config-schema/saved-views", destination: "/docs/data-ops/config-schema/saved-explorations", permanent: false },
    { source: "/docs/data-ops/config-schema/Dashboard", destination: "/docs/data-ops/config-schema/dashboards", permanent: false },
    { source: "/docs/data-ops/config-schema/Color-Palette", destination: "/docs/data-ops/config-schema/color-palettes", permanent: false },
    { source: "/product-roadmap/product-roadmap", destination: "/docs/product-roadmap", permanent: false },
    { source: "/guides/quickstart", destination: "/docs/getting-started/quick-start", permanent: false }
  ],
};

module.exports = nextra(nextraDocsConfig)(nextJsConfig);
