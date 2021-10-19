// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// 定义变量
// let myVariable = '李雷';

/*
这里的所有内容
都是注释。
*/

// 这是一条注释。

// if...else语句
/*
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我最喜欢巧克力冰激淋了。');
} else {
  alert('但是巧克力才是我的最爱呀……');
}
*/

// 定义函数
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }

// 事件
// document.querySelector('html').onclick = function () {
//     alert('别戳我，我怕疼。');
// }

//点击更换图片
let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

//获取按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//创建一个用户信息
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

//判断用户信息是否存在
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

//点击修改用户
myButton.onclick = function() {
    setUserName();
 }