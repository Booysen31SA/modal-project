<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email" />

    <label>Password</label>
    <input type="password" required v-model="password" />
    <div v-if="passwordError" class="error"> {{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="Web Developer">Web Developer</option>
      <option value="Web Designer">Web Designer</option>
    </select>

    <label>Skills: <span class="instruction">(Press enter to add skill)</span></label>
    <input type="text" v-model="tempSkill" v-on:keyup.enter="addSkill"/>
    <div v-for="skill in skills" :key="skill" class="pill">
        <span @click="deleteSkill(skill)">{{ skill}}</span>
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept Terms and Conditions</label>
    </div>

    <div class="submit">
        <button type="submit" @click="submit">Create an account</button>
    </div>
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms: {{ terms }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      tempSkill: '',
      skills: [],
      passwordError: ''
    };
  },
  methods:{
    addSkill(e){
        console.log(e);
        if(this.tempSkill){
            if(!this.skills.includes(this.tempSkill)){
                this.skills.push(this.tempSkill);
            }
            this.tempSkill = '';
        }
    },
    deleteSkill(skill){
        this.skills = this.skills.filter((item) => {
            return skill !== item;
        });
    },
    handleSubmit(){
        console.log('Form submitted');
        this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 characters';

        if(!this.passwordError){
            console.log('Email: ', this.email);
            console.log('Password: ', this.password);
            console.log('Role: ', this.role);
            console.log('Skills: ', this.skills);
            console.log('Terms accepted: ', this.terms);
        }
    }
  }
}
</script>

<style>
.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
</style>