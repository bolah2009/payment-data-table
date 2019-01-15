import axios from "axios";

export default {
  loadPaymentsData(context) {
    axios
      .get("https://payment-log.firebaseio.com/.json")
      .then(response => {
        context.commit("SET_PAYMENTS_DATA", response.data);
      })
      .catch(err => console.log(err));
  }
};
