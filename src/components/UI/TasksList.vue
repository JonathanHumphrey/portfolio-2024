<script setup>

/* REQS
- Display tasks in a list
- Seperate completed and outstanding tasks
- 
*/
import Card from './Card.vue';
import TextBlock from './TextBlock.vue'

const tasks = [
  {
    title: 'Prepare Budget Report',
    completed: false,
    content: "Prepare the financial budget report for Q3.",
    dateSubmitted: "10/01/2024",
    dueDate: "10/15/2024",
    origin: "Finance Department, Main Office",
    destination: "Executive Office, Main Office"
  },
  {
    title: 'Organize Team Meeting',
    completed: true,
    content: "Organize a meeting to discuss the upcoming project roadmap.",
    dateSubmitted: "9/25/2024",
    dueDate: "9/27/2024",
    origin: "Project Management Office, 2nd Floor",
    destination: "Conference Room, 3rd Floor"
  },
  {
    title: 'Develop Marketing Plan',
    completed: false,
    content: "Create a comprehensive marketing plan for the product launch.",
    dateSubmitted: "10/02/2024",
    dueDate: "10/20/2024",
    origin: "Marketing Department, 4th Floor",
    destination: "CEO Office, 5th Floor"
  },
  {
    title: 'Update Website Design',
    completed: false,
    content: "Redesign the company website to improve user experience.",
    dateSubmitted: "9/30/2024",
    dueDate: "10/25/2024",
    origin: "Design Team, 1st Floor",
    destination: "IT Department, 6th Floor"
  },
  {
    title: 'Submit Legal Documents',
    completed: true,
    content: "Submit all legal documents for the new partnership.",
    dateSubmitted: "9/15/2024",
    dueDate: "9/20/2024",
    origin: "Legal Department, Main Office",
    destination: "Partner Company, Downtown Office"
  },
  {
    title: 'Conduct Product Testing',
    completed: false,
    content: "Run the final testing phase for the new software release.",
    dateSubmitted: "10/15/2024",
    dueDate: "10/30/2024",
    origin: "Development Lab, Main Campus",
    destination: "QA Department, Testing Facility"
  }
];

const props = defineProps({
    
})
</script>

<template>
    <Card>
        <section class="m-2">
            <TextBlock 
                text-content="Tasks" 
                content-class="text-2xl font-bold text-left"
            />
            <h3 class="mb-2">Due</h3>
            <section class="border shadow cursor-pointer" v-for="task in tasks.filter(task => !task.completed)">
                <TextBlock 
                    :label="task.title"
                    :text-content="task.content"
                    content-class="text-m"
                />
                <div class="flex-is-jb">
                    <p>Submitted: {{ task.dateSubmitted }}</p>
                    <p>Due: {{ task.dueDate }}</p>

                </div>
            </section>
            <h3 class="mb-2">Completed</h3>
            <section class="border shadow" v-for="task in tasks.filter(task => task.completed)">
                <TextBlock 
                    :label="task.title"
                    label-class="text-xl font-bold"
                    :text-content="task.content"
                />
            </section>
        </section>
    </Card>
</template>