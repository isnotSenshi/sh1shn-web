import { useEffect, useRef } from 'react';
import './AsciiCube.css';

function AsciiCube() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fh = 15;
    const fw = 8;
    const cols = (container.offsetWidth / fw) | 0;
    const rows = (container.offsetHeight / fh) | 0;

    const pp = document.createElement('pre');
    const p = document.createElement('span');
    container.appendChild(pp);
    pp.appendChild(p);

    let a = [];
    for (let y = 0; y < rows; y++) {
      a[y] = [];
      for (let x = 0; x < cols; x++) a[y][x] = 0;
    }

    function s(v, x, y) {
      y = (y / fh) * fw;
      x = x | 0; y = y | 0;
      if (x >= cols || y >= rows || y < 0 || x < 0) return;
      a[y % rows][x % cols] = v;
    }

    function clear() {
      a = a.map(row => row.map(() => 0));
    }

    function line(x0, y0, x1, y1) {
      x0 += cols / 2;
      // y offset must account for fh/fw ratio so center lands at rows/2 after normalization in s()
      y0 += (rows / 2) * (fh / fw);
      x1 += cols / 2;
      y1 += (rows / 2) * (fh / fw);

      if ((x0 > x1 && x0 > 0) || (x0 < x1 && x0 < 0)) {
        [x0, x1] = [x1, x0]; [y0, y1] = [y1, y0];
      }

      const swap = Math.abs(x1 - x0) < Math.abs(y1 - y0);
      if (swap) { [x0, x1, y0, y1] = [y0, y1, x0, x1]; }

      if ((y0 > y1 && y0 > 0) || (y0 < y1 && y0 < 0)) {
        [x0, x1] = [x1, x0]; [y0, y1] = [y1, y0];
      }

      x0 = x0 | 0; x1 = x1 | 0; y0 = y0 | 0; y1 = y1 | 0;

      const deltax = x1 - x0;
      const deltay = y1 - y0;

      if (deltax === 0) {
        const step = deltay >= 0 ? 1 : -1;
        for (let ly = y0; ly !== y1; ly += step)
          s(1, swap ? ly : x0, swap ? x0 : ly);
        return;
      }

      let error = 0;
      const deltaerr = Math.abs(deltay / deltax);
      let yy = y0;
      for (let x = x0; x !== x1; x += x < x1 ? 1 : -1) {
        s(1 - Math.abs(error), swap ? yy : x, swap ? x : yy);
        error += deltaerr;
        if (error >= 0.5) {
          yy += yy > 0 ? 1 : -1;
          error -= 1;
        }
      }
    }

    const values = " .'`,^:;~-_+i!lI?/\\|()1{}[]rcvunxzjftLCJUYXZO0Qoahkbdpqwm*WMB8&%$#@".split('');
    function value(v) { return values[Math.floor(values.length * v * 0.999)]; }
    function render() { p.innerHTML = a.map(row => row.map(value).join('')).join('\n'); }

    function V2(x, y) { this.x = x; this.y = y; }
    function V3(x, y, z) { this.x = x; this.y = y; this.z = z; }
    V3.prototype.m = function (n) { return new V3(this.x * n, this.y * n, this.z * n); };
    V3.prototype.a = function (v) { return new V3(this.x + v.x, this.y + v.y, this.z + v.z); };

    function project(v) {
      const fl = 60;
      const scale = fl / (v.z + fl);
      return new V2(v.x * scale, v.y * scale);
    }

    function drawEdge(from, to) {
      const p0 = project(from), p1 = project(to);
      line(p0.x, p0.y, p1.x, p1.y);
    }

    function drawCube(point, width) {
      const top = [
        new V3(-0.5, 0.5, -0.5), new V3(0.5, 0.5, -0.5),
        new V3(0.5, 0.5, 0.5),   new V3(-0.5, 0.5, 0.5),
      ];
      const bottom = [
        new V3(-0.5, -0.5, -0.5), new V3(0.5, -0.5, -0.5),
        new V3(0.5, -0.5, 0.5),   new V3(-0.5, -0.5, 0.5),
      ];

      const t = Date.now() / 1200;
      const rx = t % Math.PI, ry = t % Math.PI, rz = t % Math.PI;

      [...top, ...bottom].forEach(p => {
        const d1x = Math.cos(ry) * p.x + Math.sin(ry) * p.z;
        const d1z = Math.cos(ry) * p.z - Math.sin(ry) * p.x;
        const d2y = Math.cos(rx) * p.y  - Math.sin(rx) * d1z;
        const d2z = Math.cos(rx) * d1z  + Math.sin(rx) * p.y;
        p.x = Math.cos(rz) * d1x + Math.sin(rz) * d2y;
        p.y = Math.cos(rz) * d2y - Math.sin(rz) * d1x;
        p.z = d2z;
      });

      for (let i = 0; i < 4; i++) {
        drawEdge(top[i].m(width).a(point),    top[(i + 1) % 4].m(width).a(point));
        drawEdge(bottom[i].m(width).a(point), bottom[(i + 1) % 4].m(width).a(point));
        drawEdge(top[i].m(width).a(point),    bottom[i].m(width).a(point));
      }
    }

    // Scale cube to always fill ~60% of the container regardless of size
    const cubeWidth = cols * 1.2;
    const point = new V3(0, 0, 60);
    const interval = setInterval(() => {
      clear();
      drawCube(point, cubeWidth);
      render();
    }, 1000 / 30);

    return () => {
      clearInterval(interval);
      if (container.contains(pp)) container.removeChild(pp);
    };
  }, []);

  return <div className="ascii-cube-container" ref={containerRef} />;
}

export default AsciiCube;
