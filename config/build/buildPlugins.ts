import webpack from "webpack"
import { BuildPaths } from "./types/config"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins (paths: BuildPaths):webpack.WebpackPluginInstance[]{

    const { html } = paths;

    return[
        new HtmlWebpackPlugin({
            template: html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename:'css/[name].[contenthash:8].css'
        })
    ]
}