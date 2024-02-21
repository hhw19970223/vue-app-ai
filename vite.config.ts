import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver, VantResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
// import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ["vue", "vue-router"], // 自动导入
      //这个一定要配置，会多出一个auto-import.d.ts文件，
      dts: 'src/auto-import.d.ts'
    }),
    Components({
      dts: 'src/components-import.d.ts',
      dirs: ['src/components'], // 按需加载的文件
      resolvers: [
        AntDesignVueResolver(),
        VantResolver()
      ]
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: "0.0.0.0",
    port: 3000, //设置服务启动端口
    // open:true,    //设置服务启动时是否自动打开浏览器
    cors: true, //允许跨域
    //设置代理
    proxy: {
      // 字符串简写写法
      // '/api': 'http://localhost:8060',
      // // 选项写法
      // '/urlApi':{
      // 	target:'http://localhost:8060',
      // 	changeOrigin: true,       //是否跨域
      // 	ws: true,            //是否代理 websockets
      // 	secure: true,          //是否https接口
      // 	// rewrite:(path) => path.replace('/urlApi/','/')
      // 	rewrite: (path) => path.replace(/^\/urlApi/, '')
      // },
      // 正则表达式写法
      // '/hhw': {
      //     target: 'http://127.0.0.1:7001', // 后端服务实际地址
      //     changeOrigin: true,
      //     rewrite: path => path.replace(/^\/hhw/, 'hhw')
      // },
    },
  },

  build: {
    assetsDir: "./assets",
    outDir: "./hhw_static",
  },

  css: {
    postcss: {
      plugins: [
        tailwindcss, 
        autoprefixer,
      ]
    }
  },

  optimizeDeps: {},
});
