import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LiveMusicVisualize: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const height = 200;
    const width = 600;

    // Create some fake data to simulate music
    const data = d3.range(50).map(() => Math.random() * height);

    const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, height]).range([height, 0]);

  
    svg.selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', ( i) => xScale(i))
      .attr('y', (d) => yScale(d))
      .attr('width', width / data.length - 2)
      .attr('height', (d) => height - yScale(d))
      .attr('fill', 'blue');

    
    const interval = setInterval(() => {
      const newData = d3.range(50).map(() => Math.random() * height);
      svg.selectAll('rect')
        .data(newData)
        .attr('y', (d) => yScale(d))
        .attr('height', (d) => height - yScale(d));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg ref={svgRef} width="600" height="200" />
  );
};

export default LiveMusicVisualize;
