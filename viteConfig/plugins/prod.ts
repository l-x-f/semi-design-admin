/* eslint-disable @typescript-eslint/no-unused-vars */
import legacy from '@vitejs/plugin-legacy'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import banner from 'vite-plugin-banner'
import type { VitePlugins, RegisterPluginsParams } from '../type'
import pkg from '../../package.json'

const registerProdPlugins = ({ env }: RegisterPluginsParams): VitePlugins => {
  const plugins = [
    // // 兼容插件
    // legacy({
    //   targets: ['ie >= 11'],
    //   additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    // }),
    // gzip插件
    // viteCompression({
    //   filter: /\.(js|css)$/i,
    //   algorithm: 'brotliCompress',
    //   threshold: 10 * 1024 // 10kb
    // }),
    // 添加版权注释
    banner(
      `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.auth}\n * copyright: ${pkg.copyright}\n */`
    )
  ]

  //  包分析插件
  if (process.env.REPORT === 'true') {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true
      }) as any
    )
  }

  return plugins
}

export default registerProdPlugins
