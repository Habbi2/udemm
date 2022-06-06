import { TextField, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { MenuItem } from "@mui/material";

const AdminView = () => {
  const [falseForm, setFalseForm] = useState({
    datosPersonales: {
      apellidos: "prueba",
      nombres: "prueba",
      fechaNacimiento: "26/10/1998",
      sexo: "F",
    },
    lugarNacimiento: {
      paisNacimiento: {
        id: 493,
      },
      provinciaNacimiento: {
        id: 617,
      },
      localidadNacimiento: {
        id: 1624,
      },
      nacionalidadId: 493,
    },
    documentos: {
      tipoDocumento: "DNI",
      documento: "41589477",
      pasaporte: null,
      paisEmision: null,
    },
    domicilioParticular: {
      domicilio: "Joaquin v gonzalez",
      altura: "3393",
      piso: "1",
      depto: "a",
      pais: {
        id: 492,
      },
      provincia: {
        id: 322,
      },
      localidad: {
        id: 1023,
      },
      codigoPostal: "1417",
      telefono: "1535924465",
      telefono2: null,
      celular: "1535924465",
      email: "test_user_10622022@testuser.com",
    },
    datosAcademicosSecundario: {
      tipoSecundario: "SECU",
      nivelEducacion: "Secundario",
      institutoEducacion: {
        id: 13984,
      },
      titulo:
        "BACHILLER C/CAPACITACIÓN LABORAL COMO AUXILIAR EN GESTION EMPRESARIAL",
      calenTurno: 315,
      fechaEgresoSec: "28/10/2023",
      paisEdu: {
        id: 2,
      },
      provinciaEdu: {
        id: 1,
      },
      localidadEdu: {
        id: 62,
      },
    },
    planEstudio: {
      identificador: "ABO",
    },
    calendariosCursadas: {
      id: 256,
    },
    modalidadCursado: {
      id: 2,
    },
    isEquivalenciasUniv: false,
    medioConocimiento: "Alumnos/Graduados",
  });
  const [selectedCareer, setSelectedCareer] = useState("241");
  const [beggining, setBeggining] = useState([{ id: 1, turno: "Mañana" }]);
  const [highschools, setHighschools] = useState([]);
  const [localties, setLocalties] = useState([
    { id: 1316, nombre: "Colegiales" },
  ]);
  const [cities, setCities] = useState([
    { id: 56, nombre: "Ciudad de Buenos Aires" },
  ]);
  const [relationships, setRelationships] = useState([
    { id: 0, name: "Cónyugue" },
    { id: 1, name: "Hermano" },
    { id: 2, name: "Madre" },
    { id: 3, name: "Padre" },
    { id: 4, name: "Tutor" },
    { id: 5, name: "Otra Persona" },
  ]);
  const [mediums, setMediums] = useState([
    { id: 0, name: "Alumnos/Graduados" },
    { id: 1, name: "Amigos/Conocidos" },
    { id: 2, name: "Carteles en vía pública" },
    { id: 3, name: "Circula por la zona" },
    { id: 4, name: "Eventos en colegios secundarios" },
    { id: 5, name: "Expo Universidad" },
    { id: 6, name: "Guía de carreras" },
    { id: 7, name: "Otra Persona" },
    { id: 8, name: "Internet/Buscadores" },
    { id: 9, name: "Portales de búsqueda de personas" },
    { id: 10, name: "Profesionales/Docentes" },
    { id: 11, name: "Publicidad en medios gráficos" },
    { id: 12, name: "Radio" },
    { id: 13, name: "Redes sociales" },
    { id: 14, name: "Otros" },
  ]);
  const [studies, setStudies] = useState([
    { id: 0, name: "Con estudios secundarios" },
    { id: 1, name: "Sin estudios secundarios (Art. 7)" },
  ]);
  const [careers, setCareers] = useState([
    {
      nombreCarrera: "Licenciatura en Administración de Sistemas",
      identificador: "241",
    },
  ]);
  const [countries, setCountries] = useState([
    {
      id: 2,
      nombre: "Argentina",
    },
  ]);
  const [gender, setGender] = useState([
    { id: "F", name: "Femenino" },
    { id: "M", name: "Masculino" },
    { id: "O", name: "Otro" },
  ]);
  const [modalities, setModalities] = useState([
    { id: 0, name: "Modalidad Presencial" },
    { id: 1, name: "Modalidad Virtual" },
  ]);
  const [turn, setTurn] = useState([
    { id: 0, name: "Mañana" },
    { id: 1, name: "Noche" },
  ]);
  const [equivalencies, setEquivalencies] = useState([
    { id: 0, name: "Si" },
    { id: 1, name: "No" },
  ]);
  const [beginning, setBeginning] = useState([
    { id: 0, name: "Agosto 2022 (2° cuatrimestre)" },
  ]);
  const [form, setForm] = useState({
    datosPersonales: {
      nombres: "",
      apellidos: "",
      fechaNacimiento: "",
      sexo: "M",
    },
    lugarNacimiento: {
      paisNacimiento: {
        id: 2,
      },
      provinciaNacimiento: {
        id: 56,
      },
      localidadNacimiento: {
        id: 1316,
      },
      nacionalidadId: 2,
    },
    documentos: {
      tipoDocumento: "DNI",
      documento: "",
      pasaporte: null,
      paisEmision: 2,
    },
    domicilioParticular: {
      domicilio: "",
      altura: "",
      piso: "",
      depto: "",
      pais: {
        id: 492,
      },
      provincia: {
        id: 322,
      },
      localidad: {
        id: 1023,
      },
      codigoPostal: "",
      telefono: "",
      telefono2: null,
      celular: "",
      email: "",
    },
    datosAcademicosSecundario: {
      tipoSecundario: "SECU",
      nivelEducacion: "Secundario",
      institutoEducacion: {
        id: 13984,
      },
      titulo:
        "BACHILLER C/CAPACITACIÓN LABORAL COMO AUXILIAR EN GESTION EMPRESARIAL",
      calenTurno: 315,
      fechaEgresoSec: "",
      paisEdu: {
        id: 2,
      },
      provinciaEdu: {
        id: 1,
      },
      localidadEdu: {
        id: 62,
      },
    },
    planEstudio: {
      identificador: "ABO",
    },
    calendariosCursadas: {
      id: 256,
    },
    modalidadCursado: {
      id: 2,
    },
    isEquivalenciasUniv: false,
    medioConocimiento: "",
  });

  const [state, setState] = useState({
    error: "",
    showPassword: false,
    style: { m: 1, width: "18vw" },
    inputStyle: {
      marginRight: "0.5vw",
      marginTop: "1vh",
      marginBottom: "2vh",
      width: "12vw",
      height: "5vh",
    },
  });

  useEffect(() => {
    async function setStates() {
      const careersList = await axios.get(
        "https://academic-bankend-spq6ut2ogq-rj.a.run.app/api/v1/solicitud/carreras"
      );
      const countriesList = await axios.get(
        "https://academic-bankend-spq6ut2ogq-rj.a.run.app/api/pais"
      );
      const modalityList = await axios.get(
        `https://academic-bankend-spq6ut2ogq-rj.a.run.app/api/v1/solicitud/titulos/incioCursada`
      );
      // const modalitiesList = await axios.get(
      //   "https://academic-bankend-spq6ut2ogq-rj.a.run.app/api/v1/solicitud/carreras"
      // );
      // const highschoolsList = await axios.get(
      //   "https://academic-bankend-spq6ut2ogq-rj.a.run.app/api/v1/solicitud/colegios"
      // );
      // setHighschools(highschoolsList.data);
      setCareers(careersList.data);
      setCountries(countriesList.data);
      setBeginning(modalityList.data);
    }
    setStates();
  }, []);

  useEffect(() => {
    async function setModalities() {
      const modalityList = await axios.get(
        `https://academic-bankend-spq6ut2ogq-rj.a.run.app/api/v1/solicitud/modalidadCursado/${selectedCareer}`
      );
      setBeggining(modalityList.data);
    }
    setModalities();
  }, [selectedCareer]);

  // useEffect(() => {
  //   async function setBeginning() {
  //     const modalityList = await axios.get(
  //       `https://academic-bankend-spq6ut2ogq-rj.a.run.app/api/v1/solicitud/titulos`
  //     );
  //     setBeginning(modalityList);
  //   }
  //   setBeginning();
  // }, []);

  console.log(mediums);
  console.log(beginning);

  useEffect(() => {
    async function setcity() {
      const citiesList = await axios.get(
        `https://academic-bankend-spq6ut2ogq-rj.a.run.app/api/provincia/${form.lugarNacimiento.paisNacimiento.id}`
      );
      setCities(citiesList.data);
    }
    setcity();
  }, [form.lugarNacimiento.paisNacimiento.id]);

  useEffect(() => {
    async function setProvincies() {
      const localtiesList = await axios.get(
        `https://academic-bankend-spq6ut2ogq-rj.a.run.app/api/localidad/${form.lugarNacimiento.provinciaNacimiento.id}`
      );
      setLocalties(localtiesList.data);
    }
    setProvincies();
  }, [form.lugarNacimiento.provinciaNacimiento.id]);

  const createTextField = (name, label, sx, index, place) => {
    return (
      <TextField
        key={index}
        sx={sx}
        error={state.error === name}
        label={label}
        name={name}
        variant="outlined"
        onChange={(e) => handleChange(e, place)}
        helperText={state.error === name ? "Respuesta Inválida" : ""}
      ></TextField>
    );
  };

  const handleChange = (e, place) => {
    setForm({
      ...form,
      [place]: { ...form[place], [e.target.name]: e.target.value },
    });
  };

  const handleChangeMediums = (e) => {
    setForm({
      ...form,
      medioConocimiento: e.target.value,
    });
  };

  const createButtons = (names, labels, sx, place = "datosPersonales") => {
    return names.map((v, i) => {
      return createTextField(names[i], labels[i], sx, i, place);
    });
  };

  const handleEmptyValue = (form) => {
    setState({ ...state, error: "" });
    const keys = Object.keys(form);
    const values = Object.values(form);
    for (let i = 0; i < values.length; i++) {
      if (values[i] === "") {
        setState({ ...state, error: keys[i] });
        return false;
      }
    }
    return true;
  };

  console.log(falseForm, form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handleEmptyValue(form.datosPersonales);
    // if (handleEmptyValue(form.datosPersonales))
    //   handleEmptyValue(form.documentos);
    // if (
    //   handleEmptyValue(form.datosPersonales) &&
    //   handleEmptyValue(form.documentos)
    // )
    //   handleEmptyValue(form.domicilioParticular);

    // if (
    //   handleEmptyValue(form.datosPersonales) &&
    //   handleEmptyValue(form.documentos) &&
    //   handleEmptyValue(form.domicilioParticular)
    // ) {
    axios.post(
      "https://academic-bankend-spq6ut2ogq-rj.a.run.app/api/v1/solicitud/guardar",
      falseForm
    );
    // }
  };

  const handleChangePersonal = (e) => {
    setForm({
      ...form,
      datosPersonales: {
        ...form.datosPersonales,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleChangeDocument = (e) => {
    setForm({
      ...form,
      documentos: {
        ...form.documentos,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleChangeCountry = (e) => {
    if (e.target.name === "nacionalidadID") {
      setForm({
        ...form,
        lugarNacimiento: {
          ...form.lugarNacimiento,
          [e.target.name]: e.target.value,
        },
      });
      return;
    }
    setForm({
      ...form,
      lugarNacimiento: {
        ...form.lugarNacimiento,
        [e.target.name]: { id: e.target.value },
      },
    });
  };

  const handleChangeCountry2 = (e) => {
    setForm({
      ...form,
      domicilioParticular: {
        ...form.domicilioParticular,
        [e.target.name]: { id: e.target.value },
      },
    });
  };

  const handleEquivalencies = (e) => {
    if (e.target.value === "Si") {
      setForm({
        ...form,
        isEquivalenciasUniv: true,
      });
    } else {
      setForm({
        ...form,
        isEquivalenciasUniv: false,
      });
    }
  };

  const handleChangeCountry3 = (e) => {
    setForm({
      ...form,
      datosAcademicosSecundario: {
        ...form.datosAcademicosSecundario,
        [e.target.name]: { id: e.target.value },
      },
    });
  };

  const handleCareerChange = (e) => {
    setSelectedCareer(e.target.value);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        marginLeft: "15vw",
        marginRight: "10vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <Box>
          <h1>SOLICITUD DE ADMISIÓN</h1>
          <h3>Datos de la carrera elegida</h3> {}
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            label="Carrera"
            defaultValue={241}
            onChange={(e) => handleCareerChange(e)}
            helperText="Elegí tu carrera"
          >
            {careers.map((value, index) => (
              <MenuItem key={index} value={value.identificador}>
                {value.nombreCarrera}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            label="Modalidad de cursada (*)"
            defaultValue={0}
          >
            {modalities.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            label="Turno Elegido (*)"
            defaultValue={1}
          >
            {beggining.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.turno}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            label="Inicio de cursada (*)"
            defaultValue={0}
          >
            {beginning.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            label="Solicita equivalencias (*)"
            defaultValue={1}
            onChange={(e) => handleEquivalencies(e)}
          >
            {equivalencies.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.name}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box>
          <h3>Datos Personales</h3>
          <p>Datos Identificatorios</p>
          <Box>
            {createButtons(
              ["nombres", "apellidos"],
              ["Nombre (*)", "Apellido (*)"],
              state.inputStyle
            )}
          </Box>
          <Box>
            {createButtons(
              ["fechaNacimiento"],
              ["Fecha de nacimiento (*)"],
              state.inputStyle
            )}
            <TextField
              id="outlined-select-career"
              sx={state.inputStyle}
              select
              name="sexo"
              label="Género (*)"
              defaultValue={"M"}
              onChange={(e) => handleChangePersonal(e)}
            >
              {gender.map((value, index) => (
                <MenuItem key={index} value={value.id}>
                  {value.name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <p>Lugar de Nacimiento</p>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            name="paisNacimiento"
            label="País (*)"
            defaultValue={2}
            onChange={(e) => handleChangeCountry(e)}
          >
            {countries.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            name="provinciaNacimiento"
            label="Provincia (*)"
            defaultValue={56}
            onChange={(e) => handleChangeCountry(e)}
          >
            {cities.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            name="localidadNacimiento"
            label="Localidad (*)"
            defaultValue={1316}
            onChange={(e) => handleChangeCountry(e)}
          >
            {localties.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-nacionality"
            sx={state.inputStyle}
            name="nacionalidadID"
            select
            label="Nacionalidad (*)"
            defaultValue={2}
            onChange={(e) => handleChangeCountry(e)}
          >
            {countries.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box>
          <p>
            Documentos: Ingrese número sin puntos, sin guiones y sin espacios.
          </p>
          {createButtons(
            ["documento"],
            ["DNI (*)"],
            state.inputStyle,
            "documentos"
          )}
          <TextField
            id="outlined-select-nacionality"
            sx={state.inputStyle}
            name="paisEmision"
            select
            label="Emitido por (*)"
            defaultValue={2}
            onChange={(e) => handleChangeDocument(e)}
          >
            {countries.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box>
          <h3>Domicilio Particular</h3>
          {createButtons(
            ["domicilio", "altura", "piso", "depto"],
            ["Calle (*)", "Número (*)", "Piso", "Dpto"],
            state.inputStyle,
            "domicilioParticular"
          )}
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            name="pais"
            label="País (*)"
            defaultValue={2}
            onChange={(e) => handleChangeCountry2(e)}
          >
            {countries.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            name="provincia"
            label="Provincia (*)"
            defaultValue={56}
            onChange={(e) => handleChangeCountry2(e)}
          >
            {cities.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            name="localidad"
            label="Localidad (*)"
            defaultValue={1316}
            onChange={(e) => handleChangeCountry2(e)}
          >
            {localties.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
          {createButtons(
            ["codigoPostal"],
            ["Código Postal"],
            state.inputStyle,
            "domicilioParticular"
          )}
          {createButtons(
            ["telefono", "celular", "email"],
            ["Teléfono (*)", "Celular (*)", "E-mail (*)"],
            state.inputStyle,
            "domicilioParticular"
          )}
        </Box>
        <Box>
          <h3>Datos Académicos</h3>
          <TextField
            id="outlined-select-nacionality"
            sx={state.inputStyle}
            name="studies"
            select
            label="Seleccione una opción (*)"
            defaultValue={0}
          >
            {studies.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.name}
              </MenuItem>
            ))}
          </TextField>
          {createButtons(
            ["institutoEducacion"],
            ["Colegio (*)"],
            state.inputStyle,
            "datosAcademicosSecundario"
          )}
          <Box>
            {createButtons(
              ["titulo", "fechaEgresoSec"],
              ["Título obtenido o por obtener (*)", "Fecha de egreso (*)"],
              state.inputStyle,
              "datosAcademicosSecundario"
            )}
          </Box>
          <Box>
            <TextField
              id="outlined-select-career"
              sx={state.inputStyle}
              select
              name="paisEdu"
              label="País (*)"
              defaultValue={2}
              onChange={(e) => handleChangeCountry3(e)}
            >
              {countries.map((value, index) => (
                <MenuItem key={index} value={value.id}>
                  {value.nombre}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-career"
              sx={state.inputStyle}
              select
              name="provinciaEdu"
              label="Provincia (*)"
              defaultValue={56}
              onChange={(e) => handleChangeCountry3(e)}
            >
              {cities.map((value, index) => (
                <MenuItem key={index} value={value.id}>
                  {value.nombre}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-career"
              sx={state.inputStyle}
              select
              name="localidadEdu"
              label="Localidad (*)"
              defaultValue={1316}
              onChange={(e) => handleChangeCountry3(e)}
            >
              {localties.map((value, index) => (
                <MenuItem key={index} value={value.id}>
                  {value.nombre}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <TextField
            id="outlined-select-nacionality"
            sx={state.inputStyle}
            name="Mediums"
            select
            label="Medio por el cual se enteró de la existencia de la UdeMM (*)"
            defaultValue={0}
            onChange={(e) => handleChangeMediums(e)}
          >
            {mediums.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.name}
              </MenuItem>
            ))}
          </TextField>
          <p>(*) Datos obligatorios para continuar.</p>
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2, mb: 5 }}
          onClick={handleSubmit}
        >
          Enviar Solicitud
        </Button>
      </Box>
    </Box>
  );
};

export default AdminView;
