let chartHistorico

async function carregarHistorico() {
  try {
    const res = await fetch('/dados?nocache=' + Date.now())
    const data = await res.json()

    if (!data || data.length === 0) return

    const grupos = {}

    for (let d of data) {
      const timestamp = d[0]
      const valor = parseInt(d[1])

      if (isNaN(valor)) continue

      let hora

      // funciona com OU sem data
      if (timestamp.includes(" ")) {
        hora = timestamp.split(" ")[1].split(":")[0] // com data
      } else {
        hora = timestamp.split(":")[0] // sem data
      }

      if (!grupos[hora]) grupos[hora] = []

      grupos[hora].push(valor)
    }

    const labels = []
    const medias = []

    // ordena horas (0–23)
    const horasOrdenadas = Object.keys(grupos).sort((a, b) => a - b)

    for (let hora of horasOrdenadas) {
      const valores = grupos[hora]

      const soma = valores.reduce((a, b) => a + b, 0)
      const media = soma / valores.length

      labels.push(hora + "h")
      medias.push(Math.round(media))
    }

    if (!chartHistorico) {
      chartHistorico = new Chart(document.getElementById('graficoHistorico'), {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Média de Poluição por Hora',
            data: medias
          }]
        },
        options: {
          animation: false,
          scales: {
            y: {
              ticks: {
                stepSize: 1,
                callback: function(value) {
                  return Math.floor(value)
                }
              }
            }
          }
        }
      })
    } else {
      chartHistorico.data.labels = labels
      chartHistorico.data.datasets[0].data = medias
      chartHistorico.update()
    }

  } catch (error) {
    console.log("Erro histórico:", error)
  }
}

setInterval(carregarHistorico, 5000)
carregarHistorico()