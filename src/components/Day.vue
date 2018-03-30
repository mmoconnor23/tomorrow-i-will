<template>
  <div>
    <div class="task-nav">
      <button class="day-previous-btn" @click="previousDay()">Previous</button>
      <div class="day-current">{{currentDay}}</div>
      <button class="day-next-btn" @click="nextDay()">Next</button>
    </div>
    <input id="task-input"
           v-model="message"
           placeholder="Add a task"
           @keyup.enter="addTask">
    <div v-for="task in currentTasks"
         class="task-item">
      <input type="checkbox" :id="task.id" v-model="task.isComplete">
      <label @dblclick="editTask(task)" :for="task.id">{{task.content}}</label>
      <button class="task-delete-btn" @click="removeTask(task)">X</button>
    </div>
  </div>
</template>


<option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>

<script>
import { uniqueId } from 'lodash';
import * as moment from 'moment';

export default {
  name: 'Day',
  data() {
    const tasks = {
      '3/29/2018': [
        {
          id: 'm1',
          content: 'this is the first task',
          isComplete: false,
        },
      ],
    };

    const today = moment().format('l');

    return {
      message: '',
      addTask: () => {
        if (!tasks[this.currentDay]) {
          tasks[this.currentDay] = [];
        }

        tasks[this.currentDay].push({
          id: uniqueId('m'),
          content: this.message,
          isComplete: false,
        });
        this.message = '';
        this.currentTasks = tasks[this.currentDay];
      },
      editTask: (task) => {
        // eslint-disable-next-line
        console.log('editing ', task);
      },
      removeTask: (task) => {
        tasks[this.currentDay].splice(tasks[this.currentDay].indexOf(task), 1);
      },
      previousDay: () => {
        this.currentDay = moment(this.currentDay).subtract(1, 'days').format('l');
        this.currentTasks = tasks[this.currentDay];
      },
      nextDay: () => {
        this.currentDay = moment(this.currentDay).add(1, 'days').format('l');
        this.currentTasks = tasks[this.currentDay];
      },
      currentDay: today,
      currentTasks: tasks[today],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.task-nav button {
  border: none;
  background-color: aquamarine;
  outline: none;
}

.task-nav button:hover {
  background-color: aqua;
}

.task-nav button:active {
  background-color: orange;
}

#task-input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: lightgray;
}

#task-input:focus {
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: blueviolet;
  outline: none;
}

.task-item {
  display: flex;
  height: 30px;
  align-items: center;
}

.task-item input {
  margin-right: 10px;
}

.task-item label {
  flex: 1;
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.task-item:hover {
  background-color: #d5c7f1;
}

.task-delete-btn {
  display: none;
}

.task-item:hover .task-delete-btn {
  display: block;
  border: none;
  background-color: #d5c7f1;
  color: hotpink;
}

.task-item .task-delete-btn:hover {
  color: deeppink;
}
</style>
