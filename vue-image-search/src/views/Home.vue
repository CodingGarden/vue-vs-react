<template>
  <div class="home">
    <form @submit.prevent="formSubmitted">
      <label>Search</label>
      <input v-model="search" placeholder="enter a search term..." />
      <button>Submit</button>
    </form>
    <img
      v-if="loading"
      src="https://cdn.betterttv.net/emote/5e7a8f53d112fc37257506ee/2x"
      alt="loading"
    />
    <img
      style="width: 100%"
      v-for="image in images"
      :key="image.image"
      :src="image.image"
      :alt="image.title"
    />
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue';

const loading = ref(false);
const search = ref('');
const images = ref([]);

const formSubmitted = async () => {
  loading.value = true;
  images.value = [];
  const response = await fetch(
    `https://nature-image-api.vercel.app/search?q=${search.value}`
  );
  const json = await response.json();
  images.value = json.images;
  loading.value = false;
};

// export default {
//   setup() {
//     const state = reactive({
//       loading: false,
//       search: '',
//       images: [],
//     });

//     const formSubmitted = async () => {
//       state.loading = true;
//       state.images = [];
//       const response = await fetch(
//         `https://nature-image-api.vercel.app/search?q=${state.search}`
//       );
//       const json = await response.json();
//       state.images = json.images;
//       state.loading = false;
//     };

//     return {
//       ...toRefs(state),
//       formSubmitted,
//     };
//   },
//   setup() {
//     const loading = ref(false);
//     const search = ref('');
//     const images = ref([]);

//     const formSubmitted = async () => {
//       loading.value = true;
//       images.value = [];
//       const response = await fetch(
//         `https://nature-image-api.vercel.app/search?q=${search.value}`
//       );
//       const json = await response.json();
//       images.value = json.images;
//       loading.value = false;
//     };

//     return {
//       loading,
//       search,
//       images,
//       formSubmitted,
//     };
//   },
//   data: () => ({
//     search: "",
//     loading: false,
//     images: [],
//   }),
//   methods: {
//     async formSubmitted() {
//       this.loading = true;
//       this.images = [];
//       const response = await fetch(
//         `https://nature-image-api.vercel.app/search?q=${this.search}`
//       );
//       const json = await response.json();
//       this.images = json.images;
//       this.loading = false;
//     },
//   },
//   render() {
//     return (
//       <div class="home">
//         <form onSubmit={this.formSubmitted}>
//           <label>Search</label>
//           <input v-model={this.search} placeholder="enter a search term..." />
//           <button>Submit</button>
//         </form>
//         {this.loading ? (
//           <img
//             src="https://cdn.betterttv.net/emote/5e7a8f53d112fc37257506ee/2x"
//             alt="loading"
//           />
//         ) : null}
//         {this.images.map((image) => (
//           <img
//             style="width: 100%"
//             key={image.image}
//             src={image.image}
//             alt={image.title}
//           />
//         ))}
//       </div>
//     )
//   },
// };
</script>
