import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constants";

export const getFlights = createAsyncThunk("flights/getFlights", async () => {
  //api isteği
  try {
    const res = await axios.request(options);
    //console.log(res.data);
    //gelen veriyi formatla dizi içerisindeki dizileri nesnelere çevir

    const formatted = res.data.aircraft.map((item) => ({
      id: item[0],
      code: item[1],
      lat: item[2],
      lng: item[3],
    }));
    //console.log(formatted);
    //aksiyonun payloadı olarak formatlanan veriyi ekle
    return formatted;
  } catch (error) {
    console.log(error.message);
  }
});
