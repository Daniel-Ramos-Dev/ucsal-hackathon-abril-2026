import serial
import csv
from datetime import datetime
from config import PORT, BAUD_RATE, CSV_FILE, DEFAULT_LAT, DEFAULT_LNG

current_lat = DEFAULT_LAT
current_lng = DEFAULT_LNG

def update_coords(lat, lng):
    global current_lat, current_lng
    current_lat = lat
    current_lng = lng

def start_serial():
    while True:
        try:
            print("Conectando na serial...")
            ser = serial.Serial(PORT, BAUD_RATE)
            print("Conectado!")

            with open(CSV_FILE, 'a', newline='', buffering=1) as file:
                writer = csv.writer(file)

                while True:
                    linha = ser.readline().decode(errors='ignore').strip()

                    if linha and "," in linha:
                        try:
                            valor, status = linha.split(',')

                            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

                            writer.writerow([
                                timestamp,
                                valor,
                                status,
                                current_lat,
                                current_lng
                            ])

                            file.flush()  # 🔥 ESSENCIAL

                            print(timestamp, valor, status)

                        except Exception as parse_error:
                            print("Erro ao processar linha:", parse_error)

        except Exception as e:
            print("ERRO SERIAL:", e)