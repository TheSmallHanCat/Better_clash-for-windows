# Better_clash-for-windows<img src="https://github.com/TheSmallHanCat/Better_clash-for-windows/assets/109069769/e59b6e45-b596-4af7-a086-c6c9909ffacf" width="30" height="30">

**修改的内容**
   基于[Clash for windows Chinese](https://github.com/Z-Siqi/Clash-for-Windows_Chinese)进行美化
  1. 修改renderer.js中的clash的左侧文字
  2. 在index.html添加css和js代码
  3. 添加了aplayer的脚本（这个用不到可以使用另一个版本）
## 使用方法

自行选择 `app_with_music.asar` 和 `app_without_music.asar` 文件。

注意： 纯属个人兴趣修改，前者带有音乐播放器，如果你只希望使用主体美化功能，可以选择后者。(音乐播放器是我一不小心搞进去的)

* 1.更新clash到最新版本(目前为0.20.30,该asar已汉化，可以直接使用英文原版)
* 2.**退出clash**
* 3.将对应asar文件放入clash根目录下`resources`文件夹
* 4.删除或者重命名原有`app.asar`，将新文件重命名为`app.asar`
* 5.重新启动clash即可。

（注意：这个库修改了css和js使clash更加好看美观，并没有其他特别高级的功能，至于自定义歌单，这个还没做好，也不知道能不能做好。）

## 预览图
![image](https://github.com/TheSmallHanCat/Better_clash-for-windows/assets/109069769/f72c9f87-95e7-4a27-8bd9-17f62d1964a9)
![image](https://github.com/TheSmallHanCat/Better_clash-for-windows/assets/109069769/4e5b6eda-1960-4aff-ad73-c1031a764b3d)
![image](https://github.com/TheSmallHanCat/Better_clash-for-windows/assets/109069769/b98729b0-81ec-4d28-ba2d-f7c1430f95b9)
![image](https://github.com/TheSmallHanCat/Better_clash-for-windows/assets/109069769/5819ec33-b227-4048-81d3-d9d938f986b5)



## 更新日志
---

### 1.0_20230708

- 添加随机猫背景图（由koyuki提供服务器支持）~~甘城猫猫!嘶哈嘶哈~~
- 透明化clash界面
- 修改按钮名称
- 美化文字,按钮和UI

---

### 2.0_20230709

- 添加音乐播放器
- 修改/降低背景图透明度（太透明了看不清按钮和控件）

---

### 3.0_20230723

- 适配clash版本v0.20.30
- 将css和js全部储存本地，减少网络消耗
- 将带音乐播放器版本和不带的单独分开，用户可以自行选择使用

### 后续版本均为适配官方版

 汉化版asar用到的
 1.[Clash for windows Chinese](https://github.com/Z-Siqi/Clash-for-Windows_Chinese)
 2.[aplayer](https://github.com/DIYgod/APlayer)
