# SCNU_ACM_RANK Frontend Deployment



## Environment Preparation

This project uses `npm` as the package manager, so `npm` must be installed on the development computer.

### Installation on Windows

1. Download a suitable installation package from [NodeJS](https://nodejs.org/en/).

2. Follow the instructions to install normally, which will automatically add to the environment variables.

3. Enter the following command in the command line to display the specific version number, indicating a successful installation:

   >    ```bash
   > node -v
   > npm -v
   >    ```


### Installation on Linux
Execute the following commands according to your system:

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

Then execute the following command, which will output the correct version number, indicating a successful installation:

```shell
node -v
npm -v
```



## Installation and Deployment
**1. Get SCNU_ACM_RANK_FRONT**

Pull the code repository by executing the following command:

```shell
git clone https://github.com/yyym-y/scnu_acm_rank_front.git
```

**2. Install Project Dependencies**

Enter the root directory and execute the following command to install dependencies:

```shell
npm install
```

**3. Change Network Configuration**

Enter the following file: `~/src/network/request.js`, and change the network configuration:

```js
import axios from 'axios'
const request = axios.create({
    baseURL: "", // Configure your request address here, such as:http://127.0.0.1:8080
    withCredentials: true
})
export default request
```

**4. Run**

Go back to the root directory and execute the following command:

```shell
npm run serve
```

If the command is executed successfully, the access address will be displayed.

**5. Packaging**

Run the following command in the root directory to complete the packaging:

```shell
npm run build
```

The packaged files will be stored in the ~/dist folder.

