import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import path from "path";

export function buildPlugins({mode, paths}: BuildOptions): Configuration["plugins"]{
  const isDev = mode === "development";
  const isProd = mode === "production";

  const plugins : Configuration["plugins"] = [
    new HtmlWebpackPlugin(
      { template: paths.html, favicon: path.resolve(paths.public, 'Icons.svg'),
      title: "Your Bento"
    }),
  ]
  
  if(isProd){
    plugins.push(new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename:"css/[name].[contenthash:8].css",
    }))
  }

  if(isDev){
    plugins.push(new webpack.ProgressPlugin())
  }

  return plugins
}