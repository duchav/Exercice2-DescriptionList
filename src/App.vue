<script setup>
const firstPerson = {
  gender: 'female',
  firstname: 'Emily',
  lastname: 'Parker',
  age: 24,
  job: 'Teacher',
  hobbies: ['read books', 'go hiking'],
  pet: {
    name: 'Whiskers',
    age: 2,
    species: 'ferret',
  },
}

const secondPerson = {
  gender: 'male',
  firstname: 'Marcus',
  lastname: 'Bennett',
  age: 38,
  job: 'Architect',
  hobbies: ['watch bird', 'play chess'],
  pet: {
    name: 'Nala',
    age: 6,
    species: 'dog',
  },
}

const thirdPerson = {
  gender: 'female',
  firstname: 'Sophia',
  lastname: 'Rodriguez',
  age: 31,
  job: 'Environmental scientist',
  hobbies: ['play guitar', 'bake cakes'],
  pet: {
    name: 'Paws',
    age: 3,
    species: 'cat',
  },
}

const fourthPerson = {
  gender: 'male',
  firstname: 'Oliver',
  lastname: 'Hughes',
  age: 56,
  job: 'Carpenter',
  hobbies: ['paint', 'ride horses'],
  pet: {
    name: 'Bubble',
    age: 4,
    species: 'snake',
  },
}
const fithPerson = {
  gender: 'male',
  firstname: 'Gerard',
  lastname: 'Clement',
  age: 73,
  job: 'Engineer',
  hobbies: ['read books', 'go hiking'],
  pet: {
    name: 'boule',
    age: 5,
    species: 'cocker',
  },
}
</script>

<template>
  <main>
    <div class="container">
      <h1>Description list</h1>

      <div class="mesfiches">
        <div class="fiche">
          <img src="./assets/imgs/emily-parker.jpg" alt="emily" />
          <p class="name">{{ firstPerson.firstname }} {{ firstPerson.lastname }}</p>
          <p>
            {{ firstPerson.gender === 'female' ? 'She' : 'He' }} is a {{ firstPerson.age }}-year-old
            {{ firstPerson.job.toLowerCase() }}
          </p>
          <p>
            Outside of work, {{ firstPerson.firstname }} likes to {{ firstPerson.hobbies[0] }} and
            {{ firstPerson.hobbies[1] }}.
          </p>
          <p>
            At home, {{ firstPerson.gender === 'female' ? 'her' : 'his' }} lively companion is
            {{ firstPerson.pet.name }} a {{ firstPerson.pet.age }}-years-old
            {{ firstPerson.pet.species }}
          </p>
          <p class="myHeart"><font-awesome-icon :icon="['fas', 'heart']" /></p>
        </div>
        <div class="fiche">
          <img src="./assets/imgs/marcus-bennett.jpg" alt="emily" />
          <p class="name">{{ secondPerson.firstname }} {{ secondPerson.lastname }}</p>
          <p>
            {{ secondPerson.gender === 'female' ? 'She' : 'He' }} is a
            {{ secondPerson.age }}-year-old {{ secondPerson.job.toLowerCase() }}
          </p>
          <p>
            Outside of work, {{ secondPerson.firstname }} likes to {{ secondPerson.hobbies[0] }} and
            {{ secondPerson.hobbies[1] }}.
          </p>
          <p>
            At home, {{ secondPerson.gender === 'female' ? 'her' : 'his' }} lively companion is
            {{ secondPerson.pet.name }} a {{ secondPerson.pet.age }}-years-old
            {{ secondPerson.pet.species }}
          </p>
          <p class="myHeart"><font-awesome-icon :icon="['fas', 'heart']" /></p>
        </div>
        <div class="fiche">
          <img src="./assets/imgs/sophia-rodriguez.jpg" alt="emily" />
          <p class="name">{{ thirdPerson.firstname }} {{ thirdPerson.lastname }}</p>
          <p>
            {{ thirdPerson.gender === 'female' ? 'She' : 'He' }} is a {{ thirdPerson.age }}-year-old
            {{ thirdPerson.job.toLowerCase() }}
          </p>
          <p>
            Outside of work, {{ thirdPerson.firstname }} likes to {{ thirdPerson.hobbies[0] }} and
            {{ thirdPerson.hobbies[1] }}.
          </p>
          <p>
            At home, {{ thirdPerson.gender === 'female' ? 'her' : 'his' }} lively companion is
            {{ thirdPerson.pet.name }} a {{ thirdPerson.pet.age }}-years-old
            {{ thirdPerson.pet.species }}
          </p>
          <p class="myHeart"><font-awesome-icon :icon="['fas', 'heart']" /></p>
        </div>
        <div class="fiche">
          <img src="./assets/imgs/olivier-hughes.jpg" alt="emily" />
          <p class="name">{{ fourthPerson.firstname }} {{ fourthPerson.lastname }}</p>
          <p>
            {{ fourthPerson.gender === 'female' ? 'She' : 'He' }} is a
            {{ fourthPerson.age }}-year-old {{ fourthPerson.job.toLowerCase() }}
          </p>
          <p>
            Outside of work, {{ fourthPerson.firstname }} likes to {{ fourthPerson.hobbies[0] }} and
            {{ fourthPerson.hobbies[1] }}.
          </p>
          <p>
            At home, {{ fourthPerson.gender === 'female' ? 'her' : 'his' }} lively companion is
            {{ fourthPerson.pet.name }} a {{ fourthPerson.pet.age }}-years-old
            {{ fourthPerson.pet.species }}
          </p>
          <p class="myHeart"><font-awesome-icon :icon="['fas', 'heart']" /></p>
        </div>
        <div class="fiche">
          <img src="./assets/imgs/olivier-hughes.jpg" alt="emily" />
          <p class="name">{{ fithPerson.firstname }} {{ fithPerson.lastname }}</p>
          <p>
            {{ fithPerson.gender === 'female' ? 'She' : 'He' }} is a {{ fithPerson.age }}-year-old
            {{ fithPerson.job.toLowerCase() }}
          </p>
          <p>
            Outside of work, {{ fithPerson.firstname }} likes to {{ fithPerson.hobbies[0] }} and
            {{ fithPerson.hobbies[1] }}.
          </p>
          <p>
            At home, {{ fithPerson.gender === 'female' ? 'her' : 'his' }} lively companion is
            {{ fithPerson.pet.name }} a {{ fithPerson.pet.age }}-years-old
            {{ fithPerson.pet.species }}
          </p>
          <p class="myHeart"><font-awesome-icon :icon="['fas', 'heart']" /></p>
        </div>
        <!-- <div class="fiche">fiche 5</div> -->
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  /* border: 1px solid black; */
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 20px;
}
.mesfiches {
  display: flex;
  /* border: 1px solid black; */
  justify-content: center;
  flex-wrap: wrap;
}
.fiche {
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 330px;
  padding: 10px;
  margin: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 7px grey;
  font-size: 12px;
  line-height: 14px;
  flex-shrink: 0;
  position: relative;
  /* border: 1px solid yellow; */
}
p {
  margin-bottom: 10px;
}

.name {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
}
img {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
  object-position: top;
}
.myHeart {
  position: absolute;
  bottom: 0px;
  right: 10px;
  font-size: 20px;
  color: grey;
  font-size: 20px;
  /* border: 1px solid blue; */
}
@media (max-width: 538px) {
  h1 {
    /* border: 1px solid black; */
    font-size: 30px;
  }
}
</style>
