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

## CSS 样式优先级和层叠

### 优先级

- 一个选择器的优先级可以说是由三个不同的值（或分量）相加，可以认为是百（ID）十（类）个（元素）——三位数的三个位数：

  - ID：选择器中包含 ID 选择器则百位得一分。
  - 类：选择器中包含类选择器、属性选择器或者伪类则十位得一分。
  - 元素：选择器中包含元素、伪元素选择器则个位得一分。

  > **备注:** 通用选择器（\*）、组合符（+、>、~、' '）和调整优先级的选择器（:where()）不会影响优先级。

  | 选择器                                  | ID  | 类  | 元素 | 优先级 |
  | --------------------------------------- | --- | --- | ---- | ------ |
  | h1                                      | 0   | 0   | 1    | 0-0-1  |
  | h1 + p::first-letter                    | 0   | 0   | 3    | 0-0-3  |
  | li > a[href*="en-US"] > .inline-warning | 0   | 2   | 2    | 0-2-2  |
  | #identifier                             | 1   | 0   | 0    | 1-0-0  |
  | button:not(#mainBtn, .cta)              | 1   | 0   | 1    | 1-0-1  |

- **内联样式**

  内联样式，即 style 属性内的样式声明，优先于所有普通的样式，无论其优先级如何。这样的声明没有选择器，但它们的优先级可以理解为 1-0-0-0；即无论选择器中有多少个 ID，它总是比其他任何优先级的权重都要高

- **!important**

  有一个特殊的 CSS 可以用来覆盖所有上面所有优先级计算，不过需要很小心的使用——!important。用于修改特定属性的值，能够覆盖普通规则的层叠。

  > **备注：** 了解 !important 是为了在阅读别人代码的时候知道有什么作用。但是，强烈建议除了非常情况不要使用它。!important 改变了层叠的常规工作方式，它会使调试 CSS 问题非常困难，特别是在大型样式表中

### 层叠

样式表层叠——简单的说，就是 CSS 规则的顺序很重要；当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。

具有相同的元素选择器，有相同的优先级，顺序在最后的生效。

## CSS 中属性的继承性

- **可继承的属性(Inherited Properties):**

1. `color`:控制文本颜色。
2. `font`:包括 font-family、font-size、font-style、font-weight 等属性。
3. `line-height`:控制行高。
4. `text-align`:控制文本对齐方式，
5. `text-indent`:控制首行缩进。
6. `text-transform`:控制文本转换为大写、小写或首字母大写。
7. `visibility` :控制元素的可见性。

- **不可继承的属性(Non-inherited Properties):**

1. `border`:包括 border-width、border-style、
2. `margin`:包括 margin-top、margin-leftmargin-right、margin-bottom、border-color 等属性。
3. `padding`:包括 padding-top、padding-right、padding-bottom、 padding-left.
4. `background`::包括 background-color、background-image、background-repeat 等属性
5. `width`:控制元素的宽度。
6. `height` :控制元素的高度,
7. `position`:控制元素的定位方式(例如，relative，absolute、fixed)。
8. `top`、`right`、`bottom`、`left`:控制元素的位置
9. `display`:控制元素的显示方式(例如，block、inline、none)。
10. `float` :控制元素的浮动方式。

## CSS 中的定位(position)

- **static(静态定位):**
  - 默认值。
  - 元素按照文档流正常排列，不受其他定位属性影响
  - `top`、`right`、`bottom`、`1eft` 属性不起作用
- **relative(相对定位):**
  - 元素相对于其正常位置定位。
  - 可以使用 `top`、`right`、`bottom`、`left` 属性来调整元素的位置
  - 相对定位不会脱离文档流，其他元素仍然占据原来的位置
- **absolute(绝对定位):**
  - 元素相对于最近的已定位祖先元素定位，如果没有已定位的祖先元素，则相对于初始包含块(通常是浏览器。窗口)定位
  - 使用 `top`、`right`、`bottom`、`left` 属性来精确控制位置
  - 绝对定位会脱离文档流，不再占据原来的位置
- **fixed(固定定位)**
  - 元素相对于视口定位，不随页面滚动而移动
  - 使用 `top`、`right`、`bottom`、`left` 属性来控制位置
  - 固定定位脱离文档流，不占据原来的位置
- **sticky(粘性定位):**
  - 元素在跨越特定阈值前表现为相对定位，之后表现为固定定位。
  - 通常用于创建“粘性”导航栏或侧边栏。
  - 使用 `top`、`right`、`bottom`、`left` 属性来控制位置。
