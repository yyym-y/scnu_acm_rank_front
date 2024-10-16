# SCNU_ACM_RANK 前端部署



## 环境准备

本项目使用 `npm` 作为, 包管理器, 所以开发电脑上必须安装 `npm`

### Windows 环境下安装

1. 通过 [NodeJS](https://nodejs.org/en/) 下载一个适合自己电脑的安装包

2. 跟随指引正常安装即可, 默认会自动添加到环境变量中

3. 命令行输入下面命令显示具体的版本号即安装成功

   >    ```bash
   >    node -v
   >    npm -v
   >    ```


### Linux 环境下安装

根据自己的系统执行下面的命令

```shell
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

```shell
sudo yum update
sudo yum install nodejs
sudo yum install npm
```

之后执行下面的命令, 能输出正确的版本号即安装成功

```shell
node -v
npm -v
```



## 安装部署

**1. 获取 SCNU_ACM_RANK_FRONT**

拉取代码仓库, 执行下面的命令:

```shell
git clone https://github.com/yyym-y/scnu_acm_rank_front.git
```

**2. 安装项目依赖**

进入根文件夹, 执行下面的命令安装依赖

```shell
npm install
```

**3. 更改网络配置**

进入下面的文件中 : `~/src/network/request.js` 中, 更改网络配置

```js
import axios from 'axios'
const request = axios.create({
    baseURL: "", // 在这里配置你的请求地址,如: http://127.0.0.1:8080
    withCredentials: true
})
export default request
```

**4. 运行**

回到根目录中, 执行下面的命令

```shell
npm run serve
```

如果命令执行成功, 将会显示访问的地址

**5.打包**

在根目录中运行下面的命令即可完成打包

```shell
npm run build
```

打包好的文件会存储在 `~/dist` 文件夹中
