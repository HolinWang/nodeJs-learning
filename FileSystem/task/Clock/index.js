
    let hour = document.querySelector('.hour');
    let minute = document.querySelector('.minute');
    let second = document.querySelector('.second');
    // 1. 封装一个函数 返回当前的时分秒
    getTimes();
    function getTimes() {
      let time = new Date();
      let h = time.getHours();
      h = h < 10 ? "0" + h : h;
      // 将获取到的时间h添加到span盒子里
      hour.innerHTML = h;
      let m = time.getMinutes();
      m = m < 10 ? "0" + m : m;
      // 将获取到的时间m添加到span盒子里
      minute.innerHTML = m;
      // 将获取到的时间s添加到span盒子里
      let s = time.getSeconds();
      s = s < 10 ? "0" + s : s;
      second.innerHTML = s;
    }
    // 2. 使用定时器使当前以获取到的系统时间走动，每间隔一面调用
    setInterval(getTimes, 1000);
  