import webpack from "webpack"
import {BuildOptions} from "./types/config"
import path from 'path'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolve } from './builResolve'


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{

    const {paths,mode} = options; 

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean:true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolve(),
    }
}