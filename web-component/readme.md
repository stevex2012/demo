webcompoents

通过浏览器api，customElements.define('order-card',OrderCard)，定义
OrderCard是一个类，里面有生命周期，结合shawdom实现样式dom隔离

template 标签虽然不会渲染，但是它会增加dom字符串的体积