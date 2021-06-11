export const getStatus = (Status) => {
  let res = "";
  switch (Status) {
    case "P":
      res = "Pendiente";
      break;
    case "A":
      res = "Agendada";
      break;
    case "R":
      res = "Reagendada";
      break;
    case "S":
      res = "Suspendida";
      break;
    case "E":
      res = "Emitida";
      break;
    case "F":
      res = "Finalizada";
      break;
    case "K":
      res = "Corte de Señal";
      break;
    case "N":
      res = "Reconexion";
      break;
    case "C":
      res = "Cancelada";
      break;
  }

  return res;
};

export const getOrdenTpo = (Tpo) => {
  let res = "";
  switch (Tpo) {
    case "I":
      res = "Instalacion";
      break;
    case "D":
      res = "Desconexion";
      break;
    case "S":
      res = "Servicio";
      break;
    case "E":
      res = "Retiro";
      break;
    case "R":
      res = "Reclamo";
      break;
    case "K":
      res = "Corte";
      break;
    case "U":
      res = "Reconexion";
      break;
  }

  return res;
};

export const getOrdenGen = (Gen) => {
  let res = "";
  switch (Gen) {
    case "C":
      res = "Contrato";
      break;
    case "N":
      res = "Normal";
      break;
    case "Z":
      res = "Mudanza";
      break;
    case "M":
      res = "Morosidad";
      break;
    case "Q":
      res = "Cambio De Producto ";
      break;
    case "S":
      res = "Servicio";
      break;
    case "P":
      res = "Cambio De Plan";
      break;
    case "T":
      res = "Tap";
      break;
    case "A":
      res = "Acometida";
      break;
    case "V":
      res = "Masivo";
      break;
    case "R":
      res = "Reconexion";
      break;
  }

  return res;
};
