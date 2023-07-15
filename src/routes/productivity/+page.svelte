<script>
  import Chart from "chart.js/auto";

  let currChart = "bar";
  let canvas;
  let currCanvas;
  let data = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Productivity",
        data: [1, 5, 8, 2, 5, 5, 8],
        borderColor: "rgb(102,178,255)",
        backgroundColor: "rgb(102,178,255, 0.4)",
      },
    ],
  };

  function updateData() {
    data = {
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      datasets: [
        {
          label: "Productivity",
          data: [1, 5, 8, 2, 5, 5, 8],
          borderColor: "rgb(102,178,255)",
          backgroundColor: "rgb(102,178,255, 0.4)",
        },
      ],
    };

    currCanvas.data = data;
    currCanvas.destroy();
  }
  $: {
    currCanvas = new Chart(canvas, {
      type: currChart,
      data,
      options: {
        scales: {
          y: {
            title: { text: "hours", display: true },
            beginAtZero: true,
          },
        },
      },
    });
  }
</script>

<div>
  <select
    bind:value={currChart}
    on:change={() => updateData()}
    name="charts"
    id=""
  >
    <option value="bar">Bar</option>
    <option value="line">Line</option>
    <option value="doughnut">Pie</option>
    <option value="polarArea">Polar</option>
  </select>
  <canvas bind:this={canvas} id="myChart" />
</div>

<style>
  :global(html, body) {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  canvas {
    margin: 0 auto;
    width: auto !important;
    height: 90vh !important;
  }
</style>
