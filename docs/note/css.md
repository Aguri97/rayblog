---
prev:
  text: "HTML"
  link: "/note/html"
next: false
---

## CSS 盒子模型

CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括：边距，边框，填充，和实际内容。盒模型允许我们在其它元素和周围元素边框之间的空间放置元素

- **Margin（外边距）** - 清除边框区域。Margin 没有背景颜色，它是完全透明
- **Border（边框）** - 边框周围的填充和内容。边框是受到盒子的背景颜色影响
- **Padding（内边距）** - 清除内容周围的区域。会受到框中填充的背景颜色影响
- **Content（内容）** - 盒子的内容，显示文本和图像

![CSS盒子模型](https://www.runoob.com/images/box-model.gif)

标准盒模型的范围只有 content，而 IE 盒模型的 width 和 height 属性的范围包含 border，padding 和 content  
可以通过 box-sizing 属性来改变元素的盒模型，存在两个值，一个是 border-box 表示 IE 盒模型，content-box 表示标准盒模型

## CSS3 新特性

1. **圆角**
   - border-radius
2. **阴影和发光**
   - box-shadow
   - text-shadow
3. **背景与渐变**
   - background-image：linear-gradient
   - background-cilp
   - background-repeat
4. **动画与过渡**
   - transition
   - animation
5. **2D/3D 转换**
   - transform
   - transform-origin
   - transform-style
   - perspective
   - perspective-origin
6. **媒体查询**
   - @media
7. **字体**
   - @font-face
8. **选择器**
   - 属性选择器
   - 伪类选择器
   - 伪元素选择器
   - 结构伪类选择器
9. **多列布局，弹性布局和网格布局**
   - column-count
   - column-width
   - flex
   - grid

## link 标签和 import 标签的区别

`<link>` 标签和 `@import` 规则都用于引入外部 CSS 文件，区别如下:

- 语法和用法:
  - `<1ink>`标签是 HTML 标记，用于在 HTML 文档的`<head>`部分中引入外部 CSS 文件。它具有自己的属性，例。如 re1(关系)、href(资源链接)、type (MIME 类型)等。
  ```html
  <link rel="stylesheet" type="text/css" href="styles.css" />
  ```
  - @import 是 CSS 规则，用于在 CSS 样式表中引入外部 CSS 文件。它必须位于 CSS 样式表中，通常放在样式表。的顶部，可以用于导入其他 CSS 文件。
  ```css
   @import url("styles.css");`
  ```
- 加载方式:
  - `<1ink>` 标签会在页面加载过程中同时加载 CSS 文件，这可以并行进行，不会阻止页面的渲染。
  - @import 规则只能在当前 CSS 文件加载完成后才会加载引入的外部 CSS 文件，这会导致页面渲染的延迟因为它会阻止页面的渲染。
- 兼容性:
  - `<link`>标签的支持广泛，可以用于所有 HTML 版本。
  - `@import`规则是 CSS2 引入的特性，较旧的浏览器可能不支持，尤其是在 CSS1 规范中并没有这个特性。但在现代浏览器中，它通常能够正常工作。
- 维护和管理:
  - 使用<1ink>标签更容易维护和管理，因为它与 HTML 文档分开，并且可以在文档的`<head>`部分中轻松找。
    到。
  - 使用 @import 规则时，CSS 代码和引入的 CSS 文件混在一起，可能会导致维护复杂度增加，特别是在大型项

## CSS 常用单位

1. **px(像素):**
   相对单位，代表屏幕上的一个基本单位，逻辑像素。
   不会根据屏幕尺寸或分辨率自动调整大小。
   在高分辨率屏幕上可能显得很小。
2. **rpx(微信小程序单位):**  
   主要用于微信小程序开发
   是相对单位，基于屏幕宽度进行缩放。
   可以在不同设备上保持一致的布局。
3. **vw(视窗宽度单位):**  
   相对单位，表示视窗宽度的百分比。
   1vw 等于视窗宽度的 1%。
   用于创建适应不同屏幕宽度的布局。
4. **vh(视窗高度单位):**
   相对单位，表示视窗高度的百分比。
   1vh 等于视窗高度的 1%。。
   用于创建根据屏幕高度进行布局调整的效果，
5. **rem(根元素单位):**  
   相对单位，基于根元素的字体大小。
   1rem 等于根元素的字体大小。
   可用于实现相对大小的字体和元素，适合响应式设计。
6. **em(字体相对单位):**
   相对单位，基于当前元素的字体大小。
   1em 等于当前元素的字体大小。
   通常用于设置相对于父元素的字体大小
