import moment from 'moment';

/*** MAP ***/

//findElement(contenidosDB, 'libroId', 'JamahSdOt8u2LzVOP2jmee');
//Ej: busca en el array un objeto.libroId === 'JamahSdOt8u2LzVOP2jmee'
export function findElement(array, key, value) {
  const registro = new Map(array.map((x) => [x[key], x]));
  return registro.get(value);
}

// searchMatch(librosDB, 'id', contenidosDB, 'libroId');
//Ej: busca en array2 el objeto2.libroId === objeto1.id en array1, devuelve el encontrado en array o undefined
export function searchMatch(array1, key1, array2, key2) {
  const registroMap = new Map();
  let aux = [];

  array2.forEach((x) => {
    registroMap.set(x[key2], x);
  });

  array1.forEach((y) => {
    const busqueda = registroMap.get(y[key1]);
    busqueda ? aux.push(busqueda) : undefined;
  });

  return aux;
}

/*** SORT ***/

export function sortDateCreated(a, b) {
  if (a.data && b.data) {
    var timeA = a.data.dateCreated.seconds
      ? a.data.dateCreated.seconds
      : a.data.dateCreated._seconds;
    var timeB = b.data.dateCreated.seconds
      ? b.data.dateCreated.seconds
      : b.data.dateCreated._seconds;
  } else {
    var timeA = a.dateCreated.seconds
      ? a.dateCreated.seconds
      : a.dateCreated._seconds;
    var timeB = b.dateCreated.seconds
      ? b.dateCreated.seconds
      : b.dateCreated._seconds;
  }

  if (moment.unix(timeB).diff(moment.unix(timeA), 'seconds') < 0) {
    return 1;
  } else if (moment.unix(timeB).diff(moment.unix(timeA), 'seconds') > 0) {
    return -1;
  } else {
    return 0;
  }
}

export function sortOrder(x, y) {
  if (x.data && y.data) {
    var orderX = x.data.order ? x.data.order : 0;
    var orderY = y.data.order ? y.data.order : 0;
  } else {
    var orderX = x.order ? x.order : 0;
    var orderY = y.order ? y.order : 0;
  }

  if (orderX < orderY) return -1;
  if (orderX > orderY) return 1;
  return 0;
}

export function sortLastName(x, y) {
  if (x.data && y.data) {
    var nameX = x.data.lastName ? x.data.lastName.toLowerCase() : '';
    var nameY = y.data.lastName ? y.data.lastName.toLowerCase() : '';
  } else {
    var nameX = x.lastName ? x.lastName.toLowerCase() : '';
    var nameY = y.lastName ? y.lastName.toLowerCase() : '';
  }

  if (nameX < nameY) return -1;
  if (nameX > nameY) return 1;
  return 0;
}

export function sortEmail(x, y) {
  if (x.data && y.data) {
    var emailX = x.data.email ? x.data.email.toLowerCase() : '';
    var emailY = y.data.email ? y.data.email.toLowerCase() : '';
  } else {
    var emailX = x.email ? x.email.toLowerCase() : '';
    var emailY = y.email ? y.email.toLowerCase() : '';
  }

  if (emailX < emailY) return -1;
  if (emailX > emailY) return 1;
  return 0;
}

export function sortType(x, y) {
  if (x.data && y.data) {
    var typeX = x.data.type ? x.data.type.toLowerCase() : '';
    var typeY = y.data.type ? y.data.type.toLowerCase() : '';
  } else {
    var typeX = x.type ? x.type.toLowerCase() : '';
    var typeY = y.type ? y.type.toLowerCase() : '';
  }

  if (typeX === 'teacher') typeX = 'docente';
  if (typeX === 'student') typeX = 'estudiante';
  if (typeY === 'teacher') typeY = 'docente';
  if (typeY === 'student') typeY = 'estudiante';
  if (typeX < typeY) return -1;
  if (typeX > typeY) return 1;
  return 0;
}

export function sortCollege(x, y) {
  if (x.data && y.data) {
    var collegeX = x.data.collegeName ? x.data.collegeName.toLowerCase() : '';
    var collegeY = y.data.collegeName ? y.data.collegeName.toLowerCase() : '';
  } else {
    var collegeX = x.collegeName ? x.collegeName.toLowerCase() : '';
    var collegeY = y.collegeName ? y.collegeName.toLowerCase() : '';
  }

  if (collegeX < collegeY) return -1;
  if (collegeX > collegeY) return 1;
  return 0;
}

export function sortName(x, y) {
  if (x.data && y.data) {
    var nameX = x.data.name ? x.data.name.toLowerCase() : '';
    var nameY = y.data.name ? y.data.name.toLowerCase() : '';
  } else {
    var nameX = x.name ? x.name.toLowerCase() : '';
    var nameY = y.name ? y.name.toLowerCase() : '';
  }

  if (nameX < nameY) return -1;
  if (nameX > nameY) return 1;
  return 0;
}

export function sortLabel(x, y) {
  let labelX = x.label ? x.label.toLowerCase() : '';
  let labelY = y.label ? y.label.toLowerCase() : '';

  if (labelX < labelY) return -1;
  if (labelX > labelY) return 1;
  return 0;
}

export function sortFileType(x, y) {
  if (x.data && y.data) {
    var fileX = x.data.fileType ? x.data.fileType.toLowerCase() : '';
    var fileY = y.data.fileType ? y.data.fileType.toLowerCase() : '';
  } else {
    var fileX = x.fileType ? x.fileType.toLowerCase() : '';
    var fileY = y.fileType ? y.fileType.toLowerCase() : '';
  }

  if (fileX < fileY) return -1;
  if (fileX > fileY) return 1;
  return 0;
}

export function sortPercent(x, y) {
  if (x.data && y.data) {
    var percX = x.data.correctPercent ? x.data.correctPercent : 0;
    var percY = y.data.correctPercent ? y.data.correctPercent : 0;
  } else {
    var percX = x.correctPercent ? x.correctPercent : 0;
    var percY = y.correctPercent ? y.correctPercent : 0;
  }

  if (percX < percY) return -1;
  if (percX > percY) return 1;
  return 0;
}

export function sortLevelName(x, y) {
  if (x.data && y.data) {
    var levelX = x.data.levelName ? x.data.levelName.toLowerCase() : 0;
    var levelY = y.data.levelName ? y.data.levelName.toLowerCase() : 0;
  } else {
    var levelX = x.levelName ? x.levelName.toLowerCase() : 0;
    var levelY = y.levelName ? y.levelName.toLowerCase() : 0;
  }

  if (levelX < levelY) return -1;
  if (levelX > levelY) return 1;
  return 0;
}

export function sortLevelOrder(x, y) {
  if (x.data && y.data) {
    var levelX = x.data.levelOrder ? x.data.levelOrder : 0;
    var levelY = y.data.levelOrder ? y.data.levelOrder : 0;
  } else {
    var levelX = x.levelOrder ? x.levelOrder : 0;
    var levelY = y.levelOrder ? y.levelOrder : 0;
  }

  if (levelX < levelY) return -1;
  if (levelX > levelY) return 1;
  return 0;
}

export function sortUnitName(x, y) {
  if (x.data && y.data) {
    var unitX = x.data.unitName ? x.data.unitName.toLowerCase() : 0;
    var unitY = y.data.unitName ? y.data.unitName.toLowerCase() : 0;
  } else {
    var unitX = x.unitName ? x.unitName.toLowerCase() : 0;
    var unitY = y.unitName ? y.unitName.toLowerCase() : 0;
  }

  if (unitX < unitY) return -1;
  if (unitX > unitY) return 1;
  return 0;
}

export function sortNumberQuestion(x, y) {
  var numberX = x.numero ? x.numero : x.pregunta.numero;
  var numberY = y.numero ? y.numero : x.pregunta.numero;

  if (numberX < numberY) return -1;
  if (numberX > numberY) return 1;
  return 0;
}
