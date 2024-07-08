function calculate() {
  const percentageInput = parseFloat(document.getElementById('percentageInput').value);
  const percentageError = document.getElementById('percentageError');
  percentageError.innerText = '';

  if (isNaN(percentageInput) || percentageInput < 0) {
    alert('Por favor, introduce un valor válido para el porcentaje de fibras PET.');
    return;
  }

  if (percentageInput > 10) {
    percentageError.innerText = 'No está permitido un valor mayor a 10%.';
    return;
  }

  // Convertir el valor entero a decimal
  const x = percentageInput / 100;

  // Resistencia a la compresión
  const compressionStrength = 787.34 * x + 282.89;
  document.getElementById('compressionResult').innerText = `${compressionStrength.toFixed(2)} kg/cm²`;

  // Resistencia a la flexión
  const flexuralStrength = 189.41 * x + 40.018;
  document.getElementById('flexionResult').innerText = `${flexuralStrength.toFixed(2)} kg/cm²`;

  // Espesor de la losa
  const thickness = -47.716 * x + 16.246;
  document.getElementById('thicknessResult').innerText = `${thickness.toFixed(2)} cm`;

  // Costo por metro lineal
  const cost = 1864.9 * x + 452.67;
  document.getElementById('costResult').innerText = `${cost.toFixed(2)} nuevos soles`;

  drawConcreteChart(thickness);
}

function drawConcreteChart(thickness) {
  const canvas = document.getElementById('concreteChart');
  const ctx = canvas.getContext('2d');

  // Limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar la base marrón (20 cm)
  ctx.fillStyle = '#8B4513';
  ctx.fillRect(50, canvas.height - 40, 100, 40);

  // Dibujar la capa de concreto gris con el espesor calculado
  const concreteHeight = thickness * 10; // Escalar el espesor para que sea visible en el canvas
  ctx.fillStyle = '#808080';
  ctx.fillRect(50, canvas.height - 40 - concreteHeight, 100, concreteHeight);

  // Dibujar texto de la base y del concreto
  ctx.fillStyle = '#000000';
  ctx.font = '16px Arial';
  ctx.fillText('Base (20 cm)', 50, canvas.height - 10);
  ctx.fillText(`Concreto (${thickness.toFixed(2)} cm)`, 50, canvas.height - 50 - concreteHeight);
}
