import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>基于 <Link to="https://uptimerobot.com/" text="UptimeRobot" /> 接口制作，检测频率 5 分钟</p>
        <p>&copy; <Link to="https://hello.mckfs.com/" text="KFS服务器" /></p>
      </div>
    </div>
  );
}

export default Footer;
