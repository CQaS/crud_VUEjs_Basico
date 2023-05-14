<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Actualizar un Empleado</div>
      <div class="card-body">
        <div class="container">
          <form v-on:submit.prevent="actualizar">
            <div class="form-group">
              <label for="Nombre">Nombre</label>
              <input
                v-model="empleado.nombre"
                type="text"
                name="Nombre"
                id="Nombre"
                class="form-control"
                placeholder="Nombre"
                aria-describedby="helpId"
              />
              <small id="helpId" class="text-muted">Escribe tu Nombre</small>
            </div>
            <div class="form-group">
              <label for="Telefono">Telefono</label>
              <input
                v-model="empleado.telefono"
                type="tel"
                name="Telefono"
                id="Telefono"
                class="form-control"
                placeholder="Telefono"
                aria-describedby="helpId"
              />
              <small id="helpId" class="text-muted">Escribe tu Telefono</small>
            </div>
            <div class="form-group">
              <label for="Mail">Mail</label>
              <input
                v-model="empleado.mail"
                type="email"
                name="Mail"
                id="Mail"
                class="form-control"
                placeholder="Mail"
                aria-describedby="helpId"
              />
              <small id="helpId" class="text-muted">Escribe tu Mail</small>
            </div>
            <button type="submit" class="btn btn-primary">Actualizar</button>
            <router-link :to="{ name: 'ListarView' }" class="btn btn-danger"
              >Cancelar</router-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      empleado: {},
    };
  },
  created: function () {
    this.obtenerEmpleado_ID();
  },
  methods: {
    obtenerEmpleado_ID() {
      fetch(
        "http://localhost/tuds2021/api_php/?consultar=" + this.$route.params.id
      )
        .then((res) => res.json())
        .then((datosRes) => {
          console.log(datosRes);
          this.empleado = datosRes[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    actualizar() {
      let a_enviar = {
        id: this.$route.params.id,
        nombre: this.empleado.nombre,
        telefono: this.empleado.telefono,
        mail: this.empleado.mail,
      };

      fetch(
        "http://localhost/tuds2021/api_php/?actualizar=" +
          this.$route.params.id,
        {
          method: "POST",
          body: JSON.stringify(a_enviar),
        }
      )
        .then((res) => res.json())
        .then((datosRes) => {
          console.log(datosRes);
          window.location.href = "../listarView";
        })
        .catch(console.log);
    },
  },
};
</script>
