# NgrxDemo

 最近学习了redux,想写个demo练习下，顺便就写了这个计算器。只是为了加深记忆

![示例图](src/assets/screencut.png '示例图')
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##遇到问题
遇到了计算器结果计算问题，即处理一串字符串里`'3*4-5+9/3'`加减乘除都问题。

刚开始都思路是每点击运算符或者等号时，判断之前是否有运算符，放个变量存储结果并显示。之后再输入时，拿符号前面都数字去和显示都变量做计算，结果得到都答案是从左到右依次计算都结果： `5.3333`;

发现这个不是想要的答案只有，在网上查找到了 `eval()` 函数，也在浏览器的开发工具里写了demo测试，eval 函数的确能解决这个问题。高兴啊，结果放到项目里，提示`error typeerror: _co.eval is not a function`不是一个函数。坑啊！！

最后在stackoverflow 搜到了 eval的替代品。有人写了一个demo:
```javascript
function evil(fn) {
  return new Function('return ' + fn)();
}

console.log( evil('3*4-5+9/3') )

```
这个构造方法得到了我想要的答案。

调试代码，发现浏览器会把evil()里的构造函数编译成

```javascript
(function(){
    return 3*4-5+9/3
})

```

关于构造函数可以参考 [MDN Function构造函数]('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function', 'MDN Function')