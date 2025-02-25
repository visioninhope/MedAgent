import React, { useEffect, useRef } from 'react';

const Live2DWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/live2d-widget@3.0.4/lib/L2Dwidget.min.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).L2Dwidget) {
        (window as any).L2Dwidget.init({
          model: {
            jsonPath: '/live2d/yiselin/model.json',
          },
        //   display: {
        //     position: 'left',
        //     width: 150,
        //     height: 300,
        //     hOffset: 0,
        //     vOffset: 0,
        //     // 让模型可拖拽
        //     draggable: 'both',
        //   },
        //   mobile: {
        //     show: true,
        //     scale: 0.5,
        //   },
          react: {
            opacityDefault: 0.7,
            opacityOnHover: 1,
          },
        });
      }
    };

    containerRef.current.appendChild(script);
    return () => {
      if (containerRef.current && containerRef.current.contains(script)) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default Live2DWidget;
