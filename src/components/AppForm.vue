<template>
<div class="form-wrap">
  <h1>
      <img src="@/assets/covid-19.jpg" alt="covid-19" >
    </h1>
  <form action="#" method="POST" class="form">
    <div>
      <label for="population" aria-label="population">population</label>
      <input id="population"  name="population" data-population>
    </div>
    <div>
      <label for="time-to-elapse" aria-label="Time to Elapse">Time to Elapse</label>
      <input id="time-to-elapse" name="time-to-elapse" data-time-to-elapse>
    </div>
    <div>
      <label for="reported-cases" aria-label="Reported Cases">Reported Cases</label>
      <input id="reported-cases" name="reported-cases" data-reported-cases>
    </div>
    <div>
      <label for="total-hospital-beds" aria-label="Total Hospital Beds">Total Hospital Beds</label>
      <input id="total-hospital-beds" name="total-hospital-beds" data-total-hospital-beds>
    </div>
    <div>
      <label for="period-type" aria-label="population">population</label>
      <select id="period-type" name="period-type" data-period-type>
          <option>-select-</option>
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
          <option value="months">Months</option>
      </select>
    </div>
    <input type="button" value="Submit" data-go-estimate>
    </form>
  </div>
</template>
<script>
export default {
  name: 'AppForm'
};
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
  }
img {
    width: 6em;
    max-width: 6em;
    margin: 1em auto;
  }

  .form-wrap {
    width: 100%;
    max-width: 26em;
  }

  .form {
    width: 92%;
    margin: 0em auto;
  }

  input,
  select {
    margin: 0.8em auto;
    width: 100%;
  }

  input[type="button"] {
    width: 10em;
    margin: 1em auto;
  }
</style>
