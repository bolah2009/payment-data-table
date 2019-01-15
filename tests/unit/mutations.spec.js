import mutations from "@/store/mutations.js";

describe("SET_PAYMENTS_DATA", () => {
  it("adds array of data to the PaymentsData array of the state", () => {
    const data = [{"Amount":"820.96","Date":"2019-03-06T13:24:31-08:00","Description":"Pellentesque ut ipsum","ID":"DB983FEF-AF70-7D2E-86BA-0C2AE749E729","Name":"Dawn Alford"}]
    const state = {
        PaymentsData: []
    };

    mutations.SET_PAYMENTS_DATA(state, data );

    expect(state.PaymentsData).toEqual(
       [{"Amount":"820.96","Date":"2019-03-06T13:24:31-08:00","Description":"Pellentesque ut ipsum","ID":"DB983FEF-AF70-7D2E-86BA-0C2AE749E729","Name":"Dawn Alford"}]
    );
  });
});

describe("updateFilter", () => {
    it("updates the filter value of the state", () => {
        const data = "name";
        const state = {
         filter: "main"
        };
  
        mutations.updateFilter(state, data );
  
        expect(state.filter).toEqual(
          "name"
        );
    });
  });

 