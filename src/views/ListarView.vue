<template>
  <div class="container">
    <br />
    <router-link to="/CrearView" class="btn btn-success"
      >Crear Nuevo</router-link
    >
    <div class="card">
      <div class="card-header">Empleados</div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-primary">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">E-mail</th>
                <th scope="col">Tel.</th>
                <th scope="col">LINK</th>
              </tr>
            </thead>
            <tbody>
              <tr class="" v-for="empleado in empleados" :key="empleado.id">
                <td scope="row">{{ empleado.id }}</td>
                <td>{{ empleado.nombre }}</td>
                <td>{{ empleado.mail }}</td>
                <td>{{ empleado.telefono }}</td>
                <td>
                  <router-link
                    :to="{ name: 'EditarView', params: { id: empleado.id } }"
                    class="badge bg-info"
                    >EDITAR</router-link
                  >
                  <a
                    href="#"
                    class="badge bg-primary"
                    v-on:click="borrar(empleado.id)"
                    >BORRAR</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      empleados: [],
    };
  },
  created: function () {
    this.consultar();
  },
  methods: {
    consultar() {
      fetch("http://localhost/tuds2021/api_php/")
        .then((res) => res.json())
        .then((datosRes) => {
          this.empleados = [];
          if (typeof datosRes[0].success === "undefined") {
            this.empleados = datosRes;
          }
        })
        .catch(console.log);
    },
    borrar(id) {
      console.log(id);

      fetch("http://localhost/tuds2021/api_php/?borrar=" + id)
        .then((res) => res.json())
        .then((datosRes) => {
          console.log(datosRes);
          window.location.href = "ListarView";
        })
        .catch(console.log);
    },
  },
};
</script>
