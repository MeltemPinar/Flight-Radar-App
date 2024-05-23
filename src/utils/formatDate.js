import moment from "moment/moment";
import "moment/locale/tr";

// unix formatındaki veriyi normal fomata çeviren fonksiyon
const formatDate = (unix_time) => {
  // unix fomatındaki saniye verisini date ile kullanılabilmek için 1000 ile çarpıp milisaniyeye çevirdik
  const date = new Date(unix_time * 1000);
  // tarihi moment ile formatla
  return moment(date).calendar();
};
export default formatDate;
