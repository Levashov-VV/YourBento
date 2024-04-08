import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions):ModuleOptions["rules"]{

  const isDev = options.mode === "development";
  const isProd = options.mode === "production";

  const cssLoadersWithModules = {
      loader: "css-loader",
        options: {
          modules: {
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        }
  };
  const assetLoader = {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
  };
  const svgLoader = {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        { 
          loader: '@svgr/webpack', 
          options: { icon: true } 
        }
      ]
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' :  MiniCssExtractPlugin.loader,
      cssLoadersWithModules,
      "sass-loader",
    ],
  };
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    svgLoader,
    assetLoader,
    scssLoader,
    tsLoader
  ]
}