<script setup>
import useSkills from '../../composables/skills';
import { onMounted } from 'vue';
import 'vuesax/dist/vuesax.css'



const { skills, getSkills } = useSkills();

onMounted(() => getSkills());
</script>

<template>
    <div class="m-t-12">
        <div class="flex justify-end p-2 m-2">
            <RouterLink :to="{ name: 'SkillCreate' }"
                class="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-700">New Skill
            </RouterLink>
        </div>
        <div class="relative overflow-x-auto rounded-lg">
            <table class="w-full text-sm text-left text-white text-gray-500 rounded rtl:text-right dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Position
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Slug
                        </th>
                        <th scope="col" class="px-6 py-3">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="skill in skills" :key="skill.id"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ skill.name }}
                        </th>
                        <td class="px-6 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                            {{ skill.position }}
                        </td>
                        <td class="px-6 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                            {{ skill.description }}
                        </td>
                        <td class="px-6 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                            {{ skill.slug }}
                        </td>
                        <td class="px-6 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                            Edit/Delete
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>