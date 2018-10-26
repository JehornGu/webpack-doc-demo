import _ from 'lodash';
import './style.css';
import Img from './user-img-gril.jpg';
import Data from './data.xml'

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack', '你好', '123'], ' ');
    element.classList.add('hello');

    // 将图片添加到div
    var img = new Image();
    img.src = Img;

    element.appendChild(img);

    console.log(Data);

    return element;
}

document.body.appendChild(component());
