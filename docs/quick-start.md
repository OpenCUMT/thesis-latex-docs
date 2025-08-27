# 快速开始

## 认识LaTeX

[LaTeX](https://zh.wikipedia.org/wiki/LaTeX)（读作/ˈlɑːtɛx/或/ˈleɪtɛx/）是一种基于 [TeX](https://zh.wikipedia.org/wiki/TeX) 的排版系统，与 Microsoft Word 等“所见即所得”的文字处理器不同，LaTeX 让您专注于文章内容的撰写，而非排版样式。您只需在纯文本文档中通过简单的命令来定义文档的结构（如章节、标题、公式、图表等），LaTeX 即可自动完成专业的排版工作。

## 编译文档

### 1. 本地编译

#### 环境搭建

要开始使用 LaTeX，您需要在本地计算机上安装一个 LaTeX 发行版。这是一个包含了 LaTeX 编译器和所需宏包的集合。

###### Windows 用户

推荐使用 [TeX Live](https://tug.org/texlive/) ，首先访问[清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/texlive/Images/)，选择并下载名为“texlive.iso”的镜像文件，随后在合适的路径下安装。

###### macOS用户

推荐使用 [MacTeX](https://www.tug.org/mactex/)，它包含了完整的 TeX Live 发行版和一个方便的编辑器 TeXShop。

#### 模板下载

访问 [本项目的GitHub发布页](https://github.com/OpenCUMT/thesis-latex/releases) 可以下载最新的论文模板，访问其中的“thesis.tex”即可对模板进行修改，其中包含足够多的注释，可以帮助你更快地上手。

#### 使用VS Code + LaTeX Workshop

[VS Code](https://code.visualstudio.com/) 是一款免费且功能强大的代码编辑器，通过安装 **LaTeX Workshop** 插件（在 VS Code 的扩展市场中搜索 "LaTeX Workshop" 并点击安装），可以获得极佳的 LaTeX 写作体验。

#### 常用命令

**编译论文** `thesis.pdf`：

- ```bash
  latexmk -xelatex thesis.tex
  ```

- **清理编译临时文件**：
  
  ```bash
  latexmk -c
  ```

### 2. Overleaf 编译

直接使用 [Overleaf 模板](https://www.overleaf.com/latex/templates/10290-zhong-guo-kuang-ye-da-xue-shuo-shi-sheng-bi-ye-lun-wen-mo-ban/qwggynbswxwg) 进行在线编译。（近期将同步更新）