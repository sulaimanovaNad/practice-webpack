import webpack from "webpack"
import { BuildPaths } from "./types/config"
import HtmlWebpackPlugin from "html-webpack-plugin"

export function buildPlugins (paths: BuildPaths):webpack.WebpackPluginInstance[]{

    const { html } = paths;

    return[
        new HtmlWebpackPlugin({
            template: html,
        }),
        new webpack.ProgressPlugin()
    ]
}