<template>
  <div>
    <label for="name">First Name</label>
    <input
      v-bind:value="message"
      type="text"
      id="name"
      name="name"
      class="input"
    />
    <label for="message">First Name</label>
    <input
      v-bind:value="message"
      type="text"
      id="message"
      name="message"
      class="input"
    />
  </div>
</template>

<script>

let URI = "https://asavbrm.webhook.office.com/webhookb2/f0efdf63-0138-4431-8388-a8f03cdf91e5@c9b72b2a-0b34-4425-b9c7-c2459ec0151f/IncomingWebhook/fd6ee5a57b424686ab80a01aefea6053/90add0f7-7cb5-49d6-a0e3-5aa62dc999da";

let BODY = {
  "@type": "ActionCard",
  "name": "Comment",
  "inputs": [
    {
      "@type": "TextInput",
      "id": "comment",
      "isMultiline": true,
      "title": "Input's title property"
    }
  ],
  "actions": [
    {
      "@type": "HttpPOST",
      "name": "Action's name prop.",
      "target": "https://yammer.com/comment?postId=123",
      "body": "comment={{comment.value}}"
    }
  ]
}

export default {
  data() {
    return {
      message: "",
      url: "",
    };
  },

  created() {
    console.log(URI)
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(BODY),
    };
    fetch(URI, requestOptions)
      .then((response) => response.json())
      .then((data) => (this.postId = data.id));
    },
};
</script>

<style scoped>
</style>
