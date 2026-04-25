let chartTempo
let labelsTempo = []
let valoresTempo = []

let ultimoValor = null
let ultimoTempo = null

async function carregarTempoReal() {
  try {
    const res = await fetch('/dados?nocache=' + Date.now())
    const data = await res.json()

    if (!data || data.length === 0) return

    const ultimo = data[data.length - 1]

    const valor = parseInt(ultimo[1])
    const tempo = ultimo[0]

    if (isNaN(valor)) return

    // evita duplicar ponto
    if (valor === ultimoValor && tempo === ultimoTempo) return

    ultimoValor = valor
    ultimoTempo = tempo

    labelsTempo.push(tempo)
    valoresTempo.push(valor)

    // mantém últimos 20 pontos
    if (labelsTempo.length > 20) {
      labelsTempo.shift()
      valoresTempo.shift()
    }

    // status
    document.getElementById("status").innerText = ultimo[2]

    if (!chartTempo) {
      chartTempo = new Chart(document.getElementById('graficoTempo'), {
        type: 'line',
        data: {
          labels: labelsTempo,
          datasets: [{
            label: 'Tempo Real',
            data: valoresTempo,
            tension: 0.3
          }]
        },
        options: {
          animation: false,
          scales: {
            y: {
              beginAtZero: false,
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
      chartTempo.data.labels = labelsTempo
      chartTempo.data.datasets[0].data = valoresTempo
      chartTempo.update()
    }

  } catch (error) {
    console.log("Erro:", error)
  }
}

setInterval(carregarTempoReal, 1000)
carregarTempoReal()