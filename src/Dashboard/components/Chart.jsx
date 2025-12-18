import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";

const getCssVar = (name, fallback) => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name);
  return value?.trim() || fallback;
};
export const Chart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [device, setDevice] = useState(null);
  const brandColor = getCssVar("--color-fg-brand", "#1417E6");
  const brandSecondaryColor = getCssVar("--color-fg-brand-subtle", "#1447E6");
  const brandTertiaryColor = getCssVar("--color-fg-brand-strong", "#1487E6");
  const baseSeries = [35.1, 23.5, 2.4, 5.4];
  const deviceSeriesMap = {
    desktop: [15.1, 22.5, 4.4, 8.4],
    tablet: [25.1, 26.5, 1.4, 3.4],
    mobile: [45.1, 27.5, 8.4, 2.4],
  };
  const getChartOptions = (series) => ({
    series,
    colors: [brandColor, brandSecondaryColor, brandTertiaryColor],
    chart: {
      type: "donut",
      height: "100%",
      width: "100%",
    },
    stroke: {
      colors: ["transparent"],
    },
    labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Unique visitors",
              formatter: (w) =>
                "$" +
                w.globals.seriesTotals.reduce((a, b) => a + b, 0) +
                "k",
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 260,
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 220,
          },
          plotOptions: {
            pie: {
              donut: {
                size: "65%",
              },
            },
          },
        },
      },
    ],
  });
  useEffect(() => {
    if (!chartRef.current) return;

    chartInstance.current = new ApexCharts(
      chartRef.current,
      getChartOptions(baseSeries)
    );

    chartInstance.current.render();

    return () => {
      chartInstance.current?.destroy();
    };
  }, []);
  useEffect(() => {
    if (!chartInstance.current) return;

    const series = device ? deviceSeriesMap[device] : baseSeries;
    chartInstance.current.updateSeries(series);
  }, [device]);
  useEffect(() => {
    const handleResize = () => {
      chartInstance.current?.resize();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full max-w-md sm:max-w-full bg-white rounded-base shadow-xs p-4 sm:p-6">
      <h5 className="text-lg sm:text-xl font-semibold text-heading mb-3">
        Website traffic
      </h5>
      <div className="flex flex-wrap gap-3 mb-4">
        {["desktop", "tablet", "mobile"].map((d) => (
          <label key={d} className="flex items-center text-sm font-medium">
            <input
              type="checkbox"
              checked={device === d}
              onChange={() => setDevice(device === d ? null : d)}
              className="w-4 h-4 me-2"
            />
            {d.charAt(0).toUpperCase() + d.slice(1)}
          </label>
        ))}
      </div>
      <div className="w-full h-[260px] sm:h-[300px] md:h-[320px]">
        <div ref={chartRef} className="w-full h-full" />
      </div>
    </div>
  );
};
