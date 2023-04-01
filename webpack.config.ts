import path from "path"
import webpack from "webpack"
import { BuildPaths, BuilEnv} from "./config/build/types/config"
import { buildWebpackConfig } from "./config/build/buildWebpackConfig"

export default (env: BuilEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, './src/index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const PORT = env.port || 3000;
    const mode = env.mode || 'development';
    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    });


    return config
};