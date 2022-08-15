import { fileURLToPath, URL } from 'url'
import type { UserConfigExport, ConfigEnv, BuildOptions } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import type { RegisterPluginsParams } from './viteConfig'
import { registerPlugins, assetsDir } from './viteConfig'

const pathResolve = (dir: string): string => fileURLToPath(new URL(dir, import.meta.url))

// https://vitejs.dev/config/
const config = ({ command, mode }: ConfigEnv): UserConfigExport => {
  // 环境变量
  const env = loadEnv(mode, process.cwd()) as unknown as RegisterPluginsParams['env']
  // 生产环境判断
  const isEnvProduction = process.env.VITE_USER_NODE_ENV === 'production'
  // 注册插件(方法)参数
  const options: RegisterPluginsParams = { env, isEnvProduction, command, pathResolve }

  // 打包配置
  const build = {
    target: 'es2015',
    outDir: `dist`,
    assetsDir,
    cssCodeSplit: true,
    brotliSize: false,
    minify: isEnvProduction ? 'terser' : 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  } as BuildOptions
  // 生产环境去除console
  isEnvProduction && (build.terserOptions = { compress: { drop_console: true } })

  return defineConfig({
    base: './',
    plugins: registerPlugins(options),
    define: {},
    server: {
      port: 8376,
      strictPort: true,
      open: false
    },
    resolve: {
      alias: [
        { find: '@/', replacement: pathResolve('src') + '/' },
        { find: 'variables', replacement: pathResolve('src/styles/variables.module.scss') }
      ]
    },
    build
  })
}

export default config
