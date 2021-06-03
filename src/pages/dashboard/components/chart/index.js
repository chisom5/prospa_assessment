import { ResponsiveLine } from "@nivo/line";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLineChart = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "time", format: "%Y-%m-%d" }}
    xFormat="time:%Y-%m-%d"
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: false,
      reverse: false,
    }}
    curve="monotoneX"
    pointColor={{ from: "color", modifiers: [] }}
    axisTop={null}
    axisRight={null}
    enableArea={true}
    axisBottom={{
    //   orient: "bottom",
      format: "%b",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendOffset: -12,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    enableGridX={false}
    pointColor={{ theme: "background" }}
    pointBorderWidth={1}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[]}
  />
);
export default MyResponsiveLineChart;
