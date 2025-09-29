<script setup>
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Card from "primevue/card";
</script>

<template>
  <div data-aos="fade-up">
    <h1 class="page-title">Contact</h1>
    <Card>
      <template #content>
        <form name="contact" netlify>
          <div class="form-container">
            <div class="field">
              <label for="name">Name</label>
              <InputText id="name" name="name" class="w-full" />
            </div>
            <div class="field">
              <label for="email">Email</label>
              <InputText id="email" name="email" class="w-full" />
            </div>
            <div class="field">
              <label for="message">Message</label>
              <Textarea id="message" name="message" rows="5" class="w-full" />
            </div>
            <Button label="Send Message" type="submit" class="mt-4 w-full" />
          </div>
        </form>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
}
.form-container .field {
  margin-bottom: 1.5rem;
}
.form-container .field label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
</style>
