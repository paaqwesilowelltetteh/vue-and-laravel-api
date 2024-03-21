import { ref } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';

axios.defaults.baseURL = 'http://skillApi-laravel-11.test/api/v1/'

export default function useSkills() {
    const skills = ref([]);
    const skill = ref({});
    const errors = ref([]);
    const router = useRouter();

    const getSkills = async () => {
        const response = await axios.get('skills');
        skills.value = response.data.data;
    }

    const getSkill = async (id) => {
        const response = await axios.get(`skills/${id}`);
        skill.value = response.data.data;
    }

    const storeSkill = async (data) => {
        try {
            await axios.post('skills', data);
            await router.push({ name: 'SkillIndex' });
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }

        }
    }

    const updateSkill = async (id) => {
        try {
            await axios.put(`skills/${id}`, skill.value);
            await router.push({ name: 'SkillIndex' });
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }

    const destroySkill = async (id) => {
        if (!window.confirm('Are you sure you want to delete this skill?')) return;
        try {
            await axios.delete(`skills/${id}`);
            await router.push({ name: 'SkillIndex' });
        } catch (error) {
            console.error(error);
        }
    }

    return {
        skill,
        skills,
        getSkill,
        getSkills,
        storeSkill,
        updateSkill,
        destroySkill,
        errors
    }
}