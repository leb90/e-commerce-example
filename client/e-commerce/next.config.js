module.exports = {
  // otras configuraciones
  webpack: (config, { isServer }) => {
    // Permitir cargar fuentes desde Google Fonts
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: {
              loader: 'file-loader',
              publicPath: '/_next/static/fonts',
              outputPath: isServer ? `${process.env.NEXT_SERVER_ROOT}/static/fonts` : './static/fonts',
              name: '[name]-[hash].[ext]',
            },
          },
        },
      ],
    });

    return config;
  },
};
