/**
 * observable 观察订阅模式
 * @alias Ti.$observable
 * @memberof Ti
 * @param {Object} obj 进行订阅的对象
 */
function observable(obj) {
  obj._events = {};
  obj.on = (events, func, stable) => {
    const evts = events || '';
    const eventsToListen = evts.split(/[\s]+/);
    eventsToListen.forEach((evt) => {
      obj.onOne(evt, func, stable);
    });
  }
  obj.onOne = (event, func, stable) => {
    const evts = obj._events[event];
    if (!evts) {
      obj._events[event] = [];
    }
    obj._events[event].push({
      event: func || function (){},
      stable: stable === undefined ? true : stable
    }); // 注册事件

  };
  obj.triggerOne = (event, param) => {
    const evts = obj._events[event];
    if (!evts) return false;
    for (let i = 0; i < evts.length; i +=1) {
      const v = evts[i];
      v.event(param, event);
      if (!v.stable) {
        evts.splice(i, 1);
        i -= 1;
      }
    }
    return true;
  };
  obj.trigger = (event, param) => {
    let toTriggerEvent = [];
    const allEvent = event || '';
    if (allEvent === '*') {
      toTriggerEvent = Object.keys(obj._events);
    } else {
      toTriggerEvent = allEvent.split(/[\s]+/);
    }
    toTriggerEvent.forEach((event) => obj.triggerOne(event, param));
  };
  // 事件只能触发一次
  obj.one = (event, func) => {
    obj.on(event, func, false); 
  };
  obj.offOne = (event) => {
    const evts = obj._events[event];
    if (!evts) return false;
    delete obj._events[event];
    return true;
  }
  obj.off = (event) => {
    const evts = event || '';
    if (event === '*')  {
      obj._events = {};
    }
    const eventsToOff = evts.split(/[\s]+/);
    eventsToOff.forEach((evt) => {
      obj.offOne(evt);
    });
  }
}

export default observable;