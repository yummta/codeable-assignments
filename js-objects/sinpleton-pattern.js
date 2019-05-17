// https://www.codewars.com/kata/singleton-pattern/train/javascript
// Singleton pattern

function Singleton(){
  if (typeof Singleton.instance === 'object') {
  return Singleton.instance;
}
this.test = 0;
Singleton.instance = this;
}
