import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_GOAL,
  REMOVE_GOAL
} from "./constants.js";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo
});
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});

export const addGoal = (goal) => ({
  type: ADD_GOAL,
  goal
});
export const removeGoal = (id) => ({
  type: REMOVE_GOAL,
  id
});
