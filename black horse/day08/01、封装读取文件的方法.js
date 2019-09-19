const fs = require('fs');
const path = require('path');

function asyncGetFileByPath(p) {
    return new Promise((resolve, reject) => {
        // Promise对象里面的参数,会立即执行(前面说过)
        fs.readFile(path.join(__dirname, p), 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
asyncGetFileByPath('./files/1.txt')
    .then(
        (data) => { // 成功的回调    '1.txt'
            console.log(data); // 打印出 1.txt 数据
            return asyncGetFileByPath('./files/2.txt')
        },
qq
    )
    .then( // 成功的回调  '2.txt'
        (data) => {
            console.log(data); // 打印出 2.txt 中的数据
            return asyncGetFileByPath('./files/3.txt') // 继续返回Promise对象的实例
        },
        (err) => {
            console.log(err);
        }
    )
    .then(
        (data) => { // 成功的回调 '3.txt'
            console.log(data); // 打印出 3.txt 中的数据
        },
        (err) => {
            console.log(err);
        }
    )


console.log('okokok');