import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    PaymentsData: [],
    HeaderData: ["ID", "Name", "Description", "Date", "Amount"],
    search: "",
    filter: "main",
    sorted: "id-0",
    sortOptions: [
      { text: "ID (A-Z)", value: "id-0" },
      { text: "ID (Z-A)", value: "id-1" },
      { text: "Name (A-Z)", value: "name-0" },
      { text: "Name (Z-A)", value: "name-1" },
      { text: "Description (A-Z)", value: "desc-0" },
      { text: "Description (Z-A)", value: "desc-1" },
      { text: "Date (New-Old)", value: "date-0" },
      { text: "Date (Old-New)", value: "date-1" },
      { text: "Amount (Small-Large)", value: "amount-0" },
      { text: "Amount (Large-Small)", value: "amount-1" }
    ],
    EditData: { ID: "", Name: "", Description: "", Date: "", Amount: "" }
  },
  getters: getters,
  mutations: mutations,
  actions: actions
});
