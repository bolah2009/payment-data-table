export default {
  searchedData: state => {
    let data = state.PaymentsData;
    let PaymentsArray = [];
    for (let key in data) {
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      let date = new Date(data[key].Date);
      data[key].Date = date.toLocaleDateString("en-US", options);
      PaymentsArray.push(data[key]);
    }
    if (state.filter === "main") {
      return PaymentsArray.filter(data => {
        let regex = new RegExp(state.search, "i");
        return data.Name.match(regex) || data.Description.match(regex);
      });
    } else if (state.filter === "name") {
      return PaymentsArray.filter(data => {
        let regex = new RegExp(state.search, "i");
        return data.Name.match(regex);
      });
    } else if (state.filter === "desc") {
      return PaymentsArray.filter(data => {
        let regex = new RegExp(state.search, "i");
        return data.Description.match(regex);
      });
    } else if (state.filter === "id") {
      return PaymentsArray.filter(data => {
        let regex = new RegExp(state.search, "i");
        return data.ID.match(regex);
      });
    } else if (state.filter === "amount") {
      return PaymentsArray.filter(data => {
        let regex = new RegExp(state.search, "i");
        return data.Amount.match(regex);
      });
    }
  },
  oldestData: (state, getters) => {
    const data = getters.searchedData.sort(
      (a, b) => new Date(a.Date) - new Date(b.Date)
    );
    const oldest = data[0].Date;
    const oldestID = data[0].ID;
    return { data: data, oldest: oldest, ID: oldestID };
  },
  newestData: (state, getters) => {
    const data = getters.searchedData.sort(
      (b, a) => new Date(a.Date) - new Date(b.Date)
    );
    const newest = data[0].Date;
    const newestID = data[0].ID;
    return { newest: newest, ID: newestID };
  },
  lowestData: (state, getters) => {
    const data = getters.searchedData.sort((a, b) => a.Amount - b.Amount);
    const lowest = data[0].Amount;
    const lowestID = data[0].ID;
    return { lowest: lowest, ID: lowestID };
  },
  highestData: (state, getters) => {
    const data = getters.searchedData.sort((b, a) => a.Amount - b.Amount);
    const highest = data[0].Amount;
    const highestID = data[0].ID;
    return { highest: highest, ID: highestID };
  },
  totalData: (state, getters) => {
    let initialValue = 0;
    const sum = getters.searchedData.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.Amount),
      initialValue
    );
    return sum.toFixed(2);
  }
};
