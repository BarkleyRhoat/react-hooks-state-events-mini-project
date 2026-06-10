import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
    const [selectedCategory, setSelectedCategory] = React.useState("All");
		const [tasks, setTasks] = React.useState(TASKS);

		const visibleTasks =
			selectedCategory === "All"
				? tasks
				: tasks.filter((task) => task.category === selectedCategory);

		function handleCategoryChange(category) {
			setSelectedCategory(category);
		}

		function handleTaskFormSubmit(newTask) {
			setTasks([...tasks, newTask]);
    }
  function handleDeleteTask(taskToDelete) {
		setTasks(tasks.filter((task) => task.text !== taskToDelete.text));
	}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList
        tasks={visibleTasks}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
