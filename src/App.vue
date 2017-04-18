
<template>
  <div id="app">
    <div class="wrapper">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Template • TodoMVC</title>

        <!-- CSS overrides - remove if you don't need it -->

      </head>
      <body>
      <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <input class="new-todo" placeholder="What needs to be done?" autofocus v-model="newTodo"
          @keyup.enter="addTodo"


          >
        </header>
        <!-- This section should be hidden by default and shown when there are todos -->
        <section class="main">
          <input class="toggle-all" type="checkbox">
          <label for="toggle-all">Mark all as complete</label>
          <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
            <li   :class="{completed : item.isFinished}"  v-for="item in items">
              <div class="view">
                <input class="toggle" type="checkbox"  v-model="item.isFinished">
                <label @dblclick="editItem(item)">{{item.title}}</label>
                <button class="destroy" @click="removeTodo(item)"></button>
              </div>
              <input class="edit" value="Create a TodoMVC template" >
            </li>
            <li>
              <!--<div class="view">-->
                <!--<input class="toggle" type="checkbox">-->
               <!---->
                <!--<button class="destroy"></button>-->
              <!--</div>-->
              <input class="edit" value="Rule the web">
            </li>
          </ul>
        </section>
        <!-- This footer should hidden by default and shown when there are todos -->

      </section>


      </body>
    </div>
  </div>
</template>

<script>
import index from "../static/css/index.css"
import store from "./store"

  export default{
    name: "app",
  data:function () {
    return{
        newTodo:"",
      editedTodo: null,
      items:store.fetch(),
    }
  },
    watch:{
        deep:true,
      handler: store.save
    },
    methods:{
        addTodo:function () {
         this.items.push({title:this.newTodo,isFinished:false});
          this.newTodo=""
        },
      removeTodo:function (item) {
        var index = this.items.indexOf(item);
        this.items.splice(index, 1);
      },
    
    

     
    }

  }

</script>

<style>

  [v-cloak] { display: none; }
</style>
