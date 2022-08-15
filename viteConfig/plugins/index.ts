import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import type { RegisterPluginsParams, VitePlugins } from '../type'
import registerDevPlugins from './dev'
import registerProdPlugins from './prod'

/**
 *  注册插件
 * @param options
 * @returns
 */
export default function registerPlugins(options: RegisterPluginsParams): VitePlugins {
  const { env, pathResolve, isEnvProduction } = options
  // vite插件
  let plugins: any[] = [
    splitVendorChunkPlugin(),
    react(),
    createHtmlPlugin({
      inject: {
        data: { ...env }
      },
      minify: true
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [pathResolve('src/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]'
    })
  ]

  plugins = isEnvProduction
    ? [...plugins, ...registerProdPlugins(options)]
    : [...plugins, ...registerDevPlugins(options)]

  return plugins
}
