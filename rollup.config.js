import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import clear from 'rollup-plugin-clear'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.umd.js',
            name: 'sa-sdk',
            format: 'umd'
        },
        {
            file: 'dist/index.esm.js',
            format: 'es'
        }
    ],
    plugins: [
        clear({ targets: ['dist'] }),
        nodeResolve(),
        commonjs(),
        typescript({
            exclude: 'node_modules/**',
            typescript: require('typescript')
        }),
    ],

}
