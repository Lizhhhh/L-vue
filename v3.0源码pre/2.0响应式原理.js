
// 对数组的方法进行重写
// 1. 不能影响本来的方法
// 2. 调用的时候可以找到它
let odlArrayPrototype = Array.prototype;
let proto = Object.create(odlArrayPrototype); // 继承
['push','shift','unshift'].forEach(method =>{
  proto[method] = function(){  // 函数劫持: 把函数进行重写,内部继续调用老的方法
    updateView();  // 切片编程
    odlArrayPrototype[method].call(this, ...arguments);
  }
})


function updateView() {
    console.log('更新视图');
}

function observer(target) {
    if (typeof target !== 'object' || target === null) {
        return target;
    }
    if(Array.isArray(target)){  // 拦截数组,给数组的方法进行重写
      target.__proto__ = proto;
    }
    Object.keys(target).forEach(key=>{
      defineReactive(target, key, target[key]);
    })
}

function defineReactive(obj, key, value){

  observer(value);

  Object.defineProperty(obj,key,{
    get(){
      // get中会进行依赖收集
      return value
    },
    set(newVal){
      if(newVal !== value){
        observer(newVal);  // 重新写进行数据劫持
        updateView();
        value = newVal;
      }
    }
  })
}


// let data = { name: 'lz' ,age:{n:100} };
// observer(data);
// data.age = {n:200};
// data.age.n = 300;




let data = {name:'lz', age:[1,2,3]};
observer(data);
data.age.push(4);
data.age.push(5);



