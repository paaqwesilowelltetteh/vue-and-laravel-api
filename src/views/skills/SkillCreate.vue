<script setup>
import { reactive } from 'vue';
import useSkills from '../../composables/skills';

const { storeSkill, errors } = useSkills();

const form = reactive({
    name: "",
    slug: "",
    position: "",
    description: "",
});

</script>
<template>
    <div class="mt-12">

        <form class="max-w-md p-4 mx-auto bg-white rounded-md" @submit.prevent="storeSkill(form)">
            <div class="mb-4">
                <label for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="name" v-model="form.name"
                    class="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
                <label for="slug"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>
                <input type="text" id="slug" v-model="form.slug"
                    class="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
                <label for="position"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                <input type="text" id="position" v-model="form.position"
                    class="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
                <label for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <input type="text" id="description" v-model="form.description"
                    class="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div class="mt-4">
                <button type="submit" class="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-700">
                    Store Skill
                </button>
            </div>
        </form>

    </div>
</template>
