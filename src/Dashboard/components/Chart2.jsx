import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const LeadsBarCard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const getBrandColor = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-fg-brand")
        .trim() || "#1447E6";

    const getBrandSecondaryColor = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-fg-brand-subtle")
        .trim() || "#1447E6";

    const options = {
      series: [
        {
          name: "Organic",
          data: [231, 122, 63, 421, 122, 323, 111,222,112,321,123,432],
        },
        {
          name: "Social media",
          data: [232, 113, 341, 224, 522, 411, 243,333,222,111,321,211],
        },
      ],
      chart: {
        type: "bar",
        height: 320,
        toolbar: { show: false },
      },
      colors: [getBrandColor(), getBrandSecondaryColor()],
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: "70%",
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "june","july","Aug","sep","Oct", "nov","dec"],
      },
      grid: { show: false },
      dataLabels: { enabled: false },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy(); // ✅ VERY IMPORTANT
  }, []);

  return (
    <div className=" bg-white  rounded-base shadow-xs p-6 md:p-6 ml-1 mt-2">
      {/* Header */}
      <div className="flex justify-between pb-4 mb-4 border-b border-light">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-neutral-primary-medium border border-default-medium flex items-center justify-center rounded-full me-3">
            {/* icon */}
          </div>
          <div>
            <h5 className="text-2xl font-semibold text-heading">3.4k</h5>
            <p className="text-sm text-body">Leads generated per week</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div ref={chartRef} />

      {/* Footer */}
      <div className="flex justify-between items-center pt-4">
        <span className="text-sm text-body">last 12 months</span>
        <a className="text-fg-brand text-sm font-medium" href="#">
          Leads Report →
        </a>
      </div>
    </div>
  );
};

export default LeadsBarCard;
