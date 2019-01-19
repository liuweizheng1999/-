### 切换至相关目录
		cd myproject
### 安装依赖
		cnpm install 或者 npm install 或者 yarn
### 开启实时编译
		wepy build --watch
### 项目的目录结构

		├── dist                   小程序运行代码目录（该目录由WePY的build指令自动编译生成，请不要直接修改该目录下的文件）
		├── node_modules           
		├── src                    代码编写的目录（该目录为使用WePY后的开发目录）
		|   ├── components         WePY组件目录（组件不属于完整页面，仅供完整页面或其他组件引用）
		|   |   └── catltem.wpy    分类页子组件(scroll-view问题页面)
		|   ├── img                图片目录
		|   ├── pages              WePY页面目录（属于完整页面）
		|   |   └── film.wpy	     影评(无用)
		|   |   └── fl.wpy	   	   分类页(无用)
		|   |   └── index.wpy	     首页
		|   |   └── my.wpy	   	   我的(无用)
		|   |   └── qd.wpy	   	   签到(无用)
		|   |   └── search.wpy	   搜索(无用)
		|   |   └── video.wpy	     影评(无用)
		|   ├── store              redux目录
		|   └── app.wpy            小程序配置项目
		└── package.json           项目的package配置
   
