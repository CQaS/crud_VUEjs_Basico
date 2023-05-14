<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Crear un Empleado</div>
      <div class="card-body">
        <div class="container">
          <form v-on:submit.prevent="agregar">
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
            <button type="submit" class="btn btn-primary">Crear</button>
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
  methods: {
    agregar() {
      let a_enviar = {
        nombre: this.empleado.nombre,
        telefono: this.empleado.telefono,
        mail: this.empleado.mail,
      };

      fetch("http://localhost/tuds2021/api_php/?insertar=1", {
        method: "POST",
        body: JSON.stringify(a_enviar),
      })
        .then((res) => res.json())
        .then((datosRes) => {
          console.log(datosRes);
          window.location.href = "listarView";
        })
        .catch(console.log);
    },
  },
};
</script>
