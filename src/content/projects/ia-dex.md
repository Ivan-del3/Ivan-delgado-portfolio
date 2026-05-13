---
title: "IA DEX"
img: "ia-dex/ia-dex.png"
order: 3

sections:
  - title: "IA Dex — Entrena tu propia IA local"
    text: |
      IA Dex es un chatbot entrenado con datos propios que funciona completamente en local, sin APIs de pago ni conexión a internet.
      El proyecto cubre todo el proceso: generación de datos, fine-tuning del modelo, conversión al formato de Ollama y despliegue como chat web.

      Como caso práctico se entrenó un asistente especializado en los 151 Pokémon de la primera generación usando fine-tuning con LoRA sobre el modelo Qwen2.5-1.5B.

  - title: "Preparación de los datos"
    text: |
      Los datos de entrenamiento son pares pregunta-respuesta en formato JSONL generados automáticamente desde los CSV de PokeAPI.
      El script genera entre 12 y 16 preguntas por Pokémon cubriendo tipo, estadísticas, habilidades, peso, altura y descripción, resultando en unos 2.800 ejemplos para los 151 Pokémon.

  - title: "Entrenamiento con LoRA"
    text: |
      El entrenamiento usa LoRA, una técnica que añade matrices de adaptación pequeñas sobre el modelo base en lugar de reentrenarlo completo, reduciendo drásticamente el uso de memoria y tiempo.
      Con 5 epochs la loss bajó de 2.26 a 0.37 en aproximadamente 8 horas de CPU.

  - title: "Conversión e integración con Ollama"
    text: |
      Tras el entrenamiento, el adaptador LoRA se fusiona con el modelo base y se convierte a formato GGUF con cuantización Q8_0 usando llama.cpp.
      El modelo resultante (~1.6 GB) se importa en Ollama con un Modelfile que define el idioma, la temperatura y el formato de respuesta.

  - title: "Chat web"
    text: |
      La interfaz es una página HTML estática que consulta la API REST de Ollama y muestra las respuestas en streaming.
      El prompt usa el mismo formato Pregunta/Respuesta con el que se entrenó el modelo para maximizar la precisión de las respuestas.

repository: "https://github.com/Ivan-del3/IA-DEX"

---
