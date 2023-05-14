<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link class="nav-link active" aria-current="page" to="/"
        >Home</router-link
      >
    </li>
    <li class="nav-item">
      <router-link to="/CrearView" class="nav-link">crear</router-link>
    </li>
    <li class="nav-item disabled">
      <router-link to="/EditarView" class="nav-link">editar</router-link>
    </li>
    <li class="nav-item disabled">
      <router-link to="/ListarView" class="nav-link">listar</router-link>
    </li>
  </ul>

  <router-view />
</template>
