<template>
  <div class="form-popup" id="myForm">
    <form class="form-container">
      <h1>Edit Description</h1>
      <p> ID: {{EditData.ID}}</p>
      <p> Name: {{EditData.Name}} </p>
      <p> Date: {{EditData.Date}} </p>
      <p> Amount: ${{EditData.Amount}} </p>
      <label for="desc"><b>Description </b> <em class="edit-info"> edit description</em> </label>
      <input type="text" id="editDesc" placeholder="Enter Description" :value="EditData.Description" name="desc" required>
      <div id="verify">
        <p> Are you sure you want to save changes ? </p>
        <div class="verify-btn-container">
          <button type="submit" class="verify-btn" @click="submitForm">Yes <i class="fas fa-check"></i></button>
          <button type="submit" class="verify-btn cancel" @click="hideVerify">No <i class="fas fa-times"></i></button>
        </div>
      </div>
      <button type="submit" class="btn" @click="confirmForm">Save Changes <i class="fas fa-check"></i></button>
      <button type="submit" class="btn cancel" @click="closeForm">Cancel <i class="fas fa-times"></i></button>
    </form>
  </div>
</template>

<script>
  export default {
    computed: {
      EditData() {
        return this.$store.state.EditData
      }
    },
    methods: {
      confirmForm: function() {
        event.preventDefault()
        document.getElementById("verify").style.display = "block";
      },
      closeForm: function() {
        event.preventDefault()
        document.getElementById("verify").style.display = "none";
        document.getElementById("myForm").style.display = "none";
      },
      submitForm: function(event) {
        event.preventDefault()
        let newDescription = document.getElementById("editDesc").value
        this.$store.commit('editData', newDescription)
        document.getElementById("verify").style.display = "none";
        document.getElementById("myForm").style.display = "none";
      },
      hideVerify: function() {
        event.preventDefault()
        document.getElementById("verify").style.display = "none";
      }
    }
  }
</script>

<style scoped>
  #myForm {
    box-sizing: border-box;
  }

  .form-popup {
    display: none;
    position: fixed;
    bottom: 0;
    right: 25%;
    left: 25%;
    border: 3px solid #f1f1f1;
    z-index: 9;
    max-width: 300px;
  }

  #verify {
    display: none;
  }

  .form-container {
    width: 100%;
    color: #1976D2;
    padding: 10px;
    background-color: white;
  }

  .form-container input[type=text] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
  }

  .form-container input[type=text]:focus {
    background-color: #ddd;
    outline: none;
  }

  .form-container .btn {
    background-color: #4CAF50;
    color: white;
    margin: auto;
    margin-bottom: 8px;
    display: block;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    border-radius: 40%;
  }

  .form-container .verify-btn {
    background-color: #4CAF50;
    color: white;
    padding: 8px;
    border: none;
    cursor: pointer;
    width: 30%;
    margin: 4px;
    border-radius: 40%;
    opacity: 0.8;
  }

  .form-container .cancel {
    background-color: red;
  }

  .form-container .btn:hover,
  .open-button:hover,
  .verify-btn:hover {
    opacity: 1;
  }

  .edit-info {
    color: red;
  }
</style>