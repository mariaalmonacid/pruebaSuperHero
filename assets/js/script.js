
  // constructor consultorio 

  function Consultorio(nombre, paciente) {
    var _nombre = nombre;
    var _paciente = paciente || [];

    Object.defineProperty(this, "getNombre", {
        get: function () {
            return _nombre;
        }
    })
     Object.defineProperty(this, "setNombre", {
        set: function (nombre) {
            _nombre = nombre;
        }
    })

    Object.defineProperty(this, "getPaciente", {
        get: function () {
            return _paciente;
        }
    })
     Object.defineProperty(this, "setPaciente", {
        set: function (paciente) {
            if(Array.isArray(_paciente)){
              _paciente.push(paciente);
            }else{
              _paciente = [_paciente];
              _paciente.push(paciente);
            }
        }
    })
}

// constructor paciente
function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;
    Object.defineProperty(this, "getNombre", {
        get: function () {
            return _nombre
        }
    }) 
     Object.defineProperty(this, "setNombre", {
        set: function (nombre) {
            _nombre = nombre
        }
    }) 
    Object.defineProperty(this, "getEdad", {
        get: function () {
            return _edad
        }
    })
    Object.defineProperty(this, "setEdad", {
        set: function (edad) {
            _edad = edad
        }

    })
    Object.defineProperty(this, "getRut", {
        get: function () {
            return _rut
        }
    })
    Object.defineProperty(this, "setRut", {
        set: function (rut) {
            _rut = rut
        }
    })
    Object.defineProperty(this, "getDiagnostico", {
        get: function () {
            return _diagnostico
        }
    })
    Object.defineProperty(this, "setDiagnostico", {
        set: function (diagnostico) {
            _diagnostico = diagnostico;
        }
    })
}



var paciente_1 = new Paciente("Mario Delgado", "32", "12.998.878-0", "diarrea cronica");
var paciente_2 = new Paciente("Matias Perez", "45", "12.956.978-0", "difteria");
var paciente_3 = new Paciente("Pedro Fuentes", "56", "10.776.878-0", "Covid-19(Sars-Cov2)");
var paciente_4 = new Paciente("Marcia Contreras", "62", "5.776.878-0", "torticolis");

var consultorio_1 = new Consultorio("Doña Juana", [paciente_1, paciente_2,paciente_3,paciente_4]);


Consultorio.prototype.agregarPacientes = function (paciente) {
  this.setPaciente = paciente;
}


Consultorio.prototype.getNombreConsultorio = function () {
    return this.getNombre;
}
Paciente.prototype.getNombrePaciente = function () {
    return this.getNombre;
}



Consultorio.prototype.mostrarDatos = function () {
    this.getPaciente.forEach(function (paciente, index) {
        console.log(`${index + 1}.- nombre: ${paciente.getNombre}`);
    })
}

Consultorio.prototype.buscarPaciente = function (nombre) {
  
  var found = this.getPaciente.filter(function(paciente){
    return paciente.getNombre == nombre;
  })

  console.log(found)
  if(found.length > 0){
    found.forEach(function(paciente, index){
      console.log(`${index+1}.- Nombre: ${paciente.getNombre}`)
    })
  }else{
    console.log("Paciente no encontrado")
  }

  
}



consultorio_1.mostrarDatos();

consultorio_1.buscarPaciente("Matias Perez");



