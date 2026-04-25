Monitoramento Inteligente da Qualidade do Ar

Objetivo do Software
O projeto tem como objetivo desenvolver um sistema inteligente de monitoramento da qualidade do ar em tempo real, capaz de identificar focos de poluição e fornecer dados precisos sobre as condições ambientais de uma determinada região.

A coleta de dados é realizada por meio de um sistema embarcado baseado em Arduino, equipado com sensores capazes de detectar a presença de gases poluentes e estimar o nível geral de poluição do ambiente. Esses dados são enviados para um sistema central, onde são processados, organizados e apresentados por meio de dashboards e visualizações em tempo real.

A proposta do sistema é transformar dados brutos em informações claras e acionáveis, permitindo a identificação de áreas críticas e facilitando a tomada de decisão.

> Extensão do Projeto:** Propõe-se uma segunda etapa voltada à otimização da coleta e tratamento de resíduos. A partir dos dados gerados, é possível mapear regiões com maior incidência de poluentes e planejar rotas mais eficientes de coleta, reduzindo custos operacionais, tempo de deslocamento e impacto ambiental.

---

Diferenciais
- **Monitoramento em tempo real** da qualidade do ar.
- **Baixo custo de implementação** (inferior a R$ 300).
- **Uso de hardware acessível** (Arduino).
- **Sustentabilidade:** Estrutura física baseada em reaproveitamento de componentes.
- **Escalabilidade:** Possibilidade de expansão para sistemas de coleta inteligente.

---

Escopo do Hackathon
Para o contexto do hackathon, o foco do desenvolvimento está nas seguintes frentes:
1. Sistema embarcado para coleta de dados ambientais.
2. Backend para processamento e organização dos dados.
3. Interface para visualização em tempo real.

*Nota: A etapa de coleta física e reciclagem será considerada como evolução futura do projeto.*

---

Arquitetura do Sistema
O fluxo de dados do sistema segue a seguinte estrutura:

`Data Source (Arduino)` ➔ `Máquina Local` ➔ `Servidor (Software)` ➔ `Visualização (Dashboard / Cliente)`

---

## 📋 Requisitos

### 🛠️ Hardware
- Arduino Uno
- Sensor MQ-135
- LEDs indicadores (Verde, Amarelo e Vermelho)
- Jumpers (Macho e Fêmea)
- Fonte de energia reutilizada
- Cabo USB para alimentação e comunicação

Software

Backend
- Leitura e interpretação dos dados enviados pelo Arduino.
- Classificação dos níveis de poluição (Satisfatório, Moderado, Crítico).
- Armazenamento dos dados em formato estruturado (CSV).
- Geração de dados para visualização em tempo real.
- Organização das informações por tempo e localização.

Frontend
- Dashboard com gráficos em tempo real.
- Visualização histórica dos dados coletados.
- Interface simples e objetiva para interpretação dos dados.
- Estrutura preparada para integração com mapas e múltiplos sensores.

---

Design e Identidade Visual
- Desenvolvimento de identidade visual alinhada ao tema ambiental.
- Definição de paleta de cores coerente com o propósito do projeto.
- Criação de logo, nome e slogan.
- Foco em **clareza, legibilidade e usabilidade**.
