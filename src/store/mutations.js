import axios from "axios";

export default {
  updateSearch(state, search) {
    state.search = search;
  },
  editData(state, newDescription) {
    state.EditData.Description = newDescription;
    const descriptionID = state.EditData.ID;
    var key;
    let data = state.PaymentsData;
    for (let i = 0; i < data.length; i++) {
      let ID = data[i].ID;
      if (ID === descriptionID) {
        data[i].Description = newDescription;
        key = i;
      }
    }
    const url = "https://payment-log.firebaseio.com/" + key + ".json";
    axios.put(url, state.EditData);
  },

  getData(state, event) {
    let data = [];
    let target = event.srcElement || event.target;
    while (target && target.nodeName !== "TR") {
      target = target.parentNode;
    }
    if (target) {
      const cells = target.getElementsByTagName("td");
      for (let i = 0; i < cells.length; i++) {
        data.push(cells[i].textContent);
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (state.HeaderData[i] === "Amount") {
        state.EditData[state.HeaderData[i]] = data[i].slice(1);
      } else {
        state.EditData[state.HeaderData[i]] = data[i];
      }
    }
  },

  updateFilter(state, filter) {
    state.filter = filter;
  },

  SET_PAYMENTS_DATA(state, data) {
    state.PaymentsData = data;
  },

  updateSorted(state, value) {
    state.sorted = value;
    if (value === "id-0") {
      state.PaymentsData = state.PaymentsData.sort(
        (a, b) => (a.ID > b.ID ? 1 : -1)
      );
    } else if (value === "id-1") {
      state.PaymentsData = state.PaymentsData.sort(
        (a, b) => (a.ID < b.ID ? 1 : -1)
      );
    } else if (value === "name-0") {
      state.PaymentsData = state.PaymentsData.sort(
        (a, b) => (a.Name.toUpperCase() > b.Name.toUpperCase() ? 1 : -1)
      );
    } else if (value === "name-1") {
      state.PaymentsData = state.PaymentsData.sort(
        (a, b) => (a.Name.toUpperCase() < b.Name.toUpperCase() ? 1 : -1)
      );
    } else if (value === "desc-0") {
      state.PaymentsData = state.PaymentsData.sort(
        (a, b) =>
          a.Description.toUpperCase() > b.Description.toUpperCase() ? 1 : -1
      );
    } else if (value === "desc-1") {
      state.PaymentsData = state.PaymentsData.sort(
        (a, b) =>
          a.Description.toUpperCase() < b.Description.toUpperCase() ? 1 : -1
      );
    } else if (value === "date-0") {
      state.PaymentsData = state.PaymentsData.sort(
        (b, a) => new Date(a.Date) - new Date(b.Date)
      );
    } else if (value === "date-1") {
      state.PaymentsData = state.PaymentsData.sort(
        (a, b) => new Date(a.Date) - new Date(b.Date)
      );
    } else if (value === "amount-0") {
      state.PaymentsData = state.PaymentsData.sort(
        (a, b) => a.Amount - b.Amount
      );
    } else if (value === "amount-1") {
      state.PaymentsData = state.PaymentsData.sort(
        (b, a) => a.Amount - b.Amount
      );
    }
  }
};
