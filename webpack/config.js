const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const paths = {
  source: path.join(__dirname, '../front'),
  javascript: path.join(__dirname, '../front'),
  images: path.join(__dirname, '../front/assets/img'),
  build: path.join(__dirname, '../public'),
};

const outputFiles = require('./output-files').outputFiles;

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEVELOPMENT = NODE_ENV === 'development';
const IS_PRODUCTION = NODE_ENV === 'production';

// ----------
// PLUGINS
// ----------

// Shared plugins
const plugins = [
  // Extracts CSS to a file
  new ExtractTextPlugin(outputFiles.css),
  // Injects env variables to our app
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(NODE_ENV),
    },
  }),
];

if (IS_PRODUCTION) {
  // Shared production plugins
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        comparisons: true,
        conditionals: true,
        dead_code: true,
        drop_console: false,
        drop_debugger: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        screw_ie8: true,
        sequences: true,
        unused: true,
        warnings: false,
      },
      output: {
        comments: false,
      },
    })
  );
} else {
  // Shared development plugins
  plugins.push(
    // Enables pretty names instead of index
    new webpack.NamedModulesPlugin()
  );
}

// ----------
// RULES
// ----------

// Shared rules
const rules = [
  // Babel loader without react hot loader
  // react-hot-loader will is added in webpack.config.js for development only
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  },
  {
    test: /\.svg$/,
    use: [
      {
        loader: 'babel-loader',
      },
      {
        loader: 'react-svg-loader',
        options: {
          svgo: {
            plugins: [
              {
                removeTitle: true,
              },
            ],
            floatPrecision: 2,
          },
        },
      },
    ],
    include: paths.svg,
  },
  {
    test: /\.(png|gif|jpg|svg)$/,
    include: paths.images,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'client/assets/[name]-[hash].[ext]',
        },
      },
    ],
  },
];

// Almost the same rule is used in both development and production
// only diffence is source map param and ExtractTextPlugin
// so we are using this method to avoid redundant code
const getSassRule = () => {
  const autoprefixerOptions = {
    browsers: [
      'last 3 version',
      'ie >= 10',
    ],
  };

  const sassLoaders = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: IS_DEVELOPMENT,
        minimize: IS_PRODUCTION,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: IS_DEVELOPMENT,
        plugins: () => [
          autoprefixer(autoprefixerOptions),
        ],
      },
    },
    {
      loader: 'sass-loader',
      options: { sourceMap: IS_DEVELOPMENT },
    },
  ];

  if (IS_PRODUCTION) {
    return {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        use: sassLoaders,
      }),
    };
  }

  return {
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
    ].concat(sassLoaders),
  };
};

// Add SASS rule to common rules
rules.push(getSassRule());


// ----------
// RESOLVE
// ----------

const resolve = {
  extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
  modules: [
    path.join(__dirname, '../node_modules'),
    paths.javascript,
  ],
};

module.exports = {
  outputFiles,
  paths,
  plugins,
  resolve,
  rules,
  IS_DEVELOPMENT,
  IS_PRODUCTION,
  NODE_ENV,
};
